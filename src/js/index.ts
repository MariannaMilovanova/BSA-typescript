import Fighter, { IFighter } from './fighter';
import ImprovedFighter, { IImprovedFighter } from './improvedFighter';
import Fight, { IFight }from './fight';

let container = document.getElementById('root') as HTMLDivElement;
let btn = document.getElementById("btn") as HTMLButtonElement;

btn.addEventListener("click", function(){
    container.innerHTML ='';
    
    let oneFighter: IFighter  = new Fighter("Venom", 3, 380);
    let bestFighter: IImprovedFighter = new ImprovedFighter("Spider", 2, 280);
    let newRound: IFight = new Fight(oneFighter, bestFighter, [2, 4, 5, 6]);
    newRound.fight();

})