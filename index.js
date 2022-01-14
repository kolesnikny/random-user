'use strict';

/*
1 получить масс полніх имен с мап
2 получить мас совершеннолетних
3 зарандомить подписку у юзеров
4 получить масссив подпис совершеннолетних юзеров женского пола и вівести их почту
*/

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
const getFullNamesList = (users) => users.map((item) => item.getFullName());

//2. Получить массив совершеннолетних пользователей
//const get

const userArr = createRandomUser(50);
//console.table(userArr);

//1.
const allUsersName = getFullNamesList(userArr);
//console.log(allUsersName);
//2.

//3.

//4.
