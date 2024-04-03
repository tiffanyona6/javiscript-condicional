const isAdult = (name, age) => {
  if (age >= 18) {
    console.log(" hola " + name + " eres mayor de edad ");
  } else {
    console.log(" hola " + name + " eres menor de edad ");
  }
};

isAdult("Oscar", 15);

const isNumberBig = (numberA, numberB) => {
  if (numberA > numberB) {
    console.log(numberA + " es el mayor ");
  } else {
    console.log(numberB + " es el mayor ");
  }
};
isNumberBig(20, 3);

const value = (numberA) => {
  if (numberA < 0) {
    console.log("positivo");
  } else if (numberA > 0) {
    console.log("negativo");
  } else if (numberA === 0) {
    console.log("cero");
  }
};
value(0);

const average = (numberA, numberB, numberC) => {
  const average = (numberA + numberB + numberC) / 3;
  if (average >= 0 && average < 5) {
    console.log(" suspenso");
  } else if (average <= 5 && average < 8) {
    console.log("Aprobado");
  } else if (average < 8) {
    console.log("Matrícula de honor");
  }
};

average(0, 0, 3);

const bigNumber = (numberA, numberB, numberC) => {
  if (numberA > numberB && numberA > numberC) {
    console.log(numberA);
  } else if (numberB > numberA && numberB > numberC) {
    console.log(numberB);
  } else if (numberC > numberA && numberC > numberA) {
    console.log(numberC);
  }
};
bigNumber(10, 2, 4);

const isDivisibilityByThreeorFive = (numberA) => {
  if (numberA % 3 === 0 && numberA % 5 === 0) {
    console.log(" Es divisible por 3 y 5");
  } else if (numberA % 3 === 0) {
    console.log(" Es divisible por 3 ");
  } else if (numberA % 5 === 0) {
    console.log(" Es divisible por 5 ");
  } else console.log(numberA);
};
isDivisibilityByThreeorFive(30);

const parOrimpar = (numberA) => {
  if (numberA % 2 === 0) {
    console.log(" Es un número par ");
  } else {
    console.log(" Es un número impar ");
  }
};
parOrimpar(11);

const addNumbers = (numberA, numberB) => {
  if (typeof numberA === "string") {
    numberA = Number(numerA);
  }
  if (typeof numberB === "string") {
    numberB = Number(numberB);
  }
  console.log(numberA + numberB);
};

addNumbers(6, 5);
