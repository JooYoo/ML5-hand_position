function toastModelLoading() {
    UIkit.notification(
        {
            message: 'Model Loading ...',
            pos: 'bottom-right',
            status: 'danger'
        });
}

function toastModelLoaded() {
    UIkit.notification(
        {
            message: `
                <span uk-icon=\'icon: social\'></span>
                &nbsp;&nbsp;
                Neural Network Loaded ...`,
            pos: 'bottom-right',
            status: 'primary'
        });
}

function toastSignal0() {
    UIkit.notification(
        {
            message: `
                <span uk-icon=\'icon: tv\'></span>
                &nbsp;&nbsp;
                Signal 0 Activated ...`,
            pos: 'bottom-right',
            status: 'primary'
        });
}

function toastSignal1() {
    UIkit.notification(
        {
            message: `
                <span uk-icon=\'icon: tv\'></span>
                &nbsp;&nbsp;
                Signal 1 Activated ...`,
            pos: 'bottom-right',
            status: 'primary'
        });
}


function toastSave() {
    UIkit.notification(
        {
            message: `
            <span uk-icon=\'icon: push\'></span>
            &nbsp;&nbsp;
            Model Saved ...`,
            pos: 'bottom-right',
            status: 'primary'
        });
}

function toastLoad() {
    UIkit.notification(
        {
            message: `
                <span uk-icon=\'icon: pull\'></span>
                &nbsp;&nbsp;
                Model Loaded ...`,
            pos: 'bottom-right',
            status: 'primary'
        });
}