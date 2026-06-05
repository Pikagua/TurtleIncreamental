function saveGame() {
    gameData.space = space;
    gameData.state = state;
    gameData.setAuto = setAuto;
    gameData.turEnergy = turEnergy.toString();
    gameData.turEnergyLevel = turEnergyLevel.toString();
    gameData.TotalClicks = TotalClicks.toString();
    gameData.EfficientClickLevel = EfficientClickLevel.toString();
    gameData.HighspeedClickingLevel = HighspeedClickingLevel.toString();
    gameData.turEnergyTier = turEnergyTier.toString();
    gameData.TierEnhanceLevel = TierEnhanceLevel.toString();
    gameData.autoClickers = autoClickers.toString();
    gameData.turEnergyOrigin = turEnergyOrigin.toString();
    gameData.effectturEnergyOrigin = effectturEnergyOrigin.toString();
    gameData.AmassOriginTimes = AmassOriginTimes.toString();
    gameData.OriginAmassFastenLevel = OriginAmassFastenLevel.toString();
    gameData.OriginProduceEnergyLevel = OriginProduceEnergyLevel.toString();
    gameData.ClickOriginLevel = ClickOriginLevel.toString();
    gameData.TierOriginLevel = TierOriginLevel.toString();
    gameData.OriginEnhanceLevel = OriginEnhanceLevel.toString();
    gameData.increamentalSimulationLevel = increamentalSimulationLevel.toString();
    gameData.maxLevelup = maxLevelup.toString();
    gameData.maxturEnergy = maxturEnergy.toString();
    gameData.BasicEnergy = BasicEnergy.toString();
    gameData.everBasicEnergyChange = everBasicEnergyChange.toString();
    gameData.EnergyMachineALevel = EnergyMachineALevel.toString();
    gameData.EnergyMachineBLevel = EnergyMachineBLevel.toString();
    gameData.EnergyMachineCLevel = EnergyMachineCLevel.toString();
    gameData.EnergyMachineDLevel = EnergyMachineDLevel.toString();
    gameData.EnergyMachineELevel = EnergyMachineELevel.toString();
    gameData.SolarEnergy = SolarEnergy.toString();
    gameData.turEnergyCatalysisLevel = turEnergyCatalysisLevel.toString();
    gameData.OriginCatalysisLevel = OriginCatalysisLevel.toString();
    gameData.ClickCatalysisLevel = ClickCatalysisLevel.toString();
    gameData.simulationData = simulationData.toString();
    gameData.simulatedTimes = simulatedTimes.toString();
    gameData.SimulationMachineFold = SimulationMachineFold.toString();
    gameData.SimulationMachineBtye = SimulationMachineBtye.toString();
    gameData.SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.toString();
    gameData.SimulationPower = SimulationPower.toString();
    gameData.timerSimulationExperiment5 = timerSimulationExperiment5.toString();
    gameData.SimulationRoomLevel = SimulationRoomLevel;
    gameData.SimulationRoomAmount = SimulationRoomAmount;
    gameData.BuySimulationMachineByte = BuySimulationMachineByte;
    gameData.SimulationMachine = SimulationMachine;
    gameData.challengedoing = challengedoing;
    gameData.experimentdoing = experimentdoing;
    gameData.challengeGoal = challengeGoal;
    gameData.experimentGoal = experimentGoal;
    gameData.challengeGoaltype = challengeGoaltype;
    gameData.experimentGoaltype = experimentGoaltype;
    gameData.SimulationUpgrades = SimulationUpgrades;
    gameData.challengefinished = challengefinished;
    gameData.experimentfinished = experimentfinished;

    localStorage.setItem("TurtleIncreamental", JSON.stringify(gameData));
}

const Save = setInterval(() => {
    saveGame();
}, 10000);

function defualtSet() {
    space = "inSimulation";
    state = "inSimulation";
    setAuto = {
        turEnergyAuto:false,
        turEnergyOriginAuto:false,
    }
    turEnergy = new Decimal(0);
    turEnergyLevel = new Decimal(1);
    TotalClicks = new Decimal(0);
    EfficientClickLevel = new Decimal(0);
    HighspeedClickingLevel = new Decimal(0);
    turEnergyTier = new Decimal(0);
    TierEnhanceLevel = new Decimal(0);
    clickPower = new Decimal(0);
    autoClickers = new Decimal(0);
    clearInterval(autoClickerInterval);
    autoClickerInterval = null;
    clearInterval(OriginProducingInterval);
    OriginProducingInterval = null;
    clearInterval(SimulationRoomProduceInterval);
    SimulationRoomProduceInterval = null;
    clearInterval(timerSimulationExperiment5Interval);
    timerSimulationExperiment5Interval = null;
    clearInterval(BasicEnergyProduceInterval);
    BasicEnergyProduceInterval = null;
    turEnergyOrigin = new Decimal(0);
    effectturEnergyOrigin = new Decimal(0.5);
    AmassOriginTimes = new Decimal(0),
    OriginAmassFastenLevel = new Decimal(0);
    OriginProduceEnergyLevel = new Decimal(0);
    ClickOriginLevel = new Decimal(0);
    TierOriginLevel = new Decimal(0);
    OriginEnhanceLevel = new Decimal(0);
    increamentalSimulationLevel = new Decimal(0);
    maxLevelup = new Decimal(20000000);
    maxturEnergy = new Decimal("1.80e308");
    everBasicEnergyChange = false;
    EnergyMachineALevel = new Decimal(0);
    EnergyMachineBLevel = new Decimal(0);
    EnergyMachineCLevel = new Decimal(0);
    EnergyMachineDLevel = new Decimal(0);
    EnergyMachineELevel = new Decimal(0);
    BasicEnergy = new Decimal(0);
    SolarEnergy = new Decimal(0);
    turEnergyCatalysisLevel = new Decimal(0);
    OriginCatalysisLevel = new Decimal(0);
    ClickCatalysisLevel = new Decimal(0);
    simulationData = new Decimal(0);
    simulatedTimes = new Decimal(0);
    SimulationMachineFold = false;
    SimulationMachineBtye = new Decimal(0);
    SimulationMachineBtyeUsed = new Decimal(0);
    SimulationPower = new Decimal(0);
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
    BuySimulationMachineByte = {
        turEnergy:new Decimal(0),
        turEnergyOrigin:new Decimal(0),
        SimulationData:new Decimal(0)
    }
    SimulationMachine = {
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
    challengedoing = {
        Tier:"",
        Origin:""
    };
    experimentdoing = {
        Simulation:""
    };
    challengeGoal = {
        Tier:new Decimal(0),
        Origin:new Decimal(0)
    };
    experimentGoal = {
        Simulation:new Decimal(0)
    };
    challengeGoaltype = {
        Tier:false,
        Origin:false
    };
    experimentGoaltype = {
        Simulation:false
    }
    challengePercent = new Decimal(0);
    experimentPercent = new Decimal(0);
    challengeprogress = {
        Tier:"",
        Origin:""
    };
    experimentprogress = {
        Simulation:""
    };
    challengebuffs = {
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
    experimentbuffs = {
        SimulationUpgrades:true,
    }
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
    };
    challengefinished = {
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
    experimentfinished = {
        SimulationExperiment1:0,
        SimulationExperiment2:0,
        SimulationExperiment3:0,
        SimulationExperiment4:0,
        SimulationExperiment5:0,
    }
}

function loadGame() {
    let saved = localStorage.getItem("TurtleIncreamental");
    if (saved) {
        let Data = JSON.parse(saved);
        space = Data.space ?? "inSimulation";
        state = Data.state ?? "inSimulation";
        Data.setAuto = Data.setAuto ?? {};
        setAuto.turEnergyAuto = Data.setAuto.turEnergyAuto ?? false;
        setAuto.turEnergyOriginAuto = Data.setAuto.turEnergyOriginAuto ?? false;
        turEnergy = new Decimal(Data.turEnergy) ?? new Decimal(0);
        turEnergyLevel = new Decimal(Data.turEnergyLevel) ?? new Decimal(1);
        TotalClicks = new Decimal(Data.TotalClicks) ?? new Decimal(0);
        EfficientClickLevel = new Decimal(Data.EfficientClickLevel) ?? new Decimal(0);
        HighspeedClickingLevel = new Decimal(Data.HighspeedClickingLevel) ?? new Decimal(0);
        turEnergyTier = new Decimal(Data.turEnergyTier) ?? new Decimal(0);
        TierEnhanceLevel = new Decimal(Data.TierEnhanceLevel) ?? new Decimal(0);
        autoClickers = new Decimal(Data.autoClickers) ?? new Decimal(0);
        turEnergyOrigin = new Decimal(Data.turEnergyOrigin) ?? new Decimal(0);
        effectturEnergyOrigin = new Decimal(Data.effectturEnergyOrigin) ?? new Decimal(0.5);
        AmassOriginTimes = new Decimal(Data.AmassOriginTimes) ?? new Decimal(0);
        OriginAmassFastenLevel = new Decimal(Data.OriginAmassFastenLevel) ?? new Decimal(0);
        OriginProduceEnergyLevel = new Decimal(Data.OriginProduceEnergyLevel) ?? new Decimal(0);
        ClickOriginLevel = new Decimal(Data.ClickOriginLevel) ?? new Decimal(0);
        TierOriginLevel = new Decimal(Data.TierOriginLevel) ?? new Decimal(0);
        OriginEnhanceLevel = new Decimal(Data.OriginEnhanceLevel) ?? new Decimal(0);
        increamentalSimulationLevel = new Decimal(Data.increamentalSimulationLevel) ?? new Decimal(0);
        maxLevelup = new Decimal(Data.maxLevelup) ?? new Decimal(20000000);
        maxturEnergy = new Decimal(Data.maxturEnergy) ?? new Decimal("1.80e309");
        BasicEnergy = new Decimal(Data.BasicEnergy) ?? new Decimal(0);
        everBasicEnergyChange = Data.everBasicEnergyChange ?? false;
        if (everBasicEnergyChange === "true") everBasicEnergyChange = true;
        else everBasicEnergyChange = false;
        EnergyMachineALevel = new Decimal(Data.EnergyMachineALevel) ?? new Decimal(0);
        EnergyMachineBLevel = new Decimal(Data.EnergyMachineBLevel) ?? new Decimal(0);
        EnergyMachineCLevel = new Decimal(Data.EnergyMachineCLevel) ?? new Decimal(0);
        EnergyMachineDLevel = new Decimal(Data.EnergyMachineDLevel) ?? new Decimal(0);
        EnergyMachineELevel = new Decimal(Data.EnergyMachineELevel) ?? new Decimal(0);
        SolarEnergy = new Decimal(Data.SolarEnergy) ?? new Decimal(0);
        turEnergyCatalysisLevel = new Decimal(Data.turEnergyCatalysisLevel) ?? new Decimal(0);
        OriginCatalysisLevel = new Decimal(Data.OriginCatalysisLevel) ?? new Decimal(0);
        ClickCatalysisLevel = new Decimal(Data.ClickCatalysisLevel) ?? new Decimal(0);
        simulationData = new Decimal(Data.simulationData) ?? new Decimal(0);
        simulatedTimes = new Decimal(Data.simulatedTimes) ?? new Decimal(0);
        SimulationMachineFold = Data.SimulationMachineFold ?? false;
        if (SimulationMachineFold === "true") SimulationMachineFold = true;
        else SimulationMachineFold = false;
        SimulationMachineBtye = new Decimal(Data.SimulationMachineBtye) ?? new Decimal(0);
        SimulationMachineBtyeUsed = new Decimal(Data.SimulationMachineBtyeUsed) ?? new Decimal(0);
        Data.BuySimulationMachineByte = Data.BuySimulationMachineByte ?? {};
        BuySimulationMachineByte.turEnergy = new Decimal(Data.BuySimulationMachineByte.turEnergy) ?? new Decimal(0);
        BuySimulationMachineByte.turEnergyOrigin = new Decimal(Data.BuySimulationMachineByte.turEnergyOrigin) ?? new Decimal(0);
        BuySimulationMachineByte.SimulationData = new Decimal(Data.BuySimulationMachineByte.SimulationData) ?? new Decimal(0);
        SimulationPower = new Decimal(Data.SimulationPower) ?? new Decimal(0);
        timerSimulationExperiment5 = new Decimal(Data.timerSimulationExperiment5) ?? new Decimal(0);
        Data.SimulationRoomLevel = Data.SimulationRoomLevel ?? {};
        SimulationRoomLevel.Room1 = new Decimal(Data.SimulationRoomLevel.Room1) ?? new Decimal(0);
        SimulationRoomLevel.Room2 = new Decimal(Data.SimulationRoomLevel.Room2) ?? new Decimal(0);
        SimulationRoomLevel.Room3 = new Decimal(Data.SimulationRoomLevel.Room3) ?? new Decimal(0);
        SimulationRoomLevel.Room4 = new Decimal(Data.SimulationRoomLevel.Room4) ?? new Decimal(0);
        SimulationRoomLevel.Room5 = new Decimal(Data.SimulationRoomLevel.Room5) ?? new Decimal(0);
        SimulationRoomLevel.Room6 = new Decimal(Data.SimulationRoomLevel.Room6) ?? new Decimal(0);
        SimulationRoomLevel.Room7 = new Decimal(Data.SimulationRoomLevel.Room7) ?? new Decimal(0);
        SimulationRoomLevel.Room8 = new Decimal(Data.SimulationRoomLevel.Room8) ?? new Decimal(0);
        Data.SimulationRoomAmount = Data.SimulationRoomAmount ?? {};
        SimulationRoomAmount.Room1 = new Decimal(Data.SimulationRoomAmount.Room1) ?? new Decimal(0);
        SimulationRoomAmount.Room2 = new Decimal(Data.SimulationRoomAmount.Room2) ?? new Decimal(0);
        SimulationRoomAmount.Room3 = new Decimal(Data.SimulationRoomAmount.Room3) ?? new Decimal(0);
        SimulationRoomAmount.Room4 = new Decimal(Data.SimulationRoomAmount.Room4) ?? new Decimal(0);
        SimulationRoomAmount.Room5 = new Decimal(Data.SimulationRoomAmount.Room5) ?? new Decimal(0);
        SimulationRoomAmount.Room6 = new Decimal(Data.SimulationRoomAmount.Room6) ?? new Decimal(0);
        SimulationRoomAmount.Room7 = new Decimal(Data.SimulationRoomAmount.Room7) ?? new Decimal(0);
        SimulationRoomAmount.Room8 = new Decimal(Data.SimulationRoomAmount.Room8) ?? new Decimal(0);
        Data.SimulationMachine = Data.SimulationMachine ?? {};
        SimulationMachine.λa1 = Data.SimulationMachine.λa1 ?? false;
        SimulationMachine.λa2 = Data.SimulationMachine.λa2 ?? false;
        SimulationMachine.λb1 = Data.SimulationMachine.λb1 ?? false;
        SimulationMachine.λb2 = Data.SimulationMachine.λb2 ?? false;
        SimulationMachine.λc1 = Data.SimulationMachine.λc1 ?? false;
        SimulationMachine.λc2 = Data.SimulationMachine.λc2 ?? false;
        SimulationMachine.αa1 = Data.SimulationMachine.αa1 ?? false;
        SimulationMachine.αa2 = Data.SimulationMachine.αa2 ?? false;
        SimulationMachine.αa3 = Data.SimulationMachine.αa3 ?? false;
        SimulationMachine.αb3 = Data.SimulationMachine.αb3 ?? false;
        SimulationMachine.αa4 = Data.SimulationMachine.αa4 ?? false;
        SimulationMachine.αb4 = Data.SimulationMachine.αb4 ?? false;
        SimulationMachine.αa5 = Data.SimulationMachine.αa5 ?? false;
        SimulationMachine.βa1 = Data.SimulationMachine.βa1 ?? false;
        SimulationMachine.βb1 = Data.SimulationMachine.βb1 ?? false;
        SimulationMachine.βa2 = Data.SimulationMachine.βa2 ?? false;
        SimulationMachine.βb2 = Data.SimulationMachine.βb2 ?? false;
        SimulationMachine.βa3 = Data.SimulationMachine.βa3 ?? false;
        SimulationMachine.βa4 = Data.SimulationMachine.βa4 ?? false;
        Data.challengedoing = Data.challengedoing ?? {};
        challengedoing.Tier = Data.challengedoing.Tier ?? "";
        challengedoing.Origin = Data.challengedoing.Origin ?? "";
        Data.experimentdoing = Data.experimentdoing ?? {};
        experimentdoing.Simulation = Data.experimentdoing.Simulation ?? "";
        Data.challengeGoal = Data.challengeGoal ?? {};
        challengeGoal.Tier = new Decimal(Data.challengeGoal.Tier) ?? new Decimal(0);
        challengeGoal.Origin = new Decimal(Data.challengeGoal.Origin) ?? new Decimal(0);
        Data.experimentGoal = Data.experimentGoal ?? {};
        experimentGoal.Simulation = new Decimal(Data.experimentGoal.Simulation) ?? new Decimal(0);
        Data.challengeGoaltype = Data.challengeGoaltype ?? {};
        challengeGoaltype.Tier = Data.challengeGoaltype.Tier ?? false;
        challengeGoaltype.Origin = Data.challengeGoaltype.Origin ?? false;
        Data.experimentGoaltype = Data.experimentGoaltype ?? {};
        experimentGoaltype.Simulation = Data.experimentGoal.Simulation ?? false;
        Data.SimulationUpgrades = Data.SimulationUpgrades ?? {};
        Data.SimulationUpgrades.turEnergy1 = Data.SimulationUpgrades.turEnergy1 ?? {};
        SimulationUpgrades.turEnergy1.if = Data.SimulationUpgrades.turEnergy1.if ?? false;
        SimulationUpgrades.turEnergy1.num = Data.SimulationUpgrades.turEnergy1.num ?? new Decimal(1);
        Data.SimulationUpgrades.turEnergy2 = Data.SimulationUpgrades.turEnergy2 ?? {};
        SimulationUpgrades.turEnergy2.if = Data.SimulationUpgrades.turEnergy2.if ?? false;
        SimulationUpgrades.turEnergy2.num = Data.SimulationUpgrades.turEnergy2.num ?? new Decimal(1);
        Data.SimulationUpgrades.turEnergy3 = Data.SimulationUpgrades.turEnergy3 ?? {};
        SimulationUpgrades.turEnergy3.if = Data.SimulationUpgrades.turEnergy3.if ?? false;
        SimulationUpgrades.turEnergy3.num = Data.SimulationUpgrades.turEnergy3.num ?? new Decimal(1);
        Data.SimulationUpgrades.turEnergy4 = Data.SimulationUpgrades.turEnergy4 ?? {};
        SimulationUpgrades.turEnergy4.if = Data.SimulationUpgrades.turEnergy4.if ?? false;
        SimulationUpgrades.turEnergy4.num = Data.SimulationUpgrades.turEnergy4.num ?? new Decimal(1);
        Data.SimulationUpgrades.turEnergyOrigin1 = Data.SimulationUpgrades.turEnergyOrigin1 ?? {};
        SimulationUpgrades.turEnergyOrigin1.if = Data.SimulationUpgrades.turEnergyOrigin1.if ?? false;
        SimulationUpgrades.turEnergyOrigin1.num = Data.SimulationUpgrades.turEnergyOrigin1.num ?? new Decimal(1);
        Data.SimulationUpgrades.turEnergyOrigin2 = Data.SimulationUpgrades.turEnergyOrigin2 ?? {};
        SimulationUpgrades.turEnergyOrigin2.if = Data.SimulationUpgrades.turEnergyOrigin2.if ?? false;
        SimulationUpgrades.turEnergyOrigin2.num = Data.SimulationUpgrades.turEnergyOrigin2.num ?? new Decimal(1);
        Data.SimulationUpgrades.turEnergyOrigin3 = Data.SimulationUpgrades.turEnergyOrigin3 ?? {};
        SimulationUpgrades.turEnergyOrigin3.if = Data.SimulationUpgrades.turEnergyOrigin3.if ?? false;
        Data.SimulationUpgrades.turEnergyOrigin4 = Data.SimulationUpgrades.turEnergyOrigin4 ?? {};
        SimulationUpgrades.turEnergyOrigin4.if = Data.SimulationUpgrades.turEnergyOrigin4.if ?? false;
        Data.SimulationUpgrades.else1 = Data.SimulationUpgrades.else1 ?? {};
        SimulationUpgrades.else1.if = Data.SimulationUpgrades.else1.if ?? false;
        Data.SimulationUpgrades.else2 = Data.SimulationUpgrades.else2 ?? {};
        SimulationUpgrades.else2.if = Data.SimulationUpgrades.else2.if ?? false;
        Data.SimulationUpgrades.else3 = Data.SimulationUpgrades.else3 ?? {};
        SimulationUpgrades.else3.if = Data.SimulationUpgrades.else3.if ?? false;
        Data.SimulationUpgrades.else4 = Data.SimulationUpgrades.else4 ?? {};
        SimulationUpgrades.else4.if = Data.SimulationUpgrades.else4.if ?? false;
        Data.challengefinished = Data.challengefinished ?? {};
        challengefinished.turEnergyTierChallenge1 = Data.challengefinished.turEnergyTierChallenge1 ?? 0;
        challengefinished.turEnergyTierChallenge2 = Data.challengefinished.turEnergyTierChallenge2 ?? 0;
        challengefinished.turEnergyTierChallenge3 = Data.challengefinished.turEnergyTierChallenge3 ?? 0;
        challengefinished.turEnergyTierChallenge4 = Data.challengefinished.turEnergyTierChallenge4 ?? 0;
        challengefinished.turEnergyTierChallenge5 = Data.challengefinished.turEnergyTierChallenge5 ?? 0;
        challengefinished.turEnergyTierChallenge6 = Data.challengefinished.turEnergyTierChallenge6 ?? 0;
        challengefinished.turEnergyOriginChallenge1 = Data.challengefinished.turEnergyOriginChallenge1 ?? 0;
        challengefinished.turEnergyOriginChallenge2 = Data.challengefinished.turEnergyOriginChallenge2 ?? 0;
        challengefinished.turEnergyOriginChallenge3 = Data.challengefinished.turEnergyOriginChallenge3 ?? 0;
        challengefinished.turEnergyOriginChallenge4 = Data.challengefinished.turEnergyOriginChallenge4 ?? 0;
        challengefinished.turEnergyOriginChallenge5 = Data.challengefinished.turEnergyOriginChallenge5 ?? 0;
        challengefinished.turEnergyOriginChallenge6 = Data.challengefinished.turEnergyOriginChallenge6 ?? 0;
        Data.experimentfinished = Data.experimentfinished ?? {};
        experimentfinished.SimulationExperiment1 = Data.experimentfinished.SimulationExperiment1 ?? 0;
        experimentfinished.SimulationExperiment2 = Data.experimentfinished.SimulationExperiment2 ?? 0;
        experimentfinished.SimulationExperiment3 = Data.experimentfinished.SimulationExperiment3 ?? 0;
        experimentfinished.SimulationExperiment4 = Data.experimentfinished.SimulationExperiment4 ?? 0;
        experimentfinished.SimulationExperiment5 = Data.experimentfinished.SimulationExperiment5 ?? 0;
    } else {
        defualtSet();
    }
}

// 删除存档 输入:delete
const deleteCode = ['d', 'e', 'l', 'e', 't', 'e'];
const saveCode = ['s','a','v','e'];
const loadCode = ['l','o','a','d'];
let deletecurrentIndex = 0;
let savecurrentIndex = 0;
let loadcurrentIndex = 0;

document.addEventListener('keydown', function(event) {
    // 获取按下的字符（这行代码会将所有大小写识别为小写）
    let pressedKey = event.key.toLowerCase();
    
    // 检查是否匹配序列中的下一个字符
    if (pressedKey === deleteCode[deletecurrentIndex]) {
        deletecurrentIndex++;
        
        // 完全匹配成功
        if (deletecurrentIndex === deleteCode.length) {
            if (confirm(`你输入了delete，确定要删除存档吗`)) {
                defualtSet();
                saveGame();
                changetoturEnergyuptap();
                changetoturEnergyLeveluptap();
                giveupChallengeOrigin();
                restartAutoClicker();
                restartOriginProduce();
            }
            
            // 重置索引，允许再次触发
            deletecurrentIndex = 0;
        }
    } else {
        // 输入错误，重置匹配进度
        deletecurrentIndex = 0;
    }

    // 导出存档用save
    if (pressedKey === saveCode[savecurrentIndex]) {
        savecurrentIndex++;
        
        // 完全匹配成功
        if (savecurrentIndex === saveCode.length) {
            const saveData = localStorage.getItem("TurtleIncreamental");
            navigator.clipboard.writeText(saveData);
            alert(`存档已导出到剪贴板`);
            
            // 重置索引，允许再次触发
            savecurrentIndex = 0;
        }
    } else {
        // 输入错误，重置匹配进度
        savecurrentIndex = 0;
    }

    // 输入存档用load
    if (pressedKey === loadCode[loadcurrentIndex]) {
        loadcurrentIndex++;
        
        // 完全匹配成功
        if (loadcurrentIndex === loadCode.length) {
            const saveText = prompt("你输入了load，请粘贴存档内容：");
            if (saveText) {
                localStorage.setItem("TurtleIncreamental", saveText);
                loadGame();
                alert("存档导入成功");
                location.reload();
            }
            
            // 重置索引，允许再次触发
            loadcurrentIndex = 0;
        }
    } else {
        // 输入错误，重置匹配进度
        loadcurrentIndex = 0;
    }
});