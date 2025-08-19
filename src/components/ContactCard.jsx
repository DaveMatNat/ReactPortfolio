function ContactCard({ href, label, sublabel, icon, external = true }) {
  const base =
    "group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-5 py-4 shadow-sm hover:shadow-md transition-all";
  const content = (
    <>
      <div className="flex items-center gap-3">
        <span aria-hidden className="text-2xl">{icon}</span>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{label}</span>
          {sublabel && <span className="text-sm text-slate-500">{sublabel}</span>}
        </div>
      </div>
      <span className="text-slate-400 group-hover:text-slate-600 transition-colors" aria-hidden>
        ↗
      </span>
    </>
  );

  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={base} aria-label={label}>
      {content}
    </a>
  ) : (
    <a href={href} className={base} aria-label={label}>
      {content}
    </a>
  );
}

export default ContactCard;