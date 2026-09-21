function giveupChallenge() {
    challengePercent = new Decimal(0);
    challengeprogress.Tier = "";
    challengeprogress.Origin = "";
    challengeprogress.BasicEnergy = "";
    challengedoing.Tier = "";
    challengeGoal.Tier = new Decimal(0);
    challengeGoaltype.Tier = false;
    challengebuffs.turEnergy = 1;
    challengebuffs.baseofHighspeedclicking = 0;
    challengebuffs.turEnergyTierChallenge3Price = 1;
    challengebuffs.AutoClicker = true;
    challengebuffs.turEnergyTier = true;
    challengebuffs.clickPower = true;
    restartAutoClicker();
}

function giveupChallengeOrigin() {
    giveupChallenge();
    challengedoing.Origin = "";
    challengeGoal.Origin = new Decimal(0);
    challengeGoaltype.Origin = false;
    challengebuffs.disabledChallenge = 0;
    challengebuffs.turEnergy2 = 1;
    challengebuffs.disabledOriginLevelup = true;
    challengebuffs.disabledOriginMilestone = true;
    challengebuffs.disabledturEnergyLevelup = true;
    restartAutoClicker();
}

function giveupChallengeBasicEnergy() {
    giveupChallengeOrigin();
    challengedoing.BasicEnergy = "";
    challengeGoal.BasicEnergy = new Decimal(0);
    challengeGoaltype.BasicEnergy = false;
    challengebuffs.BasicEnergyChallenge1 = new Decimal(1);
    challengebuffs.BasicEnergyChallenge2 = true;
    challengebuffs.BasicEnergyChallenge3 = true;
    challengebuffs.BasicEnergyChallenge4 = new Decimal(1);
    challengebuffs.BasicEnergyChallenge5 = true;
    challengebuffs.BasicEnergyChallenge6 = true;
    restartAutoClicker();
}

function giveupexperimentSimulation() {
    giveupChallengeOrigin();
    experimentdoing.Simulation = "";
    experimentGoal.Simulation = new Decimal(0);
    experimentPercent = new Decimal(0);
    experimentprogress.Simulation = "";
    experimentGoaltype.Simulation = false;
    experimentbuffs.SimulationUpgrades = true;
    experimentbuffs.SimulationExperiment2 = true;
    experimentbuffs.SimulationExperiment3 = true;
    experimentbuffs.SimulationExperiment4 = true;
    experimentbuffs.SimulationExperiment5 = true;
    experimentbuffs.SimulationExperiment6 = true;
    experimentbuffs.SimulationExperiment7 = true;
    experimentbuffs.SimulationExperiment8 = true;
    experimentbuffs.SimulationExperiment9 = true;
    timerSimulationExperiment5 = new Decimal(0);
    clearInterval(timerSimulationExperiment5Interval);
    restartAutoClicker();
}

function startturEnergyTierChallenge1() {
    if (challengedoing.Tier === "turEnergyTierChallenge1") {
        if (challengeprogress.Tier === "finished") challengefinished.turEnergyTierChallenge1++;
        giveupChallenge();
        return;
    }
    if (confirm(`开始这个挑战会重置龟能和前三项龟能升级，即使是放弃挑战也不会归还，你确定吗？`)) {
        giveupChallenge(); 
        challengeGoaltype.Tier = true;
        if (challengefinished.turEnergyTierChallenge1 === 0) challengeGoal.Tier = new Decimal(100);
        if (challengefinished.turEnergyTierChallenge1 === 1) challengeGoal.Tier = new Decimal(300);
        if (challengefinished.turEnergyTierChallenge1 === 2) challengeGoal.Tier = new Decimal(450);
        if (challengefinished.turEnergyTierChallenge1 === 3) challengeGoal.Tier = new Decimal(580);
        if (challengefinished.turEnergyTierChallenge1 === 4) challengeGoal.Tier = new Decimal(1200);
        turEnergyTierReset();
        challengedoing.Tier = "turEnergyTierChallenge1";
    }
}

function startturEnergyTierChallenge2() {
    if (challengedoing.Tier === "turEnergyTierChallenge2") {
        if (challengeprogress.Tier === "finished") challengefinished.turEnergyTierChallenge2++;
        giveupChallenge();
        return;
    }
    if (confirm(`开始这个挑战会重置龟能和前三项龟能升级，即使是放弃挑战也不会归还，你确定吗？`)) {
        giveupChallenge(); 
        challengeGoaltype.Tier = true;
        if (challengefinished.turEnergyTierChallenge2 === 0) challengeGoal.Tier = new Decimal(140);
        if (challengefinished.turEnergyTierChallenge2 === 1) challengeGoal.Tier = new Decimal(300);
        if (challengefinished.turEnergyTierChallenge2 === 2) challengeGoal.Tier = new Decimal(400);
        if (challengefinished.turEnergyTierChallenge2 === 3) challengeGoal.Tier = new Decimal(520);
        if (challengefinished.turEnergyTierChallenge2 === 4) challengeGoal.Tier = new Decimal(1050);
        turEnergyTierReset();
        challengedoing.Tier = "turEnergyTierChallenge2";
    }
}

function startturEnergyTierChallenge3() {
    if (challengedoing.Tier === "turEnergyTierChallenge3") {
        if (challengeprogress.Tier === "finished") challengefinished.turEnergyTierChallenge3++;
        giveupChallenge();
        return;
    }
    if (confirm(`开始这个挑战会重置龟能和前三项龟能升级，即使是放弃挑战也不会归还，你确定吗？`)) {
        giveupChallenge(); 
        challengeGoaltype.Tier = true;
        if (challengefinished.turEnergyTierChallenge3 === 0) challengeGoal.Tier = new Decimal(400);
        if (challengefinished.turEnergyTierChallenge3 === 1) challengeGoal.Tier = new Decimal(450);
        if (challengefinished.turEnergyTierChallenge3 === 2) challengeGoal.Tier = new Decimal(520);
        if (challengefinished.turEnergyTierChallenge3 === 3) challengeGoal.Tier = new Decimal(760);
        if (challengefinished.turEnergyTierChallenge3 === 4) challengeGoal.Tier = new Decimal(1200);
        turEnergyTierReset();
        challengedoing.Tier = "turEnergyTierChallenge3";
    }
}

function startturEnergyTierChallenge4() {
    if (challengedoing.Tier === "turEnergyTierChallenge4") {
        if (challengeprogress.Tier === "finished") challengefinished.turEnergyTierChallenge4++;
        giveupChallenge();
        return;
    }
    if (confirm(`开始这个挑战会重置龟能和前三项龟能升级，即使是放弃挑战也不会归还，你确定吗？`)) {
        giveupChallenge(); 
        challengeGoaltype.Tier = true;
        if (challengefinished.turEnergyTierChallenge4 === 0) challengeGoal.Tier = new Decimal(70);
        turEnergyTierReset();
        challengedoing.Tier = "turEnergyTierChallenge4";
    }
}

function startturEnergyTierChallenge5() {
    if (challengedoing.Tier === "turEnergyTierChallenge5") {
        if (challengeprogress.Tier === "finished") challengefinished.turEnergyTierChallenge5++;
        giveupChallenge();
        return;
    }
    if (confirm(`开始这个挑战会重置龟能和前三项龟能升级，即使是放弃挑战也不会归还，你确定吗？`)) {
        giveupChallenge(); 
        challengeGoaltype.Tier = true;
        if (challengefinished.turEnergyTierChallenge5 === 0) challengeGoal.Tier = new Decimal(160);
        turEnergyTierReset();
        challengedoing.Tier = "turEnergyTierChallenge5";
    }
}

function startturEnergyTierChallenge6() {
    if (challengedoing.Tier === "turEnergyTierChallenge6") {
        if (challengeprogress.Tier === "finished") challengefinished.turEnergyTierChallenge6++;
        giveupChallenge();
        return;
    }
    if (confirm(`开始这个挑战会重置龟能和前三项龟能升级，即使是放弃挑战也不会归还，你确定吗？`)) {
        giveupChallenge(); 
        challengeGoaltype.Tier = true;
        if (challengefinished.turEnergyTierChallenge6 === 0) challengeGoal.Tier = new Decimal(580);
        turEnergyTierReset();
        challengedoing.Tier = "turEnergyTierChallenge6";
    }
}

function startturEnergyOriginChallenge1() {
    if (challengedoing.Origin === "turEnergyOriginChallenge1") {
        if (challengeprogress.Origin === "finished") challengefinished.turEnergyOriginChallenge1++;
        giveupChallengeOrigin();
        return;
    }
    if (confirm(`开始这个挑战会重置龟能，全部龟能升级和龟能层级挑战进度，即使是放弃挑战也不会归还，你确定吗？`)) {
        giveupChallengeOrigin();
        challengeGoaltype.Origin = true;
        if (challengefinished.turEnergyOriginChallenge1 === 0) challengeGoal.Origin = new Decimal(14);
        if (challengefinished.turEnergyOriginChallenge1 === 1) challengeGoal.Origin = new Decimal(27);
        turEnergyOriginReset();
        challengedoing.Origin = "turEnergyOriginChallenge1";
    }
}

function startturEnergyOriginChallenge2() {
    if (challengedoing.Origin === "turEnergyOriginChallenge2") {
        if (challengeprogress.Origin === "finished") challengefinished.turEnergyOriginChallenge2++;
        giveupChallengeOrigin();
        return;
    }
    if (confirm(`开始这个挑战会重置龟能，全部龟能升级和龟能层级挑战进度，即使是放弃挑战也不会归还，你确定吗？`)) {
        giveupChallengeOrigin();
        challengeGoaltype.Origin = true;
        if (challengefinished.turEnergyOriginChallenge2 === 0) challengeGoal.Origin = new Decimal(12);
        if (challengefinished.turEnergyOriginChallenge2 === 1) challengeGoal.Origin = new Decimal(21);
        turEnergyOriginReset();
        challengedoing.Origin = "turEnergyOriginChallenge2";
    }
}

function startturEnergyOriginChallenge3() {
    if (challengedoing.Origin === "turEnergyOriginChallenge3") {
        if (challengeprogress.Origin === "finished") challengefinished.turEnergyOriginChallenge3++;
        giveupChallengeOrigin();
        return;
    }
    if (confirm(`开始这个挑战会重置龟能，全部龟能升级和龟能层级挑战进度，即使是放弃挑战也不会归还，你确定吗？`)) {
        giveupChallengeOrigin();
        challengeGoaltype.Origin = true;
        if (challengefinished.turEnergyOriginChallenge3 === 0) challengeGoal.Origin = new Decimal(7);
        turEnergyOriginReset();
        challengedoing.Origin = "turEnergyOriginChallenge3";
    }
}

function startturEnergyOriginChallenge4() {
    if (challengedoing.Origin === "turEnergyOriginChallenge4") {
        if (challengeprogress.Origin === "finished") challengefinished.turEnergyOriginChallenge4++;
        giveupChallengeOrigin();
        return;
    }
    if (confirm(`开始这个挑战会重置龟能，全部龟能升级和龟能层级挑战进度，即使是放弃挑战也不会归还，你确定吗？`)) {
        giveupChallengeOrigin();
        challengeGoaltype.Origin = true;
        if (challengefinished.turEnergyOriginChallenge4 === 0) challengeGoal.Origin = new Decimal(15);
        turEnergyOriginReset();
        challengedoing.Origin = "turEnergyOriginChallenge4";
    }
}

function startturEnergyOriginChallenge5() {
    if (challengedoing.Origin === "turEnergyOriginChallenge5") {
        if (challengeprogress.Origin === "finished") challengefinished.turEnergyOriginChallenge5++;
        giveupChallengeOrigin();
        return;
    }
    if (confirm(`开始这个挑战会重置龟能，全部龟能升级和龟能层级挑战进度，即使是放弃挑战也不会归还，你确定吗？`)) {
        giveupChallengeOrigin();
        challengeGoaltype.Origin = true;
        if (challengefinished.turEnergyOriginChallenge5 === 0) challengeGoal.Origin = new Decimal(38);
        turEnergyOriginReset();
        challengedoing.Origin = "turEnergyOriginChallenge5";
        TierEnhanceLevel = new Decimal(0);
        challengefinished.turEnergyTierChallenge1 = 0;
        challengefinished.turEnergyTierChallenge2 = 0;
        challengefinished.turEnergyTierChallenge3 = 0;
        challengefinished.turEnergyTierChallenge4 = 0;
        challengefinished.turEnergyTierChallenge5 = 0;
        challengefinished.turEnergyTierChallenge6 = 0;
    }
}

function startturEnergyOriginChallenge6() {
    if (challengedoing.Origin === "turEnergyOriginChallenge6") {
        if (challengeprogress.Origin === "finished") challengefinished.turEnergyOriginChallenge6++;
        giveupChallengeOrigin();
        return;
    }
    if (confirm(`开始这个挑战会重置龟能，全部龟能升级和龟能层级挑战进度，即使是放弃挑战也不会归还，你确定吗？`)) {
        giveupChallengeOrigin();
        challengeGoaltype.Origin = true;
        if (challengefinished.turEnergyOriginChallenge6 === 0) challengeGoal.Origin = new Decimal(26);
        turEnergyOriginReset();
        challengedoing.Origin = "turEnergyOriginChallenge6";
    }
}

function startBasicEnergyChallenge1() {
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge1") {
        if (challengeprogress.BasicEnergy === "finished") challengefinished.BasicEnergyChallenge1++;
        giveupChallengeBasicEnergy();
        return;
    }
    if (confirm(`你能走到这里，你应该明白挑战的意义，你确定吗？`)) {
        giveupChallengeBasicEnergy();
        challengeGoaltype.BasicEnergy = true;
        if (challengefinished.BasicEnergyChallenge1 === 0) challengeGoal.BasicEnergy = new Decimal("1e8500");
        if (challengefinished.BasicEnergyChallenge1 === 1) challengeGoal.BasicEnergy = new Decimal("1e13000");
        if (challengefinished.BasicEnergyChallenge1 === 2) challengeGoal.BasicEnergy = new Decimal("1e14000");
        BasicEnergyReset();
        challengedoing.BasicEnergy = "BasicEnergyChallenge1";
    }
}

function startBasicEnergyChallenge2() {
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge2") {
        if (challengeprogress.BasicEnergy === "finished") challengefinished.BasicEnergyChallenge2++;
        giveupChallengeBasicEnergy();
        return;
    }
    if (confirm(`你能走到这里，你应该明白挑战的意义，你确定吗？`)) {
        giveupChallengeBasicEnergy();
        challengeGoaltype.BasicEnergy = true;
        if (challengefinished.BasicEnergyChallenge2 === 0) challengeGoal.BasicEnergy = new Decimal("1e3500");
        if (challengefinished.BasicEnergyChallenge2 === 1) challengeGoal.BasicEnergy = new Decimal("1e15000");
        if (challengefinished.BasicEnergyChallenge2 === 2) challengeGoal.BasicEnergy = new Decimal("1e25000");
        BasicEnergyReset();
        challengedoing.BasicEnergy = "BasicEnergyChallenge2";
    }
}

function startBasicEnergyChallenge3() {
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge3") {
        if (challengeprogress.BasicEnergy === "finished") challengefinished.BasicEnergyChallenge3++;
        giveupChallengeBasicEnergy();
        return;
    }
    if (confirm(`你能走到这里，你应该明白挑战的意义，你确定吗？`)) {
        giveupChallengeBasicEnergy();
        challengeGoaltype.BasicEnergy = true;
        if (challengefinished.BasicEnergyChallenge3 === 0) challengeGoal.BasicEnergy = new Decimal("1e3000");
        if (challengefinished.BasicEnergyChallenge3 === 1) challengeGoal.BasicEnergy = new Decimal("1e7600");
        if (challengefinished.BasicEnergyChallenge3 === 2) challengeGoal.BasicEnergy = new Decimal("1e30000");
        BasicEnergyReset();
        challengedoing.BasicEnergy = "BasicEnergyChallenge3";
    }
}

function startBasicEnergyChallenge4() {
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge4") {
        if (challengeprogress.BasicEnergy === "finished") challengefinished.BasicEnergyChallenge4++;
        giveupChallengeBasicEnergy();
        return;
    }
    if (confirm(`你能走到这里，你应该明白挑战的意义，你确定吗？`)) {
        giveupChallengeBasicEnergy();
        challengeGoaltype.BasicEnergy = true;
        if (challengefinished.BasicEnergyChallenge4 === 0) challengeGoal.BasicEnergy = new Decimal("1e15000");
        if (challengefinished.BasicEnergyChallenge4 === 1) challengeGoal.BasicEnergy = new Decimal("1e46000");
        if (challengefinished.BasicEnergyChallenge4 === 2) challengeGoal.BasicEnergy = new Decimal("1e85000");
        BasicEnergyReset();
        challengedoing.BasicEnergy = "BasicEnergyChallenge4";
    }
}

function startBasicEnergyChallenge5() {
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge5") {
        if (challengeprogress.BasicEnergy === "finished") challengefinished.BasicEnergyChallenge5++;
        giveupChallengeBasicEnergy();
        return;
    }
    if (confirm(`你能走到这里，你应该明白挑战的意义，你确定吗？`)) {
        giveupChallengeBasicEnergy();
        challengeGoaltype.BasicEnergy = true;
        if (challengefinished.BasicEnergyChallenge5 === 0) challengeGoal.BasicEnergy = new Decimal("1e8000");
        if (challengefinished.BasicEnergyChallenge5 === 1) challengeGoal.BasicEnergy = new Decimal("1e12000");
        if (challengefinished.BasicEnergyChallenge5 === 2) challengeGoal.BasicEnergy = new Decimal("1e36000");
        BasicEnergyReset();
        challengedoing.BasicEnergy = "BasicEnergyChallenge5";
    }
}

function startBasicEnergyChallenge6() {
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge6") {
        if (challengeprogress.BasicEnergy === "finished") challengefinished.BasicEnergyChallenge6++;
        giveupChallengeBasicEnergy();
        return;
    }
    if (confirm(`你能走到这里，你应该明白挑战的意义，你确定吗？`)) {
        giveupChallengeBasicEnergy();
        challengeGoaltype.BasicEnergy = true;
        if (challengefinished.BasicEnergyChallenge6 === 0) challengeGoal.BasicEnergy = new Decimal("1e1500");
        if (challengefinished.BasicEnergyChallenge6 === 1) challengeGoal.BasicEnergy = new Decimal("1e6700");
        if (challengefinished.BasicEnergyChallenge6 === 2) challengeGoal.BasicEnergy = new Decimal("1e32000");
        BasicEnergyReset();
        challengedoing.BasicEnergy = "BasicEnergyChallenge6";
    }
}

function giveupSimulationExperiment() {
    if (IteratedTimes.eq(0)) {
        fadeToBlack(() => {
            space = "Simulation";
            state = "Simulation";
            giveupexperimentSimulation();
            SimulationReset();
            changetoSimulationuptap();
            changetoSimulationUpgradestap();
            Changetips();
            fadeFromBlack();
        });
    } else {
        space = "Simulation";
        state = "Simulation";
        giveupexperimentSimulation();
        SimulationReset();
        changetoSimulationuptap();
        changetoSimulationUpgradestap();
        Changetips();
    }
}

function startSimulationExperiment(experiment) {
    turEnergyOriginReset();
    if (IteratedTimes.eq(0)) {
        fadeToBlack(() => {
            space = "inSimulation";
            state = "inSimulation";
            SimulationReset();
            changetoturEnergyuptap();
            changetoturEnergyLeveluptap();
            completeSimulationBtn.disabled = false;
            experimentdoing.Simulation = experiment;
            Tellingtext.classList.remove('active');
            Changetips();
            fadeFromBlack();
        });
    } else {
        space = "inSimulation";
        state = "inSimulation";
        SimulationReset();
        changetoturEnergyuptap();
        changetoturEnergyLeveluptap();
        completeSimulationBtn.disabled = false;
        experimentdoing.Simulation = experiment;
        Tellingtext.classList.remove('active');
        Changetips();
    }
}

function startSimulationExperiment1() {
    if (experimentdoing.Simulation === "SimulationExperiment1") {
        if (experimentprogress.Simulation === "finished") experimentfinished.SimulationExperiment1++;
        else {if (!confirm(`这时候放弃会强制结束这次模拟并且没有任何奖励，你确定吗？`)) return; }
        giveupSimulationExperiment();
        return;
    }
    if (confirm(`有些设置在进行模拟的时候无法修改，并且放弃实验会强制结束这次模拟并且没有任何奖励，你确定吗？`)) {
        experimentGoaltype.Simulation = true;
        experimentbuffs.SimulationUpgrades = false;
        if (experimentfinished.SimulationExperiment1 === 0) experimentGoal.Simulation = new Decimal("1.80e308");
        startSimulationExperiment("SimulationExperiment1");
    }
}

function startSimulationExperiment2() {
    if (experimentdoing.Simulation === "SimulationExperiment2") {
        if (experimentprogress.Simulation === "finished") experimentfinished.SimulationExperiment2++;
        else {if (!confirm(`这时候放弃会强制结束这次模拟并且没有任何奖励，你确定吗？`)) return; }
        giveupSimulationExperiment();
        return;
    }
    if (confirm(`有些设置在进行模拟的时候无法修改，并且放弃实验会强制结束这次模拟并且没有任何奖励，你确定吗？`)) {
        experimentGoaltype.Simulation = true;
        experimentbuffs.SimulationExperiment2 = false;
        if (experimentfinished.SimulationExperiment2 === 0) experimentGoal.Simulation = new Decimal("1.80e308");
        startSimulationExperiment("SimulationExperiment2");
    }
}

function startSimulationExperiment3() {
    if (experimentdoing.Simulation === "SimulationExperiment3") {
        if (experimentprogress.Simulation === "finished") experimentfinished.SimulationExperiment3++;
        else {if (!confirm(`这时候放弃会强制结束这次模拟并且没有任何奖励，你确定吗？`)) return; }
        giveupSimulationExperiment();
        return;
    }
    if (confirm(`有些设置在进行模拟的时候无法修改，并且放弃实验会强制结束这次模拟并且没有任何奖励，你确定吗？`)) {
        experimentGoaltype.Simulation = true;
        experimentbuffs.SimulationExperiment3 = false;
        if (experimentfinished.SimulationExperiment3 === 0) experimentGoal.Simulation = new Decimal("1.80e308");
        startSimulationExperiment("SimulationExperiment3");
    }
}

function startSimulationExperiment4() {
    if (experimentdoing.Simulation === "SimulationExperiment4") {
        if (experimentprogress.Simulation === "finished") experimentfinished.SimulationExperiment4++;
        else {if (!confirm(`这时候放弃会强制结束这次模拟并且没有任何奖励，你确定吗？`)) return; }
        giveupSimulationExperiment();
        return;
    }
    if (confirm(`有些设置在进行模拟的时候无法修改，并且放弃实验会强制结束这次模拟并且没有任何奖励，你确定吗？`)) {
        experimentGoaltype.Simulation = true;
        experimentbuffs.SimulationExperiment4 = false;
        if (experimentfinished.SimulationExperiment4 === 0) experimentGoal.Simulation = new Decimal("1.80e308");
        startSimulationExperiment("SimulationExperiment4");
    }
}

function startSimulationExperiment5() {
    if (experimentdoing.Simulation === "SimulationExperiment5") {
        if (experimentprogress.Simulation === "finished") experimentfinished.SimulationExperiment5++;
        else {if (!confirm(`这时候放弃会强制结束这次模拟并且没有任何奖励，你确定吗？`)) return; }
        giveupSimulationExperiment();
        return;
    }
    if (confirm(`有些设置在进行模拟的时候无法修改，并且放弃实验会强制结束这次模拟并且没有任何奖励，你确定吗？`)) {
        experimentGoaltype.Simulation = true;
        experimentbuffs.SimulationExperiment5 = false;
        if (experimentfinished.SimulationExperiment5 === 0) experimentGoal.Simulation = new Decimal("1.80e308");
        startSimulationExperiment("SimulationExperiment5");
        timerSimulationExperiment5 = new Decimal(0);
    }
}

function startSimulationExperiment6() {
    if (experimentdoing.Simulation === "SimulationExperiment6") {
        if (experimentprogress.Simulation === "finished") experimentfinished.SimulationExperiment6++;
        else {if (!confirm(`这时候放弃会强制结束这次模拟并且没有任何奖励，你确定吗？`)) return; }
        giveupSimulationExperiment();
        return;
    }
    if (confirm(`有些设置在进行模拟的时候无法修改，并且放弃实验会强制结束这次模拟并且没有任何奖励，你确定吗？`)) {
        experimentGoaltype.Simulation = true;
        experimentbuffs.SimulationExperiment6 = false;
        if (experimentfinished.SimulationExperiment6 === 0) experimentGoal.Simulation = new Decimal("1e600");
        startSimulationExperiment("SimulationExperiment6");
    }
}

function startSimulationExperiment7() {
    if (experimentdoing.Simulation === "SimulationExperiment7") {
        if (experimentprogress.Simulation === "finished") experimentfinished.SimulationExperiment7++;
        else {if (!confirm(`这时候放弃会强制结束这次模拟并且没有任何奖励，你确定吗？`)) return; }
        giveupSimulationExperiment();
        return;
    }
    if (confirm(`有些设置在进行模拟的时候无法修改，并且放弃实验会强制结束这次模拟并且没有任何奖励，你确定吗？`)) {
        experimentGoaltype.Simulation = true;
        experimentbuffs.SimulationExperiment7 = false;
        if (experimentfinished.SimulationExperiment7 === 0) experimentGoal.Simulation = new Decimal("1e4200");
        startSimulationExperiment("SimulationExperiment7");
    }
}

function startSimulationExperiment8() {
    if (experimentdoing.Simulation === "SimulationExperiment8") {
        if (experimentprogress.Simulation === "finished") experimentfinished.SimulationExperiment8++;
        else {if (!confirm(`这时候放弃会强制结束这次模拟并且没有任何奖励，你确定吗？`)) return; }
        giveupSimulationExperiment();
        return;
    }
    if (confirm(`有些设置在进行模拟的时候无法修改，并且放弃实验会强制结束这次模拟并且没有任何奖励，你确定吗？`)) {
        experimentGoaltype.Simulation = true;
        experimentbuffs.SimulationExperiment8 = false;
        if (experimentfinished.SimulationExperiment8 === 0) experimentGoal.Simulation = new Decimal("1e2200");
        startSimulationExperiment("SimulationExperiment8");
    }
}

function startSimulationExperiment9() {
    if (experimentdoing.Simulation === "SimulationExperiment9") {
        if (experimentprogress.Simulation === "finished") experimentfinished.SimulationExperiment9++;
        else {if (!confirm(`这时候放弃会强制结束这次模拟并且没有任何奖励，你确定吗？`)) return; }
        giveupSimulationExperiment();
        return;
    }
    if (confirm(`有些设置在进行模拟的时候无法修改，并且放弃实验会强制结束这次模拟并且没有任何奖励，你确定吗？`)) {
        experimentGoaltype.Simulation = true;
        experimentbuffs.SimulationExperiment9 = false;
        if (experimentfinished.SimulationExperiment9 === 0) experimentGoal.Simulation = new Decimal("1e135000");
        startSimulationExperiment("SimulationExperiment9");
        timerSimulationExperiment9 = new Decimal(0);
    }
}

let intro = "";
function introSimulationExperiment4() {
    textbox.classList.add('Unlocked');
    textbox.classList.remove('Locked');
    intro = "introSimulationExperiment4";
}
function introSimulationExperiment5() {
    /*Dear mark,
    Ihope this emal brings your fine.
    I am writing to reportan issue regarding turtle.
    3.14159*/
    textbox.classList.add('Unlocked');
    textbox.classList.remove('Locked');
    intro = "introSimulationExperiment5";
}
function introSimulationExperiment6() {
    textbox.classList.add('Unlocked');
    textbox.classList.remove('Locked');
    intro = "introSimulationExperiment6";
}

function FinishGiveupChallenge() {
    if (challengeprogress.Tier === "finished") {
        if (challengedoing.Tier === "turEnergyTierChallenge1") challengefinished.turEnergyTierChallenge1++;
        else if (challengedoing.Tier === "turEnergyTierChallenge2") challengefinished.turEnergyTierChallenge2++;
        else if (challengedoing.Tier === "turEnergyTierChallenge3") challengefinished.turEnergyTierChallenge3++;
        else if (challengedoing.Tier === "turEnergyTierChallenge4") challengefinished.turEnergyTierChallenge4++;
        else if (challengedoing.Tier === "turEnergyTierChallenge5") challengefinished.turEnergyTierChallenge5++;
        else if (challengedoing.Tier === "turEnergyTierChallenge6") challengefinished.turEnergyTierChallenge6++;
    } else if (challengedoing.Tier === "" && challengeprogress.Origin === "finished") {
        if (challengedoing.Origin === "turEnergyOriginChallenge1") challengefinished.turEnergyOriginChallenge1++;
        if (challengedoing.Origin === "turEnergyOriginChallenge2") challengefinished.turEnergyOriginChallenge2++;
        if (challengedoing.Origin === "turEnergyOriginChallenge3") challengefinished.turEnergyOriginChallenge3++;
        if (challengedoing.Origin === "turEnergyOriginChallenge4") challengefinished.turEnergyOriginChallenge4++;
        if (challengedoing.Origin === "turEnergyOriginChallenge5") challengefinished.turEnergyOriginChallenge5++;
        if (challengedoing.Origin === "turEnergyOriginChallenge6") challengefinished.turEnergyOriginChallenge6++;
    } else if (challengedoing.Tier === "" && challengeprogress.Origin === "" && challengeprogress.BasicEnergy === "finished") {
        if (challengedoing.BasicEnergy === "BasicEnergyChallenge1") challengefinished.BasicEnergyChallenge1++;
        if (challengedoing.BasicEnergy === "BasicEnergyChallenge2") challengefinished.BasicEnergyChallenge2++;
        if (challengedoing.BasicEnergy === "BasicEnergyChallenge3") challengefinished.BasicEnergyChallenge3++;
        if (challengedoing.BasicEnergy === "BasicEnergyChallenge4") challengefinished.BasicEnergyChallenge4++;
        if (challengedoing.BasicEnergy === "BasicEnergyChallenge5") challengefinished.BasicEnergyChallenge5++;
        if (challengedoing.BasicEnergy === "BasicEnergyChallenge6") challengefinished.BasicEnergyChallenge6++;
    }
    if (challengedoing.Tier != "") giveupChallenge();
    else if (challengedoing.Origin != "") giveupChallengeOrigin();
    else if (challengedoing.BasicEnergy != "") giveupChallengeBasicEnergy();
}

function FinishGiveupExperiment() {
    if (experimentprogress.Simulation === "finished") {
        if (experimentdoing.Simulation === "SimulationExperiment1") experimentfinished.SimulationExperiment1++;
        if (experimentdoing.Simulation === "SimulationExperiment2") experimentfinished.SimulationExperiment2++;
        if (experimentdoing.Simulation === "SimulationExperiment3") experimentfinished.SimulationExperiment3++;
        if (experimentdoing.Simulation === "SimulationExperiment4") experimentfinished.SimulationExperiment4++;
        if (experimentdoing.Simulation === "SimulationExperiment5") experimentfinished.SimulationExperiment5++;
        if (experimentdoing.Simulation === "SimulationExperiment6") experimentfinished.SimulationExperiment6++;
        if (experimentdoing.Simulation === "SimulationExperiment7") experimentfinished.SimulationExperiment7++;
        if (experimentdoing.Simulation === "SimulationExperiment8") experimentfinished.SimulationExperiment8++;
        if (experimentdoing.Simulation === "SimulationExperiment9") experimentfinished.SimulationExperiment9++;
        if (IteratedTimes.eq(0)) {
            fadeToBlack(() => {
                space = "Simulation";
                state = "Simulation";
                giveupexperimentSimulation();
                changetoSimulationuptap();
                changetoSimulationUpgradestap();
                SimulationReset();
                fadeFromBlack();
            });
        } else {
            space = "Simulation";
            state = "Simulation";
            giveupexperimentSimulation();
            changetoSimulationuptap();
            changetoSimulationUpgradestap();
            SimulationReset();
        }
    } else {
        if (confirm(`这时候放弃会强制结束这次模拟并且没有任何奖励，你确定吗？`)) {
            space = "Simulation";
            state = "Simulation";
            giveupexperimentSimulation();
            SimulationReset();
            changetoSimulationuptap();
            changetoSimulationUpgradestap();
            Changetips();
            return;
        }
    }
}