var aBtn = document.getElementById("btn-a");
var bBtn = document.getElementById("btn-b");
var cBtn = document.getElementById("btn-c");
var dBtn = document.getElementById("btn-d");
var sampleACount = document.getElementById("span-sampleA-count");
var sampleBCount = document.getElementById("span-sampleB-count");
var sampleCCount = document.getElementById("span-sampleC-count");
var sampleDCount = document.getElementById("span-sampleD-count");


// screenshot A: Standby
function takeScreenshotA() {
    // console.log("clicked A");
    let canvas = document.createElement('canvas');
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;

    let canvasContext = canvas.getContext("2d");
    canvasContext.drawImage(
        video,
        0, 0,
        video.offsetWidth, video.offsetHeight
    );

    var container = document.getElementById('canvas-container-a');
    container.prepend(canvas);

    sampleACount.innerText = Number(sampleACount.innerText) + 1;
}


// screenshot B
function takeScreenshotB() {
    // console.log("clicked B");
    let canvas = document.createElement('canvas');
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;

    let canvasContext = canvas.getContext("2d");
    canvasContext.drawImage(
        video,
        0, 0,
        video.offsetWidth, video.offsetHeight
    );
    var container = document.getElementById('canvas-container-b');
    container.prepend(canvas);

    sampleBCount.innerText = Number(sampleBCount.innerText) + 1;
}

// screenshot C
function takeScreenshotC() {
    // console.log("clicked C");
    let canvas = document.createElement('canvas');
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;

    let canvasContext = canvas.getContext("2d");
    canvasContext.drawImage(
        video,
        0, 0,
        video.offsetWidth, video.offsetHeight
    );
    var container = document.getElementById('canvas-container-c');
    container.prepend(canvas);

    sampleCCount.innerText = Number(sampleCCount.innerText) + 1;
}


// screenshot D
function takeScreenshotD() {
    // console.log("clicked D");
    let canvas = document.createElement('canvas');
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;

    let canvasContext = canvas.getContext("2d");
    canvasContext.drawImage(
        video,
        0, 0,
        video.offsetWidth, video.offsetHeight
    );
    var container = document.getElementById('canvas-container-d');
    container.prepend(canvas);

    sampleDCount.innerText = Number(sampleDCount.innerText) + 1;
}
