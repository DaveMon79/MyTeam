// Variable to which will hold an array of card strings
let teamHTML = []

// Function which takes the teamArray from promt questions to makes a final 
generatePage = (teamArray) => {

// Takes Manager selctions to create a string of Managers and pushes them to team string
managerCard = (teamArray) => {

    let managerHTML =`
    <div class="card" id="manager">
    <div class="card-top">
        <div class="name-title">
            <h2>${teamArray.name}</h2>
            <h2>Manager</h2>
        </div>
    </div>
   
    <div class="card-bottom">
        <div class="card-bottom-text">
            <h3>ID: <span>${teamArray.id}</span></h3>
            <hr>
            <h3>Email: <a href="mailto:${teamArray.email}">${teamArray.email}</a></h3>
            <hr>
            <h3>Office number:<span>${teamArray.office}</span></h3>
       </div>
    </div>  
   </div>`;

   teamHTML.push(managerHTML)

}

// Takes Manager selctions to create a string of Engineers and pushes them to team string
engineerCard = (teamArray) => {
    let engineerHTML =`
  <div class="card" id="engineer">
 <div class="card-top">
     <div class="name-title">
         <h2>${teamArray.name}</h2>
         <h2>Engineer</h2>
     </div>
 </div>

 <div class="card-bottom">
     <div class="card-bottom-text">
         <h3>ID: <span>${teamArray.id}</span></h3>
         <hr>
         <h3>Email: <a href="mailto:${teamArray.email}">${teamArray.email}</a></h3>
         <hr>
         <h3>GitHub: <a href="https://github.com/${teamArray.github}">${teamArray.github}</a></h3>
     </div>
 </div>
</div>`;

teamHTML.push(engineerHTML)

}

// Takes Manager selctions to create a string of Interns and pushes them to team string
internCard = (teamArray) => {
    let internHTML =`
    <div class="card" id="intern">
        <div class="card-top">
            <div class="name-title">
                <h2>${teamArray.name}</h2>
                <h2>Intern</h2>
             </div>
         </div>

 <div class="card-bottom">
     <div class="card-bottom-text">
         <h3>ID: <span>${teamArray.id}</span></h3>
         <hr>
         <h3>Email: <a href="mailto:${teamArray.email}">${teamArray.email}</a></h3>
         <hr>
         <h3>School: <span>${teamArray.school}</span></h3>
     </div>
 </div>
</div>`

teamHTML.push(internHTML)
}

// Loops through all user selections and send them to the relevent card function
    for (let i = 0; i < teamArray.length; i++) {
 
    if (teamArray[i].getRole() === "Manager"){
        managerCard(teamArray[i])
    }
    if (teamArray[i].getRole() === "Engineer"){
        engineerCard(teamArray[i])
    }
    if (teamArray[i].getRole() === "Intern"){
        internCard(teamArray[i])
    }

}

console.log(teamHTML)

    let team = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../src/style.css">
        <title>MyTeam</title>
    
        <header>
            <h1><span class="my">My</span>Team</h1>
        </header>
    </head>
    <body>
    
        <section class="card-section">
          
        ${teamHTML}
    
        </section>
    
    
    </body>
    </html>`;
    
    console.log(team)
    createTeam(team)
    
}


// exports functions
module.exports = generatePage
// module.exports = generateTeam


