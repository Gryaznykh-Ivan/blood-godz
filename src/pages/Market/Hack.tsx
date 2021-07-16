import React, { useEffect, useState } from 'react'

import { ShowPopup } from '../../utils/Popup';

import HackCard from '../../components/Cards/HackCard/HackCard'
import ConfirmPurchase from '../../components/Popups/ConfirmPurchase/ConfirmPurchase';

export default function Hack() {
    const [isOpened, setIsOpened] = useState(false);

    useEffect( () => {
        ShowPopup(ConfirmPurchase, {})
        .then(a => {
            console.log(a);
        });

    }, []);

    return (
        <div className="">
            <img className="absolute top-32 left-0" src="/static/images/skins/flashLight1.png" alt="" />
            <img className="absolute -top-20 right-0" src="/static/images/market/flashLight2.png" alt="" />
            <div className="relative container m-auto text-white mt-20">
                <img className="absolute -top-5 left-0" src="/static/images/market/market.png" alt="" />
                <div className="text-4xl font-bold">#МАРКЕТ</div>
                <div className="text-4xl mt-10">#HACK</div>
                <div className="mt-14 flex">
                    <div className="w-64 items-start">
                        <HackCard>
                            <button className="bg-pink rounded-xl py-1 mt-4 focus:outline-none">Купить</button>
                        </HackCard>
                    </div>
                    <div className="flex-1 px-5 pt-5 pb-3 bg-gray-900 ml-5 rounded-2xl self-start">
                        <div className={ `w-full ${ !isOpened && "max-h-60" } overflow-hidden` }>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates maiores. Earum ipsam labore quo perspiciatis eligendi laudantium, aliquid quod magnam ullam doloremque. Provident voluptatum illo pariatur et aspernatur? Optio ea nulla aut in quidem, nemo ducimus fugit cum consequatur aliquam accusantium eos expedita voluptates perferendis nobis! Quia consequatur sed delectus obcaecati nihil, quidem nam hic aliquid suscipit! Ad consectetur aliquam omnis repudiandae vitae libero temporibus tenetur minima ut a animi, nulla ea incidunt commodi. Tempora facere repellat voluptatum facilis iste harum nobis iusto dolor ex fugiat fugit ullam nulla deleniti laboriosam cum at itaque est molestiae, vero, temporibus odit rem aspernatur blanditiis natus? Consectetur est expedita, non quia dignissimos possimus natus, doloribus explicabo perspiciatis, eius sit hic temporibus quod sed id omnis sunt illo maxime? Aspernatur possimus recusandae totam provident modi nam iure tenetur quae distinctio, sequi atque reiciendis nulla voluptas asperiores vero perferendis autem qui eligendi. Obcaecati expedita suscipit quo architecto doloremque. Obcaecati in reprehenderit debitis nihil ipsam reiciendis quibusdam consequatur ut voluptate itaque molestias blanditiis eveniet aspernatur a, sunt rem praesentium sint totam adipisci doloremque. Iure, soluta quod! Repellendus molestiae ipsum cupiditate ea maxime ipsam odit dignissimos eveniet magni ex! Rem nulla magnam eligendi, architecto sapiente quasi.
                        </div>
                        <div className="w-full py-2 mt-2 flex justify-center hover:bg-gray-800 rounded-md cursor-pointer" onClick={ () => setIsOpened(prev => !prev) }>
                            <svg className={ `${isOpened && "transform rotate-180"}` } width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9.5 10L18 1" stroke="#969696" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="my-10 grid grid-flow-row grid-cols-4 gap-7">
                    <img className="col-span-1 w-full object-cover rounded-2xl" src="/static/images/market/hacks/example1.png" />
                    <img className="col-span-1 w-full object-cover rounded-2xl" src="/static/images/market/hacks/example2.png" />
                    <img className="col-span-1 w-full object-cover rounded-2xl" src="/static/images/market/hacks/example3.png" />
                    <img className="col-span-1 w-full object-cover rounded-2xl" src="/static/images/market/hacks/example4.png" />
                    <img className="col-span-2 w-full object-cover rounded-2xl" src="/static/images/market/hacks/example5.png" />
                    <img className="col-span-2 w-full object-cover rounded-2xl" src="/static/images/market/hacks/example6.png" />
                </div>
            </div>
        </div>
    )
}
