import React from "react";

import { IconType } from "react-icons";
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { FaAngular, FaCodeFork, FaDocker, FaGitAlt, FaLinkedin, FaReact, FaSquareGithub, FaSquarePen } from 'react-icons/fa6';
import { SiDotnet, SiExpress, SiJavascript, SiMicrosoft, SiOpenapiinitiative, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';

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
    <a href={href} target="new" className="">
      <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-xl transition-all hover:bg-slate-200 dark:border-slate-700 hover:dark:bg-slate-700 md:text-2xl">
        {text} <Icon />
      </button>
    </a>
  );
}

function App() {
  const [theme, setTheme] = React.useState('');

  React.useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
 const toggleTheme = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.theme = 'dark';
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="h-full min-h-screen w-screen p-5 text-black transition-all dark:bg-slate-800 dark:text-white md:p-10">
      <div className="mx-auto w-min">

        <nav className="flex justify-between">
          <a className='flex items-center gap-1 font-mono text-sm text-slate-300 dark:text-slate-700' href="https://github.com/8jigarpatel/jigarpatel" target="new">
            fork on GitHub <FaCodeFork />
          </a>
          <div className='text-lg'>
            <button onClick={toggleTheme} className="select-none">
              <div className={`absolute transition-all ${theme === 'dark' ? 'rotate-45 opacity-0' : ''}`}><BsMoonStarsFill /></div>
              <div className={`transition-all ${theme === 'dark' ? '' : 'rotate-45 opacity-0'}`}><BsSunFill /></div>
            </button>
          </div>
        </nav>

        <div className="mx-auto mt-10 flex flex-col py-3 text-left md:mt-14">
          <div className="text-5xl font-bold text-blue-900 dark:text-orange-400 md:text-6xl">
            Jigar Patel
          </div>
          <div className="pt-3 font-mono text-xl text-green-900 dark:text-yellow-300 md:pt-6 md:text-2xl">
            Full-Stack Developer
          </div>
          <a target="new" href={resume} className="pt-3 text-lg text-blue-800 underline dark:text-blue-300">
            View my resume ↗
          </a>
        </div>

        <div className="mx-auto flex w-min flex-col gap-2 pt-3 md:flex-row">
          <div className="w-80 flex-initial text-blue-600 dark:text-blue-400 md:w-56">
            <LinkButton href="https://www.linkedin.com/in/8jigarpatel/" text="LinkedIn" icon={FaLinkedin} />
          </div>
          <div className="w-80 flex-initial text-purple-500 dark:text-purple-400 md:w-56">
            <LinkButton href="https://github.com/8jigarpatel" text="GitHub" icon={FaSquareGithub} />
          </div>
          <div className="w-80 flex-initial text-teal-700 dark:text-teal-400 md:w-56">
            <LinkButton href="https://8jigarpatel.hashnode.dev/" text="Blog" icon={FaSquarePen} />
          </div>
        </div>

      <div className="mt-8 font-mono text-gray-600 dark:text-gray-300 md:mt-10">
        <div className="text-xl font-semibold">
          Professional skills
        </div>
        <div className="mt-2 flex flex-col gap-2 text-lg md:flex-row">
          <div className="w-80 rounded-md bg-teal-50 dark:bg-teal-800 md:w-56">
            <p className="rounded-t bg-teal-100 p-1 px-3 font-semibold dark:bg-teal-900 md:p-2">Backend</p>
            <ul className="p-1 px-3 md:p-2">
              <li className="flex items-center gap-2"><SiDotnet className="text-yellow-500" /> C# .NET Core</li>
              <li className="flex items-center gap-2"><SiExpress className="text-green-600" />Express (Node JS)</li>
              <li className="flex items-center gap-2"><SiOpenapiinitiative className="text-green-600" />Open API</li>
            </ul>
          </div>
          <div className="w-80 rounded-md bg-emerald-50 dark:bg-emerald-800 md:w-56">
            <p className="rounded-t bg-emerald-100 p-1 px-3 font-semibold dark:bg-emerald-900 md:p-2">Frontend</p>
            <ul className="p-1 px-3 md:p-2">
              <li className="flex items-center gap-2"><FaAngular className="text-red-500" /> Angular</li>
              <li className="flex items-center gap-2"><FaReact className="text-blue-500" /> React</li>
              <li className="flex items-center gap-2"><SiTailwindcss className="text-sky-600" /> Tailwind CSS</li>
              <li className="flex items-center gap-2"><SiJavascript className="text-yellow-600" /> JavaScript</li>
            </ul>
          </div>
          <div className="w-80 rounded-md bg-cyan-50 dark:bg-cyan-800 md:w-56">
            <p className="rounded-t bg-cyan-100 p-1 px-3 font-semibold dark:bg-cyan-900 md:p-2">Others</p>
            <ul className="p-1 px-3 md:p-2">
              <li className="flex items-center gap-2"><FaGitAlt className="text-red-400" /> Git</li>
              <li className="flex items-center gap-2"><FaDocker className="text-blue-400" />Docker</li>
              <li className="flex items-center gap-2"><SiPostgresql className="" /> SQL / PostgreSQL</li>
              <li className="flex items-center gap-2"><SiTypescript className="text-blue-400" /> TypeScript</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-gray-600 dark:text-gray-300 md:mt-10">
        <div className="text-xl font-semibold">
          Licenses & certifications
        </div>
        <div className="mt-2 flex flex-col gap-2 rounded-md border border-slate-200 p-2 dark:border-slate-700">

          <div className="flex min-w-full flex-col p-2 md:flex-row md:items-center">
            <div className="flex items-center md:flex-1">
              <SiMicrosoft className="" />
              <p className="flex-1 rounded-t p-1 px-3 font-semibold md:p-2">Microsoft Certified: Azure Developer Associate</p>
            </div>
            <div className="">
              <a target="new" href="https://www.credly.com/badges/498988bf-b34d-42df-8996-f5c4d978eb2c" className="pt-3 text-blue-800 underline dark:text-blue-300">
                Show credential ↗
              </a>              
            </div>
          </div>

          <div className="flex min-w-full flex-col border-t border-slate-200 p-2 dark:border-slate-700 md:flex-row md:items-center">
            <div className="flex items-center md:flex-1">
              <SiMicrosoft className="" />
              <p className="flex-1 rounded-t p-1 px-3 font-semibold md:p-2">MCSA: Web Applications</p>
            </div>
            <div className="">
              <a target="new" href="https://www.credly.com/badges/cab84dfb-6a80-4527-b160-b4d43aa2ff60" className="pt-3 text-blue-800 underline dark:text-blue-300">
                Show credential ↗
              </a>              
            </div>
          </div>

          <div className="flex min-w-full flex-col border-t border-slate-200 p-2 dark:border-slate-700 md:flex-row md:items-center">
            <div className="flex items-center md:flex-1">
              <SiMicrosoft className="" />
              <p className="flex-1 rounded-t p-1 px-3 font-semibold md:p-2">MCSD: App Builder</p>
            </div>
            <div className="">
              <a target="new" href="https://www.credly.com/badges/de0d8a97-8676-4693-a6ac-c10f79b009b3" className="pt-3 text-blue-800 underline dark:text-blue-300">
                Show credential ↗
              </a>              
            </div>
          </div>

        </div>
      </div>

      </div>
    </div>
  )
}

export default App
