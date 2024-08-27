var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");
var textoCop;

function criptografar(){
    var texto = textInput.value;
    var result1 = texto.replace(/e/g, "enter");
    var result2 = result1.replace(/i/g, "imes");
    var result3 = result2.replace(/a/g, "ai");
    var result4 = result3.replace(/o/g, "ober");
    var result5 = result4.replace(/u/g, "ufat");
    criarOutput(result5);
}

function descriptografar(){
    var texto = textInput.value;
    var result1 = texto.replace(/enter/g, "e");
    var result2 = result1.replace(/imes/g, "i");
    var result3 = result2.replace(/ai/g, "a");
    var result4 = result3.replace(/ober/g, "o");
    var result5 = result4.replace(/ufat/g, "u");
    criarOutput(result5);
}

function criarOutput(texto) {
    var textarea = document.createElement("textarea");
    textarea.id = "input-texto";
    textarea.value = texto;
    textarea.readOnly = true;
    outInput.innerHTML = "";
    outInput.appendChild(textarea);
    var btnCopiar = document.createElement("button");
    btnCopiar.className = "btn-copiar";
    btnCopiar.id = "copiar";
    btnCopiar.onclick = copiar;
    btnCopiar.textContent = "Copiar";
    outInput.appendChild(btnCopiar);
    textoCop = textarea;
}

function copiar() {
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado para área de transferência.");
}
