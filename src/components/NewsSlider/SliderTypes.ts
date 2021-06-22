export const INIT = 'INIT'
export const NEXT_SLIDE = 'NEXT_SLIDE'
export const PREV_SLIDE = 'PREV_SLIDE'

interface Slider {
    width: number,
    activeSlide: number,
    offset: number,
    translateX: number,
    count: number,
    slideWidth: number
}

interface Navigation {
    scrollWidth: number,
    marginLeft: number,
    thumbWidth: number
}

export interface SliderState {
    slider: Slider,
    navigation: Navigation
}

interface InitAction {
    type: typeof INIT,
    slider: {
        width: number,
        slideWidth: number,
        count: number
    }
}

interface NextSlideAction {
    type: typeof NEXT_SLIDE,
}

interface PrevSlideAction {
    type: typeof PREV_SLIDE
}

export type SliderActions = InitAction | NextSlideAction | PrevSlideAction;