import { Component } from '@angular/core';
import { Todo } from 'src/app/modules';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todoList : Todo[] = [];
  localItems :string | null;

  constructor(){
    this.localItems =localStorage.getItem('todoList');
    if(this.localItems == null){
      this.todoList =[]
    }
    else{
      this.todoList = JSON.parse(this.localItems);
    }
  }

  getRandomColor():string{
    const colors = [
      'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'teal', 'maroon', 'navy',
      'lime', 'aqua', 'olive', 'silver', 'gray', 'indigo', 'brown', 'fuchsia', 'gold',
      'cyan', 'crimson', 'darkgreen', 'darkorange', 'darkred'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  addNewTodo(todo:Todo){
    todo.id = this.todoList.length + 1;
    todo.color = this.getRandomColor();
    this.todoList.push(todo);
    localStorage.setItem("todoList", JSON.stringify(this.todoList));
  }
  
  onCheckboxClick(todo:Todo){
    todo.isActive = !todo.isActive;
    localStorage.setItem("todoList", JSON.stringify(this.todoList));
  }

  deleteTodo(todo:Todo){
    const indexOfItem= this.todoList.indexOf(todo);
    this.todoList.splice(indexOfItem,1);
    localStorage.setItem("todoList", JSON.stringify(this.todoList)); 
  }
}
