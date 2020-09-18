/** @type {Object.<string, HTMLCanvasElement>} */
const elements = {
    main_canvas: document.getElementById("main-canvas")
}

/** @type {Object.<string, CanvasRenderingContext2D} */
const canvases = {
    main: elements.main_canvas.getContext("2d"),
};

const url = "http://localhost:2000";