import { NextPage } from "next";

import navigation from "../data/navigation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Contact: NextPage = () => (
  <div>
    <div className="max-w-screen-xl mx-auto">
      <Nav navItems={navigation} />
    </div>

    <main className="relative bg-white mt-12">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-blue-500 sm:text-3xl sm:leading-9">
              Travaillons ensemble
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Même si vous avez juste besoin de renseignements, de conseils, je
              prendrais le temps de vous donner une réponse pertinente.
            </p>
            <dl className="mt-8 text-base leading-6 text-gray-500">
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href="mailto:contact@thibaud-duthoit.fr" className="ml-3">
                    contact@thibaud-duthoit.fr
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              method="post"
              name="contact"
              className="grid grid-cols-1 row-gap-6"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="sr-only">
                  Nom complet
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    id="name"
                    name="name"
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Nom complet"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Téléphone
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    id="phone"
                    name="phone"
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Téléphone"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <div className="relative rounded-md shadow-sm">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-blue btn-big w-full lg:w-auto"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default Contact;