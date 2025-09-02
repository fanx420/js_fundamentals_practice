/*Problem: Employee Task Tracker

You have a list of employees and the tasks they completed in a week:

const employees = [
  { name: "Alice", tasks: ["Design UI", "Fix bug #23", "Write tests"] },
  { name: "Bob", tasks: ["Fix bug #23", "Deploy to server"] },
  { name: "Cara", tasks: ["Write tests", "Design UI", "Update documentation"] },
  { name: "Dan", tasks: ["Fix bug #23", "Update documentation", "Write tests"] }
];


Tasks:

Print each employee’s name and number of tasks completed.
Example: "Alice completed 3 tasks"

Create a unique list of all tasks done by all employees.
Hint: use Set or check duplicates manually.

Find out which task(s) was completed the most by employees.
Example: "Most completed task: 'Write tests'" */

const employees = [
    { name: "Alice", tasks: ["Design UI", "Fix bug #23", "Write tests"] },
    { name: "Bob", tasks: ["Fix bug #23", "Deploy to server"] },
    { name: "Cara", tasks: ["Write tests", "Design UI", "Update documentation"] },
    { name: "Dan", tasks: ["Fix bug #23", "Update documentation", "Write tests"] }
];

const arrTask = []
employees.forEach(({ name, tasks }) => {
    console.log(`${name} has completed ${tasks.length} tasks`)
    arrTask.push(...tasks)
})

const tasks = arrTask.flat(Infinity)
const uniqueTasks = new Set(tasks);

const countTasks = tasks.reduce((acc, task) => {
    acc[task] = (acc[task] || 0) + 1;
    return acc;
}, {});

const highestCountTask = Object.values(countTasks).reduce((acc, val) => acc > val ? acc : val);

const mostTasksDone = [];
for (const [key, value] of Object.entries(countTasks)) {
    if (value === highestCountTask) {
        mostTasksDone.push(key)
    }
}
console.log("Unique Tasks:", [...uniqueTasks]);
console.log("Most Task done:")
mostTasksDone.forEach(task => console.log(task))

/* output 
Alice has completed 3 tasks
Bob has completed 2 tasks
Cara has completed 3 tasks
Dan has completed 3 tasks
Unique Tasks: [
  'Design UI',
  'Fix bug #23',
  'Write tests',
  'Deploy to server',
  'Update documentation'
]
Most Task done:
Fix bug #23
Write tests

*/