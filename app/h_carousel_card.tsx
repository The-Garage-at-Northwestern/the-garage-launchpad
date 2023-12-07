import Image from "next/image";

export default function Home(props: {image: Image; text: string;}) {
    return(
        <div className="flex flex-col border-white border mx-1 ">
            <Image
              alt= "Carousel Image"
              src={props.image}
            />
            <h1 className="text-sm px-1 py-4">{props.text}</h1>
        </div>
    )}