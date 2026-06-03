function giveupChallenge() {
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
    restartOriginProduce();
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
    restartOriginProduce();
}

function giveupexperimentSimulation() {
    giveupChallengeOrigin();
    experimentdoing.Simulation = "";
    experimentGoal.Simulation = new Decimal(0);
    experimentGoaltype.Simulation = false;
    experimentbuffs.SimulationUpgrades = true;
    experimentbuffs.SimulationExperiment2 = true;
    experimentbuffs.SimulationExperiment3 = true;
    experimentbuffs.SimulationExperiment4 = true;
    experimentbuffs.SimulationExperiment5 = true;
    timerSimulationExperiment5 = new Decimal(0);
    clearInterval(timerSimulationExperiment5Interval);
    restartAutoClicker();
    restartOriginProduce();
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

function giveupSimulationExperiment() {
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
}

function startSimulationExperiment(experiment) {
    turEnergyOriginReset();
    fadeToBlack(() => {
        space = "inSimulation";
        state = "inSimulation";
        SimulationReset();
        changetoturEnergyuptap();
        changetoturEnergyLeveluptap();
        restartSimulationRoomProduce();
        completeSimulationBtn.disabled = false;
        experimentdoing.Simulation = experiment;
        Tellingtext.classList.remove('active');
        Changetips();
        fadeFromBlack();
    });
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
        timerSimulationExperiment5Interval = setInterval(() => {
            timerSimulationExperiment5 = timerSimulationExperiment5.plus(1);
        }, 1000);
    }
}

function introSimulationExperiment4() {
    textbox.classList.add('Unlocked');
    textbox.classList.remove('Locked');
    textboxtext.innerHTML = `你获得的<span class="turEnergy">龟能</span><span class="Origin">本源</span>x0，禁用<span class="simulation">模拟</span>升级c2，<span class="turEnergy">龟能</span>层级与层级增强的等级的和不超过42（如超过42，则价格变为9e99999）`;
}
function introSimulationExperiment5() {
    /*Dear mark,
    Ihope this emal brings your fine.
    I am writing to reportan issue regarding turtle.
    3.14159*/
    textbox.classList.add('Unlocked');
    textbox.classList.remove('Locked');
    textboxtext.innerHTML = `禁用<span class="simulation">模拟机</span>-α，禁用<span class="simulation">模拟</span>升级c2，d2，a3，b3，c3，d3，<span class="turEnergy">龟能</span>层级的效果^0.5，禁用高效点击，禁用<span class="turEnergy">龟能</span>层级挑战2，3，禁用<span class="turEnergy">龟能</span><span class="Origin">本源</span>里程碑7，但你会随在<span class="simulation">模拟</span>内的时间获得一个提升获得<span class="Origin">本源</span>的加成，效果：x${formatNumber(effect2SimulationExperiment5)}（这个数字并不是实时的，而是你打开这个界面那一刻的）`;
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
    }
    if (challengedoing.Tier != "") giveupChallenge();
    else if (challengedoing.Origin != "") giveupChallengeOrigin();
}

function FinishGiveupExperiment() {
    if (experimentprogress.Simulation === "finished") {
        if (experimentdoing.Simulation === "SimulationExperiment1") experimentfinished.SimulationExperiment1++;
        if (experimentdoing.Simulation === "SimulationExperiment2") experimentfinished.SimulationExperiment2++;
        if (experimentdoing.Simulation === "SimulationExperiment3") experimentfinished.SimulationExperiment3++;
        if (experimentdoing.Simulation === "SimulationExperiment4") experimentfinished.SimulationExperiment4++;
        if (experimentdoing.Simulation === "SimulationExperiment5") experimentfinished.SimulationExperiment5++;
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