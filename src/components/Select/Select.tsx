import React, {useEffect, useRef, useState} from 'react';

export interface Variants {
    [key: string]: string
}

interface Props {
    customColor?: string,
    type?: string,
    variants?: Variants,
    placeholder?: any,
    callback?: (result: any) => void
}

const Select = ({customColor, type, variants, placeholder, callback}: Props) => {
    const selectRef = useRef<HTMLDivElement>(null);
    const [isOpened, setIsOpened] = useState(false);
    const [selected, setSelected] = useState(placeholder);

    useEffect(() => {
        setSelected(placeholder);
    }, [placeholder])

    const onSelectEvent = (selected: string) => {
        selectRef.current?.blur();
        setSelected(selected);
        if (callback)
            callback(selected);
    };

    const onClickEvent = () => {
        setIsOpened(prev => !prev);
    };

    const onBlurEvent = () => {
        setIsOpened(false);
    };

    return (
        <div ref={selectRef} className="select-none" onBlur={onBlurEvent} tabIndex={3}>
            <div className={`relative w-full rounded py-2 px-4 ${customColor ?? "bg-gray-900"} `}>

                <div className="flex items-center justify-between cursor-pointer space-x-2.5"
                     onClick={() => onClickEvent()}>
                    <div className="">{variants ? variants[selected] : "Пусто"}</div>
                    <svg className={`${isOpened && "transform rotate-180"}`} width="19" height="12" viewBox="0 0 19 12"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.38447L9.58543 10.6152L18.1709 1.38447" stroke="#969696" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>

                <div
                    className={` w-full absolute z-10 top-12 left-0 bg-gray-900 rounded overflow-y-auto scrollbar max-h-40 ${!isOpened && "hidden"}`}>
                    <div className="space-y-2 text-center">
                        {variants && Object.keys(variants).map((index, i) =>
                            <div className={`cursor-pointer p-1 ${index == selected && "bg-red-500" || ""}`} key={i} onClick={() => onSelectEvent(index)}>{variants[index]}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Select;
