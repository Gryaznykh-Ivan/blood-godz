import React from 'react'
import { PopupResponse } from '../../../utils/Popup'

import s from './ItemEdit.module.css'

import ItemCard from '../../Cards/ItemCard/ItemCard'


interface Props {
    resolve: (result: PopupResponse) => void
}


const ItemEdit = ({ resolve }: Props) => {
    const onCloseEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        resolve({ isDenied: false, isConfirmed: false, isClosed: true });
    }

    const onConfirmedEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        resolve({ isDenied: false, isConfirmed: true, isClosed: false });
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 text-white" onClick={ e => onCloseEvent(e) }>
            <div className={ `absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black flex ${ s.editCard }` } onClick={ e => e.stopPropagation() }>
                <div className="flex flex-col justify-between">
                    <ItemCard />
                    <button className="w-full bg-pink py-2 rounded-2xl focus:outline-none" onClick={ e => onConfirmedEvent(e) }>Применить</button>
                </div>
                <div className="ml-4 flex-1 flex flex-col justify-between">
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
            </div>
        </div>
    )
}

export default ItemEdit;