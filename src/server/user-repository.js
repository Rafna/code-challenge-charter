const addr = require('./address-repository');

const users = [{
    id: 0,
    name: 'bruce wayne',
    username: 'bruce',
    email: 'bruce@waynecorp.com',
    phone: '123456789',
    website: 'Wayne',
    address: [addr]
}, {
    id: 1,
    name: 'clark kent',
    username: 'clark',
    email: 'clark.kent@dailyplanet.com',
    phone: '987654321',
    website: 'Kent',
    address: [addr]
}];

module.exports = class UserRepository {
    findAll() {
        return users;
    }

    findUserById(id) {
      return users[id];
    }
}
