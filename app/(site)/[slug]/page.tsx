import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: {
    slug: string,
  }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  return (
    <div>
      <h1 className="text-6xl font-extrabold py-10">{page.title}</h1>
      <Image src={page.image} alt={page.slug} width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
      <PortableText value={page.content} />
    </div>
  )
}