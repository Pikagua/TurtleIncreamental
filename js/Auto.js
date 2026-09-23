// 这段代码被废弃了，如果需要寻找自动化相关，去"produce"找
// 没错从现在开始这个文件被longpress占领了，就是这么随便
let longPressTimer = null;
let longPressInterval = null;
let longPressCurrent = null;

function startLongPress(e) {
    const btn = e.target.closest('[data-longpress]');
    if (!btn || btn.disabled) return;

    longPressCurrent = btn;

    // 500ms 后判定为长按
    longPressTimer = setTimeout(() => {
        const fn = window[btn.dataset.longpress];
        if (typeof fn !== 'function') return;

        // 标记正在长按，用于拦截后续的 click
        btn.dataset.longpressing = '1';

        // 立即执行一次，然后持续执行
        fn();
        longPressInterval = setInterval(() => {
            if (btn.disabled) {
                stopLongPress();
                return;
            }
            fn();
        }, 50);
    }, 500);
}

function stopLongPress() {
    clearTimeout(longPressTimer);
    clearInterval(longPressInterval);

    // 延迟清除标记，让 click 事件先被拦截
    if (longPressCurrent) {
        const btn = longPressCurrent;
        setTimeout(() => {
            delete btn.dataset.longpressing;
        }, 0);
    }

    longPressTimer = null;
    longPressInterval = null;
    longPressCurrent = null;
}

// 捕获阶段拦截长按后的 click，避免和 onclick 重复执行
document.addEventListener('click', function(e) {
    const btn = e.target.closest('[data-longpress]');
    if (btn && btn.dataset.longpressing === '1') {
        e.stopPropagation();
        e.preventDefault();
    }
}, true);

// 鼠标事件
document.addEventListener('mousedown', startLongPress);
document.addEventListener('mouseup', stopLongPress);
document.addEventListener('mouseleave', stopLongPress);