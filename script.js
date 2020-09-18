var width = window.innerWidth;
var height = window.innerHeight;

Object.keys(elements).forEach(
    (key) => {
        elements[key].width = width;
        elements[key].height = height;
    }
);

canvases.main.fillRect(0, 0, width, height);


var then = 0;

function update(now) {
    const dt = now - then;
    then = now;
    render();
}

function render() {

}