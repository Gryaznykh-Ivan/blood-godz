import React from 'react';
import { PopupResponse } from '../../../utils/Popup';

import s from './PlayReady.module.css';

interface Props {
    resolve: (result: PopupResponse) => void
}

const PlayReady = ({ resolve }: Props) => {
    const onCloseEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        resolve({ isDenied: false, isConfirmed: false, isClosed: true });
    }

    const onConfirmedEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        resolve({ isDenied: false, isConfirmed: true, isClosed: false });
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 text-white" onClick={ e => onCloseEvent(e) }>
            <div className={ `absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex ${ s.playReady }` } onClick={ e => e.stopPropagation() }>
            
                    <img className="absolute top-0" src="/static/images/design/popupPlay.png" alt="" />
                    <div className="relative text-3xl text-center">Ваша игра готова</div>
            </div>
        </div>
    );
};

export default PlayReady;