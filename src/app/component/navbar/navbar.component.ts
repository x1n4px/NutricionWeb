import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logged: boolean = false;
  constructor(private router: Router, private admin: AdminService) {
    if (this.admin.checkLogin()) {
      this.logged = true;
    }
  }

  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


  selectedInfo: string = '';
  selectedIndex: number = 0;

  selectItem(index: number) {
    const infoArray = ['Información sobre perros', 'Información sobre gatos', 'Información sobre pájaros', 'Información sobre reptiles', 'Información sobre roedores', 'Información sobre peces'];

    this.selectedIndex = index;
    this.selectedInfo = infoArray[index];
  }

  irA(ruta: any) {
    this.router.navigate([ruta]);
    const checkbox = document.getElementById('nav-check') as HTMLInputElement;
    checkbox.checked = false;


  }

  go(route: string) {
    //this.showMenu = !this.showMenu;
    if (route === 'recetas' || route === 'recomendaciones') {
      this.router.navigate([route]);

    } else {
      this.router.navigate(['/calculadora', route]);

    }
  }

  adminUser() {
    this.admin.clearLogin();
  }
}
