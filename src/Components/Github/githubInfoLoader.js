// fast forward error something 

import axios from "axios";

const GITHUB_TOKEN =  import.meta.env.GITHUB_TOKEN;



export const githubInfoLoader = async () => {
    const response = await axios.get(`https://api.github.com/users/AyushK101`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`
      }
    })
    console.log("response" , response);
  
    return response
  }