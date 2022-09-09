const managerCard = 
 `<div class="card" id="manager">
 <div class="card-top">
     <div class="name-title">
         <h2>${response.name}</h2>
         <h2>${response.jobTitle}</h2>
     </div>
 </div>

 <div class="card-bottom">
     <div class="card-bottom-text">
         <h3>ID: <span>${response.id}</span></h3>
         <hr>
         <h3>Email: <span>${response.email}</span></h3>
         <hr>
         <h3>Office number:<span>${responseManager.office}</span></h3>
    </div>
 </div>  
</div>`

const engineerCard =
`<div class="card" id="engineer">
 <div class="card-top">
     <div class="name-title">
         <h2>${response.name}</h2>
         <h2>${response.jobTitle}</h2>
     </div>
 </div>

 <div class="card-bottom">
     <div class="card-bottom-text">
         <h3>ID: <span>${response.id}</span></h3>
         <hr>
         <h3>Email: <span>${response.email}</span></h3>
         <hr>
         <h3>GitHub: <span>${responseEngineer.github}</span></h3>
     </div>
 </div>
</div>`

const internCard =
`<div class="card" id="intern">
 <div class="card-top">
     <div class="name-title">
         <h2>${response.name}</h2>
         <h2>${response.jobTitle}</h2>
     </div>
 </div>

 <div class="card-bottom">
     <div class="card-bottom-text">
         <h3>ID: <span>${response.id}</span></h3>
         <hr>
         <h3>Email:<span>${response.email}</span></h3>
         <hr>
         <h3>School: <span>${responseIntern.school}</span></h3>
     </div>
 </div>
</div>`



const generateHTML =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>MyTeam</title>

    <header>
        <h1><span class="my">My</span>Team</h1>
    </header>
</head>
<body>

    <section class="card-section">
        
    </section>

    <script src="../index.js"></script>
</body>
</html>`

module.exports = generateHTML