function formatNumber(num) {
    // 小于1000直接显示
    if (num.lt(1000)) return new Decimal(num.toFixed(2)).toString();
    // 超出1000，用科学计数法
    const exponent = (num.log10()).floor();
    const mantissa = (num.div(ten.pow(exponent))).toFixed(2);
    return mantissa + "e" + exponent;
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function foldintroSimulationMachine() {
    if (SimulationMachineFold) SimulationMachineFold = false;
    else SimulationMachineFold = true;
}

function fadeToBlack(callback) {
    const overlay = document.getElementById('blackOverlay');
    overlay.classList.add('active');
    
    // 动画结束后执行回调
    setTimeout(() => {
        if (callback) callback();
    }, 1000); // 与 CSS transition 时间一致
}

function fadeFromBlack(callback) {
    const overlay = document.getElementById('blackOverlay');
    overlay.classList.remove('active');
    
    setTimeout(() => {
        if (callback) callback();
    }, 1000);
}

function confirmTextBox() {
    textbox.classList.add('Locked');
    textbox.classList.remove('Unlocked');
    TextBoxReturn = true;
}

function cancelTextBox() {
    textbox.classList.add('Locked');
    textbox.classList.remove('Unlocked');
    TextBoxReturn = false;
}