import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  postData : any;

  constructor(private auth: AuthService, private _router: Router) { }

  ngOnInit(): void {

    if(!localStorage.getItem("token")){
      this._router.navigate(['/login']);

    }

    this.postData = {
      data : [
        {name: "Satyajit Dash", post: "Nothing is impossible. The word itself says ‘I’m possible!", date: "2d ago"},
        {name: "Arvinth", post: "Keep your face always toward the sunshine, and shadows will fall behind you.", date: "3d ago"},
        {name: "Soumya Ranjan", post: "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.", date: "3d ago"},
        {name: "Amod Jojowar", post: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.", date: "3d ago"},
        {name: "Puneet Katyal", post: "Success is not final, failure is not fatal: it is the courage to continue that counts.", date: "5d ago"},
      ]
    }
  }

  logout(){
    this.auth.logout();
  }
}
