import { address, email, facebook, facebookName, phones } from "../content";
import { FacebookMark, PhoneMark } from "../icons";

export function ContactPage() {
  return (
    <article>
      <header className="band">
        <div className="wrap intro">
          <p className="kicker">Contact</p>
          <h1>Call, text, or send a message.</h1>
          <p className="lead">
            The fastest way is a phone call. If nobody picks up, send a text or
            a message on the Facebook page.
          </p>
        </div>
      </header>
      <div className="section-block">
        <div className="wrap contact-layout">
          <div className="taps">
            {phones.map((phone) => (
              <section key={phone.tel} className="tap">
                <p className="tap-label">{phone.label}</p>
                <p className="tap-number">{phone.display}</p>
                <div className="ask">
                  <a className="button" href={`tel:${phone.tel}`}>
                    <PhoneMark className="button-icon" />
                    Call
                  </a>
                  <a className="button button-quiet" href={`sms:${phone.tel}`}>
                    Send a text
                  </a>
                </div>
              </section>
            ))}
          </div>
          <div className="visit-row">
            <section className="info-card">
              <h2>Office</h2>
              <p className="place">
                {address.street}
                <br />
                {address.town}
              </p>
              <p>Call before you come, so someone is at the desk.</p>
            </section>
            <section className="info-card write-card">
              <h2>Write</h2>
              <a className="email-link" href={`mailto:${email}`}>
                {email}
              </a>
              <a
                className="button write-fb"
                href={facebook}
                target="_blank"
                rel="noreferrer"
              >
                <FacebookMark className="button-icon" />
                {facebookName}
              </a>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
