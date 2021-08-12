import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/models/cinema';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  public films : Film[] = [];

  constructor(private service : FilmService) { }

  ngOnInit(): void {
    //Récupérer le JSON du cinema enregistré
    let cinemaJson : any = localStorage.getItem("selectedCinema")
    //Transformer le JSON du cinema enregistré en Cinema
    let cinema : Cinema = JSON.parse(cinemaJson);

    this.service.findDistincByCinemaId(cinema._id).subscribe(data => {
      this.films = data;
    })
  }

}
