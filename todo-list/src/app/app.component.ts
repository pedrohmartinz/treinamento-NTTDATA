import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: { name: string, priority: number }[] = [];
  newTask: string = '';
  newTaskPriority: number = 1;

  ngOnInit() {
    // Ordena as tarefas inicialmente
    this.tasks.sort((a, b) => a.priority - b.priority);
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask.trim(), priority: this.newTaskPriority });
      this.tasks.sort((a, b) => a.priority - b.priority); // Ordena as tarefas pela prioridade
      this.newTask = '';
      this.newTaskPriority = 1; // Reset priority to 1 after adding task
    }
  }

  removeTask(task: { name: string, priority: number }) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}