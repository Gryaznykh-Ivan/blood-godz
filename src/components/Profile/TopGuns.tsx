import React, {useState} from "react";

export default function TopGuns() {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="w-full bg-mainBlack rounded-3xl px-3 py-2.5 text-gray-400">
            <div className={` ${ !isOpened && "max-h-40" } overflow-hidden grid grid-cols-3 gap-5 text-center`}>
                <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl pt-5 ">
                    <div className="flex justify-center">
                        <img src="/static/images/profile/awp.png" alt="" />
                    </div>
                    <div className="mt-2">AWP</div>
                    <div className="mt-5 mb-7 font-bold text-2xl text-pink">1231</div>
                </div>

                <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl pt-5 ">
                    <div className="flex justify-center">
                        <img src="/static/images/profile/deagle.png" alt="" />
                    </div>
                    <div className="mt-2">Desert Eagle</div>
                    <div className="mt-5 mb-7 font-bold text-2xl text-pink">502</div>
                </div>

                <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl pt-5 ">
                    <div className="flex justify-center">
                        <img src="/static/images/profile/knife.png" alt="" />
                    </div>
                    <div className="mt-2">Knife</div>
                    <div className="mt-5 mb-7 font-bold text-2xl text-pink">62</div>
                </div>

                <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl pt-5 ">
                    <div className="flex justify-center">
                        <img src="/static/images/profile/knife.png" alt="" />
                    </div>
                    <div className="mt-2">Knife</div>
                    <div className="mt-5 mb-7 font-bold text-2xl text-pink">62</div>
                </div>
            </div>

            <div className="mt-2.5 ">Top guns</div>

            <div className="flex justify-center">
                <div className="cursor-pointer" onClick={ () => setIsOpened(prev => !prev) }>
                    <svg className={ `${isOpened && "transform rotate-180"}` } width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9.5 10L18 1" stroke="#969696" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};