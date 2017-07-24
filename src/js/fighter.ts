let container = document.getElementById('root');

export interface IFighter {
    name: string;
    power: number;
    health: number;
    hit: ( enemy: IFighter, point: number ) => void;
    setDamage: ( damage: number ) => void;
}

export default class Fighter implements IFighter {
    name: string;
    power: number;
    health: number;
    constructor ( name: string = "First", power: number = 2, health: number = 100 ) {
        this.name  = name;
        this.power = power;
        this.health = health;
    }
    public hit( enemy: IFighter, point: number) {
        let damage: number = point * this.power;
        enemy.setDamage(damage);
    }
    public setDamage(damage: number) {
        this.health -= damage;
        let div = document.createElement('div') as HTMLDivElement;
        div.setAttribute('class', 'info');
        div.innerHTML = `health of ${this.name}: ${this.health}`;
        container.appendChild(div);
    }
}
