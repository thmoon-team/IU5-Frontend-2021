//заадча рандомный квадрат 

//функция рандомного цвета
function rand_rbg() {
    let col = Math.floor(256 * Math.random());
    let r = col.toString(16);
    let f = 15;
    f.toString(16);
    col = Math.round(256 * Math.random());
    let g = col.toString(16);
    col = Math.round(256 * Math.random());
    let b = col.toString(16);
    col = '#' + r + g + b;
    console.log(col)
    return col;
}
//основная часть программы
document.getElementById('squreBox').addEventListener('click', function() {
    document.getElementById('squreBox').style.backgroundColor = rand_rbg();
});

//задача таймер

let inc = 0;
document.getElementById('timer').addEventListener('mouseover', () => {
    let timon = document.getElementById('timer');
    console.log(timon)
    let timer_id = setInterval(function timer() {
        inc++;
        timon.innerHTML = inc.toString();

    }, 1000);
    timon.addEventListener('mouseout', () => {
        clearInterval(timer_id)
    });

});
//задача выпающий кастомный список js+css

let button = document.getElementById('but');
let ul = document.getElementById('uli');
let sc = document.getElementById('scroll')
let i = 0;
button.addEventListener('click', () => {
    i++;
    ul.style.opacity = '1';
    sc.style.overflowY = 'scroll';

    if (i % 2 == 0) {
        ul.style.opacity = '0';
        sc.style.overflowY = 'hidden';
    }
});



//задача кружок

let circleBox = document.getElementById('circleBox');
let circle = document.getElementById('circle');

let mouseX = 0;
let mouseY = 0;
let g = true;
let j = true;
circle.addEventListener('click', () => {

    console.log('нажал');

    circle.style.position = 'sticky';
    if (g == false) {
        mouseY = mouseY + 128 - pageYOffset;
        circle.style.top = mouseY + 'px';
        mouseX = mouseX + 296 - pageXOffset;
        circle.style.left = mouseX + 'px';
        g = true;
    }

    function move() {
        circle.style.top = mouseY + 'px';
        circle.style.left = mouseX + 'px';
    }
    circleBox.addEventListener('mousemove', (ev) => {
        mouseY = ev.clientY - 15;
        mouseX = ev.clientX - 15;
    });

    let timer_id = setInterval(move, 1);
    if (g == false) j = false;
    else j = true;
    window.addEventListener('keydown', (el) => {
        if (el.keyCode == 27) {

            clearInterval(timer_id);
            circle.style.position = 'relative';
            if (j) {

                mouseY = mouseY - 128 + pageYOffset;
                circle.style.top = mouseY + 'px';
                mouseX = mouseX - 296 + pageXOffset;
                circle.style.left = mouseX + 'px';
                g = false;
                j = false;
            };
        };
    });
});