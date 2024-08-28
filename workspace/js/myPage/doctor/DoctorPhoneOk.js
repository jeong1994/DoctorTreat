const inputs = document.querySelectorAll('.DoctorPhoneOk-input-field');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('focus');
    });

    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            input.classList.remove('focus');
            input.classList.add('blur');
        } else {
            input.classList.remove('blur');
            input.classList.remove('focus');
        }
    });
});

document.getElementById("phoneInput").addEventListener("focus", function() {
    this.classList.remove("error");
    document.getElementById("errorMessage").style.display = "none";
});

document.getElementById("phoneInput").addEventListener("blur", function() {
    if (this.value === "") {
        this.classList.add("error");
        document.getElementById("errorMessage").style.display = "block";
    }
});

function validateInput() {
    var phoneInput = document.getElementById("phoneInput").value;
    if (phoneInput === "") {
        document.getElementById("phoneInput").classList.add("error");
        document.getElementById("errorMessage").style.display = "block";
    } else {
        document.getElementById("errorMessage").style.display = "none";
    }
}