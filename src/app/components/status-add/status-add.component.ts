import { Component } from '@angular/core';
import { Status, StatusService } from '../../services/status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-add',
  templateUrl: './status-add.component.html',
  styleUrl: './status-add.component.css'
})
export class StatusAddComponent {
  status: Status = {id:0, name: ''};

  constructor(
    private statusService: StatusService,
    private router: Router
  ) {}

  addStatus(): void {
    if (this.status.name.trim()) {
      this.statusService.add(this.status).subscribe(() => {
        alert('Status basariyla eklendi.');
        this.router.navigate(['/']);
      });
    }
    else {
      alert('Status adi bos olamaz.');
    }
  }
}
