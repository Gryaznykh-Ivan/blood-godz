import React from "react";

export default function Other() {
    return (
        <div className="mt-5 flex space-x-3 text-center">
            <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl pt-3">
                <div className="text-gray-400">Сыграно матчей</div>
                <div className="mt-4 mb-6 font-bold text-2xl text-pink">2521</div>
            </div>
            <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl pt-3">
                <div className="text-gray-400">Сыграно матчей</div>
                <div className="mt-4 mb-6 font-bold text-2xl text-pink">90%</div>
            </div>
            <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl pt-3">
                <div className="text-gray-400">Сыграно матчей</div>
                <div className="mt-4 mb-6 font-bold text-2xl text-pink">1.52</div>
            </div>
        </div>
    );
};