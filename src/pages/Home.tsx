import React from 'react'
import { Link } from 'react-router-dom'

import SmallSwitcher from '../components/Switchers/Small'
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
                    <div className="flex-1">
                        <div className="relative h-96">
                            <div className="absolute h-full overflow-hidden">
                                <div className="flex space-x-5 h-full" style={{ width: `${2000}px`, transform: `translateX(${0}px)` }}>
                                    <NewsCard />
                                    <NewsCard />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 w-full flex">
                            <div className="flex items-center space-x-4 w-full">
                                <div className="transform rotate-180">
                                    <img src="/static/images/icons/arrow.png" alt="" />
                                </div>
                                <div className="flex-1 bg-gray-400 h-1px">
                                    <div className="rounded bg-pink w-10 h-2 transform -translate-y-1/2"></div>
                                </div>
                                <div className="">
                                    <img src="/static/images/icons/arrow.png" alt="" />
                                </div>
                            </div>
                            <div className="flex space-x-2 items-center text-2xl ml-20">
                                <div className="">1</div>
                                <div className="h-1px w-5 bg-pink "></div>
                                <div className="">2</div>
                            </div>
                        </div>
                        <div className="flex h-20 mt-20">
                            <div className="flex space-x-20">
                                <Link to="#">
                                    <img src="/static/images/icons/telegram.png" alt="" />
                                </Link>
                                <Link to="#">
                                    <img src="/static/images/icons/vk.png" alt="" />
                                </Link> 
                                <Link to="#">
                                    <img src="/static/images/icons/discord.png" alt="" />
                                </Link> 
                            </div>
                            <div className="ml-20 text-xs text-gray-400">
                                <div className="">Server stats:</div>
                                <div className="flex space-x-5 mt-1">
                                    <SmallSwitcher type="regular" text="RUS" checked={ true } />
                                    <SmallSwitcher type="positive" text="EU" checked={ true } />
                                    <SmallSwitcher type="negative" text="US" checked={ true } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
