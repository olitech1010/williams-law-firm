# Dev-OS Task Board & DAG Workflow State

> Single source of truth for active task execution, dependencies, and gating status.
> Maintained by the **Orchestrator** agent.

---

## Workflow State Columns

```
[ BACKLOG ] ➔ [ QUEUED ] ➔ [ IN_PROGRESS ] ➔ [ PARALLEL_GATE ] ➔ [ HUMAN_CHECKPOINT ] ➔ [ DONE ]
                                                     │
                                            ┌────────┼────────┐
                                            ▼        ▼        ▼
                                           QA     TESTER   SECURITY
```

---

## Active Board

### [ IN_PROGRESS ]
*(none)*

### [ PARALLEL_GATE ]
*(passed — QA: pass, Tester: pass, Security: pass)*

### [ HUMAN_CHECKPOINT ]
*(none)*

### [ QUEUED ]
*(none)*

### [ BACKLOG ]
*(none)*

### [ DONE ]
### TASK-010: Update Email to williams@thewilliams-lawfirm.com and Create HTML Email Signature
- **Assignee:** Developer
- **DependsOn:** None
- **Triage Level:** TRIVIAL
- **ParallelGate:** QA: pass, Tester: pass, Security: pass
- **HumanCheckpoint:** approved
- **Artifacts:** `src/app/page.tsx`, `about.md`, `docs/williams-email-signature.html`, `docs/email-signature.html`

### TASK-009: Update Phone Number & Add Hero Carousel with Generated Team/Office Imagery
- **Assignee:** Developer
- **DependsOn:** None
- **Triage Level:** STANDARD
- **ParallelGate:** QA: pass, Tester: pass, Security: pass
- **HumanCheckpoint:** approved
- **Artifacts:** `src/app/page.tsx`, `src/components/HeroSlider.tsx`, `public/hero-*.jpg`, `public/hero-slider.gif`

### TASK-008: Develop UI Components and Home Page
- **Assignee:** Developer
- **Status:** Done

### TASK-005: Setup Next.js Project & Tailwind
- **Assignee:** Developer
- **Status:** Done
### TASK-001: Write PRD (The Williams Law Firm)
- **Assignee:** Orchestrator
- **Status:** Done

### TASK-002: Write DESIGN.md (The Williams Law Firm)
- **Assignee:** Orchestrator
- **Status:** Done

### TASK-006: Generate Logo for Williams Law Firm
- **Assignee:** image-generator subagent
- **Status:** Done

### TASK-007: Research Stock Imagery for Williams Law Firm
- **Assignee:** research subagent
- **Status:** Done

### [ DONE ]
*(none)*

---

## Task Card Schema
```markdown
### TASK-XXX: [Title]
- **Assignee:** [Orchestrator | Developer | QA | Tester | Security | DevOps | DBA]
- **DependsOn:** [List of prerequisite TASK IDs]
- **Triage Level:** [TRIVIAL | STANDARD | CRITICAL]
- **ParallelGate:** [QA: pass/fail/pending, Tester: pass/fail/pending, Security: pass/fail/pending]
- **HumanCheckpoint:** [pending | approved]
- **Artifacts:** [List of PRs, commits, or files modified]
```