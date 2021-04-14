import React from 'react'
export const about = () => {
    return (
        <div>
            <p className="text-primaryGray  text-center md:text-4xl text-2xl underline  font-bold py-10">
                About
            </p>

           

            <div className="md:px-72">
            <p className="text-darkGray   items-center justify-center md:text-xl text-sm    py-2">Hi, I'm Swaraj Pawar, 25 years old. living in Mumbai & working as Software Developer.</p>
            <p className="text-darkGray   items-center justify-center md:text-xl text-sm    py-2">After getting my Bachelors degree in Computer Engineering I decided to become a full-time full stack developer. Late 2019 , I began working as software developer at MTCLLP, a medical domain advertising agency.  </p>
            
            {/* <Image className="items-center justify-center rounded shadow " src="/swa-raj.jpg" alt="picture of author" width="full" height={400}/> */}
            <img src="/swaraj.jpg" alt="picture of author " className="w-full border border-black rounded "/>
            <p className="text-darkGray   items-center justify-center md:text-xl text-sm    py-2">Apart from desing and code , I love playing cricket, online games for fun or watching movies and web series. I also love Cofee</p>
            </div>
      </div>
    )
}
export default about