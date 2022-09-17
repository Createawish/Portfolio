import Head from 'next/head';
import NavBar from "../components/NavBar/NavBar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import {data} from '/data';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Valeria | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavBar/>
        <Main/>
        <About data={data}/>
        <Skills data={data}/>

    </div>
  )
}
