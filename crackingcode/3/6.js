var LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this._list = new LinkedList();
  }

  enqueue(value) {
    this._list.append(value);
  }

  dequeue() {
    let node = this._list.popFirst();
    return node.value;
  }

  peek() {
    return this._list.head ? this._list.head.value : null;
  }

  isEmpty() {
    return this._list.head == null;
  }

  _toArray() {
    return this._list._toArray();
  }
}

// alias
Queue.prototype.add = Queue.prototype.enqueue;
Queue.prototype.remove = Queue.prototype.dequeue;

Queue.prototype.enqueue = Queue.prototype.add;

var AnimalShelter = function () {
  this.dogQ = new Queue();
  this.catQ = new Queue();
  this.allQ = new Queue();
  this.tempQ = new Queue();
};

AnimalShelter.prototype.enqueue = function (animal) {
  if (animal.type === 'dog') {
    this.dogQ.enqueue(animal);
  } else if (animal.type === 'cat') {
    this.catQ.enqueue(animal);
  }
  this.allQ.enqueue(animal);
};

AnimalShelter.prototype.dequeueAny = function () {
  if (this.allQ.peek() === this.dogQ.peek()) {
    this.dogQ.remove();
  } else if (this.allQ.peek() === this.catQ.peek()) {
    this.catQ.remove();
  }
  return this.allQ.remove();
};

AnimalShelter.prototype.dequeueByType = function (type) {
  var yesQ;
  if (type === 'dog') {
    yesQ = this.dogQ;
  } else if (type === 'cat') {
    yesQ = this.catQ;
  }
  while (!this.allQ.isEmpty() && this.allQ.peek().type !== type) {
    this.tempQ.enqueue(this.allQ.remove());
  }
  var animal = this.allQ.remove();
  yesQ.remove();

  while (!this.allQ.isEmpty()) {
    this.tempQ.enqueue(this.allQ.remove());
  }

  while (!this.tempQ.isEmpty()) {
    this.allQ.enqueue(this.tempQ.remove());
  }
  return animal;
};

AnimalShelter.prototype.dequeueDog = function () {
  return this.dequeueByType('dog');
};

AnimalShelter.prototype.dequeueCat = function () {
  return this.dequeueByType('cat');
};

/* TESTS */

var a = new AnimalShelter();
a.enqueue({ type: 'dog', name: 'machi' });
a.enqueue({ type: 'dog', name: 'daisy' });
a.enqueue({ type: 'cat', name: 'peanuts' });
a.enqueue({ type: 'dog', name: 'miso' });
a.enqueue({ type: 'cat', name: 'dada' });
a.enqueue({ type: 'cat', name: 'xiaoxiao' });

console.log(a.dequeueAny(), 'dog machi');

console.log(a.dequeueCat(), 'cat peanuts');

console.log(a.dequeueAny(), 'dog daisy');

console.log(a.dequeueAny(), 'dog miso');

// -------------------------------------------------

export class AnimalShelter {
  constructor() {
    this._cats = [];
    this._dogs = [];
    this._id = 0;
  }

  enqueueCat(cat) {
    this._cats.push({ name: cat, id: this._id++ });
  }

  enqueueDog(dog) {
    this._dogs.push({ name: dog, id: this._id++ });
  }

  dequeueCat() {
    return this._cats.shift().name;
  }

  dequeueDog() {
    return this._dogs.shift().name;
  }

  dequeueAny() {
    const catsLength = this._cats.length,
      dogsLength = this._dogs.length;

    if (catsLength && dogsLength) {
      return this._peek(this._cats).id < this._peek(this._dogs).id
        ? this.dequeueCat()
        : this.dequeueDog();
    } else {
      if (catsLength) return this.dequeueCat();
      if (dogsLength) return this.dequeueDog();
    }
  }

  _peek(queue) {
    return queue[0];
  }
}
