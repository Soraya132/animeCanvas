import {
    Card,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image";import Link from "next/link";
interface Props{
    id:string,
    title:string,
    image:string,
    downloadLink:string
   
}
const ResourceCard = ({id,title,image,downloadLink}:Props) => {
  return (
    <Link href={downloadLink? downloadLink:""} target="_blank" >
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
            <Image 
              src={image}
              className="h-[220px] rounded-md object-cover"
              width={384}
              height={440}
              alt={title}
            />
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
        </CardHeader>
    </Card>
    </Link>

  )
}

export default ResourceCard