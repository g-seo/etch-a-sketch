// 1. Function to create grid square
function createGridSquare(number) {
    const monitor = document.querySelector('.monitor');
    // clear for making new grid square
    while (monitor.firstChild) {
        monitor.removeChild(monitor.firstChild);
    }
    for (let i = 1; i <= number; i++) {
        const div = document.createElement('div');
        div.classList.add('container',`con_${i}`);
        monitor.appendChild(div);
    }
    for (let i = 1; i <= number; i++) {
        const cont = document.querySelector(`.con_${i}`);
        for (let j = 0; j < number; j++) {
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
}

// 3. Button to change size
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let num = prompt('Type positive integer smaller than 100 for size');
    createGridSquare(num);
});

// Initial 16x16 grid square
createGridSquare(16);