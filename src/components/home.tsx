"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";

export default function Home() {
  const [data, setData] = useState([]);
  const [totalPeople, setTotalPeople] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("https://swapi.dev/api/people");
    setData(response.data.results);
    setTotalPeople(response.data.count);
    if (response.data.next) {
      setDisableNext(false);
    } else {
      setDisableNext(true);
    }

    if (response.data.previous) {
      setDisablePrev(false);
    } else {
      setDisablePrev(true);
    }
  };

  const fetchPage = async (page: number) => {
    const response = await axios.get(
      "https://swapi.dev/api/people?page=" + page,
    );
    setData(response.data.results);

    if (response.data.next) {
      setDisableNext(false);
    } else {
      setDisableNext(true);
    }

    if (response.data.previous) {
      setDisablePrev(false);
    } else {
      setDisablePrev(true);
    }
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
        <nav>
          <p>
            Total people: <strong>{totalPeople}</strong>
          </p>
          <p>
            Current page: <strong>{currentPage}</strong>
          </p>
        </nav>
        <ul>
          {data.map((item: any) => (
            <li key={item.name} className="border-b last:border-0 ">
              <Link
                className="block hover:bg-gray-100 py-4"
                href={`/people/${item.url.split("/")[5]}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <nav className="flex items-center justify-center space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              setCurrentPage((prev) => prev - 1);
              fetchPage(currentPage - 1);
            }}
            disabled={disablePrev}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
              fetchPage(currentPage + 1);
            }}
            disabled={disableNext}
          >
            Next
          </button>
        </nav>
      </div>
    </main>
  );
}
