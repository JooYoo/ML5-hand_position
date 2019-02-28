var progressStandby = document.getElementById('progress-standby');
var percentStandby = document.getElementById('percentStandby');

var progressHanda = document.getElementById('progress-handa');
var percentHandA = document.getElementById('percentHandA');

var progressHandb = document.getElementById('progress-handb');
var percentHandB = document.getElementById('percentHandB');

var progressHandc = document.getElementById('progress-handc');
var percentHandC = document.getElementById('percentHandC');


function getProgress(data, confidences) {
    switch (data.label) {
        case "Standby":
            percentStandby.innerText = Math.round((confidences[data.label] * 100)).toString() + " %";
            progressStandby.style.width = confidences[data.label] * 100 + "%";

            percentHandA.innerText = (0 * 100).toString() + "  %";
            progressHanda.style.width = 0 * 100 + "%";

            percentHandB.innerText = (0 * 100).toString() + "  %";
            progressHandb.style.width = 0 * 100 + "%";

            percentHandC.innerText = (0 * 100).toString() + "  %";
            progressHandc.style.width = 0 * 100 + "%";
            break;

        case "Hand Position A":
            percentHandA.innerText = Math.round((confidences[data.label] * 100)).toString() + " %";
            progressHanda.style.width = confidences[data.label] * 100 + "%";

            percentStandby.innerText = (0 * 100).toString() + "  %";
            progressStandby.style.width = 0 * 100 + "%";

            percentHandB.innerText = (0 * 100).toString() + "  %";
            progressHandb.style.width = 0 * 100 + "%";

            percentHandC.innerText = (0 * 100).toString() + "  %";
            progressHandc.style.width = 0 * 100 + "%";
            break;

        case "Hand Position B":
            percentHandB.innerText = Math.round((confidences[data.label] * 100)).toString() + " %";
            progressHandb.style.width = confidences[data.label] * 100 + "%";

            percentHandA.innerText = (0 * 100).toString() + "  %";
            progressHanda.style.width = 0 * 100 + "%";

            percentStandby.innerText = (0 * 100).toString() + "  %";
            progressStandby.style.width = 0 * 100 + "%";

            percentHandC.innerText = (0 * 100).toString() + "  %";
            progressHandc.style.width = 0 * 100 + "%";
            break;

        case "Hand Position C":
            percentHandC.innerText = Math.round((confidences[data.label] * 100)).toString() + " %";
            progressHandc.style.width = confidences[data.label] * 100 + "%";

            percentHandA.innerText = (0 * 100).toString() + "  %";
            progressHanda.style.width = 0 * 100 + "%";

            percentHandB.innerText = (0 * 100).toString() + "  %";
            progressHandb.style.width = 0 * 100 + "%";

            percentStandby.innerText = (0 * 100).toString() + "  %";
            progressStandby.style.width = 0 * 100 + "%";
            break;

        default:
            break;
    }
}

