const resultOutput = document.getElementById("result-output");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const buttonsContainer = document.getElementById("buttons-container");

const placeholderText = "welcome to my calculator";
resultOutput.textContent = placeholderText;

function disableButtons() {
  if (
    resultOutput.textContent === "" ||
    resultOutput.textContent === placeholderText
  ) {
    clearBtn.disabled = true;
    deleteBtn.disabled = true;
    clearBtn.classList.add("disable-btn");
    deleteBtn.classList.add("disable-btn");
  } else {
    clearBtn.disabled = false;
    deleteBtn.disabled = false;
    clearBtn.classList.remove("disable-btn");
    deleteBtn.classList.remove("disable-btn");
  }
}

// Call disableButtons() when the content changes
resultOutput.addEventListener("input", disableButtons);

// Call disableButtons() to initially set button states
disableButtons();

const buttons = document.querySelectorAll(".btn");

function handleButtonClick(event) {
  const buttonValue = event.target.value;
  const currentText = resultOutput.textContent;

  if (buttonValue === "=") {
    try {
      const result = eval(currentText);
      resultOutput.textContent = result;
    } catch (error) {
      resultOutput.textContent = "Error";
    }
  } else {
    currentText === placeholderText ? (resultOutput.textContent = "") : null;
    resultOutput.textContent += buttonValue;
  }
  disableButtons();
}

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function clearResult() {
  resultOutput.textContent = placeholderText;
  disableButtons();
}
clearBtn.addEventListener("click", clearResult);

function deleteLastCharacter() {
  const currentText = resultOutput.textContent;
  resultOutput.textContent = currentText.slice(0, -1);
  if (
    resultOutput.textContent === "" ||
    resultOutput.textContent === placeholderText
  ) {
    resultOutput.textContent = placeholderText;
    disableButtons();
  }
}
deleteBtn.addEventListener("click", deleteLastCharacter);
