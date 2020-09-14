const addresses = [{
    street: 'redAve',
    suite: '100',
    city: 'alien',
    zipcode: '200',
    //id: userId.id
}, {
  street: 'blueAve',
  suite: '200',
  city: 'world',
  zipcode: '400',
  //id: userId.id
}];

module.exports = class AddressRepository {
    findAddrById(id) {
      return addresses[id];
    }
}
