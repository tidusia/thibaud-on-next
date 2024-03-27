import clsx from "clsx";
import Link from "next/link";
import RoadmapItem from "./components/RoadmapItem";
import { ROUTES } from "../../../constants";

export type Skill = {
  type?:
    | "client"
    | "perso"
    | "formation"
    | "book"
    | "article"
    | "certification";
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
        "max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8",
      )}
    >
      <div className="pb-16">
        <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
          <span className="text-gray-900">Mes compétences </span>
          <span className="text-blue-600">en détail</span>
        </h1>
        <p className="mt-5 mb-8 max-w-3xl text-xl text-gray-500">
          Cette page me permet de centraliser les différents savoirs que j'ai pu
          obtenir avec le temps, et de retracer l'origine de ces compétences.
          <br className="mb-4" />
          La liste ne se veut pas exhaustive, j'y indique les éléments les plus
          importants pour faciliter la lecture. Les premiers éléments de chaque
          liste sont les plus récents chronologiquement.
          <br className="mb-4" />
          Si une ressource est indiquée, c'est que je l'ai totalement vue
          (souvent plusieurs fois), puis intégrée et mise en pratique.
        </p>
        <Link
          href={ROUTES.contact.href}
          className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 sm:mt-10 sm:w-auto xl:mt-0"
        >
          Travaillons ensemble
        </Link>
      </div>

      {domains.map((domain, index) => (
        <RoadmapItem
          key={domain.title}
          reverse={index % 2 === 1}
          title={domain.title}
          subTitle={domain.subTitle}
          description={domain.description}
          skills={domain.skills}
        />
      ))}
    </div>
  );
}
