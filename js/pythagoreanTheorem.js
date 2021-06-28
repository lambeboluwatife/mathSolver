const inputs = document.querySelectorAll(".input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const alert = document.querySelector(".alert");

btn.addEventListener("click", event => {
  event.preventDefault();
  // Check is inputs fields are empty
  if (!inputs[0].value || !inputs[1].value) {
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
    const a = parseInt(inputs[0].value);
    const b = parseInt(inputs[1].value);

    const c = (Math.pow(a, 2) + Math.pow(b, 2));
    const ans = (Math.sqrt(c));
    console.log(ans.toFixed(2));

    output.textContent = `
      c = ${ans.toFixed(2)}
    `;
  }
});
