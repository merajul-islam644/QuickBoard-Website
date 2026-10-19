import type { Navigate } from "../../router";
import "./about.css";

const PARAGRAPHS: string[] = [
  "We saved links in notes, chats and messages, and lost most of them. Something useful would come up, we'd tuck it away somewhere quick, and then never find it again.",
  "So we built QuickBoard: one clean place to save a link now and find it instantly later. Every bookmark sits on a single board, sorted into collections, so the thing you saved is the thing you can reach.",
  "We keep it deliberately small so it stays fast and reliable. No clutter, no clever tricks — just your links, in order, whenever you need them.",
];

type Props = {
  onNavigate: Navigate;
};

export function AboutPage({ onNavigate }: Props) {
  return (
    <main>
      <section className="section about-intro">
        <div className="container">
          <h1 className="about-intro__heading">Why we built QuickBoard</h1>
        </div>
      </section>

      <section className="section section--tight about-body">
        <div className="container">
          <div className="about-body__inner">
            {PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="about-body__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-closing">
        <div className="container about-closing__inner">
          <h2 className="about-closing__heading">
            Save your first link today.
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
