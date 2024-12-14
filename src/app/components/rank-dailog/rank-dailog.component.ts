import {Component, inject, model, ModelSignal, numberAttribute, signal} from '@angular/core';
import {Rank} from '../../types';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-rank-dailog',
  templateUrl: './rank-dailog.component.html',
  standalone: true,
  styleUrl: './rank-dailog.component.css',
  imports: [
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatLabel,
    MatFormField,
    // MatDialogClose,
    MatButtonModule,
  ]
})
export class RankDailogComponent {
  readonly dialogRef = inject(MatDialogRef<RankDailogComponent>);
  readonly data = inject<Rank>(MAT_DIALOG_DATA);
  name = model(this.data.name);
  net_points = model(this.data.net_points);


  constructor(private dataService: DataService) {
  }

  onSave() {
    if (this.data.id) {
      this.dataService.updateRank(this.data.id, {
        name: this.name(),
        net_points: this.net_points()
      }).subscribe((data: any) => {
        this.dialogRef.close(data);
      });
    } else {
      this.dataService.saveRank({name: this.name(), net_points: this.net_points()}).subscribe((data: any) => {
        this.dialogRef.close(data);
      });
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
