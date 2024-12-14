import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rank} from './types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public apiBaseURL: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public fetchRanking() {
    return this.http.get(this.apiBaseURL + '/ranking/');
  }

  public deleteRank(id: number) {
    return this.http.delete(this.apiBaseURL + '/ranking/' + id + '/');
  }

  public saveRank(rank: Rank): Observable<any> {
    return this.http.post(this.apiBaseURL + '/ranking/', rank);
  }

  public updateRank(id: number, rank: Rank): Observable<any> {
    return this.http.put(this.apiBaseURL + '/ranking/' + id + '/', rank);
  }
}
