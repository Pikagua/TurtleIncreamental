function updateUI() {
    // 结束模拟室等在模拟外不运作的东西
    if (state === "Simulation") {
        clearInterval(SimulationRoomProduceInterval);
        SimulationPower = new Decimal(0);
        SimulationRoomAmount.Room1 = SimulationRoomLevel.Room1;
        SimulationRoomAmount.Room2 = SimulationRoomLevel.Room2;
        SimulationRoomAmount.Room3 = SimulationRoomLevel.Room3;
        SimulationRoomAmount.Room4 = SimulationRoomLevel.Room4;
        SimulationRoomAmount.Room5 = SimulationRoomLevel.Room5;
        SimulationRoomAmount.Room6 = SimulationRoomLevel.Room6;
        SimulationRoomAmount.Room7 = SimulationRoomLevel.Room7;
        SimulationRoomAmount.Room8 = SimulationRoomLevel.Room8;
    }

    // 保护性补丁
    if (challengedoing.Tier === "") challengeprogress.Tier = "";
    if (challengedoing.Origin === "") challengeprogress.Origin = "";
    effectSimulationExperiment6 = Decimal.max(1, effectSimulationExperiment6);
    if (experimentbuffs.SimulationExperiment6) effectSimulationExperiment6 = effectSimulationExperiment6 = new Decimal(1);

    // 0. settings
    let bounceTierphase1 = new Decimal(challengereward.BasicEnergyChallenge3).mul(EnergyEffection).floor();
    let bounceTierphase2 = Decimal.min(100,bounceTierphase1).plus((Decimal.max(0,bounceTierphase1.sub(100))).pow(0.7).floor());
    let bounceTierphase3 = Decimal.min(700,bounceTierphase2).plus((Decimal.max(0,bounceTierphase2.sub(700))).pow(0.7).floor());
    let bounceTierphase4 = Decimal.min(3500,bounceTierphase3).plus((Decimal.max(0,bounceTierphase3.sub(3500))).pow(0.5).floor());
    let bounceTier = bounceTierphase4;
    if (bounceTier.lt(100)) BasicEnergyChallenge3convert.innerHTML = `这个效果在100个后的获取数量会^0.7`;
    else if (bounceTier.lt(700)) BasicEnergyChallenge3convert.innerHTML = `在700个后的获取数量会再次^0.7`;
    else BasicEnergyChallenge3convert.innerHTML = `在3.5e3个后的获取数量会再次^0.5`;
    if (!challengebuffs.BasicEnergyChallenge5) SimulationPower = new Decimal(0);

    if (turEnergy.gte(maxturEnergyinsimulation)) {
        maxturEnergyinsimulation = turEnergy;
    }
    if (simulationData.gte(maxsimulationDatainIteration)) {
        maxsimulationDatainIteration = simulationData;
    }

    if (challengebuffs.clickPower) clickPower = turEnergyLevel;
    else clickPower = new Decimal(1);


    // 这段很重要，是龟能的计算公式
    baseHighspeedclicking = new Decimal(2).sub(challengebuffs.baseofHighspeedclicking).plus(challengereward.baseofHighspeedclicking).plus(effectOriginMilestone13);
    effectHighspeedClicking = baseHighspeedclicking.pow(HighspeedClickingLevel);
    baseEfficientClick = new Decimal(1 + challengereward.baseofEfficientClick);
    effectEfficientClick = EfficientClickLevel.mul(baseEfficientClick).plus(1);
    if (challengereward.EfficientOriginProduce) effectEfficientOriginProduce = effectEfficientClick.mul(effectHighspeedClicking);
    else effectEfficientOriginProduce = new Decimal(1);
    // 我这里把buff仅对点击，buff仅对本源生能和buff for both分开写了，然后指数另算
    buffsForOnlyClick = clickPower.mul(effectEfficientClick).mul(effectturEnergyTier).mul(effectClickOrigin).mul(effectSimulationMachine.βa2);
    buffsForOnlyOriginProduce = turEnergyOrigin.mul(new Decimal(1e16).mul(effectOriginProduce)).mul(effectEfficientOriginProduce).mul(effectSimulationMachine.βb1).mul(effectSimulationMachine.βa4);
    buffsForBothClickAndOriginProduce = new Decimal(challengereward.turEnergy).mul(effectOriginEnhance.mul(turEnergyOrigin).plus(1)).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.αa4).mul(effectturEnergyCatalysis).mul(challengebuffs.BasicEnergyChallenge4).mul(effectOriginMilestone14);
    PowersForBoth = new Decimal(challengebuffs.turEnergy2).mul(effect1SimulationExperiment2);
    ClickTurEnergy = (buffsForOnlyClick.mul(buffsForBothClickAndOriginProduce)).pow(PowersForBoth);
    AutoClickerTurEnergyPersec = ClickTurEnergy.mul(autoClickers).mul(effectHighspeedClicking);
    OriginProduceTurEnergyPersec = (buffsForOnlyOriginProduce.mul(buffsForBothClickAndOriginProduce)).pow(PowersForBoth);
    
    
    if ((AmassOriginTimes.lt(20) || IteratedTimes.gte(6)) || !challengebuffs.disabledOriginMilestone || !experimentbuffs.SimulationExperiment5) effectOriginMilestone7 = new Decimal(1);
    else effectOriginMilestone7 = new Decimal(10);
    if ((AmassOriginTimes.lt(100) || IteratedTimes.gte(6)) || !challengebuffs.disabledOriginMilestone) effectOriginMilestone9 = new Decimal(1);
    else effectOriginMilestone9 = new Decimal(10);
    if (AmassOriginTimes.lt(1e4) && IteratedTimes.gte(9)) effectOriginMilestone11 = new Decimal(0);
    else effectOriginMilestone11 = new Decimal(2);
    if (AmassOriginTimes.lt(1e6) && IteratedTimes.gte(10)) effectOriginMilestone12 = new Decimal(10);
    else effectOriginMilestone12 = new Decimal(8);
    if (AmassOriginTimes.lt(1e8) && IteratedTimes.gte(15)) effectOriginMilestone13 = new Decimal(0);
    else effectOriginMilestone13 = new Decimal(0.2);
    if (AmassOriginTimes.lt(1e10) && IteratedTimes.gte(20)) effectOriginMilestone14 = new Decimal(1);
    else effectOriginMilestone14 = new Decimal(1.01).pow(EfficientClickLevel);
    if (challengebuffs.disabledOriginLevelup || challengebuffs.disabledOriginMilestone) effectClickOrigin = ((ten.pow(ClickOriginLevel)).pow(effectSimulationMachine.βa1));
    else effectClickOrigin = new Decimal(1);
    if (challengebuffs.disabledOriginLevelup) effectTierOrigin = ((new Decimal(0.03).plus(effectSimulationMachine.βb2)).mul(TierOriginLevel));
    else effectTierOrigin = new Decimal(0);
    if (challengebuffs.disabledOriginLevelup) effectOriginEnhance = new Decimal(0.5).mul(ten.pow(OriginEnhanceLevel));
    else effectOriginEnhance = new Decimal(0);
    if (challengereward.AmassTimesAffectturEnergy) effectturEnergyOriginChallenge6 = formatNumber((AmassOriginTimes.plus(1)).pow(effectGravitationalPotentialEnergy));
    else effectturEnergyOriginChallenge6 = new Decimal(1);
    if (challengebuffs.disabledturEnergyLevelup || challengebuffs.turEnergyTier) effectturEnergyTier = (((TierEnhanceLevel.mul(effectSimulationMachine.αb4.plus(1)).plus(3)).pow(turEnergyTier.mul(IterationStrengthen.Produce3.num))).mul((TierEnhanceLevel.mul(effectSimulationMachine.αb4.plus(1)).plus(3)).pow(bounceTier))).pow(effect1SimulationExperiment5);
    else effectturEnergyTier = new Decimal(1);
    if (!effect2SimulationExperiment3) effectOriginProduce = new Decimal(0);
    else if (challengereward.EfficientOriginProduce) effectOriginProduce = new Decimal(2000).pow(OriginProduceEnergyLevel);
    else effectOriginProduce = new Decimal(100).pow(OriginProduceEnergyLevel);
    effectturEnergyOrigin = new Decimal(0.5).mul(ten.pow(OriginEnhanceLevel));
    effectEnergyMachineA = new Decimal(0.2).mul(EnergyMachineALevel).mul(new Decimal(2).pow(EnergyMachineALevel.div(10).floor()));
    effectEnergyMachineB = new Decimal(0.5).mul(EnergyMachineBLevel).mul(new Decimal(2).pow(EnergyMachineBLevel.div(10).floor()));
    effectEnergyMachineC = new Decimal(1.2).mul(EnergyMachineCLevel).mul(new Decimal(2).pow(EnergyMachineCLevel.div(10).floor()));
    effectEnergyMachineD = new Decimal(5).mul(EnergyMachineDLevel).mul(new Decimal(2).pow(EnergyMachineDLevel.div(10).floor()));
    effectEnergyMachineE = new Decimal(1e6).mul(EnergyMachineELevel).mul(new Decimal(2).pow(EnergyMachineELevel.div(10).floor()));
    EnergyEffectionBase = effectEnergyMachineA.plus(effectEnergyMachineB).plus(effectEnergyMachineC).plus(effectEnergyMachineD).plus(effectEnergyMachineE);
    EnergyEffection = Decimal.max(EnergyEffectionBase, EnergyEffectionBase.pow(new Decimal(1).plus(effectEnergyExpansion)));
    effectturEnergyCatalysis = new Decimal(1e4).pow(turEnergyCatalysisLevel);
    effectOriginCatalysis = new Decimal(2).pow(OriginCatalysisLevel);
    effectClickCatalysis = new Decimal(1e70).pow(ClickCatalysisLevel);
    effectPhotosynthesis = new Decimal(0.05).mul(PhotosynthesisLevel);
    effectSimulationCatalysis = (new Decimal(2).plus(effectBoostVoltage)).pow(SimulationCatalysisLevel).mul(challengereward.BasicEnergyChallenge5);
    effectTierCatalysis = new Decimal(IterationStrengthen.Produce2.num).mul(TierCatalysisLevel);
    effectReactionCatalysis = (new Decimal(1.5).plus(challengereward.BasicEnergyChallenge2)).pow(ReactionCatalysisLevel);
    effectPrimaryBattery = new Decimal(0.0001).mul(PrimaryBatteryLevel);
    effectBoostVoltage = new Decimal(1).mul(BoostVoltageLevel).mul(challengereward.BasicEnergyChallenge5);
    if (IteratedTimes.gte(8)) effectElectrolysis = new Decimal(0.01).mul(ElectrolysisLevel.plus(1));
    else effectElectrolysis = new Decimal(0.01).mul(ElectrolysisLevel);
    effectIonization = new Decimal(2).pow(IonizationLevel)
    effectMotor = new Decimal(1e-6).mul(MotorLevel);
    effectKineticEnergy = new Decimal(4).mul(KineticEnergyLevel);
    effectElasticPotentialEnergy = new Decimal(10).mul(ElasticPotentialEnergyLevel);
    effectGravitationalPotentialEnergy = new Decimal(1).plus(new Decimal(2).mul(GravitationalPotentialEnergyLevel));
    effectFriction = new Decimal(4e-9).mul(FrictionLevel);
    degreeSimulationPower = new Decimal(7).plus(effectSimulationMachine.γa5);
    effectSimulationUpgradesturEnergy3 = ten.mul(AmassOriginTimes).plus(1);
    effectSimulationUpgradesturEnergy4 = new Decimal(10000).mul(simulatedTimes).plus(1);
    if (SimulationUpgrades.turEnergy1.if) SimulationUpgrades.turEnergy1.num = new Decimal(250); else SimulationUpgrades.turEnergy1.num = new Decimal(1);
    if (SimulationUpgrades.turEnergy2.if && experimentbuffs.SimulationUpgrades && turEnergy.lt(new Decimal("1.80e308")) && experimentbuffs.SimulationUpgrades) SimulationUpgrades.turEnergy2.num = new Decimal(5e4); else SimulationUpgrades.turEnergy2.num = new Decimal(1);
    if (SimulationUpgrades.turEnergy3.if && experimentbuffs.SimulationUpgrades) SimulationUpgrades.turEnergy3.num = effectSimulationUpgradesturEnergy3; else SimulationUpgrades.turEnergy3.num = new Decimal(1);
    if (SimulationUpgrades.turEnergy4.if && experimentbuffs.SimulationUpgrades) SimulationUpgrades.turEnergy4.num = effectSimulationUpgradesturEnergy4; else SimulationUpgrades.turEnergy4.num = new Decimal(1);
    if (SimulationUpgrades.turEnergyOrigin1.if && experimentbuffs.SimulationUpgrades) SimulationUpgrades.turEnergyOrigin1.num = new Decimal(4); else SimulationUpgrades.turEnergyOrigin1.num = new Decimal(1);
    if (SimulationUpgrades.turEnergyOrigin2.if && experimentbuffs.SimulationUpgrades) SimulationUpgrades.turEnergyOrigin2.num = new Decimal(0.3); else SimulationUpgrades.turEnergyOrigin2.num = new Decimal(1);
    effectincreamentalSimulation = new Decimal(2).pow(increamentalSimulationLevel);
    if (!experimentbuffs.SimulationExperiment2) {effect1SimulationExperiment2 = new Decimal(0.9); effect2SimulationExperiment2 = new Decimal(1.05); }
    else {effect1SimulationExperiment2 = new Decimal(1); effect2SimulationExperiment2 = new Decimal(1); }
    if (!experimentbuffs.SimulationExperiment3) {effect1SimulationExperiment3 = new Decimal(0.5); effect2SimulationExperiment3 = false; }
    else {effect1SimulationExperiment3 = new Decimal(1); effect2SimulationExperiment3 = true; }
    if (experimentbuffs.SimulationExperiment4) effectSimulationExperiment4 = new Decimal(1); else effectSimulationExperiment4 = new Decimal(0);
    if (experimentbuffs.SimulationExperiment5) effect1SimulationExperiment5 = new Decimal(1); else effect1SimulationExperiment5 = new Decimal(0.5);
    if (experimentbuffs.SimulationExperiment5) effect2SimulationExperiment5 = new Decimal(1); else effect2SimulationExperiment5 = ((timerSimulationExperiment5.ln()).pow(0.45)).mul(20).plus(1);
    if (experimentbuffs.SimulationExperiment8) effectSimulationExperiment8 = new Decimal(0); else effectSimulationExperiment8 = new Decimal(EnergyEffection.mul(2).floor());
    if (SimulationMachine.αa1 && experimentbuffs.SimulationExperiment5 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.αa1 = new Decimal(1e15); else effectSimulationMachine.αa1 = new Decimal(1);
    if (SimulationMachine.αa2 && experimentbuffs.SimulationExperiment5 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.αa2 = Decimal.min(new Decimal("1e400").mul(effectClickCatalysis),new Decimal(1.2).pow(EfficientClickLevel)); else effectSimulationMachine.αa2 = new Decimal(1);
    if (SimulationMachine.αa3 && experimentbuffs.SimulationExperiment5 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.αa3 = turEnergyTier.mul(15); else effectSimulationMachine.αa3 = new Decimal(0);
    if (SimulationMachine.αb3 && experimentbuffs.SimulationExperiment5 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.αb3 = Decimal.min(160,turEnergyLevel.div(120).floor()); else effectSimulationMachine.αb3 = new Decimal(0);
    if (SimulationMachine.αa4 && experimentbuffs.SimulationExperiment5 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.αa4 = Decimal.max("1",Decimal.min("1e5000",SimulationPower.pow(30))); else effectSimulationMachine.αa4 = new Decimal(1);
    if (SimulationMachine.αb4 && experimentbuffs.SimulationExperiment5 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.αb4 = Decimal.min(ten,SimulationPower.pow(0.1)); else effectSimulationMachine.αb4 = new Decimal(0);
    if (SimulationMachine.αa5 && experimentbuffs.SimulationExperiment5 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.αa5 = new Decimal(600); else effectSimulationMachine.αa5 = new Decimal(0);
    if (SimulationMachine.βa1 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.βa1 = Decimal.min(new Decimal(4),(turEnergyOrigin.log10().pow(0.55)).mul(0.7).plus(1)); else effectSimulationMachine.βa1 = new Decimal(1);
    if (SimulationMachine.βa2 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.βa2 = new Decimal(50).pow(OriginProduceEnergyLevel); else effectSimulationMachine.βa2 = new Decimal(1);
    if (SimulationMachine.βb1 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.βb1 = effectClickOrigin; else effectSimulationMachine.βb1 = new Decimal(1);
    if (SimulationMachine.βb2 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.βb2 = new Decimal(0.02); else effectSimulationMachine.βb2 = new Decimal(0);
    if (SimulationMachine.βa3 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.βa3 = new Decimal(1.2); else effectSimulationMachine.βa3 = new Decimal(1);
    if (SimulationMachine.βa4 && challengebuffs.BasicEnergyChallenge6) effectSimulationMachine.βa4 = effectturEnergyTier; else effectSimulationMachine.βa4 = new Decimal(1);
    if (SimulationMachine.γa1) effectSimulationMachine.γa1 = new Decimal(4); else effectSimulationMachine.γa1 = new Decimal(1);
    if (SimulationMachine.γa2) effectSimulationMachine.γa2 = Decimal.max(1,BasicEnergy).log10().mul(2).plus(1); else effectSimulationMachine.γa2 = new Decimal(1);
    if (SimulationMachine.γb2) effectSimulationMachine.γb2 = Decimal.max(1,BasicEnergy).log10().mul(3).plus(1); else effectSimulationMachine.γb2 = new Decimal(1);
    if (SimulationMachine.γc2) effectSimulationMachine.γc2 = Decimal.max(1,BasicEnergy).log10().mul(3).plus(1); else effectSimulationMachine.γc2 = new Decimal(1);
    if (SimulationMachine.γa3) effectSimulationMachine.γa3 = new Decimal(800); else effectSimulationMachine.γa3 = new Decimal(1000);
    if (SimulationMachine.γa4) effectSimulationMachine.γa4 = Decimal.max("10", new Decimal(50).sub((timerSimulation.div(60).plus(1)).log10().mul(30))); else effectSimulationMachine.γa4 = new Decimal(1);
    if (SimulationMachine.γb4) effectSimulationMachine.γb4 = new Decimal(35); else effectSimulationMachine.γb4 = new Decimal(1);
    if (SimulationMachine.γc4) effectSimulationMachine.γc4 = Decimal.max("10", ((timerSimulation.div(60).plus(1)).log10().mul(20))); else effectSimulationMachine.γc4 = new Decimal(1);
    if (SimulationMachine.γa5) effectSimulationMachine.γa5 = new Decimal(2).mul(MotorLevel); else effectSimulationMachine.γa5 = new Decimal(0);
    effectSimulationPower = Decimal.max(new Decimal(1),SimulationPower.pow(degreeSimulationPower));
    effectSimulationRoom.Room1 = (new Decimal(2).pow(SimulationRoomLevel.Room1).mul(effectSimulationCatalysis).mul(effectIterationInformation).mul(SimulationMachineBtye.pow(effectKineticEnergy))).pow(IterationStrengthen.Produce4.num);
    effectSimulationRoom.Room2 = (new Decimal(2).pow(SimulationRoomLevel.Room2.plus(1)).mul(effectSimulationCatalysis).mul(effectIterationInformation)).pow(IterationStrengthen.Produce4.num);
    effectSimulationRoom.Room3 = (new Decimal(2).pow(SimulationRoomLevel.Room3.plus(2)).mul(effectSimulationCatalysis).mul(effectIterationInformation)).pow(IterationStrengthen.Produce4.num);
    effectSimulationRoom.Room4 = (new Decimal(2).pow(SimulationRoomLevel.Room4.plus(3)).mul(effectSimulationCatalysis).mul(effectIterationInformation)).pow(IterationStrengthen.Produce4.num);
    effectSimulationRoom.Room5 = (new Decimal(2).pow(SimulationRoomLevel.Room5.plus(4)).mul(effectSimulationCatalysis).mul(effectIterationInformation)).pow(IterationStrengthen.Produce4.num);
    effectSimulationRoom.Room6 = (new Decimal(2).pow(SimulationRoomLevel.Room6.plus(5)).mul(effectSimulationCatalysis).mul(effectIterationInformation)).pow(IterationStrengthen.Produce4.num);
    effectSimulationRoom.Room7 = (new Decimal(2).pow(SimulationRoomLevel.Room7.plus(6)).mul(effectSimulationCatalysis).mul(effectIterationInformation)).pow(IterationStrengthen.Produce4.num);
    effectSimulationRoom.Room8 = (new Decimal(2).pow(SimulationRoomLevel.Room8.plus(7)).mul(effectSimulationCatalysis).mul(effectIterationInformation)).pow(IterationStrengthen.Produce4.num);

    if (IterationStrengthen.Produce1.if) IterationStrengthen.Produce1.num = new Decimal(1e4); else IterationStrengthen.Produce1.num = new Decimal(1);
    if (IterationStrengthen.Produce2.if) IterationStrengthen.Produce2.num = new Decimal(10); else IterationStrengthen.Produce2.num = new Decimal(3);
    if (IterationStrengthen.Produce3.if) IterationStrengthen.Produce3.num = new Decimal(1.1); else IterationStrengthen.Produce3.num = new Decimal(1);
    if (IterationStrengthen.Produce4.if) IterationStrengthen.Produce4.num = new Decimal(1.1); else IterationStrengthen.Produce4.num = new Decimal(1);
    effectIterationInformation = Decimal.max(new Decimal(1),IterationInformation.pow(degreeIterationInformation));
    effectIterationRoom.Room1 = new Decimal(2).pow(IterationRoomLevel.Room1);
    effectIterationRoom.Room2 = new Decimal(2).pow(IterationRoomLevel.Room2.plus(1));
    effectIterationRoom.Room3 = new Decimal(2).pow(IterationRoomLevel.Room3.plus(2));
    effectIterationRoom.Room4 = new Decimal(2).pow(IterationRoomLevel.Room4.plus(3));
    effectIterationRoom.Room5 = new Decimal(2).pow(IterationRoomLevel.Room5.plus(4));
    effectIterationRoom.Room6 = new Decimal(2).pow(IterationRoomLevel.Room6.plus(5));
    effectIterationRoom.Room7 = new Decimal(2).pow(IterationRoomLevel.Room7.plus(6));
    effectIterationRoom.Room8 = new Decimal(2).pow(IterationRoomLevel.Room8.plus(7));

    if (IteratedTimes.eq(0)) effectIterationMileStone1 = new Decimal(1); else effectIterationMileStone1 = new Decimal(4);
    effectincreamentalIteration = new Decimal(5).pow(increamentalIterationLevel);
    effectOriginIteration = ten.pow(OriginIterationLevel);
    effectEnergyExpansion = new Decimal(0.05).mul(EnergyExpansionLevel);

    if (timerIteration.eq(0)) IterationDataPermin = new Decimal(0);
    else IterationDataPermin = IterationDataCal().div(timerIteration).mul(60);
    if (maxIterationDataPermin.lt(IterationDataPermin)) {
        maxIterationDataPermin = IterationDataPermin;
        maxIterationDataPerminPoint = IterationDataCal();
    }

    // 1. 更新显示的数字
    let autoClickerPersec = (autoClickers.mul(clickPower.mul(EfficientClickLevel.mul(new Decimal(challengereward.baseofEfficientClick).plus(1)).plus(1))).mul(Decimal.max(1,(((new Decimal(2).sub(challengebuffs.baseofHighspeedclicking).plus(challengereward.baseofHighspeedclicking))).pow(HighspeedClickingLevel)))).mul(effectturEnergyTier).mul(challengebuffs.turEnergy).mul(challengereward.turEnergy).mul((effectOriginEnhance.mul(turEnergyOrigin)).plus(1)).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βa2).mul(effectSimulationMachine.αa4).mul(effectturEnergyCatalysis).mul(challengebuffs.BasicEnergyChallenge4)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2);
    let OriginProducePersec = new Decimal(0);
    if (OriginProduceEnergyLevel.gt(0) && challengebuffs.disabledOriginLevelup) {
        if (challengereward.EfficientOriginProduce) OriginProducePersec = (turEnergyOrigin.mul(new Decimal(1e16).mul(effectOriginProduce)).mul(challengereward.turEnergy).mul((effectOriginEnhance.mul(turEnergyOrigin)).plus(1)).mul(EfficientClickLevel.mul(new Decimal(challengereward.baseofEfficientClick).plus(1)).plus(1)).mul((((new Decimal(2).sub(challengebuffs.baseofHighspeedclicking).plus(challengereward.baseofHighspeedclicking)))).pow(HighspeedClickingLevel)).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βb1).mul(effectSimulationMachine.βa4).mul(effectSimulationMachine.αa4).mul(effectturEnergyCatalysis).mul(challengebuffs.BasicEnergyChallenge4)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2);
        else OriginProducePersec = (turEnergyOrigin.mul(new Decimal(1e16).mul(effectOriginProduce)).div(60).mul(challengereward.turEnergy).mul(new Decimal(1).plus(effectOriginEnhance.mul(turEnergyOrigin))).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βb1).mul(effectSimulationMachine.βa4).mul(effectSimulationMachine.αa4).mul(effectturEnergyCatalysis).mul(challengebuffs.BasicEnergyChallenge4)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2);
    }
    if (OriginProducePersec.gt(0)) displayturEnergyPersec.innerHTML = `通过自动点击器每秒获得${formatNumber(autoClickerPersec)}<span class="turEnergy">龟能</span><br>通过<span class="Origin">本源</span>生能每秒获得${formatNumber(OriginProducePersec)}<span class="turEnergy">龟能</span>`;
    else if (autoClickerPersec.gt(0)) displayturEnergyPersec.innerHTML = `通过自动点击器每秒获得${formatNumber(autoClickerPersec)}<span class="turEnergy">龟能</span>`;
    else displayturEnergyPersec.innerHTML = ``;
    displayIterationDataPermin.innerHTML = `当前：${formatNumber(IterationDataPermin)}<span class="Iteration">迭代数据</span>/分钟<br>
        最高：${formatNumber(maxIterationDataPermin)}<span class="Iteration">迭代数据</span>/分钟
        在${formatNumber(maxIterationDataPerminPoint)}<span class="Iteration">迭代数据</span>时达到<br>
        上次最高：${formatNumber(maxIterationDataPerminPointLast)}<span class="Iteration">迭代数据</span>/分钟
        在${formatNumber(maxIterationDataPerminPointLast)}<span class="Iteration">迭代数据</span>时达到<br>`;
    if (space === "inSimulation" && page === "turEnergy") turEnergyCountBox.innerHTML = `你拥有<span class="turEnergy">${formatNumber(turEnergy)}</span>点<span class="turEnergy">龟能</span>`;
    else if (space === "inSimulation" && page === "BasicEnergy") turEnergyCountBox.innerHTML = `你拥有<span class="BasicEnergy">${formatNumber(BasicEnergy)}</span>点<span class="BasicEnergy">基本能</span>`;
    else if (space === "Simulation" && page === "Simulation") turEnergyCountBox.innerHTML = `你拥有<span class="simulation">${formatNumber(simulationData)}</span>点<span class="simulation">模拟数据</span>`;
    else if (space === "Simulation" && page === "Iteration") turEnergyCountBox.innerHTML = `你拥有<span class="Iteration">${formatNumber(IterationData)}</span>点<span class="Iteration">迭代数据</span>`;
    turEnergyLevelEl.textContent = formatNumber(turEnergyLevel);
    clickpower.textContent = formatNumber(clickPower);
    levelofAutoClicker.textContent = formatNumber(autoClickers);
    effectofAutoClicker.textContent = formatNumber(autoClickers);
    levelofEfficientClick.textContent = formatNumber(EfficientClickLevel);
    effectofEfficientClick.textContent = formatNumber(effectEfficientClick);
    baseofEfficientClick.textContent = formatNumber(baseEfficientClick);
    levelofHighspeedClicking.textContent = formatNumber(HighspeedClickingLevel);
    effectofHighspeedClicking.textContent = formatNumber(effectHighspeedClicking);
    baseofHighspeedclicking.textContent = formatNumber(baseHighspeedclicking);
    if (experimentbuffs.SimulationExperiment8 && !challengereward.BasicEnergyChallenge3) levelofturEnergyTier.textContent = formatNumber(turEnergyTier);
    else levelofturEnergyTier.textContent = formatNumber(turEnergyTier) + "+" + formatNumber(bounceTier);
    if (challengebuffs.turEnergyTier && challengebuffs.disabledturEnergyLevelup) effectofturEnergyTier.textContent = formatNumber(effectturEnergyTier);
    else effectofturEnergyTier.textContent = 1;
    if (challengebuffs.disabledturEnergyLevelup) baseofturEnergyTier.textContent = formatNumber(TierEnhanceLevel.mul(effectSimulationMachine.αb4.plus(1)).plus(3));
    else baseofturEnergyTier.textContent = 3;
    levelofTierEnhance.textContent = formatNumber(TierEnhanceLevel);
    baseofTierEnhance.textContent = formatNumber(effectSimulationMachine.αb4.plus(1))
    if (challengebuffs.disabledturEnergyLevelup) effectofTierEnhance.textContent = formatNumber(TierEnhanceLevel.mul(effectSimulationMachine.αb4.plus(1)).plus(3));
    else effectofTierEnhance.textContent = 3;

    levelofOriginAmassFasten.textContent = formatNumber(OriginAmassFastenLevel);
    if (challengebuffs.disabledOriginLevelup) effectofOriginAmassFasten.textContent = formatNumber(new Decimal(2).pow(OriginAmassFastenLevel));
    else effectofOriginAmassFasten.textContent = 1;
    levelofOriginProduceEnergy.textContent = formatNumber(OriginProduceEnergyLevel);
    if (OriginProduceEnergyLevel.eq(0) || !(challengebuffs.disabledOriginLevelup)) effectofOriginProduceEnergy.textContent = 0;
    else effectofOriginProduceEnergy.textContent = formatNumber(new Decimal(1e16).mul(effectOriginProduce));
    if (challengereward.EfficientOriginProduce) baseOriginProduceEnergy.textContent = 2000;
    else baseOriginProduceEnergy.textContent = 100;
    levelofClickOrigin.textContent = formatNumber(ClickOriginLevel);
    effectofClickOrigin.textContent = formatNumber(effectClickOrigin);
    levelofTierOrigin.textContent = formatNumber(TierOriginLevel);
    effectofTierOrigin.textContent = formatNumber(effectTierOrigin);
    baseTierOrigin.textContent = formatNumber(new Decimal(0.03).plus(effectSimulationMachine.βb2));
    levelofOriginEnhance.textContent = formatNumber(OriginEnhanceLevel);
    effectofOriginEnhance.textContent = formatNumber(effectOriginEnhance);
    levelofEnergyMachineA.textContent = formatNumber(EnergyMachineALevel);
    effectofEnergyMachineA.textContent = formatNumber(effectEnergyMachineA);
    levelofEnergyMachineB.textContent = formatNumber(EnergyMachineBLevel);
    effectofEnergyMachineB.textContent = formatNumber(effectEnergyMachineB);
    levelofEnergyMachineC.textContent = formatNumber(EnergyMachineCLevel);
    effectofEnergyMachineC.textContent = formatNumber(effectEnergyMachineC);
    levelofEnergyMachineD.textContent = formatNumber(EnergyMachineDLevel);
    effectofEnergyMachineD.textContent = formatNumber(effectEnergyMachineD);
    levelofEnergyMachineE.textContent = formatNumber(EnergyMachineELevel);
    effectofEnergyMachineE.textContent = formatNumber(effectEnergyMachineE);
    levelofturEnergyCatalysis.textContent = formatNumber(turEnergyCatalysisLevel);
    effectofturEnergyCatalysis.textContent = formatNumber(effectturEnergyCatalysis);
    levelofOriginCatalysis.textContent = formatNumber(OriginCatalysisLevel);
    effectofOriginCatalysis.textContent = formatNumber(effectOriginCatalysis);
    levelofClickCatalysis.textContent = formatNumber(ClickCatalysisLevel);
    effectofClickCatalysis.textContent = formatNumber(effectClickCatalysis);
    levelofPhotosynthesis.textContent = formatNumber(PhotosynthesisLevel);
    effectofPhotosynthesis.textContent = formatNumber(effectPhotosynthesis);
    levelofSimulationCatalysis.textContent = formatNumber(SimulationCatalysisLevel);
    baseofSimulationCatalysis.textContent = formatNumber(new Decimal(2).plus(effectBoostVoltage));
    effectofSimulationCatalysis.textContent = formatNumber(effectSimulationCatalysis);
    levelofTierCatalysis.textContent = formatNumber(TierCatalysisLevel);
    effectofTierCatalysis.textContent = formatNumber(effectTierCatalysis);
    levelofReactionCatalysis.textContent = formatNumber(ReactionCatalysisLevel);
    baseofReactionCatalysis.textContent = formatNumber(new Decimal(1.5).plus(challengereward.BasicEnergyChallenge2));
    effectofReactionCatalysis.textContent = formatNumber(effectReactionCatalysis);
    levelofPrimaryBattery.textContent = formatNumber(PrimaryBatteryLevel);
    effectofPrimaryBattery.textContent = formatNumber(effectPrimaryBattery);
    levelofBoostVoltage.textContent = formatNumber(BoostVoltageLevel);
    effectofBoostVoltage.textContent = formatNumber(effectBoostVoltage);
    if (IteratedTimes.gte(8)) levelofElectrolysis.textContent = formatNumber(ElectrolysisLevel) + "+1";
    else levelofElectrolysis.textContent = formatNumber(ElectrolysisLevel);
    effectofElectrolysis.textContent = formatNumber(effectElectrolysis);
    levelofIonization.textContent = formatNumber(IonizationLevel);
    levelofMotor.textContent = formatNumber(MotorLevel);
    effectofMotor.textContent = formatNumber(effectMotor);
    levelofPowerOn.textContent = formatNumber(PowerOnLevel);
    levelofKineticEnergy.textContent = formatNumber(KineticEnergyLevel);
    effectofKineticEnergy.textContent = formatNumber(effectKineticEnergy);
    levelofElasticPotentialEnergy.textContent = formatNumber(ElasticPotentialEnergyLevel);
    effectofElasticPotentialEnergy.textContent = formatNumber(effectElasticPotentialEnergy);
    levelofGravitationalPotentialEnergy.textContent = formatNumber(GravitationalPotentialEnergyLevel);
    effectofGravitationalPotentialEnergy.textContent = formatNumber(effectGravitationalPotentialEnergy);
    levelofFriction.textContent = formatNumber(FrictionLevel);
    effectofFriction.textContent = formatNumber(effectFriction);
    if (PowerOnLevel.eq(0)) effectdisplayofPowerOn.innerHTML = `使<span class="simulation">模拟机</span>-λ-a3的价格除以1e4`; 
    if (PowerOnLevel.eq(1)) effectdisplayofPowerOn.innerHTML = `使<span class="simulation">模拟机</span>-λ-b3的价格除以1e5`; 
    if (PowerOnLevel.eq(2)) effectdisplayofPowerOn.innerHTML = `使<span class="simulation">模拟机</span>-λ-b4的价格除以1e6`; 
    if (PowerOnLevel.eq(3)) effectdisplayofPowerOn.innerHTML = `使<span class="simulation">模拟机</span>-λ-b5的价格除以1e7`; 
    if (PowerOnLevel.eq(4)) effectdisplayofPowerOn.innerHTML = `再无<span class="important">通</span><span class="BasicEnergy">电</span>`; 
    levelofincreamentalSimulation.textContent = formatNumber(increamentalSimulationLevel);
    effectofincreamentalSimulation.textContent = formatNumber(effectincreamentalSimulation);
    leveloffirstSimulationRoom.textContent = formatNumber(SimulationRoomLevel.Room1);
    AmountoffirstSimulationRoom.textContent = formatNumber(SimulationRoomAmount.Room1);
    effectoffirstSimulationRoom.textContent = formatNumber(effectSimulationRoom.Room1);
    levelofsecondSimulationRoom.textContent = formatNumber(SimulationRoomLevel.Room2);
    AmountofsecondSimulationRoom.textContent = formatNumber(SimulationRoomAmount.Room2);
    effectofsecondSimulationRoom.textContent = formatNumber(effectSimulationRoom.Room2);
    levelofthirdSimulationRoom.textContent = formatNumber(SimulationRoomLevel.Room3);
    AmountofthirdSimulationRoom.textContent = formatNumber(SimulationRoomAmount.Room3);
    effectofthirdSimulationRoom.textContent = formatNumber(effectSimulationRoom.Room3);
    leveloffourthSimulationRoom.textContent = formatNumber(SimulationRoomLevel.Room4);
    AmountoffourthSimulationRoom.textContent = formatNumber(SimulationRoomAmount.Room4);
    effectoffourthSimulationRoom.textContent = formatNumber(effectSimulationRoom.Room4);
    leveloffifthSimulationRoom.textContent = formatNumber(SimulationRoomLevel.Room5);
    AmountoffifthSimulationRoom.textContent = formatNumber(SimulationRoomAmount.Room5);
    effectoffifthSimulationRoom.textContent = formatNumber(effectSimulationRoom.Room5);
    levelofsixthSimulationRoom.textContent = formatNumber(SimulationRoomLevel.Room6);
    AmountofsixthSimulationRoom.textContent = formatNumber(SimulationRoomAmount.Room6);
    effectofsixthSimulationRoom.textContent = formatNumber(effectSimulationRoom.Room6);
    levelofseventhSimulationRoom.textContent = formatNumber(SimulationRoomLevel.Room7);
    AmountofseventhSimulationRoom.textContent = formatNumber(SimulationRoomAmount.Room7);
    effectofseventhSimulationRoom.textContent = formatNumber(effectSimulationRoom.Room7);
    levelofeighthSimulationRoom.textContent = formatNumber(SimulationRoomLevel.Room8);
    AmountofeighthSimulationRoom.textContent = formatNumber(SimulationRoomAmount.Room8);
    effectofeighthSimulationRoom.textContent = formatNumber(effectSimulationRoom.Room8);

    levelofincreamentalIteration.textContent = formatNumber(increamentalIterationLevel);
    effectofincreamentalIteration.textContent = formatNumber(effectincreamentalIteration);
    levelofOriginIteration.textContent = formatNumber(OriginIterationLevel);
    effectofOriginIteration.textContent = formatNumber(effectOriginIteration);
    levelofEnergyExpansion.textContent = formatNumber(EnergyExpansionLevel);
    effectofEnergyExpansion.textContent = formatNumber(effectEnergyExpansion);
    
    turEnergyOriginDisplay.textContent = formatNumber(turEnergyOrigin);
    turEnergyOriginAmassAmount.textContent = formatNumber(turEnergyOriginAmassFormula());
    effectofturEnergyOrigin.textContent = formatNumber(effectturEnergyOrigin.mul(turEnergyOrigin).plus(1));
    effectofperturEnergyOrigin.textContent = formatNumber(effectturEnergyOrigin);
    AmassOrigintimes.textContent = formatNumber(AmassOriginTimes);
    if (ElasticPotentialEnergyLevel.gt(0)) AmassOriginTimespersec.textContent = "（+" + formatNumber(SimulationMachineBtye.mul(effectElasticPotentialEnergy).mul(effectOriginMilestone9).mul(effectIterationMileStone1)) + "/秒）"; else AmassOriginTimespersec.textContent = "";

    if (new Decimal(challengereward.BasicEnergyChallenge4).pow((turEnergy.log10().div(effectSimulationMachine.γa3)).sub(1)).mul(effectReactionCatalysis).mul(effectSimulationMachine.γa1).gte(1)) BasicEnergyChangeAmount.textContent = formatNumber(Decimal.max(0,new Decimal(challengereward.BasicEnergyChallenge4).pow((turEnergy.log10().div(effectSimulationMachine.γa3)).sub(1)).mul(effectReactionCatalysis).mul(effectSimulationMachine.γa1)));
    else BasicEnergyChangeAmount.textContent = '0';
    if (EnergyExpansionLevel.gt(0)) {
        EnergyEffectiondisplayText.innerHTML = `总共有<span class="BasicEnergy" id="EnergyEffectionBase-display">0</span>^<span class="BasicEnergy" id="EnergyEffectionDegree-display">1</span>=<span class="BasicEnergy" id="EnergyEffection-display">0</span>点<span class="BasicEnergy">能源效率</span>`;
        const EnergyEffectionBasedisplay = document.getElementById('EnergyEffectionBase-display');
        const EnergyEffectionDegreedisplay = document.getElementById('EnergyEffectionDegree-display');
        EnergyEffectionBasedisplay.textContent = formatNumber(EnergyEffectionBase);
        EnergyEffectionDegreedisplay.textContent = formatNumber(new Decimal(1).plus(effectEnergyExpansion));
    } else {
        EnergyEffectiondisplayText.innerHTML = `总共有<span class="BasicEnergy" id="EnergyEffection-display">0</span>点<span class="BasicEnergy">能源效率</span>`;
    }
    const EnergyEffectiondisplay = document.getElementById('EnergyEffection-display');
    EnergyEffectiondisplay.textContent = formatNumber(EnergyEffection);
    SolarEnergydisplay.textContent = formatNumber(SolarEnergy);
    displaySolarEnergypersec.textContent = formatNumber(EnergyEffection.mul(effectSimulationMachine.γa2));
    ChemicalEnergydisplay.textContent = formatNumber(ChemicalEnergy);
    displayChemicalEnergypersec.textContent = formatNumber(EnergyEffection.mul(PhotosynthesisLevel.mul(0.05)).mul(effectSimulationMachine.γb2).mul(effectIonization));
    ElectricEnergydisplay.textContent = formatNumber(ElectricEnergy);
    displayElectricEnergypersec.textContent = formatNumber(EnergyEffection.mul(PrimaryBatteryLevel.mul(0.0001)).mul(effectSimulationMachine.γc2));
    MechanicalEnergydisplay.textContent = formatNumber(MechanicalEnergy);
    displayMechanicalEnergypersec.textContent = formatNumber(EnergyEffection.mul(MotorLevel.mul(1e-6)));

    SimulationTimesDisplay.textContent = formatNumber(simulatedTimes);
    effectofSimulationUpgradesturEnergy3.textContent = formatNumber(effectSimulationUpgradesturEnergy3);
    effectofSimulationUpgradesturEnergy4.textContent = formatNumber(effectSimulationUpgradesturEnergy4);
    SimulationMachineBytecountmax.textContent = formatNumber(SimulationMachineBtye);
    SimulationMachineBytecount.textContent = formatNumber(SimulationMachineBtye.sub(SimulationMachineBtyeUsed));

    if (PowerOnLevel.lt(1)) priceSimulationMachineλa4.textContent = "1e5"; else priceSimulationMachineλa4.textContent = "10";
    if (PowerOnLevel.lt(2)) priceSimulationMachineλb3.textContent = "1e6"; else priceSimulationMachineλb3.textContent = "10";
    if (PowerOnLevel.lt(3)) priceSimulationMachineλb4.textContent = "5e7"; else priceSimulationMachineλb4.textContent = "50";
    if (PowerOnLevel.lt(4)) priceSimulationMachineλb5.textContent = "3e9"; else priceSimulationMachineλb5.textContent = "300";

    effectofSimulationMachineαa2.textContent = formatNumber(Decimal.min(new Decimal("1e400").mul(effectClickCatalysis),new Decimal(1.2).pow(EfficientClickLevel)));
    effectofSimulationMachineαa3.textContent = formatNumber(turEnergyTier.mul(15));
    effectofSimulationMachineαb3.textContent = formatNumber(Decimal.min(160,turEnergyLevel.div(120).floor()));
    effectofSimulationMachineαa4.textContent = formatNumber(Decimal.max("1",Decimal.min("1e5000",SimulationPower.pow(30))));
    effectofSimulationMachineαb4.textContent = formatNumber(Decimal.min(ten,SimulationPower.pow(0.1)));
    effectofSimulationMachineβa1.textContent = formatNumber(Decimal.min(new Decimal(4),(turEnergyOrigin.log10().pow(0.55)).mul(0.7).plus(1)));
    effectofSimulationMachineβa2.textContent = formatNumber(new Decimal(50).pow(OriginProduceEnergyLevel));
    effectofSimulationMachineγa2.textContent = formatNumber(Decimal.max(1,BasicEnergy).log10().mul(2).plus(1));
    effectofSimulationMachineγb2.textContent = formatNumber(Decimal.max(1,BasicEnergy).log10().mul(3).plus(1));
    effectofSimulationMachineγc2.textContent = formatNumber(Decimal.max(1,BasicEnergy).log10().mul(3).plus(1));
    effectofSimulationMachineγa4.textContent = formatNumber(Decimal.max("10", new Decimal(50).sub((timerSimulation.div(60).plus(1)).log10().mul(30))));
    effectofSimulationMachineγc4.textContent = formatNumber(Decimal.max("10", ((timerSimulation.div(60).plus(1)).log10().mul(20))));
    effectofSimulationMachineγa5.textContent = formatNumber(new Decimal(2).mul(MotorLevel));

    SimumlationPowerCount.textContent = formatNumber(SimulationPower.floor());
    displaySimulationPowerpersec.textContent = formatNumber(SimulationRoomAmount.Room1.mul(effectSimulationRoom.Room1).floor());
    degreeofSimumlationPower.textContent = formatNumber(degreeSimulationPower);
    effectofSimumlationPower.textContent = formatNumber(effectSimulationPower);

    IteratedTimesDisplay.textContent = formatNumber(IteratedTimes);
    if (maxsimulationDatainIteration.gte("1.8e308")) CompleteIterationAmount.textContent = formatNumber(IterationDataCal());
    else CompleteIterationAmount.textContent = 0;

    leveloffirstIterationRoom.textContent = formatNumber(IterationRoomLevel.Room1);
    AmountoffirstIterationRoom.textContent = formatNumber(IterationRoomAmount.Room1);
    effectoffirstIterationRoom.textContent = formatNumber(effectIterationRoom.Room1);
    levelofsecondIterationRoom.textContent = formatNumber(IterationRoomLevel.Room2);
    AmountofsecondIterationRoom.textContent = formatNumber(IterationRoomAmount.Room2);
    effectofsecondIterationRoom.textContent = formatNumber(effectIterationRoom.Room2);
    levelofthirdIterationRoom.textContent = formatNumber(IterationRoomLevel.Room3);
    AmountofthirdIterationRoom.textContent = formatNumber(IterationRoomAmount.Room3);
    effectofthirdIterationRoom.textContent = formatNumber(effectIterationRoom.Room3);
    leveloffourthIterationRoom.textContent = formatNumber(IterationRoomLevel.Room4);
    AmountoffourthIterationRoom.textContent = formatNumber(IterationRoomAmount.Room4);
    effectoffourthIterationRoom.textContent = formatNumber(effectIterationRoom.Room4);
    leveloffifthIterationRoom.textContent = formatNumber(IterationRoomLevel.Room5);
    AmountoffifthIterationRoom.textContent = formatNumber(IterationRoomAmount.Room5);
    effectoffifthIterationRoom.textContent = formatNumber(effectIterationRoom.Room5);
    levelofsixthIterationRoom.textContent = formatNumber(IterationRoomLevel.Room6);
    AmountofsixthIterationRoom.textContent = formatNumber(IterationRoomAmount.Room6);
    effectofsixthIterationRoom.textContent = formatNumber(effectIterationRoom.Room6);
    levelofseventhIterationRoom.textContent = formatNumber(IterationRoomLevel.Room7);
    AmountofseventhIterationRoom.textContent = formatNumber(IterationRoomAmount.Room7);
    effectofseventhIterationRoom.textContent = formatNumber(effectIterationRoom.Room7);
    levelofeighthIterationRoom.textContent = formatNumber(IterationRoomLevel.Room8);
    AmountofeighthIterationRoom.textContent = formatNumber(IterationRoomAmount.Room8);
    effectofeighthIterationRoom.textContent = formatNumber(effectIterationRoom.Room8);

    IterationInformationCount.textContent = formatNumber(IterationInformation.floor());
    displayIterationInformationpersec.textContent = formatNumber(IterationRoomAmount.Room1.mul(effectIterationRoom.Room1).floor());
    degreeofIterationInformation.textContent = formatNumber(degreeIterationInformation);
    effectofIterationInformation.textContent = formatNumber(effectIterationInformation);

    if (setAuto.turEnergyAuto) {
        turEnergyAuto.style.backgroundColor = `#6ca5b3`;
        stateturEnergyAuto.textContent = "启用"; 
    } else {
        turEnergyAuto.style.backgroundColor = `#30565f`;
        stateturEnergyAuto.textContent = "禁用";
    }
    if (setAuto.turEnergyOriginAuto) {
        turEnergyOriginAuto.style.backgroundColor = `#6ca5b3`;
        stateturEnergyOriginAuto.textContent = "启用"; 
    } else {
        turEnergyOriginAuto.style.backgroundColor = `#30565f`;
        stateturEnergyOriginAuto.textContent = "禁用";
    }
    if (setAuto.BasicEnergyChangeAuto.eq(1)) {
        BasicEnergyChangeAuto.style.backgroundColor = `#6ca5b3`;
        stateBasicEnergyChangeAuto.innerHTML = `启用`; 
        bugkillerBasicEnergyChangeAuto.innerHTML = `<br>在可转化到设定值时转化`;
    } else if (setAuto.BasicEnergyChangeAuto.eq(2)) {
        BasicEnergyChangeAuto.style.backgroundColor = `#6ca5b3`;
        stateBasicEnergyChangeAuto.innerHTML = `启用`; 
        bugkillerBasicEnergyChangeAuto.innerHTML = `<br>在一定时间（秒）后转化`;
    } else if (setAuto.BasicEnergyChangeAuto.eq(3)) {
        BasicEnergyChangeAuto.style.backgroundColor = `#6ca5b3`;
        stateBasicEnergyChangeAuto.innerHTML = `启用`; 
        bugkillerBasicEnergyChangeAuto.innerHTML = ` 下次：${formatNumber(setAuto.BasicEnergyChangeAutoLast.mul(setAuto.BasicEnergyChangeAutoMutiple))}<br>到达上一次的一定倍数时转化`;
    } else {
        BasicEnergyChangeAuto.style.backgroundColor = `#30565f`;
        stateBasicEnergyChangeAuto.textContent = "禁用";
        bugkillerBasicEnergyChangeAuto.innerHTML = ``;
    }
    if (setAuto.EnergyMachineAuto) {
        EnergyMachineAuto.style.backgroundColor = `#6ca5b3`;
        stateEnergyMachineAuto.textContent = "启用"; 
    } else {
        EnergyMachineAuto.style.backgroundColor = `#30565f`;
        stateEnergyMachineAuto.textContent = "禁用";
    }
    if (setAuto.SolarEnergyAuto) {
        SolarEnergyAuto.style.backgroundColor = `#6ca5b3`;
        stateSolarEnergyAuto.textContent = "启用"; 
    } else {
        SolarEnergyAuto.style.backgroundColor = `#30565f`;
        stateSolarEnergyAuto.textContent = "禁用";
    }
    if (setAuto.ChemicalEnergyAuto) {
        ChemicalEnergyAuto.style.backgroundColor = `#6ca5b3`;
        stateChemicalEnergyAuto.textContent = "启用"; 
    } else {
        ChemicalEnergyAuto.style.backgroundColor = `#30565f`;
        stateChemicalEnergyAuto.textContent = "禁用";
    }
    if (setAuto.ElectricEnergyAuto) {
        ElectricEnergyAuto.style.backgroundColor = `#6ca5b3`;
        stateElectricEnergyAuto.textContent = "启用"; 
    } else {
        ElectricEnergyAuto.style.backgroundColor = `#30565f`;
        stateElectricEnergyAuto.textContent = "禁用";
    }
    if (setAuto.MechanicalEnergyAuto) {
        MechanicalEnergyAuto.style.backgroundColor = `#6ca5b3`;
        stateMechanicalEnergyAuto.textContent = "启用"; 
    } else {
        MechanicalEnergyAuto.style.backgroundColor = `#30565f`;
        stateMechanicalEnergyAuto.textContent = "禁用";
    }
    if (setAuto.SimulationCompleteAuto.eq(1)) {
        SimulationCompleteAuto.style.backgroundColor = `#6ca5b3`;
        stateSimulationCompleteAuto.innerHTML = `启用`; 
        bugkillerSimulationCompleteAuto.innerHTML = `<br>在可获得到设定值时完成`;
    } else if (setAuto.SimulationCompleteAuto.eq(2)) {
        SimulationCompleteAuto.style.backgroundColor = `#6ca5b3`;
        stateSimulationCompleteAuto.innerHTML = `启用`; 
        bugkillerSimulationCompleteAuto.innerHTML = `<br>在一定时间（秒）后完成`;
    } else if (setAuto.SimulationCompleteAuto.eq(3)) {
        SimulationCompleteAuto.style.backgroundColor = `#6ca5b3`;
        stateSimulationCompleteAuto.innerHTML = `启用`; 
        bugkillerSimulationCompleteAuto.innerHTML = ` 下次：${formatNumber(setAuto.SimulationCompleteAutoLast.mul(setAuto.SimulationCompleteAutoMutiple))}<br>到达上一次的一定倍数时转化`;
    } else {
        SimulationCompleteAuto.style.backgroundColor = `#30565f`;
        stateSimulationCompleteAuto.textContent = "禁用";
        bugkillerSimulationCompleteAuto.innerHTML = ``;
    }
    if (setAuto.SimulationStartAuto) {
        SimulationStartAuto.style.backgroundColor = `#6ca5b3`;
        stateSimulationStartAuto.textContent = "启用"; 
    } else {
        SimulationStartAuto.style.backgroundColor = `#30565f`;
        stateSimulationStartAuto.textContent = "禁用";
    }
    if (setAuto.increamentalSimulationAuto) {
        increamentalSimulationAuto.style.backgroundColor = `#6ca5b3`;
        stateincreamentalSimulationAuto.textContent = "启用"; 
    } else {
        increamentalSimulationAuto.style.backgroundColor = `#30565f`;
        stateincreamentalSimulationAuto.textContent = "禁用";
    }
    if (setAuto.SimulationRoomAuto) {
        SimulationRoomAuto.style.backgroundColor = `#6ca5b3`;
        stateSimulationRoomAuto.textContent = "启用"; 
    } else {
        SimulationRoomAuto.style.backgroundColor = `#30565f`;
        stateSimulationRoomAuto.textContent = "禁用";
    }
    if (setAuto.SimulationByteAuto) {
        SimulationByteAuto.style.backgroundColor = `#6ca5b3`;
        stateSimulationByteAuto.textContent = "启用"; 
    } else {
        SimulationByteAuto.style.backgroundColor = `#30565f`;
        stateSimulationByteAuto.textContent = "禁用";
    }
    if (setAuto.IterationCompleteAuto.eq(1)) {
        IterationCompleteAuto.style.backgroundColor = `#6ca5b3`;
        stateIterationCompleteAuto.innerHTML = `启用`; 
        bugkillerIterationCompleteAuto.innerHTML = `<br>在可获得到设定值时完成`;
    } else if (setAuto.IterationCompleteAuto.eq(2)) {
        IterationCompleteAuto.style.backgroundColor = `#6ca5b3`;
        stateIterationCompleteAuto.innerHTML = `启用`; 
        bugkillerIterationCompleteAuto.innerHTML = `<br>在一定时间（秒）后完成`;
    } else if (setAuto.IterationCompleteAuto.eq(3)) {
        IterationCompleteAuto.style.backgroundColor = `#6ca5b3`;
        stateIterationCompleteAuto.innerHTML = `启用`; 
        bugkillerIterationCompleteAuto.innerHTML = ` 下次：${formatNumber(setAuto.IterationCompleteAutoLast.mul(setAuto.IterationCompleteAutoMutiple))}<br>到达上一次的一定倍数时转化`;
    } else {
        IterationCompleteAuto.style.backgroundColor = `#30565f`;
        stateIterationCompleteAuto.textContent = "禁用";
        bugkillerIterationCompleteAuto.innerHTML = ``;
    }
    
    // 2. 更新按钮文本（显示价格）
    turEnergyLevelUpCost.textContent = formatNumber(PriceofturEnergyLevelup(turEnergyLevel));
    autoClickerCost.textContent = formatNumber(PriceofBuyautoClicker(autoClickers));
    EfficientClickCost.textContent = formatNumber(PriceofBuyEfficientClick(EfficientClickLevel));
    HighspeedClickingCost.textContent = formatNumber(PriceofBuyHighspeedClicking(HighspeedClickingLevel));
    turEnergyTierCost.textContent = formatNumber(PriceofturEnergyTierup(turEnergyTier));
    TierEnhanceCost.textContent = formatNumber(PriceofBuyTierEnhance(TierEnhanceLevel));
    OriginAmassFastenCost.textContent = formatNumber(PriceofBuyOriginAmassFasten(OriginAmassFastenLevel));
    OriginProduceEnergyCost.textContent = formatNumber(PriceofBuyOriginProduceEnergy(OriginProduceEnergyLevel));
    ClickOriginCost.textContent = formatNumber(PriceofBuyClickOrigin(ClickOriginLevel));
    TierOriginCost.textContent = formatNumber(PriceofBuyTierOrigin(TierOriginLevel));
    OriginEnhanceCost.textContent = formatNumber(PriceofBuyOriginEnhance(OriginEnhanceLevel));
    EnergyMachineACost.textContent = formatNumber(PriceofBuyEnergyMachineA(EnergyMachineALevel));
    EnergyMachineBCost.textContent = formatNumber(PriceofBuyEnergyMachineB(EnergyMachineBLevel));
    EnergyMachineCCost.textContent = formatNumber(PriceofBuyEnergyMachineC(EnergyMachineCLevel));
    EnergyMachineDCost.textContent = formatNumber(PriceofBuyEnergyMachineD(EnergyMachineDLevel));
    EnergyMachineECost.textContent = formatNumber(PriceofBuyEnergyMachineE(EnergyMachineELevel));
    increamentalSimulationCost.textContent = formatNumber(PriceofBuyincreamentalSimulation(increamentalSimulationLevel));
    priceturEnergySimulationMachineByte.textContent = formatNumber(PriceofBuyturEnergySimulationMachineByte(BuySimulationMachineByte.turEnergy));
    priceturEnergyOriginSimulationMachineByte.textContent = formatNumber(PriceofBuyturEnergyOriginSimulationMachineByte(BuySimulationMachineByte.turEnergyOrigin));
    turEnergyCatalysisCost.textContent = formatNumber(PriceofBuyturEnergyCatalysis(turEnergyCatalysisLevel));
    OriginCatalysisCost.textContent = formatNumber(PriceofBuyOriginCatalysis(OriginCatalysisLevel));
    ClickCatalysisCost.textContent = formatNumber(PriceofBuyClickCatalysis(ClickCatalysisLevel));
    PhotosynthesisCost.textContent = formatNumber(PriceofBuyPhotosynthesis(PhotosynthesisLevel));
    SimulationCatalysisCost.textContent = formatNumber(PriceofBuySimulationCatalysis(SimulationCatalysisLevel));
    TierCatalysisCost.textContent = formatNumber(PriceofBuyTierCatalysis(TierCatalysisLevel));
    ReactionCatalysisCost.textContent = formatNumber(PriceofBuyReactionCatalysis(ReactionCatalysisLevel));
    PrimaryBatteryCost.textContent = formatNumber(PriceofBuyPrimaryBattery(PrimaryBatteryLevel));
    BoostVoltageCost.textContent = formatNumber(PriceofBuyBoostVoltage(BoostVoltageLevel));
    ElectrolysisCost.textContent = formatNumber(PriceofBuyElectrolysis(ElectrolysisLevel));
    IonizationCost.textContent = formatNumber(PriceofBuyIonization(IonizationLevel));
    MotorCost.textContent = formatNumber(PriceofBuyMotor(MotorLevel));
    PowerOnCost.textContent = formatNumber(PriceofBuyPowerOn(PowerOnLevel));
    KineticEnergyCost.textContent = formatNumber(PriceofBuyKineticEnergy(KineticEnergyLevel));
    ElasticPotentialEnergyCost.textContent = formatNumber(PriceofBuyElasticPotentialEnergy(ElasticPotentialEnergyLevel));
    GravitationalPotentialEnergyCost.textContent = formatNumber(PriceofBuyGravitationalPotentialEnergy(GravitationalPotentialEnergyLevel));
    FrictionCost.textContent = formatNumber(PriceofBuyFriction(FrictionLevel));
    priceSimulationDataSimulationMachineByte.textContent = formatNumber(PriceofBuySimulationDataSimulationMachineByte(BuySimulationMachineByte.SimulationData));
    firstSimulationRoomCost.textContent = formatNumber(PriceofBuyfirstSimulationRoom(SimulationRoomLevel.Room1));
    secondSimulationRoomCost.textContent = formatNumber(PriceofBuysecondSimulationRoom(SimulationRoomLevel.Room2));
    thirdSimulationRoomCost.textContent = formatNumber(PriceofBuythirdSimulationRoom(SimulationRoomLevel.Room3));
    fourthSimulationRoomCost.textContent = formatNumber(PriceofBuyfourthSimulationRoom(SimulationRoomLevel.Room4));
    fifthSimulationRoomCost.textContent = formatNumber(PriceofBuyfifthSimulationRoom(SimulationRoomLevel.Room5));
    sixthSimulationRoomCost.textContent = formatNumber(PriceofBuysixthSimulationRoom(SimulationRoomLevel.Room6));
    seventhSimulationRoomCost.textContent = formatNumber(PriceofBuyseventhSimulationRoom(SimulationRoomLevel.Room7));
    eighthSimulationRoomCost.textContent = formatNumber(PriceofBuyeighthSimulationRoom(SimulationRoomLevel.Room8));
    increamentalIterationCost.textContent = formatNumber(PriceofBuyincreamentalIteration(increamentalIterationLevel));
    OriginIterationCost.textContent = formatNumber(PriceofBuyOriginIteration(OriginIterationLevel));
    EnergyExpansionCost.textContent = formatNumber(PriceofBuyEnergyExpansion(EnergyExpansionLevel));
    firstIterationRoomCost.textContent = formatNumber(PriceofBuyfirstIterationRoom(IterationRoomLevel.Room1));
    secondIterationRoomCost.textContent = formatNumber(PriceofBuysecondIterationRoom(IterationRoomLevel.Room2));
    thirdIterationRoomCost.textContent = formatNumber(PriceofBuythirdIterationRoom(IterationRoomLevel.Room3));
    fourthIterationRoomCost.textContent = formatNumber(PriceofBuyfourthIterationRoom(IterationRoomLevel.Room4));
    fifthIterationRoomCost.textContent = formatNumber(PriceofBuyfifthIterationRoom(IterationRoomLevel.Room5));
    sixthIterationRoomCost.textContent = formatNumber(PriceofBuysixthIterationRoom(IterationRoomLevel.Room6));
    seventhIterationRoomCost.textContent = formatNumber(PriceofBuyseventhIterationRoom(IterationRoomLevel.Room7));
    eighthIterationRoomCost.textContent = formatNumber(PriceofBuyeighthIterationRoom(IterationRoomLevel.Room8));
    
    // 折叠文本
    if (SimulationMachineFold) {
        textSimulationMachine.classList.add('Locked');
        textSimulationMachine.classList.remove('Unlocked');
    } else {
        textSimulationMachine.classList.add('Unlocked');
        textSimulationMachine.classList.remove('Locked');
    }

    // 文本
    if (intro === "introSimulationExperiment4") textboxtext.innerHTML = `你获得的<span class="turEnergy">龟能</span><span class="Origin">本源</span>x0，禁用<span class="simulation">模拟</span>升级c2，<span class="turEnergy">龟能</span>层级与层级增强的等级的和不超过42（如超过42，则价格变为1e1e15）`;
if (intro === "introSimulationExperiment5") textboxtext.innerHTML = `禁用<span class="simulation">模拟机</span>-α，禁用<span class="simulation">模拟</span>升级c2，d2，a3，b3，c3，d3，<span class="turEnergy">龟能</span>层级的效果^0.5，禁用高效点击，禁用<span class="turEnergy">龟能</span>层级挑战2，3，禁用<span class="turEnergy">龟能</span><span class="Origin">本源</span>里程碑7，但你会随在<span class="simulation">模拟</span>内的时间获得一个提升获得<span class="Origin">本源</span>的加成，当前效果：x${formatNumber(effect2SimulationExperiment5)}`;
if (intro === "introSimulationExperiment6") textboxtext.innerHTML = `每购买一级<span class="turEnergy">龟能</span>升级，<span class="turEnergy">龟能</span>升级的价格全部x5（<span class="turEnergy">龟能</span>层级除外，你可以进行一次<span class="turEnergy">龟能</span><span class="Origin">本源</span>以重置这个效果，当前效果：x${formatNumber(effectSimulationExperiment6)}），禁用全部<span class="turEnergy">龟能</span>挑战`;

    // 更新一个意义不明的失效模拟升级
    const priceSimulationUpgradesturEnergy1 = document.getElementById('price-of-SimulationUpgrades-turEnergy1');
    const priceSimulationUpgradesturEnergy2 = document.getElementById('price-of-SimulationUpgrades-turEnergy2');
    const priceSimulationUpgradesturEnergy3 = document.getElementById('price-of-SimulationUpgrades-turEnergy3');
    const priceSimulationUpgradesturEnergy4 = document.getElementById('price-of-SimulationUpgrades-turEnergy4');
    const priceSimulationUpgradesturEnergyOrigin1 = document.getElementById('price-of-SimulationUpgrades-turEnergyOrigin1');
    const priceSimulationUpgradesturEnergyOrigin2 = document.getElementById('price-of-SimulationUpgrades-turEnergyOrigin2');
    const priceSimulationUpgradesturEnergyOrigin3 = document.getElementById('price-of-SimulationUpgrades-turEnergyOrigin3');
    const priceSimulationUpgradesturEnergyOrigin4 = document.getElementById('price-of-SimulationUpgrades-turEnergyOrigin4');
    const priceSimulationUpgradeselse1 = document.getElementById('price-of-SimulationUpgrades-else1');
    const priceSimulationUpgradeselse2 = document.getElementById('price-of-SimulationUpgrades-else2');
    const priceSimulationUpgradeselse3 = document.getElementById('price-of-SimulationUpgrades-else3');
    const priceSimulationUpgradeselse4 = document.getElementById('price-of-SimulationUpgrades-else4');
    priceSimulationUpgradesturEnergy1.textContent = "1模拟数据";
    if (experimentbuffs.SimulationUpgrades) priceSimulationUpgradesturEnergy2.textContent = "2模拟数据"; else priceSimulationUpgradesturEnergy2.textContent = "被禁用";
    if (experimentbuffs.SimulationUpgrades) priceSimulationUpgradesturEnergy3.textContent = "3模拟数据"; else priceSimulationUpgradesturEnergy3.textContent = "被禁用";
    if (experimentbuffs.SimulationUpgrades) priceSimulationUpgradesturEnergy4.textContent = "5模拟数据"; else priceSimulationUpgradesturEnergy4.textContent = "被禁用";
    if (experimentbuffs.SimulationUpgrades) priceSimulationUpgradesturEnergyOrigin1.textContent = "1模拟数据"; else priceSimulationUpgradesturEnergyOrigin1.textContent = "被禁用";
    if (experimentbuffs.SimulationUpgrades) priceSimulationUpgradesturEnergyOrigin2.textContent = "2模拟数据"; else priceSimulationUpgradesturEnergyOrigin2.textContent = "被禁用";
    if (experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment4 && experimentbuffs.SimulationExperiment5) priceSimulationUpgradesturEnergyOrigin3.textContent = "3模拟数据"; else priceSimulationUpgradesturEnergyOrigin3.textContent = "被禁用";
    if (experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) priceSimulationUpgradesturEnergyOrigin4.textContent = "5模拟数据"; else priceSimulationUpgradesturEnergyOrigin4.textContent = "被禁用";
    if (experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) priceSimulationUpgradeselse1.textContent = "1模拟数据"; else priceSimulationUpgradeselse1.textContent = "被禁用";
    if (experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) priceSimulationUpgradeselse2.textContent = "2模拟数据"; else priceSimulationUpgradeselse2.textContent = "被禁用";
    if (experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) priceSimulationUpgradeselse3.textContent = "3模拟数据"; else priceSimulationUpgradeselse3.textContent = "被禁用";
    if (experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) priceSimulationUpgradeselse4.textContent = "10模拟数据"; else priceSimulationUpgradeselse4.textContent = "被禁用";

    // 3. 处理space
    if (space === "inSimulation") {
        document.body.style.backgroundColor = "#a3e590";
    } else if (space === "Simulation") {
        document.body.style.backgroundColor = "#9ed9e8";
    }

    // 4. 更新finish-giveup-challenge按钮
    if (challengedoing.Tier === "" && challengedoing.Origin === "" && challengedoing.BasicEnergy === "") {
        FinishGiveupChallengebtn.classList.add('Locked'); 
        ChallengeProgressContainer.classList.add('Locked');
        FinishGiveupChallengebtn.classList.remove('Unlocked'); 
        ChallengeProgressContainer.classList.remove('Unlocked');
    } else {
        FinishGiveupChallengebtn.classList.add('Unlocked'); 
        ChallengeProgressContainer.classList.add('Unlocked');
        FinishGiveupChallengebtn.classList.remove('Locked'); 
        ChallengeProgressContainer.classList.remove('Locked');
    }
    if (!(challengedoing.Tier === "") || !(challengedoing.Origin === "") || !(challengedoing.BasicEnergy === "") || experimentdoing.Simulation === "") {
        FinishGiveupExperimentbtn.classList.add('Locked'); 
        ExperimentProgressContainer.classList.add('Locked');
        FinishGiveupExperimentbtn.classList.remove('Unlocked'); 
        ExperimentProgressContainer.classList.remove('Unlocked');
    } else {
        FinishGiveupExperimentbtn.classList.add('Unlocked'); 
        ExperimentProgressContainer.classList.add('Unlocked');
        FinishGiveupExperimentbtn.classList.remove('Locked'); 
        ExperimentProgressContainer.classList.remove('Locked');
    }
    if (challengeGoaltype.Tier) {
        challengePercent = Decimal.max(challengePercent,Decimal.min(new Decimal(((turEnergyLevel.div(challengeGoal.Tier)).mul(new Decimal(100))).toFixed(2)),100));
        if (challengePercent.eq(100) && !challengeGoal.Tier.eq(0)) {
            challengeprogress.Tier = "finished";
        }
        else challengeprogress.Tier = "";
    } else if (challengeGoaltype.Origin) {
        challengePercent = Decimal.max(challengePercent,Decimal.min(new Decimal(((turEnergyTier.div(challengeGoal.Origin)).mul(100)).toFixed(2)),100));
        if (challengePercent.eq(100) && !challengeGoal.Origin.eq(0)) {
            challengeprogress.Origin = "finished";
        }
        else challengeprogress.Origin = "";
    } else if (challengeGoaltype.BasicEnergy) {
        challengePercent = Decimal.max(challengePercent,Decimal.max(0,Decimal.min(new Decimal((((turEnergy.log10()).div(challengeGoal.BasicEnergy.log10())).mul(100)).toFixed(2)),100)));
        if (challengePercent.eq(100) && !challengeGoal.BasicEnergy.eq(0)) {
            challengeprogress.BasicEnergy = "finished";
        }
        else challengeprogress.BasicEnergy = "";
    } else challengePercent = new Decimal(0);
    if (!challengeGoaltype.Tier && !challengeGoaltype.Origin && !challengeGoaltype.BasicEnergy) {
        if (experimentGoaltype.Simulation) {
            experimentPercent = Decimal.max(experimentPercent,Decimal.max(0,Decimal.min(new Decimal((((turEnergy.log10()).div(experimentGoal.Simulation.log10())).mul(100)).toFixed(2)),100)));
            if (experimentPercent.eq(100) && !experimentGoal.Simulation.eq(0)) {
                experimentprogress.Simulation = "finished";
            }
            else experimentprogress.Simulation = "";
        } else experimentPercent = new Decimal(0);
    }
    if (challengeprogress.Tier === "finished" || (challengedoing.Tier === "" && challengeprogress.Origin === "finished") || (challengedoing.Tier === "" && challengeprogress.Origin === "" && challengeprogress.BasicEnergy === "finished")) {
        FinishGiveupChallengebtn.textContent = "完成挑战";
        FinishGiveupChallengebtn.classList.add('btn-challenge-doing');
    } else {
        FinishGiveupChallengebtn.textContent = "放弃挑战";
        FinishGiveupChallengebtn.classList.remove('btn-challenge-doing');
    }
    if (experimentprogress.Simulation === "finished") {
        FinishGiveupExperimentbtn.textContent = "完成实验";
        FinishGiveupExperimentbtn.classList.add('btn-challenge-doing');
    } else {
        FinishGiveupExperimentbtn.textContent = "放弃实验";
        FinishGiveupExperimentbtn.classList.remove('btn-challenge-doing');
    }

    function challengeState(challengeTier, progressTier, challenge, challengebtn) {
        if (challengeTier === challenge) {
            if (progressTier === "finished") challengebtn.textContent = "完成挑战";
            else challengebtn.textContent = "放弃挑战";
        } else challengebtn.textContent = "开始挑战";
    }
    challengeState(challengedoing.Tier, challengeprogress.Tier, "turEnergyTierChallenge1", startturEnergyTierChallenge1btn);
    challengeState(challengedoing.Tier, challengeprogress.Tier, "turEnergyTierChallenge2", startturEnergyTierChallenge2btn);
    challengeState(challengedoing.Tier, challengeprogress.Tier, "turEnergyTierChallenge3", startturEnergyTierChallenge3btn);
    challengeState(challengedoing.Tier, challengeprogress.Tier, "turEnergyTierChallenge4", startturEnergyTierChallenge4btn);
    challengeState(challengedoing.Tier, challengeprogress.Tier, "turEnergyTierChallenge5", startturEnergyTierChallenge5btn);
    challengeState(challengedoing.Tier, challengeprogress.Tier, "turEnergyTierChallenge6", startturEnergyTierChallenge6btn);
    challengeState(challengedoing.Origin, challengeprogress.Origin, "turEnergyOriginChallenge1", startturEnergyOriginChallenge1btn);
    challengeState(challengedoing.Origin, challengeprogress.Origin, "turEnergyOriginChallenge2", startturEnergyOriginChallenge2btn);
    challengeState(challengedoing.Origin, challengeprogress.Origin, "turEnergyOriginChallenge3", startturEnergyOriginChallenge3btn);
    challengeState(challengedoing.Origin, challengeprogress.Origin, "turEnergyOriginChallenge4", startturEnergyOriginChallenge4btn);
    challengeState(challengedoing.Origin, challengeprogress.Origin, "turEnergyOriginChallenge5", startturEnergyOriginChallenge5btn);
    challengeState(challengedoing.Origin, challengeprogress.Origin, "turEnergyOriginChallenge6", startturEnergyOriginChallenge6btn);
    challengeState(challengedoing.BasicEnergy, challengeprogress.BasicEnergy, "BasicEnergyChallenge1", startBasicEnergyChallenge1btn);
    challengeState(challengedoing.BasicEnergy, challengeprogress.BasicEnergy, "BasicEnergyChallenge2", startBasicEnergyChallenge2btn);
    challengeState(challengedoing.BasicEnergy, challengeprogress.BasicEnergy, "BasicEnergyChallenge3", startBasicEnergyChallenge3btn);
    challengeState(challengedoing.BasicEnergy, challengeprogress.BasicEnergy, "BasicEnergyChallenge4", startBasicEnergyChallenge4btn);
    challengeState(challengedoing.BasicEnergy, challengeprogress.BasicEnergy, "BasicEnergyChallenge5", startBasicEnergyChallenge5btn);
    challengeState(challengedoing.BasicEnergy, challengeprogress.BasicEnergy, "BasicEnergyChallenge6", startBasicEnergyChallenge6btn);

    function experimentState(experimentTier, progressTier, experiment, experimentbtn) {
        if (experimentTier === experiment) {
            if (progressTier === "finished") experimentbtn.textContent = "完成实验";
            else experimentbtn.textContent = "放弃实验";
        } else experimentbtn.textContent = "开始实验";
    }
    experimentState(experimentdoing.Simulation, experimentprogress.Simulation, "SimulationExperiment1", startSimulationExperiment1btn);
    experimentState(experimentdoing.Simulation, experimentprogress.Simulation, "SimulationExperiment2", startSimulationExperiment2btn);
    experimentState(experimentdoing.Simulation, experimentprogress.Simulation, "SimulationExperiment3", startSimulationExperiment3btn);
    experimentState(experimentdoing.Simulation, experimentprogress.Simulation, "SimulationExperiment4", startSimulationExperiment4btn);
    experimentState(experimentdoing.Simulation, experimentprogress.Simulation, "SimulationExperiment5", startSimulationExperiment5btn);
    experimentState(experimentdoing.Simulation, experimentprogress.Simulation, "SimulationExperiment6", startSimulationExperiment6btn);
    experimentState(experimentdoing.Simulation, experimentprogress.Simulation, "SimulationExperiment7", startSimulationExperiment7btn);
    experimentState(experimentdoing.Simulation, experimentprogress.Simulation, "SimulationExperiment8", startSimulationExperiment8btn);
    experimentState(experimentdoing.Simulation, experimentprogress.Simulation, "SimulationExperiment9", startSimulationExperiment9btn);

    function challengeBtnClass(Tier, doing, btn) {
        if (Tier === doing) btn.classList.add('btn-challenge-doing');
        else btn.classList.remove('btn-challenge-doing');
    }
    challengeBtnClass(challengedoing.Tier, "turEnergyTierChallenge1", startturEnergyTierChallenge1btn);
    challengeBtnClass(challengedoing.Tier, "turEnergyTierChallenge2", startturEnergyTierChallenge2btn);
    challengeBtnClass(challengedoing.Tier, "turEnergyTierChallenge3", startturEnergyTierChallenge3btn);
    challengeBtnClass(challengedoing.Tier, "turEnergyTierChallenge4", startturEnergyTierChallenge4btn);
    challengeBtnClass(challengedoing.Tier, "turEnergyTierChallenge5", startturEnergyTierChallenge5btn);
    challengeBtnClass(challengedoing.Tier, "turEnergyTierChallenge6", startturEnergyTierChallenge6btn);
    challengeBtnClass(challengedoing.Origin, "turEnergyOriginChallenge1", startturEnergyOriginChallenge1btn);
    challengeBtnClass(challengedoing.Origin, "turEnergyOriginChallenge2", startturEnergyOriginChallenge2btn);
    challengeBtnClass(challengedoing.Origin, "turEnergyOriginChallenge3", startturEnergyOriginChallenge3btn);
    challengeBtnClass(challengedoing.Origin, "turEnergyOriginChallenge4", startturEnergyOriginChallenge4btn);
    challengeBtnClass(challengedoing.Origin, "turEnergyOriginChallenge5", startturEnergyOriginChallenge5btn);
    challengeBtnClass(challengedoing.Origin, "turEnergyOriginChallenge6", startturEnergyOriginChallenge6btn);
    challengeBtnClass(challengedoing.BasicEnergy, "BasicEnergyChallenge1", startBasicEnergyChallenge1btn);
    challengeBtnClass(challengedoing.BasicEnergy, "BasicEnergyChallenge2", startBasicEnergyChallenge2btn);
    challengeBtnClass(challengedoing.BasicEnergy, "BasicEnergyChallenge3", startBasicEnergyChallenge3btn);
    challengeBtnClass(challengedoing.BasicEnergy, "BasicEnergyChallenge4", startBasicEnergyChallenge4btn);
    challengeBtnClass(challengedoing.BasicEnergy, "BasicEnergyChallenge5", startBasicEnergyChallenge5btn);
    challengeBtnClass(challengedoing.BasicEnergy, "BasicEnergyChallenge6", startBasicEnergyChallenge6btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment1", startSimulationExperiment1btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment2", startSimulationExperiment2btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment3", startSimulationExperiment3btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment4", startSimulationExperiment4btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment5", startSimulationExperiment5btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment6", startSimulationExperiment6btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment7", startSimulationExperiment7btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment8", startSimulationExperiment8btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment9", startSimulationExperiment9btn);

    // 5. 更新taps
    

    function setTapItem(index, isUnlocked, element) {
        tapState[index] = isUnlocked ? 1 : 0;
        if (element) {
            if (isUnlocked) {
                element.classList.add('Unlocked');
                element.classList.remove('Locked');
            } else {
                element.classList.add('Locked');
                element.classList.remove('Unlocked');
            }
        }
    }

    tapState = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    setTapItem(0, space === "inSimulation" && page === "turEnergy", turEnergyLeveluptap);  // 第一项永远解锁
    setTapItem(1, space === "inSimulation" && page === "turEnergy" && (turEnergyTier.gte(3) || AmassOriginTimes.gte(2) || (SimulationUpgrades.else1.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) || IteratedTimes.gt(0)), turEnergychallengetap);
    setTapItem(2, space === "inSimulation" && page === "turEnergy" && (challengereward.turEnergyOrigin || AmassOriginTimes.gt(0) || (SimulationUpgrades.turEnergyOrigin3.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5) || IteratedTimes.gt(0)), turEnergyOrigintap);
    setTapItem(3, space === "inSimulation" && page === "turEnergy" && (AmassOriginTimes.gte(2) || IteratedTimes.gt(0)), turEnergyOriginMilestonetap);
    setTapItem(4, space === "inSimulation" && page === "BasicEnergy", EnergyMachinetap);
    setTapItem(5, space === "inSimulation" && page === "BasicEnergy" && (experimentreward.SimulationExperiment8 || IteratedTimes.gte(8)), BasicEnergyChallengetap);
    setTapItem(6, space === "inSimulation" && page === "BasicEnergy", SolarEnergytap);
    setTapItem(7, space === "inSimulation" && page === "BasicEnergy" && (PhotosynthesisLevel.gt(0) || IteratedTimes.gte(8)), ChemicalEnergytap);
    setTapItem(8, space === "inSimulation" && page === "BasicEnergy" && (PrimaryBatteryLevel.gt(0) || IteratedTimes.gte(8)), ElectricEnergytap);
    setTapItem(9, space === "inSimulation" && page === "BasicEnergy" && (MotorLevel.gt(0) || IteratedTimes.gte(8)), MechanicalEnergytap);
    setTapItem(10, space === "inSimulation" && page === "BasicEnergy" && IteratedTimes.gte(8), InternalEnergytap);
    setTapItem(11, space === "Simulation" && page === "Simulation", SimulationUpgradestap);
    setTapItem(12, space === "Simulation" && page === "Simulation" && (((SimulationUpgrades.turEnergy4.if && SimulationUpgrades.turEnergyOrigin4.if && SimulationUpgrades.else4.if) || experimentfinished.SimulationExperiment1 != 0) || IteratedTimes.gte(9)), SimulationExperimenttap);
    setTapItem(13, space === "Simulation" && page === "Simulation" && (experimentreward.SimulationExperiment1 || IteratedTimes.gte(8)), SimulationMachinetap);
    setTapItem(14, space === "Simulation" && page === "Simulation" && (SimulationMachine.λb1 || IteratedTimes.gte(8)), SimulationRoomtap);
    setTapItem(15, space === "Simulation" && page === "Simulation" && ((experimentreward.SimulationExperiment2 || experimentreward.SimulationExperiment3) || IteratedTimes.gte(8)), SimulationAutotap);
    setTapItem(16, space === "Simulation" && page === "Iteration", IterationUpgradestap);
    setTapItem(17, space === "Simulation" && page === "Iteration" && IteratedTimes.gte(4), IterationStrengthentap);
    setTapItem(18, space === "Simulation" && page === "Iteration", IterationRoomtap);
    setTapItem(19, space === "Simulation" && page === "Iteration", IterationMileStonetap);

    let tapAmount = 0;
    for (let i=0; i<tapState.length; i++) tapAmount += tapState[i];

    let tapPoint = 0;
    for (let i=0; i<tapAmount; i++) {
        for (let j=tapPoint; j<tapState.length; j++) {
            if (tapState[j]) {
                let posX = ((i+1)-(tapAmount+1)/2)*12+50;
                if (j===0) turEnergyLeveluptap.style.left = posX + '%';
                if (j===1) turEnergychallengetap.style.left = posX + '%';
                if (j===2) turEnergyOrigintap.style.left = posX + '%';
                if (j===3) turEnergyOriginMilestonetap.style.left = posX + '%';
                if (j===4) EnergyMachinetap.style.left = posX + '%';
                if (j===5) BasicEnergyChallengetap.style.left = posX + '%';
                if (j===6) SolarEnergytap.style.left = posX + '%';
                if (j===7) ChemicalEnergytap.style.left = posX + '%';
                if (j===8) ElectricEnergytap.style.left = posX + '%'; 
                if (j===9) MechanicalEnergytap.style.left = posX + '%';
                if (j===10) InternalEnergytap.style.left = posX + '%';
                if (j===11) SimulationUpgradestap.style.left = posX + '%';
                if (j===12) SimulationExperimenttap.style.left = posX + '%';
                if (j===13) SimulationMachinetap.style.left = posX + '%';
                if (j===14) SimulationRoomtap.style.left = posX + '%';
                if (j===15) SimulationAutotap.style.left = posX + '%';
                if (j===16) IterationUpgradestap.style.left = posX + '%';
                if (j===17) IterationStrengthentap.style.left = posX + '%';
                if (j===18) IterationRoomtap.style.left = posX + '%';
                if (j===19) IterationMileStonetap.style.left = posX + '%';
                tapPoint = j+1;
                break;
            }
        }
    }

    function setupTapItem(index, isUnlocked, element) {
        uptapState[index] = isUnlocked ? 1 : 0;
        if (element) {
            if (isUnlocked) {
                element.classList.add('Unlocked');
                element.classList.remove('Locked');
            } else {
                element.classList.add('Locked');
                element.classList.remove('Unlocked');
            }
        }
    }

    uptapState = [0,0,0,0];
    setupTapItem(0, space === "inSimulation", turEnergyuptap);
    setupTapItem(1, space === "inSimulation" && (turEnergy.gte("1e1000") || everBasicEnergyChange), BasicEnergyuptap);
    setupTapItem(2, space === "Simulation", Simulationuptap);
    setupTapItem(3, space === "Simulation" && IteratedTimes.gt(0), Iterationuptap);

    let uptapAmount = 0;
    for (let i=0; i<uptapState.length; i++) uptapAmount += uptapState[i];

    let uptapPoint = 0;
    for (let i=0; i<uptapAmount; i++) {
        for (let j=uptapPoint; j<uptapState.length; j++) {
            if (uptapState[j]) {
                let posX = ((i+1)-(uptapAmount+1)/2)*12+50;
                if (j===0) turEnergyuptap.style.left = posX + '%';
                if (j===1) BasicEnergyuptap.style.left = posX + '%';
                if (j===2) Simulationuptap.style.left = posX + '%';
                if (j===3) Iterationuptap.style.left = posX + '%';
                uptapPoint = j+1;
                break;
            }
        }
    }

    // 6. 更新challenge
    ChallengeProgressFill.style.width = `${challengePercent}%`;// 更新进度条
    ChallengeProgressText.innerHTML = `${challengePercent}%`;

    experimentProgressFill.style.width = `${experimentPercent}%`;
    experimentProgressText.innerHTML = `${experimentPercent}%`;

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
    if (experimentdoing.Simulation === "SimulationExperiment9") {
        if (experimentfinished.SimulationExperiment9 === 0) experimentbuffs.SimulationExperiment9 = false;
    }

    if (challengebuffs.disabledChallenge === 1 || !experimentbuffs.SimulationExperiment6) {
        challengefinished.turEnergyTierChallenge1 = 0;
        maxturEnergyTierChallenge1.textContent = 0;
    } else maxturEnergyTierChallenge1.textContent = challengereward.ChallengeTimes;
    if (challengebuffs.disabledChallenge === 2 || !experimentbuffs.SimulationExperiment5 || !experimentbuffs.SimulationExperiment6) {
        challengefinished.turEnergyTierChallenge2 = 0;
        maxturEnergyTierChallenge2.textContent = 0;
    } else maxturEnergyTierChallenge2.textContent = challengereward.ChallengeTimes;
    if (challengebuffs.disabledChallenge === 3 || !experimentbuffs.SimulationExperiment5 || !experimentbuffs.SimulationExperiment6) {
        challengefinished.turEnergyTierChallenge3 = 0;
        maxturEnergyTierChallenge3.textContent = 0;
    } else maxturEnergyTierChallenge3.textContent = challengereward.ChallengeTimes;
    if (!experimentbuffs.SimulationExperiment6) {
        challengefinished.turEnergyTierChallenge4 = 0;
        maxturEnergyTierChallenge4.textContent = 0;
    } else maxturEnergyTierChallenge4.textContent = 1;
    if (!experimentbuffs.SimulationExperiment6) {
        challengefinished.turEnergyTierChallenge5 = 0;
        maxturEnergyTierChallenge5.textContent = 0;
    } else maxturEnergyTierChallenge5.textContent = 1;
    if (!experimentbuffs.SimulationExperiment6) {
        challengefinished.turEnergyTierChallenge6 = 0;
        maxturEnergyTierChallenge6.textContent = 0;
    } else maxturEnergyTierChallenge6.textContent = 1;
    if (!experimentbuffs.SimulationExperiment6) {
        challengefinished.turEnergyOriginChallenge1 = 0;
        maxturEnergyOriginChallenge1.textContent = 0;
    } else maxturEnergyOriginChallenge1.textContent = 2;
    if (!experimentbuffs.SimulationExperiment6) {
        challengefinished.turEnergyOriginChallenge2 = 0;
        maxturEnergyOriginChallenge2.textContent = 0;
    } else maxturEnergyOriginChallenge2.textContent = 2;
    if (!experimentbuffs.SimulationExperiment6) {
        challengefinished.turEnergyOriginChallenge3 = 0;
        maxturEnergyOriginChallenge3.textContent = 0;
    } else maxturEnergyOriginChallenge3.textContent = 1;
    if (!experimentbuffs.SimulationExperiment6) {
        challengefinished.turEnergyOriginChallenge4 = 0;
        maxturEnergyOriginChallenge4.textContent = 0;
    } else maxturEnergyOriginChallenge4.textContent = 1;
    if (!experimentbuffs.SimulationExperiment6) {
        challengefinished.turEnergyOriginChallenge5 = 0;
        maxturEnergyOriginChallenge5.textContent = 0;
    } else maxturEnergyOriginChallenge5.textContent = 1;
    if (!experimentbuffs.SimulationExperiment6) {
        challengefinished.turEnergyOriginChallenge6 = 0;
        maxturEnergyOriginChallenge6.textContent = 0;
    } else maxturEnergyOriginChallenge6.textContent = 1;

    function updateturEnergyTierChallenge1(progress,debuff,goal,reward1,reward2) {
        progressturEnergyTierChallenge1.textContent = progress;
        debuffturEnergyTierChallenge1.textContent = debuff;
        goalturEnergyTierChallenge1.textContent = goal;
        reward1turEnergyTierChallenge1.textContent = reward1;
        reward2turEnergyTierChallenge1.textContent = reward2;
        challengereward.turEnergy = reward1;
    }
    if (challengefinished.turEnergyTierChallenge1 === 0) updateturEnergyTierChallenge1(0,0.25,100,1,4);
    if (challengefinished.turEnergyTierChallenge1 === 1) updateturEnergyTierChallenge1(1,0.01,300,4,16);
    if (challengefinished.turEnergyTierChallenge1 === 2) updateturEnergyTierChallenge1(2,0.0004,450,16,64);
    if (challengefinished.turEnergyTierChallenge1 === 3) updateturEnergyTierChallenge1(3,0.00016,580,64,256);
    if (challengefinished.turEnergyTierChallenge1 === 4) updateturEnergyTierChallenge1(4,0.00000064,1200,256,1024);
    if (challengefinished.turEnergyTierChallenge1 === 5) updateturEnergyTierChallenge1(5,0.0000000256,NaN,1024,4096);
    if (challengefinished.turEnergyTierChallenge1 === 6) updateturEnergyTierChallenge1(6,NaN,NaN,4096,NaN);
    if (challengefinished.turEnergyTierChallenge1 === challengereward.ChallengeTimes || challengebuffs.disabledChallenge === 1 || !experimentbuffs.SimulationExperiment6) {
        debuffturEnergyTierChallenge1.textContent = NaN;
        goalturEnergyTierChallenge1.textContent = NaN;
        reward2turEnergyTierChallenge1.textContent = NaN;
        startturEnergyTierChallenge1btn.textContent = "已完成";
        startturEnergyTierChallenge1btn.disabled = true;
    } else startturEnergyTierChallenge1btn.disabled = false;

    function updateturEnergyTierChallenge2(progress,debuff,goal,reward1,reward2) {
        progressturEnergyTierChallenge2.textContent = progress;
        debuffturEnergyTierChallenge2.textContent = debuff;
        goalturEnergyTierChallenge2.textContent = goal;
        reward1turEnergyTierChallenge2.textContent = reward1;
        reward2turEnergyTierChallenge2.textContent = reward2;
        challengereward.baseofHighspeedclicking = reward1;
    }
    if (challengefinished.turEnergyTierChallenge2 === 0) updateturEnergyTierChallenge2(0,0.2,140,0,0.2);
    if (challengefinished.turEnergyTierChallenge2 === 1) updateturEnergyTierChallenge2(1,0.8,300,0.2,0.5);
    if (challengefinished.turEnergyTierChallenge2 === 2) updateturEnergyTierChallenge2(2,1.5,400,0.5,1);
    if (challengefinished.turEnergyTierChallenge2 === 3) updateturEnergyTierChallenge2(3,2,520,1,2);
    if (challengefinished.turEnergyTierChallenge2 === 4) updateturEnergyTierChallenge2(4,3,1050,2,4);
    if (challengefinished.turEnergyTierChallenge2 === 5) updateturEnergyTierChallenge2(5,5,NaN,4,8);
    if (challengefinished.turEnergyTierChallenge2 === 6) updateturEnergyTierChallenge2(6,NaN,NaN,8,NaN);
    if (challengefinished.turEnergyTierChallenge2 === challengereward.ChallengeTimes || challengebuffs.disabledChallenge === 2 || !experimentbuffs.SimulationExperiment5 || !experimentbuffs.SimulationExperiment6) {
        debuffturEnergyTierChallenge2.textContent = NaN;
        goalturEnergyTierChallenge2.textContent = NaN;
        reward2turEnergyTierChallenge2.textContent = NaN;
        startturEnergyTierChallenge2btn.textContent = "已完成";
        startturEnergyTierChallenge2btn.disabled = true;
    } else startturEnergyTierChallenge2btn.disabled = false;

    function updateturEnergyTierChallenge3(progress,debuff,goal,reward1,reward2) {
        progressturEnergyTierChallenge3.textContent = progress;
        debuffturEnergyTierChallenge3.textContent = debuff;
        goalturEnergyTierChallenge3.textContent = goal;
        reward1turEnergyTierChallenge3.textContent = reward1;
        reward2turEnergyTierChallenge3.textContent = reward2;
        challengereward.delayScalingturEnergyLevelup = reward1;
    }
    if (challengefinished.turEnergyTierChallenge3 === 0) updateturEnergyTierChallenge3(0,5,400,0,30);
    if (challengefinished.turEnergyTierChallenge3 === 1) updateturEnergyTierChallenge3(1,30,450,30,60);
    if (challengefinished.turEnergyTierChallenge3 === 2) updateturEnergyTierChallenge3(2,200,520,60,100);
    if (challengefinished.turEnergyTierChallenge3 === 3) updateturEnergyTierChallenge3(3,1500,760,100,150);
    if (challengefinished.turEnergyTierChallenge3 === 4) updateturEnergyTierChallenge3(4,10000,1200,150,200);
    if (challengefinished.turEnergyTierChallenge3 === 5) updateturEnergyTierChallenge3(5,80000,NaN,200,300);
    if (challengefinished.turEnergyTierChallenge3 === 6) updateturEnergyTierChallenge3(6,NaN,NaN,250,NaN);
    if (challengefinished.turEnergyTierChallenge3 === challengereward.ChallengeTimes || challengebuffs.disabledChallenge === 3 || !experimentbuffs.SimulationExperiment5 || !experimentbuffs.SimulationExperiment6) {
        debuffturEnergyTierChallenge3.textContent = NaN;
        goalturEnergyTierChallenge3.textContent = NaN;
        reward2turEnergyTierChallenge3.textContent = NaN;
        startturEnergyTierChallenge3btn.textContent = "已完成";
        startturEnergyTierChallenge3btn.disabled = true;
    } else startturEnergyTierChallenge3btn.disabled = false;

    function updateturEnergyTierChallenge4(progress,goal,reward) {
        progressturEnergyTierChallenge4.textContent = progress;
        goalturEnergyTierChallenge4.textContent = goal;
        challengereward.BuyMaxAutoClicker = reward;
    }
    if (challengefinished.turEnergyTierChallenge4 === 0) updateturEnergyTierChallenge4(0,70,false);
    if (challengefinished.turEnergyTierChallenge4 === 1 || !experimentbuffs.SimulationExperiment6) {
        updateturEnergyTierChallenge4(challengefinished.turEnergyTierChallenge4,NaN,experimentbuffs.SimulationExperiment6);
        startturEnergyTierChallenge4btn.textContent = "已完成";
        startturEnergyTierChallenge4btn.disabled = true;
    } else startturEnergyTierChallenge4btn.disabled = false;

    function updateturEnergyTierChallenge5(progress,goal,reward1,reward2) {
        progressturEnergyTierChallenge5.textContent = progress;
        goalturEnergyTierChallenge5.textContent = goal;
        reward1turEnergyTierChallenge5.textContent = reward1;
        reward2turEnergyTierChallenge5.textContent = reward2;
        challengereward.baseofEfficientClick = reward1;
    }
    if (challengefinished.turEnergyTierChallenge5 === 0) updateturEnergyTierChallenge5(0,160,0,turEnergyTier.div(2));
    if (challengefinished.turEnergyTierChallenge5 === 1 || !experimentbuffs.SimulationExperiment6) {
        if (experimentbuffs.SimulationExperiment6) updateturEnergyTierChallenge5(challengefinished.turEnergyTierChallenge5,NaN,turEnergyTier.div(2),NaN);
        else updateturEnergyTierChallenge5(challengefinished.turEnergyTierChallenge5,NaN,0,NaN)
        startturEnergyTierChallenge5btn.textContent = "已完成";
        startturEnergyTierChallenge5btn.disabled = true;
    } else startturEnergyTierChallenge5btn.disabled = false;

    function updateturEnergyTierChallenge6(progress,goal,reward) {
        progressturEnergyTierChallenge6.textContent = progress;
        goalturEnergyTierChallenge6.textContent = goal;
        if (AmassOriginTimes.eq(0) && (!SimulationUpgrades.turEnergyOrigin3.if && experimentbuffs.SimulationExperiment5)) rewardturEnergyTierChallenge6.innerHTML = `解锁<span class="turEnergy">龟能</span><span class="Origin">本源</span>游戏机制`;
        else if (challengedoing.Origin === "" && challengefinished.turEnergyOriginChallenge1 === 0 && challengefinished.turEnergyOriginChallenge2 === 0 && challengefinished.turEnergyOriginChallenge3 === 0 && challengefinished.turEnergyOriginChallenge4 === 0 && challengefinished.turEnergyOriginChallenge5 === 0 && challengefinished.turEnergyOriginChallenge6 === 0) rewardturEnergyTierChallenge6.innerHTML = `解锁<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战`;
        else rewardturEnergyTierChallenge6.innerHTML = `解锁<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战<br><span class="secondary-title">你好像已经不需要它了</span>`
        if (SimulationUpgrades.else3.if && experimentbuffs.SimulationExperiment5) rewardturEnergyTierChallenge6.innerHTML = `解锁<span class="turEnergy">龟能</span><span class="Origin">本源</span>游戏机制和<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战`
        if (SimulationUpgrades.else4.if && experimentbuffs.SimulationExperiment5) rewardturEnergyTierChallenge6.innerHTML = `解锁<span class="turEnergy">龟能</span><span class="Origin">本源</span>游戏机制和<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战<br><span class="secondary-title">你好像已经不需要它了</span>`
        challengereward.turEnergyOrigin = reward;
    }
    if (challengefinished.turEnergyTierChallenge6 === 0) updateturEnergyTierChallenge6(0,580,false);
    if (challengefinished.turEnergyTierChallenge6 === 1 || !experimentbuffs.SimulationExperiment6) {
        updateturEnergyTierChallenge6(challengefinished.turEnergyTierChallenge6,NaN,experimentbuffs.SimulationExperiment6);
        startturEnergyTierChallenge6btn.textContent = "已完成";
        startturEnergyTierChallenge6btn.disabled = true;
    } else startturEnergyTierChallenge6btn.disabled = false;

    function updateturEnergyOriginChallenge1(progress,debuff,goal,reward1,reward2) {
        progressturEnergyOriginChallenge1.textContent = progress;
        debuffturEnergyOriginChallenge1.textContent = debuff;
        goalturEnergyOriginChallenge1.textContent = goal;
        reward1turEnergyOriginChallenge1.textContent = reward1;
        reward2turEnergyOriginChallenge1.textContent = reward2;
        challengereward.ChallengeTimes = reward1;
    }
    if (challengefinished.turEnergyOriginChallenge1 === 0) updateturEnergyOriginChallenge1(0,1,14,3,4);
    if (challengefinished.turEnergyOriginChallenge1 === 1) updateturEnergyOriginChallenge1(1,2,27,4,5);
    if (challengefinished.turEnergyOriginChallenge1 === 2) updateturEnergyOriginChallenge1(2,3,150,5,6);
    if (challengefinished.turEnergyOriginChallenge1 === 3) updateturEnergyOriginChallenge1(3,NaN,NaN,6,NaN);
    if (challengefinished.turEnergyOriginChallenge1 === 2 || !experimentbuffs.SimulationExperiment6) {
        debuffturEnergyOriginChallenge1.textContent = NaN;
        goalturEnergyOriginChallenge1.textContent = NaN;
        reward2turEnergyOriginChallenge1.textContent = NaN;
        startturEnergyOriginChallenge1btn.textContent = "已完成";
        startturEnergyOriginChallenge1btn.disabled = true;
    } else startturEnergyOriginChallenge1btn.disabled = false;

    function updateturEnergyOriginChallenge2(progress,debuff,goal,reward1,reward2) {
        progressturEnergyOriginChallenge2.textContent = progress;
        debuffturEnergyOriginChallenge2.textContent = debuff;
        goalturEnergyOriginChallenge2.textContent = goal;
        reward1turEnergyOriginChallenge2.textContent = reward1;
        reward2turEnergyOriginChallenge2.textContent = reward2;
        challengereward.turEnergyOriginAmount = reward1;
    }
    if (challengefinished.turEnergyOriginChallenge2 === 0) updateturEnergyOriginChallenge2(0,0.8,12,1,2);
    if (challengefinished.turEnergyOriginChallenge2 === 1) updateturEnergyOriginChallenge2(1,0.65,21,2,4);
    if (challengefinished.turEnergyOriginChallenge2 === 2 || !experimentbuffs.SimulationExperiment6) {
        if (experimentbuffs.SimulationExperiment6) updateturEnergyOriginChallenge2(challengefinished.turEnergyOriginChallenge2,NaN,NaN,4,NaN);
        else updateturEnergyOriginChallenge2(challengefinished.turEnergyOriginChallenge2,NaN,NaN,1,NaN);
        startturEnergyOriginChallenge2btn.textContent = "已完成";
        startturEnergyOriginChallenge2btn.disabled = true;
    } else startturEnergyOriginChallenge2btn.disabled = false;

    function updateturEnergyOriginChallenge3(progress,debuff,goal,reward) {
        progressturEnergyOriginChallenge3.textContent = progress;
        debuffturEnergyOriginChallenge3.textContent = debuff;
        goalturEnergyOriginChallenge3.textContent = goal;
        challengereward.BuyMaxturEnergy = reward;
    }
    if (challengefinished.turEnergyOriginChallenge3 === 0) updateturEnergyOriginChallenge3(0,"3,3,3,1,1",7,false);
    if (challengefinished.turEnergyOriginChallenge3 === 1 || !experimentbuffs.SimulationExperiment6) {
        updateturEnergyOriginChallenge3(challengefinished.turEnergyOriginChallenge3,NaN,NaN,experimentbuffs.SimulationExperiment6);
        startturEnergyOriginChallenge3btn.textContent = "已完成";
        startturEnergyOriginChallenge3btn.disabled = true;
    } else startturEnergyOriginChallenge3btn.disabled = false;

    function updateturEnergyOriginChallenge4(progress,goal,reward) {
        progressturEnergyOriginChallenge4.textContent = progress;
        goalturEnergyOriginChallenge4.textContent = goal;
        challengereward.EfficientOriginProduce = reward;
    }
    if (challengefinished.turEnergyOriginChallenge4 === 0) updateturEnergyOriginChallenge4(0,15,false);
    if (challengefinished.turEnergyOriginChallenge4 === 1 || !experimentbuffs.SimulationExperiment6) {
        updateturEnergyOriginChallenge4(challengefinished.turEnergyOriginChallenge4,NaN,experimentbuffs.SimulationExperiment6);
        startturEnergyOriginChallenge4btn.textContent = "已完成";
        startturEnergyOriginChallenge4btn.disabled = true;
    } else startturEnergyOriginChallenge4btn.disabled = false;

    function updateturEnergyOriginChallenge5(progress,goal,reward) {
        progressturEnergyOriginChallenge5.textContent = progress;
        goalturEnergyOriginChallenge5.textContent = goal;
        challengereward.TierresetNothing= reward;
    }
    if (challengefinished.turEnergyOriginChallenge5 === 0) updateturEnergyOriginChallenge5(0,38,false);
    if (challengefinished.turEnergyOriginChallenge5 === 1 || !experimentbuffs.SimulationExperiment6) {
        updateturEnergyOriginChallenge5(challengefinished.turEnergyOriginChallenge5,NaN,experimentbuffs.SimulationExperiment6);
        startturEnergyOriginChallenge5btn.textContent = "已完成";
        startturEnergyOriginChallenge5btn.disabled = true;
    } else startturEnergyOriginChallenge5btn.disabled = false;

    function updateturEnergyOriginChallenge6(progress,goal,reward,reward1,reward2) {
        progressturEnergyOriginChallenge6.textContent = progress;
        goalturEnergyOriginChallenge6.textContent = goal;
        challengereward.AmassTimesAffectturEnergy= reward;
        reward1turEnergyOriginChallenge6.textContent = reward1;
        reward2turEnergyOriginChallenge6.textContent = reward2;
    }
    if (challengefinished.turEnergyOriginChallenge6 === 0) updateturEnergyOriginChallenge6(0,26,false,1,AmassOriginTimes.plus(1));
    if (challengefinished.turEnergyOriginChallenge6 === 1 || !experimentbuffs.SimulationExperiment6) {
        updateturEnergyOriginChallenge6(challengefinished.turEnergyOriginChallenge6,NaN,experimentbuffs.SimulationExperiment6,effectturEnergyOriginChallenge6,NaN);
        startturEnergyOriginChallenge6btn.textContent = "已完成";
        startturEnergyOriginChallenge6btn.disabled = true;
    } else startturEnergyOriginChallenge6btn.disabled = false;

    function updateBasicEnergyChallenge1(progress,debuff,goal,reward1,reward2) {
        progressBasicEnergyChallenge1.textContent = progress;
        debuffBasicEnergyChallenge1.textContent = debuff;
        goalBasicEnergyChallenge1.textContent = goal;
        reward1BasicEnergyChallenge1.textContent = reward1;
        reward2BasicEnergyChallenge1.textContent = reward2;
        challengereward.BasicEnergyChallenge1 = reward1;
    }
    if (challengefinished.BasicEnergyChallenge1 === 0) updateBasicEnergyChallenge1(0,3,"1e8,500",1,0.9);
    if (challengefinished.BasicEnergyChallenge1 === 1) updateBasicEnergyChallenge1(1,8,"1e13,000",0.9,0.7);
    if (challengefinished.BasicEnergyChallenge1 === 2) updateBasicEnergyChallenge1(2,35,"1e14,000",0.7,0.4);
    if (challengefinished.BasicEnergyChallenge1 === 3) updateBasicEnergyChallenge1(3,NaN,NaN,0.4,NaN);
    if (challengefinished.BasicEnergyChallenge1 === 3) {
        debuffBasicEnergyChallenge1.textContent = NaN;
        goalBasicEnergyChallenge1.textContent = NaN;
        reward2BasicEnergyChallenge1.textContent = NaN;
        startBasicEnergyChallenge1btn.textContent = "已完成";
        startBasicEnergyChallenge1btn.disabled = true;
    } else startBasicEnergyChallenge1btn.disabled = false;

    function updateBasicEnergyChallenge2(progress,goal,reward1,reward2) {
        progressBasicEnergyChallenge2.textContent = progress;
        goalBasicEnergyChallenge2.textContent = goal;
        reward1BasicEnergyChallenge2.textContent = reward1;
        reward2BasicEnergyChallenge2.textContent = reward2;
        challengereward.BasicEnergyChallenge2 = reward1;
    }
    if (challengefinished.BasicEnergyChallenge2 === 0) updateBasicEnergyChallenge2(0,"1e3,500",0,0.5);
    if (challengefinished.BasicEnergyChallenge2 === 1) updateBasicEnergyChallenge2(1,"1e15,000",0.5,1.5);
    if (challengefinished.BasicEnergyChallenge2 === 2) updateBasicEnergyChallenge2(2,"1e25,000",1.5,2.5);
    if (challengefinished.BasicEnergyChallenge2 === 3) updateBasicEnergyChallenge2(3,NaN,2.5,NaN);
    if (challengefinished.BasicEnergyChallenge2 === 3) {
        goalBasicEnergyChallenge2.textContent = NaN;
        reward2BasicEnergyChallenge2.textContent = NaN;
        startBasicEnergyChallenge2btn.textContent = "已完成";
        startBasicEnergyChallenge2btn.disabled = true;
    } else startBasicEnergyChallenge2btn.disabled = false;

    function updateBasicEnergyChallenge3(progress,goal,reward1,reward2) {
        progressBasicEnergyChallenge3.textContent = progress;
        goalBasicEnergyChallenge3.textContent = goal;
        reward1BasicEnergyChallenge3.textContent = reward1;
        reward2BasicEnergyChallenge3.textContent = reward2;
        challengereward.BasicEnergyChallenge3 = reward1;
    }
    if (challengefinished.BasicEnergyChallenge3 === 0) updateBasicEnergyChallenge3(0,"1e3,000",0,1);
    if (challengefinished.BasicEnergyChallenge3 === 1) updateBasicEnergyChallenge3(1,"1e7,600",1,2);
    if (challengefinished.BasicEnergyChallenge3 === 2) updateBasicEnergyChallenge3(2,"1e30,000",2,4);
    if (challengefinished.BasicEnergyChallenge3 === 3) updateBasicEnergyChallenge3(3,NaN,4,NaN);
    if (challengefinished.BasicEnergyChallenge3 === 3) {
        goalBasicEnergyChallenge3.textContent = NaN;
        reward2BasicEnergyChallenge3.textContent = NaN;
        startBasicEnergyChallenge3btn.textContent = "已完成";
        startBasicEnergyChallenge3btn.disabled = true;
    } else startBasicEnergyChallenge3btn.disabled = false;

    function updateBasicEnergyChallenge4(progress,debuff,goal,reward1,reward2) {
        progressBasicEnergyChallenge4.textContent = progress;
        debuffBasicEnergyChallenge4.textContent = debuff;
        goalBasicEnergyChallenge4.textContent = goal;
        reward1BasicEnergyChallenge4.textContent = reward1;
        reward2BasicEnergyChallenge4.textContent = reward2;
        challengereward.BasicEnergyChallenge4 = reward1;
    }
    if (challengefinished.BasicEnergyChallenge4 === 0) updateBasicEnergyChallenge4(0,"1e-2,000","1e15,000",2,3);
    if (challengefinished.BasicEnergyChallenge4 === 1) updateBasicEnergyChallenge4(1,"1e-4,000","1e46,000",3,4);
    if (challengefinished.BasicEnergyChallenge4 === 2) updateBasicEnergyChallenge4(2,"1e-6,000","1e85,000",4,5);
    if (challengefinished.BasicEnergyChallenge4 === 3) updateBasicEnergyChallenge4(3,NaN,NaN,5,NaN);
    if (challengefinished.BasicEnergyChallenge4 === 3) {
        debuffBasicEnergyChallenge4.textContent = NaN;
        goalBasicEnergyChallenge4.textContent = NaN;
        reward2BasicEnergyChallenge4.textContent = NaN;
        startBasicEnergyChallenge4btn.textContent = "已完成";
        startBasicEnergyChallenge4btn.disabled = true;
    } else startBasicEnergyChallenge4btn.disabled = false;

    function updateBasicEnergyChallenge5(progress,goal,reward1,reward2) {
        progressBasicEnergyChallenge5.textContent = progress;
        goalBasicEnergyChallenge5.textContent = goal;
        reward1BasicEnergyChallenge5.textContent = reward1;
        reward2BasicEnergyChallenge5.textContent = reward2;
        challengereward.BasicEnergyChallenge5 = reward1;
    }
    if (challengefinished.BasicEnergyChallenge5 === 0) updateBasicEnergyChallenge5(0,"1e8,000",1,2);
    if (challengefinished.BasicEnergyChallenge5 === 1) updateBasicEnergyChallenge5(1,"1e12,000",2,4);
    if (challengefinished.BasicEnergyChallenge5 === 2) updateBasicEnergyChallenge5(2,"1e36,000",4,8);
    if (challengefinished.BasicEnergyChallenge5 === 3) updateBasicEnergyChallenge5(3,NaN,8,NaN);
    if (challengefinished.BasicEnergyChallenge5 === 3) {
        goalBasicEnergyChallenge5.textContent = NaN;
        reward2BasicEnergyChallenge5.textContent = NaN;
        startBasicEnergyChallenge5btn.textContent = "已完成";
        startBasicEnergyChallenge5btn.disabled = true;
    } else startBasicEnergyChallenge5btn.disabled = false;

    function updateBasicEnergyChallenge6(progress,goal,reward) {
        progressBasicEnergyChallenge6.textContent = progress;
        goalBasicEnergyChallenge6.textContent = goal;
        rewardBasicEnergyChallenge6.textContent = reward;
        challengereward.BasicEnergyChallenge6 = reward;
    }
    if (challengefinished.BasicEnergyChallenge6 === 0) updateBasicEnergyChallenge6(0,"1e1,500",2);
    if (challengefinished.BasicEnergyChallenge6 === 1) updateBasicEnergyChallenge6(1,"1e6,700",3);
    if (challengefinished.BasicEnergyChallenge6 === 2) updateBasicEnergyChallenge6(2,"1e32,000",4);
    if (challengefinished.BasicEnergyChallenge6 === 3) updateBasicEnergyChallenge6(3,NaN,5);
    if (challengefinished.BasicEnergyChallenge6 === 3) {
        goalBasicEnergyChallenge6.textContent = NaN;
        rewardBasicEnergyChallenge6.textContent = NaN;
        startBasicEnergyChallenge6btn.textContent = "已完成";
        startBasicEnergyChallenge6btn.disabled = true;
    } else startBasicEnergyChallenge6btn.disabled = false;

    startSimulationExperiment1btn.disabled = false;
    startSimulationExperiment2btn.disabled = false;
    startSimulationExperiment3btn.disabled = false;
    startSimulationExperiment4btn.disabled = false;
    startSimulationExperiment5btn.disabled = false;
    startSimulationExperiment6btn.disabled = false;
    startSimulationExperiment7btn.disabled = false;
    startSimulationExperiment8btn.disabled = false;
    startSimulationExperiment9btn.disabled = false;

    function updateSimulationExperiment1(progress,goal,reward) {
        progressSimulationExperiment1.textContent = progress;
        goalSimulationExperiment1.textContent = goal;
        experimentreward.SimulationExperiment1 = reward;
    }
    if (state === "inSimulation" && experimentdoing.Simulation === "") {
        startSimulationExperiment1btn.innerHTML = `已在<span class="simulation">模拟</span>中`;
        startSimulationExperiment1btn.disabled = true;
    }
    if (experimentfinished.SimulationExperiment1 === 0) updateSimulationExperiment1(0,"1.80e308",false);
    if (experimentfinished.SimulationExperiment1 === 1) {
        updateSimulationExperiment1(1,NaN,true);
        startSimulationExperiment1btn.textContent = "已完成";
        startSimulationExperiment1btn.disabled = true;
    } else if (state === "Simulation") startSimulationExperiment1btn.disabled = false;
    
    function updateSimulationExperiment2(progress,goal,reward) {
        progressSimulationExperiment2.textContent = progress;
        goalSimulationExperiment2.textContent = goal;
        experimentreward.SimulationExperiment2 = reward;
    }
    if (state === "inSimulation" && experimentdoing.Simulation === "") {
        startSimulationExperiment2btn.innerHTML = `已在<span class="simulation">模拟</span>中`;
        startSimulationExperiment2btn.disabled = true;
    }
    if (experimentfinished.SimulationExperiment2 === 0) updateSimulationExperiment2(0,"1.80e308",false);
    if (experimentfinished.SimulationExperiment2 === 1) {
        updateSimulationExperiment2(1,NaN,true);
        startSimulationExperiment2btn.textContent = "已完成";
        startSimulationExperiment2btn.disabled = true;
    } else if (state === "Simulation") startSimulationExperiment2btn.disabled = false;
    
    function updateSimulationExperiment3(progress,goal,reward) {
        progressSimulationExperiment3.textContent = progress;
        goalSimulationExperiment3.textContent = goal;
        experimentreward.SimulationExperiment3 = reward;
    }
    if (state === "inSimulation" && experimentdoing.Simulation === "") {
        startSimulationExperiment3btn.innerHTML = `已在<span class="simulation">模拟</span>中`;
        startSimulationExperiment3btn.disabled = true;
    }
    if (experimentfinished.SimulationExperiment3 === 0) updateSimulationExperiment3(0,"1.80e308",false);
    if (experimentfinished.SimulationExperiment3 === 1) {
        updateSimulationExperiment3(1,NaN,true);
        startSimulationExperiment3btn.textContent = "已完成";
        startSimulationExperiment3btn.disabled = true;
    } else if (state === "Simulation") startSimulationExperiment3btn.disabled = false;

    function updateSimulationExperiment4(progress,goal,reward) {
        progressSimulationExperiment4.textContent = progress;
        goalSimulationExperiment4.textContent = goal;
        experimentreward.SimulationExperiment4 = reward;
    }
    if (state === "inSimulation" && experimentdoing.Simulation === "") {
        startSimulationExperiment4btn.innerHTML = `已在<span class="simulation">模拟</span>中`;
        startSimulationExperiment4btn.disabled = true;
    }
    if (experimentfinished.SimulationExperiment4 === 0) updateSimulationExperiment4(0,"1.80e308",false);
    if (experimentfinished.SimulationExperiment4 === 1) {
        updateSimulationExperiment4(1,NaN,true);
        startSimulationExperiment4btn.textContent = "已完成";
        startSimulationExperiment4btn.disabled = true;
    } else if (state === "Simulation") startSimulationExperiment4btn.disabled = false;

    function updateSimulationExperiment5(progress,goal,reward) {
        progressSimulationExperiment5.textContent = progress;
        goalSimulationExperiment5.textContent = goal;
        experimentreward.SimulationExperiment5 = reward;
    }
    if (state === "inSimulation" && experimentdoing.Simulation === "") {
        startSimulationExperiment5btn.innerHTML = `已在<span class="simulation">模拟</span>中`;
        startSimulationExperiment5btn.disabled = true;
    }
    if (experimentfinished.SimulationExperiment5 === 0) updateSimulationExperiment5(0,"1.80e308",false);
    if (experimentfinished.SimulationExperiment5 === 1) {
        updateSimulationExperiment5(1,NaN,true);
        startSimulationExperiment5btn.textContent = "已完成";
        startSimulationExperiment5btn.disabled = true;
    } else if (state === "Simulation") startSimulationExperiment5btn.disabled = false;

    function updateSimulationExperiment6(progress,goal,reward) {
        progressSimulationExperiment6.textContent = progress;
        goalSimulationExperiment6.textContent = goal;
        experimentreward.SimulationExperiment6 = reward;
    }
    if (state === "inSimulation" && experimentdoing.Simulation === "") {
        startSimulationExperiment6btn.innerHTML = `已在<span class="simulation">模拟</span>中`;
        startSimulationExperiment6btn.disabled = true;
    }
    if (experimentfinished.SimulationExperiment6 === 0) updateSimulationExperiment6(0,"1e600",false);
    if (experimentfinished.SimulationExperiment6 === 1) {
        updateSimulationExperiment6(1,NaN,true);
        startSimulationExperiment6btn.textContent = "已完成";
        startSimulationExperiment6btn.disabled = true;
    } else if (state === "Simulation") startSimulationExperiment6btn.disabled = false;

    function updateSimulationExperiment7(progress,goal,reward) {
        progressSimulationExperiment7.textContent = progress;
        goalSimulationExperiment7.textContent = goal;
        experimentreward.SimulationExperiment7 = reward;
    }
    if (state === "inSimulation" && experimentdoing.Simulation === "") {
        startSimulationExperiment7btn.innerHTML = `已在<span class="simulation">模拟</span>中`;
        startSimulationExperiment7btn.disabled = true;
    }
    if (experimentfinished.SimulationExperiment7 === 0) updateSimulationExperiment7(0,"1e4,200",false);
    if (experimentfinished.SimulationExperiment7 === 1) {
        updateSimulationExperiment7(1,NaN,true);
        startSimulationExperiment7btn.textContent = "已完成";
        startSimulationExperiment7btn.disabled = true;
    } else if (state === "Simulation") startSimulationExperiment7btn.disabled = false;

    function updateSimulationExperiment8(progress,goal,reward) {
        progressSimulationExperiment8.textContent = progress;
        goalSimulationExperiment8.textContent = goal;
        experimentreward.SimulationExperiment8 = reward;
    }
    if (state === "inSimulation" && experimentdoing.Simulation === "") {
        startSimulationExperiment8btn.innerHTML = `已在<span class="simulation">模拟</span>中`;
        startSimulationExperiment8btn.disabled = true;
    }
    if (experimentfinished.SimulationExperiment8 === 0) updateSimulationExperiment8(0,"1e2,200",false);
    if (experimentfinished.SimulationExperiment8 === 1) {
        updateSimulationExperiment8(1,NaN,true);
        startSimulationExperiment8btn.textContent = "已完成";
        startSimulationExperiment8btn.disabled = true;
    } else if (state === "Simulation") startSimulationExperiment8btn.disabled = false;

    function updateSimulationExperiment9(progress,goal,reward) {
        progressSimulationExperiment9.textContent = progress;
        goalSimulationExperiment9.textContent = goal;
        experimentreward.SimulationExperiment9 = reward;
    }
    if (state === "inSimulation" && experimentdoing.Simulation === "") {
        startSimulationExperiment9btn.innerHTML = `已在<span class="simulation">模拟</span>中`;
        startSimulationExperiment9btn.disabled = true;
    }
    if (experimentfinished.SimulationExperiment9 === 0) updateSimulationExperiment9(0,"1e135,000",false);
    if (experimentfinished.SimulationExperiment9 === 1) {
        updateSimulationExperiment9(1,NaN,true);
        startSimulationExperiment9btn.textContent = "已完成";
        startSimulationExperiment9btn.disabled = true;
    } else if (state === "Simulation") startSimulationExperiment9btn.disabled = false;

    // 更新where-you-are
    let whereChallenge = {Tier:``, Origin:``};
    let whereExperiment = {Simulation:``};
    if (challengedoing.Tier === "turEnergyTierChallenge1") whereChallenge.Tier = `<span class="turEnergy">龟能</span>层级挑战1`;
    else if (challengedoing.Tier === "turEnergyTierChallenge2") whereChallenge.Tier = `<span class="turEnergy">龟能</span>层级挑战2`;
    else if (challengedoing.Tier === "turEnergyTierChallenge3") whereChallenge.Tier = `<span class="turEnergy">龟能</span>层级挑战3`;
    else if (challengedoing.Tier === "turEnergyTierChallenge4") whereChallenge.Tier = `<span class="turEnergy">龟能</span>层级挑战4`;
    else if (challengedoing.Tier === "turEnergyTierChallenge5") whereChallenge.Tier = `<span class="turEnergy">龟能</span>层级挑战5`;
    else if (challengedoing.Tier === "turEnergyTierChallenge6") whereChallenge.Tier = `<span class="turEnergy">龟能</span>层级挑战6`;
    else whereChallenge.Tier = ``;
    if (challengedoing.Origin === "turEnergyOriginChallenge1") whereChallenge.Origin = `<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战1`;
    else if (challengedoing.Origin === "turEnergyOriginChallenge2") whereChallenge.Origin = `<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战2`;
    else if (challengedoing.Origin === "turEnergyOriginChallenge3") whereChallenge.Origin = `<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战3`;
    else if (challengedoing.Origin === "turEnergyOriginChallenge4") whereChallenge.Origin = `<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战4`;
    else if (challengedoing.Origin === "turEnergyOriginChallenge5") whereChallenge.Origin = `<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战5`;
    else if (challengedoing.Origin === "turEnergyOriginChallenge6") whereChallenge.Origin = `<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战6`;
    else whereChallenge.Origin = ``;
    if (challengedoing.BasicEnergy === "BasicEnergyChallenge1") whereChallenge.BasicEnergy = `<span class="BasicEnergy">基本能</span>挑战1`;
    else if (challengedoing.BasicEnergy === "BasicEnergyChallenge2") whereChallenge.BasicEnergy = `<span class="BasicEnergy">基本能</span>挑战2`;
    else if (challengedoing.BasicEnergy === "BasicEnergyChallenge3") whereChallenge.BasicEnergy = `<span class="BasicEnergy">基本能</span>挑战3`;
    else if (challengedoing.BasicEnergy === "BasicEnergyChallenge4") whereChallenge.BasicEnergy = `<span class="BasicEnergy">基本能</span>挑战4`;
    else if (challengedoing.BasicEnergy === "BasicEnergyChallenge5") whereChallenge.BasicEnergy = `<span class="BasicEnergy">基本能</span>挑战5`;
    else if (challengedoing.BasicEnergy === "BasicEnergyChallenge6") whereChallenge.BasicEnergy = `<span class="BasicEnergy">基本能</span>挑战6`;
    else whereChallenge.BasicEnergy = ``;
    if (experimentdoing.Simulation === "SimulationExperiment1") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验1`;
    if (experimentdoing.Simulation === "SimulationExperiment2") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验2`;
    if (experimentdoing.Simulation === "SimulationExperiment3") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验3`;
    if (experimentdoing.Simulation === "SimulationExperiment4") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验4`;
    if (experimentdoing.Simulation === "SimulationExperiment5") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验5`;
    if (experimentdoing.Simulation === "SimulationExperiment6") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验6`;
    if (experimentdoing.Simulation === "SimulationExperiment7") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验7`;
    if (experimentdoing.Simulation === "SimulationExperiment8") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验8`;
    if (experimentdoing.Simulation === "SimulationExperiment9") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验9`;
    const challengeParts = [];
    if (whereExperiment.Simulation) challengeParts.push(whereExperiment.Simulation);
    if (whereChallenge.BasicEnergy) challengeParts.push(whereChallenge.BasicEnergy);
    if (whereChallenge.Origin) challengeParts.push(whereChallenge.Origin);
    if (whereChallenge.Tier) challengeParts.push(whereChallenge.Tier);

    if (challengeParts.length === 0) {
        if (turEnergy.lt("1.80e308") && simulatedTimes.eq(0) && IteratedTimes.eq(0)) WhereYouAre.innerHTML = "你就在这里";
        else if (turEnergy.lt("1.80e308") && state === "inSimulation") WhereYouAre.innerHTML = `你在<span class="simulation">模拟</span>内`;
        else if (state === "inSimulation") WhereYouAre.innerHTML = "你或许马上就不在这里了";
        else if (state === "Simulation") WhereYouAre.innerHTML = `你在<span class="simulation">模拟</span>外`;
        if ((experimentreward.SimulationExperiment5 || IteratedTimes.gt(0)) && state === "inSimulation") WhereYouAre.innerHTML = `你在<span class="simulation">模拟</span>内`;
    } else {
        WhereYouAre.innerHTML = `你在${challengeParts.join("-")}里`;
    }

    // 更新里程碑
    function OriginMilestone(goal, Milestone, Milestoneprogress, extra) {
        if (AmassOriginTimes.lt(goal)) {
            Milestone.classList.remove('done');
            Milestoneprogress.textContent = "未完成";
        } else if (challengebuffs.disabledOriginMilestone && extra) {
            Milestone.classList.add('done');
            Milestoneprogress.textContent = "已完成";
        } else {
            Milestone.classList.remove('done');
            Milestoneprogress.textContent = "被禁用";
        }
    }
    if (IteratedTimes.gte(6)) {
        OriginMilestone1Need.innerHTML = `足够的<span class="Iteration">迭代</span>为你抹除了需求`;
        OriginMilestone2Need.innerHTML = `足够的<span class="Iteration">迭代</span>为你抹除了需求`;
        OriginMilestone3Need.innerHTML = `足够的<span class="Iteration">迭代</span>为你抹除了需求`;
        OriginMilestone4Need.innerHTML = `足够的<span class="Iteration">迭代</span>为你抹除了需求`;
        OriginMilestone5Need.innerHTML = `足够的<span class="Iteration">迭代</span>为你抹除了需求`;
        OriginMilestone6Need.innerHTML = `足够的<span class="Iteration">迭代</span>为你抹除了需求`;
        OriginMilestone7Need.innerHTML = `足够的<span class="Iteration">迭代</span>为你抹除了需求`;
        OriginMilestone8Need.innerHTML = `足够的<span class="Iteration">迭代</span>为你抹除了需求`;
        OriginMilestone9Need.innerHTML = `足够的<span class="Iteration">迭代</span>为你抹除了需求`;
        OriginMilestone10Need.innerHTML = `足够的<span class="Iteration">迭代</span>为你抹除了需求`;
        OriginMilestone(0,OriginMilestone1,OriginMilestone1progress,true);
        OriginMilestone(0,OriginMilestone2,OriginMilestone2progress,true);
        OriginMilestone(0,OriginMilestone3,OriginMilestone3progress,true);
        OriginMilestone(0,OriginMilestone4,OriginMilestone4progress,true);
        OriginMilestone(0,OriginMilestone5,OriginMilestone5progress,true);
        OriginMilestone(0,OriginMilestone6,OriginMilestone6progress,true);
        OriginMilestone(0,OriginMilestone7,OriginMilestone7progress,experimentbuffs.SimulationExperiment5);
        OriginMilestone(0,OriginMilestone8,OriginMilestone8progress,true);
        OriginMilestone(0,OriginMilestone9,OriginMilestone9progress,true);
        OriginMilestone(0,OriginMilestone10,OriginMilestone10progress,true);
    } else {
        OriginMilestone1Need.innerHTML = `需要2<span class="turEnergy">龟能</span><span class="Origin">本源</span>次数`;
        OriginMilestone2Need.innerHTML = `需要4<span class="turEnergy">龟能</span><span class="Origin">本源</span>次数`;
        OriginMilestone3Need.innerHTML = `需要6<span class="turEnergy">龟能</span><span class="Origin">本源</span>次数`;
        OriginMilestone4Need.innerHTML = `需要8<span class="turEnergy">龟能</span><span class="Origin">本源</span>次数`;
        OriginMilestone5Need.innerHTML = `需要10<span class="turEnergy">龟能</span><span class="Origin">本源</span>次数`;
        OriginMilestone6Need.innerHTML = `需要12<span class="turEnergy">龟能</span><span class="Origin">本源</span>次数`;
        OriginMilestone7Need.innerHTML = `需要20<span class="turEnergy">龟能</span><span class="Origin">本源</span>次数`;
        OriginMilestone8Need.innerHTML = `需要50<span class="turEnergy">龟能</span><span class="Origin">本源</span>次数`;
        OriginMilestone9Need.innerHTML = `需要100<span class="turEnergy">龟能</span><span class="Origin">本源</span>次数`;
        OriginMilestone10Need.innerHTML = `需要2000<span class="turEnergy">龟能</span><span class="Origin">本源</span>次数`;
        OriginMilestone(2,OriginMilestone1,OriginMilestone1progress,true);
        OriginMilestone(4,OriginMilestone2,OriginMilestone2progress,true);
        OriginMilestone(6,OriginMilestone3,OriginMilestone3progress,true);
        OriginMilestone(8,OriginMilestone4,OriginMilestone4progress,true);
        OriginMilestone(10,OriginMilestone5,OriginMilestone5progress,true);
        OriginMilestone(12,OriginMilestone6,OriginMilestone6progress,true);
        OriginMilestone(20,OriginMilestone7,OriginMilestone7progress,experimentbuffs.SimulationExperiment5);
        OriginMilestone(50,OriginMilestone8,OriginMilestone8progress,true);
        OriginMilestone(100,OriginMilestone9,OriginMilestone9progress,true);
        OriginMilestone(2000,OriginMilestone10,OriginMilestone10progress,true);
    }
    OriginMilestone(1e4,OriginMilestone11,OriginMilestone11progress,true);
    OriginMilestone(1e6,OriginMilestone12,OriginMilestone12progress,true);
    OriginMilestone(1e8,OriginMilestone13,OriginMilestone13progress,true);
    OriginMilestone(1e10,OriginMilestone14,OriginMilestone14progress,true);
    OriginMilestone14Effect.textContent = formatNumber(new Decimal(1.01).pow(EfficientClickLevel));

    function IterationMilestone(goal, Milestone, Milestoneprogress, extra) {
        if (IteratedTimes.lt(goal)) {
            Milestone.classList.remove('done');
            Milestoneprogress.textContent = "未完成";
        } else if (extra) {
            Milestone.classList.add('done');
            Milestoneprogress.textContent = "已完成";
        } else {
            Milestone.classList.remove('done');
            Milestoneprogress.textContent = "被禁用";
        }
    }
    IterationMilestone(1,IterationMilestone1,IterationMilestone1progress,true);
    IterationMilestone(2,IterationMilestone2,IterationMilestone2progress,true);
    IterationMilestone(3,IterationMilestone3,IterationMilestone3progress,true);
    IterationMilestone(4,IterationMilestone4,IterationMilestone4progress,true);
    IterationMilestone(5,IterationMilestone5,IterationMilestone5progress,true);
    IterationMilestone(6,IterationMilestone6,IterationMilestone6progress,true);
    IterationMilestone(7,IterationMilestone7,IterationMilestone7progress,true);
    IterationMilestone(8,IterationMilestone8,IterationMilestone8progress,true);
    IterationMilestone(9,IterationMilestone9,IterationMilestone9progress,true);
    IterationMilestone(10,IterationMilestone10,IterationMilestone10progress,true);
    IterationMilestone(15,IterationMilestone11,IterationMilestone11progress,true);
    IterationMilestone(20,IterationMilestone12,IterationMilestone12progress,true);
    IterationMilestone(100,IterationMilestone13,IterationMilestone13progress,true);
    IterationMilestone(1e3,IterationMilestone14,IterationMilestone14progress,true);
    IterationMilestone(1e4,IterationMilestone15,IterationMilestone15progress,true);
    IterationMilestone(1e5,IterationMilestone16,IterationMilestone16progress,true);

    function disablebtn(condition, theBtn) {
        if (condition) theBtn.disabled = false;
        else theBtn.disabled = true;
    }
    disablebtn(turEnergy.gte(PriceofturEnergyLevelup(turEnergyLevel)) && turEnergyLevel.lt(maxLevelup), turEnergyLevelUpBtn);
    disablebtn(turEnergy.gte(PriceofBuyautoClicker(autoClickers)) && autoClickers.lt(maxLevelup) && challengebuffs.AutoClicker && challengebuffs.disabledturEnergyLevelup && !SimulationMachine.βb1, autoClickerBtn);
    disablebtn(turEnergy.gte(PriceofBuyEfficientClick(EfficientClickLevel)) && EfficientClickLevel.lt(maxLevelup) && challengebuffs.disabledturEnergyLevelup && experimentbuffs.SimulationExperiment5, EfficientClickBtn);
    disablebtn(turEnergy.gte(PriceofBuyHighspeedClicking(HighspeedClickingLevel)) && HighspeedClickingLevel.lt(maxLevelup) && challengebuffs.disabledturEnergyLevelup, HighspeedClickingBtn);
    disablebtn(turEnergyLevel.gte(PriceofturEnergyTierup(turEnergyTier)) && turEnergyTier.lt(maxLevelup) && challengebuffs.turEnergyTier && challengebuffs.BasicEnergyChallenge3, turEnergyTierBtn);
    disablebtn(turEnergy.gte(PriceofBuyTierEnhance(TierEnhanceLevel)) && TierEnhanceLevel.lt(maxLevelup) && challengebuffs.disabledturEnergyLevelup && challengebuffs.BasicEnergyChallenge2, TierEnhanceBtn);
    disablebtn(((turEnergy.log10().sub(40).div(2).mul(challengereward.turEnergyOriginAmount).mul(SimulationUpgrades.turEnergyOrigin1.num).mul(effectIterationMileStone1).mul(effectOriginIteration)).floor()).gt(0), turEnergyOriginAmassbtn);
    disablebtn(turEnergyOrigin.gte(PriceofBuyOriginAmassFasten(OriginAmassFastenLevel)) && challengebuffs.disabledOriginLevelup, OriginAmassFastenBtn);
    disablebtn(turEnergyOrigin.gte(PriceofBuyOriginProduceEnergy(OriginProduceEnergyLevel)) && challengebuffs.disabledOriginLevelup && effect2SimulationExperiment3, OriginProduceEnergyBtn);
    disablebtn(turEnergyOrigin.gte(PriceofBuyClickOrigin(ClickOriginLevel)) && challengebuffs.disabledOriginLevelup, ClickOriginBtn);
    disablebtn(turEnergyOrigin.gte(PriceofBuyTierOrigin(TierOriginLevel)) && challengebuffs.disabledOriginLevelup, TierOriginBtn);
    disablebtn(turEnergyOrigin.gte(PriceofBuyOriginEnhance(OriginEnhanceLevel)) && challengebuffs.disabledOriginLevelup, OriginEnhanceBtn);
    disablebtn(simulationData.gte(PriceofBuyincreamentalSimulation(increamentalSimulationLevel)), increamentalSimulationBtn);
    disablebtn(turEnergy.gte(PriceofBuyturEnergySimulationMachineByte(BuySimulationMachineByte.turEnergy)), buyturEnergySimulationMachineByteBtn);
    disablebtn(turEnergyOrigin.gte(PriceofBuyturEnergyOriginSimulationMachineByte(BuySimulationMachineByte.turEnergyOrigin)), buyturEnergyOriginSimulationMachineByteBtn);
    disablebtn(simulationData.gte(PriceofBuySimulationDataSimulationMachineByte(BuySimulationMachineByte.SimulationData)), buySimulationDataSimulationMachineByteBtn);
    SimulationMachineResetBtn.disabled = false;// 因为设计失误，需要确保这个按钮没有被禁用
    SimulationMachineResetBtn.innerHTML = `下次完成<span class="simulation">模拟</span>后重置<span class="simulation">模拟机</span>`;
    if (SimulationMachineResetBtnIf.eq(1)) SimulationMachineResetBtn.classList.add('on');
    else SimulationMachineResetBtn.classList.remove('on');
    disablebtn(simulationData.gte(PriceofBuyfirstSimulationRoom(SimulationRoomLevel.Room1)), firstSimulationRoomBtn);
    disablebtn(simulationData.gte(PriceofBuysecondSimulationRoom(SimulationRoomLevel.Room2)), secondSimulationRoomBtn);
    disablebtn(simulationData.gte(PriceofBuythirdSimulationRoom(SimulationRoomLevel.Room3)), thirdSimulationRoomBtn);
    disablebtn(simulationData.gte(PriceofBuyfourthSimulationRoom(SimulationRoomLevel.Room4)), fourthSimulationRoomBtn);
    disablebtn(simulationData.gte(PriceofBuyfifthSimulationRoom(SimulationRoomLevel.Room5)), fifthSimulationRoomBtn);
    disablebtn(simulationData.gte(PriceofBuysixthSimulationRoom(SimulationRoomLevel.Room6)), sixthSimulationRoomBtn);
    disablebtn(simulationData.gte(PriceofBuyseventhSimulationRoom(SimulationRoomLevel.Room7)), seventhSimulationRoomBtn);
    disablebtn(simulationData.gte(PriceofBuyeighthSimulationRoom(SimulationRoomLevel.Room8)), eighthSimulationRoomBtn); 
    disablebtn(!experimentbuffs.SimulationExperiment5 || !challengebuffs.BasicEnergyChallenge6, SimulationMachineαmainbtn);
    disablebtn(!challengebuffs.BasicEnergyChallenge6, SimulationMachineβmainbtn);
    disablebtn(maxturEnergyinsimulation.gte("1.8e308") && experimentdoing.Simulation === "", completeSimulation2);
    if (maxturEnergyinsimulation.gte("1.8e308")) completeSimulation2Text.innerHTML = `获得${formatNumber(simulationDataCal())}<span class="simulation">模拟数据</span>`;
    else completeSimulation2Text.innerHTML = `需要1.80e308<span class="turEnergy">龟能</span>`;
    if (!(experimentdoing.Simulation === "")) completeSimulation2Text.innerHTML = `你在<span class="simulation">模拟</span>实验里`;
    disablebtn((turEnergy.plus(1)).log10().gte(effectSimulationMachine.γa3), BasicEnergyChangebtn);
    disablebtn(BasicEnergy.gte(PriceofBuyEnergyMachineA(EnergyMachineALevel)), EnergyMachineABtn);
    disablebtn(BasicEnergy.gte(PriceofBuyEnergyMachineB(EnergyMachineBLevel)), EnergyMachineBBtn);
    disablebtn(BasicEnergy.gte(PriceofBuyEnergyMachineC(EnergyMachineCLevel)), EnergyMachineCBtn);
    disablebtn(BasicEnergy.gte(PriceofBuyEnergyMachineD(EnergyMachineDLevel)), EnergyMachineDBtn);
    disablebtn(BasicEnergy.gte(PriceofBuyEnergyMachineE(EnergyMachineELevel)), EnergyMachineEBtn);
    disablebtn(SolarEnergy.gte(PriceofBuyturEnergyCatalysis(turEnergyCatalysisLevel)), turEnergyCatalysisBtn);
    disablebtn(SolarEnergy.gte(PriceofBuyOriginCatalysis(OriginCatalysisLevel)), OriginCatalysisBtn);
    disablebtn(SolarEnergy.gte(PriceofBuyClickCatalysis(ClickCatalysisLevel)), ClickCatalysisBtn);
    disablebtn(SolarEnergy.gte(PriceofBuyPhotosynthesis(PhotosynthesisLevel)), PhotosynthesisBtn);
    disablebtn(ChemicalEnergy.gte(PriceofBuySimulationCatalysis(SimulationCatalysisLevel)), SimulationCatalysisBtn);
    disablebtn(ChemicalEnergy.gte(PriceofBuyTierCatalysis(TierCatalysisLevel)), TierCatalysisBtn);
    disablebtn(ChemicalEnergy.gte(PriceofBuyReactionCatalysis(ReactionCatalysisLevel)), ReactionCatalysisBtn);
    disablebtn(ChemicalEnergy.gte(PriceofBuyPrimaryBattery(PrimaryBatteryLevel)), PrimaryBatteryBtn);
    disablebtn(ElectricEnergy.gte(PriceofBuyBoostVoltage(BoostVoltageLevel)), BoostVoltageBtn);
    disablebtn(ElectricEnergy.gte(PriceofBuyElectrolysis(ElectrolysisLevel)), ElectrolysisBtn);
    disablebtn(ElectricEnergy.gte(PriceofBuyIonization(IonizationLevel)), IonizationBtn);
    disablebtn(ElectricEnergy.gte(PriceofBuyMotor(MotorLevel)), MotorBtn);
    disablebtn(ElectricEnergy.gte(PriceofBuyPowerOn(PowerOnLevel)), PowerOnBtn);
    disablebtn(MechanicalEnergy.gte(PriceofBuyKineticEnergy(KineticEnergyLevel)), KineticEnergyBtn);
    disablebtn(MechanicalEnergy.gte(PriceofBuyElasticPotentialEnergy(ElasticPotentialEnergyLevel)), ElasticPotentialEnergyBtn);
    disablebtn(MechanicalEnergy.gte(PriceofBuyGravitationalPotentialEnergy(GravitationalPotentialEnergyLevel)), GravitationalPotentialEnergyBtn);
    disablebtn(MechanicalEnergy.gte(PriceofBuyFriction(FrictionLevel)), FrictionBtn);
    disablebtn(maxsimulationDatainIteration.gte("1.80e308"), CompleteIterationbtn);
    disablebtn(IterationData.gte(PriceofBuyincreamentalIteration(increamentalIterationLevel)), increamentalIterationBtn);
    disablebtn(IterationData.gte(PriceofBuyOriginIteration(OriginIterationLevel)), OriginIterationBtn);
    disablebtn(IterationData.gte(PriceofBuyEnergyExpansion(EnergyExpansionLevel)), EnergyExpansionBtn);
    disablebtn(IterationData.gte(PriceofBuyfirstIterationRoom(IterationRoomLevel.Room1)), firstIterationRoomBtn);
    disablebtn(IterationData.gte(PriceofBuysecondIterationRoom(IterationRoomLevel.Room2)), secondIterationRoomBtn);
    disablebtn(IterationData.gte(PriceofBuythirdIterationRoom(IterationRoomLevel.Room3)), thirdIterationRoomBtn);
    disablebtn(IterationData.gte(PriceofBuyfourthIterationRoom(IterationRoomLevel.Room4)), fourthIterationRoomBtn);
    disablebtn(IterationData.gte(PriceofBuyfifthIterationRoom(IterationRoomLevel.Room5)), fifthIterationRoomBtn);
    disablebtn(IterationData.gte(PriceofBuysixthIterationRoom(IterationRoomLevel.Room6)), sixthIterationRoomBtn);
    disablebtn(IterationData.gte(PriceofBuyseventhIterationRoom(IterationRoomLevel.Room7)), seventhIterationRoomBtn);
    disablebtn(IterationData.gte(PriceofBuyeighthIterationRoom(IterationRoomLevel.Room8)), eighthIterationRoomBtn); 

    // 解锁升级（和挑战）
    function UnlockUpgrades(condition, elements) {
        if (condition) {
            elements.forEach(element => {
            element.classList.remove('Locked');
            element.classList.add('Unlocked');
        });
        } else {
        elements.forEach(element => {
            element.classList.add('Locked');
            element.classList.remove('Unlocked');
        });
        }
    }
    UnlockUpgrades(turEnergyLevel.gte(6) || everBasicEnergyChange, autoClickerEl);
    UnlockUpgrades(turEnergyLevel.gte(8) || everBasicEnergyChange, EfficientClickEl);
    UnlockUpgrades(turEnergyLevel.gte(12) || everBasicEnergyChange, HighspeedClickingEl);
    UnlockUpgrades(turEnergyLevel.gte(60) || turEnergyTier.gt(0) || everBasicEnergyChange, turEnergyTierEl);
    UnlockUpgrades(turEnergyLevel.gte(100) || TierEnhanceLevel.gt(0) || everBasicEnergyChange, TierEnhanceEl);
    UnlockUpgrades(AmassOriginTimes.gt(0) || IteratedTimes.gt(0), OriginAmassFastenEl);
    UnlockUpgrades(AmassOriginTimes.gt(0) || IteratedTimes.gt(0), OriginProduceEnergyEl);
    UnlockUpgrades(AmassOriginTimes.gt(0) || IteratedTimes.gt(0), ClickOriginEl);
    UnlockUpgrades(AmassOriginTimes.gt(0) || IteratedTimes.gt(0), TierOriginEl);
    UnlockUpgrades(AmassOriginTimes.gte(2000) || IteratedTimes.gt(0), OriginEnhanceEl);
    UnlockUpgrades(true, EnergyMachineAEl);
    UnlockUpgrades(experimentreward.SimulationExperiment6, EnergyMachineBEl);
    UnlockUpgrades(experimentreward.SimulationExperiment6, EnergyMachineCEl);
    UnlockUpgrades(experimentreward.SimulationExperiment7, EnergyMachineDEl);
    UnlockUpgrades(experimentreward.SimulationExperiment9, EnergyMachineEEl);
    UnlockUpgrades(((AmassOriginTimes.gt(0) || SimulationUpgrades.turEnergyOrigin3.if) && challengereward.turEnergyOrigin) || challengedoing.Origin != "" || challengefinished.turEnergyOriginChallenge1 != 0 || challengefinished.turEnergyOriginChallenge2 != 0 || challengefinished.turEnergyOriginChallenge3 != 0 || challengefinished.turEnergyOriginChallenge4 != 0 || challengefinished.turEnergyOriginChallenge5 != 0 || challengefinished.turEnergyOriginChallenge6 != 0, turEnergyOriginChallengeEl);
    UnlockUpgrades(SimulationUpgrades.turEnergy4.if && SimulationUpgrades.turEnergyOrigin4.if && SimulationUpgrades.else4.if, increamentalSimulationEl);
    UnlockUpgrades(SimulationMachine.λb1, firstSimulationRoomEl);
    UnlockUpgrades(SimulationMachine.λb2, secondSimulationRoomEl);
    UnlockUpgrades(SimulationMachine.λb3, thirdSimulationRoomEl);
    UnlockUpgrades(SimulationMachine.λb3, fourthSimulationRoomEl);
    UnlockUpgrades(SimulationMachine.λb4, fifthSimulationRoomEl);
    UnlockUpgrades(SimulationMachine.λb4, sixthSimulationRoomEl);
    UnlockUpgrades(SimulationMachine.λb5, seventhSimulationRoomEl);
    UnlockUpgrades(SimulationMachine.λb5, eighthSimulationRoomEl);
    UnlockUpgrades(true, turEnergyCatalysisEl);
    UnlockUpgrades(true, OriginCatalysisEl);
    UnlockUpgrades(true, ClickCatalysisEl);
    UnlockUpgrades(experimentreward.SimulationExperiment6, PhotosynthesisEl);
    UnlockUpgrades(true, SimulationCatalysisEl);
    UnlockUpgrades(true, TierCatalysisEl);
    UnlockUpgrades(true, ReactionCatalysisEl);
    UnlockUpgrades(true, PrimaryBatteryEl);
    UnlockUpgrades(true, BoostVoltageEl);
    UnlockUpgrades(true, ElectrolysisEl);
    UnlockUpgrades(true, IonizationEl);
    UnlockUpgrades(true, MotorEl);
    UnlockUpgrades(true, PowerOnEl);
    UnlockUpgrades(true, KineticEnergyEl);
    UnlockUpgrades(true, ElasticPotentialEnergyEl);
    UnlockUpgrades(true, GravitationalPotentialEnergyEl);
    UnlockUpgrades(false, FrictionEl);
    UnlockUpgrades(true, increamentalIterationEl);
    UnlockUpgrades(true, OriginIterationEl);
    UnlockUpgrades(true, EnergyExpansionEl);
    UnlockUpgrades(true, firstIterationRoomEl);
    UnlockUpgrades(true, secondIterationRoomEl);
    UnlockUpgrades(true, thirdIterationRoomEl);
    UnlockUpgrades(true, fourthIterationRoomEl);
    UnlockUpgrades(true, fifthIterationRoomEl);
    UnlockUpgrades(true, sixthIterationRoomEl);
    UnlockUpgrades(true, seventhIterationRoomEl);
    UnlockUpgrades(true, eighthIterationRoomEl);

    function UnlockUpgrade (condition, element) {
        if (condition) {
        element.classList.remove('Locked');
        element.classList.add('Unlocked');
    } else {
        element.classList.add('Locked');
        element.classList.remove('Unlocked');
    }
    }
    UnlockUpgrade(((AmassOriginTimes.gt(0) || SimulationUpgrades.turEnergyOrigin3.if) && challengereward.turEnergyOrigin) || challengedoing.Origin != "" || challengefinished.turEnergyOriginChallenge1 != 0 || challengefinished.turEnergyOriginChallenge2 != 0 || challengefinished.turEnergyOriginChallenge3 != 0 || challengefinished.turEnergyOriginChallenge4 != 0 || challengefinished.turEnergyOriginChallenge5 != 0 || challengefinished.turEnergyOriginChallenge6 != 0, introturEnergyOriginChallenge);
    UnlockUpgrade((turEnergyLevel.gte(6) || everBasicEnergyChange) && (challengereward.BuyMaxAutoClicker || challengereward.BuyMaxturEnergy || IteratedTimes.gt(0)) && challengebuffs.AutoClicker && challengebuffs.disabledturEnergyLevelup && !SimulationMachine.βb1, autoClickerBuyMaxBtn);
    UnlockUpgrade(challengereward.BuyMaxturEnergy || IteratedTimes.gt(0), turEnergyLevelupBuyMaxBtn);
    UnlockUpgrade((turEnergyLevel.gte(8) || everBasicEnergyChange) && (challengereward.BuyMaxturEnergy || IteratedTimes.gt(0)) && challengebuffs.disabledturEnergyLevelup && experimentbuffs.SimulationExperiment5, EfficientClickBuyMaxBtn);
    UnlockUpgrade((turEnergyLevel.gte(12) || everBasicEnergyChange) && (challengereward.BuyMaxturEnergy || IteratedTimes.gt(0)) && challengebuffs.disabledturEnergyLevelup, HighspeedClickingBuyMaxBtn);
    UnlockUpgrade((turEnergyLevel.gte(60) || turEnergyTier.gt(0) || everBasicEnergyChange) && (challengereward.BuyMaxturEnergy || IteratedTimes.gt(0)) && challengebuffs.BasicEnergyChallenge3, turEnergyTierBuyMaxBtn);
    UnlockUpgrade((turEnergyLevel.gte(100) || TierEnhanceLevel.gt(0) || everBasicEnergyChange) && (challengereward.BuyMaxturEnergy || IteratedTimes.gt(0)) && challengebuffs.disabledturEnergyLevelup && challengebuffs.BasicEnergyChallenge2, TierEnhanceBuyMaxBtn);
    UnlockUpgrade(experimentreward.SimulationExperiment1, experimentphase1);
    UnlockUpgrade(experimentreward.SimulationExperiment2, turEnergyAuto);
    UnlockUpgrade(experimentreward.SimulationExperiment3, turEnergyOriginAuto);
    UnlockUpgrade(experimentreward.SimulationExperiment9, BasicEnergyChangeAuto);
    if (experimentreward.SimulationExperiment9) {
        SimulationAutotapsecondarytitle.innerHTML = `部分自动化可以反复点击以修改自动化模式`;
    } else {
        SimulationAutotapsecondarytitle.innerHTML = `让那些惹人厌烦的点击见鬼去吧`;
    }
    UnlockUpgrade(experimentreward.SimulationExperiment7, EnergyMachineAuto);
    UnlockUpgrade(experimentreward.SimulationExperiment7, SolarEnergyAuto);
    UnlockUpgrade(experimentreward.SimulationExperiment7, ChemicalEnergyAuto);
    UnlockUpgrade(experimentreward.SimulationExperiment7, ElectricEnergyAuto);
    UnlockUpgrade(IterationStrengthen.Auto3.if, MechanicalEnergyAuto);
    UnlockUpgrade(IterationStrengthen.Auto1.if, SimulationCompleteAuto);
    UnlockUpgrade(IterationStrengthen.Auto1.if, SimulationStartAuto);
    UnlockUpgrade(IterationStrengthen.Auto2.if, increamentalSimulationAuto);
    UnlockUpgrade(IterationStrengthen.Auto2.if, SimulationRoomAuto);
    UnlockUpgrade(IterationStrengthen.Auto2.if, SimulationByteAuto);
    UnlockUpgrade(IterationStrengthen.Extra2.if, IterationCompleteAuto);
    UnlockUpgrade(SimulationMachine.λa1 || experimentfinished.SimulationExperiment4, SimulationExperiment4);
    UnlockUpgrade(experimentreward.SimulationExperiment4, SimulationMachineλc);
    UnlockUpgrade(SimulationMachine.λa2 || experimentfinished.SimulationExperiment5, SimulationExperiment5);
    UnlockUpgrade(SimulationMachine.λa3 || experimentfinished.SimulationExperiment6, SimulationExperiment6);
    UnlockUpgrade(SimulationMachine.λa4 || experimentfinished.SimulationExperiment7, SimulationExperiment7);
    UnlockUpgrade(SimulationMachine.λa4 || experimentfinished.SimulationExperiment8, SimulationExperiment8);
    UnlockUpgrade(SimulationMachine.λa5 || experimentfinished.SimulationExperiment9, SimulationExperiment9);
    UnlockUpgrade((SimulationMachine.λa5 || experimentfinished.SimulationExperiment10) && false, SimulationExperiment10);
    UnlockUpgrade(SimulationMachine.λc1 || IterationStrengthen.Reset3.if, SimulationMachineβ);
    UnlockUpgrade(SimulationMachine.λc2 || IterationStrengthen.Reset3.if, SimulationMachineγ);
    UnlockUpgrade(state === "inSimulation" && (experimentreward.SimulationExperiment5 || IteratedTimes.gt(0)), completeSimulation2);
    UnlockUpgrade((SimulationUpgrades.turEnergy4.if && SimulationUpgrades.turEnergyOrigin4.if && SimulationUpgrades.else4.if) && IteratedTimes.gte(1), increamentalSimulationBuyMaxBtn);
    UnlockUpgrade(IteratedTimes.gte(1), buyMaxSimulationMachineBytebtn);
    UnlockUpgrade(SimulationMachine.λb1 && IteratedTimes.gte(1), firstSimulationRoomBuyMaxbtn);
    UnlockUpgrade(SimulationMachine.λb2 && IteratedTimes.gte(1), secondSimulationRoomBuyMaxbtn);
    UnlockUpgrade(SimulationMachine.λb3 && IteratedTimes.gte(1), thirdSimulationRoomBuyMaxbtn);
    UnlockUpgrade(SimulationMachine.λb3 && IteratedTimes.gte(1), fourthSimulationRoomBuyMaxbtn);
    UnlockUpgrade(SimulationMachine.λb4 && IteratedTimes.gte(1), fifthSimulationRoomBuyMaxbtn);
    UnlockUpgrade(SimulationMachine.λb4 && IteratedTimes.gte(1), sixthSimulationRoomBuyMaxbtn);
    UnlockUpgrade(SimulationMachine.λb5 && IteratedTimes.gte(1), seventhSimulationRoomBuyMaxbtn);
    UnlockUpgrade(SimulationMachine.λb5 && IteratedTimes.gte(1), eighthSimulationRoomBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, OriginAmassFastenBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, OriginProduceEnergyBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, ClickOriginBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, TierOriginBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, OriginEnhanceBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, EnergyMachineABuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, EnergyMachineBBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, EnergyMachineCBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, EnergyMachineDBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, EnergyMachineEBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, turEnergyCatalysisBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, OriginCatalysisBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, ClickCatalysisBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, PhotosynthesisBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, SimulationCatalysisBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, TierCatalysisBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, ReactionCatalysisBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, PrimaryBatteryBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, BoostVoltageBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, ElectrolysisBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, IonizationBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, MotorBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, KineticEnergyBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, ElasticPotentialEnergyBuyMaxbtn);
    UnlockUpgrade(IterationStrengthen.Auto4.if, GravitationalPotentialEnergyBuyMaxbtn);
    UnlockUpgrade(IteratedTimes.gte(9), OriginMilestone11);
    UnlockUpgrade(IteratedTimes.gte(10), OriginMilestone12);
    UnlockUpgrade(IteratedTimes.gte(15), OriginMilestone13);
    UnlockUpgrade(IteratedTimes.gte(20), OriginMilestone14);
    if (IteratedTimes.gte(9)) IterationMilestone7effect.textContent = "1";
    if (IteratedTimes.gte(10)) IterationMilestone7effect.textContent = "2";
    if (IteratedTimes.gte(15)) IterationMilestone7effect.textContent = "3";
    if (IteratedTimes.gte(20)) IterationMilestone7effect.textContent = "4";
    if (IteratedTimes.lt(9)) IterationMilestone7effect.textContent = "0";
    UnlockUpgrade(IterationStrengthen.Produce4.if && IterationStrengthen.Reset4.if && IterationStrengthen.Auto4.if, IterationStrengthenExtra1btn);
    UnlockUpgrade(IterationStrengthen.Extra1.if, IterationStrengthenExtra2btn);
    UnlockUpgrade(IterationStrengthen.Extra2.if, IterationStrengthenExtra3btn);

    SimulationUpgradesturEnergy1btn.disabled = SimulationUpgrades.turEnergy1.if;
    SimulationUpgradesturEnergy2btn.disabled = SimulationUpgrades.turEnergy2.if;
    SimulationUpgradesturEnergy3btn.disabled = SimulationUpgrades.turEnergy3.if;
    SimulationUpgradesturEnergy4btn.disabled = SimulationUpgrades.turEnergy4.if;
    SimulationUpgradesturEnergyOrigin1btn.disabled = SimulationUpgrades.turEnergyOrigin1.if;
    SimulationUpgradesturEnergyOrigin2btn.disabled = SimulationUpgrades.turEnergyOrigin2.if;
    SimulationUpgradesturEnergyOrigin3btn.disabled = SimulationUpgrades.turEnergyOrigin3.if;
    SimulationUpgradesturEnergyOrigin4btn.disabled = SimulationUpgrades.turEnergyOrigin4.if;
    SimulationUpgradeselse1btn.disabled = SimulationUpgrades.else1.if;
    SimulationUpgradeselse2btn.disabled = SimulationUpgrades.else2.if;
    SimulationUpgradeselse3btn.disabled = SimulationUpgrades.else3.if;
    SimulationUpgradeselse4btn.disabled = SimulationUpgrades.else4.if;

    IterationStrengthenProduce1btn.disabled = IterationStrengthen.Produce1.if;
    IterationStrengthenProduce2btn.disabled = IterationStrengthen.Produce2.if;
    IterationStrengthenProduce3btn.disabled = IterationStrengthen.Produce3.if;
    IterationStrengthenProduce4btn.disabled = IterationStrengthen.Produce4.if;
    IterationStrengthenReset1btn.disabled = IterationStrengthen.Reset1.if;
    IterationStrengthenReset2btn.disabled = IterationStrengthen.Reset2.if;
    IterationStrengthenReset3btn.disabled = IterationStrengthen.Reset3.if;
    IterationStrengthenReset4btn.disabled = IterationStrengthen.Reset4.if;
    IterationStrengthenAuto1btn.disabled = IterationStrengthen.Auto1.if;
    IterationStrengthenAuto2btn.disabled = IterationStrengthen.Auto2.if;
    IterationStrengthenAuto3btn.disabled = IterationStrengthen.Auto3.if;
    IterationStrengthenAuto4btn.disabled = IterationStrengthen.Auto4.if;

    IterationStrengthenExtra1btn.disabled = IterationStrengthen.Extra1.if;
    IterationStrengthenExtra2btn.disabled = IterationStrengthen.Extra2.if;
    IterationStrengthenExtra3btn.disabled = IterationStrengthen.Extra3.if;

    SimulationMachineλa1btn.disabled = SimulationMachine.λa1;
    SimulationMachineλa2btn.disabled = SimulationMachine.λa2;
    SimulationMachineλa3btn.disabled = SimulationMachine.λa3;
    SimulationMachineλa4btn.disabled = SimulationMachine.λa4;
    SimulationMachineλa5btn.disabled = SimulationMachine.λa5;
    SimulationMachineλb1btn.disabled = SimulationMachine.λb1;
    SimulationMachineλb2btn.disabled = SimulationMachine.λb2;
    SimulationMachineλb3btn.disabled = SimulationMachine.λb3;
    SimulationMachineλb4btn.disabled = SimulationMachine.λb4;
    SimulationMachineλb5btn.disabled = SimulationMachine.λb5;
    SimulationMachineλc1btn.disabled = SimulationMachine.λc1;
    SimulationMachineλc2btn.disabled = SimulationMachine.λc2;
    SimulationMachineαa1btn.disabled = SimulationMachine.αa1;
    SimulationMachineαa2btn.disabled = SimulationMachine.αa2;
    SimulationMachineαa3btn.disabled = SimulationMachine.αa3;
    SimulationMachineαb3btn.disabled = SimulationMachine.αb3;
    SimulationMachineαa4btn.disabled = SimulationMachine.αa4;
    SimulationMachineαb4btn.disabled = SimulationMachine.αb4;
    SimulationMachineαa5btn.disabled = SimulationMachine.αa5;
    SimulationMachineβa1btn.disabled = SimulationMachine.βa1;
    SimulationMachineβb1btn.disabled = SimulationMachine.βb1;
    SimulationMachineβa2btn.disabled = SimulationMachine.βa2;
    SimulationMachineβb2btn.disabled = SimulationMachine.βb2;
    SimulationMachineβa3btn.disabled = SimulationMachine.βa3;
    SimulationMachineβa4btn.disabled = SimulationMachine.βa4;
    SimulationMachineγa1btn.disabled = SimulationMachine.γa1;
    SimulationMachineγa2btn.disabled = SimulationMachine.γa2;
    SimulationMachineγb2btn.disabled = SimulationMachine.γb2;
    SimulationMachineγc2btn.disabled = SimulationMachine.γc2;
    SimulationMachineγa3btn.disabled = SimulationMachine.γa3;
    SimulationMachineγa4btn.disabled = SimulationMachine.γa4;
    SimulationMachineγb4btn.disabled = SimulationMachine.γb4;
    SimulationMachineγc4btn.disabled = SimulationMachine.γc4;
    SimulationMachineγa5btn.disabled = SimulationMachine.γa5;
    
    if (maxturEnergyinsimulation.gte("1.80e308") && experimentdoing.Simulation === "" && space === "inSimulation" && !experimentreward.SimulationExperiment5 && IteratedTimes.eq(0)) {
        completeSimulationBtn.classList.add('Unlocked');
        completeSimulationBtn.classList.remove('Locked');
    } else {
        completeSimulationBtn.classList.remove('Unlocked');
        completeSimulationBtn.classList.add('Locked');
    }
    if (space === "Simulation") {
        phase1tapsEl.forEach(elements => {
            elements.classList.remove('Unlocked');
            elements.classList.add('Locked');
        });
    } else if (space === "inStiumlation") {
        SimulationtapsEl.forEach(elements => {
            elements.classList.remove('Unlocked');
            elements.classList.add('Locked');
        });
    }

    // 这个执行顺序太烦了调不明白直接扔这了绝对没bug
    if (experimentreward.SimulationExperiment5) maxturEnergy = new Decimal("9e99999999");
    else maxturEnergy = new Decimal("1.80e308");
    if (IterationStrengthen.Extra1.if) maxSimulationData = new Decimal("9e99999999");
    else maxSimulationData = new Decimal("1.80e308");

    if (turEnergy.gte(maxturEnergy)) turEnergy = maxturEnergy;
    if (simulationData.gte(maxSimulationData)) {
        simulationData = maxSimulationData;
        if (Iterated.eq(0)) {
            setTimeout(() => {
                completeIteration();
            }, 2000);
        }
    }

    // 调整上边栏按钮
    beginSimulationbtn.classList.add('Locked');
    beginSimulationbtn.classList.remove('Unlocked');
    checkSimulationbtn.classList.add('Locked');
    checkSimulationbtn.classList.remove('Unlocked');
    backSimulationbtn.classList.add('Locked');
    backSimulationbtn.classList.remove('Unlocked');
    if (state === "Simulation") {
        beginSimulationbtn.classList.add('Unlocked');
        beginSimulationbtn.classList.remove('Locked');
    }
    if (state === "inSimulation" && space === "inSimulation" && (simulatedTimes.gt(0) || IteratedTimes.gt(0))) {
        checkSimulationbtn.classList.add('Unlocked');
        checkSimulationbtn.classList.remove('Locked');
    }
    if (state === "inSimulation" && space === "Simulation") {
        backSimulationbtn.classList.add('Unlocked');
        backSimulationbtn.classList.remove('Locked');
    }
    
    // 修改按钮样式
    if (!challengereward.TierresetNothing) {
        turEnergyTierBtn.classList.add('btn-reset');
        turEnergyTierBtn.classList.remove('btn');
    } else {
        turEnergyTierBtn.classList.add('btn');
        turEnergyTierBtn.classList.remove('btn-reset');
    }
    
    // 大乌龟
    if (turEnergy.gte("1.80e308") && !experimentreward.SimulationExperiment5 && IteratedTimes.eq(0)) {
        phase1tapsEl.forEach(elements => {
            elements.classList.remove('Unlocked');
            elements.classList.add('Locked');
        });
        
    }
    
    tips();
    if (remainTipType != newTipType) {
        Changetips();
        remainTipType = newTipType;
    }
    requestAnimationFrame(updateUI);
}