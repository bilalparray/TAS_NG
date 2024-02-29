import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Mom, Players } from '../models/player';
@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}
  // url for players
  private url = 'https://teamawesomebackend-production.up.railway.app/api/';
  // url for MOM
  private momUrl =
    'https://teamawesomeapi-production.up.railway.app/api/products/mom';
  // fetch players
  getPlayers(): Observable<any> {
    return this.http.get(this.url + 'players');
  }
  // add players
  addPlayer(newPlayer: Players): Observable<any> {
    return this.http.post(this.url + 'create', newPlayer);
  }
  // get mom
  getMom(): Observable<any> {
    return this.http.get(this.momUrl);
  }
  //update MOm
  updateMOM(data: Mom): Observable<any> {
    return this.http.put(`${this.momUrl}`, data);
  }
  // get Player by id
  getById(id: string): Observable<any> {
    return this.http.get(`${this.url}${id}`);
  }
  // delte

  deletePlayer(_id: string): Observable<any> {
    return this.http.delete(`${this.url}players/${_id}`);
  }

  // update Player by id
  updatePlayer(_id: string, data: Players): Observable<any> {
    return this.http.put(`${this.url}players/${_id}`, data);
  }
}
