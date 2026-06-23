function formatNumber(num) {
    // 小于1000直接显示
    if (num.eq(0)) return new Decimal(0);
    if (num.lt(1000) && num.gte(0.01)) return new Decimal(num.toFixed(2)).toString();
    // 超出1000，用科学计数法
    if (num.lte("1e1e9")) {
        const exponent = (num.log10()).floor();
        const mantissa = (num.div(ten.pow(exponent))).toFixed(2);
        if (exponent.lt(1000)) return mantissa + "e" + exponent;
        else if (exponent.lt(1000000)) {
            const exponenta = exponent.div(1000).floor();
            const exponentb = exponent.sub(exponenta.mul(1000));
            let zeros = "";
            if (exponentb.toString().length === 3) zeros = "";
            if (exponentb.toString().length === 2) zeros = "0";
            if (exponentb.toString().length === 1) zeros = "00";
            return mantissa + "e" + exponenta + "," + zeros + exponentb;
        } else {
            const exponenta = exponent.div(1000).floor();
            const exponentb = exponenta.div(1000).floor();
            const exponentc = exponenta.sub(exponentb.mul(1000));
            const exponentd = exponent.sub(exponenta.mul(1000));
            let zerosc = "";
            if (exponentc.toString().length === 3) zerosc = "";
            if (exponentc.toString().length === 2) zerosc = "0";
            if (exponentc.toString().length === 1) zerosc = "00";
            let zerosd = "";
            if (exponentd.toString().length === 3) zerosd = "";
            if (exponentd.toString().length === 2) zerosd = "0";
            if (exponentd.toString().length === 1) zerosd = "00";
            return mantissa + "e" + exponentb + "," + zerosc + exponentc + "," + zerosd + exponentd;
        }
    } else {
        const exponent1 = (num.log10()).floor();
        const exponent2 = (exponent1.log10()).floor();
        const mantissa1 = (num.div(ten.pow(exponent1))).toFixed(2);
        const mantissa2 = (exponent1.div(ten.pow(exponent2))).toFixed(2);
        return mantissa1 + "e" + mantissa2 + "e" + exponent2;
    }
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