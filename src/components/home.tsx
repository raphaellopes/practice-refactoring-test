"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://swapi.dev/api/people");
    console.log(response.data);
    setData(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="">
      <header className="bg-gray-800 text-white text-center p-4">
        <h1 className="text-4xl font-bold">Refactoring test</h1>
      </header>
      <div className="max-w-3xl m-auto">
        <h2 className="text-2xl font-bold mt-4">Star Wars Characters</h2>
        <ul>
          {data.map((item: any) => (
            <li key={item.name} className="border-b last:border-0 py-4">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
