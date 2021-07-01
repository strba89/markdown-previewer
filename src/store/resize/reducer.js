import {ResizeActionType} from "../types";



const resizeReducer = (state = [{boxOneResize: false},{boxSecondResize:false}] ,action) => {
    switch (action.type) {
        case ResizeActionType.PREVIEWER:
            return   {...state,
                boxSecondResize: !state.boxSecondResize
            }
        case ResizeActionType.EDITOR:
            return   {...state,
                boxOneResize: !state.boxOneResize

            }
        default:
            return state
    }
}




export default resizeReducer
