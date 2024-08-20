const form = document.querySelector('#mail-form');
const name = document.querySelector('#nombre');
const email = document.querySelector('#email');
const subject = document.querySelector('#asunto');
const message = document.querySelector('#mensaje');

const isRequired = value => value === '' ? false : true;

const checkName = () => {
    let valid = false;
    const nombre = name.value.trim();

    if(!isRequired(nombre)) {
        showError(name);
    } else {
        showSuccess(name);
        valid = true;
    }

    return valid;
}

const checkEmail = () => {
    let valid = false;
    const correo = email.value.trim();

    if(!isRequired(correo)) {
        showError(email);
    } else {
        showSuccess(email);
        valid = true;
    }

    return valid;
}

const checkSubject = () => {
    let valid = false;
    const asunto = subject.value.trim();

    if(!isRequired(asunto)) {
        showError(subject);
    } else {
        showSuccess(subject);
        valid = true;
    }

    return valid;
}

const checkMessage = () => {
    let valid = false;
    const mensaje = message.value.trim();

    if(!isRequired(mensaje)) {
        showError(message);
    } else {
        showSuccess(message);
        valid = true;
    }

    return valid;
}

const showError = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.style.color = "red";
    error.textContent = 'Campo obligatorio.'
}

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isNameValid = checkName(),
        isEmailValid = checkEmail(),
        isSubjectValid = checkSubject(),
        isMessageValid = checkMessage();

    let isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid;

    console.log(isFormValid);

    if(!isFormValid) {
        const messageDisplay = document.getElementById('form-message');

        messageDisplay.style.display = "block";
    } else {
        const formData = new FormData(form);

        fetch('php/email-form.php', {
            method: 'POST',
            body: formData
        }).then(response => {
            if(response.ok) {
                const display = document.getElementById('display-form');

                display.innerHTML = '';

                display.innerHTML = `
                    <p>Correo enviado</p>
                `;
            } else {
                const display = document.getElementById('display-form');

                display.innerHTML = '';

                display.innerHTML = `
                    <p>Ha ocurrido un error</p>
                `;
            }
        }).catch(error => {
            console.log(error);
        });
    }
}, false);