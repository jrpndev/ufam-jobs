import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  items: any[] = [
    {
      name: "A",
      date: "24/04/2023",
      wage: 23233,
      description: "151515",
      number: 123,
      shift: "15",
      id: 1,
      editMode: false
    },
    // Add more items here if needed
  ];

  toggleEditMode(item : any) {
    item.editMode = !item.editMode;
  }

  deleteItem(item: any) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
