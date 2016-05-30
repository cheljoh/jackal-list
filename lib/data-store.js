
const EventEmitter = require('events');

// Start out with an empty array to store ideas.
let jackals = [];

// Create a store object that can emit events.
const store = new EventEmitter();

// Check localStorage to see if we have any notes saves from last time.
const storedJackals = localStorage.getItem('jackals');
if (storedJackals) { jackals = JSON.parse(storedJackals); }

store.all = () => jackals.concat([]);

store.create = ({ name, body }) => {
  jackals = jackals.concat({ name, body, forgiven: false, active: false, id: Date.now() });
  store.emit('change', jackals);
};

store.destroy = (id) => {
  jackals = jackals.filter(jackal => jackal.id !== id);
  store.emit('change', jackals);
};

store.update = (id, data) => {
  jackals = jackals.map(jackal => {
    if (jackal.id !== id) { return jackal; }
    return Object.assign(jackal, data);
  });
  store.emit('change', jackals);
};

store.select = (id) => {
  jackals = jackals.map(jackal => Object.assign(jackal, { active: jackal.id === id }));
  store.emit('change', jackals);
};

store.deselect = () => {
  jackals = jackals.map(jackal => Object.assign(jackal, { active: false }));
  store.emit('change', jackals);
};

store.on('change', () => {
  localStorage.setItem('jackals', JSON.stringify(jackals));
});

module.exports = store;
