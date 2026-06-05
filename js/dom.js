const WhereYouAre = document.getElementById('where-you-are');
const textbox = document.getElementById('text-box');
const textboxtext = document.getElementById('text-box-text');

// 获取大乌龟
const thePhase1taps = document.getElementById('the-phase1-taps');
const phase1tapsEl = document.querySelectorAll('.phase1-taps');
const thePhase2taps = document.getElementById('the-phase2-taps');
const phase2tapsEl = document.querySelectorAll('.phase2-taps');
const theSimulationtaps = document.getElementById('the-Simulation-taps');
const SimulationtapsEl = document.querySelectorAll('.Simulation-taps');
const theinSimulationuptaps = document.getElementById('the-inSimulation-up-taps');

// 获取上边栏按钮
const beginSimulationbtn = document.getElementById('beginSimulation');
const checkSimulationbtn = document.getElementById('checkSimulation');
const backSimulationbtn = document.getElementById('backSimulation');
const completeSimulation2 = document.getElementById('complete-Simulation2');
const completeSimulation2Text = document.getElementById('complete-Simulation2-text');

// 获取challenge相关
const ChallengeProgressContainer = document.getElementById('challenge-Progress-container');
const ChallengeProgressFill = document.getElementById('challenge-Progress-fill');
const ChallengeProgressText = document.getElementById('Challenge-progress-Text');
const FinishGiveupChallengebtn = document.getElementById('finish-giveup-challenge');
const FinishGiveupExperimentbtn = document.getElementById('finish-giveup-experiment');
const startturEnergyTierChallenge1btn = document.getElementById('startturEnergyTierChallenge1btn');
const progressturEnergyTierChallenge1 = document.getElementById('progress-turEnergyTierChallenge1');
const debuffturEnergyTierChallenge1 = document.getElementById('debuff-turEnergyTierChallenge1');
const goalturEnergyTierChallenge1 = document.getElementById('goal-turEnergyTierChallenge1');
const reward1turEnergyTierChallenge1 = document.getElementById('reward1-turEnergyTierChallenge1');
const reward2turEnergyTierChallenge1 = document.getElementById('reward2-turEnergyTierChallenge1');
const maxturEnergyTierChallenge1 = document.getElementById('max-turEnergyTierChallenge1');

const startturEnergyTierChallenge2btn = document.getElementById('startturEnergyTierChallenge2btn');
const progressturEnergyTierChallenge2 = document.getElementById('progress-turEnergyTierChallenge2');
const debuffturEnergyTierChallenge2 = document.getElementById('debuff-turEnergyTierChallenge2');
const goalturEnergyTierChallenge2 = document.getElementById('goal-turEnergyTierChallenge2');
const reward1turEnergyTierChallenge2 = document.getElementById('reward1-turEnergyTierChallenge2');
const reward2turEnergyTierChallenge2 = document.getElementById('reward2-turEnergyTierChallenge2');
const maxturEnergyTierChallenge2 = document.getElementById('max-turEnergyTierChallenge2');

const startturEnergyTierChallenge3btn = document.getElementById('startturEnergyTierChallenge3btn');
const progressturEnergyTierChallenge3 = document.getElementById('progress-turEnergyTierChallenge3');
const debuffturEnergyTierChallenge3 = document.getElementById('debuff-turEnergyTierChallenge3');
const goalturEnergyTierChallenge3 = document.getElementById('goal-turEnergyTierChallenge3');
const reward1turEnergyTierChallenge3 = document.getElementById('reward1-turEnergyTierChallenge3');
const reward2turEnergyTierChallenge3 = document.getElementById('reward2-turEnergyTierChallenge3');
const maxturEnergyTierChallenge3 = document.getElementById('max-turEnergyTierChallenge3');

const startturEnergyTierChallenge4btn = document.getElementById('startturEnergyTierChallenge4btn');
const progressturEnergyTierChallenge4 = document.getElementById('progress-turEnergyTierChallenge4');
const goalturEnergyTierChallenge4 = document.getElementById('goal-turEnergyTierChallenge4');

const startturEnergyTierChallenge5btn = document.getElementById('startturEnergyTierChallenge5btn');
const progressturEnergyTierChallenge5 = document.getElementById('progress-turEnergyTierChallenge5');
const goalturEnergyTierChallenge5 = document.getElementById('goal-turEnergyTierChallenge5');
const reward1turEnergyTierChallenge5 = document.getElementById('reward1-turEnergyTierChallenge5');
const reward2turEnergyTierChallenge5 = document.getElementById('reward2-turEnergyTierChallenge5');

const startturEnergyTierChallenge6btn = document.getElementById('startturEnergyTierChallenge6btn');
const progressturEnergyTierChallenge6 = document.getElementById('progress-turEnergyTierChallenge6');
const goalturEnergyTierChallenge6 = document.getElementById('goal-turEnergyTierChallenge6');
const rewardturEnergyTierChallenge6 = document.getElementById('reward1-turEnergyTierChallenge6');

const startturEnergyOriginChallenge1btn = document.getElementById('startturEnergyOriginChallenge1btn');
const progressturEnergyOriginChallenge1 = document.getElementById('progress-turEnergyOriginChallenge1');
const debuffturEnergyOriginChallenge1 = document.getElementById('debuff-turEnergyOriginChallenge1');
const goalturEnergyOriginChallenge1 = document.getElementById('goal-turEnergyOriginChallenge1');
const reward1turEnergyOriginChallenge1 = document.getElementById('reward1-turEnergyOriginChallenge1');
const reward2turEnergyOriginChallenge1 = document.getElementById('reward2-turEnergyOriginChallenge1');

const startturEnergyOriginChallenge2btn = document.getElementById('startturEnergyOriginChallenge2btn');
const progressturEnergyOriginChallenge2 = document.getElementById('progress-turEnergyOriginChallenge2');
const debuffturEnergyOriginChallenge2 = document.getElementById('debuff-turEnergyOriginChallenge2');
const goalturEnergyOriginChallenge2 = document.getElementById('goal-turEnergyOriginChallenge2');
const reward1turEnergyOriginChallenge2 = document.getElementById('reward1-turEnergyOriginChallenge2');
const reward2turEnergyOriginChallenge2 = document.getElementById('reward2-turEnergyOriginChallenge2');

const startturEnergyOriginChallenge3btn = document.getElementById('startturEnergyOriginChallenge3btn');
const progressturEnergyOriginChallenge3 = document.getElementById('progress-turEnergyOriginChallenge3');
const debuffturEnergyOriginChallenge3 = document.getElementById('debuff-turEnergyOriginChallenge3');
const goalturEnergyOriginChallenge3 = document.getElementById('goal-turEnergyOriginChallenge3');

const startturEnergyOriginChallenge4btn = document.getElementById('startturEnergyOriginChallenge4btn');
const progressturEnergyOriginChallenge4 = document.getElementById('progress-turEnergyOriginChallenge4');
const goalturEnergyOriginChallenge4 = document.getElementById('goal-turEnergyOriginChallenge4');

const startturEnergyOriginChallenge5btn = document.getElementById('startturEnergyOriginChallenge5btn');
const progressturEnergyOriginChallenge5 = document.getElementById('progress-turEnergyOriginChallenge5');
const goalturEnergyOriginChallenge5 = document.getElementById('goal-turEnergyOriginChallenge5');

const startturEnergyOriginChallenge6btn = document.getElementById('startturEnergyOriginChallenge6btn');
const progressturEnergyOriginChallenge6 = document.getElementById('progress-turEnergyOriginChallenge6');
const goalturEnergyOriginChallenge6 = document.getElementById('goal-turEnergyOriginChallenge6');
const reward1turEnergyOriginChallenge6 = document.getElementById('reward1-turEnergyOriginChallenge6');
const reward2turEnergyOriginChallenge6 = document.getElementById('reward2-turEnergyOriginChallenge6');

// 获取实验相关
const ExperimentProgressContainer = document.getElementById('experiment-Progress-container');
const experimentProgressFill = document.getElementById('experiment-Progress-fill');
const experimentProgressText = document.getElementById('Experiment-progress-Text');
const experimentphase1 = document.getElementById('experimentphase1');

const startSimulationExperiment1btn = document.getElementById('startSimulationExperiment1btn');
const progressSimulationExperiment1 = document.getElementById('progress-SimulationExperiment1');
const goalSimulationExperiment1 = document.getElementById('goal-SimulationExperiment1');

const startSimulationExperiment2btn = document.getElementById('startSimulationExperiment2btn');
const progressSimulationExperiment2 = document.getElementById('progress-SimulationExperiment2');
const goalSimulationExperiment2 = document.getElementById('goal-SimulationExperiment2');

const startSimulationExperiment3btn = document.getElementById('startSimulationExperiment3btn');
const progressSimulationExperiment3 = document.getElementById('progress-SimulationExperiment3');
const goalSimulationExperiment3 = document.getElementById('goal-SimulationExperiment3');

const SimulationExperiment4 = document.getElementById('SimulationExperiment4');
const startSimulationExperiment4btn = document.getElementById('startSimulationExperiment4btn');
const progressSimulationExperiment4 = document.getElementById('progress-SimulationExperiment4');
const goalSimulationExperiment4 = document.getElementById('goal-SimulationExperiment4');

const SimulationExperiment5 = document.getElementById('SimulationExperiment5');
const startSimulationExperiment5btn = document.getElementById('startSimulationExperiment5btn');
const progressSimulationExperiment5 = document.getElementById('progress-SimulationExperiment5');
const goalSimulationExperiment5 = document.getElementById('goal-SimulationExperiment5');

// 获取里程碑相关
const OriginMilestone1 = document.getElementById('OriginMilestone1');
const OriginMilestone1progress = document.getElementById('OriginMilestone1progress');
const OriginMilestone2 = document.getElementById('OriginMilestone2');
const OriginMilestone2progress = document.getElementById('OriginMilestone2progress');
const OriginMilestone3 = document.getElementById('OriginMilestone3');
const OriginMilestone3progress = document.getElementById('OriginMilestone3progress');
const OriginMilestone4 = document.getElementById('OriginMilestone4');
const OriginMilestone4progress = document.getElementById('OriginMilestone4progress');
const OriginMilestone5 = document.getElementById('OriginMilestone5');
const OriginMilestone5progress = document.getElementById('OriginMilestone5progress');
const OriginMilestone6 = document.getElementById('OriginMilestone6');
const OriginMilestone6progress = document.getElementById('OriginMilestone6progress');
const OriginMilestone7 = document.getElementById('OriginMilestone7');
const OriginMilestone7progress = document.getElementById('OriginMilestone7progress');
const OriginMilestone8 = document.getElementById('OriginMilestone8');
const OriginMilestone8progress = document.getElementById('OriginMilestone8progress');
const OriginMilestone9 = document.getElementById('OriginMilestone9');
const OriginMilestone9progress = document.getElementById('OriginMilestone9progress');
const OriginMilestone10 = document.getElementById('OriginMilestone10');
const OriginMilestone10progress = document.getElementById('OriginMilestone10progress');

// 获取taps 不使用-或带s的是tap本身 使用-或带s的是tap所代表的标签页
const turEnergyLeveluptap = document.getElementById('turEnergyLeveluptap');
const turEnergyLeveluptaps = document.getElementById('turEnergyLevelup-tap');
const turEnergychallengetap = document.getElementById('turEnergychallengetap'); 
const turEnergychallengetaps = document.getElementById('turEnergychallenge-tap'); 
const turEnergyOrigintap = document.getElementById('turEnergyOrigintap'); 
const turEnergyOrigintaps = document.getElementById('turEnergyOrigin-tap'); 
const turEnergyOriginMilestonetap = document.getElementById('turEnergyOriginMilestonetap'); 
const turEnergyOriginMilestonetaps = document.getElementById('turEnergyOriginMilestone-tap'); 
const SimulationUpgradestap = document.getElementById('SimulationUpgradestap');
const SimulationUpgradestaps = document.getElementById('SimulationUpgrades-tap'); 
const SimulationExperimenttap = document.getElementById('SimulationExperimenttap');
const SimulationExperimenttaps = document.getElementById('SimulationExperiment-tap');
const SimulationMachinetap = document.getElementById('SimulationMachinetap');
const SimulationMachinetaps = document.getElementById('SimulationMachine-tap');
const SimulationRoomtap = document.getElementById('SimulationRoomtap');
const SimulationRoomtaps = document.getElementById('SimulationRoom-tap');
const SimulationAutotap = document.getElementById('SimulationAutotap');
const SimulationAutotaps = document.getElementById('SimulationAuto-tap');
const turEnergyuptap = document.getElementById('turEnergyuptap');
const turEnergyuptaps = document.getElementById('turEnergy-uptap');
const BasicEnergyuptap = document.getElementById('BasicEnergyuptap');
const BasicEnergyuptaps = document.getElementById('BasicEnergy-uptap');
const Simulationuptap = document.getElementById('Simulationuptap');
const Simulationuptaps = document.getElementById('Simulation-uptap');
const EnergyMachinetap = document.getElementById('EnergyMachinetap');
const EnergyMachinetaps = document.getElementById('EnergyMachine-tap');
const SolarEnergytap = document.getElementById('SolarEnergytap');
const SolarEnergytaps = document.getElementById('SolarEnergy-tap');

// 获取challenge
const turEnergyOriginChallengeEl = document.querySelectorAll('.turEnergyOriginChallenge');
const introturEnergyOriginChallenge = document.getElementById('intro-turEnergyOriginChallenge');

// 获取页面元素
const disaplayturEnergyPersec = document.getElementById('disaplay-turEnergy-persec');
const turEnergyCountBox = document.getElementById('turEnergy-count-box');
const turEnergyLevelEl = document.getElementById('turEnergy-LevelUp-level');
const turEnergyLevelUpCost = document.getElementById('turEnergy-LevelUp-cost');
const turEnergyLevelUpBtn = document.getElementById('turEnergy-LevelUp-btn');
const turEnergyLevelupBuyMaxBtn = document.getElementById('turEnergyLevelup-BuyMaxbtn');
const clickpower = document.getElementById('clickPower');
const tipsElements = document.getElementsByClassName('tips')[0];

const autoClickerEl = document.querySelectorAll('.autoClicker');
const levelofAutoClicker = document.getElementById('level-of-autoClicker');
const effectofAutoClicker = document.getElementById('effect-of-autoClicker');
const autoClickerCost = document.getElementById('autoClicker-cost');
const autoClickerBtn = document.getElementById('autoClicker-btn');
const autoClickerBuyMaxBtn = document.getElementById('autoClicker-BuyMaxbtn');

const EfficientClickEl = document.querySelectorAll('.EfficientClick');
const levelofEfficientClick = document.getElementById('level-of-EfficientClick');
const effectofEfficientClick = document.getElementById('effect-of-EfficientClick');
const EfficientClickCost = document.getElementById('EfficientClick-cost');
const EfficientClickBtn = document.getElementById('EfficientClick-btn');
const baseofEfficientClick = document.getElementById('baseof-EfficientClick');
const EfficientClickBuyMaxBtn = document.getElementById('EfficientClick-BuyMaxbtn');

const HighspeedClickingEl = document.querySelectorAll('.HighspeedClicking');
const levelofHighspeedClicking = document.getElementById('level-of-HighspeedClicking');
const effectofHighspeedClicking = document.getElementById('effect-of-HighspeedClicking');
const HighspeedClickingCost = document.getElementById('HighspeedClicking-cost');
const HighspeedClickingBtn = document.getElementById('HighspeedClicking-btn');
const baseofHighspeedclicking = document.getElementById('baseof-HighspeedClicking');
const HighspeedClickingBuyMaxBtn = document.getElementById('HighspeedClicking-BuyMaxbtn');

const turEnergyTierEl = document.querySelectorAll('.turEnergyTier');
const levelofturEnergyTier = document.getElementById('level-of-turEnergyTier');
const effectofturEnergyTier = document.getElementById('effect-of-turEnergyTier');
const turEnergyTierCost = document.getElementById('turEnergyTier-cost');
const turEnergyTierBtn = document.getElementById('turEnergyTier-btn');
const baseofturEnergyTier = document.getElementById('baseof-turEnergyTier');
const turEnergyTierBuyMaxBtn = document.getElementById('turEnergyTier-BuyMaxbtn');

const TierEnhanceEl = document.querySelectorAll('.TierEnhance');
const levelofTierEnhance = document.getElementById('level-of-TierEnhance');
const effectofTierEnhance = document.getElementById('effect-of-TierEnhance');
const TierEnhanceCost = document.getElementById('TierEnhance-cost');
const TierEnhanceBtn = document.getElementById('TierEnhance-btn');
const baseofTierEnhance = document.getElementById('baseof-TierEnhance');
const TierEnhanceBuyMaxBtn = document.getElementById('TierEnhance-BuyMaxbtn');

const turEnergyOriginDisplay = document.getElementById('turEnergyOrigin');
const turEnergyOriginAmassAmount = document.getElementById('turEnergyOriginAmass-amount');
const effectofturEnergyOrigin = document.getElementById('effect-of-turEnergyOrigin');
const effectofperturEnergyOrigin = document.getElementById('effect-of-perturEnergyOrigin');
const AmassOrigintimes = document.getElementById('AmassOriginTimes');
const turEnergyOriginAmassbtn = document.getElementById('turEnergyOrigin-Amass-btn');

const OriginAmassFastenEl = document.querySelectorAll('.OriginAmassFasten');
const levelofOriginAmassFasten = document.getElementById('level-of-OriginAmassFasten');
const effectofOriginAmassFasten = document.getElementById('effect-of-OriginAmassFasten');
const OriginAmassFastenCost = document.getElementById('OriginAmassFasten-cost');
const OriginAmassFastenBtn = document.getElementById('OriginAmassFasten-btn');

const OriginProduceEnergyEl = document.querySelectorAll('.OriginProduceEnergy');
const levelofOriginProduceEnergy = document.getElementById('level-of-OriginProduceEnergy');
const effectofOriginProduceEnergy = document.getElementById('effect-of-OriginProduceEnergy');
const OriginProduceEnergyCost = document.getElementById('OriginProduceEnergy-cost');
const OriginProduceEnergyBtn = document.getElementById('OriginProduceEnergy-btn');
const baseOriginProduceEnergy = document.getElementById('baseof-OriginProduceEnergy');

const ClickOriginEl = document.querySelectorAll('.ClickOrigin');
const levelofClickOrigin = document.getElementById('level-of-ClickOrigin');
const effectofClickOrigin = document.getElementById('effect-of-ClickOrigin');
const ClickOriginCost = document.getElementById('ClickOrigin-cost');
const ClickOriginBtn = document.getElementById('ClickOrigin-btn');

const TierOriginEl = document.querySelectorAll('.TierOrigin');
const levelofTierOrigin = document.getElementById('level-of-TierOrigin');
const effectofTierOrigin = document.getElementById('effect-of-TierOrigin');
const TierOriginCost = document.getElementById('TierOrigin-cost');
const TierOriginBtn = document.getElementById('TierOrigin-btn');
const baseTierOrigin = document.getElementById('base-of-TierOrigin');

const OriginEnhanceEl = document.querySelectorAll('.OriginEnhance');
const levelofOriginEnhance = document.getElementById('level-of-OriginEnhance');
const effectofOriginEnhance = document.getElementById('effect-of-OriginEnhance');
const OriginEnhanceCost = document.getElementById('OriginEnhance-cost');
const OriginEnhanceBtn = document.getElementById('OriginEnhance-btn');

const completeSimulationBtn = document.getElementById('complete-Simulation');
const BasicEnergyChangebtn = document.getElementById('BasicEnergyChange-btn');
const BasicEnergyChangeAmount = document.getElementById('BasicEnergyChange-amount');

const EnergyEffectiondisplay = document.getElementById('EnergyEffection-display');
const SolarEnergydisplay = document.getElementById('SolarEnergy-display');
const displaySolarEnergypersec = document.getElementById('display-SolarEnergy-persec');

const EnergyMachineAEl = document.querySelectorAll('.EnergyMachineA');
const levelofEnergyMachineA = document.getElementById('level-of-EnergyMachineA');
const effectofEnergyMachineA = document.getElementById('effect-of-EnergyMachineA');
const EnergyMachineACost = document.getElementById('EnergyMachineA-cost');
const EnergyMachineABtn = document.getElementById('EnergyMachineA-btn');

const turEnergyCatalysisEl = document.querySelectorAll('.turEnergyCatalysis');
const levelofturEnergyCatalysis = document.getElementById('level-of-turEnergyCatalysis');
const effectofturEnergyCatalysis = document.getElementById('effect-of-turEnergyCatalysis');
const turEnergyCatalysisCost = document.getElementById('turEnergyCatalysis-cost');
const turEnergyCatalysisBtn = document.getElementById('turEnergyCatalysis-btn');

const OriginCatalysisEl = document.querySelectorAll('.OriginCatalysis');
const levelofOriginCatalysis = document.getElementById('level-of-OriginCatalysis');
const effectofOriginCatalysis = document.getElementById('effect-of-OriginCatalysis');
const OriginCatalysisCost = document.getElementById('OriginCatalysis-cost');
const OriginCatalysisBtn = document.getElementById('OriginCatalysis-btn');

const ClickCatalysisEl = document.querySelectorAll('.ClickCatalysis');
const levelofClickCatalysis = document.getElementById('level-of-ClickCatalysis');
const effectofClickCatalysis = document.getElementById('effect-of-ClickCatalysis');
const ClickCatalysisCost = document.getElementById('ClickCatalysis-cost');
const ClickCatalysisBtn = document.getElementById('ClickCatalysis-btn');

const increamentalSimulationEl = document.querySelectorAll('.increamentalSimulation');
const levelofincreamentalSimulation = document.getElementById('level-of-increamentalSimulation');
const effectofincreamentalSimulation = document.getElementById('effect-of-increamentalSimulation');
const increamentalSimulationCost = document.getElementById('increamentalSimulation-cost');
const increamentalSimulationBtn = document.getElementById('increamentalSimulation-btn');

const SimulationTimesDisplay = document.getElementById('SimulationTimes-display');
const effectofSimulationUpgradesturEnergy3 = document.getElementById('effect-of-SimulationUpgrades-turEnergy3');
const effectofSimulationUpgradesturEnergy4 = document.getElementById('effect-of-SimulationUpgrades-turEnergy4');

const SimulationUpgradesturEnergy1btn = document.getElementById('SimulationUpgrades-turEnergy1');
const SimulationUpgradesturEnergy2btn = document.getElementById('SimulationUpgrades-turEnergy2');
const SimulationUpgradesturEnergy3btn = document.getElementById('SimulationUpgrades-turEnergy3');
const SimulationUpgradesturEnergy4btn = document.getElementById('SimulationUpgrades-turEnergy4');
const SimulationUpgradesturEnergyOrigin1btn = document.getElementById('SimulationUpgrades-turEnergyOrigin1');
const SimulationUpgradesturEnergyOrigin2btn = document.getElementById('SimulationUpgrades-turEnergyOrigin2');
const SimulationUpgradesturEnergyOrigin3btn = document.getElementById('SimulationUpgrades-turEnergyOrigin3');
const SimulationUpgradesturEnergyOrigin4btn = document.getElementById('SimulationUpgrades-turEnergyOrigin4');
const SimulationUpgradeselse1btn = document.getElementById('SimulationUpgrades-else1');
const SimulationUpgradeselse2btn = document.getElementById('SimulationUpgrades-else2');
const SimulationUpgradeselse3btn = document.getElementById('SimulationUpgrades-else3');
const SimulationUpgradeselse4btn = document.getElementById('SimulationUpgrades-else4');

const textSimulationMachine = document.getElementById('text-SimulationMachine');
const SimulationMachineBytecount = document.getElementById('SimulationMachine-Byte-count');
const SimulationMachineBytecountmax = document.getElementById('SimulationMachine-Byte-count-max');
const priceturEnergySimulationMachineByte = document.getElementById('price-turEnergy-SimulationMachine-Byte');
const priceturEnergyOriginSimulationMachineByte = document.getElementById('price-turEnergyOrigin-SimulationMachine-Byte');
const priceSimulationDataSimulationMachineByte = document.getElementById('price-SimulationData-SimulationMachine-Byte');
const buyturEnergySimulationMachineByteBtn = document.getElementById('buy-turEnergy-SimulationMachine-Byte-btn');
const buyturEnergyOriginSimulationMachineByteBtn = document.getElementById('buy-turEnergyOrigin-SimulationMachine-Byte-btn');
const buySimulationDataSimulationMachineByteBtn = document.getElementById('buy-SimulationData-SimulationMachine-Byte-btn');
const SimulationMachineResetBtn = document.getElementById('SimulationMachine-reset-btn');

const SimulationMachineλc = document.getElementById('SimulationMachine-λ-c');
const SimulationMachineβ = document.getElementById('SimulationMachine-β');
const SimulationMachineλa1btn = document.getElementById('SimulationMachine-λ-a1');
const SimulationMachineλa2btn = document.getElementById('SimulationMachine-λ-a2');
const SimulationMachineλb1btn = document.getElementById('SimulationMachine-λ-b1');
const SimulationMachineλb2btn = document.getElementById('SimulationMachine-λ-b2');
const SimulationMachineλc1btn = document.getElementById('SimulationMachine-λ-c1');
const SimulationMachineλc2btn = document.getElementById('SimulationMachine-λ-c2');
const SimulationMachineαmainbtn = document.getElementById('SimulationMachine-α-main'); 
const SimulationMachineαa1btn = document.getElementById('SimulationMachine-α-a1');
const SimulationMachineαa2btn = document.getElementById('SimulationMachine-α-a2');
const SimulationMachineαa3btn = document.getElementById('SimulationMachine-α-a3');
const SimulationMachineαb3btn = document.getElementById('SimulationMachine-α-b3');
const SimulationMachineαa4btn = document.getElementById('SimulationMachine-α-a4');
const SimulationMachineαb4btn = document.getElementById('SimulationMachine-α-b4');
const SimulationMachineαa5btn = document.getElementById('SimulationMachine-α-a5');
const SimulationMachineβa1btn = document.getElementById('SimulationMachine-β-a1');
const SimulationMachineβb1btn = document.getElementById('SimulationMachine-β-b1');
const SimulationMachineβa2btn = document.getElementById('SimulationMachine-β-a2');
const SimulationMachineβb2btn = document.getElementById('SimulationMachine-β-b2');
const SimulationMachineβa3btn = document.getElementById('SimulationMachine-β-a3');
const SimulationMachineβa4btn = document.getElementById('SimulationMachine-β-a4');
const effectofSimulationMachineαa2 = document.getElementById('effect-of-SimulationMachine-α-a2');
const effectofSimulationMachineαa3 = document.getElementById('effect-of-SimulationMachine-α-a3');
const effectofSimulationMachineαb3 = document.getElementById('effect-of-SimulationMachine-α-b3');
const effectofSimulationMachineαa4 = document.getElementById('effect-of-SimulationMachine-α-a4');
const effectofSimulationMachineαb4 = document.getElementById('effect-of-SimulationMachine-α-b4');
const effectofSimulationMachineβa1 = document.getElementById('effect-of-SimulationMachine-β-a1');
const effectofSimulationMachineβa2 = document.getElementById('effect-of-SimulationMachine-β-a2');

const SimumlationPowerCount =  document.getElementById('SimumlationPower-count');
const degreeofSimumlationPower = document.getElementById('degree-of-SimumlationPower');
const effectofSimumlationPower = document.getElementById('effect-of-SimumlationPower');

const firstSimulationRoomEl = document.querySelectorAll('.firstSimulationRoom');
const leveloffirstSimulationRoom = document.getElementById('level-of-firstSimulationRoom');
const AmountoffirstSimulationRoom = document.getElementById('Amount-of-firstSimulationRoom');
const effectoffirstSimulationRoom = document.getElementById('effect-of-firstSimulationRoom');
const firstSimulationRoomCost = document.getElementById('firstSimulationRoom-cost');
const firstSimulationRoomBtn = document.getElementById('firstSimulationRoom-btn');

const secondSimulationRoomEl = document.querySelectorAll('.secondSimulationRoom');
const levelofsecondSimulationRoom = document.getElementById('level-of-secondSimulationRoom');
const AmountofsecondSimulationRoom = document.getElementById('Amount-of-secondSimulationRoom');
const effectofsecondSimulationRoom = document.getElementById('effect-of-secondSimulationRoom');
const secondSimulationRoomCost = document.getElementById('secondSimulationRoom-cost');
const secondSimulationRoomBtn = document.getElementById('secondSimulationRoom-btn');

const turEnergyAuto = document.getElementById('turEnergyAuto');
const stateturEnergyAuto = document.getElementById('state-turEnergyAuto');
const turEnergyOriginAuto = document.getElementById('turEnergyOriginAuto');
const stateturEnergyOriginAuto = document.getElementById('state-turEnergyOriginAuto');