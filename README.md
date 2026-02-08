# Skills Repository

This repository contains reusable Agent Skills stored under `.github/skills`.

## Available skills

- **agent-memory**
  - Description: Agent-first persistent memory for storing, retrieving, and maintaining human-readable notes across conversations. The agent should proactively capture important decisions and work completed; users can also ask to remember, save, note, recall, remind, or review prior work.
  - Location: .github/skills/agent-memory

- **docx**
  - Description: Comprehensive document creation, editing, and analysis with support for tracked changes, comments, formatting preservation, and text extraction.
  - Location: .github/skills/docx

- **markdown-to-pdf**
  - Description: Create a PDF from a local Markdown file using a local Python script (no remote services).
  - Location: .github/skills/markdown-to-pdf

- **skills-cloner**
  - Description: Sync skills from .github/skills into .agents/skills and .claude/skills after any skill is created, updated, or deleted. Run .github/skills/skills-cloner/scripts/clone-skills.js to align folders.
  - Location: .github/skills/skills-cloner

- **skill-creator**
  - Description: Create, update, and package Agent Skills. Use when asked to design a new skill, refine an existing skill, or set up the required SKILL.md structure, frontmatter, and resources.
  - Location: .github/skills/skill-creator

- **skill-installer**
  - Description: Install a skill from a GitHub URL that points to a skill folder by downloading it into .github/skills.
  - Location: .github/skills/skill-installer

- **skeleton-generator**
  - Description: Create minimal TypeScript project skeletons for backend (Node.js), React (Vite), or Next.js with deps, file tree, and AGENTS.md handling.
  - Location: .github/skills/skeleton-generator

## How to use


Each skill folder contains a SKILL.md file with instructions and any supporting scripts or resources for that skill.

## Add skills to your project (one-liners)

Run these from the folder where you want the skill folders to appear.

### macOS/Linux

```
curl -L https://github.com/dimkinv/favorite-skills/archive/refs/heads/main.tar.gz | tar -xzf - --strip-components=1 "favorite-skills-main/.claude" "favorite-skills-main/.agents" "favorite-skills-main/.github"
```

### Windows PowerShell

```
iwr https://github.com/dimkinv/favorite-skills/archive/refs/heads/main.tar.gz -OutFile repo.tgz; tar -xzf repo.tgz --strip-components=1 "favorite-skills-main/.claude" "favorite-skills-main/.agents" "favorite-skills-main/.github"; rm repo.tgz
```

### Windows CMD

```
curl -L https://github.com/dimkinv/favorite-skills/archive/refs/heads/main.tar.gz -o repo.tgz && tar -xzf repo.tgz --strip-components=1 "favorite-skills-main/.claude" "favorite-skills-main/.agents" "favorite-skills-main/.github" && del repo.tgz
```

Notes:
- The folders are hidden; use ls -a on macOS/Linux or dir /a on Windows to verify.
- If the default branch changes, replace main in the URL accordingly.
