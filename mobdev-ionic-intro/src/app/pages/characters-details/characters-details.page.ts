import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
  character: any;
  characterId: string;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
   // let id = this.activatedRoute.snapshot.paramMap.get('id');
    //this.http.get(`https://www.breakingbadapi.com/api/characters${id}`).subscribe(res => {
      //this.character = res;
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getCharacter(this.characterId).subscribe(res => {this.character = res[0]; });
  
  }

}
