import {Component, OnInit} from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import {DataService} from '../../data.service';
import {MatIcon} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {RankDailogComponent} from '../rank-dailog/rank-dailog.component';
import {Rank} from '../../types';
import {setAlternateWeakRefImpl} from '@angular/core/primitives/signals';

@Component({
  selector: 'app-ranking-table',
  imports: [MatTableModule, MatIcon, MatButtonModule],
  templateUrl: './ranking-table.component.html',
  styleUrl: './ranking-table.component.css',
  standalone: true,
})
export class RankingTableComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'name', 'net_points', 'actions'];
  dataSource: Rank[] = [];

  constructor(private dataService: DataService, public dialog: MatDialog) {

    console.log(dataService.apiBaseURL);
  }

  ngOnInit(): void {
    this.dataService.fetchRanking().subscribe((data: any) => {
      this.dataSource = data;
    });
  }

  onDelete(id: number) {
    this.dataService.deleteRank(id).subscribe((data: any) => {
      this.dataSource = data;
    });
  }

  openDailog(rankData?: Rank) {
    const ref = this.dialog.open(RankDailogComponent, {
      data: !rankData ? {rank: 0, name: '', net_points: 0} : rankData,
    });
    ref.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataSource = result;
      }
    });
  }

}
