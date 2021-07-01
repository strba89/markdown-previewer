import {ResizeActionType} from "../types";

export const resizeEditor = (e) => ({
    type: ResizeActionType.EDITOR,
})
export const resizePreviewer = (e) => ({
    type: ResizeActionType.PREVIEWER,
})
