"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";

export default function Person({ id }: { id: any }) {
  const [data, setData] = useState<any>([]);
  const [totalPeople, setTotalPeople] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("https://swapi.dev/api/people/" + id);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="">
      <header className="flex items-center justify-center space-x-4 bg-gray-800 text-white text-center p-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          <Link href="/">Back</Link>
        </button>
        <h1 className="text-4xl font-bold">Refactoring test</h1>
      </header>
      <div className="max-w-3xl m-auto">
        <h2 className="text-2xl font-bold mt-4">{data?.name}</h2>

        <h3 className="text-lg font-bold mt-4">Characteristics</h3>

        <p className="mt-4">
          <strong>Eye color:</strong> {data?.eye_color}
        </p>
        <p>
          <strong>Hair color:</strong> {data?.hair_color}
        </p>
        <p>
          <strong>Gender:</strong> {data?.gender}
        </p>
        <p>
          <span className="font-bold">Height:</span> {data?.height}
        </p>
        <p>
          <span className="font-bold">Mass:</span> {data?.mass}
        </p>
        <p className="mb-4 border-b pb-4">
          <strong>Skin color:</strong> {data?.skin_color}
        </p>
      </div>
    </main>
  );
}
