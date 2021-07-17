export const INIT = 'INIT'
export const RESIZE = 'RESIZE'
export const DRAG = 'DRAG'
export const NEXT_SLIDE = 'NEXT_SLIDE'
export const PREV_SLIDE = 'PREV_SLIDE'
export const MOVE_TO_NEAREST = 'MOVE_TO_NEAREST'
export const ANIMATION = 'ANIMATION'

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
    translateX: number,
    thumbWidth: number
}

export interface SliderState {
    slider: Slider,
    navigation: Navigation,
    animation: boolean
}

interface InitAction {
    type: typeof INIT,
    slider: {
        width: number,
        slideWidth: number,
        count: number
    },
    navigation?: {
        scrollWidth: number
    }
}

interface ResizeAction {
    type: typeof RESIZE,
    scrollWidth: number
}

interface DragAction {
    type: typeof DRAG,
    movementX: number
}

interface NextSlideAction {
    type: typeof NEXT_SLIDE,
}

interface PrevSlideAction {
    type: typeof PREV_SLIDE
}

interface MoveToNearestAction {
    type: typeof MOVE_TO_NEAREST
}

interface AnimationAction {
    type: typeof ANIMATION,
    animation?: boolean
}

export type SliderActions = InitAction | ResizeAction | DragAction | NextSlideAction | PrevSlideAction | MoveToNearestAction | AnimationAction;
