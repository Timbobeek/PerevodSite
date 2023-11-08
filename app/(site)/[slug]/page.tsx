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
      {page.image &&    
        <Image src={page.image} alt={page.title} width={400} height={108} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
      }
      {/* code above means "if page.image is truthy then return image component" */}
      <PortableText value={page.content} />
    </div>
  )
}