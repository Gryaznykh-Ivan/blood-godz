import { MOVE_TO_SLIDE, SliderActions, SliderState } from "./SliderTypes";
import { INIT, PREV_SLIDE, NEXT_SLIDE } from "./SliderTypes";

const reducer = (state: SliderState, action: SliderActions) => {
    switch (action.type) {
        case INIT:
            return {
                ...state,
                slider: {
                    ...state.slider,
                    ...action.slider
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
                    marginLeft: (100 / (state.slider.count - 1)) * (state.slider.activeSlide + 1)
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
                    marginLeft: (100 / (state.slider.count - 1)) * (state.slider.activeSlide - 1)
                }
            }
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
        default:
            throw new Error();
    }
}

export default reducer;