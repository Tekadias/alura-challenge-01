const input = document.getElementById("input");
const encrypt = document.getElementById("encrypt");
const decrypt = document.getElementById("decrypt");
const showMessage = document.getElementById("message");
const closeModalButton = document.getElementById("close-modal-button");
const warningModal = document.getElementById("warningModal");
const warningModalMessage = document.getElementById("modal-message");
const successModal = document.getElementById("successModal");
const closeSuccessModal = document.getElementById("close-modal");
const successModalMessage = document.getElementById("success-modal-message");
const copy = document.getElementById("copy");

// To encrypt message
function encryptMessage(str) {
  const string = str.toLowerCase().split("");
  const code = ["ai", "enter", "imes", "ober", "ufat"];
  const encryptMessage = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      encryptMessage.push(code[0]);
    } else if (string[i] === "e") {
      encryptMessage.push(code[1]);
    } else if (string[i] === "i") {
      encryptMessage.push(code[2]);
    } else if (string[i] === "o") {
      encryptMessage.push(code[3]);
    } else if (string[i] === "u") {
      encryptMessage.push(code[4]);
    } else {
      encryptMessage.push(string[i]);
    }
  }
  return encryptMessage.join("");
}

// descryptar mensagem
function decryptMessage(str) {
  const regex = /ai|enter|imes|ober|ufat/gi;
}

// Validar user's input
function invalidInput(str) {
  const specialChars = /[`áéíóú´!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

// Encrypt function
encrypt.addEventListener("click", function () {
  if (input.value.length <= 0) {
    warningModalMessage.innerHTML =
      "Você não digitou nenhuma mensagem para ser criptografada, por favor digite a mensagem.";
    warningModal.style.display = "block";
    return;
  }

  if (invalidInput(input.value)) {
    warningModalMessage.innerHTML =
      "Não são aceitos caracteres especiais ou acentos. Por favor, tente novamente.";
    warningModal.style.display = "block";
    return;
  } else {
    showMessage.style.display = "block"; //Cancela a propriedade original
    showMessage.innerHTML = `<h2>${encryptMessage(input.value)}</h2>`;
    input.value = "";
  }
});

// Função de descriptografar
decrypt.addEventListener("click", function () {
  let string = input.value;
  const regex = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  string = string.replace(/ai|enter|imes|ober|ufat/gi, function (matched) {
    return regex[matched];
  });

  showMessage.style.display = "block";
  showMessage.innerHTML = `<h2>${string}</h2>`;
  input.value = "";
});

// Copy
copy.addEventListener("click", function () {
  /* Copia o texto dentro do campo de texto */
  navigator.clipboard.writeText(showMessage.innerText);
  successModalMessage.innerHTML = "A mensagem foi copiada com sucesso";
  successModal.style.display = "block";
});

// Close Modal
closeModalButton.addEventListener("click", function () {
  warningModal.style.display = "none";
});

warningModal.addEventListener("click", function () {
  warningModal.style.display = "none";
});

successModal.addEventListener("click", function () {
  successModal.style.display = "none";
});