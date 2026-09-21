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

function addIfClose(a, b) {
    if (a.eq(0)) return b;
    if (b.eq(0)) return a;
    const diff = a.log10().minus(b.log10()).abs();
    if (diff.gt(15)) {
        return a.gt(b) ? a : b;
    }
    return a.plus(b);
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

function saveBasicEnergyChangeAuto() {
    if (setAuto.BasicEnergyChangeAuto.eq(1)) {
        setAuto.BasicEnergyChangeAutoAmount = new Decimal(document.getElementById('BasicEnergyChangeAutoInputNum').value);
    }
    if (setAuto.BasicEnergyChangeAuto.eq(2)) {
        setAuto.BasicEnergyChangeAutoTime = new Decimal(document.getElementById('BasicEnergyChangeAutoInputNum').value);
    }
    if (setAuto.BasicEnergyChangeAuto.eq(3)) {
        setAuto.BasicEnergyChangeAutoMutiple = new Decimal(document.getElementById('BasicEnergyChangeAutoInputNum').value);
    }
} 

function updateBasicEnergyChangeAuto() {
    if (setAuto.BasicEnergyChangeAuto.eq(1)) {
        if (formatNumber(setAuto.BasicEnergyChangeAutoAmount) == 0) {
            BasicEnergyChangeAutoInput.innerHTML = `<input type="text" id="BasicEnergyChangeAutoInputNum" placeholder="请输入数字，或保持为0" onchange="saveBasicEnergyChangeAuto()" onclick="event.stopPropagation()"></span>`;
            return 0;
        }
        BasicEnergyChangeAutoInput.innerHTML = `<input type="text" id="BasicEnergyChangeAutoInputNum" placeholder="${formatNumber(setAuto.BasicEnergyChangeAutoAmount)}" onchange="saveBasicEnergyChangeAuto()" onclick="event.stopPropagation()"></span>`;
    }
    if (setAuto.BasicEnergyChangeAuto.eq(2)) {
        if (formatNumber(setAuto.BasicEnergyChangeAutoTime) == 0) {
            BasicEnergyChangeAutoInput.innerHTML = `<input type="text" id="BasicEnergyChangeAutoInputNum" placeholder="请输入数字，或保持为0" onchange="saveBasicEnergyChangeAuto()" onclick="event.stopPropagation()"></span>`;
            return 0;
        }
        BasicEnergyChangeAutoInput.innerHTML = `<input type="text" id="BasicEnergyChangeAutoInputNum" placeholder="${formatNumber(setAuto.BasicEnergyChangeAutoTime)}" onchange="saveBasicEnergyChangeAuto()" onclick="event.stopPropagation()"></span>`;
    }
    if (setAuto.BasicEnergyChangeAuto.eq(3)) {
        if (formatNumber(setAuto.BasicEnergyChangeAutoMutiple) == 0) {
            BasicEnergyChangeAutoInput.innerHTML = `<input type="text" id="BasicEnergyChangeAutoInputNum" placeholder="请输入数字，或保持为0" onchange="saveBasicEnergyChangeAuto()" onclick="event.stopPropagation()"></span>`;
            return 0;
        }
        BasicEnergyChangeAutoInput.innerHTML = `<input type="text" id="BasicEnergyChangeAutoInputNum" placeholder="${formatNumber(setAuto.BasicEnergyChangeAutoMutiple)}" onchange="saveBasicEnergyChangeAuto()" onclick="event.stopPropagation()"></span>`;
    }
    if (setAuto.BasicEnergyChangeAuto.eq(0)) {
        BasicEnergyChangeAutoInput.innerHTML = `<input type="text" id="BasicEnergyChangeAutoInputNum" placeholder="请切换模式以启用此输入框" onchange="saveBasicEnergyChangeAuto()" onclick="event.stopPropagation()"></span>`;
    }
}


function saveSimulationCompleteAuto() {
    if (setAuto.SimulationCompleteAuto.eq(1)) {
        setAuto.SimulationCompleteAutoAmount = new Decimal(document.getElementById('SimulationCompleteAutoInputNum').value);
    }
    if (setAuto.SimulationCompleteAuto.eq(2)) {
        setAuto.SimulationCompleteAutoTime = new Decimal(document.getElementById('SimulationCompleteAutoInputNum').value);
    }
    if (setAuto.SimulationCompleteAuto.eq(3)) {
        setAuto.SimulationCompleteAutoMutiple = new Decimal(document.getElementById('SimulationCompleteAutoInputNum').value);
    }
} 

function updateSimulationCompleteAuto() {
    if (setAuto.SimulationCompleteAuto.eq(1)) {
        if (formatNumber(setAuto.SimulationCompleteAutoAmount) == 0) {
            SimulationCompleteAutoInput.innerHTML = `<input type="text" id="SimulationCompleteAutoInputNum" placeholder="请输入数字，或保持为0" onchange="saveSimulationCompleteAuto()" onclick="event.stopPropagation()"></span>`;
            return 0;
        }
        SimulationCompleteAutoInput.innerHTML = `<input type="text" id="SimulationCompleteAutoInputNum" placeholder="${formatNumber(setAuto.SimulationCompleteAutoAmount)}" onchange="saveSimulationCompleteAuto()" onclick="event.stopPropagation()"></span>`;
    }
    if (setAuto.SimulationCompleteAuto.eq(2)) {
        if (formatNumber(setAuto.SimulationCompleteAutoTime) == 0) {
            SimulationCompleteAutoInput.innerHTML = `<input type="text" id="SimulationCompleteAutoInputNum" placeholder="请输入数字，或保持为0" onchange="saveSimulationCompleteAuto()" onclick="event.stopPropagation()"></span>`;
            return 0;
        }
        SimulationCompleteAutoInput.innerHTML = `<input type="text" id="SimulationCompleteAutoInputNum" placeholder="${formatNumber(setAuto.SimulationCompleteAutoTime)}" onchange="saveSimulationCompleteAuto()" onclick="event.stopPropagation()"></span>`;
    }
    if (setAuto.SimulationCompleteAuto.eq(3)) {
        if (formatNumber(setAuto.SimulationCompleteAutoMutiple) == 0) {
            SimulationCompleteAutoInput.innerHTML = `<input type="text" id="SimulationCompleteAutoInputNum" placeholder="请输入数字，或保持为0" onchange="saveSimulationCompleteAuto()" onclick="event.stopPropagation()"></span>`;
            return 0;
        }
        SimulationCompleteAutoInput.innerHTML = `<input type="text" id="SimulationCompleteAutoInputNum" placeholder="${formatNumber(setAuto.SimulationCompleteAutoMutiple)}" onchange="saveSimulationCompleteAuto()" onclick="event.stopPropagation()"></span>`;
    }
    if (setAuto.SimulationCompleteAuto.eq(0)) {
        SimulationCompleteAutoInput.innerHTML = `<input type="text" id="SimulationCompleteAutoInputNum" placeholder="请切换模式以启用此输入框" onchange="saveSimulationCompleteAuto()" onclick="event.stopPropagation()"></span>`;
    }
}