// 1. Intial setting(16x16 grid square)
const monitor = document.querySelector('.monitor');
for (let i = 1; i <= 16; i++) {
    const div = document.createElement('div');
    div.classList.add('container',`con_${i}`);
    monitor.appendChild(div);
}
for (let i = 1; i <= 16; i++) {
    const cont = document.querySelector(`.con_${i}`);
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('block');
        cont.appendChild(div);
    }
}

// 2. Hovering effect
const block = document.querySelectorAll('.block');
block.forEach(function(e) {
    e.addEventListener('mouseover', () => {
        e.style['background-color'] = 'blue';
    })
    e.addEventListener('mouseout', () => {
        e.style['background-color'] = 'white';
    })
})