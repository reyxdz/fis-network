import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { phones } from "./content";
import { PhoneMark } from "./icons";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="band">
      <div className="wrap intro">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <div className="lead">{children}</div>
      </div>
    </header>
  );
}

export function AskRow() {
  return (
    <div className="ask">
      <a className="button" href={`tel:${phones[0].tel}`}>
        <PhoneMark className="button-icon" />
        Call {phones[0].display}
      </a>
      <Link className="button button-quiet" to="/contact">
        Other ways to reach us
      </Link>
    </div>
  );
}
