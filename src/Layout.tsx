import { useEffect, useLayoutEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { address, email, facebook, facebookName, phones } from "./content";
import { FacebookMark, PhoneMark } from "./icons";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/internet", label: "Internet" },
  { to: "/solar", label: "Solar" },
  { to: "/cctv", label: "CCTV" },
  { to: "/contact", label: "Contact" },
];

export function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to the page
      </a>
      <header className={`top${menuOpen ? " top-open" : ""}`}>
        <div className="wrap top-bar">
          <NavLink to="/" className="brand" end>
            <img src="/logo.jpg" alt="" width="256" height="256" />
            <span>
              <strong>FIS Network</strong>
              <small>Caibiran, Biliran</small>
            </span>
          </NavLink>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle-bars" aria-hidden="true" />
            {menuOpen ? "Close" : "Menu"}
          </button>
          <nav id="site-nav" className="nav" aria-label="Pages">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <a className="call" href={`tel:${phones[0].tel}`}>
            <PhoneMark className="call-icon" />
            Call
          </a>
        </div>
      </header>
      <main id="main" key={location.pathname} className="page">
        <Outlet />
      </main>
      <footer className="foot">
        <div className="wrap foot-grid">
          <div className="foot-brand">
            <img src="/logo.jpg" alt="" width="256" height="256" />
            <div>
              <strong>Fernando Internet Services</strong>
              <p>
                {address.street}
                <br />
                {address.town}
              </p>
            </div>
          </div>
          <div className="foot-links">
            <p className="foot-label">Phone</p>
            {phones.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`}>
                {phone.display}
              </a>
            ))}
            <p className="foot-label">Email</p>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <a className="foot-fb" href={facebook} target="_blank" rel="noreferrer">
            <FacebookMark className="button-icon" />
            {facebookName}
          </a>
        </div>
      </footer>
    </>
  );
}
