import React from "react";

export default function Social() {
    return (
        <div className="w-full bg-gray-900 rounded-3xl shadow-2xl p-2.5 text-white">
            <div className="font-medium text-sm text-gray-400">Введите ссылки на соц. сети, чтобы играть турнирные матчи</div>       
            <div className="mt-3.5 flex">
                <img src="/static/images/icons/steam.png" alt="" />
                <input
                    className="ml-2.5 w-full bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-2 py-2.5" 
                    type="text"
                    placeholder="Steam link"
                />
            </div>
                
            <div className="mt-3.5 flex">
                <img src="/static/images/icons/discord.png" alt="" />
                <input
                    className="ml-2.5 w-full bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-2 py-2.5" 
                    type="text"
                    placeholder="Discord link"
                />
            </div>
                
            <div className="mt-3.5 flex">
                <img src="/static/images/icons/youtube.png" alt="" />
                <input
                    className="ml-2.5 w-full bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-2 py-2.5" 
                    type="text"
                    placeholder="Youtube link"
                />
            </div>

            <button className="mt-2.5 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full focus:outline-none px-3.5 py-2">
                <div className="flex items-center">
                    <svg width="15" height="14" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6527 1.65976L9.39568 0.40272C9.13778 0.144846 8.78808 0 8.42339 0H7.61795V2.40622C7.61795 2.59605 7.46404 2.74997 7.27421 2.74997H1.77427C1.58444 2.74997 1.43053 2.59605 1.43053 2.40622V0H0.743034C0.363366 0 0.055542 0.307781 0.055542 0.687492V10.3124C0.055542 10.6921 0.363366 10.9999 0.743034 10.9999H10.3679C10.7476 10.9999 11.0554 10.6921 11.0554 10.3124V2.63202C11.0554 2.26733 10.9106 1.91761 10.6527 1.65976ZM9.68043 9.62488H1.43053V5.49993H9.68043V9.62488Z" fill="white"/>
                        <path d="M6.24303 0H4.86804V2.06247H6.24303V0Z" fill="white"/>
                    </svg>
                    <div className="ml-2.5 font-medium text-sm">Сохранить</div>
                </div>
            </button> 
        </div>
    );
};