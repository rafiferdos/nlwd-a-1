# Why 'unknown' is Safer Than 'any' in TypeScript

## Introduction
In TypeScript, we often face data that we are not sure about. Many developers use the `any` type to handle this, but it creates a "type safety hole." So, in my and other developer's opinion, A better and safer choice is the `unknown` type.

## The Problem with 'any'
When we label a variable as `any`, we are telling TypeScript to stop checking that variable. We can do anything with it—call it like a function or access properties that don't exist. This leads to runtime crashes because TypeScript is no longer protecting our code.

## Why 'unknown' is Better
The `unknown` type is like a locked box. TypeScript knows there is something inside, but it won't let us use it until we confirm what it is. This is called **Type Narrowing**. We must use a simple check (like `typeof`) to prove the type before we can perform actions on it.

## Code Example
```typescript
// Using any (Unsafe)
let data: any = "Hello";
console.log(data.push(5)); // No error in editor, but crashes at runtime

// Using unknown (Safe)
let input: unknown = "Hello";

// console.log(input.length); // Error! TS prevents this

if (typeof input === "string") {
  console.log(input.length); // Safe to use now
}
```

## Conclusion
While any is easy to use, it makes your code risky. Using unknown forces you to check your data, which makes your application much more stable and bug-free.