import {
  CheckIcon,
  SparklesIcon,
  BookOpenIcon,
  AcademicCapIcon,
} from "@heroicons/react/outline";
import clsx from "clsx";
import Link from "next/link";
import ROUTES from "../../data/routes";
import ReactMarkdown from "react-markdown";

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
          <p className="mt-5 max-w-3xl text-xl text-gray-500">
            Cette page me permets de centraliser les différents savoirs que j'ai
            pu obtenir avec le temps, et de retracer l'origine de ces
            compétences.
            <br className="mb-4" />
            La liste ne se veut pas exhaustive, j'y indique les éléments les
            plus importants pour faciliter la lecture.
          </p>
        </div>
        <Link href={ROUTES.contact.href}>
          <a className="mt-8 w-full bg-blue-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 sm:mt-10 sm:w-auto xl:mt-0">
            Travaillons ensemble
          </a>
        </Link>
      </div>

      {domains.map((domain, index) => (
        <div
          key={domain.title}
          className={clsx(
            "border-t border-gray-200 py-16 lg:flex lg:gap-x-16",
            index % 2 === 1 && "flex-row-reverse",
          )}
        >
          <div className="flex-1 max-w-md">
            <h2
              lang="en"
              className="text-base font-semibold text-blue-600 uppercase tracking-wide"
            >
              {domain.title}
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              {domain.subTitle}
            </p>
            {!!domain.description && (
              <ReactMarkdown className="mt-4 text-lg text-gray-500 whitespace-pre-line">
                {domain.description}
              </ReactMarkdown>
            )}
          </div>
          <ul role="list" className="flex-1 mt-4 sm:mt-8 md:mt-10 xl:mt-0">
            {domain.skills.map((skill, index) => (
              <li
                key={index}
                className="py-4 flex border-b last:border-0 border-gray-200"
              >
                {skill.type === "client" && (
                  <SparklesIcon
                    className="flex-shrink-0 h-6 w-6 text-yellow-400"
                    aria-hidden="true"
                  />
                )}
                {skill.type === "book" && (
                  <BookOpenIcon
                    className="flex-shrink-0 h-6 w-6 text-red-500"
                    aria-hidden="true"
                  />
                )}
                {skill.type === "formation" && (
                  <AcademicCapIcon
                    className="flex-shrink-0 h-6 w-6 text-cyan-500"
                    aria-hidden="true"
                  />
                )}
                {skill.type === undefined && (
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                )}
                <span className="ml-3 text-base">
                  <ReactMarkdown>{skill.content}</ReactMarkdown>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
