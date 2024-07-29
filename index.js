const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
console.log(totalJuniorDevelopersSalary, typeof(totalJuniorDevelopersSalary))
                
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
   const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
   console.log(salaryWithTax, typeof(salaryWithTax))
   totalJuniorDevelopersSalary += salaryWithTax;
}
console.log(totalJuniorDevelopersSalary, typeof(totalJuniorDevelopersSalary))
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);