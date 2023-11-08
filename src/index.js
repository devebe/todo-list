import './style.css';
import ToDo from './classes/todo';

let testToDo = new ToDo();

testToDo.title = 'test';

testToDo.title = 'rest';

testToDo.dueDate = '2023-11-11';

console.log(testToDo);

console.log(testToDo.daysLeft);

console.log(testToDo.dueDate);
