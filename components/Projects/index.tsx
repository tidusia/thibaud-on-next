import Project from "../Project";
import { Project as ProjectType } from "../../data/projects";

type Props = {
  title: string;
  id: string;
  heading?: string;
  subtitle?: string;
  projects: Array<ProjectType>;
};

const Projects = ({ heading, title, subtitle, projects, id }: Props) => (
  <div className="bg-gray-900 pt-16">
    <div id={id}>
      <div className="max-w-screen-xl mx-auto text-center pt-12 sm:pt-16 lg:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto lg:max-w-none">
          {!!heading && (
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              {heading}
            </h2>
          )}
          <p className="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
            {title}
          </p>
          {!!subtitle && (
            <p className="mt-2 text-xl leading-7 text-gray-300">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
    <div className="mt-8 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5">
          {projects.map((project) => (
            <Project {...project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
