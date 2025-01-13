import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Typing for the fetched data
interface CameData {
  name: string;
  imageUrl: string;
}

// Function to fetch data from Sanity
async function GetData(): Promise<CameData[]> {
  const fetchdata = await client.fetch(`*[_type == 'textDocument']{
    name,
    "imageUrl": image.asset->url
  }`);
  return fetchdata;
}

export default async function Page() {
  // Fetch the data
  const data: CameData[] = await GetData();

  // Check if data is empty
  if (!data || data.length === 0) {
    return <p className="text-center text-white">No data found. Please check your Sanity setup.</p>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white gap-16">
      {data.map((item: CameData, i: number) => (
        <div key={i}>
          <h1 className="text-[20px] font-bold text-3xl">{item.name}</h1>
          <Image src={item.imageUrl} alt={item.name} width={200} height={200} />
        </div>
      ))}
    </div>
  );
}

// ISR with App Router
export const revalidate = 60; // Revalidate every 60 seconds
