function beginSimulation() {
    if (confirm(`有些设置在进行模拟的时候无法修改，你确定吗？`)) {
        fadeToBlack(() => {
            space = "inSimulation";
            state = "inSimulation";
            SimulationReset();
            changetoturEnergyuptap();
            changetoturEnergyLeveluptap();
            restartSimulationRoomProduce();
            Changetips();
            fadeFromBlack();
        });
    }
}
function checkSimulation() {
    fadeToBlack(() => {
        space = "Simulation";
        changetoSimulationuptap();
        changetoSimulationUpgradestap();
        Changetips();
        fadeFromBlack();
    });
}
function backSimulation() {
    fadeToBlack(() => {
        space = "inSimulation";
        changetoturEnergyuptap();
        changetoturEnergyLeveluptap();
        Changetips();
        fadeFromBlack();
    });
}

function completeSimulation() {
    const Tellingtext = document.getElementById('Tellingtext');
    completeSimulationBtn.disabled = true;
    if (simulatedTimes.lt(3)) Tellingtext.classList.add('active');
    if (simulatedTimes.eq(0)) Tellingtext.innerHTML = `很好，你成功收集了无限的<span class="turEnergy">龟能</span>`;
    if (simulatedTimes.eq(1)) Tellingtext.innerHTML = `欢迎回来`;
    if (simulatedTimes.eq(2)) Tellingtext.innerHTML = `……`;
    fadeToBlack(async() => {
        if (simulatedTimes.eq(0)) {
            await wait(2000);
            Tellingtext.innerHTML = `好吧，也不是很好，因为<span class="simulation">模拟</span>显然进行不下去了`;
            await wait(3000);
            Tellingtext.innerHTML = `但是，无论如何，你做得不错`;
            await wait(3000);
            Tellingtext.innerHTML = `能走到这里，我想你一定是一位忠实的支持者`;
            await wait(3000);
            Tellingtext.innerHTML = `现在，继续吧`;
            await wait(2000);
            Tellingtext.innerHTML = `现在，<span class="simulation">继续</span>吧`;
        } else if (simulatedTimes.eq(1)) {
            await wait(2000);
            Tellingtext.innerHTML = `继续努力`;
        }
        space = "Simulation";
        state = "Simulation";
        simulationData = simulationData.plus((effectincreamentalSimulation.div(2).mul(new Decimal(2).pow(turEnergy.log10().div(308)))).floor());
        SimulationReset();
        changetoSimulationuptap();
        changetoSimulationUpgradestap();
        simulatedTimes = simulatedTimes.plus(1);
        completeSimulationBtn.disabled = false;
        Tellingtext.classList.remove('active');
        timerSimulationExperiment5 = new Decimal();
        clearInterval(timerSimulationExperiment5Interval);
        Changetips();
        fadeFromBlack();
    });
}