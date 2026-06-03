const ten = new Decimal(10);
// 游戏变量
let currentTip = "";
let remainTip = "";
let remainTipType = "";
let newTipType = "";
let TextBoxReturn = null;
let tapState = [];
let uptapState = [];
let space = "inSimulation";
let state = "inSimulation";
let setAuto = {
    turEnergyAuto:false,
    turEnergyOriginAuto:false,
}
let turEnergy = new Decimal(0);
let turEnergyLevel = new Decimal(1);
let TotalClicks = new Decimal(0);
let EfficientClickLevel = new Decimal(0);
let HighspeedClickingLevel = new Decimal(0);
let turEnergyTier = new Decimal(0);
let TierEnhanceLevel = new Decimal(0);
let clickPower = new Decimal(0);
let autoClickers = new Decimal(0);
let autoClickerInterval = null;
let OriginProducingInterval = null;
let SimulationRoomProduceInterval = null;
let AutoBuyInterval = null;
let turEnergyOrigin = new Decimal(0);
let effectturEnergyOrigin = new Decimal(0.5);
let effectOriginMilestone7 = new Decimal(1);
let effectOriginEnhance = new Decimal(0);
let effectturEnergyOriginChallenge6 = new Decimal(1);
let effectturEnergyTier = new Decimal(1);
let effectClickOrigin = new Decimal(1);
let effectTierOrigin = new Decimal(0);
let effectOriginProduce = new Decimal(0);
let effectincreamentalSimulation = new Decimal(1);
let AmassOriginTimes = new Decimal(0);
let OriginAmassFastenLevel = new Decimal(0);
let OriginProduceEnergyLevel = new Decimal(0);
let ClickOriginLevel = new Decimal(0);
let TierOriginLevel = new Decimal(0);
let OriginEnhanceLevel = new Decimal(0);
let increamentalSimulationLevel = new Decimal(0);
let maxLevelup = new Decimal(20000000);
let maxturEnergy = new Decimal("1.80e308");
let simulationData = new Decimal(0);
let simulatedTimes = new Decimal(0);
let SimulationMachineBtye = new Decimal(0);
let SimulationMachineBtyeUsed = new Decimal(0);
let SimulationPower = new Decimal(0);
let degreeSimulationPower = new Decimal(7);
let effectSimulationPower = new Decimal(0);
let SimulationRoomLevel = {
    Room1:new Decimal(0),
    Room2:new Decimal(0),
    Room3:new Decimal(0),
    Room4:new Decimal(0),
    Room5:new Decimal(0),
    Room6:new Decimal(0),
    Room7:new Decimal(0),
    Room8:new Decimal(0),
}
let SimulationRoomAmount = {
    Room1:new Decimal(0),
    Room2:new Decimal(0),
    Room3:new Decimal(0),
    Room4:new Decimal(0),
    Room5:new Decimal(0),
    Room6:new Decimal(0),
    Room7:new Decimal(0),
    Room8:new Decimal(0),
}
let effectSimulationRoom = {
    Room1:new Decimal(1),
    Room2:new Decimal(1),
    Room3:new Decimal(1),
    Room4:new Decimal(1),
    Room5:new Decimal(1),
    Room6:new Decimal(1),
    Room7:new Decimal(1),
    Room8:new Decimal(1),
}
let BuySimulationMachineByte = {
    turEnergy:new Decimal(0),
    turEnergyOrigin:new Decimal(0),
    SimulationData:new Decimal(0)
}
let SimulationMachine = {
    λa1:false,
    λa2:false,
    λb1:false,
    λb2:false,
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
}
let effectSimulationMachine = {
    αa1:new Decimal(1),
    αa2:new Decimal(1),
    αa3:new Decimal(1),
    αb3:new Decimal(1),
    αa4:new Decimal(1),
    αb4:new Decimal(1),
    βa1:new Decimal(1),
    βa2:new Decimal(1),
    βb1:new Decimal(1),
    βb2:new Decimal(0),
    βa3:new Decimal(1),
    βa4:new Decimal(1),
}
let effectSimulationUpgradesturEnergy3 = new Decimal(1);
let effectSimulationUpgradesturEnergy4 = new Decimal(1);
let effect1SimulationExperiment2 = new Decimal(1);
let effect2SimulationExperiment2 = new Decimal(1);
let effect1SimulationExperiment3 = new Decimal(1);
let effect2SimulationExperiment3 = true;
let effectSimulationExperiment4 = new Decimal(0);
let effect1SimulationExperiment5 = new Decimal(1);
let effect2SimulationExperiment5 = new Decimal(1);
let timerSimulationExperiment5 = new Decimal(0);
let timerSimulationExperiment5Interval = null;
let SimulationMachineFold = false;
let challengedoing = {
    Tier:"",
    Origin:""
};
let experimentdoing = {
    Simulation:""
};
let challengeGoal = {
    Tier:new Decimal(0),
    Origin:new Decimal(0)
};
let experimentGoal = {
    Simulation:new Decimal(0)
};
let challengeGoaltype = {
    Tier:false,
    Origin:false
};
let experimentGoaltype = {
    Simulation:false
}
let challengePercent = new Decimal(0);
let experimentPercent = new Decimal(0);
let challengeprogress = {
    Tier:"",
    Origin:"",
};
let experimentprogress = {
    Simulation:""
}
let challengefinished = {
    turEnergyTierChallenge1:0,
    turEnergyTierChallenge2:0,
    turEnergyTierChallenge3:0,
    turEnergyTierChallenge4:0,
    turEnergyTierChallenge5:0,
    turEnergyTierChallenge6:0,
    turEnergyOriginChallenge1:0,
    turEnergyOriginChallenge2:0,
    turEnergyOriginChallenge3:0,
    turEnergyOriginChallenge4:0,
    turEnergyOriginChallenge5:0,
    turEnergyOriginChallenge6:0
};
let experimentfinished = {
    SimulationExperiment1:0,
    SimulationExperiment2:0,
    SimulationExperiment3:0,
    SimulationExperiment4:0,
    SimulationExperiment5:0,
}
let challengebuffs = {
    turEnergy:1,
    baseofHighspeedclicking:0,
    turEnergyTierChallenge3Price:1,
    AutoClicker:true,
    turEnergyTier:true,
    clickPower:true,
    disabledChallenge:0,
    turEnergy2:1,
    nothing:null,
    disabledOriginLevelup:true,
    disabledOriginMilestone:true,
    disabledturEnergyLevelup:true,
};
let experimentbuffs = {
    SimulationUpgrades:true,
    SimulationExperiment2:true,
    SimulationExperiment3:true,
    SimulationExperiment4:true,
    SimulationExperiment5:true,
}
let challengereward = {
    turEnergy:1,
    baseofHighspeedclicking:0,
    delayScalingturEnergyLevelup:0,
    BuyMaxAutoClicker:false,
    baseofEfficientClick:0,
    turEnergyOrigin:false,
    ChallengeTimes:3,
    turEnergyOriginAmount:1,
    BuyMaxturEnergy:false,
    EfficientOriginProduce:false,
    TierresetNothing:false,
    AmassTimesAffectturEnergy:false,
};
let experimentreward = {
    SimulationExperiment1:false,
    SimulationExperiment2:false,
    SimulationExperiment3:false,
    SimulationExperiment4:false,
    SimulationExperiment5:false,
}
let SimulationUpgrades = {
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
};
let gameData = { };