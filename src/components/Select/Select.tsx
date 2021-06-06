import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Select = () => {
    const selectRef = useRef<HTMLDivElement>(null);
    const [isOpened, setIsOpened] = useState(false);
    const [selected, setSelected] = useState('');

    const onSelectEvent = (selected: string) => {
        selectRef.current?.blur();
        setSelected(selected);
    }

    const onClickEvent = () => {
        setIsOpened(prev => !prev);
    }


    const onBlurEvent = () => {
        setIsOpened(false);
    }

    return (
        <div onBlur={ onBlurEvent } tabIndex={ 2 }>
            <div className="relative w-64 rounded py-2 px-4 bg-gray-900 flex items-center justify-between cursor-pointer" onClick={ () => onClickEvent() }>
                <div className="">{ selected || "Пусто" }</div>
                <img src="/static/images/icons/selectArrow.png" alt="" />
                <div className={ `absolute top-12 left-0 w-full bg-gray-900 rounded overflow-y-auto scrollbar max-h-40 ${ !isOpened && "hidden" }` }>
                    <div className="py-2 px-4" onClick={() => onSelectEvent("Пистолет1")}>Пистолет 1</div>
                </div>
            </div>
        </div>
    )
}

export default Select;
