import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return <div>
    <header className="flex items-center justify-between">
      <h1 className="bg-gradient-to-r from-yellow-400 via-lime-500 to-green-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{project?.name}</h1>
      <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer"
        className="bg-brown-100 rounded-lg text-white-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
        Song Link
      </a>
    </header>

    <div className="text-lg text-red-700 mt-5">
      <PortableText value={project.content} />
    </div>

    <Image src={project.image} alt={project.name} width={400} height={400} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
  </div>
}