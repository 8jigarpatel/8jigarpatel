import React from "react";

import { IconType } from "react-icons";
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { FaSquareGithub, FaSquarePen } from 'react-icons/fa6';

import resume from "../src/assets/documents/JigarPatel.pdf";

interface LinkButtonProps
{
  text: string;
  href: string;
  icon: IconType;
}

function LinkButton(props: LinkButtonProps) {
  const { text, href, icon: Icon } = props;
  return (
    <a href={href} target="new" >
      <button className="mx-2 flex w-min items-center gap-2 rounded-lg border-2 border-slate-300 p-1 px-2 transition-all hover:bg-slate-300 dark:border-slate-700 hover:dark:bg-slate-700 md:text-3xl">
        {text} <Icon />
      </button>
    </a>
  );
}

function App() {
  const [theme, setTheme] = React.useState('');

  React.useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
 const toggleTheme = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-100 p-5 text-black transition-all dark:bg-slate-800 dark:text-white md:p-10">

      <nav className="flex justify-between">
        <a className='font-mono text-xl text-slate-400 underline dark:text-slate-500' href="https://github.com/8jigarpatel/jigarpatel" target="new">
          code on GitHub
        </a>
        <div className='text-lg'>
          <button onClick={toggleTheme} className="select-none">
            <div className={`absolute transition-all ${theme === 'dark' ? 'rotate-45 opacity-0' : ''}`}><BsMoonStarsFill /></div>
            <div className={`transition-all ${theme === 'dark' ? '' : 'rotate-45 opacity-0'}`}><BsSunFill /></div>
          </button>
        </div>
      </nav>

      <div className="mx-auto mt-16 flex w-80 flex-col py-3 text-center md:mt-24">
        <div className="text-5xl md:text-6xl">
          Jigar Patel
        </div>
        <div className="pt-3 font-mono text-xl md:pt-6 md:text-2xl">
          Full-Stack Developer
        </div>
        <a target="new" href={resume} className="pt-3 text-lg text-blue-800 underline dark:text-blue-300">
          view my resume ↗
        </a>
      </div>

      <div className="mx-auto flex w-min pt-3">
        <div>
          <LinkButton href="https://www.linkedin.com/in/8jigarpatel/" text="LinkedIn" icon={FaSquareGithub} />
        </div>
        <div>
          <LinkButton href="https://github.com/8jigarpatel" text="GitHub" icon={FaSquareGithub} />
        </div>
        <div>
          <LinkButton href="https://8jigarpatel.hashnode.dev/" text="Blog" icon={FaSquarePen} />
        </div>
      </div>

    </div>
  )
}

export default App
