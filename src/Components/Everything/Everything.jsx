import axios from "axios";
import { useEffect, useState } from "react"
import NewsCard from "../Cards/NewsCard";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;


function Everything() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [toFetch, setToFetch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

function handleSubmit(e) {
  e.preventDefault();
  setToFetch(prev => !prev);
  setSearchTerm(input);
}

  useEffect( ()=> {
    toFetch && searchTerm.length != 0 && (
      axios.get(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`)
      .then( res => setData(res.data.articles))
      .catch( err => console.log("error",err))
    )
  },[searchTerm,toFetch])

  return (
    <>
      <div className="bg-slate-400 flex justify-center py-2 items-center rounded-md ">
        <form action="submit" onSubmit={handleSubmit}>
          <input className="mr-4 w-44 h-8 rounded-md"
           type="search"
            value={input} 
            onChange={(e)=> setInput(e.target.value)}
            placeholder="search topic..."
            
           />
          <button className="border px-2 py-1 rounded-md bg-blue-700 text-white text-2xl ">search</button>
        </form>
      </div>
      <div className="flex flex-wrap">
          { data != null ? (
            data.map( (data)=> {
              return <NewsCard key={data.source.id} {...data} /> 
            })
          ) : (
            <p className="text-5xl text-center bg-gray-400 rounded-lg"> <hr /> news will appear here </p>
          )

          }
      </div>
    </>
  )
}

export default Everything