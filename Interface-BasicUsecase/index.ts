import axios from 'axios';


const url = 'https://jsonplaceholder.typicode.com/todos/1';
// interface is used to define the structure of the object. 

interface Todo {
  id: number;
  title: string; 
  completed: boolean;    
}

axios.get(url).then((response) => {
  const todo = response.data  as Todo

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;
  todos(ID, title, finished)

  
});

// sperating logging data inside a function for more error checking. 
const todos = (ID:number, title:string, finished:boolean) => {
  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished:? ${finished}
  `);
  
}
