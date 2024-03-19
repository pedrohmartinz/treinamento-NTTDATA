import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'ToDo-List';
  tasks: { name: string, priority: number }[] = [];
  newTask: string = '';
  newTaskPriority: number = 1;

  ngOnInit() {
  
    this.tasks.sort((a, b) => a.priority - b.priority);
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask.trim(), priority: this.newTaskPriority });
      this.tasks.sort((a, b) => a.priority - b.priority); 
      this.newTask = '';
      this.newTaskPriority = 3; 
    }
  }

  removeTask(task: { name: string, priority: number }) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}