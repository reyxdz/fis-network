import { plans } from "../content";
import { RouterMark } from "../icons";
import { AskRow, PageIntro } from "../PageIntro";
import { Showcase } from "../Showcase";

const slides = [
  {
    src: "/photos/internet-install.jpg",
    width: 1280,
    height: 720,
    alt: "A technician connecting a home router at a small concrete house",
  },
  {
    src: "/photos/internet-ladder.jpg",
    width: 1280,
    height: 720,
    alt: "A technician on a ladder fastening a cable under a roof edge",
  },
  {
    src: "/photos/internet-line.jpg",
    width: 1280,
    height: 720,
    alt: "A white cable running up a concrete wall to a small box",
  },
  {
    src: "/photos/internet-router.jpg",
    width: 1280,
    height: 720,
    alt: "A white home router on a wooden shelf beside a window",
  },
] as const;

export function InternetPage() {
  return (
    <article>
      <PageIntro kicker="Internet" title="Pick a monthly plan.">
        <p>
          “Up to” is the top speed, not a promise that it stays there all day.
          Basic, Standard, and Premium include free installation. Ask how long
          the plan lasts when you sign up.
        </p>
      </PageIntro>
      <div className="section-block">
        <div className="wrap">
          <div className="plans">
            {plans.map((plan, index) => (
              <section
                key={plan.name}
                className={"popular" in plan && plan.popular ? "plan plan-popular" : "plan"}
              >
                <div className="plan-top">
                  <RouterMark className="plan-icon" />
                  <div>
                    <h2>{plan.name}</h2>
                    {"popular" in plan && plan.popular ? (
                      <p className="tag">Most popular</p>
                    ) : null}
                  </div>
                </div>
                <p className="speed">{plan.speed}</p>
                <div className="meter" aria-hidden="true">
                  {[0, 1, 2, 3].map((bar) => (
                    <span key={bar} className={bar <= index ? "on" : ""} />
                  ))}
                </div>
                <p className="price">
                  {plan.price} <small>{plan.period}</small>
                </p>
                {plan.note ? <p className="note">{plan.note}</p> : null}
                <ul>
                  {plan.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <AskRow />
          <Showcase slides={slides} label="Internet installation" />
        </div>
      </div>
    </article>
  );
}
