'use strict';

function User(firstName, lastName, age, email, isMale, isSubscribe = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
  this.isMale = isMale;
  this.isSubscribe = isSubscribe;

  this.getFullName = function () {
    return `${this.firstName} ${lastName}`;
  };
}

function createRandomUser(quantity) {
  const res = [];
  for (let i = 0; i < quantity; i++) {
    const user = new User(
      `Name${i}`,
      `LastName${i}`,
      Math.round(Math.random() * 100),
      `mail${i}@test.com`,
      Math.random() > 0.5
    );
    res.push(user);
  }
  return res;
}

const userArr = createRandomUser(50);
console.table(userArr);

//1. Получить массив полных имен с помощью .map()

const getFullNames = (users) => users.map((item) => item.getFullName());
const allUsersNames = getFullNames(userArr);
//console.log(allUsersNames);

//2. Получить массив совершеннолетних пользователей

const getAdultUsers = (users) =>
  users.filter((item) => {
    if (item.age > 18) {
      return item;
    }
  });

const allAdultUsers = getAdultUsers(userArr);
//console.log(allAdultUsers);

//3. Зарандомить подписку у пользователей

const setRandomSubscribes = (users) =>
  users.forEach((item) => (item.isSubscribe = Math.random() > 0.5));

setRandomSubscribes(userArr);
//console.table(userArr);

//4. Получить массив подписанных совершеннолетних пользователей женского пола, но вывести только их почту

const getSubscribeUsers = (users) =>
  users.filter((item) => {
    if (item.isSubscribe) {
      return item;
    }
  });

const getFamaleUsers = (users) =>
  users.filter((item) => {
    if (!item.isMale) {
      return item;
    }
  });

const allAdultFamaleUsers = getSubscribeUsers(
  getFamaleUsers(getAdultUsers(userArr))
);
allAdultFamaleUsers.forEach((item) => console.log(item.email));
