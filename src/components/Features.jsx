function Features() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Built for teams & support agents
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Powerful ticket management, fast search, and team assignments. Has
            clear workflows and visibility.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-sky-50">
              <span aria-hidden="true">⚙️</span>
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Automations</h3>
            <p className="mt-2 text-sm text-slate-600">
              Route tickets automatically, reduce manual work.
            </p>
          </article>

          <article className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-emerald-50">
              <span aria-hidden="true">📊</span>
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Analytics</h3>
            <p className="mt-2 text-sm text-slate-600">
              Get metrics on response times and resolution rates.
            </p>
          </article>

          <article className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-amber-50">
              <span aria-hidden="true">🔒</span>
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Permissions</h3>
            <p className="mt-2 text-sm text-slate-600">
              Control access per role with secure sessions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Features;