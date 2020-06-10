import { Payload } from './Payload'
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket implements Payload {


    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }
    massKg: number;

    sumMass(items: Payload[]): number {
        let sumMass = 0;
        for (let i = 0; i < items.length; i++) {
            sumMass += items[i].massKg;
        }
        return sumMass;
    }
    currentMassKg(): number {
        let currentMass = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return currentMass;
    }
    canAdd(item: Payload): boolean {
        let currentMassItemKg = this.currentMassKg() + item.massKg;
        if (currentMassItemKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    }
    addCargo(cargo: Cargo): boolean {
        let addCargo = this.canAdd(cargo);
        if (addCargo === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        let addAstronaut = this.canAdd(astronaut);
        if (addAstronaut === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }

    }
}