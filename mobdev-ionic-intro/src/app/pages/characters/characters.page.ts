import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  characters: Observable<any>;
  

  constructor(private router: Router, private http: HttpClient, private api: ApiService) { }

  ngOnInit() {
    this.characters = this.api.getCharacters();
    }
    openDetails(character) {
      let split = character.url.split('/');
      let characterId = split[split.length-2];
      this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }

}
