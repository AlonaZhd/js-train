// Спостерігач (Observer) — це патерн програмування, який визначає залежність "один-багато" між об'єктами, так що зміна стану одного об'єкта
// призводить до автоматичного оновлення всіх залежних об'єктів
/**
 * Клас Customer представляє клієнта, що має можливість отримувати повідомлення по електронній пошті.
 * Клієнт ідентифікується своєю електронною адресою, яку використовується для відправки повідомлень.
 */
class Customer {
    /**
     * Конструктор для класу Customer. Приймає email - Електронна адреса клієнта.
     */
    constructor(email) {
        this.email = email;
    }

    /**
     * Метод відправки повідомлення клієнту по електронній пошті.Приймає message - повідомлення,та виводить в консоль ${this.email} ${message}.
     */
    sendEmail(message) {
        console.log(
            `відправка на e-mail ${this.email} повідомлення: ${message}`
        );
    }
}

/**
 * Клас Product представляє продукт, який можна створювати.
 */
class Product {
    /**
     * Конструктор для класу Product.Приймає name - Назва продукту.
     */
    constructor(name) {
        this.name = name;
    }
}

/**
 * Клас Store представляє магазин, який може мати підписників і створювати нові продукти.
 * Магазин має назву і список підписників, які отримують повідомлення про нові продукти.
 */
class Store {
    /**
     * Конструктор для класу Store.Приймає name - Назва магазину, та створює пустий масив customers
     */
    constructor(name) {
        this.name = name;
        this.customers = [];
    }

    /**
     * Метод subscribe для підписки клієнта на магазин. Приймає customers - Клієнт, який підписується.
     * Після виклику цього методу, клієнт буде отримувати повідомлення про нові продукти, через push додаємо клієнта до масиву.
     */
    subscribe(user) {
        this.customers.push(user);
    }

    /**
     * Метод unsubscribe для відписки клієнта від магазину.Приймає customer - Клієнт, який відписується.
     * Після виклику цього методу, клієнт більше не буде отримувати повідомлення про нові продукти, через filter прибираємо клієнта з масиву.
     */
    unsubscribe(user) {
        this.customers = this.customers.filter((sub) => sub !== user);
    }

    /**
     * Метод createProduct для створення нового продукту в магазині.Приймає name - Назва нового продукту.
     * Після виклику цього методу, новий продукт буде створено, а всі підписники отримають про це повідомлення через sendNotify.
     */
    createProduct(name) {
        const product = new Product(name);
        this.sendNotify(product);
    }

    /**
     * Метод для відправки повідомлень всім підписникам про новий продукт.Приймає product - Продукт, про який відправляється повідомлення.
     * Новий продукт "${product.name}" в магазині ${this.name}! за допомогою sendEmail.
     */
    // За допомогою forEach перебираємо масив customers
    // Для кожного елементу масиву викликаємо метод sendEmail з рядком `Новий продукт "${product.name}" в магазині ${this.name}!`
    sendNotify(product) {
        this.customers.forEach((customer) => {
            customer.sendEmail(
                `Новий продукт "${product.name}" в магазині ${this.name}!`
            );
        });
    }
}

console.log("Завдання 3 ====================================");
// Після виконання розкоментуйте код нижче

const store = new Store("IT Supermarket");

const customer1 = new Customer("john@example.com");
const customer2 = new Customer("jane@example.com");
const customer3 = new Customer("alice@example.com");

store.subscribe(customer1);
store.subscribe(customer2);
store.subscribe(customer3);

store.createProduct("Новий ноутбук");

store.unsubscribe(customer1);

store.createProduct("Бездротові навушники");

// відправка на e-mail john@example.com повідомлення: Новий продукт "Новий ноутбук" в магазині IT Supermarket!
// відправка на e-mail jane@example.com повідомлення: Новий продукт "Новий ноутбук" в магазині IT Supermarket!
// відправка на e-mail alice@example.com повідомлення: Новий продукт "Новий ноутбук" в магазині IT Supermarket!

// відправка на e-mail jane@example.com повідомлення: Новий продукт "Бездротові навушники" в магазині IT Supermarket!
// відправка на e-mail alice@example.com повідомлення: Новий продукт "Бездротові навушники" в магазині IT Supermarket!
