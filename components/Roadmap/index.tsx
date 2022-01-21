import { CheckIcon, SparklesIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Link from "next/link";
import ROUTES from "../../data/routes";

export type Skill = {
  type?: "client" | "perso" | "formation" | "book" | "article";
  content: string;
};

export type Domain = {
  title: string;
  subTitle: string;
  description?: string;
  skills: Array<Skill>;
};

type Props = {
  className?: string;
  domains: Array<Domain>;
};

export default function Roadmap({ className, domains }: Props): JSX.Element {
  return (
    <div
      className={clsx(
        className,
        "max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8",
      )}
    >
      <div className="pb-16 xl:flex xl:items-center xl:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
            <span className="text-gray-900">Mes compétences </span>
            <span className="text-blue-600">en détails</span>
          </h1>
          <p className="mt-5 max-w-4xl text-xl text-gray-500">
            Cette page me permets de centraliser les différents savoirs que j'ai
            pu obtenir avec le temps, et de retracer l'origine de ces
            compétences (projets clients, formations, livres).
          </p>
        </div>
        <Link href={ROUTES.contact.href}>
          <a className="mt-8 w-full bg-blue-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 sm:mt-10 sm:w-auto xl:mt-0">
            Travaillons ensemble
          </a>
        </Link>
      </div>

      {domains.map((domain) => (
        <div
          key={domain.title}
          className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8"
        >
          <div>
            <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">
              {domain.title}
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              {domain.subTitle}
            </p>
            {!!domain.description && (
              <p className="mt-4 text-lg text-gray-500">{domain.description}</p>
            )}
          </div>
          <div>
            <ul
              role="list"
              className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2"
            >
              {domain.skills.map((skill, index) => (
                <li key={index} className="py-4 flex border-b border-gray-200">
                  {skill.type === "client" && (
                    <SparklesIcon
                      className="flex-shrink-0 h-6 w-6 text-yellow-400"
                      aria-hidden="true"
                    />
                  )}
                  {skill.type === undefined && (
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                  )}
                  <span className="ml-3 text-base text-gray-500">
                    {skill.content}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
