import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { LoginService } from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario = new Usuario();

  constructor(private router: Router,
  private loginService: LoginService) { }

  ngOnInit() {
  }
  public limparcampos(){

    this.usuario = new Usuario();

  }
  public errogravar(){
     document.getElementById("errogravar").style.display = 'block';
  }
  public Fecharerro(){
     document.getElementById("errogravar").style.display = 'none';
  }

   public login(){
     this.Fecharerro();
     this.loginService.login(this.usuario)
     .subscribe(res => {
       if(res.body.token){
         localStorage.setItem("token", res.body.token);
       }else{
         localStorage.setItem("token", null);
       }
        this.limparcampos();
        this.router.navigate(['/listarChamado']);
      }, err => {
        this.errogravar();
        this.limparcampos()

      }
    );
  }
}
