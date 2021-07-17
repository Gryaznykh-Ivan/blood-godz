import React, { useRef, useState } from 'react';

interface Props {
    customColor?: string,
    type?: string
}

const Select = ({ customColor, type }: Props) => {
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
        <div ref={ selectRef } onBlur={ onBlurEvent } tabIndex={ 3 }>
            <div className={ `relative w-full rounded py-2 px-4 ${ customColor ?? "bg-gray-900" } `}>

                <div className="flex items-center justify-between cursor-pointer space-x-2.5" onClick={ () => onClickEvent() }>
                    <div className="">{ selected || "Пусто" }</div>
                    <svg className={ `${isOpened && "transform rotate-180"}` } width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.38447L9.58543 10.6152L18.1709 1.38447" stroke="#969696" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div className={` w-full absolute z-10 top-12 left-0 bg-gray-900 rounded overflow-y-auto scrollbar max-h-40 p-1 ${ !isOpened && "hidden" }` }>
                    <div className="space-y-2 text-center">
                        <div className="cursor-pointer" onClick={() => onSelectEvent("Пистолет 1")}>Пистолет 1</div>
                        <div className="cursor-pointer" onClick={() => onSelectEvent("Пистолет 2")}>Пистолет 2</div>
                        <div className="cursor-pointer" onClick={() => onSelectEvent("Пистолет 3")}>Пистолет 3</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Select;
