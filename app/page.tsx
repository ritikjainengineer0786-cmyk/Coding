const kpis = [
  ['Total Assignments', '1,284', '+18%'], ['In Progress', '418', '62 due this week'],
  ['Completed', '731', '94% SLA'], ['Overdue', '37', '-11%'],
  ['Projects Running', '86', '12 critical'], ['License Utilization', '78%', 'ANSYS peak'],
  ['Resource Utilization', '82%', '+6%'], ['Cost Savings', '$2.4M', 'YTD']
];

const assignments = [
  ['T3TE-2026-0105', 'Transformer thermal validation', 'Critical', 'R&D', 'In Progress', '68%'],
  ['T3TE-2026-0106', 'NX CAD model release for tank assembly', 'High', 'Design', 'Under Review', '91%'],
  ['T3TE-2026-0107', 'Maxwell stray loss simulation package', 'High', 'Analysis', 'Not Started', '12%'],
  ['T3TE-2026-0108', 'CAPA design standard update', 'Medium', 'Quality', 'On Hold', '44%']
];

const modules = [
  'Executive Dashboard', 'Assignment Register', 'Kanban / Gantt / Calendar', 'Documentation Control',
  'Goal & OKR Tracking', 'License Management', 'Resource Planning', 'Risk Register',
  'Approval Workflow', 'Reports Center', 'Notification Hub', 'AI Assistant'
];

const workflow = ['Generate T3TE-YYYY-NNNN number', 'Create SQL assignment record', 'Provision SharePoint folder', 'Build OneDrive engineering folder tree', 'Update register table', 'Notify email, Teams, and in-app'];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-6 lg:px-8">
      <nav className="glass flex flex-wrap items-center justify-between gap-4 rounded-3xl px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-sky-300">E-PMC</p>
          <h1 className="text-xl font-bold">Engineering Project Management & Control</h1>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-slate-300">
          {['Dashboard', 'Assignments', 'Documents', 'Reports', 'AI'].map((item) => <span className="rounded-full border border-slate-700 px-3 py-1" key={item}>{item}</span>)}
        </div>
      </nav>

      <section className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
        <div className="glass rounded-[2rem] p-8">
          <p className="mb-3 inline-flex rounded-full bg-sky-400/10 px-3 py-1 text-sm font-semibold text-sky-200">Enterprise transformer R&D command center</p>
          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Plan assignments, control documents, manage licenses, and predict engineering risk in one premium workspace.</h2>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">A near-production application blueprint for engineering teams combining Microsoft 365 workflows, SQL-backed registers, project controls, approval gates, and AI insights.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-2xl bg-sky-400 px-5 py-3 font-bold text-slate-950">New Assignment</button>
            <button className="rounded-2xl border border-slate-600 px-5 py-3 font-bold">View Portfolio</button>
          </div>
        </div>
        <aside className="glass rounded-[2rem] p-6">
          <h3 className="text-lg font-bold">Automatic assignment workflow</h3>
          <div className="mt-5 space-y-4">
            {workflow.map((step, index) => <div className="flex gap-3" key={step}><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sm font-bold text-sky-200">{index + 1}</span><p className="text-sm text-slate-300">{step}</p></div>)}
          </div>
        </aside>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map(([label, value, note]) => <article className="glass metric-card rounded-3xl p-5" key={label}><p className="text-sm text-slate-400">{label}</p><strong className="mt-2 block text-3xl">{value}</strong><span className="mt-2 block text-sm text-sky-200">{note}</span></article>)}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
        <div className="glass overflow-hidden rounded-[2rem]">
          <div className="border-b border-slate-700/60 p-5"><h3 className="text-xl font-bold">Assignment register</h3><p className="text-sm text-slate-400">Excel-inspired SQL register with generated assignment numbers.</p></div>
          <div className="table-grid bg-slate-900/70 px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-400"><span>No.</span><span>Title</span><span>Priority</span><span>Dept</span><span>Status</span><span>Progress</span></div>
          {assignments.map((row) => <div className="table-grid border-t border-slate-800 px-5 py-4 text-sm" key={row[0]}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>)}
        </div>
        <div className="glass rounded-[2rem] p-6">
          <h3 className="text-xl font-bold">Portfolio health</h3>
          {['Transformer R&D', 'Manufacturing Engineering', 'Quality CAPA', 'Design Automation'].map((name, i) => <div className="mt-5" key={name}><div className="mb-2 flex justify-between text-sm"><span>{name}</span><span>{[82, 67, 74, 91][i]}%</span></div><div className="progress-bar"><div className="progress-fill" style={{ width: `${[82, 67, 74, 91][i]}%` }} /></div></div>)}
        </div>
      </section>

      <section className="glass rounded-[2rem] p-6">
        <h3 className="text-xl font-bold">Enterprise modules</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-4 text-sm font-semibold" key={module}>{module}</div>)}
        </div>
      </section>
    </main>
  );
}
