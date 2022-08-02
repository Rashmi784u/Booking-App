//console.log("person1: shows ticket");
//console.log("person2: shows ticket");

//const preMovie = async () => {
//const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//setTimeout(() => {
//resolve("ticket");
//}, 3000);
//});

//const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

//const addButter = new Promise((resolve, reject) => resolve(`butter`));

//const getColdDrinks = new Promise((resolve, reject) => resolve(`coldDrinks`));

//let ticket = await promiseWifeBringingTicks;

//console.log(`wife: i have the ${ticket}`);
//console.log("husband: we should go in");
//console.log("wife: no i am hungry");

//let popcorn = await getPopcorn;

//console.log(`husband: i got some popcorn ${popcorn}`);
//console.log("husband: we should go in");
//console.log("wife: I need butter on my popcorn");

//let butter = await getButter;

//console.log(`husband: i got some ${butter} on popcorn`);
//console.log("husband: we should go in");
//console.log("wife: I want ColdDrinks");

// let coldDrinks = await getColdDrinks;

// console.log(`husband: i got ${coldDrinks}`);
// console.log(`husband: anything else ?`);
//console.log(`wife: lets got we are getting late`);
// console.log(`husband: thank you for the reminder`);

//return ticket;
//};

//preMovie().then((m) => console.log(`person3: shows ${m}`));

//console.log("person4: shows ticket");
//console.log("person5: shows ticket");

//const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//setTimeout(() => {
//resolve("ticket");
//}, 3000);
//});

//const getPopcorn = promiseWifeBringingTicks.then((t) => {
//console.log("wife: i have the ticks");
//console.log("husband: we should go in");
//console.log("wife: no i am hungry");
//return new Promise((resolve, reject) => resolve(`${t} popcorn`));
//});

//const getButter = getPopcorn.then((t) => {
//console.log("husband: i got some popcorn");
//console.log("husband: we should go in");
//console.log("wife: I need butter on my popcorn");
//return new Promise((resolve, reject) => resolve(`${t} butter`));
//});

//const getColdDrinks = getButter.then((t) => {
//console.log("husband: i got some butter on popcorn");
//console.log("husband: we should go in");
//console.log("wife: I want ColdDrinks");
//return new Promise((resolve, reject) => resolve(`${t} coldDrinks`));
//});
//getColdDrinks.then((t) => console.log(t));
//onsole.log("person1: shows ticket");
//console.log("person2: shows ticket");

// Promise.all

console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("ticket");
    }, 3000);
  });

  let ticket;
  try {
    ticket = await promiseWifeBringingTicks;
  } catch (e) {
    ticket = "sad face";
  }

  //const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

  //const getCandy = new Promise((resolve, reject) => resolve(`candy`));

  //const getCoke = new Promise((resolve, reject) => resolve(`coke`));

  //let ticket = await promiseWifeBringingTicks;

  //let [popcorn, candy, coke] = await Promise.all([
  //getPopcorn,
  //getCandy,
  //getCoke,
  //]);

  //console.log(`${popcorn},${candy},${coke}`);
  return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
