
// Efecto de maquina de escribir

let texto = document.getElementById("pres");
let str = texto.innerHTML;

texto.innerHTML = "";

let velocidad = 50;
let i = 0;

function escribir() {
    if (i < str.length) {
        texto.innerHTML += str.charAt(i);
        i++;
        setTimeout(escribir, velocidad);
    }
}

setTimeout(escribir, velocidad);

// Flags para Estudios y Conocimientos
let flag1 = 0;
let flag2 = 0;
let flag3 = 0;
let flag4 = 0;

// Flags para Experiencia
let ExpFlag1 = 0;
let ExpFlag2 = 0;
let ExpFlag3 = 0;
let ExpFlag4 = 0;

// Funciones desplegables para Estudios y Conocimientos
document.getElementById('est-1').addEventListener('click', function () {
    if (document.getElementById('p-1').style.display === 'none' || flag1 === 0) {
        document.getElementById('p-1').style.display = 'block';
        flag1 = 1;
    } else {
        document.getElementById('p-1').style.display = 'none';
    }
}
)

document.getElementById('est-2').addEventListener('click', function () {
    if (document.getElementById('p-2').style.display === 'none' || flag2 === 0) {
        document.getElementById('p-2').style.display = 'block';
        flag2 = 1;
    } else {
        document.getElementById('p-2').style.display = 'none';
    }
}
)

document.getElementById('est-3').addEventListener('click', function () {
    if (document.getElementById('p-3').style.display === 'none' || flag3 === 0) {
        document.getElementById('p-3').style.display = 'block';
        flag3 = 1;
    } else {
        document.getElementById('p-3').style.display = 'none';
    }
}
)

document.getElementById('est-4').addEventListener('click', function () {
    if (document.getElementById('p-4').style.display === 'none' || flag4 === 0) {
        document.getElementById('p-4').style.display = 'block';
        flag4 = 1;
    } else {
        document.getElementById('p-4').style.display = 'none';
    }
}
)

// Funciones desplegables para Experiencia Laboral

document.getElementById('exp-1').addEventListener('click', function () {
    if (document.getElementById('pExp-1').style.display === 'none' || ExpFlag1 === 0) {
        document.getElementById('pExp-1').style.display = 'block';
        ExpFlag1 = 1;
    } else {
        document.getElementById('pExp-1').style.display = 'none';
    }
}
)

document.getElementById('exp-2').addEventListener('click', function () {
    if (document.getElementById('pExp-2').style.display === 'none' || ExpFlag2 === 0) {
        document.getElementById('pExp-2').style.display = 'block';
        ExpFlag2 = 1;
    } else {
        document.getElementById('pExp-2').style.display = 'none';
    }
}
)

document.getElementById('exp-3').addEventListener('click', function () {
    if (document.getElementById('pExp-3').style.display === 'none' || ExpFlag3 === 0) {
        document.getElementById('pExp-3').style.display = 'block';
        ExpFlag3 = 1;
    } else {
        document.getElementById('pExp-3').style.display = 'none';
    }
}
)

document.getElementById('exp-4').addEventListener('click', function () {
    if (document.getElementById('pExp-4').style.display === 'none' || ExpFlag4 === 0) {
        document.getElementById('pExp-4').style.display = 'block';
        ExpFlag4 = 1;
    } else {
        document.getElementById('pExp-4').style.display = 'none';
    }
}
)
