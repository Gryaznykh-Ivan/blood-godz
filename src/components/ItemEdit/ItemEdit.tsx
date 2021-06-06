import React from 'react'

import ItemCard from '../ItemCard/ItemCard'

export default function ItemEdit() {
    return (
        <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="">
                <div className="w-64 h-64">
                    <ItemCard />
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}


/*

<div className="bg-black rounded-xl bg-opacity-80 px-5 py-3 flex flex-col justify-between">
                    <div className="">
                        <label className="text-gray-500" htmlFor="pattern">Номер паттерна</label>
                        <input className="text-gray-500 text-center rounded-md bg-gray-900 focus:outline-none py-2 w-full mt-1" placeholder="Введите целое число" type="number" id="pattern" />
                    </div>
                    <div className="">
                        <label className="text-gray-500" htmlFor="wear">Тип износа</label>
                        <input className="text-gray-500 text-center rounded-md bg-gray-900 focus:outline-none py-2 w-full mt-1" placeholder="Введите значение от 0.00001 до 1" type="number" id="wear" />
                    </div>
                    <div className="">
                        <label className="text-gray-500" htmlFor="">StatTrack</label>
                        <input className="text-gray-500 text-center rounded-md bg-gray-900 focus:outline-none py-2 w-full mt-1" placeholder="Поставьте галку" type="number" id="" />
                    </div>
                    <div className="">
                        <label className="text-gray-500" htmlFor="kills">Количество убийств StatTrack</label>
                        <input className="text-gray-500 text-center rounded-md bg-gray-900 focus:outline-none py-2 w-full mt-1" placeholder="Введите значение до 999 999" type="number" id="kills" />
                    </div>
                </div>


*/