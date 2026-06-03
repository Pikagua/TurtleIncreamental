function turEnergyTierReset() {
    if (!challengereward.TierresetNothing) {
        turEnergyLevel = new Decimal(1);
        autoClickers = new Decimal(0);
        EfficientClickLevel = new Decimal(0);
        HighspeedClickingLevel = new Decimal(0);
        turEnergy = new Decimal(0);
    }
    restartAutoClicker();
    restartOriginProduce();
}

function turEnergyOriginReset() {
    turEnergy = new Decimal(0);
    turEnergyLevel = new Decimal(1);
    autoClickers = new Decimal(0);
    EfficientClickLevel = new Decimal(0);
    HighspeedClickingLevel = new Decimal(0);
    turEnergyTier = new Decimal(0);
    if (AmassOriginTimes.lt(50) || !challengebuffs.disabledOriginMilestone) TierEnhanceLevel = new Decimal(0);
    giveupChallenge();
    challengedoing.Tier = "";
    challengedoing.Origin = "";
    if (SimulationUpgrades.else1.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) challengefinished.turEnergyTierChallenge1 = challengereward.ChallengeTimes;
    else if (AmassOriginTimes.lt(2) || !challengebuffs.disabledOriginMilestone) challengefinished.turEnergyTierChallenge1 = 0;
    else challengefinished.turEnergyTierChallenge1 = 3;
    if (SimulationUpgrades.else2.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) challengefinished.turEnergyTierChallenge2 = challengereward.ChallengeTimes;
    else if (AmassOriginTimes.lt(4) || !challengebuffs.disabledOriginMilestone) challengefinished.turEnergyTierChallenge2 = 0;
    else challengefinished.turEnergyTierChallenge2 = 3;
    if (SimulationUpgrades.else3.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) challengefinished.turEnergyTierChallenge3 = challengereward.ChallengeTimes;
    else if (AmassOriginTimes.lt(6) || !challengebuffs.disabledOriginMilestone) challengefinished.turEnergyTierChallenge3 = 0;
    else challengefinished.turEnergyTierChallenge3 = 3;
    if (SimulationUpgrades.else3.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) challengefinished.turEnergyTierChallenge4 = 1;
    else if (AmassOriginTimes.lt(8) || !challengebuffs.disabledOriginMilestone) challengefinished.turEnergyTierChallenge4 = 0;
    else challengefinished.turEnergyTierChallenge4 = 1;
    if (SimulationUpgrades.else3.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) challengefinished.turEnergyTierChallenge5 = 1;
    else if (AmassOriginTimes.lt(10) || !challengebuffs.disabledOriginMilestone) challengefinished.turEnergyTierChallenge5 = 0;
    else challengefinished.turEnergyTierChallenge5 = 1;
    if (SimulationUpgrades.else3.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) challengefinished.turEnergyTierChallenge6 = 1;
    else if (AmassOriginTimes.lt(12) || !challengebuffs.disabledOriginMilestone) challengefinished.turEnergyTierChallenge6 = 0;
    else challengefinished.turEnergyTierChallenge6 = 1;
    restartAutoClicker();
    restartOriginProduce();
}

function SimulationReset() {
    if (SimulationUpgrades.turEnergyOrigin3.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment4 && experimentbuffs.SimulationExperiment5) turEnergyOrigin = new Decimal(200);
    else turEnergyOrigin = new Decimal(0);
    if (SimulationUpgrades.turEnergyOrigin4.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) AmassOriginTimes = new Decimal(2000);
    else AmassOriginTimes = new Decimal(0);
    OriginAmassFastenLevel = new Decimal(0);
    OriginProduceEnergyLevel = new Decimal(0);
    ClickOriginLevel = new Decimal(0);
    TierOriginLevel = new Decimal(0);
    OriginEnhanceLevel = new Decimal(0);
    effectturEnergyOrigin = new Decimal(0.5);
    TierEnhanceLevel = new Decimal(0);
    challengedoing = {
        Tier:"",
        Origin:""
    };
    challengeGoal = {
        Tier:new Decimal(0),
        Origin:new Decimal(0)
    };
    challengeGoaltype = {
        Tier:false,
        Origin:false
    };
    challengePercent = new Decimal(0);
    challengeprogress = {
        Tier:"",
        Origin:""
    };
    if (SimulationUpgrades.else4.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) {
        challengefinished.turEnergyOriginChallenge1 = 2;
        challengefinished.turEnergyOriginChallenge2 = 2;
        challengefinished.turEnergyOriginChallenge3 = 1;
        challengefinished.turEnergyOriginChallenge4 = 1;
        challengefinished.turEnergyOriginChallenge5 = 1;
        challengefinished.turEnergyOriginChallenge6 = 1;
        challengereward.ChallengeTimes = 5;
    } else {
        challengefinished.turEnergyOriginChallenge1 = 0;
        challengefinished.turEnergyOriginChallenge2 = 0;
        challengefinished.turEnergyOriginChallenge3 = 0;
        challengefinished.turEnergyOriginChallenge4 = 0;
        challengefinished.turEnergyOriginChallenge5 = 0;
        challengefinished.turEnergyOriginChallenge6 = 0;
    }
    turEnergyOriginReset();
}

function SimulationMachineReset() {
    if (SimulationMachine.αa1) {SimulationMachine.αa1 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(1);}
    if (SimulationMachine.αa2) {SimulationMachine.αa2 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(2);}
    if (SimulationMachine.αa3) {SimulationMachine.αa3 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(2);}
    if (SimulationMachine.αb3) {SimulationMachine.αb3 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(3);}
    if (SimulationMachine.αa4) {SimulationMachine.αa4 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(2);}
    if (SimulationMachine.αb4) {SimulationMachine.αb4 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(4);}
    if (SimulationMachine.αa5) {SimulationMachine.αa5 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(3);}
    if (SimulationMachine.βa1) {SimulationMachine.βa1 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(2);}
    if (SimulationMachine.βb1) {SimulationMachine.βb1 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(1);}
    if (SimulationMachine.βa2) {SimulationMachine.βa2 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(3);}
    if (SimulationMachine.βb2) {SimulationMachine.βb2 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(2);}
    if (SimulationMachine.βa3) {SimulationMachine.βa3 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(3);}
    if (SimulationMachine.βa4) {SimulationMachine.βa4 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(3);}
}