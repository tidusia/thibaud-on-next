import DotsGrid from "../DotsGrid";
import LogoReact from "../LogoReact";

const ShowCase = () => (
  <div className="py-16 overflow-hidden lg:py-24">
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      <DotsGrid rootClassNames="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" />

      <div className="relative">
        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Vous cherchez un développeur de confiance ?
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-center text-xl leading-7 text-gray-500">
          Passionné par le développement web, je suis disponible pour vous
          accompagner sur tout le front-end de votre projet : intégration,
          architecture, connexion back-end et stratégie de tests.
        </p>
      </div>

      <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="relative">
          <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
            En 6 ans, j'ai accompagné plus
            <span className="block font-bold text-blue-600">
              de 20 projets startups
            </span>
          </h4>
          <p className="mt-3 text-lg leading-7 text-gray-500">
            Ma plus-value, c'est ma passion pour le code de qualité, sans bugs
            et bien testé. Avec moi, vous aurez l'assurance d'un produit de
            grande qualité technique et facilement maintenable sur le long
            terme.
          </p>

          <ul className="mt-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Spécialisé en React.js
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    J'ai eu la chance de travailler sur plus d'une dizaine de
                    projets en React.js ou React Native. Aujourd'hui, je préfère
                    me concentrer sur React.js, pour le web uniquement. C'est ce
                    qui me permet d'être très efficace et d'apporter une réelle
                    expertise.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Intégration au pixel perfect
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Généralement, les designers aiment travailler avec moi. Je
                    suis capable de comprendre les enjeux derrière leurs
                    maquettes et de les reproduire avec une extrême fidélité.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Collaboration au sein d'une équipe
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Vous avez surement besoin de quelqu'un capable d'intégrer
                    une équipe déjà en place. Ça tombe bien, c'est ce qui me
                    convient le mieux ! J'ai l'habitude de débarquer sur des
                    projets en cours pour du renfort, ou bien de poser une
                    architecture en concertation avec d'autres développeurs
                    expérimentés.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-10 -mx-4 relative lg:mt-0">
          <div className="relative mx-auto text-blue-600">
            <LogoReact />
            <h2 className="text-center text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl md:text-4xl sm:leading-9">
              Ma spécialisation :{" "}
              <strong className="font-bold text-blue-600">React</strong>
            </h2>
          </div>
        </div>
      </div>

      <DotsGrid rootClassNames="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" />

      <div className="relative mt-12 sm:mt-16 lg:mt-24">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2">
            <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
              Un de mes derniers projets :
              <span className="block font-bold text-green-400">
                la start-up Agricool
              </span>
            </h4>
            <p className="mt-3 text-lg leading-7 text-gray-500">
              Agricool avait besoin d'un bon dev front à l'aise avec Next.js
              (framework React), TypeScript pour se brancher sur le headless CMS
              Prismic.io en GraphQL, en améliorant autant que possible les
              performances dans une optique d'éco-conception.
            </p>

            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-300 text-white">
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Intégration des vues
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      En quelques jours, j'ai intégré les 9 vues sur le Figma au
                      pixel perfect qui ont ensuite été validées par le
                      designer. J'ai choisi Storybook pour m'aider dans la
                      création des composants React. J'ai aussi prévu le
                      découpage de certains blocs afin d'être compatible avec
                      les Slices de Prismic.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-300 text-white">
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Branchement CMS Prismic
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      En collaboration avec le lead-dev d'Agricool, j'ai créer
                      les différents types de pages dans Prismic, généré des
                      données initiales depuis le back-office que j'ai ensuite
                      récupérées à l'aide de GraphQL.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-300 text-white">
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Éco-conception
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Un des enjeux de la mission était de réaliser un site
                      performant, accessible, avec un excellent score sur
                      Lighthouse. La startup étant engagée dans la lutte contre
                      le réchauffement climatique, j'ai pu mettre en oeuvre de
                      nombreuses bonnes pratiques d'éco-conception sur le
                      projet.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <img
              className="relative mx-auto"
              width="550"
              src="/images/agricool-showcase.jpg"
              alt="Maquettes de la dernière version du site Agricool dont Thibaud Duthoit a réalisé l'intégration et le front-end."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ShowCase;
