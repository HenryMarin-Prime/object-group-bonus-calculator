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

console.log( employees );

// - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// - No bonus can be above 13% or below 0% total.
function bonusCalculator(addBonus){
  let addBonus = 0;
for(let i = 0; i<employees.length; i++)
    if (employees[i].annualSalary >= 65000){
      addBonus =( totalCompesation* .01);
    }
    
    else if (employee[i].reviewRating <= 2){
      addBonus =( totalCompesation* .0);
    }
  
    else if (employee[i].reviewRating  === 3){
      addBonus =( (totalCompesation * .04) + totalCompesation );
    
    }
  
      else if (employee[i].reviewRating  === 4){
        addBonus =( (totalCompesation * .06) + totalCompesation );
      
      }
  
   else if (employee[i].reviewRating  === 5){
      addBonus =( (totalCompesation * .1) + totalCompesation );
    
    }

    return addBonus;
  }

