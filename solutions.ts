// Problem 1

const filterEvenNumbers = (num: number[]): number[] =>
  num.filter((n: number) => n % 2 === 0)

// Problem 2
const reverseString = (str: string): string => str.split('').reverse().join('')

// Problem 3
type StringOrNumber = string | number
const checkType = (input: StringOrNumber): string =>
  typeof input === 'string' ? 'String' : 'Number'

// Problem 4
const user = { id: 1, name: 'John Doe', age: 21 }
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key]

// Problem 5
interface Book {
  title: string
  author: string
  publishedYear: number
}
const toggleReadStatus = (obj: Book): Book & { isRead: boolean } => {
  return {
    ...obj,
    isRead: true
  }
}
const myBook = {
  title: 'TypeScript Guide',
  author: 'Jane Doe',
  publishedYear: 2024
}

// Problem 6
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class Student extends Person {
  grade: string

  constructor(name: string, age: number, grade: string) {
    super(name, age)
    this.grade = grade
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
  }
}
const student = new Student('Alice', 20, 'A')

//Problem 7
const getIntersection = (X: number[], Y: number[]): number[] =>
  X.filter((x: number) => Y.includes(x))
