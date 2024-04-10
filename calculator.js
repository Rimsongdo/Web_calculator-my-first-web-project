
    const textarea = document.getElementById("resultat");
    const buttons = document.querySelectorAll(".keypad button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = this.textContent;
            if (buttonText === "=") {
                try {
                    textarea.value = eval(textarea.value);
                } catch (error) {
                    textarea.value = "Error";
                }
            } else {
                textarea.value += buttonText;
            }
        });
    });

