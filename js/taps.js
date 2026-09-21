function switchTap(activeElement, activeElements) {
    // 所有 tap 配置
    const allTaps = [
        { element: turEnergyLeveluptap, elements: turEnergyLeveluptaps },
        { element: turEnergychallengetap, elements: turEnergychallengetaps },
        { element: turEnergyOrigintap, elements: turEnergyOrigintaps },
        { element: turEnergyOriginMilestonetap, elements: turEnergyOriginMilestonetaps },
        { element: EnergyMachinetap, elements: EnergyMachinetaps},
        { element: BasicEnergyChallengetap, elements: BasicEnergyChallengetaps},
        { element: SolarEnergytap, elements: SolarEnergytaps},
        { element: ChemicalEnergytap, elements: ChemicalEnergytaps},
        { element: ElectricEnergytap, elements: ElectricEnergytaps},
        { element: MechanicalEnergytap, elements: MechanicalEnergytaps},
        { element: InternalEnergytap, elements: InternalEnergytaps},
        { element: SimulationUpgradestap, elements: SimulationUpgradestaps },
        { element: SimulationExperimenttap, elements: SimulationExperimenttaps},
        { element: SimulationMachinetap, elements: SimulationMachinetaps},
        { element: SimulationRoomtap, elements: SimulationRoomtaps},
        { element: SimulationAutotap, elements: SimulationAutotaps},
        { element: IterationUpgradestap, elements: IterationUpgradestaps},
        { element: IterationStrengthentap, elements: IterationStrengthentaps},
        { element: IterationRoomtap, elements: IterationRoomtaps},
        { element: IterationMileStonetap, elements: IterationMileStonetaps},
    ];
    
    // 全部锁定
    allTaps.forEach(tap => {
        tap.elements.classList.add('Locked');
        tap.elements.classList.remove('Unlocked');
        tap.element.classList.remove('tap-be-chosen');
    });
    
    // 激活选中的
    activeElements.classList.add('Unlocked');
    activeElements.classList.remove('Locked');
    activeElement.classList.add('tap-be-chosen');
}

// 调用方式
function changetoturEnergyLeveluptap() {switchTap(turEnergyLeveluptap, turEnergyLeveluptaps); }     // 代替 changetoturEnergyLeveluptap
function changetoturEnergyChallengetap() {switchTap(turEnergychallengetap, turEnergychallengetaps); } // 代替 changetoturEnergyChallengetap
function changetoturEnergyOrigintap() {switchTap(turEnergyOrigintap, turEnergyOrigintaps); }     // 代替 changetoturEnergyOrigintap
function changetoturEnergyOriginMilestonetap() {switchTap(turEnergyOriginMilestonetap, turEnergyOriginMilestonetaps); }
function changetoEnergyMachinetap() {switchTap(EnergyMachinetap, EnergyMachinetaps); }
function changetoBasicEnergyChallengetap() {switchTap(BasicEnergyChallengetap, BasicEnergyChallengetaps); }
function changetoSolarEnergytap() {switchTap(SolarEnergytap, SolarEnergytaps); }
function changetoChemicalEnergytap() {switchTap(ChemicalEnergytap, ChemicalEnergytaps); }
function changetoElectricEnergytap() {switchTap(ElectricEnergytap, ElectricEnergytaps); }
function changetoMechanicalEnergytap() {switchTap(MechanicalEnergytap, MechanicalEnergytaps); }
function changetoInternalEnergytap() {switchTap(InternalEnergytap, InternalEnergytaps); }
function changetoSimulationUpgradestap() {switchTap(SimulationUpgradestap, SimulationUpgradestaps); }
function changetoSimulationExperimenttap() {switchTap(SimulationExperimenttap, SimulationExperimenttaps); }
function changetoSimulationMachinetap() {switchTap(SimulationMachinetap, SimulationMachinetaps); }
function changetoSimulationRoomtap() {switchTap(SimulationRoomtap, SimulationRoomtaps); }
function changetoSimulationAutotap() {switchTap(SimulationAutotap, SimulationAutotaps); }
function changetoIterationUpgradestap() {switchTap(IterationUpgradestap, IterationUpgradestaps); }
function changetoIterationStrengthentap() {switchTap(IterationStrengthentap, IterationStrengthentaps); }
function changetoIterationRoomtap() {switchTap(IterationRoomtap, IterationRoomtaps); }
function changetoIterationMileStonetap() {switchTap(IterationMileStonetap, IterationMileStonetaps); }

function switchupTap(activeElement, activeElements, activetaps) {
    const allupTaps = [
        {element:turEnergyuptap, elements:turEnergyuptaps, taps:thePhase1taps},
        {element:BasicEnergyuptap, elements:BasicEnergyuptaps, taps:thePhase2taps},
        {element:Simulationuptap, elements:Simulationuptaps, taps:theSimulationtaps},
        {element:Iterationuptap, elements:Iterationuptaps, taps:theIterationtaps},
    ];

    allupTaps.forEach(tap => {
        tap.elements.classList.add('Locked');
        tap.elements.classList.remove('Unlocked');
        tap.taps.classList.add('Locked');
        tap.taps.classList.remove('Unlocked');
        tap.element.classList.remove('tap-be-chosen');
    });

    activeElements.classList.add('Unlocked');
    activeElements.classList.remove('Locked');
    activetaps.classList.add('Unlocked');
    activetaps.classList.remove('Locked');
    activeElement.classList.add('tap-be-chosen');
}

function changetoturEnergyuptap() {switchupTap(turEnergyuptap, turEnergyuptaps, thePhase1taps); changetoturEnergyLeveluptap(); page="turEnergy"; }
function changetoBasicEnergyuptap() {switchupTap(BasicEnergyuptap, BasicEnergyuptaps, thePhase2taps); changetoEnergyMachinetap(); page="BasicEnergy"; }
function changetoSimulationuptap() {switchupTap(Simulationuptap, Simulationuptaps, theSimulationtaps); changetoSimulationUpgradestap(); page="Simulation"; }
function changetoIterationuptap() {switchupTap(Iterationuptap, Iterationuptaps, theIterationtaps); changetoIterationUpgradestap(); page="Iteration"; }