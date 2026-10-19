import type { Navigate } from "../../router";
import { CollectionsScreenshot } from "./CollectionsScreenshot";
import "./features.css";

const FEATURES: { heading: string; text: string }[] = [
  {
    heading: "Save a bookmark",
    text: "Paste a link and it's saved in seconds.",
  },
  {
    heading: "Organize into collections",
    text: "Group links into Work, Learning, Tools — whatever suits you.",
  },
  {
    heading: "Favorite the important ones",
    text: "Star the links you reach for most.",
  },
  {
    heading: "Search and filter",
    text: "Find any saved link by title, address, description or tag.",
  },
  {
    heading: "Open in a new tab",
    text: "One click and the page opens beside your board.",
  },
  {
    heading: "Light and dark mode",
    text: "Pick the one that's easier on your eyes.",
  },
];

type Props = {
  onNavigate: Navigate;
};

export function FeaturesPage({ onNavigate }: Props) {
  return (
    <main>
      <section className="section features-intro">
        <div className="container">
          <h1 className="features-intro__heading">Features</h1>
          <p className="features-intro__text">
            Everything you need to keep your links in order — nothing you
            don&rsquo;t.
          </p>
        </div>
      </section>

      <section className="section section--tight features-list">
        <div className="container">
          <ul className="features-list__grid">
            {FEATURES.map((feature, index) => (
              <li key={feature.heading} className="feature-card">
                <span className="feature-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="feature-card__heading">{feature.heading}</h2>
                <p className="feature-card__text">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight features-shot">
        <div className="container">
          <figure className="features-shot__figure">
            <div className="features-shot__frame">
              <CollectionsScreenshot />
            </div>
            <figcaption className="features-shot__caption">
              Group links into collections like Work, Learning and Tools.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section features-closing">
        <div className="container features-closing__inner">
          <h2 className="features-closing__heading">
            Keep every link in order from today.
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
