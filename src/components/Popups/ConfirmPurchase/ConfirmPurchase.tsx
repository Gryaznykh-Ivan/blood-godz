import React from 'react'
import { PopupResponse } from '../../../utils/Popup';

interface Props {
    resolve: (result: PopupResponse) => void
}


const ConfirmPurchase = ({ resolve }: Props) => {
    const onCloseEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        resolve({ isDenied: false, isConfirmed: false, isClosed: true });
    }

    const onConfirmedEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        resolve({ isDenied: false, isConfirmed: true, isClosed: false });
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 text-white" onClick={ e => onCloseEvent(e) }>
            <div className={ `absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-pink to-black flex h-64` } onClick={ e => e.stopPropagation() }>
                123
            </div>
        </div>
    )
}

export default ConfirmPurchase;
