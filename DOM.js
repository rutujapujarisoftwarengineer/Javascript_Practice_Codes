let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

// let div = document.querySelector("div");
// div.prepend(newBtn);

// let div = document.querySelector("div");
// div.before(newBtn);

let div = document.querySelector("div");
div.after(newBtn);