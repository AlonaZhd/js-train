//Завдання 1

// Оригінальна функція, яка повертає Promise.
function fetchFakeData() {
    const fakeData = {
        name: "John",
        age: 30,
    };
    return Promise.resolve(fakeData);
}

// Створюємо асинхронну функцію getData, яка використовує await для обробки Promise.
// Використовуємо try для обробки помилок
// Використовуємо await для очікування виконання Promise.
// Дані виводимо в консоль після отримання їх з Promise.
// Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.

async function getData() {
    try {
        const result = await fetchFakeData();
        console.log("Name:", result.name);
        console.log("Age:", result.age);
    } catch (error) {
        console.error("Помилка:", error);
    }
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 1 ==============================");
// // Викликаємо нашу асинхронну функцію.
getData();
// Name: John
// Age: 30

//
//Завдання 2
// Функція getRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
function getRandomNumberAfterSeconds(seconds) {
    // Повертаємо новий Promise
    return new Promise((resolve) => {
        // Використовуємо setTimeout для симуляції асинхронної операції.
        // Після "seconds" секунд, Promise буде виконано з результатом виконання функціх Math.random
        setTimeout(() => {
            resolve(Math.random());
        }, seconds * 1000);
    });
}

// Асинхронна функція logRandomNumberAfterSeconds, яка приймає один параметр - число секунд
// Використовуємо try для обробки помилок
// Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
// В функцію потрібно передати в seconds в якості аргументу
// Результат виконання функції присвоюється константі randomNumber.
// Виводимо отримане випадкове число в консоль
// Якщо сталася помилка під час виконання Promise, виводимо її в консоль.

async function logRandomNumberAfterSeconds(seconds) {
    try {
        const randomNumber = await getRandomNumberAfterSeconds(seconds);

        console.log("Random number:", randomNumber);
    } catch (error) {
        console.error("Помилка:", error);
    }
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 2 ==============================");
logRandomNumberAfterSeconds();
// Random number: 0.9195608274649383

//
//Завдання 3
// Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
// Використовуємо try для обробки помилок
// Використовуємо fetch для відправки GET-запиту на вказаний URL

// Перевіряємо через властивість ok, чи є відповідь вдалою якщо ні виводимо помилку в консоль

// Конвертуємо відповідь у формат JSON

// Виводимо дані в консоль
// Виводимо помилки в консоль якщо вони є

async function getDataFromUrl(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                "Помилка отримання даних. Код помилки: " + response.status
            );
        }

        const data = await response.json();

        console.log("Дані отримані з URL:", url);
        console.log(data);
    } catch (error) {
        console.error("Помилка:", error);
    }
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 3 ==============================");
getDataFromUrl("https://swapi.dev/api/people/1");
// Дані отримані з URL: https://swapi.dev/api/people/1
// {
//   name: 'Luke Skywalker',
//   height: '172',
//   mass: '77',
//   hair_color: 'blond',
//   skin_color: 'fair',
//   eye_color: 'blue',
//   birth_year: '19BBY',
//   gender: 'male',
//   homeworld: 'https://swapi.dev/api/planets/1/',
//   films: [
//     'https://swapi.dev/api/films/1/',
//     'https://swapi.dev/api/films/2/',
//     'https://swapi.dev/api/films/3/',
//     'https://swapi.dev/api/films/6/'
//   ],
//   species: [],
//   vehicles: [
//     'https://swapi.dev/api/vehicles/14/',
//     'https://swapi.dev/api/vehicles/30/'
//   ],
//   starships: [
//     'https://swapi.dev/api/starships/12/',
//     'https://swapi.dev/api/starships/22/'
//   ],
//   created: '2014-12-09T13:50:51.644000Z',
//   edited: '2014-12-20T21:17:56.891000Z',
//   url: 'https://swapi.dev/api/people/1/'
// }

//
//Завдання 4
// Асинхронна функція, яка приймає три параметри - URL, дані для відправки та токен авторизації, маємо аргумент url, data, authToken
// Використовуємо try для обробки помилок
// Використовуємо fetch для відправки POST-запиту на вказаний URL
// Вказуємо метод запиту POST в конфігурацію параметрів запиту
// Вказуємо заголовок (header) "Content-Type" зі значенням "application/json"

// Вказуємо заголовок Authorization в який передаємо authToken
// Передаємо дані data в body, які перед цим перетворились в JSON

// Перевіряємо через властивість ok, чи є відповідь вдалою

// Конвертуємо відповідь у формат JSON

// Виводимо відповідь в консоль
// Виводимо помилки в консоль якщо вони є
async function postDataWithAuth(url, data, authToken) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: authToken,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(
                "Помилка відправки даних. Код помилки: " + response.status
            );
        }

        const responseData = await response.json();

        console.log("Отримана відповідь:");
        console.log(responseData);
    } catch (error) {
        console.error("Помилка:", error);
    }
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 4 ==============================");
postDataWithAuth(
    "https://petstore.swagger.io/v2/store/order",
    {
        id: 0,
        petId: 0,
        quantity: 0,
        shipDate: "2023-07-23T19:28:06.229Z",
        status: "placed",
        complete: true,
    },
    "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
);

// Отримана відповідь:
// {
//   id: 9223372036854776000,
//   petId: 0,
//   quantity: 0,
//   shipDate: '2023-07-23T19:28:06.229+0000',
//   status: 'placed',
//   complete: true
// }

//
//Завдання 5
// Створюємо асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
// "async function*" означає, що це асинхронний генератор.
// Змінна "i" ініціалізована значенням 0 і буде збільшуватися на 1 при кожній ітерації.
// Цикл "while (true)" - це безкінечний цикл, який продовжуватиме виконуватися, поки його не зупинять зовні.
// Чекаємо поки виконається проміс якому встановимо затримку 1 секунду за допомогою setTimeout
// Віддаємо значення лічильника та збільшуємо його на один

// Використовуємо асинхронний генератор та записуємо його значення в константу gen

// Створюємо асинхрону функцію printFiveItems
// Ключові слова "for await" використовуються для ітерації по асинхронним ітерабельним об'єктам.
// Перебираємо значення gen
// Виводимо в консоль поточне значення
// Умова "if (value === 4) break" зупиняє цикл після виведення п'яти чисел (від 0 до 4).
// Асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
async function* asyncGenerator() {
    let i = 0;
    while (true) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        yield i++;
    }
}

async function printFiveItems() {
    const gen = asyncGenerator();

    for await (const value of gen) {
        console.log("Поточне значення:", value);

        if (value === 4) break;
    }
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 5 ==============================");
printFiveItems();
// Поточне значення: 0
// Поточне значення: 1
// Поточне значення: 2
// Поточне значення: 3
// Поточне значення: 4

//
//Завдання 6

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Дані з бази даних");
        }, 1000);
    });
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Дані з API");
        }, 800);
    });
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Дані з кешу");
        }, 600);
    });
}

// Оголошуємо асинхронну функцію-генератор з ім'ям gatherData
async function* gatherData() {
    try {
        // Викликаємо асинхронну функцію getDataFromDB() і чекаємо, поки вона завершиться
        // Результат роботи функції зберігаємо у змінну dbData
        // yield використовується для того, щоб повернути значення dbData
        const dbData = await getDataFromDB();
        yield dbData;

        // Те саме робимо для асинхронної функції getDataFromAPI(), результат зберігаємо в apiData
        const apiData = await getDataFromAPI();
        yield apiData;

        // І знову для асинхронної функції getDataFromCache(), результат зберігаємо в cacheData
        const cacheData = await getDataFromCache();
        yield cacheData;
    } catch (error) {
        // Виводимо помилки в консоль, якщо вони є
        console.error("Помилка:", error);
    }
}

// Створюємо асинхрону функцію displayData
async function displayData() {
    // Створюємо екземпляр генератора gatherData
    const dataGenerator = gatherData();

    // Три рази виводимо поточне значення генератора в консоль
    // for (let i = 0; i < 3; i++) {
    //     const data = await dataGenerator.next();
    //     console.log("Отримані дані:", data.value);
    // }
    for await (const data of dataGenerator) {
        console.log(data);
    }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 6 ==============================");
displayData();
// Дані з бази даних
// Дані з API
// Дані з кешу

//
//Завдання 7
// Створюємо генератор countdownGenerator
function* countdownGenerator(start) {
    // Ініціюємо лічильник змінну count зі стартовим значенням параметра start
    let count = start;

    // Цикл, що триває доки лічильник більший або рівний 0
    while (count >= 0) {
        // Використовуємо ключове слово yield, щоб повернути поточне значення лічильника
        yield count;

        // Зменшуємо лічильник на 1
        count--;
    }
}

// console.log("Завдання: 7 ==============================");
// Створюємо екземпляр генератора countdown з лічильником 5
const countdown = countdownGenerator(5);

// Запускаємо генератор та отримуємо перше значення, яке записуємо в змінну nextValue
let nextValue = countdown.next();

// Цикл while, що виводить значення з генератора та працює, поки генератор не буде вичерпаним (done == true).
// Якщо властивість done == false, генератор ще має значення для повернення.
while (!nextValue.done) {
    // Виводимо поточне значення
    console.log("Поточне значення:", nextValue.value);

    // Отримуємо наступне значення з генератора
    nextValue = countdown.next();
}

// Поточне значення: 5
// Поточне значення: 4
// Поточне значення: 3
// Поточне значення: 2
// Поточне значення: 1
// Поточне значення: 0
