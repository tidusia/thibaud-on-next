import { NextPage } from "next";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";
import Roadmap from "../components/Roadmap";
import { DOMAINS } from "../components/Roadmap/data";
import CallToActionContact from "../components/CallToActionContact";

const Contact: NextPage = () => (
  <div>
    <Head>
      <title>Mes compétences en détail | Thibaud Duthoit</title>
      <meta
        name="description"
        content="Cette page me permet de centraliser les différents savoirs que j'ai pu obtenir avec le temps, et de retracer l'origine de ces compétences."
      />
    </Head>

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

export default Contact;
