import { SliderActions, SliderState } from "./SliderTypes";
import { INIT, PREV_SLIDE, NEXT_SLIDE, DRAG, RESIZE, MOVE_TO_NEAREST, ANIMATION } from "./SliderTypes";

const reducer = (state: SliderState, action: SliderActions) => {


    switch (action.type) {
        case INIT:
            return {
                ...state,
                slider: {
                    ...state.slider,
                    ...action.slider
                },
                navigation: {
                    ...state.navigation,
                    ...action.navigation
                }
            }
        case RESIZE:
            return {
                ...state,
                navigation: {
                    ...state.navigation,
                    scrollWidth: action.scrollWidth,
                    translateX: ((action.scrollWidth - state.navigation.thumbWidth) / (state.slider.count - 1)) * state.slider.activeSlide
                }
            }
        case DRAG:
            const x = state.navigation.translateX + action.movementX;
            const nTranslateX = x > state.navigation.scrollWidth - state.navigation.thumbWidth ? state.navigation.scrollWidth - state.navigation.thumbWidth : x < 0 ? 0 : x;

            return {
                ...state,
                slider: {
                    ...state.slider,
                    activeSlide: Math.round(state.navigation.translateX / ((state.navigation.scrollWidth - state.navigation.thumbWidth) / state.slider.count)),
                    translateX: ((state.slider.width - state.slider.slideWidth) / (state.navigation.scrollWidth - state.navigation.thumbWidth)) * -nTranslateX
                },
                navigation: {
                    ...state.navigation,
                    translateX: nTranslateX
                }
            }
        case MOVE_TO_NEAREST:
            const currentSlide = Math.round(state.navigation.translateX / ((state.navigation.scrollWidth - state.navigation.thumbWidth) / (state.slider.count - 1)));

            return {
                ...state,
                slider: {
                    ...state.slider,
                    activeSlide: currentSlide,
                    translateX: -currentSlide * state.slider.slideWidth + state.slider.offset * -currentSlide
                },
                navigation: {
                    ...state.navigation,
                    translateX: ((state.navigation.scrollWidth - state.navigation.thumbWidth) / (state.slider.count - 1)) * currentSlide
                }
            }
        case NEXT_SLIDE:
            if (state.slider.activeSlide >= state.slider.count - 1) return state;

            return {
                ...state,
                slider: {
                    ...state.slider,
                    activeSlide: state.slider.activeSlide + 1,
                    translateX: state.slider.translateX - state.slider.slideWidth - state.slider.offset
                },
                navigation: {
                    ...state.navigation,
                    translateX: ((state.navigation.scrollWidth - state.navigation.thumbWidth) / (state.slider.count - 1)) * (state.slider.activeSlide + 1)
                }
            }
        case PREV_SLIDE:
            if (state.slider.activeSlide <= 0) return state;

            return {
                ...state,
                slider: {
                    ...state.slider,
                    activeSlide: state.slider.activeSlide - 1,
                    translateX: state.slider.translateX + state.slider.slideWidth + state.slider.offset
                },
                navigation: {
                    ...state.navigation,
                    translateX: ((state.navigation.scrollWidth - state.navigation.thumbWidth) / (state.slider.count - 1)) * (state.slider.activeSlide - 1)
                }
            }
            case ANIMATION:
                return {
                    ...state,
                    animation: action.animation ?? true
                }
        default:
            throw new Error();
    }
}

export default reducer;