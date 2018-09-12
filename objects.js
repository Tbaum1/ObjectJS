const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`
    }
}

// Aurora is harmed by an arrow
aurora.health -= 20;
// Aurora equips a strength necklace
aurora.strength += 10;
// Aurora learn a new skill
aurora.xp += 15;
console.log(aurora.describe());

const dog = {
    name: "Bandit",
    species: "Husky",
    size: "large",
    bark(){
        return "Grrr! Grrr!"
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

const account = {
    name: "Alex",
    balance: 0,
    credit: "negative",
    describe(){
        return `owener: ${this.name}, balance ${this.balance} with a ${this.credit} credit score`
    }
}

console.log(`owener: ${account.name}, balance ${account.balance} with a ${account.credit} credit score`);
account.credit = "positive"
account.balance += 170;
console.log(account.describe());