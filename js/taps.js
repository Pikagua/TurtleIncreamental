function switchTap(activeElement, activeElements) {
    // 所有 tap 配置
    const allTaps = [
        { element: turEnergyLeveluptap, elements: turEnergyLeveluptaps },
        { element: turEnergychallengetap, elements: turEnergychallengetaps },
        { element: turEnergyOrigintap, elements: turEnergyOrigintaps },
        { element: turEnergyOriginMilestonetap, elements: turEnergyOriginMilestonetaps },
        { element: SimulationUpgradestap, elements: SimulationUpgradestaps },
        { element: SimulationExperimenttap, elements: SimulationExperimenttaps},
        { element: SimulationMachinetap, elements: SimulationMachinetaps},
        { element: SimulationRoomtap, elements: SimulationRoomtaps},
        { element: SimulationAutotap, elements: SimulationAutotaps},
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
function changetoSimulationUpgradestap() {switchTap(SimulationUpgradestap, SimulationUpgradestaps); }
function changetoSimulationExperimenttap() {switchTap(SimulationExperimenttap, SimulationExperimenttaps); }
function changetoSimulationMachinetap() {switchTap(SimulationMachinetap, SimulationMachinetaps); }
function changetoSimulationRoomtap() {switchTap(SimulationRoomtap, SimulationRoomtaps); }
function changetoSimulationAutotap() {switchTap(SimulationAutotap, SimulationAutotaps); }

function switchupTap(activeElement, activeElements, activetaps) {
    const allupTaps = [
        {element:turEnergyuptap, elements:turEnergyuptaps, taps:thePhase1taps},
        {element:BasicEnergyuptap, elements:BasicEnergyuptaps, taps:thePhase2taps},
        {element:Simulationuptap, elements:Simulationuptaps, taps:theSimulationtaps},
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

function changetoturEnergyuptap() {switchupTap(turEnergyuptap, turEnergyuptaps, thePhase1taps); }
function changetoBasicEnergyuptap() {switchupTap(BasicEnergyuptap, BasicEnergyuptaps, thePhase2taps); }
function changetoSimulationuptap() {switchupTap(Simulationuptap, Simulationuptaps, theSimulationtaps);}