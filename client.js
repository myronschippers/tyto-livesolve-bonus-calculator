const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


const bonusInfo = [];

function makeInfo(employee) {
  const bonusPct = calcBonusPct(employee);
  const totalBonus = calcTotalBonus(bonusPct, employee.annualSalary);
  const totalCompensation = calcTotalCompensation(employee.annualSalary, totalBonus);
  const finishedBonus = {
    name: employee.name,
    percent: bonusPct,
    totalBonus: totalBonus,
    totalCompensation: totalCompensation,
  };
  console.log(finishedBonus);
  return finishedBonus;
}

function calcTotalBonus(percent, salary) {
  const percentAsDecimal = percent / 100;
  return salary * percentAsDecimal;
}

function calcTotalCompensation(salary, bonusMoney) {
  return parseInt(salary) + bonusMoney;
}

function calcBonusPct(employee) {
  let finalBonusPct = calcBonusBasedOnRating(employee.reviewRating);

  finalBonusPct = adjustBonusBasedOnSeniority(finalBonusPct, employee.employeeNumber);

  finalBonusPct = adjustBonusForSalary(finalBonusPct, employee.annualSalary);

  if (finalBonusPct > 13) {
    finalBonusPct = 13;
  } else if (finalBonusPct < 0) {
    finalBonusPct = 0;
  }

  return finalBonusPct;
}

function adjustBonusBasedOnSeniority(baseBonus, employeeNumber) {
  // if employee number is 4 digits they have 15 yrs and need extra 5%
  if (employeeNumber.length === 4) {
    return baseBonus + 5;
  }
  
  return baseBonus;
}

function adjustBonusForSalary(baseBonus, salary) {
  if (parseInt(salary) > 65000) {
    return baseBonus - 1;
  }

  return baseBonus;
}

function calcBonusBasedOnRating(rating) {

  if (rating <= 2) {
    return 0;
  } else if (rating === 3) {
    return 4;
  }  else if (rating === 4) {
    return 6;
  }  else if (rating === 5) {
    return 10;
  }

  

  return 0;
}

function calculateBonus(info) {
  for(let i = 0; i < info.length; i++){
    let employee = info[i];

    const newEmployeeBonusObject = makeInfo(employee);
    bonusInfo.push(newEmployeeBonusObject);
  }

  console.log(bonusInfo);
}

calculateBonus(employees);
console.log(bonusInfo);
