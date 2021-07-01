import {TextActionType} from "../types";


export const setText = text => ({
    type: TextActionType.SET,
    payload: text
})
export const getText = () => ({
    type: TextActionType.GET,
})


