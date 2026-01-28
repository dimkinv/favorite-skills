---
name: skills-cloner
description: Sync skills from .github/skills into .codex/skills and .claude/skills whenever a skill is created, updated, or deleted by cloning changed skill folders. User can request to manually run this skill by saying "Sync skills". or "Clone skills". or "align skills".
---

# Skills Cloner

- Run scripts/clone-skills.js after any skill create, update, or delete.
- Compare skill folder contents and rewrite only changed skills.
- Remove skill folders from .codex/skills and .claude/skills that no longer exist in .github/skills.
- Optionally pass one or more skill names to limit syncing.

## Usage

- ./scripts/clone-skills.js
- ./scripts/clone-skills.js skill-name another-skill
