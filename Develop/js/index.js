// What do we need from this javascript? 
// run inquirer prompt to accept input from user. use that info to write to fs and populate a character sheet. 
// wanting to write each one to its own unique html page. Probably going to have to code mt own html and css 

// const inquirer = require('inquirer')


// const promptUser = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your character\'s name?'
//         },
//         {
//             type: 'list',
//             name: 'class',
//             message: `What class is ?` // this probably won't work?
//         },
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your character\'s name?'
//         },
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your character\'s name?'
//         },
//     ])}
// promptUser()
    // .then(console.log(answers))

function getAPI() {
fetch('https://www.dnd5eapi.co/api/classes/barbarian')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  //Using console.log to examine the data
  console.log(data)
})
}
getAPI()