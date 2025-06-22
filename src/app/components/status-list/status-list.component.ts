import { Component, OnInit, ViewChild } from '@angular/core';
import { StatusService, Status } from '../../services/status.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'actions'];
  dataSource!: MatTableDataSource<Status>;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.statusService.getAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  deleteStatus(id: number): void {
    const confirmed = window.confirm('Statuyu silmek istediğinize emin misiniz?');
    if (confirmed) {
      this.statusService.delete(id).subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter(s => s.id !== id);
        alert('Silme işlemi başarılı.');
      });
    }
  }
}
