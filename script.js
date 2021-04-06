const btns = document.querySelector(".wrapper");
const prev = document.querySelector("div.previous_result");
const curr = document.querySelector("div.current_result");
const calc = new Calculator(prev, curr);

btns.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    const value = e.target.innerText || "";
    switch (value) {
      case "AC":
        calc.clear();
        break;
      case "DEL":
        calc.delete();
        break;
      case "=":
        calc.getResult();
        break;
      default:
        calc.append(value);
    }
  }
  //   console.log(value);
});
// console.dir(btns);
