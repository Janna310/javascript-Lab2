
//re-write//
const startGame = prompt(`Do you want to play? ['Yes'] or ['No']`);

// getDamage function
const getDamage = function(health) {
  return health - Math.floor(Math.random() * 5) + 1;
};

//global functions
let userHealth = 40;
let grantHealth = 10;
let win = 0;

// run the game

function startCombat() {
  if (startGame.toLowerCase() === "yes") {
    const user = prompt("Please enter your name ");
    while (userHealth > 0 && win <= 2 && grantHealth <= 10) {
      userHealth = getDamage(userHealth);
      console.log(`${user} has ${userHealth} health left`);
      grantHealth = getDamage(grantHealth);
      console.log(`Grant the mighty chicken has ${grantHealth} health left`);

      const keepGoing = prompt(
        `Would you like to keep playing? 'yes' or 'no' `
      );
      if (keepGoing === "yes") {
        if (grantHealth <= 0 && userHealth >= 0) {
          win++;
          if (win < 3) {
            grantHealth = 10;
            console.log(`grant gets an extra +10 Health`);
          }
        }

        if (win === 3) {
          console.log(`${user} is the winner`);
        } else if (userHealth <= 0) {
          console.log("Grant is the winner");
        }
      } else {
        console.log(`User has Quit`);
        break;
      }
    }
  } else if (startGame.toLowerCase() === "no") {
    prompt("Thats no fun!");
  } else {
    prompt("Invalid. Please enter yes or no.");
  }
  console.log("Exit game.");
}
startCombat();
