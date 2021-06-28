const inputs = document.querySelectorAll(".input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const alert = document.querySelector(".alert");

btn.addEventListener("click", event => {
  event.preventDefault();
  // Check is inputs fields are empty
  if (
    !inputs[0].value ||
    !inputs[1].value ||
    !inputs[2].value ||
    !inputs[3].value
  ) {
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
    const step1 = parseInt(inputs[1].value) - parseInt(inputs[0].value);
    const step2 = parseInt(inputs[2].value) - parseInt(inputs[3].value);
    const ans = step1 / step2;
    // console.log(ans);

    output.textContent = `
      Gradient = ${ans}
    `;
  }
});
