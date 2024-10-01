import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import NewsCard from "../Cards/NewsCard";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;


function TopHeadlines() {
  const [inputs, setInputs] = useState([]);

  useEffect( ()=> {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`)
    .then( res => setInputs(res.data.articles) )
  },[])
  return (
    <>
      {
        inputs.length == 0 ? (
          <p className="text-3xl text-center">no data loaded : request limit exceeded 😥</p>
        ) : (
            <div className="flex flex-wrap ">
        {
          inputs.map( (article) => {
            console.dir(article);
            
            return <NewsCard {...article} key={article?.url} /> 
          })
        }
      </div> 
        )
      }


     
    </>
  )
}

export default TopHeadlines