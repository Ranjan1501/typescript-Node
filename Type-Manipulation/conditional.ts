// At the heart of most useful programs, we have to make decisions based on input. JavaScript programs are no different, but given the fact that values can be easily introspected, those decisions are also based on the types of the inputs. Conditional types help describe the relation between the types of inputs and outputs.

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
 
type Example1 = Dog extends Animal ? void : number;
        

 // Note RegExp is inbuilt defined type
type Example2 = RegExp extends Animal ? number : string;

// type Example3 = Ranjan extends Animal ? number : string;

//Conditional types take a form that looks a little like conditional expressions (condition ? trueExpression : falseExpression) in JavaScript:

//   SomeType extends OtherType ? TrueType : FalseType;

// When the type on the left of the extends is assignable to the one on the right, then you’ll get the type in the first branch (the “true” branch); otherwise you’ll get the type in the latter branch (the “false” branch).

// From the examples above, conditional types might not immediately seem useful - we can tell ourselves whether or not Dog extends Animal and pick number or string! But the power of conditional types comes from using them with generics.