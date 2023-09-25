//1
/*
function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom || 0;

    return function() {
    currentCount += incrementBy || 1;

    console.log(currentCount)
    return currentCount;

    };

    }
    let counter1 = makeCounter(5, 2);
    let counter2 = makeCounter(78, 10);

    counter1(); 
    counter1();

        counter2();
        counter2();
        counter2();
        counter2();
        */
//2
/*
function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//2a - #4 - #3 - #2 - #1 because of the settimeout function they would display in this order.
//2b - 2d
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

const to1 = setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
const to2 = setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
const to3 = setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');
const to5 = setTimeout(delayMsg, 10000, '#5: Delayed by 10s');
clearTimeout(to5);
*/
//3
/*
function printMe() {
    console.log('printing debounced message')
    }
    printMe = debounce(printMe, 2000); //create this debounce function for a)
    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
    setTimeout( printMe, 100);
    setTimeout( printMe, 200);
    setTimeout( printMe, 300);

    function debounce(func, ms) {
        let timeout;
        return function(msg) {
          const context = this;
          const args = arguments;
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), ms);
          console.log(`printing debounced message: ${msg}`);
        };
      }
      */
     //4 
/*
     function printFibonacci() {
        let a = 0;
        let b = 1;
        let count = 0;
      
        const intervalId = setInterval(() => {
          const temp = a;
          a = b;
          b = temp + b;
          console.log(b);
          count++;
      
          if (count === 10) {
            clearInterval(intervalId);
          }
        }, 1000);
      }
        //console.log(printFibonacci());
        
        function printFibonacciTimeouts(limit) {
            let a = 0;
            let b = 1;
            let count = 0;
          
            const printNextFibonacci = () => {
              const temp = a;
              a = b;
              b = temp + b;
              console.log(b);
              count++;
          
              if (count < limit) {
                setTimeout(printNextFibonacci, 1000);
              }
            };
          
            setTimeout(printNextFibonacci, 1000);
          }
console.log(printFibonacciTimeouts(5))          
     */
 //5
/*
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
setTimeout(car.description.bind(car), 1000);

let carClone = Object.assign({}, car);
carClone.year = 1970;
carClone.make = "Ferrari";
console.log(`Original car ${car.description()}`);
console.log(`Cloned car ${carClone.description()}`);

//it will use the original values and not the new values from the clone.

const carClone1 = Object.assign({}, car);
carClone1.make = 'Honda';
setTimeout(carClone1.description.bind(carClone1), 2000);
*/
//6

/*function multiply(a, b) {
    console.log( a * b );
    }
    multiply.delay(500)(5, 5);*/
//6a 
/*
    Function.prototype.delay = function(ms) {
        const self = this;
        return function(...args) {
            setTimeout(() => self.apply(this, args), ms);
        };
    };
    function multiply(a, b) {
        console.log(a * b);
    }
    
    multiply.delay(500)(5, 5);
    */
   //6b
   /*
   Function.prototype.delay = function(ms) {
    const self = this;
    return function() {
        const args = arguments;
        setTimeout(() => self.apply(this, args), ms);
    };
};
function multiply(a, b) {
    console.log(a * b);
}

multiply.delay(500).apply(this, [5, 5]);
*/
//6c
/*
Function.prototype.delay = function(ms) {
    const self = this;
    return function() {
        const args = arguments;
        setTimeout(() => self.apply(this, args), ms);
    };
};

function multiply(a, b, c, d) {
    console.log(a * b * c * d);
}

multiply.delay(500).apply(this, [2, 3, 4, 5]);
*/
//7
/*
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.toString = function() {
      return this.name + " is a " + this.age + " year old " + this.gender;
    }
  }
  
  function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
    this.toString = function() {
      return this.name + " is a " + this.age + " year old " + this.gender + " and belongs to cohort " + this.cohort;
    }
  }
  
  const student1 = new Student('John Doe', 20, 'male', '2023');
  const student2 = new Student('Jane Doe', 22, 'female', '2022');
  
  console.log(student1.toString());
  console.log(student2.toString());
  */
 //8
/*
 class DigitalClock {
    constructor(prefix) {
    this.prefix = prefix;
    }
    display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
    date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
    clearInterval(this.timer);
    }
    start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
    }
    }
    class PrecisionClock extends DigitalClock {
        constructor(prefix, precision = 1000) {
          super(prefix);
          this.precision = precision;
        }
      
        start() {
          this.display();
          this.timer = setInterval(() => this.display(), this.precision);
        }
      }
      const myClock = new DigitalClock('my clock:')
    myClock.start()
    
    class AlarmClock extends DigitalClock {
        constructor(prefix, wakeupTime = '07:00') {
          super(prefix);
          this.wakeupTime = wakeupTime;
        }
      
        start() {
          this.display();
          this.timer = setInterval(() => {
            let date = new Date();
            let [hours, mins] = [date.getHours(), date.getMinutes()];
            if (hours < 10) hours = '0' + hours;
            if (mins < 10) mins = '0' + mins;
            const currentTime = `${hours}:${mins}`;
            if (currentTime === this.wakeupTime) {
              console.log('Wake Up');
              this.stop();
            } else {
              this.display();
            }
          }, 1000);
        }
      }
      */
      //9a
/*
      function randomDelay() {
        const delay = Math.floor(Math.random() * 20) + 1;
        return new Promise((resolve) => {
          setTimeout(resolve, delay * 1000);
        });
      }
      
      randomDelay().then(() => console.log('There appears to have been a delay.'));
      */
     //9b
/*
     function randomDelay() {
        const delay = Math.floor(Math.random() * 20) + 1;
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (delay % 2 === 0) {
              resolve('Successful delay');
            } else {
              reject('Failed delay');
            }
          }, delay * 1000);
        });
      }
      */
 /*     randomDelay()
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
   */
  //9c
  /*
  randomDelay()
  .then((result) => console.log(result))
  .catch((error) => console.error('Custom error message:', error));
*/
//9d
/*
function randomDelay() {
    const delay = Math.floor(Math.random() * 20) + 1;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (delay % 2 === 0) {
          resolve(`Successful delay of ${delay} seconds`);
        } else {
          reject(`Failed delay of ${delay} seconds`);
        }
      }, delay * 1000);
    });
  }
  
  randomDelay()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  */
 //10a
/*
import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {
return response.json();
} else {
throw new Error(`Request failed with status ${response.status}`);
}});
return fetchPromise;
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));
*/
/*
import fetch from 'node-fetch';
globalThis.fetch = fetch
async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1');
*/
//10c
/*
import fetch from 'node-fetch';

async function fetchURLData(urls) {
  try {
    const promises = urls.map(url => fetch(url));
    const responses = await Promise.all(promises);
    const data = await Promise.all(responses.map(response => response.json()));
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  
];

fetchURLData(urls);
*/
