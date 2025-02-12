const formSupport = document.getElementById('form-support');
const phoneNumber = document.getElementById('phoneNumber');

function formValid() {
    event.preventDefault();
    let error = false;
    let errorMsg;
    const regex = /^\+7\d{10}$/;

    if (!regex.test(phoneNumber.value)) {
        error = true;
        errorMsg = "Номер не верный";
    };

    if (!error) {
        alert("Данные отправлены");
    }
    else {
        alert(errorMsg);
    }
}

formSupport.addEventListener("submit", formValid);

console.log(formSupport);

