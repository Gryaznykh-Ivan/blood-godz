import React, { useEffect } from 'react'

import { ShowPopup } from '../../utils/Popup'

import ItemEdit from '../../components/Popups/ItemEdit/ItemEdit'
import ItemCard from '../../components/Cards/ItemCard/ItemCard'
import Select from '../../components/Select/Select'

export default function Skins() {
    useEffect( () => {
        ShowPopup(ItemEdit, {})
        .then(a => {
            console.log(a);
        });

    }, []);

    return (
        <div className="">
            <img className="absolute top-96 left-0" src="/static/images/skins/flashLight1.png" alt="" />
            <img className="absolute top-32 right-0" src="/static/images/skins/flashLight2.png" alt="" />
            <div className="relative container m-auto text-white mt-20">
                <img className="absolute -top-5 left-0" src="/static/images/skins/skins.png" alt="" />
                <div className="text-4xl font-bold">#ВЫБОР СКИНОВ</div>
                <div className="relative flex mt-12 space-x-20">
                    <Select />
                    <Select />
                    <Select />
                </div>
                <div className="my-14 grid grid-cols-5 gap-10">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </div>
        </div>
    )
}
