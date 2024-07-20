import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {

  taskForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TaskComponent>) {
    this.taskForm = this.fb.group({
      task: [''],
      completed: [false]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.taskForm.patchValue({
        task: this.data.task
      });
    }
  }

  onSubmit() {
    if (!this.taskForm.valid) {
      return;
    }
    const data = localStorage.getItem('tasks');
    if (data) {
      const tasks = JSON.parse(data);
      tasks.push({ task: this.taskForm.value.task, completed: this.taskForm.value.completed });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    else {
      localStorage.setItem('tasks', JSON.stringify([{ task: this.taskForm.value.task, completed: this.taskForm.value.completed }]));
    }
    this.taskForm.reset();
    this.dialogRef.close();
  }

  cancel() {
    this.taskForm.reset();
    this.dialogRef.close();
  }
}
