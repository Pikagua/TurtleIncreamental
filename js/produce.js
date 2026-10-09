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
    turEnergy = turEnergy.plus(ClickTurEnergy);
    TotalClicks = TotalClicks.plus(1);
    if (turEnergy.gte(maxturEnergy)) turEnergy = maxturEnergy;
});

function setturEnergyAuto() {
    if (setAuto.turEnergyAuto) setAuto.turEnergyAuto = false;
    else setAuto.turEnergyAuto = true;
}
function setturEnergyOriginAuto() {
    if (setAuto.turEnergyOriginAuto) setAuto.turEnergyOriginAuto = false;
    else setAuto.turEnergyOriginAuto = true;
}
function setBasicEnergyChangeAuto() {
    if (setAuto.BasicEnergyChangeAuto.eq(0)) {setAuto.BasicEnergyChangeAuto = new Decimal(1); updateBasicEnergyChangeAuto(); return 0;};
    if (setAuto.BasicEnergyChangeAuto.eq(1)) {setAuto.BasicEnergyChangeAuto = new Decimal(2); updateBasicEnergyChangeAuto(); return 0;};
    if (setAuto.BasicEnergyChangeAuto.eq(2)) {setAuto.BasicEnergyChangeAuto = new Decimal(3); updateBasicEnergyChangeAuto(); return 0;};
    if (setAuto.BasicEnergyChangeAuto.eq(3)) {setAuto.BasicEnergyChangeAuto = new Decimal(0); updateBasicEnergyChangeAuto(); return 0;};
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
function setMechanicalEnergyAuto() {
    if (setAuto.MechanicalEnergyAuto) setAuto.MechanicalEnergyAuto = false;
    else setAuto.MechanicalEnergyAuto = true;
}
function setSimulationCompleteAuto() {
    if (setAuto.SimulationCompleteAuto.eq(0)) {setAuto.SimulationCompleteAuto = new Decimal(1); updateSimulationCompleteAuto(); return 0;};
    if (setAuto.SimulationCompleteAuto.eq(1)) {setAuto.SimulationCompleteAuto = new Decimal(2); updateSimulationCompleteAuto(); return 0;};
    if (setAuto.SimulationCompleteAuto.eq(2)) {setAuto.SimulationCompleteAuto = new Decimal(3); updateSimulationCompleteAuto(); return 0;};
    if (setAuto.SimulationCompleteAuto.eq(3)) {setAuto.SimulationCompleteAuto = new Decimal(0); updateSimulationCompleteAuto(); return 0;};
}
function setSimulationStartAuto() {
    if (setAuto.SimulationStartAuto) setAuto.SimulationStartAuto = false;
    else setAuto.SimulationStartAuto = true;
}
function setincreamentalSimulationAuto() {
    if (setAuto.increamentalSimulationAuto) setAuto.increamentalSimulationAuto = false;
    else setAuto.increamentalSimulationAuto = true;
}
function setSimulationRoomAuto() {
    if (setAuto.SimulationRoomAuto) setAuto.SimulationRoomAuto = false;
    else setAuto.SimulationRoomAuto = true;
}
function setSimulationByteAuto() {
    if (setAuto.SimulationByteAuto) setAuto.SimulationByteAuto = false;
    else setAuto.SimulationByteAuto = true;
}
function setIterationCompleteAuto() {
    if (setAuto.IterationCompleteAuto.eq(0)) {setAuto.IterationCompleteAuto = new Decimal(1); updateIterationCompleteAuto(); return 0;};
    if (setAuto.IterationCompleteAuto.eq(1)) {setAuto.IterationCompleteAuto = new Decimal(2); updateIterationCompleteAuto(); return 0;};
    if (setAuto.IterationCompleteAuto.eq(2)) {setAuto.IterationCompleteAuto = new Decimal(3); updateIterationCompleteAuto(); return 0;};
    if (setAuto.IterationCompleteAuto.eq(3)) {setAuto.IterationCompleteAuto = new Decimal(0); updateIterationCompleteAuto(); return 0;};
}

function restartAutoClicker() {
    // 清除旧的定时器
    if (autoClickerInterval) {
        clearInterval(autoClickerInterval);
    }

    // 创建新的定时器
    autoClickerInterval = setInterval(() => {
        turEnergy = turEnergy.plus(AutoClickerTurEnergyPersec.mul(Decimal.max(new Decimal(1).div(effectHighspeedClicking),0.016)));
        if (turEnergy.gte(maxturEnergy)) turEnergy = maxturEnergy;
    }, Decimal.max(new Decimal(1000).div(effectHighspeedClicking),16) );
}

const autotipsChange = setInterval(() => {
    Changetips();
}, 20000);

function restartOriginProduce() {
    //if (OriginProducingInterval) {
        //clearInterval(OriginProducingInterval);
    //}

    OriginProducingInterval = setInterval(() => {
        if (OriginProduceEnergyLevel.gt(0) && challengebuffs.disabledOriginLevelup) {
            turEnergy = turEnergy.plus(OriginProduceTurEnergyPersec.div(60));
            if (turEnergy.gte(maxturEnergy)) turEnergy = maxturEnergy;
        }
    }, 16);
}

function restartSimulationRoomProduce() {
    SimulationRoomProduceInterval = setInterval(() => {
        SimulationPower = SimulationPower.plus(SimulationRoomAmount.Room1.mul(effectSimulationRoom.Room1).div(60));
        SimulationRoomAmount.Room1 = SimulationRoomAmount.Room1.plus(SimulationRoomAmount.Room2.mul(effectSimulationRoom.Room2).div(60));
        SimulationRoomAmount.Room2 = SimulationRoomAmount.Room2.plus(SimulationRoomAmount.Room3.mul(effectSimulationRoom.Room3).div(60));
        SimulationRoomAmount.Room3 = SimulationRoomAmount.Room3.plus(SimulationRoomAmount.Room4.mul(effectSimulationRoom.Room4).div(60));
        SimulationRoomAmount.Room4 = SimulationRoomAmount.Room4.plus(SimulationRoomAmount.Room5.mul(effectSimulationRoom.Room5).div(60));
        SimulationRoomAmount.Room5 = SimulationRoomAmount.Room5.plus(SimulationRoomAmount.Room6.mul(effectSimulationRoom.Room6).div(60));
        SimulationRoomAmount.Room6 = SimulationRoomAmount.Room6.plus(SimulationRoomAmount.Room7.mul(effectSimulationRoom.Room7).div(60));
        SimulationRoomAmount.Room7 = SimulationRoomAmount.Room7.plus(SimulationRoomAmount.Room8.mul(effectSimulationRoom.Room8).div(60));
    }, 16);
}

function restartIterationRoomProduce() {
    let IterationRoomProduce = setInterval(() => {
        IterationInformation = IterationInformation.plus(IterationRoomAmount.Room1.mul(effectIterationRoom.Room1).div(60));
        IterationRoomAmount.Room1 = IterationRoomAmount.Room1.plus(IterationRoomAmount.Room2.mul(effectIterationRoom.Room2).div(60));
        IterationRoomAmount.Room2 = IterationRoomAmount.Room2.plus(IterationRoomAmount.Room3.mul(effectIterationRoom.Room3).div(60));
        IterationRoomAmount.Room3 = IterationRoomAmount.Room3.plus(IterationRoomAmount.Room4.mul(effectIterationRoom.Room4).div(60));
        IterationRoomAmount.Room4 = IterationRoomAmount.Room4.plus(IterationRoomAmount.Room5.mul(effectIterationRoom.Room5).div(60));
        IterationRoomAmount.Room5 = IterationRoomAmount.Room5.plus(IterationRoomAmount.Room6.mul(effectIterationRoom.Room6).div(60));
        IterationRoomAmount.Room6 = IterationRoomAmount.Room6.plus(IterationRoomAmount.Room7.mul(effectIterationRoom.Room7).div(60));
        IterationRoomAmount.Room7 = IterationRoomAmount.Room7.plus(IterationRoomAmount.Room8.mul(effectIterationRoom.Room8).div(60));
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
                if ((turEnergyLevel.gte(6) || everBasicEnergyChange) && challengebuffs.AutoClicker && challengebuffs.disabledturEnergyLevelup && !SimulationMachine.βb1) {if (challengereward.BuyMaxAutoClicker || challengereward.BuyMaxturEnergy) BuyMaxautoClicker(); else BuyautoClicker();}
                if ((turEnergyLevel.gte(8) || everBasicEnergyChange) && challengebuffs.disabledturEnergyLevelup && experimentbuffs.SimulationExperiment5) {if (challengereward.BuyMaxturEnergy) BuyMaxEfficientClick(); else BuyEfficientClick();}
                if ((turEnergyLevel.gte(12) || everBasicEnergyChange) && challengebuffs.disabledturEnergyLevelup) {if (challengereward.BuyMaxturEnergy) BuyMaxHighspeedClicking(); else BuyHighspeedClicking();}
                if ((turEnergyLevel.gte(60) || turEnergyTier.gt(0) || everBasicEnergyChange) && challengebuffs.BasicEnergyChallenge3) {if (challengereward.BuyMaxturEnergy) BuyMaxturEnergyTier(); else turEnergyTierup();}
                if ((turEnergyLevel.gte(100) || TierEnhanceLevel.gt(0) || everBasicEnergyChange) && challengebuffs.disabledturEnergyLevelup && challengebuffs.BasicEnergyChallenge2) {if (challengereward.BuyMaxturEnergy) BuyMaxTierEnhance(); else BuyTierEnhance();}
            }
            if (experimentreward.SimulationExperiment3 && setAuto.turEnergyOriginAuto) {
                if (IterationStrengthen.Auto4.if) BuyMaxOriginAmassFasten(); else BuyOriginAmassFasten();
                if (IterationStrengthen.Auto4.if) BuyMaxOriginProduceEnergy(); else BuyOriginProduceEnergy(); 
                if (IterationStrengthen.Auto4.if) BuyMaxClickOrigin(); else BuyClickOrigin();  
                if (IterationStrengthen.Auto4.if) BuyMaxTierOrigin(); else BuyTierOrigin(); 
                if (IterationStrengthen.Auto4.if) BuyMaxOriginEnhance(); else BuyOriginEnhance(); 
            }
            if (experimentreward.SimulationExperiment9) {
                if (setAuto.BasicEnergyChangeAuto.eq(1)) {
                    if (FormulaOnlyBasicEnergy().gte(setAuto.BasicEnergyChangeAutoAmount) && FormulaOnlyBasicEnergy().gt(0)) {
                        BasicEnergyChangeFormula();
                        BasicEnergyReset();
                    }
                } else if (setAuto.BasicEnergyChangeAuto.eq(2)) {
                    if (timerBasicEnergyChangeAutoTime.gte(setAuto.BasicEnergyChangeAutoTime) && FormulaOnlyBasicEnergy().gt(0)) {
                        BasicEnergyChangeFormula();
                        timerBasicEnergyChangeAutoTime = new Decimal(0);
                        BasicEnergyReset();
                    }
                } else if (setAuto.BasicEnergyChangeAuto.eq(3)) {
                    if (FormulaOnlyBasicEnergy().gte(setAuto.BasicEnergyChangeAutoLast.mul(setAuto.BasicEnergyChangeAutoMutiple)) && FormulaOnlyBasicEnergy().gt(0)) {
                        BasicEnergyChangeFormula();
                        BasicEnergyReset();
                    }
                }
            }
            if (experimentreward.SimulationExperiment7 && setAuto.EnergyMachineAuto) {
                if (IterationStrengthen.Auto4.if) BuyMaxEnergyMachineA(); else BuyEnergyMachineA();
                if (experimentreward.SimulationExperiment6) {if (IterationStrengthen.Auto4.if) BuyMaxEnergyMachineB(); else BuyEnergyMachineB(); }
                if (experimentreward.SimulationExperiment6) {if (IterationStrengthen.Auto4.if) BuyMaxEnergyMachineC(); else BuyEnergyMachineC(); }
                if (experimentreward.SimulationExperiment7) {if (IterationStrengthen.Auto4.if) BuyMaxEnergyMachineD(); else BuyEnergyMachineD(); }
                if (experimentreward.SimulationExperiment9) {if (IterationStrengthen.Auto4.if) BuyMaxEnergyMachineE(); else BuyEnergyMachineE(); }
            }
            if (experimentreward.SimulationExperiment7 && setAuto.SolarEnergyAuto) {
                if (IterationStrengthen.Auto4.if) BuyMaxturEnergyCatalysis(); else BuyturEnergyCatalysis();
                if (IterationStrengthen.Auto4.if) BuyMaxOriginCatalysis(); else BuyOriginCatalysis();
                if (IterationStrengthen.Auto4.if) BuyMaxClickCatalysis(); else BuyClickCatalysis();
                if (IterationStrengthen.Auto4.if) BuyMaxPhotosynthesis(); else BuyPhotosynthesis();
            }
            if (experimentreward.SimulationExperiment7 && setAuto.ChemicalEnergyAuto) {
                if (IterationStrengthen.Auto4.if) BuyMaxSimulationCatalysis(); else BuySimulationCatalysis();
                if (IterationStrengthen.Auto4.if) BuyMaxTierCatalysis(); else BuyTierCatalysis();
                if (IterationStrengthen.Auto4.if) BuyMaxReactionCatalysis(); else BuyReactionCatalysis();
                if (IterationStrengthen.Auto4.if) BuyMaxPrimaryBattery(); else BuyPrimaryBattery();
            }
            if (experimentreward.SimulationExperiment7 && setAuto.ElectricEnergyAuto) {
                if (IterationStrengthen.Auto4.if) BuyMaxBoostVoltage(); else BuyBoostVoltage();
                if (IterationStrengthen.Auto4.if) BuyMaxElectrolysis(); else BuyElectrolysis();
                if (IterationStrengthen.Auto4.if) BuyMaxIonization(); else BuyIonization();
                if (IterationStrengthen.Auto4.if) BuyMaxMotor(); else BuyMotor();
            }
            if (IterationStrengthen.Auto3.if && setAuto.MechanicalEnergyAuto) {
                if (IterationStrengthen.Auto4.if) BuyMaxKineticEnergy(); else BuyKineticEnergy();
                if (IterationStrengthen.Auto4.if) BuyMaxElasticPotentialEnergy(); else BuyElasticPotentialEnergy();
                if (IterationStrengthen.Auto4.if) BuyMaxGravitationalPotentialEnergy(); else BuyGravitationalPotentialEnergy();
            }
            if (IterationStrengthen.Auto1.if) {
                if (setAuto.SimulationCompleteAuto.eq(1)) {
                    if (simulationDataCal().gte(setAuto.SimulationCompleteAutoAmount) && simulationDataCal().gt(0)) {
                        completeSimulation();
                    }
                } else if (setAuto.SimulationCompleteAuto.eq(2)) {
                    if (timerSimulationCompleteAutoTime.gte(setAuto.SimulationCompleteAutoTime) && simulationDataCal().gt(0)) {
                        timerSimulationCompleteAutoTime = new Decimal(0);
                        completeSimulation();
                    }
                } else if (setAuto.SimulationCompleteAuto.eq(3)) {
                    if (simulationDataCal().gte(setAuto.SimulationCompleteAutoLast.mul(setAuto.SimulationCompleteAutoMutiple)) && simulationDataCal().gt(0)) {
                        completeSimulation();
                    }
                }
            }
            // SimulationStartAuto并未写在这里，而是在complete中直接begin
            if (IterationStrengthen.Auto2.if && setAuto.increamentalSimulationAuto) {
                if (IteratedTimes.gte(1)) BuyMaxincreamentalSimulation(); else BuyincreamentalSimulation();
            }
            if (IterationStrengthen.Auto2.if && setAuto.SimulationRoomAuto) {
                if (IteratedTimes.gte(1)) {
                    BuyMaxfirstSimulationRoom();
                    BuyMaxsecondSimulationRoom();
                    BuyMaxthirdSimulationRoom();
                    BuyMaxfourthSimulationRoom();
                    BuyMaxfifthSimulationRoom();
                    BuyMaxsixthSimulationRoom();
                    BuyMaxseventhSimulationRoom();
                    BuyMaxeighthSimulationRoom();
                } else {
                    BuyfirstSimulationRoom();
                    BuysecondSimulationRoom();
                    BuythirdSimulationRoom();
                    BuyfourthSimulationRoom();
                    BuyfifthSimulationRoom();
                    BuysixthSimulationRoom();
                    BuyseventhSimulationRoom();
                    BuyeighthSimulationRoom();
                }
            }
            if (IterationStrengthen.Auto2.if && setAuto.SimulationByteAuto) {
                if (IteratedTimes.gte(1)) BuyMaxSimulationMachineByte();
                else {
                    BuyturEnergySimulationMachineByte();
                    BuyturEnergyOriginSimulationMachineByte();
                    BuySimulationDataSimulationMachineByte();
                }
            }
            if (IterationStrengthen.Extra2.if) {
                if (setAuto.IterationCompleteAuto.eq(1)) {
                    if (IterationDataCal().gte(setAuto.IterationCompleteAutoAmount) && IterationDataCal().gt(0)) {
                        completeIteration();
                    }
                } else if (setAuto.IterationCompleteAuto.eq(2)) {
                    if (timerIterationCompleteAutoTime.gte(setAuto.IterationCompleteAutoTime) && IterationDataCal().gt(0)) {
                        timerIterationCompleteAutoTime = new Decimal(0);
                        completeIteration();
                    }
                } else if (setAuto.IterationCompleteAuto.eq(3)) {
                    if (IterationDataCal().gte(setAuto.IterationCompleteAutoLast.mul(setAuto.IterationCompleteAutoMutiple)) && IterationDataCal().gt(0)) {
                        completeIteration();
                    }
                }
            }
        }
    }, 16);
}

function restartBasicEnergyProduce() {
    if (BasicEnergyProduceInterval) {
        clearInterval(BasicEnergyProduceInterval);
    }
    BasicEnergyProduceInterval = setInterval(() => {
        turEnergyOrigin = turEnergyOrigin.plus(turEnergyOriginAmassFormula().mul(effectElectrolysis).div(60));
        SolarEnergy = SolarEnergy.plus(EnergyEffection.mul(effectSimulationMachine.γa2).div(60));
        ChemicalEnergy = ChemicalEnergy.plus(EnergyEffection.mul(PhotosynthesisLevel.mul(0.05)).mul(effectSimulationMachine.γb2).mul(effectIonization).div(60));
        ElectricEnergy = ElectricEnergy.plus(EnergyEffection.mul(PrimaryBatteryLevel.mul(0.0001)).mul(effectSimulationMachine.γc2).div(60));
        MechanicalEnergy = MechanicalEnergy.plus(EnergyEffection.mul(MotorLevel.mul(1e-6)).div(60));
        AmassOriginTimes = AmassOriginTimes.plus(SimulationMachineBtye.mul(effectElasticPotentialEnergy).mul(effectOriginMilestone9).mul(effectIterationMileStone1).div(60));
    },16);
}

function restartTimer() {
    if (timerAdding) {
        clearInterval(timerAdding);
    }
    timerAdding = setInterval(() => {
        if (!experimentbuffs.SimulationExperiment5) timerSimulationExperiment5 = timerSimulationExperiment5.plus(0.05); else timerSimulationExperiment5 = new Decimal(0);
        if (!experimentbuffs.SimulationExperiment9) timerSimulationExperiment9 = timerSimulationExperiment9.plus(0.05); else timerSimulationExperiment9 = new Decimal(0);
        if (timerSimulationExperiment9.gte(1.5)) {
            if ((turEnergy.plus(1)).log10().gte(effectSimulationMachine.γa3)) {
                BasicEnergyChangeFormula();
                BasicEnergyReset();
                timerSimulationExperiment9 = new Decimal(0);
            }
        }
        if (state === "inSimulation") timerSimulation = timerSimulation.plus(0.05);
        timerIteration = timerIteration.plus(0.05);
        timerBasicEnergyChangeAutoTime = timerBasicEnergyChangeAutoTime.plus(0.05);
        timerSimulationCompleteAutoTime = timerSimulationCompleteAutoTime.plus(0.05);
        timerIterationCompleteAutoTime = timerIterationCompleteAutoTime.plus(0.05);
    }, 50);
}