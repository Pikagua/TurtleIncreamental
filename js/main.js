loadGame();
updateUI();
restartAutoClicker();
restartOriginProduce();
if (space === "inSimulation") {changetoturEnergyuptap(); changetoturEnergyLeveluptap();}
else if (space === "Simulation") {changetoSimulationuptap(); changetoSimulationUpgradestap();}
if (state === "inSimulation") restartSimulationRoomProduce();
restartAutoBuy();
restartBasicEnergyProduce();
if (!experimentbuffs.SimulationExperiment5) {
    timerSimulationExperiment5Interval = setInterval(() => {
        timerSimulationExperiment5 = timerSimulationExperiment5.plus(1);
    }, 1000);
}
challengebuffs.turEnergy = 1;
challengebuffs.baseofHighspeedclicking = 0;
challengebuffs.turEnergyTierChallenge3Price = 1;
challengebuffs.AutoClicker = true;
challengebuffs.turEnergyTier = true;
challengebuffs.disabledChallenge = 0;
challengebuffs.turEnergy2 = 1;
challengebuffs.disabledOriginLevelup = true;
challengebuffs.disabledOriginMilestone = true;
challengebuffs.disabledturEnergyLevelup = true;
experimentbuffs.SimulationUpgrades = true;
experimentbuffs.SimulationExperiment2 = true;
experimentbuffs.SimulationExperiment3 = true;
experimentbuffs.SimulationExperiment4 = true;
experimentbuffs.SimulationExperiment5 = true;