loadGame();
function load() {
    if (space === "inSimulation") {changetoturEnergyuptap(); changetoturEnergyLeveluptap();}
    else if (space === "Simulation") {changetoSimulationuptap(); changetoSimulationUpgradestap();}
    if (state === "inSimulation") restartSimulationRoomProduce();
    if (!experimentbuffs.SimulationExperiment5) {
        timerSimulationExperiment5Interval = setInterval(() => {
            timerSimulationExperiment5 = timerSimulationExperiment5.plus(1);
        }, 1000);
    }
    restartSimulationRoomProduce();
    restartIterationRoomProduce();
    challengebuffs.turEnergy = 1;
    challengebuffs.baseofHighspeedclicking = 0;
    challengebuffs.turEnergyTierChallenge3Price = 1;
    challengebuffs.AutoClicker = true;
    challengebuffs.turEnergyTier = true;
    challengebuffs.disabledChallenge = 0;
    challengebuffs.turEnergy2 = 1;
    challengebuffs.disabledOriginLevelup = true;
    challengebuffs.disabledOriginMilestone = true;
    challengebuffs.disabledturEnergyLevelup = true;
    challengebuffs.BasicEnergyChallenge1 = new Decimal(1);
    challengebuffs.BasicEnergyChallenge2 = true;
    challengebuffs.BasicEnergyChallenge3 = true;
    challengebuffs.BasicEnergyChallenge4 = new Decimal(1);
    challengebuffs.BasicEnergyChallenge5 = true;
    challengebuffs.BasicEnergyChallenge6 = true;
    experimentbuffs.SimulationUpgrades = true;
    experimentbuffs.SimulationExperiment2 = true;
    experimentbuffs.SimulationExperiment3 = true;
    experimentbuffs.SimulationExperiment4 = true;
    experimentbuffs.SimulationExperiment5 = true;
    experimentbuffs.SimulationExperiment6 = true;
    experimentbuffs.SimulationExperiment7 = true;
    experimentbuffs.SimulationExperiment8 = true;
    experimentbuffs.SimulationExperiment9 = true;
    if (challengedoing.Tier === "turEnergyTierChallenge1") {
        if (challengefinished.turEnergyTierChallenge1 === 0) challengebuffs.turEnergy = 0.25;
        else if (challengefinished.turEnergyTierChallenge1 === 1) challengebuffs.turEnergy = 0.01;
        else if (challengefinished.turEnergyTierChallenge1 === 2) challengebuffs.turEnergy = 0.0004;
        else if (challengefinished.turEnergyTierChallenge1 === 3) challengebuffs.turEnergy = 0.000016;
        else if (challengefinished.turEnergyTierChallenge1 === 4) challengebuffs.turEnergy = 0.00000064;
        else if (challengefinished.turEnergyTierChallenge1 === 5) challengebuffs.turEnergy = 0.0000000256;
    }
    if (challengedoing.Tier === "turEnergyTierChallenge2") {
        if (challengefinished.turEnergyTierChallenge2 === 0) challengebuffs.baseofHighspeedclicking = 0.2;
        else if (challengefinished.turEnergyTierChallenge2 === 1) challengebuffs.baseofHighspeedclicking = 0.8;
        else if (challengefinished.turEnergyTierChallenge2 === 2) challengebuffs.baseofHighspeedclicking = 1.5;
        else if (challengefinished.turEnergyTierChallenge2 === 3) challengebuffs.baseofHighspeedclicking = 2;
        else if (challengefinished.turEnergyTierChallenge2 === 4) challengebuffs.baseofHighspeedclicking = 3;
        else if (challengefinished.turEnergyTierChallenge2 === 5) challengebuffs.baseofHighspeedclicking = 5;
    }
    if (challengedoing.Tier === "turEnergyTierChallenge3") {
        if (challengefinished.turEnergyTierChallenge3 === 0) challengebuffs.turEnergyTierChallenge3Price = 5;
        else if (challengefinished.turEnergyTierChallenge3 === 1) challengebuffs.turEnergyTierChallenge3Price = 30;
        else if (challengefinished.turEnergyTierChallenge3 === 2) challengebuffs.turEnergyTierChallenge3Price = 200;
        else if (challengefinished.turEnergyTierChallenge3 === 3) challengebuffs.turEnergyTierChallenge3Price = 1500;
        else if (challengefinished.turEnergyTierChallenge3 === 4) challengebuffs.turEnergyTierChallenge3Price = 10000;
        else if (challengefinished.turEnergyTierChallenge3 === 5) challengebuffs.turEnergyTierChallenge3Price = 80000;
    }
    if (challengedoing.Tier === "turEnergyTierChallenge4") {
        if (challengefinished.turEnergyTierChallenge4 === 0) challengebuffs.AutoClicker = false;
    }
    if (challengedoing.Tier === "turEnergyTierChallenge5") {
        if (challengefinished.turEnergyTierChallenge5 === 0) challengebuffs.turEnergyTier = false;
    }
    if (challengedoing.Tier === "turEnergyTierChallenge6") {
        if (challengefinished.turEnergyTierChallenge6 === 0) challengebuffs.clickPower = false;
    }
    if (challengedoing.Origin === "turEnergyOriginChallenge1") {
        if (challengefinished.turEnergyOriginChallenge1 === 0) challengebuffs.disabledChallenge = 1;
        else if (challengefinished.turEnergyOriginChallenge1 === 1) challengebuffs.disabledChallenge = 2;
        else if (challengefinished.turEnergyOriginChallenge1 === 2) challengebuffs.disabledChallenge = 3;
    }
    if (challengedoing.Origin === "turEnergyOriginChallenge2") {
        if (challengefinished.turEnergyOriginChallenge2 === 0) challengebuffs.turEnergy2 = 0.8;
        else if (challengefinished.turEnergyOriginChallenge2 === 1) challengebuffs.turEnergy2 = 0.65;
        else if (challengefinished.turEnergyOriginChallenge2 === 2) challengebuffs.turEnergy2 = 0.5;
    }
    if (challengedoing.Origin === "turEnergyOriginChallenge3") {
        if (challengefinished.turEnergyOriginChallenge3 === 0) {
            challengebuffs.turEnergy = 0.0004;
            challengebuffs.baseofHighspeedclicking = 1.5;
            challengebuffs.turEnergyTierChallenge3Price = 200;
            challengebuffs.AutoClicker = false;
            challengebuffs.clickPower = false;
        }
    }
    if (challengedoing.Origin === "turEnergyOriginChallenge4") {
        if (challengefinished.turEnergyOriginChallenge4 === 0) challengebuffs.disabledOriginLevelup = false;
    }
    if (challengedoing.Origin === "turEnergyOriginChallenge5") {
        if (challengefinished.turEnergyOriginChallenge5 === 0) challengebuffs.disabledOriginMilestone = false;
    }
    if (challengedoing.Origin === "turEnergyOriginChallenge6") {
        if (challengefinished.turEnergyOriginChallenge6 === 0) challengebuffs.disabledturEnergyLevelup = false;
    }
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge1") {
        if (challengefinished.BasicEnergyChallenge1 === 0) challengebuffs.BasicEnergyChallenge1 = new Decimal(2);
        else if (challengefinished.BasicEnergyChallenge1 === 1) challengebuffs.BasicEnergyChallenge1 = new Decimal(5);
        else if (challengefinished.BasicEnergyChallenge1 === 2) challengebuffs.BasicEnergyChallenge1 = new Decimal(10);
    }
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge2") {
        if (challengefinished.BasicEnergyChallenge2 === 0) challengebuffs.BasicEnergyChallenge2 = false;
        if (challengefinished.BasicEnergyChallenge2 === 1) challengebuffs.BasicEnergyChallenge2 = false;
        if (challengefinished.BasicEnergyChallenge2 === 2) challengebuffs.BasicEnergyChallenge2 = false;
    }
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge3") {
        if (challengefinished.BasicEnergyChallenge3 === 0) challengebuffs.BasicEnergyChallenge3 = false;
        if (challengefinished.BasicEnergyChallenge3 === 1) challengebuffs.BasicEnergyChallenge3 = false;
        if (challengefinished.BasicEnergyChallenge3 === 2) challengebuffs.BasicEnergyChallenge3 = false;
    }
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge4") {
        if (challengefinished.BasicEnergyChallenge4 === 0) challengebuffs.BasicEnergyChallenge4 = new Decimal("1e-2000");
        else if (challengefinished.BasicEnergyChallenge4 === 1) challengebuffs.BasicEnergyChallenge4 = new Decimal("1e-4000");
        else if (challengefinished.BasicEnergyChallenge4 === 2) challengebuffs.BasicEnergyChallenge4 = new Decimal("1e-6000");
    }
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge5") {
        if (challengefinished.BasicEnergyChallenge5 === 0) challengebuffs.BasicEnergyChallenge5 = false;
        if (challengefinished.BasicEnergyChallenge5 === 1) challengebuffs.BasicEnergyChallenge5 = false;
        if (challengefinished.BasicEnergyChallenge5 === 2) challengebuffs.BasicEnergyChallenge5 = false;
    }
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge6") {
        if (challengefinished.BasicEnergyChallenge6 === 0) challengebuffs.BasicEnergyChallenge6 = false;
        if (challengefinished.BasicEnergyChallenge6 === 1) challengebuffs.BasicEnergyChallenge6 = false;
        if (challengefinished.BasicEnergyChallenge6 === 2) challengebuffs.BasicEnergyChallenge6 = false;
    }
    if (experimentdoing.Simulation === "SimulationExperiment1") {
        if (experimentfinished.SimulationExperiment1 === 0) experimentbuffs.SimulationUpgrades = false;
    }
    if (experimentdoing.Simulation === "SimulationExperiment2") {
        if (experimentfinished.SimulationExperiment2 === 0) experimentbuffs.SimulationExperiment2 = false;
    }
    if (experimentdoing.Simulation === "SimulationExperiment3") {
        if (experimentfinished.SimulationExperiment3 === 0) experimentbuffs.SimulationExperiment3 = false;
    }
    if (experimentdoing.Simulation === "SimulationExperiment4") {
        if (experimentfinished.SimulationExperiment4 === 0) experimentbuffs.SimulationExperiment4 = false;
    }
    if (experimentdoing.Simulation === "SimulationExperiment5") {
        if (experimentfinished.SimulationExperiment5 === 0) experimentbuffs.SimulationExperiment5 = false;
    }
    if (experimentdoing.Simulation === "SimulationExperiment6") {
        if (experimentfinished.SimulationExperiment6 === 0) experimentbuffs.SimulationExperiment6 = false;
    }
    if (experimentdoing.Simulation === "SimulationExperiment7") {
        if (experimentfinished.SimulationExperiment7 === 0) experimentbuffs.SimulationExperiment7 = false;
    }
    if (experimentdoing.Simulation === "SimulationExperiment8") {
        if (experimentfinished.SimulationExperiment8 === 0) experimentbuffs.SimulationExperiment8 = false;
    }
    if (experimentreward.SimulationExperiment5) maxturEnergy = new Decimal("9e99999999");
    else maxturEnergy = new Decimal("1.80e308");
    maxSimulationData = new Decimal("1.80e308");
}
load();
updateUI();
restartAutoClicker();
restartOriginProduce();
restartTimer();
restartAutoBuy();
restartBasicEnergyProduce();
if (Iterated.eq(1) && IteratedTimes.eq(0)) {
    const overlay = document.getElementById('blackOverlay');
    overlay.style.transition = 'opacity 0s ease';
    const Tellingtext = document.getElementById('Tellingtext');
    Tellingtext.classList.add('active');
    Tellingtext.innerHTML = `……`;
    fadeToBlack(async() => {
        overlay.style.transition = 'opacity 1s ease';
        await wait(2000);
        Tellingtext.innerHTML = `不好意思，我们的<span class="simulation">模拟</span>顶不住压力了`;
        await wait(3000);
        Tellingtext.innerHTML = `欢迎回来`;
        await wait(3000);
        Tellingtext.innerHTML = `你比我想得强大……`;
        await wait(3000);
        Tellingtext.innerHTML = `在你离开的时候，我为我们的模拟完成了一次<span class="Iteration">迭代</span>`;
        await wait(3000);
        Tellingtext.innerHTML = `现在<span class="simulation">模拟数据</span>达到无限的时候也不会崩溃了`;
        await wait(3000);
        Tellingtext.innerHTML = `但是还不能突破无限……所以这听着没什么用就是了……`;
        await wait(3000);
        Tellingtext.innerHTML = `为了突破这个无限，你还需要收集更多<span class="Iteration">数据</span>`;
        await wait(3000);
        Tellingtext.innerHTML = `好了，你可以用<span class="Iteration">迭代数据</span>去获得一定提升了`;
        await wait(3000);
        Tellingtext.innerHTML = `尽快回来吧……再见`;
        await wait(2000);
        Tellingtext.innerHTML = `尽快回来吧……<span class="Iteration">再见</span>`;
        IteratedTimes = IteratedTimes.plus(1);
        IterationData = IterationData.plus(1);
        Tellingtext.classList.remove('active');
        fadeFromBlack();
    });
}
updateBasicEnergyChangeAuto();
updateSimulationCompleteAuto();
updateIterationCompleteAuto();