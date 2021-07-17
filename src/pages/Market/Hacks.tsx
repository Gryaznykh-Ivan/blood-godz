import React from 'react'
import HackCard from '../../components/Cards/HackCard/HackCard'
import Select from '../../components/Select/Default';

export default function Hacks() {
    return (
        <div className="">
            <img className="absolute top-32 left-0" src="/static/images/skins/flashLight1.png" alt="" />
            <img className="absolute -top-20 right-0" src="/static/images/market/flashLight2.png" alt="" />
            <div className="relative container m-auto text-white mt-20">
                <img className="absolute -top-5 left-0" src="/static/images/market/market.png" alt="" />
                <div className="text-4xl font-bold">#МАРКЕТ</div>
                <div className="relative flex mt-12 space-x-20">
                    <Select />
                    <Select />
                    <div className="relative">
                        <input type="text" className="relative w-64 rounded py-2 pl-4 pr-10 bg-gray-900 focus:outline-none" placeholder="Поиск..." />
                        <svg className="absolute inset-y-1/2 right-2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.1368 20.6931L18.7244 16.2807C18.3931 15.9494 17.9708 15.7718 17.5388 15.7299C18.869 14.0722 19.6684 11.9722 19.6684 9.68627C19.6684 4.34526 15.3232 0 9.98217 0C4.64116 0 0.295898 4.34526 0.295898 9.68627C0.295898 15.0273 4.64116 19.3725 9.98217 19.3725C11.9976 19.3725 13.8702 18.7526 15.422 17.6949C15.4336 18.1753 15.6189 18.6519 15.9851 19.02L20.3975 23.4324C20.7753 23.8108 21.2718 24 21.7671 24C22.2624 24 22.759 23.8108 23.1368 23.4324C23.8936 22.6762 23.8936 21.4499 23.1368 20.6931ZM9.98217 16.1438C6.4215 16.1438 3.52466 13.2482 3.52466 9.68627C3.52466 6.1256 6.4215 3.22876 9.98217 3.22876C13.5428 3.22876 16.4397 6.1256 16.4397 9.68627C16.4397 13.2482 13.5428 16.1438 9.98217 16.1438Z" fill="#969696" />
                        </svg>
                    </div>
                </div>
                <div className="my-14 grid grid-cols-5 gap-10">
                    <HackCard />
                    <HackCard />
                    <HackCard />
                    <HackCard />
                    <HackCard />
                </div>
            </div>
        </div>
    )
}
