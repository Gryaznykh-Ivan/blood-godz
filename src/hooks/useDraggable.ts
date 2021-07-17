import React, { useRef, RefObject, useEffect } from 'react'

export default function useDraggable(elRef: RefObject<HTMLElement>, moveCallback: (e: MouseEvent) => void, releaseCallback: () => void) {
    useEffect(() => {
        elRef.current?.addEventListener('mousedown', onMouseDownEvent);

        return () => {
            elRef.current?.removeEventListener('mousedown', onMouseDownEvent);
        }
    })

    const releaseEvent = () => {
        window.removeEventListener("mousemove", moveEvent);
        releaseCallback();
    }

    const moveEvent = (e: MouseEvent) => {
        if (e.buttons == 1) moveCallback(e);
        else releaseEvent();
    }

    const onMouseDownEvent = () => {
        window.addEventListener("mousemove", moveEvent);
    }
}