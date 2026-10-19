import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { NotFoundPage } from "./components/NotFoundPage";
import { HomePage } from "./features/home/HomePage";
import { FeaturesPage } from "./features/features/FeaturesPage";
import { AboutPage } from "./features/about/AboutPage";
import { ContactPage } from "./features/contact/ContactPage";
import { usePage } from "./usePage";

function App() {
  const { page, navigate } = usePage();

  return (
    <div className="app-shell">
      <SiteHeader current={page} onNavigate={navigate} />
      {page === "home" ? (
        <HomePage onNavigate={navigate} />
      ) : page === "features" ? (
        <FeaturesPage onNavigate={navigate} />
      ) : page === "about" ? (
        <AboutPage onNavigate={navigate} />
      ) : page === "contact" ? (
        <ContactPage />
      ) : (
        <NotFoundPage onNavigate={navigate} />
      )}
      <SiteFooter />
    </div>
  );
}

export default App;
