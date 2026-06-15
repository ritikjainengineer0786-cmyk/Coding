# E-PMC — Engineering Project Management & Control System

E-PMC is an enterprise application starter for engineering project management, assignment tracking, document control, resource planning, license management, reporting, and AI-assisted insights for transformer R&D and manufacturing engineering teams.

## Implemented starter

- Next.js + TypeScript + Tailwind CSS web application.
- Premium Microsoft 365 / Jira / Power BI inspired executive dashboard.
- KPI cards for assignments, projects, licenses, resources, overdue work, and savings.
- Assignment register preview with `T3TE-YYYY-NNNN` numbering.
- Automatic assignment workflow panel covering SQL record creation, SharePoint/OneDrive folder provisioning, register updates, and notifications.
- Portfolio health and enterprise module tiles.

## Target architecture

```text
apps/web        Next.js, React, Tailwind, dashboards and workflow UI
apps/api        Node.js, Express, TypeScript REST API
packages/db     Prisma schema for SQL Server or PostgreSQL
packages/m365   Microsoft Graph SharePoint, OneDrive, Teams, Outlook integration
packages/ai     AI insights, summaries, risk prediction, smart search
```

## Core backend domains

- Authentication: Azure AD SSO, JWT, refresh tokens, role-based access control.
- Assignments: generated assignment numbers, register rows, ownership, priority, progress, risk, hours, savings, benefit analysis.
- Projects: portfolio, health, milestones, earned value, dependencies, budgets.
- Tasks: nested tasks, subtasks, activities, deliverables, Kanban, calendar, Gantt, workload.
- Documents: version control, revisions, audit trail, approvals, download history.
- Goals: company, department, project, and personal OKRs.
- Licenses: engineering software inventory, utilization, expiry, assigned users.
- Notifications: email, Teams, in-app, mobile push, reminders, scheduler.
- Reporting: PDF, Excel, Word, PowerPoint, CSV exports.

## Suggested assignment workflow

1. Generate the next assignment number using an atomic yearly sequence such as `T3TE-2026-0105`.
2. Create the SQL assignment record in a transaction.
3. Provision the SharePoint folder named after the assignment number.
4. Create the OneDrive folder tree: Input Documents, Calculations, CAD Models, FEA Analysis, Reports, MOM, Drawings, Presentations, Deliverables, Approvals.
5. Update the assignment register table.
6. Send email, Teams, and in-app notifications.
7. Write an audit log entry for every automated action.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.
