import React from 'react';
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className="bg-secondaryBlack footer z-10">
            <div className="container m-auto grid lg:grid-cols-5 lg:justify-start lg:text-left lg:gap-2 pt-4 pb-4 text-white grid-cols-1 gap-3 justify-items-center text-center">
                <div className="flex flex-col-reverse">
                    <Link to="#"className="">Blood Godz reborn 2021</Link>
                    <Link to="#"className="">Russian</Link>
                </div>
                <div className="flex flex-col-reverse">
                    <Link to="#"className="">Privacy policy</Link>
                    <Link to="#"className="">Term of service</Link>
                </div>
                <div className="flex flex-col-reverse">
                    <Link to="#"className="">How to play</Link>
                    <Link to="#"className="">Term of service</Link>
                </div>
                <div className="flex flex-col-reverse">
                    <Link to="#"className="">Common questions</Link>
                    <Link to="#"className="">Gaming process</Link>
                    <Link to="#"className="">Support</Link>
                </div>
                <div className="flex flex-col-reverse">
                    <Link to="#"className="">Discord</Link>
                    <Link to="#"className="">Telegram</Link>
                    <Link to="#"className="">VKontakte</Link>
                </div>
            </div>
        </div>
    )
};