import { Component } from '@angular/core';
import { StatusService,Status } from '../../services/status.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent {
  statuses: Status[] = [];

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.statusService.getAll().subscribe(data => {
      this.statuses = data;
    });
  }
}
