// ----- Compte à rebours -----
for (let i = 5; i >= 1; i--) {
  console.log(i + "…");
}
console.log("Décollage ! 🚀");

// ----- La table de 7 -----
const nombre = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}

// ----- La tirelire -----
let tirelire = 0;
let semaines = 0;
while (tirelire < 120) {
  tirelire += 5;
  semaines++;
}
console.log(`Il faut ${semaines} semaines pour avoir ${tirelire} DT.`);

// ----- Fizz Buzz -----
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
