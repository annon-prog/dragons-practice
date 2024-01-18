
//We should export the FriendlyDragon class

const Dragon = require('./dragon');

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals() {
        let lifeGoalsArr = this.lifeGoals;

        lifeGoalsArr.forEach(lifeGoal => {
            console.log(`${this.name} likes to ${lifeGoal}`)
        });
    }
    
    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`;
    }

}

module.exports = FriendlyDragon;
