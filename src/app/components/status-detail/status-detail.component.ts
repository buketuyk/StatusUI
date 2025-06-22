import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusService, Status } from '../../services/status.service';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.css']
})
export class StatusDetailComponent implements OnInit{
  status?: Status;
  
  constructor(
    private route: ActivatedRoute,
    private statusService: StatusService,
    private router: Router
  ) {}
  
  ngOnInit() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id){
      this.statusService.getById(id).subscribe(data => {
        this.status = data;
      });
    }
  }

  deleteStatus(): void {
    if (this.status) {
      const confirmed = window.confirm(`"${this.status.name}" statusunu silmek istediginize emin misiniz?`);
      if (confirmed) {
        this.statusService.delete(this.status.id).subscribe(() => {
          alert('Silme islemi basarili.');
          this.router.navigate(['/']);
        });
      }
    }
  }
}