import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  Uname:String = "";
  pswd:String = "";
  json:Array<string>=[];

  // title = 'app works!';
  clickName(){
     this.json.push(JSON.stringify({id: this.Uname,pwd:this.pswd}));
     console.log('My User Name is ---->' + this.Uname);
     console.log('My  Password is ---->' + this.pswd);
     console.log(this.json);

    this.Uname='';
    this.pswd='';
  //     this.router.navigate(['details/']);

  }
  ngOnInit() {
  }

}
