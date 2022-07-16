// The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”:

type Point = { x: number; y: number };
type P = keyof Point;

// If the type has a string or number index signature, keyof will return those types instead:
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

// Note that in this example, M is string | number — this is because JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"].

// keyof types become especially useful when combined with mapped types, which we’ll learn more about later.