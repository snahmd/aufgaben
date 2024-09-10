//! Aufgabe 1

interface IBook {
  author: string;
  name: string;
  publishingYear: string;
  shortDescription?: string;
  numberOfPages: number;
}

type PartialBook = Partial<IBook>;

const partialBook1: PartialBook = {
  author: "John",
  name: "Book 1",
};
console.log(partialBook1);

interface IPartialBook extends Partial<IBook> {}

const partialBook2: IPartialBook = {
  name: "Book 2",
};

console.log(partialBook2);

//! Aufgabe 2

type BasicBook = Omit<IBook, "publishingYear" | "shortDescription">;

const basicBook: BasicBook = {
  author: "John Donne",
  name: "Book 1",
  numberOfPages: 400,
};

console.log(basicBook);

interface IBasicBook
  extends Omit<IBook, "publishingYear" | "shortDescription"> {}

const basicBook2: IBasicBook = {
  author: "John Steinbeck",
  name: "Book 2",
  numberOfPages: 300,
};

console.log(basicBook2);

//! Aufgabe 3

type BookDescription = Pick<IBook, "name" | "shortDescription">;

const bookDescription: BookDescription = {
  name: "Stephen King",
  shortDescription: "Description1",
};
console.log(bookDescription);

interface IBookDescription extends Pick<IBook, "name" | "shortDescription"> {}

const bookDescription2: IBookDescription = {
  name: "Viktor Hugo",
  shortDescription: "Description2",
};
console.log(bookDescription2);

//! Aufgabe 4

type RequiredBook = Required<IBook>;

const requiredBook: BookDescription = {
  name: "Stephen King",
  shortDescription: "Description1",
};

console.log(requiredBook);

interface IRequiredBook extends Required<IBook> {}

const requiredBook2: IRequiredBook = {
  name: "Viktor Hugo",
  author: "Viktor Hugo",
  publishingYear: "2021",
  numberOfPages: 300,
  shortDescription: "Description2",
};

console.log(requiredBook2);

//! Aufgabe 5

type ReadOnlyBook = Readonly<IBook>;

const readonlyBook: ReadOnlyBook = {
  name: "Stephen King",
  author: "Stephen King",
  publishingYear: "2021",
  numberOfPages: 300,
  shortDescription: "Description1",
};

// readonlyBook.name = "Viktor Hugo"; // Error

interface IReadOnlyBook extends Readonly<IBook> {}

const readonlyBook2: IReadOnlyBook = {
  name: "Stephen King",
  author: "Stephen King",
  publishingYear: "2021",
  numberOfPages: 300,
  shortDescription: "Description1",
};

// readonlyBook2.name = "Viktor Hugo"; // Error

//! Aufgabe 6

type BasicColors = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "WHITE";

type RealColors = Exclude<BasicColors, "BLACK" | "WHITE">;

function showColors(color: RealColors) {
  console.log(color);
}

// showColors("BLACK"); // Error

showColors("RED");

//! Aufgabe 7

interface IDonkey {
  name: string;
  age: number;
  fluffyness: number;
  favoriteFood: string;
}

enum Donkey {
  Daisy = "Daisy",
  Gus = "Gus",
  Rosie = "Rosie",
  Coco = "Coco",
  Jasper = "Jasper",
}

type DonkeyRecord = Record<Donkey, IDonkey>;

const donkeyRecord: DonkeyRecord = {
  [Donkey.Daisy]: {
    name: "Daisy",
    age: 5,
    fluffyness: 3,
    favoriteFood: "Carrot",
  },
  [Donkey.Gus]: {
    name: "Gus",
    age: 3,
    fluffyness: 2,
    favoriteFood: "Apple",
  },
  [Donkey.Rosie]: {
    name: "Rosie",
    age: 4,
    fluffyness: 4,
    favoriteFood: "Banana",
  },
  [Donkey.Coco]: {
    name: "Coco",
    age: 6,
    fluffyness: 5,
    favoriteFood: "Strawberry",
  },
  [Donkey.Jasper]: {
    name: "Jasper",
    age: 7,
    fluffyness: 4,
    favoriteFood: "Blueberry",
  },
};

console.log(donkeyRecord);
