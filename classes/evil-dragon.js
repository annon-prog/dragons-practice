//Add an instance burnsNemesis()
//return ${name} destroys ${nemesis} with fire! WHOOSH!!!
//Export the class.

const Dragon = require('./dragon');

class EvilDragon extends Dragon{
    constructor(name, color, evilDoings, nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner() {
        let evilDoingsArr = this.evilDoings;

        evilDoingsArr.forEach(evilDoing => {
            console.log(`${this.name} will ${evilDoing}`);
        })
    }

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }
}

module.exports = EvilDragon;
