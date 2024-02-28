import { NextPage } from "next";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";

const LegalsPage: NextPage = () => (
  <div>
    <Head>
      <title>Mentions légales | Thibaud Duthoit</title>
      <meta name="robots" content="noindex" />
    </Head>

    <header className="max-w-screen-xl mx-auto">
      <Nav />
    </header>

    <main className="relative bg-white mt-6">
      <section className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <h1>Mentions légales</h1>
      </section>
    </main>

    <Footer />
  </div>
);

export default LegalsPage;
