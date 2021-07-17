export const INIT = 'INIT'
export const RESIZE = 'RESIZE'
export const DRAG = 'DRAG'
export const NEXT_SLIDE = 'NEXT_SLIDE'
export const PREV_SLIDE = 'PREV_SLIDE'
<<<<<<< HEAD
export const MOVE_TO_NEAREST = 'MOVE_TO_NEAREST'
export const ANIMATION = 'ANIMATION'
=======
export const MOVE_TO_SLIDE = 'MOVE_TO_SLIDE'
>>>>>>> 800351a2658d60104c8914b02f29fc71fecd8425

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

<<<<<<< HEAD
interface MoveToNearestAction {
    type: typeof MOVE_TO_NEAREST
}

interface AnimationAction {
    type: typeof ANIMATION,
    animation?: boolean
}

export type SliderActions = InitAction | ResizeAction | DragAction | NextSlideAction | PrevSlideAction | MoveToNearestAction | AnimationAction;
=======
interface MoveToSlideAction {
    type: typeof MOVE_TO_SLIDE,
    slide: number
}

export type SliderActions = InitAction | NextSlideAction | PrevSlideAction | MoveToSlideAction;
>>>>>>> 800351a2658d60104c8914b02f29fc71fecd8425
