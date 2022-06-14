import { count } from "console";
import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
//import { League, Datum } from '../types'
import { useState } from "react";

const imageLink =
  "http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/";
const imageLoader =
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

//{count >= 159 && (setCount(0))}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  personajes,
}) => {

  const [count, setCount] = useState(-1)
  {
    count >= 155 && (setCount(-1))
  }
  {
    count <= -2 && (setCount(154))
  }

  return (


    <div className="flex items-center align-middle bg-black overflow-hidden">

      <div className="grid grid-cols-7 gap-4 grid-rows-4 items-center align-middle place-items-center">

      <div className="scale-75 -skew-y-12 w-1/2 h-full row-span-4 col-span-1 rounded bg-lime-700 overflow-hidden hover:origin-bottom-left" onClick={() => setCount(count - 1)}></div>
        {

          personajes.map((champ, index) => (

            index > 0 + count && index < 6 + count && (

              <div key={champ.key} className="row-span-4 col-span-1 rounded items-center align-middle overflow-hidden">

                <div className="relative overflow-clip text-center items-center align-middle">
                  <img className="object-fill mx-auto items-center align-middle overflow-clip hover:scale-150" src={imageLoader.concat(champ.id, "_0.jpg")}></img>
                  <span className="absolute px-2 bottom-1 left-1 font-bold text-white">{champ.name}</span>

                </div>

              </div>


            )
          ))}
          <div className="scale-75 skew-y-12 w-1/2 h-full row-span-4 col-span-1 rounded bg-lime-700 overflow-hidden hover:origin-bottom-left" onClick={() => setCount(count - 1)}>
            
          </div>
      </div>

    </div>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const leagueAPI =
    "https://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json";

  const res = (await (await fetch(leagueAPI)).json()) as League;

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