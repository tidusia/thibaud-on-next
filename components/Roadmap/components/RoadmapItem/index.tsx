import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import {
  AcademicCapIcon,
  BookOpenIcon,
  CheckIcon,
  SparklesIcon,
  BadgeCheckIcon,
  BeakerIcon,
} from "@heroicons/react/outline";
import { Skill } from "../../index";

type Props = {
  title: string;
  subTitle: string;
  description?: string;
  skills: Array<Skill>;
  className?: string;
  reverse?: boolean;
};

export default function RoadmapItem({
  className,
  reverse,
  title,
  skills,
  description,
  subTitle,
}: Props): JSX.Element {
  return (
    <div
      className={clsx(
        className,
        "border-t border-gray-200 py-16 lg:flex lg:gap-x-16",
        reverse && "flex-row-reverse",
      )}
    >
      <div className="flex-1 max-w-md">
        <h2
          lang="en"
          className="text-base font-semibold text-blue-600 uppercase tracking-wide"
        >
          {title}
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900">{subTitle}</p>
        {!!description && (
          <ReactMarkdown className="mt-4 text-lg text-gray-500 whitespace-pre-line">
            {description}
          </ReactMarkdown>
        )}
      </div>
      <ul role="list" className="flex-1 mt-4 sm:mt-8 lg:mt-0">
        {skills.map((skill, index) => (
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
            {skill.type === "certification" && (
              <BadgeCheckIcon
                className="flex-shrink-0 h-6 w-6 text-green-500"
                aria-hidden="true"
              />
            )}
            {skill.type === "perso" && (
              <BeakerIcon
                className="flex-shrink-0 h-6 w-6 text-fuchsia-500"
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
  );
}
