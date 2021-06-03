import React from 'react';

export default function Footer() {
    return (
        <div className="bg-secondaryBlack">
            <div className="container m-auto grid grid-cols-5 pt-4 pb-4 text-white">
                <div className="flex flex-col-reverse">
                    <a className="">Blood Godz reborn 2021</a>
                    <a className="">Russian</a>
                </div>
                <div className="flex flex-col-reverse">
                    <a className="">Privacy policy</a>
                    <a className="">Term of service</a>
                </div>
                <div className="flex flex-col-reverse">
                    <a className="">How to play</a>
                    <a className="">Term of service</a>
                </div>
                <div className="flex flex-col-reverse">
                    <a className="">Common questions</a>
                    <a className="">Gaming process</a>
                    <a className="">Support</a>
                </div>
                <div className="flex flex-col-reverse">
                    <a className="">Discord</a>
                    <a className="">Telegram</a>
                    <a className="">VKontakte</a>
                </div>
            </div>
        </div>
    )
};