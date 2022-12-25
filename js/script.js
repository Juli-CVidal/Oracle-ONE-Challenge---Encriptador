// const fromText = document.querySelector("#input"),
let inputText, resultText, toggleBtn, translateBtn, leftCopy, rightCopy;

const ENCRYPTER = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
const DECRYPTER = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" };
let dictionary;

const encryptMessage = () => {
  console.log(dictionary);
  const keys = Object.keys(dictionary);
  //Con la expresión regular indico los patrones a comparar
  //En este caso son las keys del diccionario, que las uno en un string
  //Al separarlas por | estoy indicando que busque uno u otro ("este patrón"|"este otro")
  const regex = new RegExp(`(${keys.join("|")})`, "g");

  //Replace se encarga de usar regex como buscador
  //Si encuentra coincidencias, las reemplaza con la entrada en el diccionario
  let messageToEncrypt = inputText.value.toLowerCase().replace(
    regex,
    (word) => dictionary[word]
  );


  resultText.value = messageToEncrypt;
};

const changeDictionary = () => {
  toggleBtn.addEventListener("click", () => {
    //Intercambio los valores
    [inputText.value, resultText.value] = [resultText.value, inputText.value];

    //Intercambio la opción para encriptar o desencriptar
    if (translateBtn.innerText == "ENCRIPTANDO") {
      translateBtn.innerText = "DESENCRIPTANDO";
      dictionary = DECRYPTER;
    } else {
      translateBtn.innerText = "ENCRIPTANDO";
      dictionary = ENCRYPTER;
    }
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
  changeDictionary();
};

const getAllElements = () => {
  inputText = document.getElementById("input");
  resultText = document.getElementById("result");
  toggleBtn = document.getElementById("exchange");
  translateBtn = document.getElementById("translate");
  currentAction = document.getElementById("action");
  leftCopy = document.getElementById("left-copy");
  rightCopy = document.getElementById("right-copy");
  dictionary = ENCRYPTER;
};

const init = () => {
  getAllElements();
  addActions();
  translateBtn.addEventListener("click", () => {
    encryptMessage();
  });
};

window.onload = init();
