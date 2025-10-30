function Footer() {
  return (
    <footer className="bg-slate-100">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} TicketFlow — All rights reserved.
        </div>
        <nav className="flex gap-4">
          <a
            className="text-sm text-slate-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            href="/privacy"
          >
            Privacy
          </a>
          <a
            className="text-sm text-slate-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            href="/terms"
          >
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;