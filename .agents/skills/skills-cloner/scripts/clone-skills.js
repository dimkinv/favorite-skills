#!/usr/bin/env node

const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const repoRoot = path.resolve(__dirname, "../../../..");
const sourceRoot = path.join(repoRoot, ".github/skills");
const destinationRoots = [
  path.join(repoRoot, ".codex/skills"),
  path.join(repoRoot, ".claude/skills"),
];

const requestedSkills = process.argv.slice(2);

if (requestedSkills.includes("-h") || requestedSkills.includes("--help")) {
  console.log(`Usage:
  ./scripts/clone-skills.js [skill-name ...]
  node ./scripts/clone-skills.js [skill-name ...]
`);
  process.exit(0);
}

async function listSkillDirs(rootDir) {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
}

async function listFilesRecursive(dir, baseDir = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFilesRecursive(fullPath, baseDir)));
    } else if (entry.isFile()) {
      files.push(path.relative(baseDir, fullPath));
    }
  }

  return files;
}

async function hashDirectory(dir) {
  const hash = crypto.createHash("sha256");
  const files = (await listFilesRecursive(dir)).sort();

  for (const relativePath of files) {
    const fullPath = path.join(dir, relativePath);
    const content = await fs.readFile(fullPath);
    hash.update(relativePath);
    hash.update("\0");
    hash.update(content);
    hash.update("\0");
  }

  return hash.digest("hex");
}

async function removeIfExists(targetPath) {
  await fs.rm(targetPath, { recursive: true, force: true });
}

async function copySkill(sourcePath, destinationPath) {
  await fs.cp(sourcePath, destinationPath, { recursive: true });
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function syncSkills() {
  const availableSkills = new Set(await listSkillDirs(sourceRoot));
  const skillsToProcess = requestedSkills.length > 0 ? requestedSkills : [...availableSkills];

  for (const destinationRoot of destinationRoots) {
    await ensureDir(destinationRoot);

    if (requestedSkills.length === 0) {
      const destinationSkills = await listSkillDirs(destinationRoot);
      const toRemove = destinationSkills.filter((skill) => !availableSkills.has(skill));
      for (const skill of toRemove) {
        await removeIfExists(path.join(destinationRoot, skill));
        console.log(`Removed ${skill} from ${destinationRoot}`);
      }
    } else {
      const missing = skillsToProcess.filter((skill) => !availableSkills.has(skill));
      for (const skill of missing) {
        await removeIfExists(path.join(destinationRoot, skill));
        console.log(`Removed ${skill} from ${destinationRoot}`);
      }
    }

    for (const skill of skillsToProcess) {
      if (!availableSkills.has(skill)) {
        continue;
      }

      const sourcePath = path.join(sourceRoot, skill);
      const destinationPath = path.join(destinationRoot, skill);

      let needsCopy = true;

      try {
        const [sourceHash, destinationHash] = await Promise.all([
          hashDirectory(sourcePath),
          hashDirectory(destinationPath),
        ]);
        needsCopy = sourceHash !== destinationHash;
      } catch (error) {
        if (error.code !== "ENOENT") {
          throw error;
        }
      }

      if (needsCopy) {
        await removeIfExists(destinationPath);
        await copySkill(sourcePath, destinationPath);
        console.log(`Synced ${skill} to ${destinationRoot}`);
      } else {
        console.log(`Skipped ${skill} for ${destinationRoot} (no changes)`);
      }
    }
  }
}

syncSkills().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
