import React, { useRef, useState } from 'react';

import BigSwitcher from '../Switchers/Big';

interface Props {
    customColor?: string,
    type?: string
}

const Select = ({ customColor, type }: Props) => {
    const selectRef = useRef<HTMLDivElement>(null);
    const [isOpened, setIsOpened] = useState(false);
    const [selected, setSelected] = useState('');
    const [isCopy, setCopy] = useState(false);

    const onSelectEvent = (selected: string) => {
        selectRef.current?.blur();
        setSelected(selected);
    };

    const onClickEvent = () => {
        setIsOpened(prev => !prev);
    };


    const onBlurEvent = () => {
        setIsOpened(false);
    };

    const onCopy = (selected: string) => {
        setIsOpened(true);
        setSelected(selected);
        setCopy(true);
    };

    return (
        <div ref={ selectRef } onBlur={ onBlurEvent } tabIndex={ 3 }>
            <div className={ `relative w-full rounded py-2 px-4 ${ customColor ?? "bg-gray-900" } `}>

                <div className="flex items-center justify-between cursor-pointer space-x-2.5" onClick={ () => onClickEvent() }>
                    <div className="">{ selected || "Пусто" }</div>
                    <svg className={ `${isOpened && "transform rotate-180"}` } width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.38447L9.58543 10.6152L18.1709 1.38447" stroke="#969696" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div className={ `mt-2.5 top-12 left-0 overflow-y-auto scrollbar pr-1.5 max-h-40 lg:mt-0 lg:absolute lg:py-2 lg:px-4 lg:bg-gray-900 ${ !isOpened && 'hidden' }` }>
                    {(() => {
                        switch (type) {
                            case 'server': return (
                                <div className="space-y-2.5">
                                    <div className="cursor-pointer" onClick={() => onSelectEvent("RUS")}>
                                        <BigSwitcher type="positive" text="Russian server (MSK)" ping={ 25 } checked={true} />
                                    </div>

                                    <div className="cursor-pointer" onClick={() => onSelectEvent("GER")}>
                                        <BigSwitcher type="negative" text="Germany server" ping={ 250 } checked={true} />
                                    </div>

                                    <div className="cursor-pointer" onClick={() => onSelectEvent("KZ")}>
                                        <BigSwitcher type="regular" text="Kazakhstan server " ping={ 25 } checked={true} />
                                    </div>

                                    <div className="cursor-pointer" onClick={() => onSelectEvent("FR")}>
                                        <BigSwitcher type="regular" text="France server" ping={ 0 } checked={false} />
                                    </div>
                                </div>
                            );
                            case 'mode': return (
                                <div className="space-y-2.5 text-center">
                                    <div className="cursor-pointer" onClick={() => onSelectEvent("3 vs 3")}>
                                        3 vs 3
                                    </div>
                                    <div className="cursor-pointer" onClick={() => onSelectEvent("2 vs 2")}>
                                        2 vs 2
                                    </div>
                                    <div className="cursor-pointer" onClick={() => onSelectEvent("1 vs 1")}>
                                        1 vs 1
                                    </div>
                                </div>
                            );

                            case 'access': return (
                                <div className="space-y-2.5">
                                    <>
                                        <div className={ `pt-2.5 pb-1.5 flex justify-end ${ !isCopy && 'hidden'}` }>
                                            <div className="w-44 bg-gray-500 text-xs rounded-full text-center py-1.5">ссылка скопирована</div>
                                        </div>
                                        <div className="border-l-2 border-pink pl-2.5 cursor-pointer" onClick={() => onCopy("По ссылке")}>
                                            <div className="flex items-center justify-between">
                                                <div className={` ${ isCopy ? 'text-white' : 'text-gray-400' }`}>По ссылке</div>
                                                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.3346 3.32324H1.50195C0.673152 3.32324 0 3.99639 0 4.82519V17.4983C0 18.3271 0.673152 19.0003 1.50195 19.0003H10.3346C11.1634 19.0003 11.8366 18.3271 11.8366 17.4983V4.82519C11.8327 3.99639 11.1595 3.32324 10.3346 3.32324ZM10.7821 17.4944C10.7821 17.7435 10.5798 17.9458 10.3307 17.9458H1.49805C1.24903 17.9458 1.04669 17.7435 1.04669 17.4944V4.82519C1.04669 4.57616 1.24903 4.37382 1.49805 4.37382H10.3307C10.5798 4.37382 10.7821 4.57616 10.7821 4.82519V17.4944Z" fill="#626262" />
                                                    <path d="M13.7121 0H4.87939C4.05059 0 3.37744 0.673152 3.37744 1.50195C3.37744 1.79377 3.6109 2.02724 3.90273 2.02724C4.19456 2.02724 4.42803 1.79377 4.42803 1.50195C4.42803 1.25292 4.63036 1.05058 4.87939 1.05058H13.7121C13.9611 1.05058 14.1634 1.25292 14.1634 1.50195V14.1751C14.1634 14.4241 13.9611 14.6265 13.7121 14.6265C13.4202 14.6265 13.1868 14.8599 13.1868 15.1518C13.1868 15.4436 13.4202 15.677 13.7121 15.677C14.5409 15.677 15.214 15.0039 15.214 14.1751V1.50195C15.214 0.673152 14.5409 0 13.7121 0Z" fill="#626262" />
                                                </svg>
                                            </div>
                                        </div>
                                    </>

                                    <div className="w-full border-l-2 border-pink pl-2.5 cursor-pointer" onClick={() => onSelectEvent("По приглашениям")}>
                                        <div>По приглашениям</div>
                                    </div>
                                </div>
                            );

                            default: return (
                                <div className="space-y-2.5">
                                    <div className="cursor-pointer" onClick={() => onSelectEvent("Пистолет 1")}>Пистолет 1</div>
                                </div>
                            );
                        };
                    })()} 
                </div>  
            </div>
        </div>
    );
};

export default Select;
