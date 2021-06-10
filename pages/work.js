import React from 'react'
import Meta from "../components/Meta"
import Link from "next/link";


const ProjectList = [
    {
        title:"My Event Solution",
        technology:"Spring Boot, JPA, Postgresql, ReactJs",
        link:"#"
    },

    {
        title:"Ad Mockup Tool",
        technology:"Next-js, ReactJs, Tailwindcss",
        link:"https://www.virtuallyactual.com/admockup-next/"
    },

    {
        title:"Psoriasis Epidemiology Screening Tool",
        technology:"ReactJs, JavaScript, Tailwindcss ",
        link:"#"
    },

    {
        title:"Polls Application",
        technology:"Spring Boot, Postgresql, Javascript, React js",
        link:"#"
    },

    {
        title:"Fight The Fuse",
        technology:"Android, Firebase",
        link:"#"
    },

    {
        title:"Books Library Eccomerce Website",
        technology:"Java, Spring, Hibernate, Jsp, H2-database",
        link:"https://github.com/swaraj27/Book_Eccomerce"
    },
    {
        title:"My Portfolio Website",
        technology:"Next js, React js",
        link:"https://swaraj-pawar27.netlify.app/"
    },
        
]

export const work = () => {
    return (
        <div>
            
        <div className="h-full md:h-screen">
            <Meta title="Work-Swaraj Pawar"/>
            <p className="text-primaryGray  text-center md:text-4xl text-2xl  font-bold py-4">
                Work
            </p>

            <div className="flex flex-wrap md:mx-10">
                {ProjectList.map((data, index)=>{
                    return(
                        <div className="flex items-center justify-center w-full md:w-1/4 py-1"
                        key={index}>
                            <Link href={data.link}>
                                <div className="border border-gray-400 w-full mx-1 px-2 py-10 cursor-pointer hover:no-underline text-center">
                                <p className="text-xs font-semibold text-primaryGreen">{data.title}</p>
                                <p className="text-sm md:text-sm text-darkGray">
                                {data.technology}
                                </p>

                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}
export default work
