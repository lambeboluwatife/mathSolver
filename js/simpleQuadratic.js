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
    const a = parseInt(inputs[0].value);
    const b = parseInt(inputs[1].value);
    const c = parseInt(inputs[2].value);

    const step1 = Math.pow(b, 2) - 4 * a * c;
    const step2 = Math.sqrt(step1);
    const step3 = -b + step2;
    const ans1 = step3 / (2 * a);

    // console.log(step1);
    // console.log(step2);
    // console.log(step3);
    console.log(ans1.toFixed(2));

    const step4 = -b - step2;
    const ans2 = step4 / (2 * a);

    console.log(ans2.toFixed(2));
  

    output.textContent = `
      x = ${ans1.toFixed(2)} or ${ans2.toFixed(2)}
    `;
  }
});
