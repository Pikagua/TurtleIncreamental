function turEnergyLevelup() {
    if (turEnergy.gte(PriceofturEnergyLevelup(turEnergyLevel))) {
        turEnergy = turEnergy.sub(PriceofturEnergyLevelup(turEnergyLevel));
        turEnergyLevel = turEnergyLevel.plus(1);   
    }
}
function PriceofturEnergyLevelup(num) {
    if (num.lt((new Decimal(300).plus(challengereward.delayScalingturEnergyLevelup).plus(effectSimulationMachine.αa5)))) {
        return (ten.pow(num.sqrt()).mul(challengebuffs.turEnergyTierChallenge3Price) ).floor();
    } else if (num.lt(new Decimal(1000).plus(effectSimulationMachine.αa3))) {
        return ((ten.pow((new Decimal(300).plus(challengereward.delayScalingturEnergyLevelup).plus(effectSimulationMachine.αa5)).sqrt()).mul(new Decimal(1.3).pow(num.sub(300).sub(challengereward.delayScalingturEnergyLevelup).sub(effectSimulationMachine.αa5))).mul(challengebuffs.turEnergyTierChallenge3Price)).pow(effect2SimulationExperiment2)).floor();
    } else {
        return ((ten.pow((new Decimal(300).plus(challengereward.delayScalingturEnergyLevelup).plus(effectSimulationMachine.αa5)).sqrt()).mul(new Decimal(1.3).pow(new Decimal(999).sub(300).sub(challengereward.delayScalingturEnergyLevelup).sub(effectSimulationMachine.αa5).plus(effectSimulationMachine.αa3))).mul(new Decimal(1.7).pow(num.sub(999).sub(effectSimulationMachine.αa3))).mul(challengebuffs.turEnergyTierChallenge3Price)).pow(effect2SimulationExperiment2)).floor();
    }
}
function BuyMaxturEnergyLevelup() {
    for (let i=new Decimal(turEnergyLevel); PriceofturEnergyLevelup(i).lte(turEnergy); i=i.plus(1)) {
        turEnergy = turEnergy.sub(PriceofturEnergyLevelup(i));
        turEnergyLevel = turEnergyLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}
        
function BuyautoClicker() {
    if (turEnergy.gte(PriceofBuyautoClicker(autoClickers)) ) {
        turEnergy = turEnergy.sub(PriceofBuyautoClicker(autoClickers)) ;
        autoClickers = autoClickers.plus(1);
    }
}
function PriceofBuyautoClicker(num) {
    if (num.lte(0)) return (new Decimal(60).mul(challengebuffs.turEnergyTierChallenge3Price)).pow(effect2SimulationExperiment2);
    if (num.lt(10000)) {
        return (((new Decimal(40).mul((new Decimal(5).pow(num.ln()))).plus(60)).mul(challengebuffs.turEnergyTierChallenge3Price)).pow(effect2SimulationExperiment2)).floor();
    } else {
        return (((new Decimal(40).mul((new Decimal(5).pow(new Decimal(9999).ln())).mul(new Decimal(6).pow(num.ln())).plus(60))).mul(challengebuffs.turEnergyTierChallenge3Price)).pow(effect2SimulationExperiment2)).floor();
    }
}
function BuyMaxautoClicker() {
    for (let i=autoClickers; PriceofBuyautoClicker(i).mul(10000).lt(turEnergy); i = i.plus(10000)) {
        if (i.plus(10000).gte(maxLevelup)) break;
        if (PriceofBuyautoClicker(i.plus(10000)).mul(10000).lt(turEnergy)) {
            turEnergy = turEnergy.sub(PriceofBuyautoClicker(i).mul(10000));
            autoClickers = autoClickers.plus(10000);
        } else break;
    }
    for (let i=autoClickers; PriceofBuyautoClicker(i).lte(turEnergy); i = i.plus(1)) {
        turEnergy = turEnergy.sub(PriceofBuyautoClicker(i));
        autoClickers = autoClickers.plus(1);
        if (i.gte(maxLevelup)) break;
    }
    restartAutoClicker();
}

function BuyEfficientClick() {
    if (turEnergy.gte(PriceofBuyEfficientClick(EfficientClickLevel)) ) {
        turEnergy = turEnergy.sub(PriceofBuyEfficientClick(EfficientClickLevel));
        EfficientClickLevel = EfficientClickLevel.plus(1);
    }
}
function PriceofBuyEfficientClick(num) {
    if (num.lte(0)) return (new Decimal(500).mul(challengebuffs.turEnergyTierChallenge3Price)).pow(effect2SimulationExperiment2);
    return (((new Decimal(500).mul(new Decimal(3).pow(num.plus(num.ln()))).plus(500)).mul(challengebuffs.turEnergyTierChallenge3Price)).pow(effect2SimulationExperiment2)).floor();
}
function BuyMaxEfficientClick() {
    for (let i=EfficientClickLevel; PriceofBuyEfficientClick(i).mul(10000).lt(turEnergy); i = i.plus(10000)) {
        if (i.plus(10000).gte(maxLevelup)) break;
        if (PriceofBuyEfficientClick(i.plus(10000)).mul(10000).lt(turEnergy)) {
            turEnergy = turEnergy.sub(PriceofBuyEfficientClick(i).mul(10000));
            EfficientClickLevel = EfficientClickLevel.plus(10000);
        } else break;
    }
    for (let i=EfficientClickLevel; PriceofBuyEfficientClick(i).lte(turEnergy); i = i.plus(1)) {
        turEnergy = turEnergy.sub(PriceofBuyEfficientClick(i));
        EfficientClickLevel = EfficientClickLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}

function BuyHighspeedClicking() {
    if (turEnergy.gte(PriceofBuyHighspeedClicking(HighspeedClickingLevel) )) {
        turEnergy = turEnergy.sub(PriceofBuyHighspeedClicking(HighspeedClickingLevel));
        HighspeedClickingLevel = HighspeedClickingLevel.plus(1);
        restartAutoClicker();
    }
}
function PriceofBuyHighspeedClicking(num) {
    if (num.lt(5)) {
        return ((new Decimal(2000).mul(ten.pow(num)).mul(challengebuffs.turEnergyTierChallenge3Price)).pow(effect2SimulationExperiment2)).floor();
    } else if (num.lt(150)) {
        return ((new Decimal(2000).mul(ten.pow(4)).mul(new Decimal(35).pow(num.sub(4))).mul(challengebuffs.turEnergyTierChallenge3Price)).pow(effect2SimulationExperiment2)).floor();
    } else if (num.lt(500)) {
        return ((new Decimal(2000).mul(ten.pow(4)).mul(new Decimal(35).pow(new Decimal(149).sub(4))).mul(new Decimal(100).pow(num.sub(149))).mul(challengebuffs.turEnergyTierChallenge3Price)).pow(effect2SimulationExperiment2)).floor();
    } else {
        return ((new Decimal(2000).mul(ten.pow(4)).mul(new Decimal(35).pow(new Decimal(149).sub(4))).mul(new Decimal(500).pow(num.sub(149))).mul(challengebuffs.turEnergyTierChallenge3Price)).pow(effect2SimulationExperiment2)).floor();
    }
}
function BuyMaxHighspeedClicking() {
    for (let i=HighspeedClickingLevel; PriceofBuyHighspeedClicking(i).mul(10000).lt(turEnergy); i = i.plus(10000)) {
        if (i.plus(10000).gte(maxLevelup)) break;
        if (PriceofBuyHighspeedClicking(i.plus(10000)).mul(10000).lt(turEnergy)) {
            turEnergy = turEnergy.sub(PriceofBuyHighspeedClicking(i).mul(10000));
            HighspeedClickingLevel = HighspeedClickingLevel.plus(10000);
        } else break;
    }
    for (let i=HighspeedClickingLevel; PriceofBuyHighspeedClicking(i).lte(turEnergy); i = i.plus(1)) {
        turEnergy = turEnergy.sub(PriceofBuyHighspeedClicking(i));
        HighspeedClickingLevel = HighspeedClickingLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
    restartAutoClicker();
}

function turEnergyTierup() {
    if (turEnergyLevel.gte(PriceofturEnergyTierup(turEnergyTier)) ) {
        turEnergyTier = turEnergyTier.plus(1);
        turEnergyTierReset();
    }
}
function PriceofturEnergyTierup(num) {
    if (num.plus(TierEnhanceLevel).gte(42) && !experimentbuffs.SimulationExperiment4) return new Decimal("9e99999");
    if (num.lt(new Decimal(40).plus(effectSimulationMachine.αb3))) {
        return ((new Decimal(60).plus(new Decimal(40).mul(num))).pow(effect2SimulationExperiment2)).floor();
    } else if (num.lt(200)) {
        return ((new Decimal(60).plus(new Decimal(40).mul(new Decimal(39).plus(effectSimulationMachine.αb3))).plus(new Decimal(80).mul(num.sub(39).sub(effectSimulationMachine.αb3)))).pow(effect2SimulationExperiment2)).floor();
    } else {
        return ((new Decimal(60).plus(new Decimal(40).mul(new Decimal(39).plus(effectSimulationMachine.αb3))).plus(new Decimal(80).mul(num.sub(39).sub(effectSimulationMachine.αb3))).plus(num.sub(200).mul(num.sub(201)).mul(2))).pow(effect2SimulationExperiment2)).floor();
    }
}
function BuyMaxturEnergyTier() {
    for (let i=turEnergyTier; PriceofturEnergyTierup(i).lte(turEnergyLevel); i = i.plus(1)) {
        turEnergyTier = turEnergyTier.plus(1);
        turEnergyTierReset();
        if (i.gte(maxLevelup)) break;
    }
}

function BuyTierEnhance() {
    if (turEnergy.gte(PriceofBuyTierEnhance(TierEnhanceLevel)) ) {
        turEnergy = turEnergy.sub(PriceofBuyTierEnhance(TierEnhanceLevel));
        TierEnhanceLevel = TierEnhanceLevel.plus(1);
    }
}
function PriceofBuyTierEnhance(num) {
    if (num.plus(turEnergyTier).gte(42) && !experimentbuffs.SimulationExperiment4) return new Decimal("9e99999");
    if (num.lt(4)) {
        return ((new Decimal(100000000000).mul(new Decimal(10000).pow(num))).pow(effect2SimulationExperiment2)).floor();
    } else if (num.lt(500)) {
        return ((new Decimal(100000000000).mul(new Decimal(10000).pow(3)).mul(new Decimal(100000).pow(num.sub(3)))).pow(effect2SimulationExperiment2)).floor();
    } else {
        return ((new Decimal(100000000000).mul(new Decimal(10000).pow(3)).mul(new Decimal(100000).pow(new Decimal(500).sub(3))).mul(new Decimal(1000000).pow(num.sub(500)))).pow(new Decimal(1).plus(num.sub(500).div(1000))).pow(effect2SimulationExperiment2)).floor();
    }
}
function BuyMaxTierEnhance() {
    for (let i=TierEnhanceLevel; PriceofBuyTierEnhance(i).lte(turEnergy); i = i.plus(1)) {
        turEnergy = turEnergy.sub(PriceofBuyTierEnhance(i));
        TierEnhanceLevel = TierEnhanceLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}

function turEnergyOriginAmass() {
    if (confirm(`凝聚龟能本源会重置全部的龟能，龟能升级，龟能层级挑战进度，你确定吗？`)) {
        if (challengebuffs.disabledOriginLevelup) turEnergyOrigin = turEnergyOrigin.plus(Decimal.max(0,((((turEnergy.log10().sub(40)).div(2).mul(new Decimal(2).pow(OriginAmassFastenLevel)).mul(challengereward.turEnergyOriginAmount).mul(SimulationUpgrades.turEnergyOrigin1.num).mul(effect2SimulationExperiment5).mul(effectOriginCatalysis)).pow(effect1SimulationExperiment3).pow(effectSimulationMachine.βa3)).mul(effectSimulationExperiment4)).floor()));
        else turEnergyOrigin = turEnergyOrigin.plus(Decimal.max(0,(((turEnergy.log10().sub(40).div(2).mul(challengereward.turEnergyOriginAmount).mul(SimulationUpgrades.turEnergyOrigin1.num).mul(effect2SimulationExperiment5).mul(effectOriginCatalysis)).pow(effect1SimulationExperiment3).pow(effectSimulationMachine.βa3).mul(effectSimulationExperiment4)).floor())));
        if (AmassOriginTimes.lt(100) && challengebuffs.disabledOriginMilestone) AmassOriginTimes = AmassOriginTimes.plus(1);
        else AmassOriginTimes = AmassOriginTimes.plus(10);
        turEnergyOriginReset();
    }
}

function BuyOriginAmassFasten() {
    if (turEnergyOrigin.gte(PriceofBuyOriginAmassFasten(OriginAmassFastenLevel))) {
        turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyOriginAmassFasten(OriginAmassFastenLevel));
        OriginAmassFastenLevel = OriginAmassFastenLevel.plus(1);
    }
}
function PriceofBuyOriginAmassFasten(num) {
    return (ten.mul(ten.pow(OriginAmassFastenLevel)).mul(SimulationUpgrades.turEnergyOrigin2.num)).floor();
}

function BuyOriginProduceEnergy() {
    if (turEnergyOrigin.gte(PriceofBuyOriginProduceEnergy(OriginProduceEnergyLevel))) {
        turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyOriginProduceEnergy(OriginProduceEnergyLevel));
        OriginProduceEnergyLevel = OriginProduceEnergyLevel.plus(1);
        restartOriginProduce();
    }
}
function PriceofBuyOriginProduceEnergy(num) {
    return (new Decimal(1).mul(new Decimal(2).pow(OriginProduceEnergyLevel))).floor();
}

function BuyClickOrigin() {
    if (turEnergyOrigin.gte(PriceofBuyClickOrigin(ClickOriginLevel))) {
        turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyClickOrigin(ClickOriginLevel));
        ClickOriginLevel = ClickOriginLevel.plus(1);
        restartAutoClicker();
        restartOriginProduce();
    }
}
function PriceofBuyClickOrigin(num) {
    return (new Decimal(5).mul(new Decimal(2).pow(ClickOriginLevel))).floor();
}

function BuyTierOrigin() {
    if (turEnergyOrigin.gte(PriceofBuyTierOrigin(TierOriginLevel))) {
        turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyTierOrigin(TierOriginLevel));
        TierOriginLevel = TierOriginLevel.plus(1);
        restartAutoClicker();
        restartOriginProduce();
    }
}
function PriceofBuyTierOrigin(num) {
    return (new Decimal(5).mul(new Decimal(2).pow(TierOriginLevel))).floor();
}

function BuyOriginEnhance() {
    if (turEnergyOrigin.gte(PriceofBuyOriginEnhance(OriginEnhanceLevel))) {
        turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyOriginEnhance(OriginEnhanceLevel));
        OriginEnhanceLevel = OriginEnhanceLevel.plus(1);
        restartOriginProduce();
    }
}
function PriceofBuyOriginEnhance(num) {
    return (new Decimal(100).mul(new Decimal(2).pow(OriginEnhanceLevel))).floor();
}

function BasicEnergyChange() {
    if (confirm(`转化基本能会重置你所有的龟能，龟能升级，龟能本源，龟能本源升级，龟能本源次数和龟能挑战的进度，你确定吗？`)) {
        BasicEnergy = BasicEnergy.plus(new Decimal(2).pow((turEnergy.log10().div(1000)).sub(1)));
        if (!everBasicEnergyChange) everBasicEnergyChange = true;
        BasicEnergyReset();
    }
}

function BuyEnergyMachineA() {
    if (BasicEnergy.gte(PriceofBuyEnergyMachineA(EnergyMachineALevel))) {
        BasicEnergy = BasicEnergy.sub(PriceofBuyEnergyMachineA(EnergyMachineALevel));
        EnergyMachineALevel = EnergyMachineALevel.plus(1);
    }
}
function PriceofBuyEnergyMachineA(num) {
    return (new Decimal(5).mul(new Decimal(2).pow(EnergyMachineALevel)));
}

function BuyturEnergyCatalysis() {
    if (SolarEnergy.gte(PriceofBuyturEnergyCatalysis(turEnergyCatalysisLevel))) {
        SolarEnergy = SolarEnergy.sub(PriceofBuyturEnergyCatalysis(turEnergyCatalysisLevel));
        turEnergyCatalysisLevel = turEnergyCatalysisLevel.plus(1);
    }
}
function PriceofBuyturEnergyCatalysis(num) {
    return new Decimal(2).pow(turEnergyCatalysisLevel);
}

function BuyOriginCatalysis() {
    if (SolarEnergy.gte(PriceofBuyOriginCatalysis(OriginCatalysisLevel))) {
        SolarEnergy = SolarEnergy.sub(PriceofBuyOriginCatalysis(OriginCatalysisLevel));
        OriginCatalysisLevel = OriginCatalysisLevel.plus(1);
    }
}
function PriceofBuyOriginCatalysis(num) {
    return new Decimal(2).pow(OriginCatalysisLevel);
}

function BuyClickCatalysis() {
    if (SolarEnergy.gte(PriceofBuyClickCatalysis(ClickCatalysisLevel))) {
        SolarEnergy = SolarEnergy.sub(PriceofBuyClickCatalysis(ClickCatalysisLevel));
        ClickCatalysisLevel = ClickCatalysisLevel.plus(1);
    }
}
function PriceofBuyClickCatalysis(num) {
    return ten.mul(ten.pow(ClickCatalysisLevel));
}

function BuyincreamentalSimulation() {
    if (simulationData.gte(PriceofBuyincreamentalSimulation(increamentalSimulationLevel))) {
        simulationData = simulationData.sub(PriceofBuyincreamentalSimulation(increamentalSimulationLevel));
        increamentalSimulationLevel = increamentalSimulationLevel.plus(1);
    }
}
function PriceofBuyincreamentalSimulation(num) {
    return (ten.mul(ten.pow(num))).floor();
}

function BuyturEnergySimulationMachineByte() {
    if (turEnergy.gte(PriceofBuyturEnergySimulationMachineByte(BuySimulationMachineByte.turEnergy))) {
        turEnergy = turEnergy.sub(PriceofBuyturEnergySimulationMachineByte(BuySimulationMachineByte.turEnergy));
        SimulationMachineBtye = SimulationMachineBtye.plus(1);
        BuySimulationMachineByte.turEnergy = BuySimulationMachineByte.turEnergy.plus(1);
    }
}
function PriceofBuyturEnergySimulationMachineByte(num) {
    return (new Decimal("1e500").mul(new Decimal("1e500").pow(num))).floor();
}

function BuyturEnergyOriginSimulationMachineByte() {
    if (turEnergyOrigin.gte(PriceofBuyturEnergyOriginSimulationMachineByte(BuySimulationMachineByte.turEnergyOrigin))) {
        turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyturEnergyOriginSimulationMachineByte(BuySimulationMachineByte.turEnergyOrigin));
        SimulationMachineBtye = SimulationMachineBtye.plus(1);
        BuySimulationMachineByte.turEnergyOrigin = BuySimulationMachineByte.turEnergyOrigin.plus(1);
    }
}
function PriceofBuyturEnergyOriginSimulationMachineByte(num) {
    return (new Decimal("1e6").mul(ten.pow(num))).floor();
}

function BuySimulationDataSimulationMachineByte() {
    if (simulationData.gte(PriceofBuySimulationDataSimulationMachineByte(BuySimulationMachineByte.SimulationData))) {
        simulationData = simulationData.sub(PriceofBuySimulationDataSimulationMachineByte(BuySimulationMachineByte.SimulationData));
        SimulationMachineBtye = SimulationMachineBtye.plus(1);
        BuySimulationMachineByte.SimulationData = BuySimulationMachineByte.SimulationData.plus(1);
    }
}
function PriceofBuySimulationDataSimulationMachineByte(num) {
    return (ten.mul(new Decimal(2).pow(num))).floor();
}

function BuyfirstSimulationRoom() {
    if (simulationData.gte(PriceofBuyfirstSimulationRoom(SimulationRoomLevel.Room1))) {
        simulationData = simulationData.sub(PriceofBuyfirstSimulationRoom(SimulationRoomLevel.Room1));
        SimulationRoomLevel.Room1 = SimulationRoomLevel.Room1.plus(1);
        SimulationRoomAmount.Room1 = SimulationRoomAmount.Room1.plus(1);
    }
}
function PriceofBuyfirstSimulationRoom(num) {
    if (num.eq(0)) return new Decimal(0);
    return ((ten.pow(num))).floor();
}

function BuysecondSimulationRoom() {
    if (simulationData.gte(PriceofBuysecondSimulationRoom(SimulationRoomLevel.Room1))) {
        simulationData = simulationData.sub(PriceofBuysecondSimulationRoom(SimulationRoomLevel.Room2));
        SimulationRoomLevel.Room2 = SimulationRoomLevel.Room2.plus(1);
        SimulationRoomAmount.Room2 = SimulationRoomAmount.Room2.plus(1);
    }
}
function PriceofBuysecondSimulationRoom(num) {
    if (num.eq(0)) return new Decimal(0);
    return ((ten.pow(num))).floor();
}

function SimulationUpgradesturEnergy1() {
    if (simulationData.gte(1)) {
        simulationData = simulationData.sub(1);
        SimulationUpgrades.turEnergy1.if = true;
    }
}
function SimulationUpgradesturEnergyOrigin1() {
    if (simulationData.gte(1)) {
        simulationData = simulationData.sub(1);
        SimulationUpgrades.turEnergyOrigin1.if = true;
    }
}
function SimulationUpgradeselse1() {
    if (simulationData.gte(1)) {
        simulationData = simulationData.sub(1);
        SimulationUpgrades.else1.if = true;
    }
}
function SimulationUpgradesturEnergy2() {
    if (simulationData.gte(2) && SimulationUpgrades.turEnergy1.if) {
        simulationData = simulationData.sub(2);
        SimulationUpgrades.turEnergy2.if = true;
    }
}
function SimulationUpgradesturEnergyOrigin2() {
    if (simulationData.gte(2) && SimulationUpgrades.turEnergyOrigin1.if) {
        simulationData = simulationData.sub(2);
        SimulationUpgrades.turEnergyOrigin2.if = true;
    }
}
function SimulationUpgradeselse2() {
    if (simulationData.gte(2) && SimulationUpgrades.else1.if) {
        simulationData = simulationData.sub(2);
        SimulationUpgrades.else2.if = true;
    }
}
function SimulationUpgradesturEnergy3() {
    if (simulationData.gte(3) && SimulationUpgrades.turEnergy2.if) {
        simulationData = simulationData.sub(3);
        SimulationUpgrades.turEnergy3.if = true;
    }
}
function SimulationUpgradesturEnergyOrigin3() {
    if (simulationData.gte(3) && SimulationUpgrades.turEnergyOrigin2.if) {
        simulationData = simulationData.sub(3);
        SimulationUpgrades.turEnergyOrigin3.if = true;
    }
}
function SimulationUpgradeselse3() {
    if (simulationData.gte(3) && SimulationUpgrades.else2.if) {
        simulationData = simulationData.sub(3);
        SimulationUpgrades.else3.if = true;
    }
}
function SimulationUpgradesturEnergy4() {
    if (simulationData.gte(5) && SimulationUpgrades.turEnergy3.if) {
        simulationData = simulationData.sub(5);
        SimulationUpgrades.turEnergy4.if = true;
    }
}
function SimulationUpgradesturEnergyOrigin4() {
    if (simulationData.gte(5) && SimulationUpgrades.turEnergyOrigin3.if) {
        simulationData = simulationData.sub(5);
        SimulationUpgrades.turEnergyOrigin4.if = true;
    }
}
function SimulationUpgradeselse4() {
    if (simulationData.gte(10) && SimulationUpgrades.else3.if) {
        simulationData = simulationData.sub(10);
        SimulationUpgrades.else4.if = true;
    }
}

function BuySimulationMachine(price, position, condition) {
    if (SimulationMachineBtyeUsed.plus(price).lte(SimulationMachineBtye) && condition) {
        SimulationMachine[position] = true;
        SimulationMachineBtyeUsed = SimulationMachineBtyeUsed.plus(price);
    }
}
function BuySimulationMachineλa1() {BuySimulationMachine(1, "λa1", true)};
function BuySimulationMachineλa2() {BuySimulationMachine(1, "λa2", SimulationMachine.λa1)};
function BuySimulationMachineλb1() {BuySimulationMachine(1, "λb1", true)};
function BuySimulationMachineλb2() {BuySimulationMachine(3, "λb2", SimulationMachine.λb1)};
function BuySimulationMachineλc1() {BuySimulationMachine(0, "λc1", true)};
function BuySimulationMachineλc2() {BuySimulationMachine(100000, "λc2", SimulationMachine.λc1)};
function BuySimulationMachineαa1() {BuySimulationMachine(1, "αa1", true)};
function BuySimulationMachineαa2() {BuySimulationMachine(2, "αa2", SimulationMachine.αa1)};
function BuySimulationMachineαa3() {BuySimulationMachine(2, "αa3", SimulationMachine.αa2 && !SimulationMachine.αb3)};
function BuySimulationMachineαb3() {BuySimulationMachine(3, "αb3", SimulationMachine.αa2 && !SimulationMachine.αa3)};
function BuySimulationMachineαa4() {BuySimulationMachine(2, "αa4", SimulationMachine.αa3 && !SimulationMachine.αb4)};
function BuySimulationMachineαb4() {BuySimulationMachine(4, "αb4", SimulationMachine.αb3 && !SimulationMachine.αa4)};
function BuySimulationMachineαa5() {BuySimulationMachine(3, "αa5", SimulationMachine.αa4 || SimulationMachine.αb4)};
function BuySimulationMachineβa1() {BuySimulationMachine(2, "βa1", !SimulationMachine.βb1)};
function BuySimulationMachineβb1() {BuySimulationMachine(1, "βb1", !SimulationMachine.βa1)};
function BuySimulationMachineβa2() {BuySimulationMachine(2, "βa2", SimulationMachine.βa1 && !SimulationMachine.βb2)};
function BuySimulationMachineβb2() {BuySimulationMachine(2, "βb2", SimulationMachine.βb1 && !SimulationMachine.βa2)};
function BuySimulationMachineβa3() {BuySimulationMachine(3, "βa3", SimulationMachine.βa2 || SimulationMachine.βb2)};
function BuySimulationMachineβa4() {BuySimulationMachine(3, "βa4", SimulationMachine.βa3)};