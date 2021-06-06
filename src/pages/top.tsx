import React from 'react'
import { NavLink } from 'react-router-dom'
import RatingTable from '../components/RatingTable/RatingTable'

export default function Top() {
    return (
        <div className="">
            <img className="absolute top-0 left-0" src="/static/images/top/flashLight.png" alt="" />
            <div className="relative container m-auto text-white mt-20">
                <img className="absolute -top-5 left-0" src="/static/images/top/playerTop.png" alt="" />
                <div className="text-4xl font-bold">#ТОП ИГРОКОВ</div>
                <div className="relative flex mt-12">
                    <div className="flex space-x-12 text-xl">
                        <NavLink to="/top/1vs1" activeClassName="text-pink font-bold border-b-2 border-opacity-20 border-pink">1 vs 1</NavLink>
                        <NavLink to="/top/2vs2" activeClassName="text-pink font-bold border-b-2 border-opacity-20 border-pink">2 vs 2</NavLink>
                        <NavLink to="/top/3vs3" activeClassName="text-pink font-bold border-b-2 border-opacity-20 border-pink">3 vs 3</NavLink>
                        <NavLink to="/top/5vs5" activeClassName="text-pink font-bold border-b-2 border-opacity-20 border-pink">5 vs 5</NavLink>
                    </div>
                    <div className="flex space-x-12 text-xl ml-72">
                        <div className="text-pink font-bold border-b-2 border-opacity-20 border-pink">RUS</div>
                        <div className="">EU</div>
                        <div className="">US</div>
                    </div>
                </div>
                <div className="my-20">
                    <RatingTable />
                </div>
            </div>
        </div>
    )
}
