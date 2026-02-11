let totalBal = 1000;

let option = +prompt(`    select option
1 - check balance
2 - withdraw money \n`)
switch(option){
    case 1:
        console.log(totalBal);
        break;
    case 2:
        let cnt = 0
        while(cnt < 3){
            let amount = prompt("enter amout to withdraw : ").trim();
            if(amount === ''){
                console.error("error");
                break;
            }
            amount = Number(amount);
            if(isNaN(amount) || amount < 0) {
                console.error("error")
                break
                
            };
            if(amount > totalBal) {
                console.error("not sufficient balance");
                break;
            }
            lastTransaction = amount;
            totalBal -= amount;
            let choice = prompt("wants to withdraw more? \nyes for continue \nno for continue \n").trim();
            if(choice === 'yes') cnt++;
            else if(choice === 'no') break;
            else{
                console.error("error");
                break;
            }
            
        }
        console.log(`left bal : ${totalBal}`)
        break;
    default:
        console.log("thanks for choosing our service")
        break;
}
