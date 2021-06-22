import React from 'react'
import { Link } from 'react-router-dom'

import SmallSwitcher from '../components/Switchers/Small'
import NewsCard from '../components/Cards/NewsCard/NewsCard'
import NewsPreview from '../components/Cards/NewsCard/Preview'
import NewsSlider from '../components/NewsSlider/NewsSlider'

export default function index() {
    return (
        <div className="flex flex-col mt-20 text-white">
            <div className="absolute -top-64 -left-1/2">
                <img className="solder z-0" src="/static/images/design/solder.png" alt="" />
            </div>
            <div className="container m-auto relative z-10">
                <div className="flex xl:flex-row flex-col xl:items-start items-center">
                    <div className="xl:mr-32 xl:mt-64 xl:mb-0 mb-20">
                        <button className="text-lg font-bold text-white bg-pink rounded-xl px-8 py-2 focus:outline-none">TIME TO PLAY</button>
                    </div>
                    <div className="flex-1">
                        <NewsSlider>
                            <NewsPreview />
                            <NewsPreview />
                            <NewsPreview />
                            <NewsPreview />
                            <NewsPreview />
                            <NewsPreview />
                        </NewsSlider>
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
                                    <SmallSwitcher type="regular" text="RUS" checked={true} />
                                    <SmallSwitcher type="positive" text="EU" checked={true} />
                                    <SmallSwitcher type="negative" text="US" checked={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-20">
                <img className="absolute top-96 right-0" src="/static/images/news/flashLight1.png" alt="" />
                <div className="relative container m-auto text-white mt-20">
                    <img className="absolute top-12 left-0" src="/static/images/news/news.png" alt="" />
                    <div className="">
                        <div className="text-5xl font-bold">#NEWS</div>
                        <div className=""></div>
                    </div>
                    <div className="relative my-20 flex flex-col space-y-5">
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
