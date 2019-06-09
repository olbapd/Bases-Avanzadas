import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';


import Swal from 'sweetalert2';

@Component({
	selector: 'pages',
	templateUrl: './pages.component.html',

})
export class PagesComponent {

	constructor(private router: Router) {

	}

	logout() {
		this.router.navigate(['/auth/login']);
	}

}
