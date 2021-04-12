import React from 'react'
import Head from "next/head"

const Meta = ({title,keywords}) => {
    return (
        <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords"  content={keywords} />
                <meta charSet="utf-8"/>
                <link rel="icon" href=""/>
                <title>{title}</title>
        </Head>
    );
};
Meta.defaultProps ={
    title:"Home - Swaraj Pawar",
    keywords:"portfolio ,swaraj, pawar , swaraj pawar,swaraj pawar portfolio,resume,job, java, sprin boot, react, nextjs "
}

export default Meta
