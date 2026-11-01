import { BatteryMark, InspectMark, PanelMark, SunMark } from "../icons";
import { AskRow, PageIntro } from "../PageIntro";

const shots = [
  {
    src: "/photos/panel-lift.jpg",
    width: 576,
    height: 584,
    alt: "Two installers carrying a solar panel up a tile roof",
  },
  {
    src: "/photos/panels-set.jpg",
    width: 576,
    height: 599,
    alt: "Two installers setting a solar panel onto roof rails",
  },
  {
    src: "/photos/inverter-check.jpg",
    width: 704,
    height: 742,
    alt: "A technician checking an open inverter with a meter",
  },
] as const;

const items = [
  {
    title: "Panels on the roof",
    text: "We install the system and mount the panels.",
    icon: PanelMark,
  },
  {
    title: "Batteries",
    text: "Storage so you still have power when the grid is out.",
    icon: BatteryMark,
  },
  {
    title: "Off-grid",
    text: "A system that does not need the power company.",
    icon: SunMark,
  },
  {
    title: "Inspection",
    text: "We check an existing setup and the utility connection.",
    icon: InspectMark,
  },
];

export function SolarPage() {
  return (
    <article>
      <PageIntro kicker="Solar" title="A free look, then a written price.">
        <p>
          The first visit is a free consultation. We look at the roof and tell
          you the cost before any work starts. This is for houses and
          businesses. There is no package price on this page, because each roof
          is different.
        </p>
      </PageIntro>
      <div className="section-block">
        <div className="wrap">
          <h2 className="section-title">How the work looks.</h2>
          <div className="gallery">
            {shots.map((shot) => (
              <figure key={shot.src} className="shot">
                <img src={shot.src} width={shot.width} height={shot.height} alt={shot.alt} />
              </figure>
            ))}
          </div>
          <ul className="facts">
            {items.map((item) => (
              <li key={item.title}>
                <item.icon className="fact-icon" />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="aside">
            A solar setup can cut the monthly electric bill and keep lights on
            during a brownout. The quotation comes after someone looks at the
            roof.
          </p>
          <AskRow />
        </div>
      </div>
    </article>
  );
}
