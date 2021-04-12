import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';  

const links = [
    {
        id:"01.",
        title:"Home",
        path:"/",
    },
    {
        id:"02.",
        title:"Work",
        path:"/work",
    },
    {
        id:"03.",
        title:"About",
        path:"/about",
    },
    {
        id:"04.",
        title:"Contact",
        path:"/contact",
    }
    
]

export const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = React.useState(false)

    return (
        <div>
            <nav className="relative flex flex-wrap items-center justify-between text-white px-2 py-0 bg-primaryOrange">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between py-5 lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4  whitespace-no-wrap uppercase text-black"
            >
              <a className="">
                <p className="text-lg text-primaryGreen font-semibold">Swaraj Pawar</p> 
               <p className="text-xs text-darkGray"> Spring Boot | React NextJs</p>
              </a>
            </Link>

            <button
              className="text-white cursor-pointer text-xl   leading-none block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} className="w-4" />
            </button>
          </div>

          <div
            className={
              "lg:flex items-center " + (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul
              className={
                navbarOpen
                  ? "flex-col hidden md:flex py-4 md:flex-row md:space-x-4"
                  : "flex"
              }
            >
              {links.map((data, mindex) => {
                return (
                  <li
                    key={mindex}
                    className="group inline-block relative px-2 py-2"
                  >
                    <Link href={data.path}>
                      <a className="flex gap-1 items-center">
                        <span className="text-primaryGreen px-1 text-xs">{data.id}</span>
                        <span className="text-darkGray text-sm hover:text-primaryGreen">{data.title} </span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>


        {/*Mobile Drawer  */}


        <div
        className={
          navbarOpen
            ? "z-10 absolute top-0 left-0 w-1/2 md:w-0 md:hidden bg-white shadow-xl h-screen bg-primaryBackround  overflow-hidden"
            : "z-10 absolute top-0 left-0 w-0 md:w-0 md:hidden bg-white shadow-xl h-screen overflow-hidden"
        }
      >
        <div className="bg-primaryOrange py-2 px-1">
          <Link href="/">
            <a>
            <p className="text-sm text-primaryGreen font-semibold">Swaraj Pawar</p> 
               <p className="text-xs text-darkGray"> Spring Boot | React NextJs</p>
            </a>
          </Link>
        </div>

        <ul className="flex-col ml-2 px-2  overflow-hidden py-4 space-y-3 md:flex-row md:space-x-4">
          {links.map((data, index) => {
            return (
              <li>
                <Link key={index} href={data.path}>
                  <a className="flex gap-1 items-center">
                  <span className="text-primaryGreen px-1 text-xs">{data.id}</span>
                  <span className="text-darkGray text-sm hover:text-primaryGreen">{data.title} </span>
                  </a>
                </Link>

                
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    )
}

export default Navbar;