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
    turEnergy = turEnergy.plus((clickPower.mul(EfficientClickLevel.mul(1 + challengereward.baseofEfficientClick).plus(1)).mul(effectturEnergyTier).mul(challengebuffs.turEnergy).mul(challengereward.turEnergy).mul(effectOriginEnhance.mul(turEnergyOrigin).plus(1)).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βa2).mul(effectSimulationMachine.αa4).mul(effectturEnergyCatalysis).mul(challengebuffs.BasicEnergyChallenge4)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2));
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
function setEnergyMachineAuto() {
    if (setAuto.EnergyMachineAuto) setAuto.EnergyMachineAuto = false;
    else setAuto.EnergyMachineAuto = true;
}
function setSolarEnergyAuto() {
    if (setAuto.SolarEnergyAuto) setAuto.SolarEnergyAuto = false;
    else setAuto.SolarEnergyAuto = true;
}
function setChemicalEnergyAuto() {
    if (setAuto.ChemicalEnergyAuto) setAuto.ChemicalEnergyAuto = false;
    else setAuto.ChemicalEnergyAuto = true;
}
function setElectricEnergyAuto() {
    if (setAuto.ElectricEnergyAuto) setAuto.ElectricEnergyAuto = false;
    else setAuto.ElectricEnergyAuto = true;
}

function restartAutoClicker() {
    // 清除旧的定时器
    if (autoClickerInterval) {
        clearInterval(autoClickerInterval);
    }

    // 创建新的定时器
    autoClickerInterval = setInterval(() => {
        turEnergy = turEnergy.plus((autoClickers.mul(clickPower.mul(EfficientClickLevel.mul(new Decimal(challengereward.baseofEfficientClick).plus(1)).plus(1))).mul(Decimal.max(1,(((new Decimal(2).sub(challengebuffs.baseofHighspeedclicking).plus(challengereward.baseofHighspeedclicking))).pow(HighspeedClickingLevel)).div(60))).mul(effectturEnergyTier).mul(challengebuffs.turEnergy).mul(challengereward.turEnergy).mul((effectOriginEnhance.mul(turEnergyOrigin)).plus(1)).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βa2).mul(effectSimulationMachine.αa4).mul(challengebuffs.BasicEnergyChallenge4)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2));
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
            if (challengereward.EfficientOriginProduce) turEnergy = turEnergy.plus((turEnergyOrigin.mul(new Decimal(1e16).mul(effectOriginProduce)).div(60).mul(challengereward.turEnergy).mul((effectOriginEnhance.mul(turEnergyOrigin)).plus(1)).mul(EfficientClickLevel.mul(new Decimal(challengereward.baseofEfficientClick).plus(1)).plus(1)).mul((((new Decimal(2).sub(challengebuffs.baseofHighspeedclicking).plus(challengereward.baseofHighspeedclicking)))).pow(HighspeedClickingLevel)).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βb1).mul(effectSimulationMachine.βa4).mul(effectSimulationMachine.αa4).mul(effectturEnergyCatalysis).mul(challengebuffs.BasicEnergyChallenge4)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2));
            else turEnergy = turEnergy.plus((turEnergyOrigin.mul(new Decimal(1e16).mul(effectOriginProduce)).div(60).mul(challengereward.turEnergy).mul(new Decimal(1).plus(effectOriginEnhance.mul(turEnergyOrigin))).mul(effectClickOrigin).mul(effectturEnergyTier.pow(effectTierOrigin)).mul(effectOriginMilestone7).mul(effectturEnergyOriginChallenge6).mul(SimulationUpgrades.turEnergy1.num).mul(SimulationUpgrades.turEnergy2.num).mul(SimulationUpgrades.turEnergy3.num).mul(SimulationUpgrades.turEnergy4.num).mul(effectSimulationMachine.αa1).mul(effectSimulationMachine.αa2).mul(effectSimulationPower).mul(effectSimulationMachine.βb1).mul(effectSimulationMachine.βa4).mul(effectSimulationMachine.αa4).mul(effectturEnergyCatalysis).mul(challengebuffs.BasicEnergyChallenge4)).pow(challengebuffs.turEnergy2).pow(effect1SimulationExperiment2));
        }
    }, 16);
}

function restartSimulationRoomProduce() {
    if (SimulationRoomProduceInterval) {
        clearInterval(SimulationRoomProduceInterval);
    }

    SimulationRoomProduceInterval = setInterval(() => {
        SimulationPower = SimulationPower.plus(SimulationRoomAmount.Room1.mul(effectSimulationRoom.Room1).mul(SimulationMachineBtye.pow(effectKineticEnergy)).div(60));
        SimulationRoomAmount.Room1 = SimulationRoomAmount.Room1.plus(SimulationRoomAmount.Room2.mul(effectSimulationRoom.Room2).div(60));
        SimulationRoomAmount.Room2 = SimulationRoomAmount.Room2.plus(SimulationRoomAmount.Room3.mul(effectSimulationRoom.Room3).div(60));
        SimulationRoomAmount.Room3 = SimulationRoomAmount.Room3.plus(SimulationRoomAmount.Room4.mul(effectSimulationRoom.Room4).div(60));
        SimulationRoomAmount.Room4 = SimulationRoomAmount.Room4.plus(SimulationRoomAmount.Room5.mul(effectSimulationRoom.Room5).div(60));
        SimulationRoomAmount.Room5 = SimulationRoomAmount.Room5.plus(SimulationRoomAmount.Room6.mul(effectSimulationRoom.Room6).div(60));
        SimulationRoomAmount.Room6 = SimulationRoomAmount.Room6.plus(SimulationRoomAmount.Room7.mul(effectSimulationRoom.Room7).div(60));
        SimulationRoomAmount.Room7 = SimulationRoomAmount.Room7.plus(SimulationRoomAmount.Room8.mul(effectSimulationRoom.Room8).div(60));
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
                if ((turEnergyLevel.gte(60) || turEnergyTier.gt(0)) && challengebuffs.BasicEnergyChallenge3) {if (challengereward.BuyMaxturEnergy) BuyMaxturEnergyTier(); else turEnergyTierup();}
                if (challengebuffs.disabledturEnergyLevelup && challengebuffs.BasicEnergyChallenge2) {if ((turEnergyLevel.gte(100) || TierEnhanceLevel.gt(0))) BuyMaxTierEnhance(); else BuyTierEnhance();}
            }
            if (experimentreward.SimulationExperiment3 && setAuto.turEnergyOriginAuto) {
                if (false) return; else BuyOriginAmassFasten();
                if (false) return; else BuyOriginProduceEnergy(); 
                if (false) return; else BuyClickOrigin();  
                if (false) return; else BuyTierOrigin(); 
                if (false) return; else BuyOriginEnhance(); 
            }
            if (setAuto.EnergyMachineAuto) {
                if (false) return; else BuyEnergyMachineA();
                if (experimentreward.SimulationExperiment6) {if (false) return; else BuyEnergyMachineB(); }
                if (experimentreward.SimulationExperiment6) {if (false) return; else BuyEnergyMachineC(); }
                if (experimentreward.SimulationExperiment7) {if (false) return; else BuyEnergyMachineD(); }
            }
            if (setAuto.SolarEnergyAuto) {
                if (false) return; else BuyturEnergyCatalysis();
                if (false) return; else BuyOriginCatalysis();
                if (false) return; else BuyClickCatalysis();
                if (false) return; else BuyPhotosynthesis();
            }
            if (setAuto.ChemicalEnergyAuto) {
                if (false) return; else BuySimulationCatalysis();
                if (false) return; else BuyTierCatalysis();
                if (false) return; else BuyReactionCatalysis();
                if (false) return; else BuyPrimaryBattery();
            }
            if (setAuto.ElectricEnergyAuto) {
                if (false) return; else BuyBoostVoltage();
                if (false) return; else BuyElectrolysis();
                if (false) return; else BuyLonization();
                if (false) return; else BuyMotor();
            }
        }
    }, 16);
}

function restartBasicEnergyProduce() {
    if (BasicEnergyProduceInterval) {
        clearInterval(BasicEnergyProduceInterval);
    }
    BasicEnergyProduceInterval = setInterval(() => {
        if (challengebuffs.disabledOriginLevelup) turEnergyOrigin = turEnergyOrigin.plus(Decimal.max(0,((((turEnergy.log10().sub(40)).div(2).mul(new Decimal(2).pow(OriginAmassFastenLevel)).mul(challengereward.turEnergyOriginAmount).mul(SimulationUpgrades.turEnergyOrigin1.num).mul(effect2SimulationExperiment5).mul(effectOriginCatalysis)).pow(effect1SimulationExperiment3).pow(effectSimulationMachine.βa3)).mul(effectSimulationExperiment4).mul(effectElectrolysis).div(60)).floor()));
        else turEnergyOrigin = turEnergyOrigin.plus(Decimal.max(0,(((turEnergy.log10().sub(40).div(2).mul(challengereward.turEnergyOriginAmount).mul(SimulationUpgrades.turEnergyOrigin1.num).mul(effect2SimulationExperiment5).mul(effectOriginCatalysis)).pow(effect1SimulationExperiment3).pow(effectSimulationMachine.βa3).mul(effectSimulationExperiment4).mul(effectElectrolysis).div(60)).floor())));
        SolarEnergy = SolarEnergy.plus(EnergyEffection.mul(effectSimulationMachine.γa2).div(60));
        ChemicalEnergy = ChemicalEnergy.plus(EnergyEffection.mul(PhotosynthesisLevel.mul(0.05)).mul(effectSimulationMachine.γb2).mul(effectLonization).div(60));
        ElectricEnergy = ElectricEnergy.plus(EnergyEffection.mul(PrimaryBatteryLevel.mul(0.0001)).mul(effectSimulationMachine.γc2).div(60));
        MechanicalEnergy = MechanicalEnergy.plus(EnergyEffection.mul(MotorLevel.mul(1e-6)).div(60));
        AmassOriginTimes = AmassOriginTimes.plus(SimulationMachineBtye.mul(effectElasticPotentialEnergy).div(60));
    },16);
}

function restartTimer() {
    if (timerAdding) {
        clearInterval(timerAdding);
    }
    timerAdding = setInterval(() => {
        if (!experimentbuffs.SimulationExperiment5) timerSimulationExperiment5 = timerSimulationExperiment5.plus(0.05); else timerSimulationExperiment5 = new Decimal(0);
        if (state === "inSimulation") timerSimulation = timerSimulation.plus(0.05);
    }, 50);
}