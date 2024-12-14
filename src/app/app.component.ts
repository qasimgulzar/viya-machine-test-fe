import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RankingTableComponent} from './components/ranking-table/ranking-table.component';
import {RankDailogComponent} from './components/rank-dailog/rank-dailog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RankingTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fe-viya-machine-test';
}
