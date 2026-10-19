import type { Navigate } from "../router";
import "./not-found.css";

type Props = {
  onNavigate: Navigate;
};

export function NotFoundPage({ onNavigate }: Props) {
  return (
    <main className="section">
      <div className="container not-found">
        <h1 className="not-found__heading">Page not found</h1>
        <p className="not-found__text">
          We couldn&rsquo;t find that page. Head back to the home page.
        </p>
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => onNavigate("home")}
        >
          Back to Home
        </button>
      </div>
    </main>
  );
}
