import Image from "next/image";
import Lights from "./themes/lights";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Lights/>
      <div className="relative mt-10">
        <h1 className="text-4xl font-bold tracking-tight">BlogFolio :
        Building <span className="block text-purple-400">UI/UX</span> for the web.
        </h1>
        <p className="mt-6 text-xl text-gray-500 leading-8">BlogFolio is a simple blogfolio website built with Next.js and Tailwind CSS.</p>
        <div className="flex mt-10 gap-6">
          <button className="px-6 py-3 rounded-4xl bg-purple-600 text-white font-medium hover:bg-purple-700">About Me</button>
          <button className="px-6 py-3 rounded-4xl border border-purple-600 bg-transparent text-white font-medium hover:bg-purple-700">Contact Me</button>
        </div>
      </div>
      <ProjectSection/>
    </div>
  );
}
