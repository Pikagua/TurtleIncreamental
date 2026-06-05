function updateUI() {
    // 结束模拟室
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

    // 0. settings
    if (experimentreward.SimulationExperiment5) maxturEnergy = new Decimal("9e99999999");
    else maxturEnergy = new Decimal("1.80e308");
    
    if (turEnergy.gte(maxturEnergy)) turEnergy = maxturEnergy;
    if (challengebuffs.clickPower) clickPower = turEnergyLevel;
    else clickPower = new Decimal(1);
    if (AmassOriginTimes.lt(20) || !challengebuffs.disabledOriginMilestone || !experimentbuffs.SimulationExperiment5) effectOriginMilestone7 = new Decimal(1);
    else effectOriginMilestone7 = new Decimal(10);
    if (challengebuffs.disabledOriginLevelup || challengebuffs.disabledOriginMilestone) effectClickOrigin = ((ten.pow(ClickOriginLevel)).pow(effectSimulationMachine.βa1));
    else effectClickOrigin = new Decimal(1);
    if (challengebuffs.disabledOriginLevelup) effectTierOrigin = ((new Decimal(0.03).plus(effectSimulationMachine.βb2)).mul(TierOriginLevel));
    else effectTierOrigin = new Decimal(0);
    if (challengebuffs.disabledOriginLevelup) effectOriginEnhance = new Decimal(0.5).mul(ten.pow(OriginEnhanceLevel));
    else effectOriginEnhance = new Decimal(0);
    if (challengereward.AmassTimesAffectturEnergy) effectturEnergyOriginChallenge6 = AmassOriginTimes.plus(1);
    else effectturEnergyOriginChallenge6 = new Decimal(1);
    if (challengebuffs.disabledturEnergyLevelup || challengebuffs.turEnergyTier) effectturEnergyTier = (TierEnhanceLevel.mul(effectSimulationMachine.αb4.plus(1)).plus(3)).pow(turEnergyTier).pow(effect1SimulationExperiment5);
    else effectturEnergyTier = new Decimal(1);
    if (!effect2SimulationExperiment3) effectOriginProduce = new Decimal(0);
    else if (challengereward.EfficientOriginProduce) effectOriginProduce = new Decimal(2000).pow(OriginProduceEnergyLevel);
    else effectOriginProduce = new Decimal(100).pow(OriginProduceEnergyLevel);
    effectturEnergyOrigin = new Decimal(0.5).mul(ten.pow(OriginEnhanceLevel));
    effectEnergyMachineA = new Decimal(0.2).mul(EnergyMachineALevel);
    EnergyEffection = effectEnergyMachineA.plus(effectEnergyMachineB).plus(effectEnergyMachineC).plus(effectEnergyMachineD).plus(effectEnergyMachineE);
    effectturEnergyCatalysis = new Decimal(1e4).pow(turEnergyCatalysisLevel);
    effectOriginCatalysis = new Decimal(2).pow(OriginCatalysisLevel);
    effectClickCatalysis = new Decimal(1e70).pow(ClickCatalysisLevel);
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
    if (SimulationMachine.αa1 && experimentbuffs.SimulationExperiment5) effectSimulationMachine.αa1 = new Decimal(1e15); else effectSimulationMachine.αa1 = new Decimal(1);
    if (SimulationMachine.αa2 && experimentbuffs.SimulationExperiment5) effectSimulationMachine.αa2 = Decimal.min(new Decimal("1e400").mul(effectClickCatalysis),new Decimal(1.2).pow(EfficientClickLevel)); else effectSimulationMachine.αa2 = new Decimal(1);
    if (SimulationMachine.αa3 && experimentbuffs.SimulationExperiment5) effectSimulationMachine.αa3 = turEnergyTier.mul(15); else effectSimulationMachine.αa3 = new Decimal(0);
    if (SimulationMachine.αb3 && experimentbuffs.SimulationExperiment5) effectSimulationMachine.αb3 = turEnergyLevel.div(120).floor(); else effectSimulationMachine.αb3 = new Decimal(0);
    if (SimulationMachine.αa4 && experimentbuffs.SimulationExperiment5) effectSimulationMachine.αa4 = Decimal.min("1e5000",SimulationPower.pow(30)); else effectSimulationMachine.αa4 = new Decimal(1);
    if (SimulationMachine.αb4 && experimentbuffs.SimulationExperiment5) effectSimulationMachine.αb4 = Decimal.min(ten,SimulationPower.pow(0.1)); else effectSimulationMachine.αb4 = new Decimal(0);
    if (SimulationMachine.αa5 && experimentbuffs.SimulationExperiment5) effectSimulationMachine.αa5 = new Decimal(600); else effectSimulationMachine.αa5 = new Decimal(0);
    if (SimulationMachine.βa1) effectSimulationMachine.βa1 = Decimal.min(new Decimal(4),(turEnergyOrigin.log10().pow(0.55)).mul(0.7).plus(1)); else effectSimulationMachine.βa1 = new Decimal(1);
    if (SimulationMachine.βa2) effectSimulationMachine.βa2 = new Decimal(50).pow(OriginProduceEnergyLevel); else effectSimulationMachine.βa2 = new Decimal(1);
    if (SimulationMachine.βb1) effectSimulationMachine.βb1 = effectClickOrigin; else effectSimulationMachine.βb1 = new Decimal(1);
    if (SimulationMachine.βb2) effectSimulationMachine.βb2 = new Decimal(0.02); else effectSimulationMachine.βb2 = new Decimal(0);
    if (SimulationMachine.βa3) effectSimulationMachine.βa3 = new Decimal(1.2); else effectSimulationMachine.βa3 = new Decimal(1);
    if (SimulationMachine.βa4) effectSimulationMachine.βa4 = effectturEnergyTier; else effectSimulationMachine.βa4 = new Decimal(1);
    effectSimulationPower = Decimal.max(new Decimal(1),SimulationPower.pow(degreeSimulationPower));
    effectSimulationRoom.Room1 = new Decimal(2).pow(SimulationRoomLevel.Room1);
    effectSimulationRoom.Room2 = new Decimal(2).pow(SimulationRoomLevel.Room2.plus(1));
    effectSimulationRoom.Room3 = new Decimal(2).pow(SimulationRoomLevel.Room3.plus(2));
    effectSimulationRoom.Room4 = new Decimal(2).pow(SimulationRoomLevel.Room4.plus(3));
    effectSimulationRoom.Room5 = new Decimal(2).pow(SimulationRoomLevel.Room5.plus(4));
    effectSimulationRoom.Room6 = new Decimal(2).pow(SimulationRoomLevel.Room6.plus(5));
    effectSimulationRoom.Room7 = new Decimal(2).pow(SimulationRoomLevel.Room7.plus(6));
    effectSimulationRoom.Room8 = new Decimal(2).pow(SimulationRoomLevel.Room8.plus(7));

    // 1. 更新显示的数字
    let autoClickerPersec = (autoClickers.mul(clickPower.mul(EfficientClickLevel.mul(new Decimal(challengereward.baseofEfficientClick).plus(1)).plus(1))).mul(Decimal.max(1,(((new Decimal(2).sub(challengebuffs.baseofHighspeedclicking).plus(challengereward.baseofHighspeedclicking))).pow(HighspeedClickingLevel)))).mul(effectturEnergyTier).mul(challengebuffs.turEnergy).mul(challengereward.turEnergy).mul((effectOriginEnhance.mul(turEnergyOrigin)).plus(1)).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βa2).mul(effectSimulationMachine.αa4)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2);
    let OriginProducePersec = new Decimal(0);
    if (OriginProduceEnergyLevel.gt(0) && challengebuffs.disabledOriginLevelup) {
        if (challengereward.EfficientOriginProduce) OriginProducePersec = (turEnergyOrigin.mul(new Decimal(1e16).mul(effectOriginProduce)).mul(challengereward.turEnergy).mul((effectOriginEnhance.mul(turEnergyOrigin)).plus(1)).mul(EfficientClickLevel.mul(new Decimal(challengereward.baseofEfficientClick).plus(1)).plus(1)).mul((((new Decimal(2).sub(challengebuffs.baseofHighspeedclicking).plus(challengereward.baseofHighspeedclicking)))).pow(HighspeedClickingLevel)).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βb1).mul(effectSimulationMachine.βa4).mul(effectSimulationMachine.αa4)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2);
        else OriginProducePersec = (turEnergyOrigin.mul(new Decimal(1e16).mul(effectOriginProduce)).div(60).mul(challengereward.turEnergy).mul(new Decimal(1).plus(effectOriginEnhance.mul(turEnergyOrigin))).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βb1).mul(effectSimulationMachine.βa4).mul(effectSimulationMachine.αa4)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2);
    }
    if (OriginProducePersec.gt(0)) disaplayturEnergyPersec.innerHTML = `通过自动点击器每秒获得${formatNumber(autoClickerPersec)}<span class="turEnergy">龟能</span><br>通过<span class="Origin">本源</span>生能每秒获得${formatNumber(OriginProducePersec)}<span class="turEnergy">龟能</span>`;
    else if (autoClickerPersec.gt(0)) disaplayturEnergyPersec.innerHTML = `通过自动点击器每秒获得${formatNumber(autoClickerPersec)}<span class="turEnergy">龟能</span>`;
    else disaplayturEnergyPersec.innerHTML = ``;
    if (space === "inSimulation" && page === "turEnergy") turEnergyCountBox.innerHTML = `你拥有<span class="turEnergy">${formatNumber(turEnergy)}</span>点<span class="turEnergy">龟能</span>`;
    else if (space === "inSimulation" && page === "BasicEnergy") turEnergyCountBox.innerHTML = `你拥有<span class="BasicEnergy">${formatNumber(BasicEnergy)}</span>点<span class="BasicEnergy">基本能</span>`;
    else if (space === "Simulation" && page === "Simulation") turEnergyCountBox.innerHTML = `你拥有<span class="simulation">${formatNumber(simulationData)}</span>点<span class="simulation">模拟数据</span>`;
    turEnergyLevelEl.textContent = formatNumber(turEnergyLevel);
    clickpower.textContent = formatNumber(clickPower);
    levelofAutoClicker.textContent = formatNumber(autoClickers);
    effectofAutoClicker.textContent = formatNumber(autoClickers);
    levelofEfficientClick.textContent = formatNumber(EfficientClickLevel);
    effectofEfficientClick.textContent = formatNumber(EfficientClickLevel.mul(new Decimal(challengereward.baseofEfficientClick).plus(1)).plus(1));
    baseofEfficientClick.textContent = formatNumber(new Decimal(challengereward.baseofEfficientClick).plus(1));
    levelofHighspeedClicking.textContent = formatNumber(HighspeedClickingLevel);
    effectofHighspeedClicking.textContent = formatNumber(((new Decimal(2).sub(challengebuffs.baseofHighspeedclicking).plus(challengereward.baseofHighspeedclicking))).pow(HighspeedClickingLevel));
    baseofHighspeedclicking.textContent = formatNumber(new Decimal(2).sub(challengebuffs.baseofHighspeedclicking).plus(challengereward.baseofHighspeedclicking));
    levelofturEnergyTier.textContent = formatNumber(turEnergyTier);
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
    levelofturEnergyCatalysis.textContent = formatNumber(turEnergyCatalysisLevel);
    effectofturEnergyCatalysis.textContent = formatNumber(effectturEnergyCatalysis);
    levelofOriginCatalysis.textContent = formatNumber(OriginCatalysisLevel);
    effectofOriginCatalysis.textContent = formatNumber(effectOriginCatalysis);
    levelofClickCatalysis.textContent = formatNumber(ClickCatalysisLevel);
    effectofClickCatalysis.textContent = formatNumber(effectClickCatalysis);
    levelofincreamentalSimulation.textContent = formatNumber(increamentalSimulationLevel);
    effectofincreamentalSimulation.textContent = formatNumber(effectincreamentalSimulation);
    leveloffirstSimulationRoom.textContent = formatNumber(SimulationRoomLevel.Room1);
    AmountoffirstSimulationRoom.textContent = formatNumber(SimulationRoomAmount.Room1);
    effectoffirstSimulationRoom.textContent = formatNumber(effectSimulationRoom.Room1);
    levelofsecondSimulationRoom.textContent = formatNumber(SimulationRoomLevel.Room2);
    AmountofsecondSimulationRoom.textContent = formatNumber(SimulationRoomAmount.Room2);
    effectofsecondSimulationRoom.textContent = formatNumber(effectSimulationRoom.Room2);
    
    turEnergyOriginDisplay.textContent = formatNumber(turEnergyOrigin);
    if (challengebuffs.disabledOriginLevelup) turEnergyOriginAmassAmount.textContent = formatNumber(Decimal.max(0,(((turEnergy.log10().sub(40)).div(2).mul(new Decimal(2).pow(OriginAmassFastenLevel)).mul(challengereward.turEnergyOriginAmount).mul(SimulationUpgrades.turEnergyOrigin1.num).mul(effectSimulationExperiment4).mul(effect2SimulationExperiment5).mul(effectOriginCatalysis)).pow(effect1SimulationExperiment3).pow(effectSimulationMachine.βa3)).floor()));
    else turEnergyOriginAmassAmount.textContent = formatNumber(Decimal.max(0,((turEnergy.log10().sub(40)).div(2).mul(challengereward.turEnergyOriginAmount).mul(SimulationUpgrades.turEnergyOrigin1.num).mul(effectSimulationExperiment4).mul(effect2SimulationExperiment5).mul(effectOriginCatalysis)).pow(effect1SimulationExperiment3).pow(effectSimulationMachine.βa3)).floor());
    effectofturEnergyOrigin.textContent = formatNumber(effectturEnergyOrigin.mul(turEnergyOrigin).plus(1));
    effectofperturEnergyOrigin.textContent = formatNumber(effectturEnergyOrigin);
    AmassOrigintimes.textContent = formatNumber(AmassOriginTimes);

    if (new Decimal(2).pow((turEnergy.log10().div(1000)).sub(1)).gte(1)) BasicEnergyChangeAmount.textContent = formatNumber(Decimal.max(0,new Decimal(2).pow((turEnergy.log10().div(1000)).sub(1))));
    else BasicEnergyChangeAmount.textContent = '0';
    EnergyEffectiondisplay.textContent = formatNumber(EnergyEffection);
    SolarEnergydisplay.textContent = formatNumber(SolarEnergy);
    displaySolarEnergypersec.textContent = formatNumber(EnergyEffection);

    SimulationTimesDisplay.textContent = formatNumber(simulatedTimes);
    effectofSimulationUpgradesturEnergy3.textContent = formatNumber(effectSimulationUpgradesturEnergy3);
    effectofSimulationUpgradesturEnergy4.textContent = formatNumber(effectSimulationUpgradesturEnergy4);
    SimulationMachineBytecountmax.textContent = formatNumber(SimulationMachineBtye);
    SimulationMachineBytecount.textContent = formatNumber(SimulationMachineBtye.sub(SimulationMachineBtyeUsed));

    effectofSimulationMachineαa2.textContent = formatNumber(Decimal.min(new Decimal("1e400").mul(effectClickCatalysis),new Decimal(1.2).pow(EfficientClickLevel)));
    effectofSimulationMachineαa3.textContent = formatNumber(turEnergyTier.mul(15));
    effectofSimulationMachineαb3.textContent = formatNumber(turEnergyLevel.div(120).floor());
    effectofSimulationMachineαa4.textContent = formatNumber(Decimal.min("1e5000",SimulationPower.pow(30)));
    effectofSimulationMachineαb4.textContent = formatNumber(Decimal.min(ten,SimulationPower.pow(0.1)));
    effectofSimulationMachineβa1.textContent = formatNumber(Decimal.min(new Decimal(4),(turEnergyOrigin.log10().pow(0.55)).mul(0.7).plus(1)));
    effectofSimulationMachineβa2.textContent = formatNumber(new Decimal(50).pow(OriginProduceEnergyLevel));

    SimumlationPowerCount.textContent = formatNumber(SimulationPower.floor());
    degreeofSimumlationPower.textContent = formatNumber(degreeSimulationPower);
    effectofSimumlationPower.textContent = formatNumber(effectSimulationPower);

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
    increamentalSimulationCost.textContent = formatNumber(PriceofBuyincreamentalSimulation(increamentalSimulationLevel));
    priceturEnergySimulationMachineByte.textContent = formatNumber(PriceofBuyturEnergySimulationMachineByte(BuySimulationMachineByte.turEnergy));
    priceturEnergyOriginSimulationMachineByte.textContent = formatNumber(PriceofBuyturEnergyOriginSimulationMachineByte(BuySimulationMachineByte.turEnergyOrigin));
    turEnergyCatalysisCost.textContent = formatNumber(PriceofBuyturEnergyCatalysis(turEnergyCatalysisLevel));
    OriginCatalysisCost.textContent = formatNumber(PriceofBuyOriginCatalysis(OriginCatalysisLevel));
    ClickCatalysisCost.textContent = formatNumber(PriceofBuyClickCatalysis(ClickCatalysisLevel));
    priceSimulationDataSimulationMachineByte.textContent = formatNumber(PriceofBuySimulationDataSimulationMachineByte(BuySimulationMachineByte.SimulationData));
    firstSimulationRoomCost.textContent = formatNumber(PriceofBuyfirstSimulationRoom(SimulationRoomLevel.Room1));
    secondSimulationRoomCost.textContent = formatNumber(PriceofBuysecondSimulationRoom(SimulationRoomLevel.Room2));
    
    // 折叠文本
    if (SimulationMachineFold) {
        textSimulationMachine.classList.add('Locked');
        textSimulationMachine.classList.remove('Unlocked');
    } else {
        textSimulationMachine.classList.add('Unlocked');
        textSimulationMachine.classList.remove('Locked');
    }

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
    if (challengedoing.Tier === "" && challengedoing.Origin === "") {
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
    if (!(challengedoing.Tier === "") || !(challengedoing.Origin === "") || experimentdoing.Simulation === "") {
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
        challengePercent = Decimal.min(new Decimal(((turEnergyLevel.div(challengeGoal.Tier)).mul(new Decimal(100))).toFixed(2)),100);
        if (turEnergyLevel.gte(challengeGoal.Tier) && !challengeGoal.Tier.eq(0)) {
            challengeprogress.Tier = "finished";
        }
        else challengeprogress.Tier = "";
    } else if (challengeGoaltype.Origin) {
        challengePercent = Decimal.min(new Decimal(((turEnergyTier.div(challengeGoal.Origin)).mul(100)).toFixed(2)),100);
        if (turEnergyTier.gte(challengeGoal.Origin) && !challengeGoal.Origin.eq(0)) {
            challengeprogress.Origin = "finished";
        }
        else challengeprogress.Origin = "";
    } else if (experimentGoaltype.Simulation) {
        experimentPercent = Decimal.max(0,Decimal.min(new Decimal((((turEnergy.log10()).div(experimentGoal.Simulation.log10())).mul(100)).toFixed(2)),100));
        if (turEnergy.gte(experimentGoal.Simulation) && !experimentGoal.Simulation.eq(0)) {
            experimentprogress.Simulation = "finished";
        }
        else experimentprogress.Simulation = "";
    }
    if (challengeprogress.Tier === "finished" || (challengedoing.Tier === "" && challengeprogress.Origin === "finished")) {
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
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment1", startSimulationExperiment1btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment2", startSimulationExperiment2btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment3", startSimulationExperiment3btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment4", startSimulationExperiment4btn);
    challengeBtnClass(experimentdoing.Simulation, "SimulationExperiment5", startSimulationExperiment5btn);

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

    tapState = [0,0,0,0,0,0,0,0,0,0,0];
    setTapItem(0, space === "inSimulation" && page === "turEnergy", turEnergyLeveluptap);  // 第一项永远解锁
    setTapItem(1, space === "inSimulation" && page === "turEnergy" && (turEnergyTier.gte(3) || AmassOriginTimes.gte(2) || (SimulationUpgrades.else1.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5)), turEnergychallengetap);
    setTapItem(2, space === "inSimulation" && page === "turEnergy" && (challengereward.turEnergyOrigin || AmassOriginTimes.gt(0) || (SimulationUpgrades.turEnergyOrigin3.if && experimentbuffs.SimulationUpgrades && experimentbuffs.SimulationExperiment5)), turEnergyOrigintap);
    setTapItem(3, space === "inSimulation" && page === "turEnergy" && AmassOriginTimes.gte(2), turEnergyOriginMilestonetap);
    setTapItem(4, space === "inSimulation" && page === "BasicEnergy", EnergyMachinetap);
    setTapItem(5, space === "inSimulation" && page === "BasicEnergy", SolarEnergytap);
    setTapItem(6, space === "Simulation" && page === "Simulation", SimulationUpgradestap);
    setTapItem(7, space === "Simulation" && page === "Simulation" && ((SimulationUpgrades.turEnergy4.if && SimulationUpgrades.turEnergyOrigin4.if && SimulationUpgrades.else4.if) || experimentfinished.SimulationExperiment1 != 0), SimulationExperimenttap);
    setTapItem(8, space === "Simulation" && page === "Simulation" && experimentreward.SimulationExperiment1, SimulationMachinetap);
    setTapItem(9, space === "Simulation" && page === "Simulation" && SimulationMachine.λb1, SimulationRoomtap);
    setTapItem(10, space === "Simulation" && page === "Simulation" && (experimentreward.SimulationExperiment2 || experimentreward.SimulationExperiment3), SimulationAutotap);

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
                if (j===5) SolarEnergytap.style.left = posX + '%';
                if (j===6) SimulationUpgradestap.style.left = posX + '%';
                if (j===7) SimulationExperimenttap.style.left = posX + '%';
                if (j===8) SimulationMachinetap.style.left = posX + '%';
                if (j===9) SimulationRoomtap.style.left = posX + '%';
                if (j===10) SimulationAutotap.style.left = posX + '%';
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

    uptapState = [0,0,0];
    setupTapItem(0, space === "inSimulation", turEnergyuptap);
    setupTapItem(1, space === "inSimulation" && turEnergy.gte("1e1000"), BasicEnergyuptap);
    setupTapItem(2, space === "Simulation", Simulationuptap);

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

    if (challengebuffs.disabledChallenge === 1) {
        challengefinished.turEnergyTierChallenge1 = 0;
        maxturEnergyTierChallenge1.textContent = 0;
    } else maxturEnergyTierChallenge1.textContent = challengereward.ChallengeTimes;
    if (challengebuffs.disabledChallenge === 2 || !experimentbuffs.SimulationExperiment5) {
        challengefinished.turEnergyTierChallenge2 = 0;
        maxturEnergyTierChallenge2.textContent = 0;
    } else maxturEnergyTierChallenge2.textContent = challengereward.ChallengeTimes;
    if (challengebuffs.disabledChallenge === 3 || !experimentbuffs.SimulationExperiment5) {
        challengefinished.turEnergyTierChallenge3 = 0;
        maxturEnergyTierChallenge3.textContent = 0;
    } else maxturEnergyTierChallenge3.textContent = challengereward.ChallengeTimes;

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
    if (challengefinished.turEnergyTierChallenge1 === challengereward.ChallengeTimes || challengebuffs.disabledChallenge === 1) {
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
    if (challengefinished.turEnergyTierChallenge2 === challengereward.ChallengeTimes || challengebuffs.disabledChallenge === 2 || !experimentbuffs.SimulationExperiment5) {
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
    if (challengefinished.turEnergyTierChallenge3 === challengereward.ChallengeTimes || challengebuffs.disabledChallenge === 3 || !experimentbuffs.SimulationExperiment5) {
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
    if (challengefinished.turEnergyTierChallenge4 === 1) {
        updateturEnergyTierChallenge4(1,NaN,true);
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
    if (challengefinished.turEnergyTierChallenge5 === 1) {
        updateturEnergyTierChallenge5(1,NaN,turEnergyTier.div(2),NaN);
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
    if (challengefinished.turEnergyTierChallenge6 === 1) {
        updateturEnergyTierChallenge6(1,NaN,true);
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
    if (challengefinished.turEnergyOriginChallenge1 === 2) {
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
    if (challengefinished.turEnergyOriginChallenge2 === 2) {
        updateturEnergyOriginChallenge2(2,NaN,NaN,4,NaN);
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
    if (challengefinished.turEnergyOriginChallenge3 === 1) {
        updateturEnergyOriginChallenge3(1,NaN,NaN,true);
        startturEnergyOriginChallenge3btn.textContent = "已完成";
        startturEnergyOriginChallenge3btn.disabled = true;
    } else startturEnergyOriginChallenge3btn.disabled = false;

    function updateturEnergyOriginChallenge4(progress,goal,reward) {
        progressturEnergyOriginChallenge4.textContent = progress;
        goalturEnergyOriginChallenge4.textContent = goal;
        challengereward.EfficientOriginProduce = reward;
    }
    if (challengefinished.turEnergyOriginChallenge4 === 0) updateturEnergyOriginChallenge4(0,15,false);
    if (challengefinished.turEnergyOriginChallenge4 === 1) {
        updateturEnergyOriginChallenge4(1,NaN,true);
        startturEnergyOriginChallenge4btn.textContent = "已完成";
        startturEnergyOriginChallenge4btn.disabled = true;
    } else startturEnergyOriginChallenge4btn.disabled = false;

    function updateturEnergyOriginChallenge5(progress,goal,reward) {
        progressturEnergyOriginChallenge5.textContent = progress;
        goalturEnergyOriginChallenge5.textContent = goal;
        challengereward.TierresetNothing= reward;
    }
    if (challengefinished.turEnergyOriginChallenge5 === 0) updateturEnergyOriginChallenge5(0,38,false);
    if (challengefinished.turEnergyOriginChallenge5 === 1) {
        updateturEnergyOriginChallenge5(1,NaN,true);
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
    if (challengefinished.turEnergyOriginChallenge6 === 1) {
        updateturEnergyOriginChallenge6(1,NaN,true,effectturEnergyOriginChallenge6,NaN);
        startturEnergyOriginChallenge6btn.textContent = "已完成";
        startturEnergyOriginChallenge6btn.disabled = true;
    } else startturEnergyOriginChallenge6btn.disabled = false;

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
    if (experimentdoing.Simulation === "SimulationExperiment1") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验1`;
    if (experimentdoing.Simulation === "SimulationExperiment2") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验2`;
    if (experimentdoing.Simulation === "SimulationExperiment3") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验3`;
    if (experimentdoing.Simulation === "SimulationExperiment4") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验4`;
    if (experimentdoing.Simulation === "SimulationExperiment5") whereExperiment.Simulation = `<span class="simulation">模拟</span>实验5`;
    const challengeParts = [];
    if (whereExperiment.Simulation) challengeParts.push(whereExperiment.Simulation);
    if (whereChallenge.Origin) challengeParts.push(whereChallenge.Origin);
    if (whereChallenge.Tier) challengeParts.push(whereChallenge.Tier);

    if (challengeParts.length === 0) {
        if (turEnergy.lt("1.80e308") && simulatedTimes.eq(0)) WhereYouAre.innerHTML = "你就在这里";
        else if (turEnergy.lt("1.80e308") && state === "inSimulation") WhereYouAre.innerHTML = `你在<span class="simulation">模拟</span>内`;
        else if (state === "inSimulation") WhereYouAre.innerHTML = "你或许马上就不在这里了";
        else if (state === "Simulation") WhereYouAre.innerHTML = `你在<span class="simulation">模拟</span>外`;
        if (experimentreward.SimulationExperiment5 && state === "inSimulation") WhereYouAre.innerHTML = `你在<span class="simulation">模拟</span>内`;
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

    function disablebtn(condition, theBtn) {
        if (condition) theBtn.disabled = false;
        else theBtn.disabled = true;
    }
    disablebtn(turEnergy.gte(PriceofturEnergyLevelup(turEnergyLevel)) && turEnergyLevel.lt(maxLevelup), turEnergyLevelUpBtn);
    disablebtn(turEnergy.gte(PriceofBuyautoClicker(autoClickers)) && autoClickers.lt(maxLevelup) && challengebuffs.AutoClicker && challengebuffs.disabledturEnergyLevelup && !SimulationMachine.βb1, autoClickerBtn);
    disablebtn(turEnergy.gte(PriceofBuyEfficientClick(EfficientClickLevel)) && EfficientClickLevel.lt(maxLevelup) && challengebuffs.disabledturEnergyLevelup && experimentbuffs.SimulationExperiment5, EfficientClickBtn);
    disablebtn(turEnergy.gte(PriceofBuyHighspeedClicking(HighspeedClickingLevel)) && HighspeedClickingLevel.lt(maxLevelup) && challengebuffs.disabledturEnergyLevelup, HighspeedClickingBtn);
    disablebtn(turEnergyLevel.gte(PriceofturEnergyTierup(turEnergyTier)) && turEnergyTier.lt(maxLevelup) && challengebuffs.turEnergyTier, turEnergyTierBtn);
    disablebtn(turEnergy.gte(PriceofBuyTierEnhance(TierEnhanceLevel)) && TierEnhanceLevel.lt(maxLevelup) && challengebuffs.disabledturEnergyLevelup, TierEnhanceBtn);
    disablebtn(((turEnergy.log10().sub(40).div(2).mul(challengereward.turEnergyOriginAmount).mul(SimulationUpgrades.turEnergyOrigin1.num)).floor()).gt(0), turEnergyOriginAmassbtn);
    disablebtn(turEnergyOrigin.gte(PriceofBuyOriginAmassFasten(OriginAmassFastenLevel)) && challengebuffs.disabledOriginLevelup, OriginAmassFastenBtn);
    disablebtn(turEnergyOrigin.gte(PriceofBuyOriginProduceEnergy(OriginProduceEnergyLevel)) && challengebuffs.disabledOriginLevelup && effect2SimulationExperiment3, OriginProduceEnergyBtn);
    disablebtn(turEnergyOrigin.gte(PriceofBuyClickOrigin(ClickOriginLevel)) && challengebuffs.disabledOriginLevelup, ClickOriginBtn);
    disablebtn(turEnergyOrigin.gte(PriceofBuyTierOrigin(TierOriginLevel)) && challengebuffs.disabledOriginLevelup, TierOriginBtn);
    disablebtn(turEnergyOrigin.gte(PriceofBuyOriginEnhance(OriginEnhanceLevel)) && challengebuffs.disabledOriginLevelup, OriginEnhanceBtn);
    disablebtn(simulationData.gte(PriceofBuyincreamentalSimulation(increamentalSimulationLevel)), increamentalSimulationBtn);
    disablebtn(turEnergy.gte(PriceofBuyturEnergySimulationMachineByte(BuySimulationMachineByte.turEnergy)), buyturEnergySimulationMachineByteBtn);
    disablebtn(turEnergyOrigin.gte(PriceofBuyturEnergyOriginSimulationMachineByte(BuySimulationMachineByte.turEnergyOrigin)), buyturEnergyOriginSimulationMachineByteBtn);
    disablebtn(simulationData.gte(PriceofBuySimulationDataSimulationMachineByte(BuySimulationMachineByte.SimulationData)), buySimulationDataSimulationMachineByteBtn);
    if (state === "inSimulation") {SimulationMachineResetBtn.disabled = true; SimulationMachineResetBtn.innerHTML = `已在<span class="simulation">模拟</span>中`;}
    else {SimulationMachineResetBtn.disabled = false; SimulationMachineResetBtn.innerHTML = `重置<span class="simulation">模拟机</span>Byte分配`;}
    disablebtn(simulationData.gte(PriceofBuyfirstSimulationRoom(SimulationRoomLevel.Room1)), firstSimulationRoomBtn);
    disablebtn(simulationData.gte(PriceofBuysecondSimulationRoom(SimulationRoomLevel.Room2)), secondSimulationRoomBtn);
    disablebtn(!experimentbuffs.SimulationExperiment5, SimulationMachineαmainbtn);
    disablebtn(turEnergy.gte("1.8e308"), completeSimulation2);
    if (turEnergy.gte("1.8e308")) completeSimulation2Text.innerHTML = `${formatNumber((effectincreamentalSimulation.div(2).mul(new Decimal(2).pow(turEnergy.log10().div(308)))).floor())}<span class="simulation">模拟数据</span>`;
    else completeSimulation2Text.innerHTML = `需要1.80e308<span class="turEnergy">龟能</span>`;
    disablebtn((new Decimal(2).pow((turEnergy.log10().div(1000)).sub(1))).gte(1), BasicEnergyChangebtn);
    disablebtn(BasicEnergy.gte(PriceofBuyEnergyMachineA(EnergyMachineALevel)), EnergyMachineABtn);
    disablebtn(SolarEnergy.gte(PriceofBuyturEnergyCatalysis(turEnergyCatalysisLevel)), turEnergyCatalysisBtn);
    disablebtn(SolarEnergy.gte(PriceofBuyOriginCatalysis(OriginCatalysisLevel)), OriginCatalysisBtn);
    disablebtn(SolarEnergy.gte(PriceofBuyClickCatalysis(ClickCatalysisLevel)), ClickCatalysisBtn);

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
    UnlockUpgrades(turEnergyLevel.gte(6), autoClickerEl);
    UnlockUpgrades(turEnergyLevel.gte(8), EfficientClickEl);
    UnlockUpgrades(turEnergyLevel.gte(12), HighspeedClickingEl);
    UnlockUpgrades(turEnergyLevel.gte(60) || turEnergyTier.gt(0), turEnergyTierEl);
    UnlockUpgrades(turEnergyLevel.gte(100) || TierEnhanceLevel.gt(0), TierEnhanceEl);
    UnlockUpgrades(AmassOriginTimes.gt(0), OriginAmassFastenEl);
    UnlockUpgrades(AmassOriginTimes.gt(0), OriginProduceEnergyEl);
    UnlockUpgrades(AmassOriginTimes.gt(0), ClickOriginEl);
    UnlockUpgrades(AmassOriginTimes.gt(0), TierOriginEl);
    UnlockUpgrades(AmassOriginTimes.gte(2000), OriginEnhanceEl);
    UnlockUpgrades(true, EnergyMachineAEl);
    UnlockUpgrades(((AmassOriginTimes.gt(0) || SimulationUpgrades.turEnergyOrigin3.if) && challengereward.turEnergyOrigin) || challengedoing.Origin != "" || challengefinished.turEnergyOriginChallenge1 != 0 || challengefinished.turEnergyOriginChallenge2 != 0 || challengefinished.turEnergyOriginChallenge3 != 0 || challengefinished.turEnergyOriginChallenge4 != 0 || challengefinished.turEnergyOriginChallenge5 != 0 || challengefinished.turEnergyOriginChallenge6 != 0, turEnergyOriginChallengeEl);
    UnlockUpgrades(SimulationUpgrades.turEnergy4.if && SimulationUpgrades.turEnergyOrigin4.if && SimulationUpgrades.else4.if, increamentalSimulationEl);
    UnlockUpgrades(SimulationMachine.λb1, firstSimulationRoomEl);
    UnlockUpgrades(SimulationMachine.λb2, secondSimulationRoomEl);
    UnlockUpgrades(true, turEnergyCatalysisEl);
    UnlockUpgrades(true, OriginCatalysisEl);
    UnlockUpgrades(true, ClickCatalysisEl);

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
    UnlockUpgrade(turEnergyLevel.gte(6) && (challengereward.BuyMaxAutoClicker || challengereward.BuyMaxturEnergy) && challengebuffs.AutoClicker && challengebuffs.disabledturEnergyLevelup && !SimulationMachine.βb1, autoClickerBuyMaxBtn);
    UnlockUpgrade(challengereward.BuyMaxturEnergy, turEnergyLevelupBuyMaxBtn);
    UnlockUpgrade(turEnergyLevel.gte(8) && challengereward.BuyMaxturEnergy && challengebuffs.disabledturEnergyLevelup && experimentbuffs.SimulationExperiment5, EfficientClickBuyMaxBtn);
    UnlockUpgrade(turEnergyLevel.gte(12) && challengereward.BuyMaxturEnergy && challengebuffs.disabledturEnergyLevelup, HighspeedClickingBuyMaxBtn);
    UnlockUpgrade((turEnergyLevel.gte(60) || turEnergyTier.gt(0)) && challengereward.BuyMaxturEnergy, turEnergyTierBuyMaxBtn);
    UnlockUpgrade((turEnergyLevel.gte(100) || TierEnhanceLevel.gt(0)) && challengereward.BuyMaxturEnergy && challengebuffs.disabledturEnergyLevelup, TierEnhanceBuyMaxBtn);
    UnlockUpgrade(experimentreward.SimulationExperiment1, experimentphase1);
    UnlockUpgrade(experimentreward.SimulationExperiment2, turEnergyAuto);
    UnlockUpgrade(experimentreward.SimulationExperiment3, turEnergyOriginAuto);
    UnlockUpgrade(SimulationMachine.λa1, SimulationExperiment4);
    UnlockUpgrade(experimentreward.SimulationExperiment4, SimulationMachineλc);
    UnlockUpgrade(SimulationMachine.λa2, SimulationExperiment5);
    UnlockUpgrade(SimulationMachine.λc1, SimulationMachineβ);
    UnlockUpgrade(state === "inSimulation" && experimentreward.SimulationExperiment5, completeSimulation2);

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

    SimulationMachineλa1btn.disabled = SimulationMachine.λa1;
    SimulationMachineλa2btn.disabled = SimulationMachine.λa2;
    SimulationMachineλb1btn.disabled = SimulationMachine.λb1;
    SimulationMachineλb2btn.disabled = SimulationMachine.λb2;
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
    
    if (turEnergy.gte("1.80e308") && experimentdoing.Simulation === "" && space === "inSimulation" && !experimentreward.SimulationExperiment5) {
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
    if (state === "inSimulation" && space === "inSimulation" && simulatedTimes.gt(0)) {
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
    if (turEnergy.gte("1.80e308") && !experimentreward.SimulationExperiment5) {
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