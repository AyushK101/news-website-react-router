//! URL ENDPOINT : vs/top-headlines/sources

import axios from "axios";
import { useEffect, useState } from "react";
import SourceCard from "../Cards/SourceCard";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function Home() {
  const [sourceInput, setSourceInput] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines/sources?apiKey=${NEWS_API_KEY}`
      )
      .then((res) => setSourceInput(res?.data?.sources || []))
      .catch((err) => console.log("error",err))

  },[]);
  return (
    <>
      {sourceInput.length == 0 ? (
        <>
          <p className="text-3xl text-center">no data loaded : request limit exceeded 😥</p>
        </>
      ) : (
        <>
          <div className="w-full text-center bg-black text-white text-4xl">
            visit popular sources{" "}
          </div>
          <div className="flex justify-between px-6 flex-wrap ">
            {sourceInput.map((card) => {
              return <SourceCard {...card} key={card?.id} />;
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
