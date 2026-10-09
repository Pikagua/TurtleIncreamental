function pickWeighted(options) {
    const total = options.reduce((sum, o) => sum + o.weight, 0);
    let rand = Math.random() * total;
    for (const o of options) {
        rand -= o.weight;
        if (rand < 0) return o.text;
    }
    return options[options.length - 1].text;
}

function tips() {
    if (space === "inSimulation") {
        if (turEnergyLevel.eq(1) && turEnergyTier.eq(0) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `在<span class="simulation">模拟</span>中，点击任意位置均可获得一定量的<span class="turEnergy">龟能</span>!`, weight: 10000 },
                { text: `增量游戏的开端总是点击……我很久都不说这句话了，因为我根本不知道为什么说这是个<span class="important">游戏</span>……`, weight: 1 },
            ];
            currentTip = pickWeighted(options);
            newTipType = "phase1";
        } else if (turEnergyLevel.lt(6) && turEnergyTier.eq(0) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `保持提升<span class="turEnergy">龟能</span>等级！到第6级你就可以获得自动点击器了`, weight: 1 },
                { text: `手很累？别担心，自动点击就在不远处`, weight: 1 },
            ];
            currentTip = pickWeighted(options);
            newTipType = "phase2";
        } else if (turEnergyLevel.lt(8) && turEnergyTier.eq(0) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `等到<span class="turEnergy">龟能</span>8级，你会解锁新的<span class="turEnergy">龟能</span>升级`, weight: 1 },
            ];
            currentTip = pickWeighted(options);
            newTipType = "phase3";
        } else if (turEnergyLevel.lt(12) && turEnergyTier.eq(0) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `下一个<span class="turEnergy">龟能</span>升级，要到<span class="turEnergy">龟能</span>12级`, weight: 1 },
            ];
            currentTip = pickWeighted(options);
            newTipType = "phase4";
        } else if (turEnergyLevel.lt(60) && turEnergyTier.eq(0) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `高速点击的效果很强力，但现实并没有那么美好，它会在等级5迎来第一次价格折算`, weight: 1 },
                { text: `下一个<span class="turEnergy">龟能</span>升级需要<span class="turEnergy">龟能</span>60级，你可能需要花点时间了`, weight: 1 },
            ];
            currentTip = pickWeighted(options);
            newTipType = "phase5";
        } else if (turEnergyTier.lt(3) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0) && IteratedTimes.eq(0)){
            const options = [
                { text: `接着努力吧，你会在<span class="turEnergy">龟能</span>层级3时解锁新的<span class="simulation">模拟</span>机制`, weight: 333 },
                { text: `<span class="turEnergy">龟能</span>等级100时会有新的升级，这个效果足够强力！`, weight: 333 },
                { text: `你可以长按任何一个升级以重复购买！`, weight: 333 },
                { text: `你可以长按任何一个升级以重复购买！但是你知道吗，这个功能在v0.5.1之前都还没有！呃等一下，什么是“v0.5.1”？`, weight: 1 },
            ];
            currentTip = pickWeighted(options);
            newTipType = "phase6";
        } else if (turEnergyTier.lt(6) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `试着去做点挑战！这很难，但是它们的效果值得你去花时间`, weight: 1 },
                { text: `挑战进行不下去了？提升<span class="turEnergy">龟能</span>层级和层级增强的等级吧，它们不会在<span class="turEnergy">龟能</span>层级挑战中被重置`, weight: 1 },
                { text: `距离下一个<span class="simulation">模拟机</span>制是一段很长的距离……`, weight: 1 },
                { text: `挑战其实质是帮助我们收集<span class="simulation">模拟</span>数据……bug修复完之后你的<span class="simulation">模拟</span>效率自然会得到提升`, weight: 1 },
                { text: `我有没有告诉过你自动点击器等级10000之后会有一次价格折算？包括层级增强，它在4级也会迎来一次不小的折算`, weight: 1 },
                { text: `其实挑战没必要按顺序做，我的意思是，<span class="turEnergy">龟能</span>层级挑战4远比<span class="turEnergy">龟能</span>层级挑战3简单且重要`, weight: 1 },
                { text: `更难的挑战不意味着更好的奖励，考虑到时间成本，你应该优先选择那些性价比更高的来`, weight: 1 },
                { text: `等到<span class="turEnergy">龟能</span>层级6的时候你就不用再天天见到这些tips了……`, weight: 1 },
            ];
            currentTip = pickWeighted(options);
            newTipType = "phase7";
        } else if (!challengereward.turEnergyOrigin && AmassOriginTimes.eq(0) && simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `我有没有告诉过你<span class="turEnergy">龟能</span>等级300之后会有一次极其恐怖的价格折算？`, weight: 1 },
                { text: `为了防止游戏卡顿，一次性超过10000级的升级会有估算，这个估算将永远利于你`, weight: 1 },
                { text: `为了防止<span class="simulation">模拟</span>的内存溢出，所以所有升级的上限均为2e7级。当然这在后面可以获得提升，但那是后话了`, weight: 1 },
                { text: `或许你早就注意到了<span class="turEnergy">龟能</span>层级挑战6？又或许没有……不过不论如何，这是你这个阶段的最终目标了`, weight: 1 },
            ];
            currentTip = pickWeighted(options);
            newTipType = "phase8";
        } else if (challengefinished.turEnergyTierChallenge6 && AmassOriginTimes.eq(0) && simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `你可以凝聚<span class="Origin">本源</span>了？不要着急，我建议你起码能凝聚<span class="important">2</span>个<span class="Origin">本源</span>了再说`, weight: 1 },
            ];
            currentTip = pickWeighted(options);
            newTipType = "phase9";
        } else if (AmassOriginTimes.lt(2) && simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `不要担心<span class="Origin">本源</span>重置，<span class="turEnergy">龟能</span><span class="Origin">本源</span>可以为你提供增益，这应该会对你重新来过有不小的帮助`, weight: 1 },
                { text: `努力进行<span class="Origin">本源</span>重置！当你重置第二次之后会开启里程碑`, weight: 1 },
            ];
            currentTip = pickWeighted(options);
            newTipType = "phase10";
        } else if (AmassOriginTimes.lt(100) && simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `<span class="Origin">本源</span>里程碑会大大加速你在<span class="Origin">本源</span>之前的进度`, weight: 1 },
                { text: `你可以升级<span class="Origin">本源</span>升级，它们对你的上限更有帮助！`, weight: 1 },
                { text: `试着做一点<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战！`, weight: 1 },
                { text: `如果你要做<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战，切莫急功近利，<span class="Origin">本源</span>挑战开始前会进行一次<span class="Origin">本源</span>重置，有一定数量的里程碑再去尝试会更好`, weight: 1 },
                { text: `挑战是可以嵌套的，因此顶部的挑战进度条会优先显示最内层的挑战`, weight: 1 },
                { text: `<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战进行不下去了？升级<span class="Origin">本源</span>升级吧，它们不会被<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战重置`, weight: 1 },
                { text: `<span class="turEnergy">龟能</span>等级会在1000级迎来第二次价格折算`, weight: 1 },
            ];
            currentTip = pickWeighted(options);
            newTipType = "phase11";
        } else if (challengefinished.turEnergyOriginChallenge6 === 0 && simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `因为最大升级数量的限制，自动点击器的效果会逐渐被<span class="Origin">本源</span>生能超越`, weight: 1000 },
                { text: `最后一个<span class="Origin">本源</span>里程碑的效果很不错，你可以花些时间解锁它`, weight: 1000 },
                { text: `<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战6的强度低的可怕，但难度却奇高……`, weight: 1000 },
                { text: `你还有一段很长的路要走……`, weight: 1000 },
                { text: `<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战进行不下去了？升级<span class="Origin">本源</span>升级吧，它们不会被<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战重置`, weight: 1000 },
                { text: `因为指数增长的恐怖，层级<span class="Origin">本源</span>的强度很高！`, weight: 1000 },
                { text: `你知道吗？后三项</span><span class="Origin">本源</span>升级曾被重做过一次，因为它们原来的效果实在是太低了！`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase12";
        } else if (turEnergy.lt("1.80e308") && simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `因为<span class="turEnergy">龟能</span>层级的强大，<span class="Origin">本源</span>生能的效果会逐渐被自动点击器超越`, weight: 1000 },
                { text: `高速点击会在150级的时候迎来第二次折算`, weight: 1000 },
                { text: `折算越来越多！<span class="turEnergy">龟能</span>层级在40级迎来第一次折算`, weight: 1000 },
                { text: `很抱歉，因为数据类型的限制，你的<span class="turEnergy">龟能</span>最多只有约1.80e308，也就是2^1024，亦或者称这个数为“无限”`, weight: 1000 },
                { text: `加油！`, weight: 100 },
                { text: `Defualt-Text`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase13";
        } else if (simulatedTimes.eq(0) && IteratedTimes.eq(0)) {
            const options = [
                { text: `你获得了无限的<span class="turEnergy">龟能</span>，这很不可思议，但是，准备好结束这次<span class="simulation">模拟</span>了吗？`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase14";
        } else if (!(SimulationUpgrades.turEnergy4.if && SimulationUpgrades.turEnergyOrigin4.if && SimulationUpgrades.else4.if) && IteratedTimes.eq(0)) {
            const options = [
                { text: `欢迎回家`, weight: 1 },
                { text: `重新来过总是很无趣，对吗？`, weight: 1 },
                { text: `高速点击大人……以及层级<span class="Origin">本源</span>大人`, weight: 1 },
                { text: `需不需要我提醒你去做一些挑战？`, weight: 1 },
                { text: `你可以去查看模拟外，那里有更值得我提醒的地方`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase15";
        } else if (experimentdoing.Simulation === "SimulationExperiment1" && IteratedTimes.eq(0)) {
            const options = [
                { text: `你在<span class="simulation">模拟</span>实验1吗？我很抱歉……但是我们确实需要你带着足够的经验再来一遍的数据`, weight: 10000 },
                { text: `我跟你讲一个故事吧……骗你的我根本不会`, weight: 10000 },
                { text: `<span class="important">乌龟</span>`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase16";
        } else if (experimentdoing.Simulation === "" && experimentfinished.SimulationExperiment5 === 0 && IteratedTimes.eq(0)) {
            const options = [
                { text: `时间要开始加速喽！`, weight: 1 },
                { text: `现在完成一次<span class="simulation">模拟</span>几乎不消耗一点时间了！`, weight: 1 },
                { text: `说真的，我不知道在<span class="simulation">模拟</span>内还有什么东西是能和你说的`, weight: 1 },
                { text: `想要走的更远……？`, weight: 1 },
                { text: `实验2，3都是一些数值的降低而已……`, weight: 1 },
                { text: `实验4？那可能需要你进行一点计算，或者说你还没有解锁？我不清楚啊`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase17";
        } else if (experimentdoing.Simulation === "SimulationExperiment2" || experimentdoing.Simulation === "SimulationExperiment3" && experimentfinished.SimulationExperiment5 === 0 && IteratedTimes.eq(0)) {
            const options = [
                { text: `实验2，3都是一些数值的降低而已……`, weight: 1 },
                { text: `你在实验里面吗？`, weight: 1 },
                { text: `艰难，痛苦，不是吗？`, weight: 1 },
                { text: `如果感觉无力，不妨回去看看你是不是还有什么没做到的`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase18";
        } else if (experimentdoing.Simulation === "SimulationExperiment4" && experimentfinished.SimulationExperiment5 === 0 && IteratedTimes.eq(0)) {
            const options = [
                { text: `实验4？那可能需要你进行一点计算`, weight: 1 },
                { text: `你在实验里面吗？`, weight: 1 },
                { text: `艰难，痛苦，不是吗？`, weight: 1 },
                { text: `如果感觉无力，不妨回去看看你是不是还有什么没做到的`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase19";
        } else if (!everBasicEnergyChange && IteratedTimes.eq(0)) {
            const options = [
                { text: `<span class="turEnergy">龟能</span>达到1e1000的时候会有新的选项卡解锁`, weight: 1 },
                { text: `常回家看看……我是说，看看你的<span class="simulation">模拟室</span>能不能升级了`, weight: 1 },
                { text: `多试试<span class="simulation">模拟机</span>，或者你足够聪明，能够选到最好的那条！`, weight: 1 },
                { text: `完成<span class="simulation">模拟</span>时获得的模拟数据与你模拟内的进度正相关！`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase20";
        } else if (experimentfinished.SimulationExperiment6 === 0 && IteratedTimes.eq(0)) {
            const options = [
                { text: `<span class="turEnergy">龟能</span>层级达到200级后会有第二次折算，但这次不同以往，200以后的每一级的增长率都会再+2`, weight: 1000 },
                { text: `层级增强达到500级后会有第二次折算，但这次不同以往，500以后的每一级的价格指数都会+0.001`, weight: 1000 },
                { text: `高速点击在500级后会有第三次折算`, weight: 1000 },
                { text: `不要奇怪为什么只有一个<span class="BasicEnergy">能源机器</span>，以后会有更多的`, weight: 1000 },
                { text: `<span class="BasicEnergy">能源机器</span>提供的<span class="BasicEnergy">能源效率</span>决定了所有<span class="BasicEnergy">基本能</span>的生成效率`, weight: 1000 },
                { text: `<span class="BasicEnergy">光能</span>是你能接触到的第一种<span class="BasicEnergy">基本能</span>，但它的收益依然很可观`, weight: 1000 },
                { text: `在遥远的地球上，<span class="BasicEnergy">光能</span>是所有能量的最初形式，但在这里，<span class="turEnergy">龟能</span>则更基本，但它的收益依然很可观`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase21";
        } else if (PowerOnLevel.eq(0) && IteratedTimes.eq(0)) {
            const options = [,
                { text: `我曾经写在这里的tips太烂了，但我暂时想不到更好的`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase22";
        } else if ((!experimentreward.SimulationExperiment7 || !experimentreward.SimulationExperiment8) && IteratedTimes.eq(0)) {
            const options = [
                { text: `我曾经写在这里的tips太烂了，但我暂时想不到更好的`, weight: 1000 },
                { text: `<span class="important">通</span><span class="BasicEnergy">电</span>？那是什么意思？`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase23";
        } else if (IteratedTimes.eq(0)) {
            const options = [
                { text: `每次模拟都会重置<span class="BasicEnergy">基本能</span>挑战的进度，所以为了更多的推进<span class="BasicEnergy">基本能</span>挑战，你可以尝试那些“更弱的”<span class="simulation">模拟机</span>`, weight: 1 },
                { text: `层级<span class="Origin">本源</span>会在60级折算`, weight: 1 },
                { text: `所有<span class="BasicEnergy">能源机器</span>都会在100级得到一次效果夸张的折算`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase24";
        } else if (IteratedTimes.eq(1) && simulatedTimes.eq(0)) {
            const options = [
                { text: `欢迎回家`, weight: 1 },
                { text: `你马上就会从这里离开，对吗？`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase25";
        } else if (IteratedTimes.eq(1) && simulatedTimes.gt(0)) {
            const options = [
                { text: `你现在这个阶段的重心不应该在这个地方……`, weight: 100 },
                { text: `多去模拟外看看！`, weight: 100 },
                { text: `嘿！你在看我吗？`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase26";
        } else if (IteratedTimes.eq(2)) {
            const options = [
                { text: `我想你已经很熟练了……`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase27";
        } else if (IteratedTimes.lte(4)) {
            const options = [
                { text: `第四次<span class="Iteration">迭代</span>会解锁<span class="Iteration">迭代</span>强化`, weight: 1 },
                { text: `尽快多拿两个<span class="Iteration">迭代</span>里程碑`, weight: 1 },
                { text: `别忘了<span class="simulation">模拟</span>实验！`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase28";
        } else if (!(IterationStrengthen.Produce4.if && IterationStrengthen.Reset4.if && IterationStrengthen.Auto4.if)) {
            const options = [
                { text: `你可以去研究研究<span class="Iteration">迭代</span>强化的效果`, weight: 1 },
                { text: `这12个<span class="Iteration">迭代</span>强化升级完了之后，你会解锁更多的<span class="Iteration">迭代</span>强化`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase29";
        } else {
            const options = [
                { text: `未完待续……`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase30";
        }
    } else if (space === "Simulation") {
        if (!(SimulationUpgrades.turEnergy4.if && SimulationUpgrades.turEnergyOrigin4.if && SimulationUpgrades.else4.if) && IteratedTimes.eq(0)) {
            const options = [
                { text: `<span class="simulation">模拟</span>升级可以提供很显然的加成`, weight: 1 },
                { text: `深思熟虑之后再开始你的<span class="simulation">模拟</span>!`, weight: 1 },
                { text: `不管怎样，你现在一次<span class="simulation">模拟</span>只能获得<span class="simulation">1模拟数据</span>，所以尽快地回到这里吧`, weight: 1 },
                { text: `等你升满全部的<span class="simulation">模拟</span>升级，你会解锁新的机制`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase1-sti";
        } else if (experimentfinished.SimulationExperiment1 === 0 && IteratedTimes.eq(0)) {
            const options = [
                { text: `从不缺乏重头<span class="important">再来</span>的勇气`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase2-sti";
        } else if (!SimulationMachine.λa2 && IteratedTimes.eq(0)) {
            const options = [
                { text: `实验需要深思熟虑……吗？事实上，对你现在来说，进入一次模拟的成本很低，你大抵可以放心试试`, weight: 1 },
                { text: `希望你还能记得挑战的经验……`, weight: 1 },
                { text: `<span class="simulation">模拟机</span>的效果很强大！但前提是你得选择合适的……`, weight: 1 },
                { text: `千万不要忘记<span class="simulation">模拟机</span>-λ的节点无法被重置，慎重啊！`, weight: 1 },
                { text: `根据实验的效果选择你的<span class="simulation">模拟机</span>函数`, weight: 1 },
                { text: `等到你<span class="important">扩增</span>数据类型的时候……`, weight: 1 },
                { text: `永远不要忘记你还有一个新的<span class="simulation">模拟</span>升级`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase3-sti";
        } else if (experimentfinished.SimulationExperiment5 === 0 && IteratedTimes.eq(0)) {
            const options = [
                { text: `终于……<span class="simulation">模拟</span>实验5，<span class="important">解决它</span>`, weight: 10000 },
                { text: `我忍这个数据类型很久了……快点，<span class="important">清算</span><span class="simulation">模拟</span>实验5`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase4-sti";
        } else if (PowerOnLevel.eq(0) && IteratedTimes.eq(0)){
            const options = [
                { text: `哇哦，不错，现在回到<span class="simulation">模拟</span>里吧！`, weight: 1000 },
                { text: `你又回来了？`, weight: 1000 },
                { text: `仔细考虑<span class="simulation">模拟机</span>的选择啊`, weight: 1000 },
                { text: `解锁<span class="simulation">模拟室</span>的Byte可回不来哦`, weight: 1000 },
                { text: `<span class="simulation">模拟机</span>-λ-a4很贵，这导致你永远也无法继续实验`, weight: 1000 },
                { text: `离线收益？你在说什么……？`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase5-sti";
        } else if ((!experimentreward.SimulationExperiment7 || !experimentreward.SimulationExperiment8) && IteratedTimes.eq(0)) {
            const options = [
                { text: `<span class="simulation">模拟机</span>-λ-a4很贵……吗？`, weight: 1 },
                { text: `你或许可以去做实验7和8了`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase6-sti";
        } else if (simulationData.lt("1.80e308") && IteratedTimes.eq(0)) {
            const options = [
                { text: `你的<span class="simulation">模拟机</span>可能还不够完美……`, weight: 1000 },
                { text: `<span class="simulation">模拟室</span>是现在进度的重点！`, weight: 1000 },
                { text: `你绝大多数的加成来自于<span class="simulation">模拟室</span>`, weight: 1000 },
                { text: `一口气积攒500个Byte不能让你快速解锁<span class="simulation">模拟</span>实验9`, weight: 1000 },
                { text: `完成<span class="BasicEnergy">基本能</span>挑战，以获得更多<span class="simulation">模拟</span>数据！`, weight: 1000 },
                { text: `你在看什么呢？`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase7-sti";
        } else if (IteratedTimes.eq(0)) {
            const options = [
                { text: `什么什么什么？？？我们的模拟好像顶不住<span class="important">无限</span>的<span class="simulation">模拟数据</span>！！！`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase8-sti";
        } else if (IteratedTimes.lt(4)) {
            const options = [
                { text: `<span class="Iteration">迭代室</span>能提供大量的收益`, weight: 1 },
                { text: `<span class="Origin">本源</span><span class="Iteration">迭代</span>能快速度过<span class="Origin">本源</span>阶段`, weight: 1 },
                { text: `<span class="BasicEnergy">能源</span>膨胀能大大加速<span class="simulation">模拟</span>后期`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase8-sti";
        } else if (!(IterationStrengthen.Produce4.if && IterationStrengthen.Reset4.if && IterationStrengthen.Auto4.if)) {
            const options = [
                { text: `<span class="Iteration">迭代</span>强化没有一个弱的！`, weight: 1 },
                { text: `这12个<span class="Iteration">迭代</span>强化升级完了之后，你会解锁更多的<span class="Iteration">迭代</span>强化`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase9-sti";
        } else {
            const options = [
                { text: `未完待续……`, weight: 1 },
            ]
            currentTip = pickWeighted(options);
            newTipType = "phase10-sti";
        }
    }
    return currentTip;
}

function Changetips(){
    const newTip = tips();
    if (remainTip === newTip) return;
    tipsElements.classList.add('slide-out');
    
    // 等待动画完成后更新内容并滑入
    setTimeout(() => {
        tipsElements.innerHTML = newTip;
        remainTip = newTip;
        tipsElements.classList.remove('slide-out');
        tipsElements.classList.add('slide-in');
        
        // 确保在动画结束后移除slide-in类，以便下次可以重新添加
        setTimeout(() => {
            tipsElements.classList.remove('slide-in');
        }, 500);
    }, 500);
}