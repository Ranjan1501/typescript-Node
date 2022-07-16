// emplate literal types build on string literal types, and have the ability to expand into many strings via unions.

// They have the same syntax as template literal strings in JavaScript, but are used in type positions. When used with concrete literal types, a template literal produces a new string literal type by concatenating the contents.

type World = "world";
 
type Greeting = `hello ${ World }`;

// When a union is used in the interpolated position, the type is the set of every possible string literal that could be represented by each union member:

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
 
type AllLocaleIDs = `${ EmailLocaleIDs | FooterLocaleIDs }_id`;

// For each interpolated position in the template literal, the unions are cross multiplied:

type AllLocaleIDs1 = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";
 
type LocaleMessageIDs = `${ Lang }_${ AllLocaleIDs }`;

// String Unions in Types
// The power in template literals comes when defining a new string based on information inside a type.

// Consider the case where a function (makeWatchedObject) adds a new function called on() to a passed object. In JavaScript, its call might look like: makeWatchedObject(baseObject). We can imagine the base object as looking like:

const passedObject = {
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
};