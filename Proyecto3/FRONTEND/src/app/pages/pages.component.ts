import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';


import Swal from 'sweetalert2';

@Component({
	selector: 'pages',
	templateUrl: './pages.component.html',

})
export class PagesComponent {
	user:any;

	constructor(private router: Router) {
		this.user=1;

	}

	logout() {
		this.router.navigate(['/auth/login']);
	}

}
