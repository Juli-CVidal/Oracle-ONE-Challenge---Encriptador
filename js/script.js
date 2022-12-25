// const fromText = document.querySelector("#input"),
let inputText,
  resultText,
  exchangeBtn,
  translateBtn,
  action,
  leftCopy,
  rightCopy;

const ENCRYPTER = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
const DECRYPTER = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" };

const decryptMessage = () => {
    //Convierto el mensaje a minúsculas
  let messageToDecrypt = resultText.value.toLowerCase();

  //Reemplazo cada vocal por su encriptación correspondiente
  inputText.value = messageToDecrypt.replace(
    /[a-z]/g,
    (sequence) => DECRYPTER[sequence] || sequence
  );
};

const encryptMessage = () => {
  let messageToEncrypt = inputText.value.toLowerCase();

  resultText.value = messageToEncrypt.replace(
    /[a-z]/g,
    (letter) => ENCRYPTER[letter] || letter
  );
};


//Reemplazo la acción anterior por la correspondiente
const addDecryptAction = () => {
    translateBtn.removeEventListener("click", encryptMessage);
    translateBtn.addEventListener("click", decryptMessage);
    action.innerText = "DESENCRIPTANDO";
};

//Reemplazo la acción anterior por la correspondiente
const addEncryptAction = () => {
  translateBtn.removeEventListener("click", decryptMessage);
  translateBtn.addEventListener("click", encryptMessage);
  action.innerText = "ENCRIPTANDO";
};

const addExchangeAction = () => {
  exchangeBtn.addEventListener("click", () => {
    //Intercambio los valores
    [inputText.value, resultText.value] = [resultText.value, inputText.value];
    //Intercambio la opción para encriptar o desencriptar
    action.innerText == "ENCRIPTANDO" ? addDecryptAction() : addEncryptAction();
  });

};

const addCopyActions = () => {
  leftCopy.addEventListener("click", () => {
    inputText.select();
    document.execCommand("copy");
  });

  rightCopy.addEventListener("click", () => {
    resultText.select();
    document.execCommand("copy");
  });
};

const addActions = () => {
  addCopyActions();
  addExchangeAction();
  addEncryptAction();
};

const getAllElements = () => {
  inputText = document.getElementById("input");
  resultText = document.getElementById("result");
  exchangeBtn = document.getElementById("exchange");
  icons = document.querySelectorAll(".row i");
  translateBtn = document.getElementById("translate");
  action = document.getElementById("action");
  leftCopy = document.getElementById("left-copy");
  rightCopy = document.getElementById("right-copy");
};

const init = () => {
  getAllElements();
  addActions();
};

window.onload = init();
