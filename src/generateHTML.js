const teamHTML = []
const generateHTML = teamHTML.join('')



generatePage = (teamArray) => {
console.log(teamArray)

for (let i = 0; i < teamArray.length; i++) {
    if (teamArray.getRole === "Manager"){
        managerCard(teamArray[i])

    }
    if (teamArray.getRole === "Engineer"){
        engineerCard(teamArray[i])
    }
    if (teamArray.getRole === "Intern"){
        internCard(teamArray[i])
    }

}

managerCard = () => {

    let managerHTML =`
    <div class="card" id="manager">
    <div class="card-top">
        <div class="name-title">
            <h2>${managers.name}</h2>
            <h2>Manager</h2>
        </div>
    </div>
   
    <div class="card-bottom">
        <div class="card-bottom-text">
            <h3>ID: <span>${managers.id}</span></h3>
            <hr>
            <h3>Email: <a href="mailto:${managers.email}">${managers.email}</a></h3>
            <hr>
            <h3>Office number:<span>${managers.office}</span></h3>
       </div>
    </div>  
   </div>`;
   
   teamHTML.push(managerHTML)
   console.log(managerHTML)

}


engineerCard = () => {
    let engineerHTML =`
  <div class="card" id="engineer">
 <div class="card-top">
     <div class="name-title">
         <h2>${engineers.name}</h2>
         <h2>Engineer</h2>
     </div>
 </div>

 <div class="card-bottom">
     <div class="card-bottom-text">
         <h3>ID: <span>${engineers.id}</span></h3>
         <hr>
         <h3>Email: <a href="mailto:${engineers.email}">${engineers.email}</a></h3>
         <hr>
         <h3>GitHub: <a href="https://github.com/${engineers.github}">${engineers.github}</a></h3>
     </div>
 </div>
</div>`;

teamHTML.push(engineerHTML)

}


internCard = () => {
    let internHTML =`
    <div class="card" id="intern">
        <div class="card-top">
            <div class="name-title">
                <h2>${interns.name}</h2>
                <h2>Intern</h2>
             </div>
         </div>

 <div class="card-bottom">
     <div class="card-bottom-text">
         <h3>ID: <span>${interns.id}</span></h3>
         <hr>
         <h3>Email: <a href="mailto:${interns.email}">${interns.email}</a></h3>
         <hr>
         <h3>School: <span>${interns.school}</span></h3>
     </div>
 </div>
</div>`

teamHTML.push(internHTML)

}

}

generateTeam = () => {

    return `<!DOCTYPE html>
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
      
    ${generateHTML}

    </section>


</body>
</html>`
}


module.exports = {generateTeam, generateHTML, generatePage}






