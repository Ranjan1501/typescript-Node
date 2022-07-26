import { User }  from "./Model/user"; 
const user = new User( { id: 1} );
( user.set( { age: 26 } ) ); 
user.on( "change", () => { 
    console.log("# Change 1"); 
} ); 
user.on( "change", () => {
    console.log("# Change 2"); 

} ); 
 
user.on( 'save', () => {
    console.log("Save was triggered"); 
})

user.trigger( "save", () => {
    
} )
user.fetch(); 

console.log(user); 
// console.log(user.get( "name" ));
// console.log(user.get( 'age' ));


