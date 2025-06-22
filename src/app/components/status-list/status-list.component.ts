import { Component, OnInit } from '@angular/core';
import { StatusService, Status } from '../../services/status.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {
  statuses: Status[] = [];

  constructor(
    private statusService: StatusService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadStatuses();
  }

  loadStatuses(): void {
    this.statusService.getAll().subscribe(data => {
      this.statuses = data;
    });
  }

  deleteStatus(id: number): void {
    // debugger;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: 'Bu statüyü silmek istediğinize emin misiniz?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.statusService.delete(id).subscribe(() => {
          this.statuses = this.statuses.filter(s => s.id !== id);
        });
      }
    });
  }
}
