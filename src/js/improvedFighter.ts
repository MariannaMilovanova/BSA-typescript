import Fighter, { IFighter } from './fighter';

export interface IImprovedFighter extends IFighter {
     doubleHit: (enemy: IFighter, point: number) => void;
}

export default class ImprovedFighter extends Fighter implements IImprovedFighter {
    public doubleHit(enemy: IFighter, point: number): void {
       super.hit(enemy, point *= 2);
    }
}