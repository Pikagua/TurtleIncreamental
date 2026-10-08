function saveGame() {
    gameData.space = space;
    gameData.state = state;
    gameData.setAuto = setAuto;
    gameData.timerSimulation = timerSimulation.toString();
    gameData.timerBasicEnergyChangeAutoTime = timerBasicEnergyChangeAutoTime.toString();
    gameData.timerSimulationCompleteAutoTime = timerSimulationCompleteAutoTime.toString();
    gameData.turEnergy = turEnergy.toString();
    gameData.maxturEnergyinsimulation = maxturEnergyinsimulation.toString();
    gameData.maxsimulationDatainIteration = maxsimulationDatainIteration.toString();
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
    gameData.maxSimulationData = maxSimulationData.toString();
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
    gameData.PhotosynthesisLevel = PhotosynthesisLevel.toString();
    gameData.ChemicalEnergy = ChemicalEnergy.toString();
    gameData.SimulationCatalysisLevel = SimulationCatalysisLevel.toString();
    gameData.TierCatalysisLevel = TierCatalysisLevel.toString();
    gameData.ReactionCatalysisLevel = ReactionCatalysisLevel.toString();
    gameData.PrimaryBatteryLevel = PrimaryBatteryLevel.toString();
    gameData.ElectricEnergy = ElectricEnergy.toString();
    gameData.BoostVoltageLevel = BoostVoltageLevel.toString();
    gameData.ElectrolysisLevel = ElectrolysisLevel.toString();
    gameData.IonizationLevel = IonizationLevel.toString();
    gameData.MotorLevel = MotorLevel.toString();
    gameData.PowerOnLevel = PowerOnLevel.toString();
    gameData.MechanicalEnergy = MechanicalEnergy.toString();
    gameData.KineticEnergyLevel = KineticEnergyLevel.toString();
    gameData.ElasticPotentialEnergyLevel = ElasticPotentialEnergyLevel.toString();
    gameData.GravitationalPotentialEnergyLevel = GravitationalPotentialEnergyLevel.toString();
    gameData.FrictionLevel = FrictionLevel.toString();
    gameData.simulationData = simulationData.toString();
    gameData.simulatedTimes = simulatedTimes.toString();
    gameData.SimulationMachineFold = SimulationMachineFold.toString();
    gameData.SimulationMachineBtye = SimulationMachineBtye.toString();
    gameData.SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.toString();
    gameData.SimulationMachineResetBtnIf = SimulationMachineResetBtnIf.toString();
    gameData.SimulationPower = SimulationPower.toString();
    gameData.IterationData = IterationData.toString();
    gameData.IteratedTimes = IteratedTimes.toString();
    gameData.Iterated = Iterated.toString();
    gameData.increamentalIterationLevel = increamentalIterationLevel.toString();
    gameData.OriginIterationLevel = OriginIterationLevel.toString();
    gameData.EnergyExpansionLevel = EnergyExpansionLevel.toString();
    gameData.timerSimulationExperiment5 = timerSimulationExperiment5.toString();
    gameData.timerSimulationExperiment9 = timerSimulationExperiment9.toString();
    gameData.effectSimulationExperiment6 = effectSimulationExperiment6.toString();
    gameData.SimulationRoomLevel = SimulationRoomLevel;
    gameData.SimulationRoomAmount = SimulationRoomAmount;
    gameData.IterationInformation = IterationInformation.toString();
    gameData.IterationRoomLevel = IterationRoomLevel;
    gameData.IterationRoomAmount = IterationRoomAmount;
    gameData.BuySimulationMachineByte = BuySimulationMachineByte;
    gameData.SimulationMachine = SimulationMachine;
    gameData.challengedoing = challengedoing;
    gameData.experimentdoing = experimentdoing;
    gameData.challengeGoal = challengeGoal;
    gameData.experimentGoal = experimentGoal;
    gameData.challengeGoaltype = challengeGoaltype;
    gameData.experimentGoaltype = experimentGoaltype;
    gameData.SimulationUpgrades = SimulationUpgrades;
    gameData.IterationStrengthen = IterationStrengthen;
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
    timerAdding = null;
    timerSimulation = new Decimal(0);
    timerBasicEnergyChangeAutoTime = new Decimal(0);
    timerSimulationCompleteAutoTime = new Decimal(0);
    turEnergy = new Decimal(0);
    maxturEnergyinsimulation = new Decimal(0);
    maxsimulationDatainIteration = new Decimal(0);
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
    maxSimulationData = new Decimal("1.80e308");
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
    PhotosynthesisLevel = new Decimal(0);
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
    PowerOnLevel = new Decimal(0);
    MechanicalEnergy = new Decimal(0);
    KineticEnergyLevel = new Decimal(0);
    ElasticPotentialEnergyLevel = new Decimal(0);
    GravitationalPotentialEnergyLevel = new Decimal(0);
    FrictionLevel = new Decimal(0);
    simulationData = new Decimal(0);
    simulatedTimes = new Decimal(0);
    SimulationMachineFold = false;
    SimulationMachineBtye = new Decimal(0);
    SimulationMachineBtyeUsed = new Decimal(0);
    SimulationMachineResetBtnIf = new Decimal(0);
    SimulationPower = new Decimal(0);
    IterationData = new Decimal(0);
    IteratedTimes = new Decimal(0);
    Iterated = new Decimal(0);
    increamentalIterationLevel = new Decimal(0);
    OriginIterationLevel = new Decimal(0);
    EnergyExpansionLevel = new Decimal(0);
    IterationInformation = new Decimal(0);
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
    IterationRoomLevel = {
        Room1:new Decimal(0),
        Room2:new Decimal(0),
        Room3:new Decimal(0),
        Room4:new Decimal(0),
        Room5:new Decimal(0),
        Room6:new Decimal(0),
        Room7:new Decimal(0),
        Room8:new Decimal(0),
    }
    IterationRoomAmount = {
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
        SimulationData:new Decimal(0),
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
    challengedoing = {
        Tier:"",
        Origin:"",
        BasicEnergy:"",
    };
    experimentdoing = {
        Simulation:""
    };
    challengeGoal = {
        Tier:new Decimal(0),
        Origin:new Decimal(0),
        BasicEnergy:new Decimal(0),
    };
    experimentGoal = {
        Simulation:new Decimal(0)
    };
    challengeGoaltype = {
        Tier:false,
        Origin:false,
        BasicEnergy:false,
    };
    experimentGoaltype = {
        Simulation:false
    }
    challengePercent = new Decimal(0);
    experimentPercent = new Decimal(0);
    challengeprogress = {
        Tier:"",
        Origin:"",
        BasicEnergy:"",
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
        BasicEnergyChallenge1:new Decimal(1),
        BasicEnergyChallenge2:true,
        BasicEnergyChallenge3:true,
        BasicEnergyChallenge4:new Decimal(1),
        BasicEnergyChallenge5:true,
        BasicEnergyChallenge6:true,
    };
    experimentbuffs = {
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
    effectSimulationExperiment6 = new Decimal(1);
    timerSimulationExperiment5 = new Decimal(0);
    timerSimulationExperiment9 = new Decimal(0);
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
    IterationStrengthen = {
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
        turEnergyOriginChallenge6:0,
        BasicEnergyChallenge1:0,
        BasicEnergyChallenge2:0,
        BasicEnergyChallenge3:0,
        BasicEnergyChallenge4:0,
        BasicEnergyChallenge5:0,
        BasicEnergyChallenge6:0,
    };
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

function loadGame() {
    experimentbuffs.SimulationExperiment6 = false;
    let saved = localStorage.getItem("TurtleIncreamental");
    if (saved) {
        let Data = JSON.parse(saved);
        space = Data.space ?? "inSimulation";
        state = Data.state ?? "inSimulation";
        Data.setAuto = Data.setAuto ?? {};
        setAuto.turEnergyAuto = Data.setAuto.turEnergyAuto ?? false;
        setAuto.turEnergyOriginAuto = Data.setAuto.turEnergyOriginAuto ?? false;
        setAuto.BasicEnergyChangeAuto = new Decimal(Data.setAuto.BasicEnergyChangeAuto) ?? new Decimal(0),
        setAuto.BasicEnergyChangeAutoAmount = new Decimal(Data.setAuto.BasicEnergyChangeAutoAmount) ?? new Decimal(0),
        setAuto.BasicEnergyChangeAutoTime = new Decimal(Data.setAuto.BasicEnergyChangeAutoTime) ?? new Decimal(0),
        setAuto.BasicEnergyChangeAutoMutiple = new Decimal(Data.setAuto.BasicEnergyChangeAutoMutiple) ?? new Decimal(0),
        setAuto.BasicEnergyChangeAutoLast = new Decimal(Data.setAuto.BasicEnergyChangeAutoLast) ?? new Decimal(0),
        setAuto.EnergyMachineAuto = Data.setAuto.EnergyMachineAuto ?? false;
        setAuto.SolarEnergyAuto = Data.setAuto.SolarEnergyAuto ?? false;
        setAuto.ChemicalEnergyAuto = Data.setAuto.ChemicalEnergyAuto ?? false;
        setAuto.ElectricEnergyAuto = Data.setAuto.ElectricEnergyAuto ?? false;
        setAuto.MechanicalEnergyAuto = Data.setAuto.MechanicalEnergyAuto ?? false;
        setAuto.SimulationCompleteAuto = new Decimal(Data.setAuto.SimulationCompleteAuto) ?? new Decimal(0);
        setAuto.SimulationCompleteAutoAmount = new Decimal(Data.setAuto.SimulationCompleteAutoAmount) ?? new Decimal(0);
        setAuto.SimulationCompleteAutoTime = new Decimal(Data.setAuto.SimulationCompleteAutoTime) ?? new Decimal(0);
        setAuto.SimulationCompleteAutoMutiple = new Decimal(Data.setAuto.SimulationCompleteAutoMutiple) ?? new Decimal(0);
        setAuto.SimulationCompleteAutoLast = new Decimal(Data.setAuto.SimulationCompleteAutoLast) ?? new Decimal(0);
        setAuto.SimulationStartAuto = Data.setAuto.SimulationStartAuto ?? false;
        setAuto.increamentalSimulationAuto = Data.setAuto.increamentalSimulationAuto ?? false;
        setAuto.SimulationRoomAuto = Data.setAuto.SimulationRoomAuto ?? false;
        setAuto.SimulationByteAuto = Data.setAuto.SimulationByteAuto ?? false;
        timerSimulation = new Decimal(Data.timerSimulation) ?? new Decimal(0);
        timerBasicEnergyChangeAutoTime = new Decimal(Data.timerBasicEnergyChangeAutoTime) ?? new Decimal(timerBasicEnergyChangeAutoTime);
        timerSimulationCompleteAutoTime = new Decimal(Data.timerSimulationCompleteAutoTime) ?? new Decimal(timerSimulationCompleteAutoTime);
        turEnergy = new Decimal(Data.turEnergy) ?? new Decimal(0);
        maxturEnergyinsimulation = new Decimal(Data.maxturEnergyinsimulation) ?? new Decimal(0);
        maxsimulationDatainIteration = new Decimal(Data.maxsimulationDatainIteration) ?? new Decimal(0);
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
        maxturEnergy = new Decimal(Data.maxturEnergy) ?? new Decimal("1.80e308");
        maxSimulationData = new Decimal(Data.maxSimulationData) ?? new Decimal("1.80e308");
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
        PhotosynthesisLevel = new Decimal(Data.PhotosynthesisLevel) ?? new Decimal(0);
        ChemicalEnergy = new Decimal(Data.ChemicalEnergy) ?? new Decimal(0);
        SimulationCatalysisLevel = new Decimal(Data.SimulationCatalysisLevel) ?? new Decimal(0);
        TierCatalysisLevel = new Decimal(Data.TierCatalysisLevel) ?? new Decimal(0);
        ReactionCatalysisLevel = new Decimal(Data.ReactionCatalysisLevel) ?? new Decimal(0);
        PrimaryBatteryLevel = new Decimal(Data.PrimaryBatteryLevel) ?? new Decimal(0);
        ElectricEnergy = new Decimal(Data.ElectricEnergy) ?? new Decimal(0);
        BoostVoltageLevel = new Decimal(Data.BoostVoltageLevel) ?? new Decimal(0);
        ElectrolysisLevel = new Decimal(Data.ElectrolysisLevel) ?? new Decimal(0);
        IonizationLevel = new Decimal(Data.IonizationLevel) ?? new Decimal(0);
        MotorLevel = new Decimal(Data.MotorLevel) ?? new Decimal(0);
        KineticEnergyLevel = new Decimal(Data.KineticEnergyLevel) ?? new Decimal(0);
        ElasticPotentialEnergyLevel = new Decimal(Data.ElasticPotentialEnergyLevel) ?? new Decimal(0);
        GravitationalPotentialEnergyLevel = new Decimal(Data.GravitationalPotentialEnergyLevel) ?? new Decimal(0);
        FrictionLevel = new Decimal(Data.FrictionLevel) ?? new Decimal(0);
        PowerOnLevel = new Decimal(Data.PowerOnLevel) ?? new Decimal(0);
        MechanicalEnergy = new Decimal(Data.MechanicalEnergy) ?? new Decimal(0);
        simulationData = new Decimal(Data.simulationData) ?? new Decimal(0);
        simulatedTimes = new Decimal(Data.simulatedTimes) ?? new Decimal(0);
        SimulationMachineFold = Data.SimulationMachineFold ?? false;
        if (SimulationMachineFold === "true") SimulationMachineFold = true;
        else SimulationMachineFold = false;
        SimulationMachineBtye = new Decimal(Data.SimulationMachineBtye) ?? new Decimal(0);
        SimulationMachineBtyeUsed = new Decimal(Data.SimulationMachineBtyeUsed) ?? new Decimal(0);
        SimulationMachineResetBtnIf = new Decimal(Data.SimulationMachineResetBtnIf) ?? new Decimal(0);
        Data.BuySimulationMachineByte = Data.BuySimulationMachineByte ?? {};
        BuySimulationMachineByte.turEnergy = new Decimal(Data.BuySimulationMachineByte.turEnergy) ?? new Decimal(0);
        BuySimulationMachineByte.turEnergyOrigin = new Decimal(Data.BuySimulationMachineByte.turEnergyOrigin) ?? new Decimal(0);
        BuySimulationMachineByte.SimulationData = new Decimal(Data.BuySimulationMachineByte.SimulationData) ?? new Decimal(0);
        SimulationPower = new Decimal(Data.SimulationPower) ?? new Decimal(0);
        IterationData = new Decimal(Data.IterationData) ?? new Decimal(0);
        IteratedTimes = new Decimal(Data.IteratedTimes) ?? new Decimal(0);
        Iterated = new Decimal(Data.Iterated) ?? new Decimal(0);
        increamentalIterationLevel = new Decimal(Data.increamentalIterationLevel) ?? new Decimal(0);
        OriginIterationLevel = new Decimal(Data.OriginIterationLevel) ?? new Decimal(0);
        EnergyExpansionLevel = new Decimal(Data.EnergyExpansionLevel) ?? new Decimal(0);
        IterationInformation = new Decimal(Data.IterationInformation) ?? new Decimal(0);
        timerSimulationExperiment5 = new Decimal(Data.timerSimulationExperiment5) ?? new Decimal(0);
        timerSimulationExperiment9 = new Decimal(Data.timerSimulationExperiment9) ?? new Decimal(0);
        effectSimulationExperiment6 = new Decimal(Data.effectSimulationExperiment6) ?? new Decimal(1);
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
        SimulationMachine.λa3 = Data.SimulationMachine.λa3 ?? false;
        SimulationMachine.λa4 = Data.SimulationMachine.λa4 ?? false;
        SimulationMachine.λa5 = Data.SimulationMachine.λa5 ?? false;
        SimulationMachine.λb1 = Data.SimulationMachine.λb1 ?? false;
        SimulationMachine.λb2 = Data.SimulationMachine.λb2 ?? false;
        SimulationMachine.λb3 = Data.SimulationMachine.λb3 ?? false;
        SimulationMachine.λb4 = Data.SimulationMachine.λb4 ?? false;
        SimulationMachine.λb5 = Data.SimulationMachine.λb5 ?? false;
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
        SimulationMachine.γa1 = Data.SimulationMachine.γa1 ?? false;
        SimulationMachine.γa2 = Data.SimulationMachine.γa2 ?? false;
        SimulationMachine.γb2 = Data.SimulationMachine.γb2 ?? false;
        SimulationMachine.γc2 = Data.SimulationMachine.γc2 ?? false;
        SimulationMachine.γa3 = Data.SimulationMachine.γa3 ?? false;
        SimulationMachine.γa4 = Data.SimulationMachine.γa4 ?? false;
        SimulationMachine.γb4 = Data.SimulationMachine.γb4 ?? false;
        SimulationMachine.γc4 = Data.SimulationMachine.γc4 ?? false;
        SimulationMachine.γa5 = Data.SimulationMachine.γa5 ?? false;
        Data.IterationRoomLevel = Data.IterationRoomLevel ?? {};
        IterationRoomLevel.Room1 = new Decimal(Data.IterationRoomLevel.Room1) ?? new Decimal(0);
        IterationRoomLevel.Room2 = new Decimal(Data.IterationRoomLevel.Room2) ?? new Decimal(0);
        IterationRoomLevel.Room3 = new Decimal(Data.IterationRoomLevel.Room3) ?? new Decimal(0);
        IterationRoomLevel.Room4 = new Decimal(Data.IterationRoomLevel.Room4) ?? new Decimal(0);
        IterationRoomLevel.Room5 = new Decimal(Data.IterationRoomLevel.Room5) ?? new Decimal(0);
        IterationRoomLevel.Room6 = new Decimal(Data.IterationRoomLevel.Room6) ?? new Decimal(0);
        IterationRoomLevel.Room7 = new Decimal(Data.IterationRoomLevel.Room7) ?? new Decimal(0);
        IterationRoomLevel.Room8 = new Decimal(Data.IterationRoomLevel.Room8) ?? new Decimal(0);
        Data.IterationRoomAmount = Data.IterationRoomAmount ?? {};
        IterationRoomAmount.Room1 = new Decimal(Data.IterationRoomAmount.Room1) ?? new Decimal(0);
        IterationRoomAmount.Room2 = new Decimal(Data.IterationRoomAmount.Room2) ?? new Decimal(0);
        IterationRoomAmount.Room3 = new Decimal(Data.IterationRoomAmount.Room3) ?? new Decimal(0);
        IterationRoomAmount.Room4 = new Decimal(Data.IterationRoomAmount.Room4) ?? new Decimal(0);
        IterationRoomAmount.Room5 = new Decimal(Data.IterationRoomAmount.Room5) ?? new Decimal(0);
        IterationRoomAmount.Room6 = new Decimal(Data.IterationRoomAmount.Room6) ?? new Decimal(0);
        IterationRoomAmount.Room7 = new Decimal(Data.IterationRoomAmount.Room7) ?? new Decimal(0);
        IterationRoomAmount.Room8 = new Decimal(Data.IterationRoomAmount.Room8) ?? new Decimal(0);
        Data.challengedoing = Data.challengedoing ?? {};
        challengedoing.Tier = Data.challengedoing.Tier ?? "";
        challengedoing.Origin = Data.challengedoing.Origin ?? "";
        challengedoing.BasicEnergy = Data.challengedoing.BasicEnergy ?? "";
        Data.experimentdoing = Data.experimentdoing ?? {};
        experimentdoing.Simulation = Data.experimentdoing.Simulation ?? "";
        Data.challengeGoal = Data.challengeGoal ?? {};
        challengeGoal.Tier = new Decimal(Data.challengeGoal.Tier) ?? new Decimal(0);
        challengeGoal.Origin = new Decimal(Data.challengeGoal.Origin) ?? new Decimal(0);
        challengeGoal.BasicEnergy = new Decimal(Data.challengeGoal.BasicEnergy) ?? new Decimal(0);
        Data.experimentGoal = Data.experimentGoal ?? {};
        experimentGoal.Simulation = new Decimal(Data.experimentGoal.Simulation) ?? new Decimal(0);
        Data.challengeGoaltype = Data.challengeGoaltype ?? {};
        challengeGoaltype.Tier = Data.challengeGoaltype.Tier ?? false;
        challengeGoaltype.Origin = Data.challengeGoaltype.Origin ?? false;
        challengeGoaltype.BasicEnergy = Data.challengeGoaltype.BasicEnergy ?? false;
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

        Data.IterationStrengthen = Data.IterationStrengthen ?? {};
        Data.IterationStrengthen.Produce1 = Data.IterationStrengthen.Produce1 ?? {};
        IterationStrengthen.Produce1.if = Data.IterationStrengthen.Produce1.if ?? false;
        IterationStrengthen.Produce1.num = Data.IterationStrengthen.Produce1.num ?? new Decimal(1);
        Data.IterationStrengthen.Produce2 = Data.IterationStrengthen.Produce2 ?? {};
        IterationStrengthen.Produce2.if = Data.IterationStrengthen.Produce2.if ?? false;
        IterationStrengthen.Produce2.num = Data.IterationStrengthen.Produce2.num ?? new Decimal(3);
        Data.IterationStrengthen.Produce3 = Data.IterationStrengthen.Produce3 ?? {};
        IterationStrengthen.Produce3.if = Data.IterationStrengthen.Produce3.if ?? false;
        IterationStrengthen.Produce3.num = Data.IterationStrengthen.Produce3.num ?? new Decimal(1);
        Data.IterationStrengthen.Produce4 = Data.IterationStrengthen.Produce4 ?? {};
        IterationStrengthen.Produce4.if = Data.IterationStrengthen.Produce4.if ?? false;
        IterationStrengthen.Produce4.num = Data.IterationStrengthen.Produce4.num ?? new Decimal(1);
        Data.IterationStrengthen.Reset1 = Data.IterationStrengthen.Reset1 ?? {};
        IterationStrengthen.Reset1.if = Data.IterationStrengthen.Reset1.if ?? false;
        Data.IterationStrengthen.Reset2 = Data.IterationStrengthen.Reset2 ?? {};
        IterationStrengthen.Reset2.if = Data.IterationStrengthen.Reset2.if ?? false;
        Data.IterationStrengthen.Reset3 = Data.IterationStrengthen.Reset3 ?? {};
        IterationStrengthen.Reset3.if = Data.IterationStrengthen.Reset3.if ?? false;
        Data.IterationStrengthen.Reset4 = Data.IterationStrengthen.Reset4 ?? {};
        IterationStrengthen.Reset4.if = Data.IterationStrengthen.Reset4.if ?? false;
        Data.IterationStrengthen.Auto1 = Data.IterationStrengthen.Auto1 ?? {};
        IterationStrengthen.Auto1.if = Data.IterationStrengthen.Auto1.if ?? false;
        Data.IterationStrengthen.Auto2 = Data.IterationStrengthen.Auto2 ?? {};
        IterationStrengthen.Auto2.if = Data.IterationStrengthen.Auto2.if ?? false;
        Data.IterationStrengthen.Auto3 = Data.IterationStrengthen.Auto3 ?? {};
        IterationStrengthen.Auto3.if = Data.IterationStrengthen.Auto3.if ?? false;
        Data.IterationStrengthen.Auto4 = Data.IterationStrengthen.Auto4 ?? {};
        IterationStrengthen.Auto4.if = Data.IterationStrengthen.Auto4.if ?? false;

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
        challengefinished.BasicEnergyChallenge1 = Data.challengefinished.BasicEnergyChallenge1 ?? 0;
        challengefinished.BasicEnergyChallenge2 = Data.challengefinished.BasicEnergyChallenge2 ?? 0;
        challengefinished.BasicEnergyChallenge3 = Data.challengefinished.BasicEnergyChallenge3 ?? 0;
        challengefinished.BasicEnergyChallenge4 = Data.challengefinished.BasicEnergyChallenge4 ?? 0;
        challengefinished.BasicEnergyChallenge5 = Data.challengefinished.BasicEnergyChallenge5 ?? 0;
        challengefinished.BasicEnergyChallenge6 = Data.challengefinished.BasicEnergyChallenge6 ?? 0;
        Data.experimentfinished = Data.experimentfinished ?? {};
        experimentfinished.SimulationExperiment1 = Data.experimentfinished.SimulationExperiment1 ?? 0;
        experimentfinished.SimulationExperiment2 = Data.experimentfinished.SimulationExperiment2 ?? 0;
        experimentfinished.SimulationExperiment3 = Data.experimentfinished.SimulationExperiment3 ?? 0;
        experimentfinished.SimulationExperiment4 = Data.experimentfinished.SimulationExperiment4 ?? 0;
        experimentfinished.SimulationExperiment5 = Data.experimentfinished.SimulationExperiment5 ?? 0;
        experimentfinished.SimulationExperiment6 = Data.experimentfinished.SimulationExperiment6 ?? 0;
        experimentfinished.SimulationExperiment7 = Data.experimentfinished.SimulationExperiment7 ?? 0;
        experimentfinished.SimulationExperiment8 = Data.experimentfinished.SimulationExperiment8 ?? 0;
        experimentfinished.SimulationExperiment9 = Data.experimentfinished.SimulationExperiment9 ?? 0;
    } else {
        defualtSet();
    }
    experimentbuffs.SimulationExperiment6 = true;
    if (space === "inSimulation") {changetoturEnergyuptap(); changetoturEnergyLeveluptap();}
    else if (space === "Simulation") {changetoSimulationuptap(); changetoSimulationUpgradestap();}
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
            saveGame();
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
                load();
                loadGame();
                restartAutoClicker();
                restartOriginProduce();
                restartTimer();
                restartAutoBuy();
                restartBasicEnergyProduce();
                alert("存档导入成功");
            }
            
            // 重置索引，允许再次触发
            loadcurrentIndex = 0;
        }
    } else {
        // 输入错误，重置匹配进度
        loadcurrentIndex = 0;
    }
});