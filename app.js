/**
 * Class representing a MemberFactory.
 * @class
 */
class MemberFactory {
/**
 * Creates a new member object based on the provided name and type.
 * 
 * @param {string} name - The name of the member.
 * @param {string} type - The type of the member (basic, standard, premium).
 * @returns {object} - The newly created member object.
 */
  createMember(name, type) {
    let member;
    if (type === 'basic') {
      member = new BasicMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'premium') {
      member = new PremiumMembership(name);
    }

    member.type = type;

    member.profile = function ()  {
      console.log(`This is the user ${this.name} with subscription type (${this.type}) at a cost of ${this.cost}`);
    }
    return member;
  }
}

/**
 * Represents a basic membership.
 * @class
 */
class BasicMembership {
  constructor(name) {
    this.name = name;
    this.cost = '₵5';
  }
}

/**
 * Represents a standard membership.
 * @class
 */
class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = '₵15';
  }
}

/**
 * Represents a premium membership.
 * @class
 */
class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = '₵25';
    }
 }

const members = [];
const factory = new MemberFactory();
const alan = factory.createMember('Alan', 'premium');
const kofi = factory.createMember('Kofi', 'standard');
const abena = factory.createMember('Abena', 'basic');
alan.profile();
members.push(alan);
members.push(kofi);
members.push(abena);
console.log(members);
members.forEach(member => {
    member.profile();
});
