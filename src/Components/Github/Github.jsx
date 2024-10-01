// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    // let [data, setData] = useState({
    //     userName: null,
    //     img: null,
    //     name: null,
    //     location: null,
    //     twitter_username: null,
    //     followers: null,
    //     following: null,
    // })
    
    // useEffect( ()=>{
    //   axios.get(`https://api.github.com/users/AyushK101`, {
    //     headers: `${GITHUB_TOKEN}`
    //   })
    //   .then(res => setData(res.data))
    // },[])
    
    const data = useLoaderData()
    console.log("data", data.data);

  return (
    <>
      <div className='text-center  font-mono font-bold text-4xl bg-slate-700 text-white p-4 m-3'>Name: {data?.data?.name}</div>
      <div className='text-center font-mono font-bold text-4xl bg-slate-700 text-white p-4 m-3'>Username: {data?.data?.login}  </div>
      <div className='text-center font-mono font-bold text-4xl bg-slate-700 text-white p-4 m-3'>twitter_username: {data?.data?.twitter_username}  </div>
    <div className='text-center font-mono font-bold text-4xl bg-slate-700 text-white pl-[40%] m-3 '><img src={data?.data?.avatar_url} /> </div>
    <div className='text-center font-mono font-bold text-4xl bg-slate-700 text-white p-4 m-3'>location: {data?.data?.location} </div>
    <div className='text-center font-mono font-bold text-4xl bg-slate-700 text-white p-4 m-3'>Github Followers: {data?.data?.followers} </div>
    <div className='text-center font-mono font-bold text-4xl bg-slate-700 text-white p-4 m-3'>Github Followers: {data?.data?.following} </div>
    </>
    
  )
}

export default Github

