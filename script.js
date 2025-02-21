// Intial setting(16x16 grid square)
// 1. Create flex container div
const monitor = document.querySelector('.monitor');
for (let i = 1; i <= 10; i++) {
    const div = document.createElement('div');
    div.classList.add('container',`con_${i}`);
    monitor.appendChild(div);
}
for (let i = 1; i <= 10; i++) {
    const cont = document.querySelector(`.con_${i}`);
    for (let j = 0; j < 10; j++) {
        const div = document.createElement('div');
        div.classList.add('block');
        cont.appendChild(div);
    }
}