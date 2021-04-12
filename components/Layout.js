import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Meta from './Meta'

const Layout = ({children}) => {
    return (
        <>
        <div className="bg-primaryBackround">
        <Meta/>
        <Navbar/>
        <div className="h-auto ">
            <main>
                {children}
            </main>
        </div>
        <Footer/>
        </div>
        </>
    );
}

export default Layout
