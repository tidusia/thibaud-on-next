import { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Roadmap from "./components/Roadmap";
import { DOMAINS } from "./components/Roadmap/data";
import CallToActionContact from "../../components/CallToActionContact";

export const metadata: Metadata = {
  title: "Mes compétences en détail | Thibaud Duthoit",
  description:
    "Cette page me permet de centraliser les différents savoirs que j'ai pu obtenir avec le temps, et de retracer l'origine de ces compétences.",
};

export default function CompetencesPage() {
  return (
    <div>
      <header className="max-w-screen-xl mx-auto">
        <Nav />
      </header>

      <main className="relative bg-white mt-6">
        <Roadmap domains={DOMAINS} />

        <CallToActionContact />
      </main>

      <Footer />
    </div>
  );
}
