# Skills Repository

This repository contains reusable Agent Skills stored under `.github/skills`.

## Available skills

- **agent-memory**
  - Description: Agent-first persistent memory for storing, retrieving, and maintaining human-readable notes across conversations. The agent should proactively capture important decisions and work completed; users can also ask to remember, save, note, recall, remind, or review prior work.
  - Location: .github/skills/agent-memory

- **markdown-to-pdf**
  - Description: Create a PDF from a local Markdown file using a local Python script (no remote services). Default body font size is 11pt.
  - Location: .github/skills/markdown-to-pdf

- **reviewer-process**
  - Description: Run when the user asks for a review; use git CLI to list staged and unstaged changes, read GUIDELINES.md in this skill folder, produce a fix list, and offer to apply fixes after confirmation.
  - Location: .github/skills/reviewer-process

- **skill-creator**
  - Description: Create, update, and package Agent Skills in the same skills folder where the skill-creator instructions live.
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
- `.agents/skills` and `.claude/skills` are relative links to `.github/skills`.
- If the default branch changes, replace main in the URL accordingly.
