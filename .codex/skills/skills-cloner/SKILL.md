---
name: skills-cloner
description: Sync skills from .github/skills into .codex/skills and .claude/skills whenever a skill is created, updated, or deleted by cloning changed skill folders. User can request to manually run this skill by saying "Sync skills". or "Clone skills". or "align skills".
---

# Skills Cloner

- After any skill create, update, or delete, run ./scripts/clone-skills.js to sync .codex/skills and .claude/skills.
- Compare skill folder contents and rewrite only changed skills.
- Remove skill folders from .codex/skills and .claude/skills that no longer exist in .github/skills.
- Optionally pass one or more skill names to limit syncing.

## Usage

The script is executable and can be run directly (no need to prefix with `node`).

- ./scripts/clone-skills.js
- ./scripts/clone-skills.js skill-name another-skill
