

function Card({
    urlToImage,
    Name,
    author,
    title,
    description,
    date
}) {
  return (
    <>
        <div className='w-full h-auto px-2 py-3 mb-3 '>
            <img src={urlToImage} alt="" className='h-auto w-36 rounded-lg'/>
            <div className="flex flex-col items-center">
                <div>{Name}</div>
                <div>{author}</div>
                <div>{title}</div>
                <div>{description}</div>
                <div>{date}</div>
            </div>
        </div>
    </>
  )
}

export default Card

