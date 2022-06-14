import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { League, Datum } from '../types'

//https://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json
//https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
//https://rickandmortyapi.com/api/character




const Home: NextPage<{ personajes: { [key: string]: Datum }  }> = ({ personajes }) => {
  return (
    <div>
      hi
      <img src="http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/Aatrox.png"></img>
      <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg"></img>

        {
         //JSON.stringify(personajes)
         //console.log(Array.isArray(personajes))
         //console.log(personajes["Aatrox"])
         //console.log(personajes["LeeSin"])
         //Array.from(personajes).map((champion) => {
         // return <li key={champion.key}>{champion.name}</li>
          
         //})
          personajes.toString()
        }
        <p>
        {JSON.stringify(personajes["LeeSin"])}
        </p>
        


</div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
const res = await fetch("https://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json");
const { data }: League = await res.json();


return {
  props: {
    personajes: data,
  },
}

}

export default Home