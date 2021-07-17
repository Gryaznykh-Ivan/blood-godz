import React, { useRef, useState } from 'react';

import BigSwitcher from '../../Switchers/Big';

const SelectS = () => {
    const selectRef = useRef<HTMLDivElement>(null);
    const [isOpened, setIsOpened] = useState(false);
    const [selected, setSelected] = useState('');

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

    return (
        <div ref={ selectRef } onBlur={ onBlurEvent } tabIndex={ 2 }>
            <div className={` relative w-full bg-gray-900 rounded py-2 px-4  `}>

                <div className="flex items-center justify-between cursor-pointer space-x-5" onClick={ () => onClickEvent() }>
                    <div className="">{ selected || "Пусто" }</div>
                    <svg className={ `${isOpened && "transform rotate-180"}` } width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.38447L9.58543 10.6152L18.1709 1.38447" stroke="#969696" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div className={` w-full lg:w-auto absolute z-10 top-12 left-0 bg-gray-900 rounded overflow-y-auto scrollbar max-h-40 p-1 ${ !isOpened && "hidden" }` }>
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
                </div>
            </div>
        </div>
    );
};

export default SelectS;