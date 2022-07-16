//Without generics, we would either have to give the identity function a specific type:

function identity(arg: number): number {
  return arg;
}

// or we could describe the identity function using the any type:

// While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

// Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we will use a type variable, a special kind of variable that works on types rather than values.

function identity1<Type>(arg: Type): Type {
  return arg;
}


// We’ve now added a type variable Type to the identity function. This Type allows us to capture the type the user provides (e.g. number), so that we can use that information later. Here, we use Type again as the return type. On inspection, we can now see the same type is used for the argument and the return type. This allows us to traffic that type information in one side of the function and out the other.

// We say that this version of the identity function is generic, as it works over a range of types. Unlike using any, it’s also just as precise (i.e., it doesn’t lose any information) as the first identity function that used numbers for the argument and return type.

// 1 
let output = identity1<string>( "Hey, I am a string" );
console.log( output );

// Here we explicitly set Type to be string as one of the arguments to the function call, denoted using the <> around the arguments rather than ().

// The second way is also perhaps the most common. Here we use type argument inference — that is, we want the compiler to set the value of Type for us automatically based on the type of the argument we pass in:

// 2
let output1 = identity1( "myString" );
console.log( output1 );

// for the 2nd ways, we didn’t have to explicitly pass the type in the angle brackets (<>); the compiler just looked at the value "myString", and set Type to its type. While type argument inference can be a helpful tool to keep code shorter and more readable, you may need to explicitly pass in the type arguments as we did in the previous example when the compiler fails to infer the type, as may happen in more complex examples.

// we’ve actually intended this function to work on arrays of Type rather than Type directly. Since we’re working with arrays, the .length member should be available. We can describe this just like we would create arrays of other types:

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

// the type of loggingIdentity as “the generic function loggingIdentity takes a type parameter Type, and an argument arg which is an array of Types, and returns an array of Types.” If we passed in an array of numbers, we’d get an array of numbers back out, as Type would bind to number. This allows us to use our generic type variable Type as part of the types we’re working with, rather than the whole type, giving us greater flexibility.

// We can alternatively write the sample example this way:

function loggingIdentity1<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

// the type of the functions themselves and how to create generic interfaces.
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
 
function identity2<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn = identity2;

//Generic Classes
// A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.

class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// nothing is restricting it to only use the number type. We could have instead used string or even more complex objects. it will take other types values as parameters also. 

// Instead of working with any and all types, we’d like to constrain this function to work with any and all types that also  have the .length property. As long as the type has this member, we’ll allow it, but it’s required to have at least this member. To do so, we must list our requirement as a constraint on what Type can be.

// To do so, we’ll create an interface that describes our constraint. Here, we’ll create an interface that has a single .length property and then we’ll use this interface and the extends keyword to denote our constraint:

interface Lengthwise {
  length: number;
}
 
function loggingIdentity3<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

//the generic function is now constrained, it will no longer work over any and all types:
loggingIdentity([3, 4, 5, 6]);