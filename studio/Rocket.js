"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }
    Rocket.prototype.sumMass = function (items) {
        var sumMass = 0;
        for (var i = 0; i < items.length; i++) {
            sumMass += items[i].massKg;
        }
        return sumMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var currentMass = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return currentMass;
    };
    Rocket.prototype.canAdd = function (item) {
        var currentMassItemKg = this.currentMassKg() + item.massKg;
        if (currentMassItemKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        var addCargo = this.canAdd(cargo);
        if (addCargo === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var addAstronaut = this.canAdd(astronaut);
        if (addAstronaut === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
