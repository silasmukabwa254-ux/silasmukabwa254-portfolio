export function LabsPage() {
  return (
    <section className="section container">
      <h1 className="h2">Labs & certifications</h1>
      <p className="p">
        Add proof links here (TryHackMe/HTB profiles, course certificates, or lab notes). This page is designed to evolve
        as you complete milestones.
      </p>

      <div className="chips" role="list" aria-label="Certs and labs">
        {['TryHackMe (add profile)', 'HTB Academy (add profile)', 'Google Cybersecurity (add certificate)', 'Home labs (notes)'].map(
          (t) => (
            <span className="chip" role="listitem" key={t}>
              {t}
            </span>
          ),
        )}
      </div>
    </section>
  )
}

