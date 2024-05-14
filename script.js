let oneElement = document.querySelector(".one");
oneElement.addEventListener("click", function() {
  let fiveElement = document.querySelector(".five");
  fiveElement.style.display = "none";
});

let twoElement = document.querySelector(".two");
twoElement.addEventListener("click", function() {
  let fourElement = document.querySelector(".four");
  fourElement.style.display = "none";
});

let threeElement = document.querySelector(".three");
threeElement.addEventListener("click", function() {
  let sevenElement = document.querySelector(".seven");
  sevenElement.style.display = "none";
});

let fourElement = document.querySelector(".four");
fourElement.addEventListener("click", function() {
  let eightElement = document.querySelector(".eight");
  eightElement.style.display = "none";
});

let fiveElement = document.querySelector(".five");
fiveElement.addEventListener("click", function() {
  let threeElement = document.querySelector(".three");
  threeElement.style.display = "none";
});

let sixElement = document.querySelector(".six");
sixElement.addEventListener("click", function() {
  let twoElement = document.querySelector(".two");
  twoElement.style.display = "none";
});

let sevenElement = document.querySelector(".seven");
sevenElement.addEventListener("click", function() {
  let sixElement = document.querySelector(".six");
  sixElement.style.display = "none";
});

let eightElement = document.querySelector(".eight");
eightElement.addEventListener("click", function() {
  let oneElement = document.querySelector(".one");
  oneElement.style.display = "none";
});

let text = document.querySelector("h4");
text.innerHTML = "The solution is 4,2,6,7,3,5,1.";
text.style.textAlign = "center";

oneElement.style.backgroundColor = "yellow";

oneElement.style.height = "50px";
oneElement.style.width = "50px";

twoElement.style.backgroundColor = "lightblue";
twoElement.style.height = "50px";
twoElement.style.width = "50px";

threeElement.style.backgroundColor = "lightpink";
threeElement.style.height = "50px";
threeElement.style.width = "50px";

fourElement.style.backgroundColor = "lightyellow";
fourElement.style.height = "50px";
fourElement.style.width = "50px";

fiveElement.style.backgroundColor = "lightgreen";
fiveElement.style.height = "50px";
fiveElement.style.width = "50px";

sixElement.style.backgroundColor = "white";
sixElement.style.height = "50px";
sixElement.style.width = "50px";

sevenElement.style.backgroundColor = "yellow";
sevenElement.style.height = "50px";
sevenElement.style.width = "50px";

eightElement.style.backgroundColor = "yellow";
eightElement.style.height = "50px";
eightElement.style.width = "50px";

let secret = document.querySelector(".lol");
secret.style.display = 'block';

let restart = document.querySelector(".refresh");
