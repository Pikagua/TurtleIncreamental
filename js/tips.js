function tips() {
    if (space === "inSimulation") {
        if (turEnergyLevel.eq(1) && turEnergyTier.eq(0) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0)) {
            const options = [
                `在<span class="simulation">模拟</span>中，点击任意位置均可获得一定量的<span class="turEnergy">龟能</span>!`,
                `增量游戏的开端总是点击……`
            ];
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase1";
        } else if (turEnergyLevel.lt(6) && turEnergyTier.eq(0) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0)) {
            const options = [
                `保持提升<span class="turEnergy">龟能</span>等级！到第6级你就可以获得自动点击器了`,
                `手很累？别担心，自动点击就在不远处`
            ];
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase2";
        } else if (turEnergyLevel.lt(8) && turEnergyTier.eq(0) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0)) {
            const options = [
                `等到<span class="turEnergy">龟能</span>8级，你会解锁新的<span class="turEnergy">龟能</span>升级`
            ];
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase3";
        } else if (turEnergyLevel.lt(12) && turEnergyTier.eq(0) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0)) {
            const options = [
                `下一个<span class="turEnergy">龟能</span>升级，要到<span class="turEnergy">龟能</span>12级`
            ];
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase4";
        } else if (turEnergyLevel.lt(60) && turEnergyTier.eq(0) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0)) {
            const options = [
                `高速点击的效果很强力，但现实并没有那么美好，它会在等级5迎来第一次价格折算`,
                `下一个<span class="turEnergy">龟能</span>升级需要<span class="turEnergy">龟能</span>60级，你可能需要花点时间了`
            ];
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase5";
        } else if (turEnergyTier.lt(3) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0)){
            const options = [
                `接着努力吧，你会在<span class="turEnergy">龟能</span>层级3时解锁新的<span class="simulation">模拟机</span>制`,
                `<span class="turEnergy">龟能</span>等级100时会有新的升级，这个效果足够强力！（但也足够贵……）`
            ];
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase6";
        } else if (turEnergyTier.lt(6) && turEnergyOrigin.eq(0) && simulatedTimes.eq(0)) {
            const options = [
                `试着去做点挑战！这很难，但是它们的效果值得你去花时间`,
                `挑战进行不下去了？提升<span class="turEnergy">龟能</span>层级和层级增强的等级吧，它们不会在<span class="turEnergy">龟能</span>层级挑战中被重置`,
                `距离下一个<span class="simulation">模拟机</span>制是一段很长的距离……`,
                `挑战其实质是帮助我们收集<span class="simulation">模拟</span>数据……bug修复完之后你的<span class="simulation">模拟</span>效率自然会得到提升`,
                `我有没有告诉过你自动点击器等级10000之后会有一次价格折算？包括层级增强，它在4级也会迎来一次不小的折算`,
                `其实挑战没必要按顺序做，我的意思是，<span class="turEnergy">龟能</span>层级挑战4远比<span class="turEnergy">龟能</span>层级挑战3简单且重要`,
                `更难的挑战不意味着更好的奖励，考虑到时间成本，你应该优先选择那些性价比更高的来`,
                `等到<span class="turEnergy">龟能</span>层级6的时候你就不用再天天见到这些tips了……`
            ];
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase7";
        } else if (!challengereward.turEnergyOrigin && AmassOriginTimes.eq(0) && simulatedTimes.eq(0)) {
            const options = [
                `我有没有告诉过你<span class="turEnergy">龟能</span>等级300之后会有一次极其恐怖的价格折算？（在你还没有享受到挑战的奖励的情况下）`,
                `为了防止游戏卡顿，超过10000级的升级会有估算，这个估算将永远利于玩家`,
                `为了防止<span class="simulation">模拟</span>的内存溢出，所以所有升级的上限均为2e7级。当然这在后面可以获得提升，但那是后话了`,
                `或许你早就注意到了<span class="turEnergy">龟能</span>层级挑战6？又或许没有……不过不论如何，这是你这个阶段的最终目标了`
            ];
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase8";
        } else if (AmassOriginTimes.lt(2) && simulatedTimes.eq(0)) {
            const options = [
                `不要担心<span class="Origin">本源</span>重置，<span class="turEnergy">龟能</span><span class="Origin">本源</span>可以为你提供增益，这应该会对你重新来过有不小的帮助`,
                `努力进行<span class="Origin">本源</span>重置！当你重置第二次之后会开启里程碑`
            ];
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase9";
        } else if (AmassOriginTimes.lt(100) && simulatedTimes.eq(0)) {
            const options = [
                `<span class="Origin">本源</span>里程碑会大大加速你在<span class="Origin">本源</span>之前的进度`,
                `你可以升级<span class="Origin">本源</span>升级，它们对你的上限更有帮助！`,
                `试着做一点<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战！`,
                `如果你要做<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战，切莫急功近利，<span class="Origin">本源</span>挑战开始前会进行一次<span class="Origin">本源</span>重置，有一定数量的里程碑再去尝试会更好`,
                `挑战是可以嵌套的，因此顶部的挑战进度条会优先显示最内层的挑战`,
                `<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战进行不下去了？升级<span class="Origin">本源</span>升级吧，它们不会被<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战重置`,
                `<span class="turEnergy">龟能</span>等级会在1000级迎来第二次价格折算`
            ];
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase10";
        } else if (challengefinished.turEnergyOriginChallenge6 === 0 && simulatedTimes.eq(0)) {
            const options = [
                `因为最大升级数量的限制，自动点击器的效果会逐渐被<span class="Origin">本源</span>生能超越`,
                `你知道吗？后三项</span><span class="Origin">本源</span>升级曾被重做过一次，因为它们原来的效果实在是太低了！`,
                `我没有什么tips能提供给你了……`,
                `Defualt-Text`,
                `你还有一段很长的路要走……`,
                `<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战进行不下去了？升级<span class="Origin">本源</span>升级吧，它们不会被<span class="turEnergy">龟能</span><span class="Origin">本源</span>挑战重置`
            ]
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase11";
        } else if (turEnergy.lt("1.80e308") && simulatedTimes.eq(0)) {
            const options = [
                `高速点击会在150级的时候迎来第二次折算`,
                `折算越来越多！<span class="turEnergy">龟能</span>层级在40级迎来第一次折算`,
                `很抱歉，因为数据类型的限制，你的<span class="turEnergy">龟能</span>最多只有约1.80e308，也就是2^1024，亦或者称这个数为“无限”`,
                `加油！`
            ]
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase12";
        } else if (simulatedTimes.eq(0)) {
            const options = [
                `你获得了无限的<span class="turEnergy">龟能</span>，这很不可思议，但是，准备好结束这次<span class="simulation">模拟</span>了吗？`
            ]
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase13";
        } else if (!(SimulationUpgrades.turEnergy4.if && SimulationUpgrades.turEnergyOrigin4.if && SimulationUpgrades.else4.if)) {
            const options = [
                `欢迎回家`,
                `重新来过总是很无趣，对吗？`,
                `我看好你`,
                `需不需要我提醒你去做一些挑战？`,
                `“终于等到第一次本源了……”不是吗？`,
                `这可能是一段很长的路……但我说实话，我不知道该说些什么`,
                `无限，无限，无限`,
                `什么也没有`
            ]
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase14";
        } else if (experimentdoing.Simulation === "" && experimentfinished.SimulationExperiment5 === 0) {
            const options = [
                `时间要开始加速喽！`,
                `现在完成一次<span class="simulation">模拟</span>几乎不消耗一点时间了！`,
                `说真的，我不知道在<span class="simulation">模拟</span>内还有什么东西是能和你说的`,
                `想要走的更远……？`
            ]
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase15";
        } else if (experimentfinished.SimulationExperiment5 === 0) {
            const options = [
                `你在实验里面吗？`,
                `祝你好运`,
                `艰难，痛苦，不是吗？`,
                `如果感觉无力，不妨回去看看你是不是还有什么没做到的`,
                `你在等<span class="simulation">模拟室</span>运行吗？或者你根本就不知道这是什么……`,
                `休息一下`,
                `嘿，你真的有在看我吗？作为你的合作伙伴，我不满了`,
                `……静下心来……`
            ]
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase16";
        } else {
            const options = [
                `乌龟？！`,
                `完成<span class="simulation">模拟</span>时获得的模拟数据与你模拟内的进度正相关`,
                `<span class="turEnergy">龟能</span>达到1e1000的时候会有新的选项卡解锁`
            ]
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase17";
        }
    } else if (space === "Simulation") {
        if (!(SimulationUpgrades.turEnergy4.if && SimulationUpgrades.turEnergyOrigin4.if && SimulationUpgrades.else4.if)) {
            const options = [
                `<span class="simulation">模拟</span>升级可以提供很显然的加成`,
                `深思熟虑之后再开始你的<span class="simulation">模拟</span>!`,
                `不管怎样，你现在一次<span class="simulation">模拟</span>只能获得<span class="simulation">1模拟数据</span>，所以尽快地回到这里吧`,
                `等你升满全部的<span class="simulation">模拟</span>升级，你会解锁新的机制`
            ]
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase1-sti";
        } else if (experimentfinished.SimulationExperiment1 === 0) {
            const options = [
                `从不缺乏重头<span class="important">再来</span>的勇气`
            ]
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase2-sti";
        } else if (!SimulationMachine.λa2) {
            const options = [
                `实验需要深思熟虑……吗？事实上，对你现在来说，进入一次模拟的成本很低，你大抵可以放心试试`,
                `希望你还能记得挑战的经验……`,
                `乌龟`,
                `<span class="simulation">模拟机</span>的效果很强大！但前提是你得选择合适的……`,
                `千万不要忘记<span class="simulation">模拟机</span>-λ的节点无法被重置，慎重啊！`,
                `根据实验的效果选择你的<span class="simulation">模拟机</span>函数`,
                `等到你<span class="important">扩增</span>数据类型的时候……`,
                `永远不要忘记你还有一个新的<span class="simulation">模拟</span>升级`
            ]
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase3-sti";
        } else if (experimentfinished.SimulationExperiment5 === 0) {
            const options = [
                `终于……<span class="simulation">模拟</span>实验5，<span class="important">解决它</span>`,
                `我忍这个数据类型很久了……快点，<span class="important">清算</span><span class="simulation">模拟</span>实验5`
            ]
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase4-sti";
        } else {
            const options = [
                `哇哦，不错，现在回到<span class="simulation">模拟</span>里吧！`,
                `你又回来了？`,
                `仔细考虑<span class="simulation">模拟机</span>的选择啊`,
                `解锁<span class="simulation">模拟室</span>的Byte可回不来哦`,
                `你好`
            ]
            currentTip = options[Math.floor(Math.random() * options.length)];
            newTipType = "phase5-sti";
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