import React from 'react'

export default function ItemCard() {
    return (
        <div className="relative w-full">
            <div className="p-4 bg-gray-900 rounded-xl flex flex-col">
                <div className="bg-uncommon rounded-xl mb-4">
                    <img className="m-auto" src="/static/images/skins/skin.png" alt="" />
                </div>
                <div className="text-center text-gray-500">Glock-17</div>
                <div className="text-center">Градиент</div>
            </div>
        </div>
    )
}
