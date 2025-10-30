import { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-linear-to-b from-sky-50 to-white overflow-hidden">
      <div
        className="hidden md:block absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #7dd3fc, transparent 60%)",
        }}
      />
      <nav className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 py-4 flex justify-between items-center relative z-10">
        <Link to="/" className="text-2xl font-bold text-sky-600 pt-2">
          TicketFlow
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 text-slate-700 font-medium pt-2">
          <Link to="/" className="hover:text-sky-600 transition-colors">
            Home
          </Link>
          <Link
            to="/auth/login"
            className="hover:text-sky-600 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="hover:text-sky-600 transition-colors"
          >
            Signup
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-sky-600 transition-colors"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-sky-600 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-lg sm:hidden">
            <div className="flex flex-col space-y-6 py-7 px-6 text-slate-700 font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/auth/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/auth/signup" onClick={() => setMenuOpen(false)}>
                Signup
              </Link>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="pt-12 pb-20 lg:pt-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className=" relative lg:col-span-7">
              <div
                className="hidden md:block absolute -top-10 -left-10 w-48 h-48 rounded-full opacity-30 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #7dd3fc, transparent 60%)",
                }}
              />
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                TicketFlow
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-slate-700 max-w-2xl">
                Manage support tickets with speed and clarity. Create, track,
                and resolve tickets promptly. All from a simple, elegant
                interface designed for teams of any size.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/auth/login"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-transparent text-base font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 bg-white text-sky-700 hover:bg-sky-50"
                >
                  Login
                </Link>

                <Link
                  to="/auth/signup"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-sky-600 text-white font-medium shadow hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
                >
                  Get Started
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <p className="text-xs text-slate-500">Teams</p>
                  <p className="mt-1 font-semibold text-slate-900">12</p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <p className="text-xs text-slate-500">Avg. response</p>
                  <p className="mt-1 font-semibold text-slate-900">2h 15m</p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <p className="text-xs text-slate-500">Active projects</p>
                  <p className="mt-1 font-semibold text-slate-900">4</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Total tickets</p>
                      <p className="text-2xl font-semibold text-slate-900">
                        128
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Open</p>
                      <p className="text-lg font-medium text-emerald-600">34</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="p-3 rounded-lg bg-slate-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-slate-900">
                            Billing issue — Payment failed
                          </p>
                          <p className="text-xs text-slate-500">
                            Priority: Medium
                          </p>
                        </div>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          open
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-slate-900">
                            UI bug on dashboard
                          </p>
                          <p className="text-xs text-slate-500">
                            Priority: Low
                          </p>
                        </div>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                          in_progress
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hidden sm:block absolute -left-6 -bottom-6 w-28 h-28 rounded-full opacity-30 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, #a78bfa, transparent 60%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 c c">
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,32 C220,120 440,0 720,48 C1000,96 1220,16 1440,64 L1440,120 L0,120 Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </header>
  );
}
export default Hero;
