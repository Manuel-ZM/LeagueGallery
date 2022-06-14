import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { type } from 'os';

//https://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json
//https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg


let data  = ''


const requestURL = 'https://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json';
const request = new Request(requestURL);

fetch(request)
 .then(function(response) {
   return response.json();
 })
 .then(function(myJson) {

   data=myJson

console.log(data)
console.log(Array.isArray(data))

console.log(data["data"])
console.log(data["data"]["Aatrox"])
console.log(data["data"]["LeeSin"])

const champions = Object.keys(data.data);
const randomChampion = data.data[champions[Math.floor(Math.random() * champions.length)]];
console.log(randomChampion);

});


const Home: NextPage = () => {
  return (
    <div>
      hi
      <img src="http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/Aatrox.png"></img>
      <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg"></img>
      <p>
        {JSON.stringify(data["LeeSin"])}
        </p>

</div>
  )
}

export default Home