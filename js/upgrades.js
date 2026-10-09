function turEnergyLevelup() {
    if (turEnergy.gte(PriceofturEnergyLevelup(turEnergyLevel))) {
        if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofturEnergyLevelup(turEnergyLevel));
        turEnergyLevel = turEnergyLevel.plus(1);   
    }
    if (!experimentbuffs.SimulationExperiment6) effectSimulationExperiment6 = effectSimulationExperiment6.mul(5);
}
function PriceofturEnergyLevelup(num) {
    if (num.lt((new Decimal(300).plus(challengereward.delayScalingturEnergyLevelup).plus(effectSimulationMachine.αa5)))) {
        return ((ten.pow(num.sqrt()).mul(challengebuffs.turEnergyTierChallenge3Price).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2)).floor();
    } else if (num.lt(new Decimal(1000).plus(effectSimulationMachine.αa3))) {
        return ((ten.pow((new Decimal(300).plus(challengereward.delayScalingturEnergyLevelup).plus(effectSimulationMachine.αa5)).sqrt()).mul(new Decimal(1.3).pow(num.sub(300).sub(challengereward.delayScalingturEnergyLevelup).sub(effectSimulationMachine.αa5))).mul(challengebuffs.turEnergyTierChallenge3Price).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2)).floor();
    } else {
        return ((ten.pow((new Decimal(300).plus(challengereward.delayScalingturEnergyLevelup).plus(effectSimulationMachine.αa5)).sqrt()).mul(new Decimal(1.3).pow(new Decimal(999).sub(300).sub(challengereward.delayScalingturEnergyLevelup).sub(effectSimulationMachine.αa5).plus(effectSimulationMachine.αa3))).mul(new Decimal(1.7).pow(num.sub(999).sub(effectSimulationMachine.αa3))).mul(challengebuffs.turEnergyTierChallenge3Price).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2)).floor();
    }
}
function BuyMaxturEnergyLevelup() {
    for (let i=turEnergyLevel; PriceofturEnergyLevelup(i).mul(1000).lt(turEnergy); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofturEnergyLevelup(i.plus(1000)).mul(1000).lt(turEnergy)) {
            if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofturEnergyLevelup(i).mul(1000));
            turEnergyLevel = turEnergyLevel.plus(1000);
        } else break;
    }
    for (let i=turEnergyLevel; PriceofturEnergyLevelup(i).lte(turEnergy); i = i.plus(1)) {
        if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofturEnergyLevelup(i));
        turEnergyLevel = turEnergyLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}
     

function BuyautoClicker() {
    if (turEnergy.gte(PriceofBuyautoClicker(autoClickers)) ) {
        if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofBuyautoClicker(autoClickers)) ;
        autoClickers = autoClickers.plus(1);
    }
    if (!experimentbuffs.SimulationExperiment6) effectSimulationExperiment6 = effectSimulationExperiment6.mul(5);
}
function PriceofBuyautoClicker(num) {
    if (num.lte(0)) return (new Decimal(60).mul(challengebuffs.turEnergyTierChallenge3Price).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2);
    if (num.lt(10000)) {
        return (((new Decimal(40).mul((new Decimal(5).pow(num.ln()))).plus(60)).mul(challengebuffs.turEnergyTierChallenge3Price).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2)).floor();
    } else {
        return (((new Decimal(40).mul((new Decimal(5).pow(new Decimal(9999).ln())).mul(new Decimal(6).pow(num.ln())).plus(60))).mul(challengebuffs.turEnergyTierChallenge3Price).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2)).floor();
    }
}
function BuyMaxautoClicker() {
    for (let i=autoClickers; PriceofBuyautoClicker(i).mul(1000).lt(turEnergy); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofBuyautoClicker(i.plus(1000)).mul(1000).lt(turEnergy)) {
            if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofBuyautoClicker(i).mul(1000));
            autoClickers = autoClickers.plus(1000);
        } else break;
    }
    for (let i=autoClickers; PriceofBuyautoClicker(i).lte(turEnergy); i = i.plus(1)) {
        if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofBuyautoClicker(i));
        autoClickers = autoClickers.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyEfficientClick() {
    if (turEnergy.gte(PriceofBuyEfficientClick(EfficientClickLevel)) ) {
        if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofBuyEfficientClick(EfficientClickLevel));
        EfficientClickLevel = EfficientClickLevel.plus(1);
    }
    if (!experimentbuffs.SimulationExperiment6) effectSimulationExperiment6 = effectSimulationExperiment6.mul(5);
}
function PriceofBuyEfficientClick(num) {
    if (num.lte(0)) return (new Decimal(500).mul(challengebuffs.turEnergyTierChallenge3Price).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2);
    return (((new Decimal(500).mul(new Decimal(3).pow(num.plus(num.ln()))).plus(500)).mul(challengebuffs.turEnergyTierChallenge3Price).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2)).floor();
}
function BuyMaxEfficientClick() {
    for (let i=EfficientClickLevel; PriceofBuyEfficientClick(i).mul(1000).lt(turEnergy); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofBuyEfficientClick(i.plus(1000)).mul(1000).lt(turEnergy)) {
            if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofBuyEfficientClick(i).mul(1000));
            EfficientClickLevel = EfficientClickLevel.plus(1000);
        } else break;
    }
    for (let i=EfficientClickLevel; PriceofBuyEfficientClick(i).lte(turEnergy); i = i.plus(1)) {
        if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofBuyEfficientClick(i));
        EfficientClickLevel = EfficientClickLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyHighspeedClicking() {
    if (turEnergy.gte(PriceofBuyHighspeedClicking(HighspeedClickingLevel) )) {
        if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofBuyHighspeedClicking(HighspeedClickingLevel));
        HighspeedClickingLevel = HighspeedClickingLevel.plus(1);
        restartAutoClicker();
    }
    if (!experimentbuffs.SimulationExperiment6) effectSimulationExperiment6 = effectSimulationExperiment6.mul(5);
}
function PriceofBuyHighspeedClicking(num) {
    if (num.lt(5)) {
        return ((new Decimal(2000).mul(ten.pow(num)).mul(challengebuffs.turEnergyTierChallenge3Price).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2)).floor();
    } else if (num.lt(150)) {
        return ((new Decimal(2000).mul(ten.pow(4)).mul(new Decimal(35).pow(num.sub(4))).mul(challengebuffs.turEnergyTierChallenge3Price).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2)).floor();
    } else if (num.lt(500)) {
        return ((new Decimal(2000).mul(ten.pow(4)).mul(new Decimal(35).pow(new Decimal(149).sub(4))).mul(new Decimal(100).pow(num.sub(149))).mul(challengebuffs.turEnergyTierChallenge3Price).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2)).floor();
    } else {
        return ((new Decimal(2000).mul(ten.pow(4)).mul(new Decimal(35).pow(new Decimal(149).sub(4))).mul(new Decimal(500).pow(num.sub(149))).mul(challengebuffs.turEnergyTierChallenge3Price).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2)).floor();
    }
}
function BuyMaxHighspeedClicking() {
    for (let i=HighspeedClickingLevel; PriceofBuyHighspeedClicking(i).mul(1000).lt(turEnergy); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofBuyHighspeedClicking(i.plus(1000)).mul(1000).lt(turEnergy)) {
            if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofBuyHighspeedClicking(i).mul(1000));
            HighspeedClickingLevel = HighspeedClickingLevel.plus(1000);
        } else break;
    }
    for (let i=HighspeedClickingLevel; PriceofBuyHighspeedClicking(i).lte(turEnergy); i = i.plus(1)) {
        if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofBuyHighspeedClicking(i));
        HighspeedClickingLevel = HighspeedClickingLevel.plus(1);
        restartAutoClicker();
        if (i.gte(maxLevelup)) break;
    }
}


function turEnergyTierup() {
    if (turEnergyLevel.gte(PriceofturEnergyTierup(turEnergyTier)) ) {
        turEnergyTier = turEnergyTier.plus(1);
        turEnergyTierReset();
    }
}
function PriceofturEnergyTierup(num) {
    if (num.plus(TierEnhanceLevel).gte(42) && !experimentbuffs.SimulationExperiment4) return new Decimal("1e1e15");
    if (!experimentbuffs.SimulationExperiment8) return new Decimal("1e1e15");//tp @s technoblade
    if (experimentbuffs.SimulationExperiment7) {
        if (num.lt(new Decimal(40).plus(effectSimulationMachine.αb3))) {
            return ((new Decimal(60).plus(new Decimal(40).mul(num))).pow(effect2SimulationExperiment2)).floor();
        } else if (num.lt(new Decimal(200).plus(effectTierCatalysis))) {
            return ((new Decimal(60).plus(new Decimal(40).mul(new Decimal(39).plus(effectSimulationMachine.αb3))).plus(new Decimal(80).mul(num.sub(39).sub(effectSimulationMachine.αb3)))).pow(effect2SimulationExperiment2)).floor();
        } else {
            return ((new Decimal(60).plus(new Decimal(40).mul(new Decimal(39).plus(effectSimulationMachine.αb3))).plus(new Decimal(80).mul(num.sub(39).sub(effectSimulationMachine.αb3))).plus((num.sub(200).sub(effectTierCatalysis)).mul(num.sub(201).sub(effectTierCatalysis)).mul(challengebuffs.BasicEnergyChallenge1).mul(challengereward.BasicEnergyChallenge1))).pow(effect2SimulationExperiment2)).floor();
        }
    } else {
        return new Decimal(80).mul(num.plus(1)).plus(num.mul(num.sub(1)).mul(challengebuffs.BasicEnergyChallenge1).mul(challengereward.BasicEnergyChallenge1));
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
        if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofBuyTierEnhance(TierEnhanceLevel));
        TierEnhanceLevel = TierEnhanceLevel.plus(1);
    }
    if (!experimentbuffs.SimulationExperiment6) effectSimulationExperiment6 = effectSimulationExperiment6.mul(5);
}
function PriceofBuyTierEnhance(num) {
    if (num.plus(turEnergyTier).gte(42) && !experimentbuffs.SimulationExperiment4) return new Decimal("1e1e15");
    if (num.lt(4)) {
        return ((new Decimal(100000000000).mul(new Decimal(10000).pow(num)).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2)).floor();
    } else if (num.lt(500)) {
        return ((new Decimal(100000000000).mul(new Decimal(10000).pow(3)).mul(new Decimal(100000).pow(num.sub(3))).mul(effectSimulationExperiment6)).pow(effect2SimulationExperiment2)).floor();
    } else {
        return ((new Decimal(100000000000).mul(new Decimal(10000).pow(3)).mul(new Decimal(100000).pow(new Decimal(500).sub(3))).mul(new Decimal(1000000).pow(num.sub(500))).mul(effectSimulationExperiment6)).pow(new Decimal(1).plus(num.sub(500).div(1000))).pow(effect2SimulationExperiment2)).floor();
    }
}
function BuyMaxTierEnhance() {
    for (let i=TierEnhanceLevel; PriceofBuyTierEnhance(i).mul(1000).lt(turEnergy); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofBuyTierEnhance(i.plus(1000)).mul(1000).lt(turEnergy)) {
            if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofBuyTierEnhance(i).mul(1000));
            TierEnhanceLevel = TierEnhanceLevel.plus(1000);
        } else break;
    }
    for (let i=TierEnhanceLevel; PriceofBuyTierEnhance(i).lte(turEnergy); i = i.plus(1)) {
        if (IteratedTimes.lt(5)) turEnergy = turEnergy.sub(PriceofBuyTierEnhance(i));
        TierEnhanceLevel = TierEnhanceLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function turEnergyOriginAmass() {
    if (confirm(`凝聚龟能本源会重置全部的龟能，龟能升级，龟能层级挑战进度，你确定吗？`)) {
        turEnergyOrigin = turEnergyOrigin.plus(turEnergyOriginAmassFormula());
        AmassOriginTimes = AmassOriginTimes.plus(effectOriginMilestone9.mul(effectIterationMileStone1));
        effectSimulationExperiment6 = new Decimal(1);
        turEnergyOriginReset();
    }
}
function turEnergyOriginAmassFormula() {
    if (challengebuffs.disabledOriginLevelup) return Decimal.max(0,((((turEnergy.log10().sub(40)).div(2).mul(new Decimal(2).pow(OriginAmassFastenLevel)).mul(challengereward.turEnergyOriginAmount).mul(SimulationUpgrades.turEnergyOrigin1.num).mul(effect2SimulationExperiment5).mul(effectOriginCatalysis).mul(effectIterationMileStone1).mul(effectOriginIteration)).pow(effect1SimulationExperiment3).pow(effectSimulationMachine.βa3)).mul(effectSimulationExperiment4)).floor());
    return Decimal.max(0,(((turEnergy.log10().sub(40).div(2).mul(challengereward.turEnergyOriginAmount).mul(SimulationUpgrades.turEnergyOrigin1.num).mul(effect2SimulationExperiment5).mul(effectOriginCatalysis).mul(effectIterationMileStone1).mul(effectOriginIteration)).pow(effect1SimulationExperiment3).pow(effectSimulationMachine.βa3).mul(effectSimulationExperiment4)).floor()));
}


function BuyOriginAmassFasten() {
    if (turEnergyOrigin.gte(PriceofBuyOriginAmassFasten(OriginAmassFastenLevel))) {
        if (IteratedTimes.gte(10)) turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyOriginAmassFasten(OriginAmassFastenLevel));
        OriginAmassFastenLevel = OriginAmassFastenLevel.plus(1);
    }
}
function PriceofBuyOriginAmassFasten(num) {
    return (ten.mul(effectOriginMilestone12.pow(OriginAmassFastenLevel)).mul(SimulationUpgrades.turEnergyOrigin2.num)).floor();
}
function BuyMaxOriginAmassFasten() {
    for (let i=OriginAmassFastenLevel; PriceofBuyOriginAmassFasten(i).lte(turEnergyOrigin); i = i.plus(1)) {
        if (IteratedTimes.gte(10)) turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyOriginAmassFasten(i));
        OriginAmassFastenLevel = OriginAmassFastenLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyOriginProduceEnergy() {
    if (turEnergyOrigin.gte(PriceofBuyOriginProduceEnergy(OriginProduceEnergyLevel))) {
        if (IteratedTimes.gte(10)) turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyOriginProduceEnergy(OriginProduceEnergyLevel));
        OriginProduceEnergyLevel = OriginProduceEnergyLevel.plus(1);
    }
}
function PriceofBuyOriginProduceEnergy(num) {
    return (new Decimal(1).mul(new Decimal(2).pow(OriginProduceEnergyLevel))).floor();
}
function BuyMaxOriginProduceEnergy() {
    for (let i=OriginProduceEnergyLevel; PriceofBuyOriginProduceEnergy(i).lte(turEnergyOrigin); i = i.plus(1)) {
        if (IteratedTimes.gte(10)) turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyOriginProduceEnergy(i));
        OriginProduceEnergyLevel = OriginProduceEnergyLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyClickOrigin() {
    if (turEnergyOrigin.gte(PriceofBuyClickOrigin(ClickOriginLevel))) {
        if (IteratedTimes.gte(10)) turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyClickOrigin(ClickOriginLevel));
        ClickOriginLevel = ClickOriginLevel.plus(1);
    }
}
function PriceofBuyClickOrigin(num) {
    return (new Decimal(5).mul(new Decimal(2).pow(ClickOriginLevel))).floor();
}
function BuyMaxClickOrigin() {
    for (let i=ClickOriginLevel; PriceofBuyClickOrigin(i).lte(turEnergyOrigin); i = i.plus(1)) {
        if (IteratedTimes.gte(10)) turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyClickOrigin(i));
        ClickOriginLevel = ClickOriginLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyTierOrigin() {
    if (turEnergyOrigin.gte(PriceofBuyTierOrigin(TierOriginLevel))) {
        if (IteratedTimes.gte(10)) turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyTierOrigin(TierOriginLevel));
        TierOriginLevel = TierOriginLevel.plus(1);
    }
}
function PriceofBuyTierOrigin(num) {
    if (num.lt(new Decimal(60).plus(effectOriginMilestone11))) return (new Decimal(5).mul(new Decimal(2).pow(TierOriginLevel))).floor();
    else return (new Decimal(5).mul(new Decimal(2).pow(new Decimal(60).plus(effectOriginMilestone11))).mul(ten.pow(num.sub(new Decimal(60).plus(effectOriginMilestone11))))).floor();
}
function BuyMaxTierOrigin() {
    for (let i=TierOriginLevel; PriceofBuyTierOrigin(i).lte(turEnergyOrigin); i = i.plus(1)) {
        if (IteratedTimes.gte(10)) turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyTierOrigin(i));
        TierOriginLevel = TierOriginLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyOriginEnhance() {
    if (turEnergyOrigin.gte(PriceofBuyOriginEnhance(OriginEnhanceLevel))) {
        if (IteratedTimes.gte(10)) turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyOriginEnhance(OriginEnhanceLevel));
        OriginEnhanceLevel = OriginEnhanceLevel.plus(1);
    }
}
function PriceofBuyOriginEnhance(num) {
    return (new Decimal(100).mul(new Decimal(2).pow(OriginEnhanceLevel))).floor();
}
function BuyMaxOriginEnhance() {
    for (let i=OriginEnhanceLevel; PriceofBuyOriginEnhance(i).lte(turEnergyOrigin); i = i.plus(1)) {
        if (IteratedTimes.gte(10)) turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyOriginEnhance(i));
        OriginEnhanceLevel = OriginEnhanceLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BasicEnergyChange() {
    if (confirm(`转化基本能会重置你所有的龟能，龟能升级，龟能本源，龟能本源升级，龟能本源次数和龟能挑战的进度，你确定吗？`)) {
        BasicEnergyChangeFormula();
        if (!everBasicEnergyChange) everBasicEnergyChange = true;
        BasicEnergyReset();
    }
}
function BasicEnergyChangeFormula() {
    BasicEnergy = BasicEnergy.plus(FormulaOnlyBasicEnergy());
    setAuto.BasicEnergyChangeAutoLast = FormulaOnlyBasicEnergy();
}
function FormulaOnlyBasicEnergy() {
    return new Decimal(challengereward.BasicEnergyChallenge4).pow((turEnergy.log10().div(effectSimulationMachine.γa3)).sub(1)).mul(effectReactionCatalysis).mul(effectSimulationMachine.γa1);
}


function BuyEnergyMachineA() {
    if (BasicEnergy.gte(PriceofBuyEnergyMachineA(EnergyMachineALevel))) {
        BasicEnergy = BasicEnergy.sub(PriceofBuyEnergyMachineA(EnergyMachineALevel));
        EnergyMachineALevel = EnergyMachineALevel.plus(1);
    }
}
function PriceofBuyEnergyMachineA(num) {
    if (num.lt(100)) return (new Decimal(5).mul(new Decimal(2).pow(EnergyMachineALevel)));
    else return (new Decimal(5).mul(new Decimal(2).pow(100)).mul(new Decimal(100).pow(EnergyMachineALevel.sub(100))));
}
function BuyMaxEnergyMachineA() {
    for (let i=EnergyMachineALevel; PriceofBuyEnergyMachineA(i).lte(BasicEnergy); i = i.plus(1)) {
        BasicEnergy = BasicEnergy.sub(PriceofBuyEnergyMachineA(i));
        EnergyMachineALevel = EnergyMachineALevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyEnergyMachineB() {
    if (BasicEnergy.gte(PriceofBuyEnergyMachineB(EnergyMachineBLevel))) {
        BasicEnergy = BasicEnergy.sub(PriceofBuyEnergyMachineB(EnergyMachineBLevel));
        EnergyMachineBLevel = EnergyMachineBLevel.plus(1);
    }
}
function PriceofBuyEnergyMachineB(num) {
    if (num.lt(100)) return (new Decimal(30).mul(new Decimal(3).pow(EnergyMachineBLevel)));
    else return (new Decimal(30).mul(new Decimal(3).pow(100)).mul(new Decimal(150).pow(EnergyMachineBLevel.sub(100))));
}
function BuyMaxEnergyMachineB() {
    for (let i=EnergyMachineBLevel; PriceofBuyEnergyMachineB(i).lte(BasicEnergy); i = i.plus(1)) {
        BasicEnergy = BasicEnergy.sub(PriceofBuyEnergyMachineB(i));
        EnergyMachineBLevel = EnergyMachineBLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyEnergyMachineC() {
    if (BasicEnergy.gte(PriceofBuyEnergyMachineC(EnergyMachineCLevel))) {
        BasicEnergy = BasicEnergy.sub(PriceofBuyEnergyMachineC(EnergyMachineCLevel));
        EnergyMachineCLevel = EnergyMachineCLevel.plus(1);
    }
}
function PriceofBuyEnergyMachineC(num) {
    if (num.lt(100)) return (new Decimal(200).mul(new Decimal(4).pow(EnergyMachineCLevel)));
    else return (new Decimal(200).mul(new Decimal(4).pow(100)).mul(new Decimal(200).pow(EnergyMachineCLevel.sub(100))));
}
function BuyMaxEnergyMachineC() {
    for (let i=EnergyMachineCLevel; PriceofBuyEnergyMachineC(i).lte(BasicEnergy); i = i.plus(1)) {
        BasicEnergy = BasicEnergy.sub(PriceofBuyEnergyMachineC(i));
        EnergyMachineCLevel = EnergyMachineCLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyEnergyMachineD() {
    if (BasicEnergy.gte(PriceofBuyEnergyMachineD(EnergyMachineDLevel))) {
        BasicEnergy = BasicEnergy.sub(PriceofBuyEnergyMachineD(EnergyMachineDLevel));
        EnergyMachineDLevel = EnergyMachineDLevel.plus(1);
    }
}
function PriceofBuyEnergyMachineD(num) {
    if (num.lt(100)) return (new Decimal(1500).mul(new Decimal(6).pow(EnergyMachineDLevel)));
    else return (new Decimal(1500).mul(new Decimal(6).pow(100)).mul(new Decimal(300).pow(EnergyMachineDLevel.sub(100))));
}
function BuyMaxEnergyMachineD() {
    for (let i=EnergyMachineDLevel; PriceofBuyEnergyMachineD(i).lte(BasicEnergy); i = i.plus(1)) {
        BasicEnergy = BasicEnergy.sub(PriceofBuyEnergyMachineD(i));
        EnergyMachineDLevel = EnergyMachineDLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyEnergyMachineE() {
    if (BasicEnergy.gte(PriceofBuyEnergyMachineE(EnergyMachineELevel))) {
        BasicEnergy = BasicEnergy.sub(PriceofBuyEnergyMachineE(EnergyMachineELevel));
        EnergyMachineELevel = EnergyMachineELevel.plus(1);
    }
}
function PriceofBuyEnergyMachineE(num) {
    return new Decimal(1e100).mul(new Decimal(1e3).pow(EnergyMachineELevel));
}
function BuyMaxEnergyMachineE() {
    for (let i=EnergyMachineELevel; PriceofBuyEnergyMachineE(i).lte(BasicEnergy); i = i.plus(1)) {
        BasicEnergy = BasicEnergy.sub(PriceofBuyEnergyMachineE(i));
        EnergyMachineELevel = EnergyMachineELevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
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
function BuyMaxturEnergyCatalysis() {
    for (let i=turEnergyCatalysisLevel; PriceofBuyturEnergyCatalysis(i).lte(SolarEnergy); i = i.plus(1)) {
        SolarEnergy = SolarEnergy.sub(PriceofBuyturEnergyCatalysis(i));
        turEnergyCatalysisLevel = turEnergyCatalysisLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
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
function BuyMaxOriginCatalysis() {
    for (let i=OriginCatalysisLevel; PriceofBuyOriginCatalysis(i).lte(SolarEnergy); i = i.plus(1)) {
        SolarEnergy = SolarEnergy.sub(PriceofBuyOriginCatalysis(i));
        OriginCatalysisLevel = OriginCatalysisLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
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
function BuyMaxClickCatalysis() {
    for (let i=ClickCatalysisLevel; PriceofBuyClickCatalysis(i).lte(SolarEnergy); i = i.plus(1)) {
        SolarEnergy = SolarEnergy.sub(PriceofBuyClickCatalysis(i));
        ClickCatalysisLevel = ClickCatalysisLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyPhotosynthesis() {
    if (SolarEnergy.gte(PriceofBuyPhotosynthesis(PhotosynthesisLevel))) {
        SolarEnergy = SolarEnergy.sub(PriceofBuyPhotosynthesis(PhotosynthesisLevel));
        PhotosynthesisLevel = PhotosynthesisLevel.plus(1);
    }
}
function PriceofBuyPhotosynthesis(num) {
    return new Decimal(300).mul(ten.pow(PhotosynthesisLevel));
}
function BuyMaxPhotosynthesis() {
    for (let i=PhotosynthesisLevel; PriceofBuyPhotosynthesis(i).lte(SolarEnergy); i = i.plus(1)) {
        SolarEnergy = SolarEnergy.sub(PriceofBuyPhotosynthesis(i));
        PhotosynthesisLevel = PhotosynthesisLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuySimulationCatalysis() {
    if (ChemicalEnergy.gte(PriceofBuySimulationCatalysis(SimulationCatalysisLevel))) {
        ChemicalEnergy = ChemicalEnergy.sub(PriceofBuySimulationCatalysis(SimulationCatalysisLevel));
        SimulationCatalysisLevel = SimulationCatalysisLevel.plus(1);
    }
}
function PriceofBuySimulationCatalysis(num) {
    return new Decimal(2).pow(SimulationCatalysisLevel);
}
function BuyMaxSimulationCatalysis() {
    for (let i=SimulationCatalysisLevel; PriceofBuySimulationCatalysis(i).lte(ChemicalEnergy); i = i.plus(1)) {
        ChemicalEnergy = ChemicalEnergy.sub(PriceofBuySimulationCatalysis(i));
        SimulationCatalysisLevel = SimulationCatalysisLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyTierCatalysis() {
    if (ChemicalEnergy.gte(PriceofBuyTierCatalysis(TierCatalysisLevel))) {
        ChemicalEnergy = ChemicalEnergy.sub(PriceofBuyTierCatalysis(TierCatalysisLevel));
        TierCatalysisLevel = TierCatalysisLevel.plus(1);
    }
}
function PriceofBuyTierCatalysis(num) {
    return new Decimal(2).pow(TierCatalysisLevel);
}
function BuyMaxTierCatalysis() {
    for (let i=TierCatalysisLevel; PriceofBuyTierCatalysis(i).lte(ChemicalEnergy); i = i.plus(1)) {
        ChemicalEnergy = ChemicalEnergy.sub(PriceofBuyTierCatalysis(i));
        TierCatalysisLevel = TierCatalysisLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyReactionCatalysis() {
    if (ChemicalEnergy.gte(PriceofBuyReactionCatalysis(ReactionCatalysisLevel))) {
        ChemicalEnergy = ChemicalEnergy.sub(PriceofBuyReactionCatalysis(ReactionCatalysisLevel));
        ReactionCatalysisLevel = ReactionCatalysisLevel.plus(1);
    }
}
function PriceofBuyReactionCatalysis(num) {
    return new Decimal(5).pow(ReactionCatalysisLevel.plus(1));
}
function BuyMaxReactionCatalysis() {
    for (let i=ReactionCatalysisLevel; PriceofBuyReactionCatalysis(i).lte(ChemicalEnergy); i = i.plus(1)) {
        ChemicalEnergy = ChemicalEnergy.sub(PriceofBuyReactionCatalysis(i));
        ReactionCatalysisLevel = ReactionCatalysisLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyPrimaryBattery() {
    if (ChemicalEnergy.gte(PriceofBuyPrimaryBattery(PrimaryBatteryLevel))) {
        ChemicalEnergy = ChemicalEnergy.sub(PriceofBuyPrimaryBattery(PrimaryBatteryLevel));
        PrimaryBatteryLevel = PrimaryBatteryLevel.plus(1);
    }
}
function PriceofBuyPrimaryBattery(num) {
    return new Decimal(500).mul(new Decimal(20).pow(PrimaryBatteryLevel));
}
function BuyMaxPrimaryBattery() {
    for (let i=PrimaryBatteryLevel; PriceofBuyPrimaryBattery(i).lte(ChemicalEnergy); i = i.plus(1)) {
        ChemicalEnergy = ChemicalEnergy.sub(PriceofBuyPrimaryBattery(i));
        PrimaryBatteryLevel = PrimaryBatteryLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyBoostVoltage() {
    if (ElectricEnergy.gte(PriceofBuyBoostVoltage(BoostVoltageLevel))) {
        ElectricEnergy = ElectricEnergy.sub(PriceofBuyBoostVoltage(BoostVoltageLevel));
        BoostVoltageLevel = BoostVoltageLevel.plus(1);
    }
}
function PriceofBuyBoostVoltage(num) {
    return new Decimal(2).pow(BoostVoltageLevel);
}
function BuyMaxBoostVoltage() {
    for (let i=BoostVoltageLevel; PriceofBuyBoostVoltage(i).lte(ElectricEnergy); i = i.plus(1)) {
        ElectricEnergy = ElectricEnergy.sub(PriceofBuyBoostVoltage(i));
        BoostVoltageLevel = BoostVoltageLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyElectrolysis() {
    if (ElectricEnergy.gte(PriceofBuyElectrolysis(ElectrolysisLevel))) {
        ElectricEnergy = ElectricEnergy.sub(PriceofBuyElectrolysis(ElectrolysisLevel));
        ElectrolysisLevel = ElectrolysisLevel.plus(1);
    }
}
function PriceofBuyElectrolysis(num) {
    return new Decimal(2).pow(ElectrolysisLevel);
}
function BuyMaxElectrolysis() {
    for (let i=ElectrolysisLevel; PriceofBuyElectrolysis(i).lte(ElectricEnergy); i = i.plus(1)) {
        ElectricEnergy = ElectricEnergy.sub(PriceofBuyElectrolysis(i));
        ElectrolysisLevel = ElectrolysisLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyIonization() {
    if (ElectricEnergy.gte(PriceofBuyIonization(IonizationLevel))) {
        ElectricEnergy = ElectricEnergy.sub(PriceofBuyIonization(IonizationLevel));
        IonizationLevel = IonizationLevel.plus(1);
    }
}
function PriceofBuyIonization(num) {
    return new Decimal(30).pow(IonizationLevel);
}
function BuyMaxIonization() {
    for (let i=IonizationLevel; PriceofBuyIonization(i).lte(ElectricEnergy); i = i.plus(1)) {
        ElectricEnergy = ElectricEnergy.sub(PriceofBuyIonization(i));
        IonizationLevel = IonizationLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}



function BuyMotor() {
    if (ElectricEnergy.gte(PriceofBuyMotor(MotorLevel))) {
        ElectricEnergy = ElectricEnergy.sub(PriceofBuyMotor(MotorLevel));
        MotorLevel = MotorLevel.plus(1);
    }
}
function PriceofBuyMotor(num) {
    return new Decimal(1000).mul(new Decimal(30).pow(MotorLevel));
}
function BuyMaxMotor() {
    for (let i=MotorLevel; PriceofBuyMotor(i).lte(ElectricEnergy); i = i.plus(1)) {
        ElectricEnergy = ElectricEnergy.sub(PriceofBuyMotor(i));
        MotorLevel = MotorLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyPowerOn() {
    if (ElectricEnergy.gte(PriceofBuyPowerOn(PowerOnLevel))) {
        ElectricEnergy = ElectricEnergy.sub(PriceofBuyPowerOn(PowerOnLevel));
        PowerOnLevel = PowerOnLevel.plus(1);
    }
}
function PriceofBuyPowerOn(num) {
    if (num.eq(0)) return new Decimal(5);
    else if (num.eq(1)) if (challengereward.BasicEnergyChallenge6 === 2) return new Decimal("1e1e15"); else return new Decimal("30");
    else if (num.eq(2)) if (challengereward.BasicEnergyChallenge6 === 3) return new Decimal("1e1e15"); else return new Decimal("1e3");
    else if (num.eq(3)) if (challengereward.BasicEnergyChallenge6 === 4) return new Decimal("1e1e15"); else return new Decimal("1e6");
    else if (num.eq(4)) return new Decimal("1e1e15");
}


function BuyKineticEnergy() {
    if (MechanicalEnergy.gte(PriceofBuyKineticEnergy(KineticEnergyLevel))) {
        MechanicalEnergy = MechanicalEnergy.sub(PriceofBuyKineticEnergy(KineticEnergyLevel));
        KineticEnergyLevel = KineticEnergyLevel.plus(1);
    }
}
function PriceofBuyKineticEnergy(num) {
    return new Decimal(1).mul(new Decimal(2).pow(KineticEnergyLevel));
}
function BuyMaxKineticEnergy() {
    for (let i=KineticEnergyLevel; PriceofBuyKineticEnergy(i).lte(MechanicalEnergy); i = i.plus(1)) {
        MechanicalEnergy = MechanicalEnergy.sub(PriceofBuyKineticEnergy(i));
        KineticEnergyLevel = KineticEnergyLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyElasticPotentialEnergy() {
    if (MechanicalEnergy.gte(PriceofBuyElasticPotentialEnergy(ElasticPotentialEnergyLevel))) {
        MechanicalEnergy = MechanicalEnergy.sub(PriceofBuyElasticPotentialEnergy(ElasticPotentialEnergyLevel));
        ElasticPotentialEnergyLevel = ElasticPotentialEnergyLevel.plus(1);
    }
}
function PriceofBuyElasticPotentialEnergy(num) {
    return new Decimal(1).plus(ElasticPotentialEnergyLevel.pow(2));
}
function BuyMaxElasticPotentialEnergy() {
    for (let i=ElasticPotentialEnergyLevel; PriceofBuyElasticPotentialEnergy(i).lte(MechanicalEnergy); i = i.plus(1)) {
        MechanicalEnergy = MechanicalEnergy.sub(PriceofBuyElasticPotentialEnergy(i));
        ElasticPotentialEnergyLevel = ElasticPotentialEnergyLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyGravitationalPotentialEnergy() {
    if (MechanicalEnergy.gte(PriceofBuyGravitationalPotentialEnergy(GravitationalPotentialEnergyLevel))) {
        MechanicalEnergy = MechanicalEnergy.sub(PriceofBuyGravitationalPotentialEnergy(GravitationalPotentialEnergyLevel));
        GravitationalPotentialEnergyLevel = GravitationalPotentialEnergyLevel.plus(1);
    }
}
function PriceofBuyGravitationalPotentialEnergy(num) {
    return new Decimal(1).mul(new Decimal(2).pow(GravitationalPotentialEnergyLevel));
}
function BuyMaxGravitationalPotentialEnergy() {
    for (let i=GravitationalPotentialEnergyLevel; PriceofBuyGravitationalPotentialEnergy(i).lte(MechanicalEnergy); i = i.plus(1)) {
        MechanicalEnergy = MechanicalEnergy.sub(PriceofBuyGravitationalPotentialEnergy(i));
        GravitationalPotentialEnergyLevel = GravitationalPotentialEnergyLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyFriction() {
    if (MechanicalEnergy.gte(PriceofBuyFriction(FrictionLevel))) {
        MechanicalEnergy = MechanicalEnergy.sub(PriceofBuyFriction(FrictionLevel));
        FrictionLevel = FrictionLevel.plus(1);
    }
}
function PriceofBuyFriction(num) {
    return new Decimal(1e4).mul(new Decimal(50).pow(FrictionLevel));
}
function BuyMaxFriction() {
    for (let i=FrictionLevel; PriceofBuyFriction(i).lte(MechanicalEnergy); i = i.plus(1)) {
        MechanicalEnergy = MechanicalEnergy.sub(PriceofBuyFriction(i));
        FrictionLevel = FrictionLevel.plus(1);
        if (i.gte(maxLevelup)) break;
    }
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
function BuyMaxincreamentalSimulation() {
    if (simulationData.eq(0)) return;
    if (Decimal.log10(simulationData).floor().gte(increamentalSimulationLevel)) {
        increamentalSimulationLevel = Decimal.log10(simulationData).floor();
        simulationData = simulationData.sub(ten.pow(Decimal.log10(simulationData).floor()));
    }
}


function BuyturEnergySimulationMachineByte() {
    if (turEnergy.gte(PriceofBuyturEnergySimulationMachineByte(BuySimulationMachineByte.turEnergy))) {
        if (IteratedTimes.gte(15)) turEnergy = turEnergy.sub(PriceofBuyturEnergySimulationMachineByte(BuySimulationMachineByte.turEnergy));
        SimulationMachineBtye = SimulationMachineBtye.plus(1);
        BuySimulationMachineByte.turEnergy = BuySimulationMachineByte.turEnergy.plus(1);
    }
}
function PriceofBuyturEnergySimulationMachineByte(num) {
    return (new Decimal("1e500").mul(new Decimal("1e500").pow(num))).floor();
}


function BuyturEnergyOriginSimulationMachineByte() {
    if (turEnergyOrigin.gte(PriceofBuyturEnergyOriginSimulationMachineByte(BuySimulationMachineByte.turEnergyOrigin))) {
        if (IteratedTimes.gte(15)) turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyturEnergyOriginSimulationMachineByte(BuySimulationMachineByte.turEnergyOrigin));
        SimulationMachineBtye = SimulationMachineBtye.plus(1);
        BuySimulationMachineByte.turEnergyOrigin = BuySimulationMachineByte.turEnergyOrigin.plus(1);
    }
}
function PriceofBuyturEnergyOriginSimulationMachineByte(num) {
    return (new Decimal("1e6").mul(ten.pow(num))).floor();
}


function BuySimulationDataSimulationMachineByte() {
    if (simulationData.gte(PriceofBuySimulationDataSimulationMachineByte(BuySimulationMachineByte.SimulationData))) {
        if (IteratedTimes.gte(15)) simulationData = simulationData.sub(PriceofBuySimulationDataSimulationMachineByte(BuySimulationMachineByte.SimulationData));
        SimulationMachineBtye = SimulationMachineBtye.plus(1);
        BuySimulationMachineByte.SimulationData = BuySimulationMachineByte.SimulationData.plus(1);
    }
}
function PriceofBuySimulationDataSimulationMachineByte(num) {
    return (ten.mul(new Decimal(2).pow(num))).floor();
}


function BuyMaxSimulationMachineByte() {
    for (let i=BuySimulationMachineByte.turEnergy; PriceofBuyturEnergySimulationMachineByte(i).lte(turEnergy); i = i.plus(1)) {
        if (IteratedTimes.gte(15)) turEnergy = turEnergy.sub(PriceofBuyturEnergySimulationMachineByte(i));
        BuySimulationMachineByte.turEnergy = BuySimulationMachineByte.turEnergy.plus(1);
        SimulationMachineBtye = SimulationMachineBtye.plus(1);
        if (i.gte(maxLevelup)) break;
    }
    for (let i=BuySimulationMachineByte.turEnergyOrigin; PriceofBuyturEnergyOriginSimulationMachineByte(i).lte(turEnergyOrigin); i = i.plus(1)) {
        if (IteratedTimes.gte(15)) turEnergyOrigin = turEnergyOrigin.sub(PriceofBuyturEnergyOriginSimulationMachineByte(i));
        BuySimulationMachineByte.turEnergyOrigin = BuySimulationMachineByte.turEnergyOrigin.plus(1);
        SimulationMachineBtye = SimulationMachineBtye.plus(1);
        if (i.gte(maxLevelup)) break;
    }
    for (let i=BuySimulationMachineByte.SimulationData; PriceofBuySimulationDataSimulationMachineByte(i).lte(simulationData); i = i.plus(1)) {
        if (IteratedTimes.gte(15)) simulationData = simulationData.sub(PriceofBuySimulationDataSimulationMachineByte(i));
        BuySimulationMachineByte.SimulationData = BuySimulationMachineByte.SimulationData.plus(1);
        SimulationMachineBtye = SimulationMachineBtye.plus(1);
        if (i.gte(maxLevelup)) break;
    }
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
function BuyMaxfirstSimulationRoom() {
    for (let i=SimulationRoomLevel.Room1; PriceofBuyfirstSimulationRoom(i).mul(1000).lt(simulationData); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofBuyfirstSimulationRoom(i.plus(1000)).mul(1000).lt(simulationData)) {
            simulationData = simulationData.sub(PriceofBuyfirstSimulationRoom(i).mul(1000));
            SimulationRoomLevel.Room1 = SimulationRoomLevel.Room1.plus(1000);
            SimulationRoomAmount.Room1 = SimulationRoomAmount.Room1.plus(1000);
        } else break;
    }
    for (let i=SimulationRoomLevel.Room1; PriceofBuyfirstSimulationRoom(i).lte(simulationData); i = i.plus(1)) {
        simulationData = simulationData.sub(PriceofBuyfirstSimulationRoom(i));
        SimulationRoomLevel.Room1 = SimulationRoomLevel.Room1.plus(1);
        SimulationRoomAmount.Room1 = SimulationRoomAmount.Room1.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuysecondSimulationRoom() {
    if (simulationData.gte(PriceofBuysecondSimulationRoom(SimulationRoomLevel.Room2))) {
        simulationData = simulationData.sub(PriceofBuysecondSimulationRoom(SimulationRoomLevel.Room2));
        SimulationRoomLevel.Room2 = SimulationRoomLevel.Room2.plus(1);
        SimulationRoomAmount.Room2 = SimulationRoomAmount.Room2.plus(1);
    }
}
function PriceofBuysecondSimulationRoom(num) {
    if (num.eq(0)) return new Decimal(0);
    return ((ten.pow(num))).floor();
}
function BuyMaxsecondSimulationRoom() {
    for (let i=SimulationRoomLevel.Room2; PriceofBuysecondSimulationRoom(i).mul(1000).lt(simulationData); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofBuysecondSimulationRoom(i.plus(1000)).mul(1000).lt(simulationData)) {
            simulationData = simulationData.sub(PriceofBuysecondSimulationRoom(i).mul(1000));
            SimulationRoomLevel.Room2 = SimulationRoomLevel.Room2.plus(1000);
            SimulationRoomAmount.Room2 = SimulationRoomAmount.Room2.plus(1000);
        } else break;
    }
    for (let i=SimulationRoomLevel.Room2; PriceofBuysecondSimulationRoom(i).lte(simulationData); i = i.plus(1)) {
        simulationData = simulationData.sub(PriceofBuysecondSimulationRoom(i));
        SimulationRoomLevel.Room2 = SimulationRoomLevel.Room2.plus(1);
        SimulationRoomAmount.Room2 = SimulationRoomAmount.Room2.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuythirdSimulationRoom() {
    if (simulationData.gte(PriceofBuythirdSimulationRoom(SimulationRoomLevel.Room3))) {
        simulationData = simulationData.sub(PriceofBuythirdSimulationRoom(SimulationRoomLevel.Room3));
        SimulationRoomLevel.Room3 = SimulationRoomLevel.Room3.plus(1);
        SimulationRoomAmount.Room3 = SimulationRoomAmount.Room3.plus(1);
    }
}
function PriceofBuythirdSimulationRoom(num) {
    if (num.eq(0)) return new Decimal(0);
    return ((new Decimal(100).pow(num))).floor();
}
function BuyMaxthirdSimulationRoom() {
    for (let i=SimulationRoomLevel.Room3; PriceofBuythirdSimulationRoom(i).mul(1000).lt(simulationData); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofBuythirdSimulationRoom(i.plus(1000)).mul(1000).lt(simulationData)) {
            simulationData = simulationData.sub(PriceofBuythirdSimulationRoom(i).mul(1000));
            SimulationRoomLevel.Room3 = SimulationRoomLevel.Room3.plus(1000);
            SimulationRoomAmount.Room3 = SimulationRoomAmount.Room3.plus(1000);
        } else break;
    }
    for (let i=SimulationRoomLevel.Room3; PriceofBuythirdSimulationRoom(i).lte(simulationData); i = i.plus(1)) {
        simulationData = simulationData.sub(PriceofBuythirdSimulationRoom(i));
        SimulationRoomLevel.Room3 = SimulationRoomLevel.Room3.plus(1);
        SimulationRoomAmount.Room3 = SimulationRoomAmount.Room3.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyfourthSimulationRoom() {
    if (simulationData.gte(PriceofBuyfourthSimulationRoom(SimulationRoomLevel.Room4))) {
        simulationData = simulationData.sub(PriceofBuyfourthSimulationRoom(SimulationRoomLevel.Room4));
        SimulationRoomLevel.Room4 = SimulationRoomLevel.Room4.plus(1);
        SimulationRoomAmount.Room4 = SimulationRoomAmount.Room4.plus(1);
    }
}
function PriceofBuyfourthSimulationRoom(num) {
    if (num.eq(0)) return new Decimal(0);
    return ((new Decimal(100).pow(num))).floor();
}
function BuyMaxfourthSimulationRoom() {
    for (let i=SimulationRoomLevel.Room4; PriceofBuyfourthSimulationRoom(i).mul(1000).lt(simulationData); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofBuyfourthSimulationRoom(i.plus(1000)).mul(1000).lt(simulationData)) {
            simulationData = simulationData.sub(PriceofBuyfourthSimulationRoom(i).mul(1000));
            SimulationRoomLevel.Room4 = SimulationRoomLevel.Room4.plus(1000);
            SimulationRoomAmount.Room4 = SimulationRoomAmount.Room4.plus(1000);
        } else break;
    }
    for (let i=SimulationRoomLevel.Room4; PriceofBuyfourthSimulationRoom(i).lte(simulationData); i = i.plus(1)) {
        simulationData = simulationData.sub(PriceofBuyfourthSimulationRoom(i));
        SimulationRoomLevel.Room4 = SimulationRoomLevel.Room4.plus(1);
        SimulationRoomAmount.Room4 = SimulationRoomAmount.Room4.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyfifthSimulationRoom() {
    if (simulationData.gte(PriceofBuyfifthSimulationRoom(SimulationRoomLevel.Room5))) {
        simulationData = simulationData.sub(PriceofBuyfifthSimulationRoom(SimulationRoomLevel.Room5));
        SimulationRoomLevel.Room5 = SimulationRoomLevel.Room5.plus(1);
        SimulationRoomAmount.Room5 = SimulationRoomAmount.Room5.plus(1);
    }
}
function PriceofBuyfifthSimulationRoom(num) {
    if (num.eq(0)) return new Decimal(0);
    return ((new Decimal(1e3).pow(num))).floor();
}
function BuyMaxfifthSimulationRoom() {
    for (let i=SimulationRoomLevel.Room5; PriceofBuyfifthSimulationRoom(i).mul(1000).lt(simulationData); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofBuyfifthSimulationRoom(i.plus(1000)).mul(1000).lt(simulationData)) {
            simulationData = simulationData.sub(PriceofBuyfifthSimulationRoom(i).mul(1000));
            SimulationRoomLevel.Room5 = SimulationRoomLevel.Room5.plus(1000);
            SimulationRoomAmount.Room5 = SimulationRoomAmount.Room5.plus(1000);
        } else break;
    }
    for (let i=SimulationRoomLevel.Room5; PriceofBuyfifthSimulationRoom(i).lte(simulationData); i = i.plus(1)) {
        simulationData = simulationData.sub(PriceofBuyfifthSimulationRoom(i));
        SimulationRoomLevel.Room5 = SimulationRoomLevel.Room5.plus(1);
        SimulationRoomAmount.Room5 = SimulationRoomAmount.Room5.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuysixthSimulationRoom() {
    if (simulationData.gte(PriceofBuysixthSimulationRoom(SimulationRoomLevel.Room6))) {
        simulationData = simulationData.sub(PriceofBuysixthSimulationRoom(SimulationRoomLevel.Room6));
        SimulationRoomLevel.Room6 = SimulationRoomLevel.Room6.plus(1);
        SimulationRoomAmount.Room6 = SimulationRoomAmount.Room6.plus(1);
    }
}
function PriceofBuysixthSimulationRoom(num) {
    if (num.eq(0)) return new Decimal(0);
    return ((new Decimal(1e3).pow(num))).floor();
}
function BuyMaxsixthSimulationRoom() {
    for (let i=SimulationRoomLevel.Room6; PriceofBuysixthSimulationRoom(i).mul(1000).lt(simulationData); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofBuysixthSimulationRoom(i.plus(1000)).mul(1000).lt(simulationData)) {
            simulationData = simulationData.sub(PriceofBuysixthSimulationRoom(i).mul(1000));
            SimulationRoomLevel.Room6 = SimulationRoomLevel.Room6.plus(1000);
            SimulationRoomAmount.Room6 = SimulationRoomAmount.Room6.plus(1000);
        } else break;
    }
    for (let i=SimulationRoomLevel.Room6; PriceofBuysixthSimulationRoom(i).lte(simulationData); i = i.plus(1)) {
        simulationData = simulationData.sub(PriceofBuysixthSimulationRoom(i));
        SimulationRoomLevel.Room6 = SimulationRoomLevel.Room6.plus(1);
        SimulationRoomAmount.Room6 = SimulationRoomAmount.Room6.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyseventhSimulationRoom() {
    if (simulationData.gte(PriceofBuyseventhSimulationRoom(SimulationRoomLevel.Room7))) {
        simulationData = simulationData.sub(PriceofBuyseventhSimulationRoom(SimulationRoomLevel.Room7));
        SimulationRoomLevel.Room7 = SimulationRoomLevel.Room7.plus(1);
        SimulationRoomAmount.Room7 = SimulationRoomAmount.Room7.plus(1);
    }
}
function PriceofBuyseventhSimulationRoom(num) {
    if (num.eq(0)) return new Decimal(0);
    return ((new Decimal(1e4).pow(num))).floor();
}
function BuyMaxseventhSimulationRoom() {
    for (let i=SimulationRoomLevel.Room7; PriceofBuyseventhSimulationRoom(i).mul(1000).lt(simulationData); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofBuyseventhSimulationRoom(i.plus(1000)).mul(1000).lt(simulationData)) {
            simulationData = simulationData.sub(PriceofBuyseventhSimulationRoom(i).mul(1000));
            SimulationRoomLevel.Room7 = SimulationRoomLevel.Room7.plus(1000);
            SimulationRoomAmount.Room7 = SimulationRoomAmount.Room7.plus(1000);
        } else break;
    }
    for (let i=SimulationRoomLevel.Room7; PriceofBuyseventhSimulationRoom(i).lte(simulationData); i = i.plus(1)) {
        simulationData = simulationData.sub(PriceofBuyseventhSimulationRoom(i));
        SimulationRoomLevel.Room7 = SimulationRoomLevel.Room7.plus(1);
        SimulationRoomAmount.Room7 = SimulationRoomAmount.Room7.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyeighthSimulationRoom() {
    if (simulationData.gte(PriceofBuyeighthSimulationRoom(SimulationRoomLevel.Room8))) {
        simulationData = simulationData.sub(PriceofBuyeighthSimulationRoom(SimulationRoomLevel.Room8));
        SimulationRoomLevel.Room8 = SimulationRoomLevel.Room8.plus(1);
        SimulationRoomAmount.Room8 = SimulationRoomAmount.Room8.plus(1);
    }
}
function PriceofBuyeighthSimulationRoom(num) {
    if (num.eq(0)) return new Decimal(0);
    return ((new Decimal(1e4).pow(num))).floor();
}
function BuyMaxeighthSimulationRoom() {
    for (let i=SimulationRoomLevel.Room8; PriceofBuyeighthSimulationRoom(i).mul(1000).lt(simulationData); i = i.plus(1000)) {
        if (i.plus(1000).gte(maxLevelup)) break;
        if (PriceofBuyeighthSimulationRoom(i.plus(1000)).mul(1000).lt(simulationData)) {
            simulationData = simulationData.sub(PriceofBuyeighthSimulationRoom(i).mul(1000));
            SimulationRoomLevel.Room8 = SimulationRoomLevel.Room8.plus(1000);
            SimulationRoomAmount.Room8 = SimulationRoomAmount.Room8.plus(1000);
        } else break;
    }
    for (let i=SimulationRoomLevel.Room8; PriceofBuyeighthSimulationRoom(i).lte(simulationData); i = i.plus(1)) {
        simulationData = simulationData.sub(PriceofBuyeighthSimulationRoom(i));
        SimulationRoomLevel.Room8 = SimulationRoomLevel.Room8.plus(1);
        SimulationRoomAmount.Room8 = SimulationRoomAmount.Room8.plus(1);
        if (i.gte(maxLevelup)) break;
    }
}


function BuyincreamentalIteration() {
    if (IterationData.gte(PriceofBuyincreamentalIteration(increamentalIterationLevel))) {
        IterationData = IterationData.sub(PriceofBuyincreamentalIteration(increamentalIterationLevel));
        increamentalIterationLevel = increamentalIterationLevel.plus(1);
    }
}
function PriceofBuyincreamentalIteration(num) {
    return (new Decimal(500).mul(new Decimal(25).pow(num))).floor();
}

function BuyOriginIteration() {
    if (IterationData.gte(PriceofBuyOriginIteration(OriginIterationLevel))) {
        IterationData = IterationData.sub(PriceofBuyOriginIteration(OriginIterationLevel));
        OriginIterationLevel = OriginIterationLevel.plus(1);
    }
}
function PriceofBuyOriginIteration(num) {
    return (ten.pow(num)).floor();
}


function BuyEnergyExpansion() {
    if (IterationData.gte(PriceofBuyEnergyExpansion(EnergyExpansionLevel))) {
        IterationData = IterationData.sub(PriceofBuyEnergyExpansion(EnergyExpansionLevel));
        EnergyExpansionLevel = EnergyExpansionLevel.plus(1);
    }
}
function PriceofBuyEnergyExpansion(num) {
    return (ten.pow(num)).floor();
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
function BuySimulationMachineλa3() {BuySimulationMachine(5, "λa3", SimulationMachine.λa2)};
function BuySimulationMachineλa4() {if (PowerOnLevel.lt(1)) BuySimulationMachine(1e5, "λa4", SimulationMachine.λa3); else BuySimulationMachine(10, "λa4", SimulationMachine.λa3);};
function BuySimulationMachineλa5() {BuySimulationMachine(500, "λa5", SimulationMachine.λa4 && SimulationMachineBtye.gte(1000))};
function BuySimulationMachineλb1() {BuySimulationMachine(1, "λb1", true)};
function BuySimulationMachineλb2() {BuySimulationMachine(3, "λb2", SimulationMachine.λb1)};
function BuySimulationMachineλb3() {if (PowerOnLevel.lt(2)) BuySimulationMachine(1e6, "λb3", SimulationMachine.λb2); else BuySimulationMachine(10, "λb3", SimulationMachine.λb2);};
function BuySimulationMachineλb4() {if (PowerOnLevel.lt(3)) BuySimulationMachine(5e7, "λb4", SimulationMachine.λb3); else BuySimulationMachine(50, "λb4", SimulationMachine.λb3);};
function BuySimulationMachineλb5() {if (PowerOnLevel.lt(4)) BuySimulationMachine(3e9, "λb5", SimulationMachine.λb4); else BuySimulationMachine(300, "λb5", SimulationMachine.λb4);};
function BuySimulationMachineλc1() {BuySimulationMachine(0, "λc1", true)};
function BuySimulationMachineλc2() {BuySimulationMachine(10, "λc2", SimulationMachine.λc1)};
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
function BuySimulationMachineγa1() {BuySimulationMachine(1, "γa1", true)};
function BuySimulationMachineγa2() {BuySimulationMachine(5, "γa2", SimulationMachine.γa1 && !SimulationMachine.γb2 && !SimulationMachine.γc2)};
function BuySimulationMachineγb2() {BuySimulationMachine(8, "γb2", SimulationMachine.γa1 && !SimulationMachine.γa2 && !SimulationMachine.γc2)};
function BuySimulationMachineγc2() {BuySimulationMachine(8, "γc2", SimulationMachine.γa1 && !SimulationMachine.γa2 && !SimulationMachine.γb2)};
function BuySimulationMachineγa3() {BuySimulationMachine(5, "γa3", SimulationMachine.γa2 || SimulationMachine.γb2 || SimulationMachine.γc2)};
function BuySimulationMachineγa4() {BuySimulationMachine(9, "γa4", SimulationMachine.γa3 && !SimulationMachine.γb4 && !SimulationMachine.γc4)};
function BuySimulationMachineγb4() {BuySimulationMachine(9, "γb4", SimulationMachine.γa3 && !SimulationMachine.γa4 && !SimulationMachine.γc4)};
function BuySimulationMachineγc4() {BuySimulationMachine(9, "γc4", SimulationMachine.γa3 && !SimulationMachine.γa4 && !SimulationMachine.γb4)};
function BuySimulationMachineγa5() {BuySimulationMachine(30, "γa5", SimulationMachine.γa4 || SimulationMachine.γb4 || SimulationMachine.γc4)};


function IterationStrengthenProduce1() {
    if (IterationData.gte(1)) {
        IterationData = IterationData.sub(1);
        IterationStrengthen.Produce1.if = true;
    }
}
function IterationStrengthenReset1() {
    if (IterationData.gte(1)) {
        IterationData = IterationData.sub(1);
        IterationStrengthen.Reset1.if = true;
    }
}
function IterationStrengthenAuto1() {
    if (IterationData.gte(1)) {
        IterationData = IterationData.sub(1);
        IterationStrengthen.Auto1.if = true;
    }
}
function IterationStrengthenProduce2() {
    if (IterationData.gte(1) && IterationStrengthen.Produce1.if) {
        IterationData = IterationData.sub(1);
        IterationStrengthen.Produce2.if = true;
    }
}
function IterationStrengthenReset2() {
    if (IterationData.gte(1) && IterationStrengthen.Reset1.if) {
        IterationData = IterationData.sub(1);
        IterationStrengthen.Reset2.if = true;
    }
}
function IterationStrengthenAuto2() {
    if (IterationData.gte(1) && IterationStrengthen.Auto1.if) {
        IterationData = IterationData.sub(1);
        IterationStrengthen.Auto2.if = true;
    }
}
function IterationStrengthenProduce3() {
    if (IterationData.gte(2) && IterationStrengthen.Produce2.if) {
        IterationData = IterationData.sub(2);
        IterationStrengthen.Produce3.if = true;
    }
}
function IterationStrengthenReset3() {
    if (IterationData.gte(1) && IterationStrengthen.Reset2.if) {
        IterationData = IterationData.sub(1);
        IterationStrengthen.Reset3.if = true;
    }
}
function IterationStrengthenAuto3() {
    if (IterationData.gte(1) && IterationStrengthen.Auto2.if) {
        IterationData = IterationData.sub(1);
        IterationStrengthen.Auto3.if = true;
    }
}
function IterationStrengthenProduce4() {
    if (IterationData.gte(3) && IterationStrengthen.Produce3.if) {
        IterationData = IterationData.sub(3);
        IterationStrengthen.Produce4.if = true;
    }
}
function IterationStrengthenReset4() {
    if (IterationData.gte(1) && IterationStrengthen.Reset3.if) {
        IterationData = IterationData.sub(1);
        IterationStrengthen.Reset4.if = true;
    }
}
function IterationStrengthenAuto4() {
    if (IterationData.gte(1) && IterationStrengthen.Auto3.if) {
        IterationData = IterationData.sub(1);
        IterationStrengthen.Auto4.if = true;
    }
}

function IterationStrengthenExtra1() {
    if (IterationData.gte(5) && IterationStrengthen.Produce4.if && IterationStrengthen.Reset4.if && IterationStrengthen.Auto4.if) {
        IterationData = IterationData.sub(5);
        IterationStrengthen.Extra1.if = true;
    }
}

function IterationStrengthenExtra2() {
    if (IterationData.gte(10) && IterationStrengthen.Extra1.if) {
        IterationData = IterationData.sub(10);
        IterationStrengthen.Extra2.if = true;
    }
}

function IterationStrengthenExtra3() {
    if (IterationData.gte(100) && IterationStrengthen.Extra2.if) {
        IterationData = IterationData.sub(100);
        IterationStrengthen.Extra3.if = true;
    }
}


function BuyfirstIterationRoom() {
    if (IterationData.gte(PriceofBuyfirstIterationRoom(IterationRoomLevel.Room1))) {
        IterationData = IterationData.sub(PriceofBuyfirstIterationRoom(IterationRoomLevel.Room1));
        IterationRoomLevel.Room1 = IterationRoomLevel.Room1.plus(1);
        IterationRoomAmount.Room1 = IterationRoomAmount.Room1.plus(1);
    }
}
function PriceofBuyfirstIterationRoom(num) {
    return ((ten.pow(num))).floor();
}


function BuysecondIterationRoom() {
    if (IterationData.gte(PriceofBuysecondIterationRoom(IterationRoomLevel.Room1))) {
        IterationData = IterationData.sub(PriceofBuysecondIterationRoom(IterationRoomLevel.Room1));
        IterationRoomLevel.Room1 = IterationRoomLevel.Room1.plus(1);
        IterationRoomAmount.Room1 = IterationRoomAmount.Room1.plus(1);
    }
}
function PriceofBuysecondIterationRoom(num) {
    return (new Decimal(100).mul(new Decimal(100).pow(num.plus))).floor();
}


function BuythirdIterationRoom() {
    if (IterationData.gte(PriceofBuythirdIterationRoom(IterationRoomLevel.Room1))) {
        IterationData = IterationData.sub(PriceofBuythirdIterationRoom(IterationRoomLevel.Room1));
        IterationRoomLevel.Room1 = IterationRoomLevel.Room1.plus(1);
        IterationRoomAmount.Room1 = IterationRoomAmount.Room1.plus(1);
    }
}
function PriceofBuythirdIterationRoom(num) {
    return (new Decimal(1e3).mul(new Decimal(1e3).pow(num.plus))).floor();
}


function BuyfourthIterationRoom() {
    if (IterationData.gte(PriceofBuyfourthIterationRoom(IterationRoomLevel.Room1))) {
        IterationData = IterationData.sub(PriceofBuyfourthIterationRoom(IterationRoomLevel.Room1));
        IterationRoomLevel.Room1 = IterationRoomLevel.Room1.plus(1);
        IterationRoomAmount.Room1 = IterationRoomAmount.Room1.plus(1);
    }
}
function PriceofBuyfourthIterationRoom(num) {
    return (new Decimal(1e4).mul(new Decimal(1e4).pow(num.plus))).floor();
}


function BuyfifthIterationRoom() {
    if (IterationData.gte(PriceofBuyfifthIterationRoom(IterationRoomLevel.Room1))) {
        IterationData = IterationData.sub(PriceofBuyfifthIterationRoom(IterationRoomLevel.Room1));
        IterationRoomLevel.Room1 = IterationRoomLevel.Room1.plus(1);
        IterationRoomAmount.Room1 = IterationRoomAmount.Room1.plus(1);
    }
}
function PriceofBuyfifthIterationRoom(num) {
    return (new Decimal(1e40).mul(new Decimal(1e5).pow(num.plus))).floor();
}


function BuysixthIterationRoom() {
    if (IterationData.gte(PriceofBuysixthIterationRoom(IterationRoomLevel.Room1))) {
        IterationData = IterationData.sub(PriceofBuysixthIterationRoom(IterationRoomLevel.Room1));
        IterationRoomLevel.Room1 = IterationRoomLevel.Room1.plus(1);
        IterationRoomAmount.Room1 = IterationRoomAmount.Room1.plus(1);
    }
}
function PriceofBuysixthIterationRoom(num) {
    return (new Decimal(1e60).mul(new Decimal(1e10).pow(num.plus))).floor();
}


function BuyseventhIterationRoom() {
    if (IterationData.gte(PriceofBuyseventhIterationRoom(IterationRoomLevel.Room1))) {
        IterationData = IterationData.sub(PriceofBuyseventhIterationRoom(IterationRoomLevel.Room1));
        IterationRoomLevel.Room1 = IterationRoomLevel.Room1.plus(1);
        IterationRoomAmount.Room1 = IterationRoomAmount.Room1.plus(1);
    }
}
function PriceofBuyseventhIterationRoom(num) {
    return (new Decimal(1e90).mul(new Decimal(1e15).pow(num.plus))).floor();
}


function BuyeighthIterationRoom() {
    if (IterationData.gte(PriceofBuyeighththIterationRoom(IterationRoomLevel.Room1))) {
        IterationData = IterationData.sub(PriceofBuyeighththIterationRoom(IterationRoomLevel.Room1));
        IterationRoomLevel.Room1 = IterationRoomLevel.Room1.plus(1);
        IterationRoomAmount.Room1 = IterationRoomAmount.Room1.plus(1);
    }
}
function PriceofBuyeighthIterationRoom(num) {
    return (new Decimal(1e140).mul(new Decimal(1e20).pow(num.plus))).floor();
}