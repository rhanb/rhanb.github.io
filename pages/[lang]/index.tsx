import { getStaticPathsWithLocale } from "../../lib/internationalization";
import Card from "../../ui/Card";

/* const getBrowserTheme = (): Theme => {
  return window && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
} */

const Index = () => {
  return <Card />;
};

export const getStaticProps = ({ params }) => {
  const { lang } = params;

  return { props: { lang } };
};

export const getStaticPaths = () => {
  return { paths: getStaticPathsWithLocale(""), fallback: true };
};

export default Index;
