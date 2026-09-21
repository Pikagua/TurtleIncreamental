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
let page = "turEnergy";
let setAuto = {
    turEnergyAuto:false,
    turEnergyOriginAuto:false,
    BasicEnergyChangeAuto:new Decimal(0),
    BasicEnergyChangeAutoAmount:new Decimal(0),
    BasicEnergyChangeAutoTime:new Decimal(0),
    BasicEnergyChangeAutoMutiple:new Decimal(0),
    BasicEnergyChangeAutoLast:new Decimal(0),
    EnergyMachineAuto:false,
    SolarEnergyAuto:false,
    ChemicalEnergyAuto:false,
    ElectricEnergyAuto:false,
    MechanicalEnergyAuto:false,
    SimulationCompleteAuto:new Decimal(0),
    SimulationCompleteAutoAmount:new Decimal(0),
    SimulationCompleteAutoTime:new Decimal(0),
    SimulationCompleteAutoMutiple:new Decimal(0),
    SimulationCompleteAutoLast:new Decimal(0),
    SimulationStartAuto:false,
    increamentalSimulationAuto:false,
    SimulationRoomAuto:false,
    SimulationByteAuto:false,
}
let timerAdding = null;
let timerBasicEnergyChangeAutoTime = new Decimal(0);
let timerSimulationCompleteAutoTime = new Decimal(0);
let timerSimulation = new Decimal(0);
let turEnergy = new Decimal(0);
let maxturEnergyinsimulation = new Decimal(0);
let maxsimulationDatainIteration = new Decimal(0);
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
let BasicEnergyProduceInterval = null;
let AutoBuyInterval = null;
let turEnergyOrigin = new Decimal(0);
let effectturEnergyOrigin = new Decimal(0.5);
let effectOriginMilestone7 = new Decimal(1);
let effectOriginMilestone9 = new Decimal(1);
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
let maxSimulationData = new Decimal("1.80e308");
let everBasicEnergyChange = false;
let BasicEnergy = new Decimal(0);
let EnergyMachineALevel = new Decimal(0);
let EnergyMachineBLevel = new Decimal(0);
let EnergyMachineCLevel = new Decimal(0);
let EnergyMachineDLevel = new Decimal(0);
let EnergyMachineELevel = new Decimal(0);
let effectEnergyMachineA = new Decimal(0);
let effectEnergyMachineB = new Decimal(0);
let effectEnergyMachineC = new Decimal(0);
let effectEnergyMachineD = new Decimal(0);
let effectEnergyMachineE = new Decimal(0);
let EnergyEffectionBase = new Decimal(0);
let EnergyEffection = new Decimal(0);
let turEnergyCatalysisLevel = new Decimal(0);
let OriginCatalysisLevel = new Decimal(0);
let ClickCatalysisLevel = new Decimal(0);
let PhotosynthesisLevel = new Decimal(0);
let effectturEnergyCatalysis = new Decimal(1);
let effectOriginCatalysis = new Decimal(1);
let effectClickCatalysis = new Decimal(1);
let effectPhotosynthesis = new Decimal(0);
let ChemicalEnergy = new Decimal(0);
let SimulationCatalysisLevel = new Decimal(0);
let TierCatalysisLevel = new Decimal(0);
let ReactionCatalysisLevel = new Decimal(0);
let PrimaryBatteryLevel = new Decimal(0);
let effectSimulationCatalysis = new Decimal(1);
let effectTierCatalysis = new Decimal(0);
let effectRecationCatalysis = new Decimal(1);
let effectPrimaryBattery = new Decimal(0);
let ElectricEnergy = new Decimal(0);
let BoostVoltageLevel = new Decimal(0);
let ElectrolysisLevel = new Decimal(0);
let IonizationLevel = new Decimal(0);
let MotorLevel = new Decimal(0);
let PowerOnLevel = new Decimal(0);
let effectBoostVoltage = new Decimal(0);
let effectElectrolysis = new Decimal(1);
let effectIonization = new Decimal(0);
let effectMotor = new Decimal(0);
let MechanicalEnergy = new Decimal(0);
let KineticEnergyLevel = new Decimal(0);
let ElasticPotentialEnergyLevel = new Decimal(0);
let GravitationalPotentialEnergyLevel = new Decimal(0);
let FrictionLevel = new Decimal(0);
let effectKineticEnergy = new Decimal(0);
let effectElasticPotentialEnergy = new Decimal(0);
let effectGravitationalPotentialEnergy = new Decimal(0);
let effectFriction = new Decimal(0);
let SolarEnergy = new Decimal(0);
let simulationData = new Decimal(0);
let simulatedTimes = new Decimal(0);
let SimulationMachineBtye = new Decimal(0);
let SimulationMachineBtyeUsed = new Decimal(0);
let SimulationMachineResetBtnIf = new Decimal(0);// 理论上这个变量用布尔值更好，但是我懒，0表false，1表true
let SimulationPower = new Decimal(0);
let degreeSimulationPower = new Decimal(7);
let effectSimulationPower = new Decimal(0);
let IterationData = new Decimal(0);
let IteratedTimes = new Decimal(0);
let Iterated = new Decimal(0);
let effectIterationMileStone1 = new Decimal(1);
let increamentalIterationLevel = new Decimal(0);
let OriginIterationLevel = new Decimal(0);
let EnergyExpansionLevel = new Decimal(0);
let effectincreamentalIteration = new Decimal(0);
let effectOriginIteration = new Decimal(0);
let effectEnergyExpansion = new Decimal(0);
let IterationInformation = new Decimal(0);
let degreeIterationInformation = new Decimal(7);
let effectIterationInformation = new Decimal(0);
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
let IterationRoomLevel = {
    Room1:new Decimal(0),
    Room2:new Decimal(0),
    Room3:new Decimal(0),
    Room4:new Decimal(0),
    Room5:new Decimal(0),
    Room6:new Decimal(0),
    Room7:new Decimal(0),
    Room8:new Decimal(0),
}
let IterationRoomAmount = {
    Room1:new Decimal(0),
    Room2:new Decimal(0),
    Room3:new Decimal(0),
    Room4:new Decimal(0),
    Room5:new Decimal(0),
    Room6:new Decimal(0),
    Room7:new Decimal(0),
    Room8:new Decimal(0),
}
let effectIterationRoom = {
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
let effectSimulationMachine = {
    αa1:new Decimal(1),
    αa2:new Decimal(1),
    αa3:new Decimal(1),
    αb3:new Decimal(1),
    αa4:new Decimal(1),
    αb4:new Decimal(1),
    αa5:new Decimal(0),
    βa1:new Decimal(1),
    βa2:new Decimal(1),
    βb1:new Decimal(1),
    βb2:new Decimal(0),
    βa3:new Decimal(1),
    βa4:new Decimal(1),
    γa1:new Decimal(1),
    γa2:new Decimal(1),
    γb2:new Decimal(1),
    γc2:new Decimal(1),
    γa3:new Decimal(1000),
    γa4:new Decimal(1),
    γb4:new Decimal(1),
    γc4:new Decimal(1),
    γa5:new Decimal(1),
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
let effectSimulationExperiment6 = new Decimal(1);
let effectSimulationExperiment8 = new Decimal(1);
let timerSimulationExperiment9 = new Decimal(0);
let SimulationMachineFold = false;
let challengedoing = {
    Tier:"",
    Origin:"",
    BasicEnergy:""
};
let experimentdoing = {
    Simulation:""
};
let challengeGoal = {
    Tier:new Decimal(0),
    Origin:new Decimal(0),
    BasicEnergy:new Decimal(0),
};
let experimentGoal = {
    Simulation:new Decimal(0)
};
let challengeGoaltype = {
    Tier:false,
    Origin:false,
    BasicEnergy:false,
};
let experimentGoaltype = {
    Simulation:false
}
let challengePercent = new Decimal(0);
let experimentPercent = new Decimal(0);
let challengeprogress = {
    Tier:"",
    Origin:"",
    BasicEnergy:"",
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
    turEnergyOriginChallenge6:0,
    BasicEnergyChallenge1:0,
    BasicEnergyChallenge2:0,
    BasicEnergyChallenge3:0,
    BasicEnergyChallenge4:0,
    BasicEnergyChallenge5:0,
    BasicEnergyChallenge6:0,
};
let experimentfinished = {
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
    BasicEnergyChallenge1:new Decimal(1),
    BasicEnergyChallenge2:true,
    BasicEnergyChallenge3:true,
    BasicEnergyChallenge4:new Decimal(1),
    BasicEnergyChallenge5:true,
    BasicEnergyChallenge6:true,
};
let experimentbuffs = {
    SimulationUpgrades:true,
    SimulationExperiment2:true,
    SimulationExperiment3:true,
    SimulationExperiment4:true,
    SimulationExperiment5:true,
    SimulationExperiment6:true,
    SimulationExperiment7:true,
    SimulationExperiment8:true,
    SimulationExperiment9:true,
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
    BasicEnergyChallenge1:new Decimal(0),
    BasicEnergyChallenge2:new Decimal(0),
    BasicEnergyChallenge3:new Decimal(0),
    BasicEnergyChallenge4:new Decimal(2),
    BasicEnergyChallenge5:new Decimal(1),
    BasicEnergyChallenge6:new Decimal(0),
};
let experimentreward = {
    SimulationExperiment1:false,
    SimulationExperiment2:false,
    SimulationExperiment3:false,
    SimulationExperiment4:false,
    SimulationExperiment5:false,
    SimulationExperiment6:false,
    SimulationExperiment7:false,
    SimulationExperiment8:false,
    SimulationExperiment9:false,
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
let IterationStrengthen = {
    Produce1:{if:false, num:new Decimal(1)},
    Produce2:{if:false, num:new Decimal(3)},
    Produce3:{if:false, num:new Decimal(1)},
    Produce4:{if:false, num:new Decimal(1)},
    Reset1:{if:false},
    Reset2:{if:false},
    Reset3:{if:false},
    Reset4:{if:false},
    Auto1:{if:false},
    Auto2:{if:false},
    Auto3:{if:false},
    Auto4:{if:false},
};
let gameData = { };