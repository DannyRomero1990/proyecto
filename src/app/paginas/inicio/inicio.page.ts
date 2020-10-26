import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  menu: itemMenu[]=[
    {
      url: '/noticias',
      icono: 'newspaper-outline',
      texto: 'Noticias' 
    },
    
    {
      url: '/login',
      icono: 'chatbubbles-outline',
      texto: 'Chat'
    }
  ];

//para cambiar el tema de acuerdo al sistema
  darkMode: boolean = true;

  constructor(private ruta: Router) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode=prefersDark.matches;
  }

  ngOnInit() {
    
  }

  //metodo para navegar entre las distintas páginas
  navegar(url: string){
    console.log("Hola Danny");
    this.ruta.navigate([url]);
  }

  cambioTema(){
    //const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');

  }

}
interface itemMenu{
  url: string;
  icono: string;
  texto: string;
}
