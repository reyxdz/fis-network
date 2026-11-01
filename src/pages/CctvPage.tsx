import { CameraMark } from "../icons";
import { AskRow, PageIntro } from "../PageIntro";
import { Showcase } from "../Showcase";

const slides = [
  {
    src: "/photos/cctv-house.jpg",
    width: 1280,
    height: 720,
    alt: "A white security camera mounted under the awning of a small shop",
  },
  {
    src: "/photos/cctv-gate.jpg",
    width: 1280,
    height: 720,
    alt: "A white security camera on a concrete gate post",
  },
  {
    src: "/photos/cctv-yard.jpg",
    width: 1280,
    height: 720,
    alt: "Two white security cameras under the eaves of a house",
  },
  {
    src: "/photos/cctv-dusk.jpg",
    width: 1280,
    height: 720,
    alt: "A security camera beside a lit bulb over a shop doorway at dusk",
  },
] as const;

const points = [
  "HD picture",
  "Night vision",
  "Recording, day and night",
  "Watch the cameras on your phone",
  "Installation and later support",
];

export function CctvPage() {
  return (
    <article>
      <PageIntro kicker="CCTV" title="Cameras for the house or the shop.">
        <p>
          Tell us how many rooms or how much of the street you want to see. We
          send the cost after that. There is no fixed package price.
        </p>
      </PageIntro>
      <div className="section-block">
        <div className="wrap">
          <div className="cctv-stage">
            <CameraMark className="hero-icon" />
            <ul className="ticks">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <AskRow />
          <Showcase slides={slides} label="CCTV installation" />
        </div>
      </div>
    </article>
  );
}
