function completeMinute(value) {
    if (value.length === 1) {
        return "0" + value;
    }else {
        return value;
    }
}

function atualizaRelogio() {
    var date = new Date();
    var vhora = date.getHours();
    var vminute = date.getMinutes();
    document.getElementById("data").innerHTML =  completeMinute(vhora) + ':' + completeMinute(vminute);
    document.getElementById("saudacao").innerHTML =  comprimento(vhora);
}

function comprimento(value) {

    if ([0,1,2,3,4,5,6,7,8,9,10,11,12].includes(value)) {
        return "Bom dia, Usuario!"
    }

    if ([13,14,15,16,17,18].includes(value)) {
        return "Boa tarde, Usuario!"
    }

    if ([19,20,21,22,23].includes(value)) {
        return "Boa noite, Usuario!"
    }

}
window.onload = atualizaRelogio;