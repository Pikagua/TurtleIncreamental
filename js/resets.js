function turEnergyReset() {
    if (IteratedTimes.gte(4)) {
        turEnergy = new Decimal(1e60);
    } else if (IteratedTimes.gte(3)) {
        turEnergy = new Decimal(5e14);
    } else if (IteratedTimes.gte(2)) {
        turEnergy = new Decimal(2000);
    } else {
        turEnergy = new Decimal(0);
    }
}

function turEnergyTierReset() {
    if (!challengereward.TierresetNothing) {
        turEnergyLevel = new Decimal(1);
        autoClickers = new Decimal(0);
        EfficientClickLevel = new Decimal(0);
        HighspeedClickingLevel = new Decimal(0);
        turEnergyReset();
    }
    restartAutoClicker();
}

function turEnergyOriginReset() {
    turEnergyReset();
    turEnergyLevel = new Decimal(1);
    autoClickers = new Decimal(0);
    EfficientClickLevel = new Decimal(0);
    HighspeedClickingLevel = new Decimal(0);
    turEnergyTier = new Decimal(0);
    if (!(AmassOriginTimes.gte(50) || IteratedTimes.gte(6)) || !challengebuffs.disabledOriginMilestone) TierEnhanceLevel = new Decimal(0);
    challengedoing.Tier = "";
    challengedoing.Origin = "";
    if (SimulationUpgrades.else1.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) challengefinished.turEnergyTierChallenge1 = challengereward.ChallengeTimes;
    else if (!(AmassOriginTimes.gte(2) || IteratedTimes.gte(6)) || !challengebuffs.disabledOriginMilestone) challengefinished.turEnergyTierChallenge1 = 0;
    else challengefinished.turEnergyTierChallenge1 = 3;
    if (SimulationUpgrades.else2.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) challengefinished.turEnergyTierChallenge2 = challengereward.ChallengeTimes;
    else if (!(AmassOriginTimes.gte(4) || IteratedTimes.gte(6)) || !challengebuffs.disabledOriginMilestone) challengefinished.turEnergyTierChallenge2 = 0;
    else challengefinished.turEnergyTierChallenge2 = 3;
    if (SimulationUpgrades.else3.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) challengefinished.turEnergyTierChallenge3 = challengereward.ChallengeTimes;
    else if (!(AmassOriginTimes.gte(6) || IteratedTimes.gte(6)) || !challengebuffs.disabledOriginMilestone) challengefinished.turEnergyTierChallenge3 = 0;
    else challengefinished.turEnergyTierChallenge3 = 3;
    if (SimulationUpgrades.else3.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) challengefinished.turEnergyTierChallenge4 = 1;
    else if (!(AmassOriginTimes.gte(8) || IteratedTimes.gte(6)) || !challengebuffs.disabledOriginMilestone) challengefinished.turEnergyTierChallenge4 = 0;
    else challengefinished.turEnergyTierChallenge4 = 1;
    if (SimulationUpgrades.else3.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) challengefinished.turEnergyTierChallenge5 = 1;
    else if (!(AmassOriginTimes.gte(10) || IteratedTimes.gte(6)) || !challengebuffs.disabledOriginMilestone) challengefinished.turEnergyTierChallenge5 = 0;
    else challengefinished.turEnergyTierChallenge5 = 1;
    if (SimulationUpgrades.else3.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) challengefinished.turEnergyTierChallenge6 = 1;
    else if (!(AmassOriginTimes.gte(12) || IteratedTimes.gte(6)) || !challengebuffs.disabledOriginMilestone) challengefinished.turEnergyTierChallenge6 = 0;
    else challengefinished.turEnergyTierChallenge6 = 1;
    restartAutoClicker();
}

function BasicEnergyReset() {
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

function SimulationReset() {
    setAuto.BasicEnergyChangeAutoLast = new Decimal(0);
    timerBasicEnergyChangeAutoTime = new Decimal(0);
    timerSimulation = new Decimal(0);
    maxturEnergyinsimulation = new Decimal(0);
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
    BasicEnergy = new Decimal(0);
    EnergyMachineALevel = new Decimal(0);
    EnergyMachineBLevel = new Decimal(0);
    EnergyMachineCLevel = new Decimal(0);
    EnergyMachineDLevel = new Decimal(0);
    EnergyMachineELevel = new Decimal(0);
    effectEnergyMachineA = new Decimal(0);
    effectEnergyMachineB = new Decimal(0);
    effectEnergyMachineC = new Decimal(0);
    effectEnergyMachineD = new Decimal(0);
    effectEnergyMachineE = new Decimal(0);
    EnergyEffection = new Decimal(0);
    turEnergyCatalysisLevel = new Decimal(0);
    OriginCatalysisLevel = new Decimal(0);
    ClickCatalysisLevel = new Decimal(0);
    PhotosynthesisLevel = new Decimal(0);
    SolarEnergy = new Decimal(0);
    ChemicalEnergy = new Decimal(0);
    SimulationCatalysisLevel = new Decimal(0);
    TierCatalysisLevel = new Decimal(0);
    ReactionCatalysisLevel = new Decimal(0);
    PrimaryBatteryLevel = new Decimal(0);
    ElectricEnergy = new Decimal(0);
    BoostVoltageLevel = new Decimal(0);
    ElectrolysisLevel = new Decimal(0);
    IonizationLevel = new Decimal(0);
    MotorLevel = new Decimal(0);
    MechanicalEnergy = new Decimal(0);
    KineticEnergyLevel = new Decimal(0);
    ElasticPotentialEnergyLevel = new Decimal(0);
    GravitationalPotentialEnergyLevel = new Decimal(0);
    FrictionLevel = new Decimal(0);
    challengedoing = {
        Tier:"",
        Origin:"",
        BasicEnergy:"",
    };
    challengeGoal = {
        Tier:new Decimal(0),
        Origin:new Decimal(0),
        BasicEnergy:new Decimal(0),
    };
    challengeGoaltype = {
        Tier:false,
        Origin:false,
        BasicEnergy:false,
    };
    challengePercent = new Decimal(0);
    challengeprogress = {
        Tier:"",
        Origin:"",
        BasicEnergy:"",
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
    if (!IterationStrengthen.Reset1.if) {
        challengefinished.BasicEnergyChallenge1 = 0;
        challengefinished.BasicEnergyChallenge2 = 0;
        challengefinished.BasicEnergyChallenge3 = 0;
        challengefinished.BasicEnergyChallenge4 = 0;
        challengefinished.BasicEnergyChallenge5 = 0;
        challengefinished.BasicEnergyChallenge6 = 0;
    }
    if (IterationStrengthen.Reset2.if && experimentreward.SimulationExperiment5) {
        challengefinished.BasicEnergyChallenge1 = 3;
        challengefinished.BasicEnergyChallenge2 = 3;
        challengefinished.BasicEnergyChallenge3 = 3;
        challengefinished.BasicEnergyChallenge4 = 3;
        challengefinished.BasicEnergyChallenge5 = 3;
        challengefinished.BasicEnergyChallenge6 = 3;
    }
    turEnergyOriginReset();
}

function IterationReset() {
    // 确保在基本能挑战没有默认完成的时候会被正常重置
    if (!IterationStrengthen.Reset2.if) {
        challengefinished.BasicEnergyChallenge1 = 0;
        challengefinished.BasicEnergyChallenge2 = 0;
        challengefinished.BasicEnergyChallenge3 = 0;
        challengefinished.BasicEnergyChallenge4 = 0;
        challengefinished.BasicEnergyChallenge5 = 0;
        challengefinished.BasicEnergyChallenge6 = 0;
    }

    maxsimulationDatainIteration = new Decimal(0);
    PowerOnLevel = new Decimal(0);
    increamentalSimulationLevel = new Decimal(0);
    simulationData = new Decimal(0);
    simulatedTimes = new Decimal(0);
    SimulationPower = new Decimal(0);
    degreeSimulationPower = new Decimal(7);
    effectSimulationPower = new Decimal(0);
    IterationInformation = new Decimal(0);
    degreeIterationInformation = new Decimal(7);
    effectIterationInformation = new Decimal(0);
    IterationInformation = new Decimal(0);
    IterationRoomAmount.Room1 = IterationRoomLevel.Room1;
    IterationRoomAmount.Room2 = IterationRoomLevel.Room2;
    IterationRoomAmount.Room3 = IterationRoomLevel.Room3;
    IterationRoomAmount.Room4 = IterationRoomLevel.Room4;
    IterationRoomAmount.Room5 = IterationRoomLevel.Room5;
    IterationRoomAmount.Room6 = IterationRoomLevel.Room6;
    IterationRoomAmount.Room7 = IterationRoomLevel.Room7;
    IterationRoomAmount.Room8 = IterationRoomLevel.Room8;
    SimulationRoomLevel = {
        Room1:new Decimal(0),
        Room2:new Decimal(0),
        Room3:new Decimal(0),
        Room4:new Decimal(0),
        Room5:new Decimal(0),
        Room6:new Decimal(0),
        Room7:new Decimal(0),
        Room8:new Decimal(0),
    }
    SimulationRoomAmount = {
        Room1:new Decimal(0),
        Room2:new Decimal(0),
        Room3:new Decimal(0),
        Room4:new Decimal(0),
        Room5:new Decimal(0),
        Room6:new Decimal(0),
        Room7:new Decimal(0),
        Room8:new Decimal(0),
    }
    effectSimulationRoom = {
        Room1:new Decimal(1),
        Room2:new Decimal(1),
        Room3:new Decimal(1),
        Room4:new Decimal(1),
        Room5:new Decimal(1),
        Room6:new Decimal(1),
        Room7:new Decimal(1),
        Room8:new Decimal(1),
    }

    if (!IterationStrengthen.Reset3.if) {
        SimulationMachineBtye = new Decimal(0);
        SimulationMachineBtyeUsed = new Decimal(0);
        BuySimulationMachineByte = {
            turEnergy:new Decimal(0),
            turEnergyOrigin:new Decimal(0),
            SimulationData:new Decimal(0)
        }
        SimulationMachine = {
            λa1:false,
            λa2:false,
            λa3:false,
            λa4:false,
            λa5:false,
            λb1:false,
            λb2:false,
            λb3:false,
            λb4:false,
            λb5:false,
            λc1:false,
            λc2:false,
            αa1:false,
            αa2:false,
            αa3:false,
            αb3:false,
            αa4:false,
            αb4:false,
            αa5:false,
            βa1:false,
            βb1:false,
            βa2:false,
            βb2:false,
            βa3:false,
            βa4:false,
            γa1:false,
            γa2:false,
            γb2:false,
            γc2:false,
            γa3:false,
            γa4:false,
            γb4:false,
            γc4:false,
            γa5:false,
        }
    }

    if (!IterationStrengthen.Reset4.if) {
        experimentfinished = {
            SimulationExperiment1:0,
            SimulationExperiment2:0,
            SimulationExperiment3:0,
            SimulationExperiment4:0,
            SimulationExperiment5:0,
            SimulationExperiment6:0,
            SimulationExperiment7:0,
            SimulationExperiment8:0,
            SimulationExperiment9:0,
        }
    }

    if (IteratedTimes.lt(7)) {
        SimulationUpgrades = {
            turEnergy1:{if:false, num:new Decimal(1)},
            turEnergy2:{if:false, num:new Decimal(1)},
            turEnergy3:{if:false, num:new Decimal(1)},
            turEnergy4:{if:false, num:new Decimal(1)},
            turEnergyOrigin1:{if:false, num:new Decimal(1)},
            turEnergyOrigin2:{if:false, num:new Decimal(1)},
            turEnergyOrigin3:{if:false},
            turEnergyOrigin4:{if:false},
            else1:{if:false},
            else2:{if:false},
            else3:{if:false},
            else4:{if:false},
        }
    } else {
        SimulationUpgrades = {
            turEnergy1:{if:true, num:new Decimal(1)},
            turEnergy2:{if:true, num:new Decimal(1)},
            turEnergy3:{if:true, num:new Decimal(1)},
            turEnergy4:{if:true, num:new Decimal(1)},
            turEnergyOrigin1:{if:true, num:new Decimal(1)},
            turEnergyOrigin2:{if:true, num:new Decimal(1)},
            turEnergyOrigin3:{if:true},
            turEnergyOrigin4:{if:true},
            else1:{if:true},
            else2:{if:true},
            else3:{if:true},
            else4:{if:true},
        }
    }
    SimulationReset();
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
    if (SimulationMachine.βa2) {SimulationMachine.βa2 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(2);}
    if (SimulationMachine.βb2) {SimulationMachine.βb2 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(2);}
    if (SimulationMachine.βa3) {SimulationMachine.βa3 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(3);}
    if (SimulationMachine.βa4) {SimulationMachine.βa4 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(3);}
    if (SimulationMachine.γa1) {SimulationMachine.γa1 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(1);}
    if (SimulationMachine.γa2) {SimulationMachine.γa2 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(5);}
    if (SimulationMachine.γb2) {SimulationMachine.γb2 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(8);}
    if (SimulationMachine.γc2) {SimulationMachine.γc2 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(8);}
    if (SimulationMachine.γa3) {SimulationMachine.γa3 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(5);}
    if (SimulationMachine.γa4) {SimulationMachine.γa4 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(9);}
    if (SimulationMachine.γb4) {SimulationMachine.γb4 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(9);}
    if (SimulationMachine.γc4) {SimulationMachine.γc4 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(9);}
    if (SimulationMachine.γa5) {SimulationMachine.γa5 = false; SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.sub(30);}
}

function SimulationMachineResetBtnSet() {    
    if (SimulationMachineResetBtnIf.eq(0)) {
        SimulationMachineResetBtnIf = new Decimal(1);
        return 0;
    }
    else {
        SimulationMachineResetBtnIf = new Decimal(0);
        return 0;
    }
}