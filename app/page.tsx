import { client } from "@/sanity/lib/client";
import Image from 'next/image';

interface CameData {
  name : string,
  imageUrl: string;
}



async function GetData() {
  const fetchdata = await client.fetch(`*[_type == 'textDocument']{
  name,
  "imageUrl": image.asset->url
}`);
  return fetchdata;
}

export default async function Home() {
  const data = await GetData();
  console.log(data);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white gap-16">
      {/* <h1>Haroon Rasheed</h1> */}
      {
        data.map((item:CameData , i:number) => (
          <div key={i}>
            <h1 className="text-[20px] font-bold text-3xl">{item.name}</h1>
            <Image src={item.imageUrl} alt="asim" width={200} height={200}  />
          </div>
        ))
      }
    </div>
  );
}
