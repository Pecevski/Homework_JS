

// First Constructor Function

function Restaurant(name, tables, reserved) {
    this.name = name;
    this.table = tables;
    this.reservation = reserved;

    this.checkAvailability = function () {
        return this.table - this.reserved;
    }
}

// Second Constructor Function

function Petshop(name, total, sold ) {
    this.name = name;
    this.animals = total;
    this.sales = sold;

    this.availablePets = function (){
        return this.animals - this.sales;
    }
}

// Third Constructor Function

function Water (type, quantity, sold) {
    this.name = type;
    this.quantity = quantity;
    this.sales = sold;

    this.checkQuantity = function() {
        return this.quantity - this.sales;
    }
}

// Fourth Constructor Function

function Carshop (model, number, sales ) {
    this.name = model;
    this.quantity = number;
    this.sales = sales;

    this.carsAvailable = function() {
        return this.quantity - this.sales;
    }
}

// Fifth Constructor Function

function Shoeshop (name, quantity, sales) {
    this.name = name;
    this.quantity = quantity;
    this.sold = sales;

    this.availableShoes = function() {
        return this.quantity - this.sold;
    }
}

// Sixth Constructor Function

function Car (model, fuel, consumption) {
    this.name = model;
    this.tank = fuel;
    this.consumption = consumption;

    this.fuelConsumption = function() {
        return this.tank - this.consumption;
    }
}

// Seventh Constructor Function

function Library (name, books, rented) {
    this.name = name;
    this.books = books;
    this.rent = rented;

    this.booksAvailable = function (){
        return this.books - this.rent;
    }
}

// Eigth Constructor Function

function Cinema (name, chairs, reserved) {
    this.name = name;
    this.seats = chairs;
    this.reservation = reserved;

    this.unoccupiedSeats = function () {
        return this.seats - this.reservation;
    }
}

// Nineth Constructor Function

function Students (name, surname, number) {
    this.firstName = name;
    this.lastName = surname;
    this.order = number;

    this.studentsList = function () {
        return `${this.order}.${this.firstName} ${this.lastName}`;
    }
}

// Tenth Constructor Function

function Languageschool (name, teacher, students) {
    this.name = name;
    this.class = teacher;
    this.students = students;

    this.classShedule = function () {
        return `${this.teacher} ${this.students}`;
    }
}