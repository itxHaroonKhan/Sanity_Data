import { client } from "@/sanity/lib/client";
import Image from 'next/image';

// Typing for the fetched data
interface CameData {
  name: string; // Name of the document
  imageUrl: string; // URL of the image from Sanity
}

// Function to fetch data from Sanity
async function GetData() {
  try {
    // Added error handling for better debugging
    const fetchdata = await client.fetch(`*[_type == 'textDocument']{
      name,
      "imageUrl": image.asset->url
    }`);
    return fetchdata;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error); // Log errors to console
    return []; // Return an empty array in case of failure
  }
}

export default async function Home() {
  // Fetch data
  const data = await GetData();

  // Logging for debugging (Remove in production)
  console.log(data);

  // Check if data is empty and provide fallback UI
  if (data.length === 0) {
    return <p className="text-center text-white">No data available. Please check your Sanity setup.</p>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white gap-16">
      {/* Rendering fetched data */}
      {
        data.map((item: CameData, i: number) => (
          <div key={i}>
            {/* Key Usage: It's better to use unique keys instead of index */}
            <h1 className="text-[20px] font-bold text-3xl">{item.name}</h1>
            {/* Ensure next.config.js allows the domain for images */}
            <Image src={item.imageUrl} alt="asim" width={200} height={200} />
          </div>
        ))
      }
    </div>
  );
}
