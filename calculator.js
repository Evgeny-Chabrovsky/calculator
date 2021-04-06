class Calculator {
  constructor(prev, curr) {
    this.prev = prev;
    this.curr = curr;
  }

  clear() {
    this.prev.innerText = "";
    this.curr.innerText = "";
  }
  delete() {
    if (this.curr.innerText === "") return;
    this.curr.innerText = this.curr.innerText.slice(0, -1);
  }

  append(value) {
    if (isNaN(+value)) {
      //if not number
      if (value === ".") {
        if (this.curr.innerText === "" || this.curr.innerText === "0") {
          return (this.curr.innerText = "0.");
        } else if (this.curr.innerText.includes(".") && value === ".") return;
        else {
          this.curr.innerText = this.curr.innerText + ".";
        }
      } else if (value === "=") {
        this.getResult;
        return;
      } else {
        //if empty
        if (this.prev.innerText == "") {
          if (this.curr.innerText[this.curr.innerText.length - 1] === ".") {
            this.curr.innerText = this.curr.innerText.slice(0, -1);
          }
          this.prev.innerText = this.curr.innerText + value;
          this.curr.innerText = "";
          return;
        } else {
          //not empty
          this.prev.innerText = this.prev.innerText.slice(0, -1);
          this.prev.innerText = this.prev.innerText + value;
          return;
        }
      }
    } else {
      this.curr.innerText = this.curr.innerText + value;
    }
  }

  getResult() {
    if (this.prev.innerText === "") return;
    let par1 = +this.prev.innerText.slice(0, -1);
    let par2 = +this.curr.innerText;
    let operand = this.prev.innerText.slice(-1);

    this.prev.innerText = "";
    this.curr.innerText = this.calculate(par1, par2, operand);

    // console.log(this.curr.innerText);
  }
  calculate(val1, val2, oper) {
    let result = null;
    switch (oper) {
      case "+":
        result = val1 + val2;
        break;
      case "-":
        result = val1 - val2;
        break;
      case "*":
        result = val1 * val2;
        break;
      case "/":
        result = val1 / val2;
        break;

      default:
        result = "Error";
        break;
    }
    return result;
  }
}
