function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
function addPersonAsFriend(person, friending) {
    person.friends.push(friending);
    return person;
}

module.exports = {
    createPerson,
    addPersonAsFriend,
};