import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
//import { ApiService } from 'src/app/services/api.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.page.html',
  styleUrls: ['./characters-details.page.scss'],
})
export class CharactersDetailsPage implements OnInit {
  character: any;
  characterId =null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
   // let id = this.activatedRoute.snapshot.paramMap.get('id');
    //this.http.get(`https://www.breakingbadapi.com/api/characters${id}`).subscribe(res => {
      //this.character = res;
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getCharacter(this.characterId).subscribe(res => {this.character = res[0]; });
  
  }

}
