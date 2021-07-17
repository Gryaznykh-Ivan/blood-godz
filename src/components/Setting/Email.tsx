import React from "react";

export default function Email() {
    return (
        <div className="mt-5 bg-gray-900 rounded-3xl shadow-2xl p-5 py-2.5 text-white">
            <div className="font-medium text-sm text-gray-400">Почта</div>
                    
            <div className="mt-3.5 flex items-center">
                <input
                    className="w-full bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-5 py-2.5 mr-8" 
                    type="text"
                    placeholder="Введите адрес электронной почты"
                />
                <div className="cursor-pointer">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.1579 3.47044L19.5296 0.842061C18.9904 0.302863 18.2592 0 17.4966 0H15.8125V5.03125C15.8125 5.42818 15.4907 5.75 15.0938 5.75H3.59375C3.19682 5.75 2.875 5.42818 2.875 5.03125V0H1.4375C0.643641 0 0 0.643551 0 1.4375V21.5625C0 22.3564 0.643641 23 1.4375 23H21.5625C22.3564 23 23 22.3564 23 21.5625V5.50338C23 4.74083 22.6971 4.00959 22.1579 3.47044ZM20.125 20.125H2.875V11.5H20.125V20.125Z" fill="#969696"/>
                        <path d="M12.9375 0H10.0625V4.3125H12.9375V0Z" fill="#969696"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};