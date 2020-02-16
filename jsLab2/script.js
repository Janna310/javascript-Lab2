const userGame = prompt(`Do you want to play? ['Yes'] or ['No']`)

let userPoints = 40;
let grantPoints = 10;
let win = 0;

if (userGame.toLowerCase() ===  'yes') {
    const user = prompt('please enter name');
      while ( userPoints > 0 && win <= 2 && grantPoints <= 10 ){
        userPoints = userPoints - (Math.floor(Math.random() * 2) +1); 
        console.log(`${user} has ${userPoints} points`);
        grantPoints = grantPoints - (Math.floor(Math.random() * 2) +1);
        console.log(`Grant has ${grantPoints} points`);

        if (grantPoints <= 0 && userPoints >= 0){
            win++
          if (win < 3){
            grantPoints = 10;
            console.log(`grant gets +10 points`)
          }
        } 

        if (win === 3){
            console.log(`${user} is the winner`)
        } else if (userPoints <= 0){
            console.log ('Grant is the winner')
        }
    }

} else if (userGame.toLowerCase() === 'no'){
    console.log(`Please start again`);
}