# Topic 2: Pick and Omit

## Introduction
In a large project, we often have big interfaces with many properties. However, we don't always need every property for every function. Instead of writing new interfaces from scratch, we can use `Pick` and `Omit` to stay "DRY" (Don't Repeat Yourself).

## How They Work
- **Pick:** This allows us to choose only the specific properties we need from an existing interface.
- **Omit:** This allows us to take everything from an interface except for a few properties our want to remove.

These "slices" of a master interface prevent code duplication. If we update the main interface, these slices update automatically.

## Code Example
```typescript
interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

// Creating a profile type using Pick
type UserProfile = Pick<User, "email" "username" |>;

// Creating a public info type using Omit
type PublicInfo = Omit<User, "password">;
```
## Conclusion
Using Pick and Omit helps us manage our data structures efficiently. It keeps our code organized, reduces repetition, and makes it easier to maintain in the long run.