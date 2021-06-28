const inputs = document.querySelectorAll(".input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const alert = document.querySelector(".alert");

btn.addEventListener("click", event => {
  event.preventDefault();
  // Check is inputs fields are empty
  if (!inputs[0].value || !inputs[1].value || !inputs[2].value) {
    let innerMsg = document.createElement("div");
    innerMsg.textContent = "Input all fields";
    innerMsg.classList.add(
      "btn",
      "text-center",
      "btn-danger",
      "text-light",
      "form-control"
    );
    alert.appendChild(innerMsg);
    setTimeout(() => innerMsg.remove(), 3000);
  } else {
    const step1 = parseInt(inputs[2].value) - 1;
    const step2 = step1 * parseInt(inputs[1].value);
    const ans = step2 + parseInt(inputs[0].value);
    // console.log(ans);

    output.textContent = `
      The ${inputs[2].value}th Term = ${ans}
    `;
  }
});
