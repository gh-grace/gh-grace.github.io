// Question 1 
let HR = {
   "employees": [{
        "name": "Sam",
        "department": "Tech", 
        "designation": "Manager", 
        "salary": 40000,
        "raise-eligible": true  
   }, { 
    "name": "Mary",
    "department": "Finance", 
    "designation": "Trainee", 
    "salary": 18500,
    "raise-eligible": true
   }, { 
    "name": "Bill",
    "department": "HR", 
    "designation": "Executive", 
    "salary": 21200,
    "raise-eligible": false
   }] 
}

console.log(HR["employees"]);

// Question 2
let company = {
    "companyInfo": [{
        "companyName": "Tech Stars", 
        "website": "www.techstars.site",
        "employees": HR["employees"]
    }]
}

console.log(company["companyInfo"]);

// Question 3 
HR["employees"].push(
    {
    "name": "Anna",
    "department": "Tech", 
    "designation": "Executive", 
    "salary": 25600,
    "raise-eligible": false  
});

// another way to output the same thing: console.log(HR["employees"][3]);
console.log(company["companyInfo"][0]["employees"][HR["employees"].length -1]);

// Question 4 
let totalSalary = 0; 
for (let i=0; i < HR["employees"].length; i++) { 
    totalSalary += HR["employees"][i]["salary"];
}

console.log(totalSalary);

// Question 5 
function doYouDeserveALivingWage(){ 
    for (let i=0; i < HR["employees"].length; i++) { 
        if (HR["employees"][i]["raise-eligible"] == true) { 
            HR["employees"][i]["salary"] = HR["employees"][i]["salary"] * 1.1; 
            HR["employees"][i]["raise-eligible"] = false 
        }
    }
    console.log(company["companyInfo"]); 
}
doYouDeserveALivingWage();

// Question 6 
const wfh = ["Anna", "Sam"]; 
for (let i=0; i < HR["employees"].length; i++) { 
    if (wfh.includes(HR["employees"][i]["name"])) { 
        HR["employees"][i]["wfh"] = true; 
        // anothery way to do the above line: HR["employees"][i].wfh = "DIDTHETHINGAGAIN"; 
    } else { 
        HR["employees"][i]["wfh"] = false; 
    }
} 

console.log(HR["employees"]);