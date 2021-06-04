import React from 'react'

import NewsCard from '../components/NewsCard/NewsCard'

export default function Home() {
    return (
        <div className="flex flex-col mt-20 text-white">
            <div className="absolute -top-64 -left-1/2">
                <img className="solder z-0" src="/static/images/design/solder.png" alt="" />
            </div>
            <div className="container m-auto relative z-10">
                <div className="flex">
                    <div className="mr-32 mt-64">
                        <button className="text-lg font-bold text-white bg-pink rounded-xl px-8 py-2 focus:outline-none">TIME TO PLAY</button>
                    </div>
                    <div className="relative flex-1 h-96">
                        <div className="absolute flex space-x-5 h-full" style={ { width: `${ 2000 }px` } }>
                            <NewsCard />
                            <NewsCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
