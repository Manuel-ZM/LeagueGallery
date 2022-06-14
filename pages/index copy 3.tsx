import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  personajes,
}) => {
  return (
    <div>
      hi
      <img src="http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/Aatrox.png"></img>
      <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg"></img>
      {personajes.map((champ) => (
        <li key={champ.key}> {champ.name} </li>
      ))}
    </div>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const ENDPOINT =
    "https://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json";

  const res = (await (await fetch(ENDPOINT)).json()) as League;

  const data = Object.keys(res.data).reduce((acc, curr) => {
    const datum = res.data[curr];
    acc.push(datum);
    return acc;
  }, [] as Datum[]);

  return {
    props: {
      personajes: data,
    },
  };
};

export default Home;