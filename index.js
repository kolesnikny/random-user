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

//1. Получить массив полных имен с помощью .map()
const getFullNamesArr = (users) => users.map((item) => item.getFullName());

//2. Получить массив совершеннолетних пользователей
const getAdultUsersArr = (users) =>
  users.filter((item) => {
    if (item.age > 18) {
      return this;
    }
  });
//3. Зарандомить подписку у пользователей

//4. Получить массив подписанных совершеннолетних пользователей женского пола, но вывести только их почту

const userArr = createRandomUser(50);
//console.table(userArr);

//1.
const allUsersNames = getFullNamesArr(userArr);
//console.log(allUsersNames);
//2.
const allAdultUsers = getAdultUsersArr(userArr);
//console.log(allAdultUsers);
//3.

//4.
