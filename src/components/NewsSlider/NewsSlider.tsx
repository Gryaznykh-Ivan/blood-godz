import React, { useRef, useEffect, useReducer, ReactNode } from 'react'
import reducer from './SliderState'
import { INIT, NEXT_SLIDE, PREV_SLIDE } from './SliderTypes';

interface PropsFromComponent
{
    children?: ReactNode
}

const NewsSlider = ({ children }: PropsFromComponent) => {
    const sliderContainer = useRef<HTMLDivElement>(null);
    const [{ slider, navigation }, dispatch] = useReducer(reducer, {
        slider: {
            width: 0,
            offset: 20,
            translateX: 0,
            count: 0,
            slideWidth: 0,
            activeSlide: 0,
        },
        navigation: {
            marginLeft: 0,
            scrollWidth: 0,
            thumbWidth: 40
        }
    });


    useEffect(() => {
        const NewsPreviewCount = sliderContainer.current?.children.length;
        const NewsPreviewWidth = sliderContainer.current?.children[0].clientWidth;

        if (NewsPreviewCount && NewsPreviewWidth) {
            dispatch({
                type: INIT,
                slider: {
                    width: NewsPreviewWidth * NewsPreviewCount,
                    slideWidth: NewsPreviewWidth,
                    count: NewsPreviewCount
                }
            });
        }

    }, []);

    return (
        <>
            <div className="relative h-96">
                <div className="absolute h-full overflow-hidden">
                    <div 
                        className="transition-transform duration-700 flex space-x-5 h-full"
                        style={{ width: `${slider.width}px`, transform: `translateX(${slider.translateX}px)` }}
                        ref={sliderContainer}
                    >
                        { children }
                    </div>
                </div>
            </div>
            <div className="mt-8 w-full flex">
                <div className="flex items-center w-full">
                    <div className="transform rotate-180 p-3 cursor-pointer" onClick={() => dispatch({ type: PREV_SLIDE })}>
                        <img src="/static/images/icons/arrow.png" alt="" />
                    </div>
                    <div className="flex-1 bg-gray-400 h-1px">
                        <div 
                            className="transition-all duration-700 rounded bg-pink w-10 h-2 transform -translate-y-1/2" 
                            style={ { marginLeft: `calc(${ navigation.marginLeft }% - ${ navigation.thumbWidth / 2 }px ${ slider.activeSlide == 0 ? `+ ${ navigation.thumbWidth / 2 }px` : slider.activeSlide == slider.count - 1 ? `- ${ navigation.thumbWidth / 2 }px` : '' })` } }
                        ></div>
                    </div>
                    <div className="p-3 cursor-pointer" onClick={() => dispatch({ type: NEXT_SLIDE })}>
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