# Skills Repository

This repository contains reusable Agent Skills stored under `.github/skills`.

## Available skills

- **agent-memory**
  - Description: Agent-first persistent memory for storing, retrieving, and maintaining human-readable notes across conversations. The agent should proactively capture important decisions and work completed; users can also ask to remember, save, note, recall, remind, or review prior work.
  - Location: .github/skills/agent-memory

- **docx**
  - Description: Comprehensive document creation, editing, and analysis with support for tracked changes, comments, formatting preservation, and text extraction.
  - Location: .github/skills/docx

- **skills-cloner**
  - Description: Sync skills from .github/skills into .codex/skills and .claude/skills after any skill is created, updated, or deleted. Run ./scripts/clone-skills.js directly to align folders.
  - Location: .github/skills/skills-cloner

- **skill-creator**
  - Description: Create, update, and package Agent Skills. Use when asked to design a new skill, refine an existing skill, or set up the required SKILL.md structure, frontmatter, and resources.
  - Location: .github/skills/skill-creator

- **skill-installer**
  - Description: Install a skill from a GitHub URL that points to a skill folder by downloading it into .github/skills.
  - Location: .github/skills/skill-installer

## How to use

Each skill folder contains a SKILL.md file with instructions and any supporting scripts or resources for that skill.
