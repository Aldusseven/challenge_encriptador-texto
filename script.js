const inputTextArea = document.querySelector(".input-text-area");
const outputTextArea = document.querySelector(".output-text-area");


function handleEncryptButton(){
    const encryptedText = encryptText(inputTextArea.value);
    outputTextArea.value = encryptedText;
    inputTextArea.value = "";
    outputTextArea.style.backgroundImage = "none";
    document.querySelector("h4").style.display = "none";
    document.querySelector("h5").style.display = "none";
    document.querySelector(".copy-button").style.display = "block";    
}


function encryptText(textToEncrypt){
    let encryptionMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textToEncrypt = textToEncrypt.toLowerCase()

    for(let i = 0; i < encryptionMatrix.length; i++){
        if(textToEncrypt.includes(encryptionMatrix[i][0])){
            textToEncrypt = textToEncrypt.replaceAll(encryptionMatrix[i][0], encryptionMatrix[i][1]);
        }
    }

    return textToEncrypt;
}


function handleDecryptButton(){
    const decryptedText = decryptText(inputTextArea.value);
    outputTextArea.value = decryptedText;
    inputTextArea.value = "";    
}


function decryptText(textToDecrypt){
    let decryptionMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textToDecrypt = textToDecrypt.toLowerCase()

    for(let i = 0; i < decryptionMatrix.length; i++){
        if(textToDecrypt.includes(decryptionMatrix[i][0])){
            textToDecrypt = textToDecrypt.replaceAll(decryptionMatrix[i][1], decryptionMatrix[i][0]);
        }
    }

    return textToDecrypt;
}


function copyToClipboard() {
    navigator.clipboard.writeText(outputTextArea.value)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            alert.error("Error al copiar el texto: ", err);
        });
}
