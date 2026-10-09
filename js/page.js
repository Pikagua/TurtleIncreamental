function beginSimulation() {
    if (IteratedTimes.eq(0)) {
        fadeToBlack(() => {
            space = "inSimulation";
            state = "inSimulation";
            SimulationReset();
            changetoturEnergyuptap();
            changetoturEnergyLeveluptap();
            Changetips();
            fadeFromBlack();
        });
    } else {
        space = "Simulation";
        state = "inSimulation";
        SimulationReset();
        Changetips();
    }
}
function checkSimulation() {
    if (IteratedTimes.eq(0)) {
        fadeToBlack(() => {
            space = "Simulation";
            changetoSimulationuptap();
            changetoSimulationUpgradestap();
            Changetips();
            fadeFromBlack();
        });
    } else {
        space = "Simulation";
            changetoSimulationuptap();
            changetoSimulationUpgradestap();
            Changetips();
    }
}
function backSimulation() {
    if (IteratedTimes.eq(0)) {
        fadeToBlack(() => {
            space = "inSimulation";
            changetoturEnergyuptap();
            changetoturEnergyLeveluptap();
            Changetips();
            fadeFromBlack();
        });
    } else {
        space = "inSimulation";
            changetoturEnergyuptap();
            changetoturEnergyLeveluptap();
            Changetips();
    }
}

function completeSimulation() {
    const Tellingtext = document.getElementById('Tellingtext');
    setAuto.SimulationCompleteAutoLast = simulationDataCal();
    if (SimulationMachineResetBtnIf.eq(1)) {
        SimulationMachineReset();
        SimulationMachineResetBtnIf = new Decimal(0);
    }
    completeSimulationBtn.disabled = true;
    if (simulatedTimes.lt(3) && IteratedTimes.eq(0)) Tellingtext.classList.add('active');
    if (simulatedTimes.eq(0)) Tellingtext.innerHTML = `很好，你成功收集了无限的<span class="turEnergy">龟能</span>`;
    if (simulatedTimes.eq(1)) Tellingtext.innerHTML = `欢迎回来`;
    if (simulatedTimes.eq(2)) Tellingtext.innerHTML = `……`;
    if (IteratedTimes.eq(0)) {
        fadeToBlack(async() => {
            if (simulatedTimes.eq(0) && !IteratedTimes.eq(0)) {
                await wait(2000);
                Tellingtext.innerHTML = `好吧，也不是很好，因为<span class="simulation">模拟</span>显然进行不下去了`;
                await wait(3000);
                Tellingtext.innerHTML = `但是，无论如何，你做得不错`;
                await wait(3000);
                Tellingtext.innerHTML = `能走到这里，我想你一定是一位忠实的支持者`;
                await wait(3000);
                Tellingtext.innerHTML = `现在，继续吧`;
                await wait(2000);
                Tellingtext.innerHTML = `现在，<span class="simulation">继续</span>吧`;
            } else if (simulatedTimes.eq(1) && !IteratedTimes.eq(0)) {
                await wait(2000);
                Tellingtext.innerHTML = `继续努力`;
            }
            space = "Simulation";
            state = "Simulation";
            simulationData = simulationData.plus(simulationDataCal());
            SimulationReset();
            if (!Iterated) {
                changetoSimulationuptap();
                changetoSimulationUpgradestap();
            }
            simulatedTimes = simulatedTimes.plus(1);
            completeSimulationBtn.disabled = false;
            Tellingtext.classList.remove('active');
            timerSimulationExperiment5 = new Decimal();
            clearInterval(timerSimulationExperiment5Interval);
            Changetips();
            fadeFromBlack();
        });
    } else {
        state = "Simulation";
        simulationData = simulationData.plus(simulationDataCal());
        SimulationReset();
        if (!Iterated || space === "inSimulation") {
            changetoSimulationuptap();
            changetoSimulationUpgradestap();
        }
        space = "Simulation";
        simulatedTimes = simulatedTimes.plus(1);
        completeSimulationBtn.disabled = false;
        Tellingtext.classList.remove('active');
        timerSimulationExperiment5 = new Decimal();
        clearInterval(timerSimulationExperiment5Interval);
        Changetips();
        if (IterationStrengthen.Auto1.if && setAuto.SimulationStartAuto) beginSimulation();
    }
}

function simulationDataCal() {
    return (effectincreamentalSimulation.div(2).mul(new Decimal(2).pow(maxturEnergyinsimulation.log10().div(308))).mul(effectSimulationMachine.γa4).mul(effectSimulationMachine.γb4).mul(effectSimulationMachine.γc4).mul(effectIterationMileStone1).mul(IterationStrengthen.Produce1.num)).floor();
}

function completeIteration() {
    setAuto.IterationCompleteAutoLast = IterationDataCal();
    maxIterationDataPerminLast = maxIterationDataPermin;
    maxIterationDataPerminPointLast = maxIterationDataPerminPoint;
    if (Iterated.eq(0)) {
        IterationReset();
        Iterated = new Decimal(1);
        saveGame();
        while(true) {
            let x = 0;
            for(let i = 0; i < 1000; i++) {
                x += Math.sqrt(i);
            }
        }
    } else {
        if (!IterationStrengthen.Extra1.if) {
            if (confirm(`完成迭代会重置完成模拟重置的一切，通电的等级，模拟数据，模拟升级，模拟机，模拟室，自动化和模拟实验的进度`)) {
                // 确保模拟结束
                completeSimulation();

                const Tellingtext = document.getElementById('Tellingtext');
                completeSimulationBtn.disabled = true;
                if (IteratedTimes.lt(4)) Tellingtext.classList.add('active');
                if (IteratedTimes.eq(1)) Tellingtext.innerHTML = `很好，你又回来了`;
                if (IteratedTimes.eq(2)) {
                    if (IterationData.eq(2)) Tellingtext.innerHTML = `……`;
                    else Tellingtext.innerHTML = `欢迎回来`;
                }
                if (IteratedTimes.eq(3)) {
                    if (IterationData.eq(3)) Tellingtext.innerHTML = `你是在做什么挑战吗还是……？`;
                    else Tellingtext.innerHTML = `表现很好`;
                }
                fadeToBlack(async() => {
                    if (IteratedTimes.eq(1)) {
                        if (IterationData.eq(1)) {
                            await wait(2000);
                            Tellingtext.innerHTML = `额……什么？`;
                            await wait(3000);
                            Tellingtext.innerHTML = `你完全没有消耗任何<span class="Iteration">迭代</span>数据？`;
                            await wait(3000);
                            Tellingtext.innerHTML = `行吧，我希望你下次能有所改变`;
                            await wait(2000);
                            Tellingtext.innerHTML = `行吧，我希望你下次能有所改变`;
                        } else {
                        await wait(2000);
                        Tellingtext.innerHTML = `享受这些新的提升吗？`;
                        await wait(3000);
                        Tellingtext.innerHTML = `又一次来到这里……你花了不少的时间吧？`;
                        await wait(3000);
                        Tellingtext.innerHTML = `希望下一次能更好`;
                        await wait(3000);
                        Tellingtext.innerHTML = `现在，继续吧`;
                        await wait(2000);
                        Tellingtext.innerHTML = `现在，继续吧`;
                        }
                    }
                    if (IteratedTimes.eq(2)) {
                        if (IterationData.eq(2)) {
                            await wait(2000);
                            Tellingtext.innerHTML = `你是认真的吗？`;
                            await wait(3000);
                            Tellingtext.innerHTML = `我是不是还得夸你有毅力啊？`;
                            await wait(5000);
                            Tellingtext.innerHTML = `还是说你在故意玩我……`;
                            await wait(2000);
                            Tellingtext.innerHTML = `还是说你在故意玩我……`;
                        } else {
                        await wait(2000);
                        Tellingtext.innerHTML = `是不是又有点不一样了？`;
                        await wait(3000);
                        Tellingtext.innerHTML = `请保持好这个状态`;
                        await wait(3000);
                        Tellingtext.innerHTML = `我会等你的`;
                        await wait(2000);
                        Tellingtext.innerHTML = `我会等你的`;
                        }
                    }
                    if (IteratedTimes.eq(3)) {
                        if (IterationData.eq(3)) {
                            await wait(3000);
                            Tellingtext.innerHTML = `不然我想不到什么解释了……`;
                            await wait(3000);
                            Tellingtext.innerHTML = `又或者只是为了看我这段特殊对话？`;
                            await wait(3000);
                            Tellingtext.innerHTML = `真有够无聊的`;
                            await wait(3000);
                            Tellingtext.innerHTML = `我后面一段时间不会再理你了`;
                            await wait(3000);
                            Tellingtext.innerHTML = `你自己玩去吧`;
                            await wait(2000);
                            Tellingtext.innerHTML = `你自己玩去吧`;
                        } else {
                        await wait(2000);
                        Tellingtext.innerHTML = `你比我想的厉害`;
                        await wait(3000);
                        Tellingtext.innerHTML = `我没必要再检查你的进度了`;
                        await wait(3000);
                        Tellingtext.innerHTML = `玩得开心`;
                        await wait(2000);
                        Tellingtext.innerHTML = `玩得开心`;
                        }
                    }
                    IterationData = IterationData.plus(IterationDataCal());
                    IteratedTimes = IteratedTimes.plus(1);
                    IterationReset();
                    completeSimulationBtn.disabled = false;
                    Tellingtext.classList.remove('active');
                    fadeFromBlack();
                });
            }
        } else {
            completeSimulation();
            IterationData = IterationData.plus(IterationDataCal());
            IteratedTimes = IteratedTimes.plus(1);
            IterationReset();
            completeSimulationBtn.disabled = false;
            Tellingtext.classList.remove('active');
        }
    }
    maxIterationDataPermin = new Decimal(0);
    maxIterationDataPerminPoint = new Decimal(0);
}

function IterationDataCal() {
    return (effectincreamentalIteration.div(2).mul(new Decimal(2).pow(maxsimulationDatainIteration.log10().div(308)))).floor();
}