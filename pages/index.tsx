import { count } from "console";
import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
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
    count >= 155 && count <= -2 && (setCount(-1))
    }
    {
    count <= -2 && (setCount(154))
    }

  return (

    <div className="bg-red-700">

<div className="flex flew-row w-full px-6 space-x-4 rounded bg-white">
      {
      
      personajes.map((champ, index) => (
        
        index > 0 + count && index < 6 + count && (

          <div key={champ.key} className="w-1/5 rounded border-2 border-black items-center align-middle">
            
          <div className="relative bg-slate-50 overflow-clip text-center items-center align-middle">
          <img className="overflow-clip hover:scale-150" src={imageLoader.concat(champ.id,"_0.jpg")}></img>
          <span className="absolute px-2 bottom-0 left-0 font-bold text-white">{champ.name}</span>
          
          </div>
        
          </div>
          

        )
      ))}
</div>

<button onClick={() => setCount(count + 1)}>
       Click Here + {count} 
      </button>
      <button onClick={() => setCount(count - 1)}>
       Click Here - {count} 
      </button>
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