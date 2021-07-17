import React, { useState } from 'react'
import { PopupResponse } from '../../../utils/Popup';
import CheckBox from '../../CheckBox/CheckBox';

import s from './ConfirmPurchase.module.css'

interface Props {
    resolve: (result: PopupResponse) => void
}


const ConfirmPurchase = ({ resolve }: Props) => {
    const [checked, setChecked] = useState(false);

    const onCloseEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        resolve({ isDenied: false, isConfirmed: false, isClosed: true });
    }

    const onConfirmedEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        resolve({ isDenied: false, isConfirmed: true, isClosed: false });
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 text-white" onClick={e => onCloseEvent(e)}>
            <div className={`relative inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex ${s.ConfirmPurchase}`} onClick={e => e.stopPropagation()}>
                <div className="">
                    <img src="/static/images/design/hack.png" alt="" />
                    <button className="bg-pink rounded-full py-1 mt-4 w-full focus:outline-none">Купить</button>
                </div>
                <div className="flex flex-col pl-10">
                    <div className="text-xl font-light">Hack “One shot - one kill”</div>
                    <div className="flex-1">
                        <div className="line-through text-gray-500 text-xl pt-2">300</div>
                        <div className="flex justify-center items-center">
                            <div className="text-4xl mr-4">250</div>
                            <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.0454 36.4669C31.9572 35.9974 33.3712 34.7668 33.3712 33.3526C33.3712 31.9383 31.9572 30.7078 30.0454 30.2383V36.4669Z" fill="#FFD260" />
                                <path d="M28.3785 10.0859C18.2922 10.0859 10.0864 18.2918 10.0864 28.378C10.0864 38.4643 18.2922 46.6701 28.3785 46.6701C38.4647 46.6701 46.6706 38.4643 46.6706 28.378C46.6706 18.2918 38.4647 10.0859 28.3785 10.0859ZM36.6931 33.3506C36.6931 36.5633 33.8319 39.2497 30.0414 39.8676V41.6813C30.0414 42.6005 29.2976 43.3442 28.3785 43.3442C27.4593 43.3442 26.7156 42.6005 26.7156 41.6813V39.8676C22.9251 39.2497 20.0639 36.5633 20.0639 33.3506C20.0639 32.4314 20.8077 31.6877 21.7268 31.6877C22.646 31.6877 23.3897 32.4314 23.3897 33.3506C23.3897 34.7648 24.8038 35.9954 26.7156 36.4649V29.8902C22.9251 29.2722 20.0639 26.5858 20.0639 23.3731C20.0639 20.1603 22.9251 17.4739 26.7156 16.856V15.0585C26.7156 14.1393 27.4593 13.3956 28.3785 13.3956C29.2976 13.3956 30.0414 14.1393 30.0414 15.0585V16.856C33.8319 17.4739 36.6931 20.1603 36.6931 23.3731C36.6931 24.2922 35.9493 25.036 35.0302 25.036C34.111 25.036 33.3672 24.2922 33.3672 23.3731C33.3672 21.9588 31.9532 20.7283 30.0414 20.2588V26.8335C33.8319 27.4513 36.6931 30.1377 36.6931 33.3506Z" fill="#FFD260" />
                                <path d="M26.7155 20.2607C24.8037 20.7302 23.3896 21.9608 23.3896 23.3751C23.3896 24.7893 24.8037 26.0199 26.7155 26.4894V20.2607Z" fill="#FFD260" />
                                <path d="M28.3804 0C12.7923 0 0 12.7923 0 28.3804C0 43.9686 12.7923 56.7608 28.3804 56.7608C43.9686 56.7608 56.7608 43.9686 56.7608 28.3804C56.7608 12.7923 43.9686 0 28.3804 0ZM28.3804 49.9983C16.4606 49.9983 6.76252 40.3002 6.76252 28.3804C6.76252 16.4606 16.4606 6.76252 28.3804 6.76252C40.3002 6.76252 49.9983 16.4606 49.9983 28.3804C49.9983 40.3002 40.3002 49.9983 28.3804 49.9983Z" fill="#FFD260" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex " onClick={ () => setChecked(prev => !prev) }>
                        <CheckBox checked={ checked }/>
                        <div className="ml-2">Принять пользовательское соглашение</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPurchase;
