"use client";

import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";

export default function Person({ id }: { id: any }) {
  const [data, setData] = useState<any>([]);
  const [films, setFilms] = useState<any>([]);
  const [starships, setStarships] = useState<any>([]);

  const fetchData = async () => {
    const response = await axios.get("https://swapi.dev/api/people/" + id);
    setData(response.data);

    for (let i = 0; i < response.data.films.length; i++) {
      const film = await axios.get(response.data.films[i]);
      setFilms((films: any) => [...films, film.data]);
    }

    for (let i = 0; i < response.data.starships.length; i++) {
      const starship = await axios.get(response.data.starships[i]);
      setStarships((starships: any) => [...starships, starship.data]);
    }
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
        <h1 className="flex-1 text-4xl font-bold">{data?.name}</h1>
      </header>
      <div className="max-w-3xl m-auto">
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

        <h3 className="text-lg font-bold mt-4">
          Films
          <span className="bg-gray-800 text-white px-2 py-0.5 rounded-full text-xs ml-1">
            {films?.length}
          </span>
        </h3>
        <ul>
          {films.map((film: any) => (
            <li key={film.title} className="border-b last:border-0 py-4">
              {film.title} -{" "}
              <span>{moment(film.release_date).format("MM/DD/YYYY")}</span>{" "}
              <br />
              <small className="text-gray-500">
                <b>Director: </b>
                {film.director}
              </small>{" "}
              <br />
              <small className="text-gray-500">
                <b>Producer: </b>
                {film.producer}
              </small>
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold mt-4">
          Starships
          <span className="bg-gray-800 text-white px-2 py-0.5 rounded-full text-xs ml-1">
            {starships?.length}
          </span>
        </h3>
        <ul>
          {starships.map((starship: any) => (
            <li key={starship.title} className="border-b last:border-0 py-4">
              {starship.name} <br />
              <small className="text-gray-500">
                <b>Crew: </b>
                {starship.crew}
              </small>{" "}
              <br />
              <small className="text-gray-500">
                <b>Cost in credits: </b>${starship.cost_in_credits}
              </small>
              <br />
              <small className="text-gray-500">
                <b>Passengers: </b>
                {starship.passengers}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
