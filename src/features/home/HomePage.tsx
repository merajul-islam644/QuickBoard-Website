import type { Navigate } from "../../router";
import { DashboardScreenshot } from "./DashboardScreenshot";
import "./home.css";

const HIGHLIGHTS = [
  {
    heading: "Save in seconds",
    text: "Paste a link and it is saved, ready for whenever you need it.",
  },
  {
    heading: "Organize into a collection",
    text: "Group links into Work, Learning or Tools so they stay in order.",
  },
  {
    heading: "Find it through search",
    text: "Search your saved links by title, address, description or tag.",
  },
];

type Props = {
  onNavigate: Navigate;
};

export function HomePage({ onNavigate }: Props) {
  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero__inner">
          <h1 className="home-hero__headline">
            Save a useful link now. Find it instantly later.
          </h1>
          <p className="home-hero__sub">
            QuickBoard keeps every link you save in one clean place.
          </p>
          <button
            type="button"
            className="btn btn--primary btn--large"
            onClick={() => onNavigate("contact")}
          >
            Get Started
          </button>
        </div>
      </section>

      <section className="section home-highlights">
        <div className="container">
          <div className="home-highlights__grid">
            {HIGHLIGHTS.map((item) => (
              <article key={item.heading} className="home-highlight">
                <h2 className="home-highlight__heading">{item.heading}</h2>
                <p className="home-highlight__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight home-shot">
        <div className="container">
          <figure className="home-shot__frame">
            <div className="home-shot__screen">
              <DashboardScreenshot />
            </div>
            <figcaption className="home-shot__caption">
              Your whole board at a glance — bookmark cards with titles, tags
              and a collection name.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section home-closing">
        <div className="container home-closing__inner">
          <h2 className="home-closing__heading">
            Ready to keep your links in one place?
          </h2>
          <button
            type="button"
            className="btn btn--primary btn--large"
            onClick={() => onNavigate("contact")}
          >
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
