import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PageDataService } from 'src/app/services/page-data.service';
@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css','header-search.css']
  })
  export class HeaderComponent {

    isMenuOpen = false;

    tituloHeader = '';
    @Output() enviaFiltro = new EventEmitter<string>();

    constructor(private router: Router, private pageService: PageDataService){
      this.pageService.titulo.subscribe(
        (novoTitulo) => {
          this.tituloHeader = novoTitulo;
        })

    }

    exibeMenu(){
      this.isMenuOpen = !this.isMenuOpen;
    }
    
  
    logout(){
      console.log("deletou");
      localStorage.removeItem('TOKEN');
      this.router.navigate(['login']);
    }

    handleFiltro(inputValue){
      // console.log(inputValue);
      this.enviaFiltro.emit(inputValue);
    }

  }