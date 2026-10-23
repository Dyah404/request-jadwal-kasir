const form = document.getElementById("requestForm");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    message.textContent =
        "Form berhasil diperiksa. Database belum dihubungkan.";

    message.style.color = "#b45309";
});
