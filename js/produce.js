document.addEventListener('click', function(event) {
    const target = event.target;

    // 简单判断：如果是BUTTON标签或有btn类，就不处理
    if (target.tagName === 'BUTTON' || 
        target.classList.contains('btn') ||
        target.classList.contains('btn-reset')) {
        return;
    }

    // 检查父元素：如果父元素是按钮，也不处理
    let parent = target.parentElement;
    while (parent && parent !== document.body) {
        if (parent.tagName === 'BUTTON' || 
            parent.classList.contains('btn') ||
            parent.classList.contains('btn-reset')) {
            return;
        }
        parent = parent.parentElement;
    }
    
    if (space === "Simulation") return;
    // 只有点击非按钮区域才增加龟能
    turEnergy = turEnergy.plus((clickPower.mul(EfficientClickLevel.mul(1 + challengereward.baseofEfficientClick).plus(1)).mul(effectturEnergyTier).mul(challengebuffs.turEnergy).mul(challengereward.turEnergy).mul(effectOriginEnhance.mul(turEnergyOrigin).plus(1)).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βa2).mul(effectSimulationMachine.αa4).mul(effectturEnergyCatalysis)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2));
    TotalClicks = TotalClicks.plus(1);
});

function setturEnergyAuto() {
    if (setAuto.turEnergyAuto) setAuto.turEnergyAuto = false;
    else setAuto.turEnergyAuto = true;
}
function setturEnergyOriginAuto() {
    if (setAuto.turEnergyOriginAuto) setAuto.turEnergyOriginAuto = false;
    else setAuto.turEnergyOriginAuto = true;
}

function restartAutoClicker() {
    // 清除旧的定时器
    if (autoClickerInterval) {
        clearInterval(autoClickerInterval);
    }

    // 创建新的定时器
    autoClickerInterval = setInterval(() => {
        turEnergy = turEnergy.plus((autoClickers.mul(clickPower.mul(EfficientClickLevel.mul(new Decimal(challengereward.baseofEfficientClick).plus(1)).plus(1))).mul(Decimal.max(1,(((new Decimal(2).sub(challengebuffs.baseofHighspeedclicking).plus(challengereward.baseofHighspeedclicking))).pow(HighspeedClickingLevel)).div(60))).mul(effectturEnergyTier).mul(challengebuffs.turEnergy).mul(challengereward.turEnergy).mul((effectOriginEnhance.mul(turEnergyOrigin)).plus(1)).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βa2).mul(effectSimulationMachine.αa4)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2));
    }, Decimal.max(new Decimal(1000).div((((new Decimal(2).sub(challengebuffs.baseofHighspeedclicking).plus(challengereward.baseofHighspeedclicking))).pow(HighspeedClickingLevel))),16) );
}

const autotipsChange = setInterval(() => {
    Changetips();
}, 20000);

function restartOriginProduce() {
    if (OriginProducingInterval) {
        clearInterval(OriginProducingInterval);
    }

    OriginProducingInterval = setInterval(() => {
        if (OriginProduceEnergyLevel.gt(0) && challengebuffs.disabledOriginLevelup) {
            if (challengereward.EfficientOriginProduce) turEnergy = turEnergy.plus((turEnergyOrigin.mul(new Decimal(1e16).mul(effectOriginProduce)).div(60).mul(challengereward.turEnergy).mul((effectOriginEnhance.mul(turEnergyOrigin)).plus(1)).mul(EfficientClickLevel.mul(new Decimal(challengereward.baseofEfficientClick).plus(1)).plus(1)).mul((((new Decimal(2).sub(challengebuffs.baseofHighspeedclicking).plus(challengereward.baseofHighspeedclicking)))).pow(HighspeedClickingLevel)).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βb1).mul(effectSimulationMachine.βa4).mul(effectSimulationMachine.αa4).mul(effectturEnergyCatalysis)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2));
            else turEnergy = turEnergy.plus((turEnergyOrigin.mul(new Decimal(1e16).mul(effectOriginProduce)).div(60).mul(challengereward.turEnergy).mul(new Decimal(1).plus(effectOriginEnhance.mul(turEnergyOrigin))).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βb1).mul(effectSimulationMachine.βa4).mul(effectSimulationMachine.αa4).mul(effectturEnergyCatalysis)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2));
        }
    }, 16);
}

function restartSimulationRoomProduce() {
    if (SimulationRoomProduceInterval) {
        clearInterval(SimulationRoomProduceInterval);
    }

    SimulationRoomProduceInterval = setInterval(() => {
        SimulationPower = SimulationPower.plus(SimulationRoomAmount.Room1.mul(effectSimulationRoom.Room1).div(60));
        SimulationRoomAmount.Room1 = SimulationRoomAmount.Room1.plus(SimulationRoomAmount.Room2.mul(effectSimulationRoom.Room2).div(60))
    }, 16);
}

function restartAutoBuy() {
    if (AutoBuyInterval) {
        clearInterval(AutoBuyInterval);
    }

    AutoBuyInterval = setInterval(() => {
        if (state === "inSimulation") {
            if (experimentreward.SimulationExperiment2 && setAuto.turEnergyAuto) {
                if (challengereward.BuyMaxturEnergy) BuyMaxturEnergyLevelup(); else turEnergyLevelup();
                if (turEnergyLevel.gte(6) && challengebuffs.AutoClicker && challengebuffs.disabledturEnergyLevelup && !SimulationMachine.βb1) {if (challengereward.BuyMaxAutoClicker || challengereward.BuyMaxturEnergy) BuyMaxautoClicker(); else BuyautoClicker();}
                if (challengebuffs.disabledturEnergyLevelup && experimentbuffs.SimulationExperiment5) {if (turEnergyLevel.gte(8)) BuyMaxEfficientClick(); else BuyEfficientClick();}
                if (challengebuffs.disabledturEnergyLevelup) {if (turEnergyLevel.gte(12)) BuyMaxHighspeedClicking(); else BuyHighspeedClicking();}
                if ((turEnergyLevel.gte(60) || turEnergyTier.gt(0))) BuyMaxturEnergyTier(); else turEnergyTierup();
                if (challengebuffs.disabledturEnergyLevelup) {if ((turEnergyLevel.gte(100) || TierEnhanceLevel.gt(0))) BuyMaxTierEnhance(); else BuyTierEnhance();}
            }
            if (experimentreward.SimulationExperiment3 && setAuto.turEnergyOriginAuto) {
                if (false) return; else BuyOriginAmassFasten();
                if (false) return; else BuyOriginProduceEnergy(); 
                if (false) return; else BuyClickOrigin();  
                if (false) return; else BuyTierOrigin(); 
                if (false) return; else BuyOriginEnhance(); 
            }
        }
        requestAnimationFrame(restartAutoBuy);
    }, 16);
}

function restartBasicEnergyProduce() {
    if (BasicEnergyProduceInterval) {
        clearInterval(BasicEnergyProduceInterval);
    }
    BasicEnergyProduceInterval = setInterval(() => {
        SolarEnergy = SolarEnergy.plus(EnergyEffection.div(60));

        requestAnimationFrame(restartBasicEnergyProduce);
    },16);
}