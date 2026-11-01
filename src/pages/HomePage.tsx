import { Link } from "react-router-dom";
import { address, facebook, phones } from "../content";
import { CameraMark, PanelMark, PhoneMark, RouterMark } from "../icons";

const services = [
  {
    to: "/internet",
    title: "Internet",
    text: "Monthly plans from ₱999. Installation is free on Basic, Standard, and Premium.",
    action: "See the plans",
    icon: RouterMark,
    tone: "door-net",
  },
  {
    to: "/solar",
    title: "Solar",
    text: "Panels, batteries, and off-grid power. The first look and the quotation are free.",
    action: "See solar",
    icon: PanelMark,
    tone: "door-sun",
  },
  {
    to: "/cctv",
    title: "CCTV",
    text: "Cameras for a house or a shop, with a view on your phone. Ask us for the cost.",
    action: "See cameras",
    icon: CameraMark,
    tone: "door-cam",
  },
] as const;

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>Internet, solar, and cameras</h1>
            <p className="lead">
              Free internet installation on Basic, Standard, and Premium. Solar and
              CCTV quoted on site by a local crew.
            </p>
            <div className="ask">
              <a className="button" href="#services">
                See what we offer
              </a>
              <a
                className="button button-ghost"
                href={facebook}
                target="_blank"
                rel="noreferrer"
              >
                Message on Facebook
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="rings" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="hero-shot">
              <picture>
                <source srcSet="/photos/hero-install.webp" type="image/webp" />
                <img
                  src="/photos/hero-install.jpg"
                  width="1280"
                  height="720"
                  alt="Technician setting up a Wi-Fi router outside a home"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="services">
        <div className="wrap">
          <h2 className="section-title">What do you need?</h2>
          <div className="doors">
            {services.map((service, index) => (
              <Link key={service.to} className={`door ${service.tone}`} to={service.to}>
                <span className="door-no">0{index + 1}</span>
                <service.icon className="door-icon" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="door-go">{service.action}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="wrap">
          <p className="kicker kicker-ink">From the job site</p>
          <h2 className="section-title">Up the pole for a clean line.</h2>
          <figure className="shot shot-wide">
            <img
              src="/photos/internet-ladder.jpg"
              width="1280"
              height="720"
              alt="Installer on a ladder working on an internet line"
            />
          </figure>
        </div>
      </section>

      <section className="closer">
        <div className="wrap closer-grid">
          <div className="closer-copy">
            <p className="kicker kicker-dark">Visit us</p>
            <h2>Verian Street office</h2>
            <p className="closer-place">
              {address.street}, {address.town}
            </p>
            <p>Call before you come, so someone is at the desk.</p>
          </div>
          <a className="button closer-call" href={`tel:${phones[0].tel}`}>
            <PhoneMark className="button-icon" />
            Call {phones[0].display}
          </a>
        </div>
      </section>
    </>
  );
}
