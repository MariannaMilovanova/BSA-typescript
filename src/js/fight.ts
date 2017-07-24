import { IFighter } from './fighter';
import { IImprovedFighter } from './improvedFighter';

let container = document.getElementById('root') as HTMLDivElement;

export interface IFight {
    fighter: IFighter;
    improvedFighter: IImprovedFighter;
    point: number[];
    fight: () => void;
}

export default class Fight implements IFight {
    fighter: IFighter;
    improvedFighter: IImprovedFighter;
    point: number[];

    constructor (fighter: IFighter, improvedFighter: IImprovedFighter,  point: number[]) {
        this.fighter = fighter;
        this.improvedFighter = improvedFighter;
        this.point = point;
    }    
    public fight() {

        let randomIndex = (point: number[]) => Math.floor(Math.random() * point.length);

        for ( let i = 0; this.fighter.health > 0 && this.improvedFighter.health > 0; i++ ) {
            this.fighter.hit(this.improvedFighter, this.point[randomIndex(this.point)]);
            this.improvedFighter.doubleHit(this.fighter, this.point[randomIndex(this.point)]);
        }
        
        let winnerDiv = document.createElement('div') as HTMLDivElement;
        winnerDiv.setAttribute('class', 'winner');

        if (this.fighter.health <= 0) {
            winnerDiv.innerHTML = `The winner is: ${this.improvedFighter.name}!   His power is: ${this.improvedFighter.power}`;
        } else if (this.improvedFighter.health <= 0) {
            winnerDiv.innerHTML = `The winner is: ${this.fighter.name}!   His power is: ${this.fighter.power}`;
        }
        container.appendChild(winnerDiv);
    }
}
