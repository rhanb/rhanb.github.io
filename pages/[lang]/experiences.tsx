import { readdirSync } from "fs";
import { read } from "gray-matter";
import { NextPage } from "next";

import { getStaticPathsWithLocale } from "../../lib/internationalization";

type Experience = {
  beginDate: string;
  endDate: string;
  company: string;
  infos: string[];
  location: string;
  technologies: string[];
  title: string;
};

type ExperiencesPageProps = {
  experiences: Experience[];
};
const ExperiencesPage: NextPage<any> = ({
  experiences,
}: ExperiencesPageProps) => {
  return <p>Experiences</p>;
};

export const getStaticProps = ({ params }) => {
  const { lang } = params;

  const fileNames = readdirSync(`${process.cwd()}/content/experiences`);

  const langFileNames = fileNames.filter((fileName) => fileName.includes(lang));

  const experiences = langFileNames.map(
    (langFileName) =>
      read(`${process.cwd()}/content/experiences/${langFileName}`).data
  );

  return { props: { experiences, lang } };
};

export const getStaticPaths = () => {
  return { paths: getStaticPathsWithLocale("experiences"), fallback: true };
};

export default ExperiencesPage;
