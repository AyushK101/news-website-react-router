import {  Link, NavLink } from "react-router-dom"

const LOGO = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9m3CZmuzIUBqrQjNoJNRgnVIMLcbOj0ZQg&s`

function Header() {
  return (
    <>
        <div className="flex justify-between items-center mb-2 px-4 py-2 bg-black text-white text-3xl">
        <Link to={'/'}>
        <img src={LOGO} alt="" className='w-16 h-16 max-h-44 max-w-44 rounded-lg' />
        </Link>
        <div>
          <ul className="flex gap-3">
            <li className="border p-2 rounded">
              <NavLink to={'/everything'} 
                  className={({isActive}) =>
                    `${isActive? "text-blue-700":"text-gray-400"} duration-200 hover:text-orange-700`
                }
              >
                Everything
              </NavLink>
            </li>
            <li className="border p-2 rounded">
              <NavLink to={'/topHeadlines'} 
                  className={({isActive}) =>
                    `${isActive? "text-blue-700":"text-gray-400"} duration-200 hover:text-orange-700`
                }
              >
                Top-Headings
              </NavLink>
            </li>
            <li className="border p-2 rounded">
              <NavLink to={'/github'} 
                  className={({isActive}) =>
                    `${isActive? "text-blue-700":"text-gray-400"} duration-200 hover:text-orange-700`
                }
              >
                AboutMe 
              </NavLink>
            </li>
          </ul>
        </div>
        <h1 className="text-white  ">NEWS website by AYUSH</h1>
        </div>
    </>
  )
}

export default Header