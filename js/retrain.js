var video = document.getElementById('video');
var videoStatus = document.getElementById('video-status');
var videoTitle = document.getElementById('video-title');
var loading = document.getElementById('loading');
var deviceZero = document.getElementById('btn-device0');
var deviceOne = document.getElementById('btn-device1');
var aBtn = document.getElementById('btn-a');
var bBtn = document.getElementById('btn-b');
var train = document.getElementById('btn-train');
var loss = document.getElementById('loss');
var result = document.getElementById('canvas-result');
var predict = document.getElementById('btn-predict');
var save = document.getElementById('btn-save');
var load = document.getElementById('btn-load');

let totalloss = 0;
let classifier;
var iDevices = [];
var deviceIndex = 0;

getVideo();


function getVideo() {
    // List input device IDs.
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        console.error("enumerateDevices() not supported.");
    }
    navigator.mediaDevices.enumerateDevices()
        .then(function (devices) {
            devices.forEach(function (device) {
                //console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
                if (device.kind == "videoinput") {
                    iDevices.push(device.deviceId);
                }
            })
        })
        .catch(function (err) {
            console.error(err.name + ": " + err.message);
        })
        .then(function () {   // get stream from webcam
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({
                    video: {
                        deviceId: { exact: iDevices[deviceIndex] }
                    }
                }).then(function (stream) {
                    video.srcObject = stream;
                    video.play();
                });
            }
        });
}


// video signal changeabel
deviceZero.onclick = function () {
    deviceIndex = 0;
    getVideo();
    toastSignal0();
    videoTitle.innerText = "Signal 0";
}
deviceOne.onclick = function () {
    deviceIndex = 1;
    getVideo();
    toastSignal1();
    videoTitle.innerText = "Signal 1";
}

// load Model: for debug
// toastModelLoading();
// create empty KNN Model
const knnClassifier = ml5.KNNClassifier();

// extract features from MobileNet
let featureExtractor = ml5.featureExtractor('MobileNet', function () {
    toastModelLoaded();
    toastSignal0();
});

// add Labeled Example: get current image Logits
function addExample(label) {
    const logits = featureExtractor.infer(video);
    knnClassifier.addExample(logits, label);
}

// add LabelA
function addLabelA() {
    addExample('Standby');
    console.log('Label: Standby');
    takeScreenshotA();
}

// add LabelB
function addLabelB() {
    addExample('Hand Position A');
    console.log('Label: Hand Position A');
    takeScreenshotB();
}

// add LabelC
function addLabelC() {
    addExample('Hand Position B');
    console.log('Label: Hand Position B');
    takeScreenshotC();
}

// add LabelD
function addLabelD() {
    addExample('Hand Position C');
    console.log('Label: Hand Position C');
    takeScreenshotD();
}


// classify
function classify() {
    // get current Image Logits
    const features = featureExtractor.infer(video);
    knnClassifier.classify(features, gotResults);
}


// get results
function gotResults(err, data) {
    if (err) { // error info
        console.error(err);
    }

    // get confidence
    if (data.confidencesByLabel) {
        
        if (data.confidencesByLabel) {
            const confidences = data.confidencesByLabel; 
            //console.log(data.label, confidences[data.label]);

            // get progress value
            getProgress(data, confidences);
        }
    }

    // recursion
    classify();
    result.innerText = data.label;
    result.style.fontWeight = "600";
}


// predict result
predict.onclick = function () {
    classify();
}

// save model
save.onclick = function () {
    knnClassifier.save("retrainModel");
    toastSave();
}

// load model
load.onclick = function () {
    knnClassifier.load("./model/retrainModel.json", classify);
    toastLoad();
    
}