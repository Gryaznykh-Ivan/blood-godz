<<<<<<< HEAD
import { SliderActions, SliderState } from "./SliderTypes";
import { INIT, PREV_SLIDE, NEXT_SLIDE, DRAG, RESIZE, MOVE_TO_NEAREST, ANIMATION } from "./SliderTypes";
=======
import { MOVE_TO_SLIDE, SliderActions, SliderState } from "./SliderTypes";
import { INIT, PREV_SLIDE, NEXT_SLIDE } from "./SliderTypes";
>>>>>>> 800351a2658d60104c8914b02f29fc71fecd8425

const reducer = (state: SliderState, action: SliderActions) => {


    switch (action.type) {
        case INIT:
            return {
<<<<<<< HEAD
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
=======
                ...state,
                slider: {
                    ...state.slider,
                    ...action.slider
>>>>>>> 800351a2658d60104c8914b02f29fc71fecd8425
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
<<<<<<< HEAD
            case ANIMATION:
                return {
                    ...state,
                    animation: action.animation ?? true
                }
=======
        case MOVE_TO_SLIDE:
            return {
                ...state,
                slider: {
                    ...state.slider,
                    activeSlide: action.slide,
                    translateX: (action.slide * state.slider.slideWidth + (action.slide === 0 ? 0 : action.slide - 1) * state.slider.offset) * -1
                },
                navigation: {
                    ...state.navigation,
                    marginLeft: (100 / (state.slider.count - 1)) * (action.slide)
                }
            }
>>>>>>> 800351a2658d60104c8914b02f29fc71fecd8425
        default:
            throw new Error();
    }
}

export default reducer;