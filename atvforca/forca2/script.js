const plvrs = ["cachorro", "abacaxi", "vassoura", "janela", "piscina", "ubuntu", "sqliteonline", "netbeans"];

const plvrEscolhida = plvrs[Math.floor(Math.random() * plvrs.length)];
const letraErrada = [];
const letraCerta =[];


document.addEventListener("keydown", (evento) => {
    const codLetra = evento.keyCode; // 65 ~ 90
    if (verifLetra(codLetra)) {
        const letra = evento.key;
        if(letraErrada.includes(letra)) {
            mostraAvisoLetrRep();
        } else {
            if(plvrEscolhida.includes(letra)) {
                letraCerta.push(letra);
            } else {
                letraErrada.push(letra);
            }
        }
        atualizaJogo();
    }
})

function atualizaJogo() {
    mostraLetraErrada();
    mostraLetraCerta();
    desenhaBoneco();
    checaJogo();
}

function mostraLetraErrada() {
    const letrE = document.querySelector(".letraserradas")
    letrE.innerHTML = "<h3>Letras erradas</h3>";
    letraErrada.forEach(letra => {
        letrE.innerHTML += `<span>${letra}</span>`;
    });
}

function mostraLetraCerta() {
    const bloco = document.querySelector(".palavra");
    bloco.innerHTML = "";
    plvrEscolhida.split("").forEach(letra => {
        if(letraCerta.includes(letra)) {
            bloco.innerHTML += `<span>${letra}</span>`;
        } else {  
            bloco.innerHTML += `<span>_</span>`;
        }
    });
}

function desenhaBoneco(){
    const parteCorpo = document.querySelectorAll(".membro");
    for(let i = 0; i < letraErrada.length; i++) {
        parteCorpo[i].style.display = "block";
    }
}

function checaJogo(){
    let msg = "";
    const bloco = document.querySelector(".palavra");
    const parteCorpo = document.querySelectorAll(".membro");
    if(letraErrada.length === parteCorpo.length) {
        msg = "Você perdeu"
    }

    if(plvrEscolhida === bloco.innerText){
        msg = "Você ganhou";

    }

    if(msg){
        document.querySelector("#msg").innerHTML = msg;
        document.querySelector(".fimdejogo").style.display = "flex";
    }
}

function mostraAvisoLetrRep() {
    const aviso = document.querySelector(".letrarepetida");
    aviso.classList.add("show");
    setTimeout(() => {
        aviso.classList.remove("show");
    }, 1000);
}

function verifLetra(codLetra) {
    return codLetra >= 65 && codLetra <= 90;
}

function restart() {
    window.location.reload();
}