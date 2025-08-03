/*(🧠 Problem: Classify Users by Activity Level
You are given an array of user activity logs. Each user has a name, loginCount, and isPremium status.
const users = [
  { name: "Anna", loginCount: 15, isPremium: true },
  { name: "Ben", loginCount: 5, isPremium: false },
  { name: "Cara", loginCount: 20, isPremium: true },
  { name: "Dan", loginCount: 2, isPremium: false },
  { name: "Ella", loginCount: 12, isPremium: false }
];
🎯 Task:
Categorize users as either "Active" or "Inactive" depending on whether their loginCount is greater than or equal to 10.

Create a summary object with two properties:

activeUsers: array of names

inactiveUsers: array of names

Also, count how many of them are premium members.

✅ Expected Output:
{
  activeUsers: ["Anna", "Cara", "Ella"],
  inactiveUsers: ["Ben", "Dan"],
  totalPremium: 2
} */

  // Solution:
  const users = [
  { name: "Anna", loginCount: 15, isPremium: true },
  { name: "Ben", loginCount: 5, isPremium: false },
  { name: "Cara", loginCount: 20, isPremium: true },
  { name: "Dan", loginCount: 2, isPremium: false },
  { name: "Ella", loginCount: 12, isPremium: false }
];
const activeUsers = [];
const inactiveUsers = [];
let countPremium = 0;

const category = users.map(({ name, loginCount }) =>{
    let status;
    if(loginCount >= 10){
        status = "active";
    }else{
        status = "inactive";
    }
    
    return {
        name: name,
        status:status
    }
})
for(const { name, loginCount, isPremium} of users){
    if(loginCount >= 10){
        activeUsers.push(name)
    }else{
        inactiveUsers.push(name)
    }
    
    if(isPremium){
        countPremium++
    }
}
console.log({
    activeUsers,
    inactiveUsers,
    totalPremium: countPremium,
    status: category
})
/* Output:
{
  activeUsers: [ 'Anna', 'Cara', 'Ella' ],
  inactiveUsers: [ 'Ben', 'Dan' ],
  totalPremium: 2,
  status: [
    { name: 'Anna', status: 'active' },
    { name: 'Ben', status: 'inactive' },
    { name: 'Cara', status: 'active' },
    { name: 'Dan', status: 'inactive' },
    { name: 'Ella', status: 'active' }
  ]
} */