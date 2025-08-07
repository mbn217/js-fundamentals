let familySize = 2;

let plannedDistanceToDrive = 11000;

function recommendedCar(familySize, plannedDistanceToDrive) {
  if (familySize <= 4 && plannedDistanceToDrive < 200) {
    return "Tesla";
  } else if (familySize <= 4 && plannedDistanceToDrive >= 200) {
    return "Toyota Camry";
  } else if (familySize > 4 ) {
    return "Minivan";
  }
}

console.log(recommendedCar(familySize, plannedDistanceToDrive));
