import Link from "next/link";

type Props = {
  title: string;
};

const CallToActionCenter = ({ title }: Props) => (
  <div className="bg-white">
    <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        {title}
      </h2>
      <div className="mt-8 sm:flex sm:justify-center">
        <Link href="/contact">
          <a className="btn btn-blue btn-big">Formulaire de contact</a>
        </Link>
        <a
          href="mailto:contact@thibaud-duthoit.fr"
          className="btn btn-light btn-big mt-3 sm:mt-0 sm:ml-3"
        >
          contact@thibaud-duthoit.fr
        </a>
      </div>
    </div>
  </div>
);

export default CallToActionCenter;
