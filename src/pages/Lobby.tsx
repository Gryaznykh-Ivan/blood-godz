import React from 'react';

export default function Lobby() {
    return (
        <>

            <div className="py-20">


                <div className="font-bold text-white text-4xl uppercase">#Лобби</div>
                <div className="pt-11 font-bold text-white text-3xl">3 vs 3</div>

                <div className="mt-8">
                    <div className="text-gray-400">Выбрать регион сервера:</div>
                    <div className="w-20 bg-gray-900 rounded-3xl">
                        <div className="flex items-center">
                            <div className="text-white mr-4">RUS</div>
                            <div className="cursor-pointer">
                                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.38447L9.58543 10.6152L18.1709 1.38447" stroke="#969696" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-4">
                    2
                </div>

                <div className="mt-6">
                    3
                </div>

            </div>

        </>
    );
};