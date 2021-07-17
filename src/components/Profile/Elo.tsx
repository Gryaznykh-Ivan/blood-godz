import React from "react";

export default function Elo() {
    return (
        <div className="w-full h-60 bg-gradient-to-r from-gray-900 to-blue-600 rounded-3xl px-3 py-2.5">
            <div className="flex items-center space-x-4">
                <div className="w-11 text-center">1 vs 1</div>
                <img className="w-14 h-14" src="/static/images/levels/1.png" alt="" />
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between text-mainBlue text-xs">
                        <div className="">630 ELO</div>
                        <div className="">1300</div>
                    </div>
                    <div className="mt-2 relative w-full bg-gradient-to-r from-mainBlue to-blue-900 rounded-full p-1">
                        <div className="flex flex-col justify-center">
                            <div className="progress shadow" style={ { width: `${ 55 }%` } }></div>
                            <div className="line absolute"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="w-11 text-center">2 vs 2</div>
                <img className="w-14 h-14" src="/static/images/levels/5.png" alt="" />
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between text-mainBlue text-xs">
                        <div className="">630 ELO</div>
                        <div className="">1300</div>
                    </div>
                    <div className="mt-2 relative w-full bg-gradient-to-r from-mainBlue to-blue-900 rounded-full p-1">
                        <div className="flex flex-col justify-center">
                            <div className="progress shadow" style={ { width: `${ 55 }%` } }></div>
                            <div className="line absolute"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="w-11 text-center">3 vs 3</div>
                <img className="w-14 h-14" src="/static/images/levels/10.png" alt="" />
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between text-mainBlue text-xs">
                        <div className="">630 ELO</div>
                        <div className="">1300</div>
                    </div>
                    <div className="mt-2 relative w-full bg-gradient-to-r from-mainBlue to-blue-900 rounded-full p-1">
                        <div className="flex flex-col justify-center">
                            <div className="progress shadow" style={ { width: `${ 55 }%` } }></div>
                            <div className="line absolute"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="w-11 text-center">5 vs 5</div>
                <img className="w-14 h-14" src="/static/images/levels/6.png" alt="" />
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between text-mainBlue text-xs">
                        <div className="">630 ELO</div>
                        <div className="">1300</div>
                    </div>
                    <div className="mt-2 relative w-full bg-gradient-to-r from-mainBlue to-blue-900 rounded-full p-1">
                        <div className="flex flex-col justify-center">
                            <div className="progress shadow" style={ { width: `${ 55 }%` } }></div>
                            <div className="line absolute"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};