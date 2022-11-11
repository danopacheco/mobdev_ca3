import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http:CLient) { }

  getCharacters(){
    return this.http.get('https://www.breakingbadapi.com/api/characters');
  }
  

  getCharacters(id){
    return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
  }
}
