import React, { useRef, RefObject } from 'react'

export default function useResizeObserver(elRef: RefObject<HTMLElement>, callback: (size: DOMRect) => void) {
    const observer = useRef(
        new ResizeObserver(entries => {
            const Rect = entries[0].contentRect;

            callback(Rect);
        })
    )

    React.useEffect(() => {
        if (elRef.current) {
            observer.current.observe(elRef.current)
        }

        return () => {
            if (elRef.current) {
                observer.current.unobserve(elRef.current);
            }
        }
    }, [elRef, observer])
}