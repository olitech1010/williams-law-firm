# Lessons Learned

> Persistent knowledge base for project incidents, decisions, and discoveries.
> Maintained by the Memory Manager agent (or Orchestrator when Memory Manager is not active).

---

## Format

Each entry follows this structure:

```markdown
### YYYY-MM-DD: [Brief Title]
**Context:** What was happening
**Issue:** What went wrong or what was discovered
**Resolution:** What was done to fix or address it
**Prevention:** How to avoid recurrence
**Tags:** [#tag1, #tag2]
```

---

## Entries

### 2026-10-13: Mechanical Scanner Blind Spot for AI Verbal Crutches
**Context:** Auditing generated UI copy for The Williams Law Firm website hero carousel and practice area cards.
**Issue:** The word "navigating" (a ubiquitous AI crutch) slipped through because `.agents/scripts/humanize-check.sh` was scoped strictly to markdown documents in `/docs/`, and its internal regex wordlist omitted common verbal tropes like `navigate/navigating`, `fostering`, and `beacon`.
**Resolution:** Replaced all occurrences of "navigating" across the UI copy with grounded, concrete legal actions. Updated `.agents/scripts/humanize-check.sh` and `.agents/scripts/ui-taste-check.sh` regex patterns to permanently flag `navigating`, `navigate your`, and related AI tropes across both docs and frontend UI files.
**Prevention:** Keep mechanical scanner regex lists synchronized with `.agents/skills/humanizer/SKILL.md` and ensure frontend UI taste checks audit copy for conversational AI clichés.
**Tags:** [#humanizer, #ui-taste, #anti-slop, #copywriting]