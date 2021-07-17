import React, { useRef, useEffect, useReducer, ReactNode } from 'react'
import useDraggable from '../../hooks/useDraggable';
import useResizeObserver from '../../hooks/useResizeObserver';
import reducer from './SliderState'
<<<<<<< HEAD
import { DRAG, INIT, NEXT_SLIDE, PREV_SLIDE, RESIZE, MOVE_TO_NEAREST, ANIMATION } from './SliderTypes';
=======
import { INIT, MOVE_TO_SLIDE, NEXT_SLIDE, PREV_SLIDE } from './SliderTypes';
>>>>>>> 800351a2658d60104c8914b02f29fc71fecd8425

interface PropsFromComponent {
    children?: ReactNode
}

const NewsSlider = ({ children }: PropsFromComponent) => {
    const sliderContainer = useRef<HTMLDivElement>(null);
    const navigationScroll = useRef<HTMLDivElement>(null);
    const scrollThumb = useRef<HTMLDivElement>(null);

    const [{ slider, navigation, animation }, dispatch] = useReducer(reducer, {
        slider: {
            width: 0,
            offset: 20,
            translateX: 0,
            count: 0,
            slideWidth: 0,
            activeSlide: 0,
        },
        navigation: {
            translateX: 0,
            scrollWidth: 0,
            thumbWidth: 40
        },
        animation: false
    });

    useDraggable(scrollThumb, DragThumbEvent, ReleaseThumbEvent);
    useResizeObserver(navigationScroll, CatchResizeEvent);

    function CatchResizeEvent(size: DOMRect) {
        dispatch({
            type: RESIZE,
            scrollWidth: size.width
        })
    }

    function DragThumbEvent(e: MouseEvent) {
        dispatch({
            type: DRAG,
            movementX: e.movementX
        })
    }

    function ReleaseThumbEvent() {
        animate(() => {
            dispatch({ type: MOVE_TO_NEAREST })
        });
    }

    useEffect(() => {
        const NewsPreviewCount = sliderContainer.current?.children.length;
        const NewsPreviewWidth = sliderContainer.current?.children[0].clientWidth;

        if (NewsPreviewCount && NewsPreviewWidth) {
            dispatch({
                type: INIT,
                slider: {
                    width: NewsPreviewWidth * NewsPreviewCount + slider.offset * (NewsPreviewCount - 1),
                    slideWidth: NewsPreviewWidth,
                    count: NewsPreviewCount
                }
            });
        }

    }, []);

    const animate = (cb: () => void) => {
        dispatch({ type: ANIMATION, animation: true })
        cb();
        setTimeout(() => { dispatch({ type: ANIMATION, animation: false }) }, 500);
    }

    const onNextSlideEvent = () => {
        if (!animation) {
            animate(() => {
                dispatch({ type: NEXT_SLIDE })
            });
        }
    }

    const onPrevSlideEvent = () => {
        if (!animation) {
            animate(() => {
                dispatch({ type: PREV_SLIDE })
            });
        }
    }


    return (
        <>
            <div className="relative h-96">
                <div className="absolute h-full overflow-hidden">
                    <div
<<<<<<< HEAD
                        className={`flex space-x-5 h-full ${animation && "transition-transform duration-500"}`}
=======
                        className="transition-transform duration-700 flex space-x-5 h-full"
>>>>>>> 800351a2658d60104c8914b02f29fc71fecd8425
                        style={{ width: `${slider.width}px`, transform: `translateX(${slider.translateX}px)` }}
                        ref={sliderContainer}
                    >
                        {children}
                    </div>
                </div>
            </div>
            <div className="mt-8 w-full flex unselectable">
                <div className="flex items-center w-full">
                    <div className="transform rotate-180 p-3 cursor-pointer" onClick={() => onPrevSlideEvent()}>
                        <img src="/static/images/icons/arrow.png" alt="" />
                    </div>
<<<<<<< HEAD
                    <div className=" relative flex-1 bg-gray-400 h-1px" ref={navigationScroll}>
                        <div
                            className={`absolute rounded bg-pink w-10 h-2 cursor-pointer ${animation && "transition-transform duration-500"}`}
                            style={{ transform: `translate(${navigation.translateX}px, -50%)` }}
                            ref={scrollThumb}
=======
                    <div className="flex-1 bg-gray-400 h-1px relative">
                        <div
                            className="transition-all duration-700 rounded bg-pink w-10 h-2 transform -translate-y-1/2 relative z-10"
                            style={{ marginLeft: `calc(${navigation.marginLeft}% - ${navigation.thumbWidth / 2}px ${slider.activeSlide == 0 ? `+ ${navigation.thumbWidth / 2}px` : slider.activeSlide == slider.count - 1 ? `- ${navigation.thumbWidth / 2}px` : ''})` }}
>>>>>>> 800351a2658d60104c8914b02f29fc71fecd8425
                        ></div>
                        <div className="absolute transform -translate-y-1/2 top-0 w-full flex justify-between">
                            {Array.from({ length: slider.count }, (_, i) => i).map((a) => (
                                <div className="rounded-full bg-white w-2 h-2 cursor-pointer" onClick={ () => dispatch({ type: MOVE_TO_SLIDE, slide: a }) }></div>
                            ))}
                        </div>
                    </div>
                    <div className="p-3 cursor-pointer" onClick={() => onNextSlideEvent()}>
                        <img src="/static/images/icons/arrow.png" alt="" />
                    </div>
                </div>
                <div className="flex space-x-2 items-center text-2xl ml-20">
                    <div className="">1</div>
                    <div className="h-1px w-5 bg-pink"></div>
                    <div className="">{slider.count}</div>
                </div>
            </div>
        </>
    )
}


export default NewsSlider;