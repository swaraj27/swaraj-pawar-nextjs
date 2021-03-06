import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <p className="text-primaryGray  text-center md:text-4xl text-2xl   underline font-bold py-4">
        Swaraj Pawar
      </p>
      <p className="text-darkGray items-center md:text-xl text-xs md:px-72 justify-center px-4">I'm Software Developer. I'm working on frontend and backend. I'm working on <span className="text-primaryGreen "> Spring Boot JPA, React NextJs, Tailwindcss and Android.</span>  I build things for web and android.</p>
   
    <div className="flex-none md:flex md:my-4 py-4 text-primaryGray px-4 md:px-12">

      <div className="group md:flex-1 rounded  border border-primaryGray my-4 md:my-0  md:px-10  md:py-4 md:mx-10 hover:bg-primaryGray"> 
        <p className="text-lg text-primaryGreen font-semibold py-2 px-2 group-hover:text-primaryBackround">Web App Design</p>
        <p className="text-darkGray text-sm md:text-base py-2 px-2 group-hover:text-primaryBackround"> Whether it's designing a new product or refreshing the design of an existing application, I'm happy to help making project beautiful and easy to use. </p>
      </div>
      
      <div className="group md:flex-1 rounded  border border-primaryGray md:px-10 md:py-4 md:mx-10 hover:bg-primaryGray ">
        <p className="text-lg text-primaryGreen font-semibold py-2 px-2 group-hover:text-primaryBackround">Front-end Development</p>
        <p className="text-darkGray text-sm  md:text-base py-2 px-2 group-hover:text-primaryBackround">Modern browsers offer a lot of possibilities but also demand for specialized approach. I translate designs to production ready HTML, CSS and Javascript and React complete my frontend stack.</p>
      </div>
    
    </div>
    
    <div className="flex-none  md:flex md:my-4  text-primaryGray px-4 md:px-12">
      <div className="group md:flex-1 rounded border border-primaryGray   md:px-10  md:py-4 md:mx-10 hover:bg-primaryGray"> 
        <p className="text-lg text-primaryGreen font-semibold py-2 px-2 group-hover:text-primaryBackround">Mobile Design</p>
        <p className="text-darkGray text-sm  md:text-base py-2 px-2 group-hover:text-primaryBackround"> I can developed and design mobile apps for android. I can use microservices for app devlopment. I used Java  for app development and design.
        </p>
      </div>

      <div className="group md:flex-1 rounded  border border-primaryGray my-4 md:my-0 md:px-10  md:py-4 md:mx-10 hover:bg-primaryGray">
      <p className="text-lg text-primaryGreen font-semibold py-2 px-2 group-hover:text-primaryBackround">Rest API's</p>
      <p className="text-darkGray text-sm md:text-base py-2 px-2 group-hover:text-primaryBackround">I'm  using Rest Api's for backend development. I Prefered Java for backend. I used  Spring Boot framework  for developing microservices.</p>
      </div>
    </div>
    </div>
  );
}
