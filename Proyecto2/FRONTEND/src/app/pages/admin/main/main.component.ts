import { Component } from '@angular/core';
/*import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';

import { ContactService } from '../../../@core/data/contact.service';
import { sharedService } from '../../../@core/data/sharedService.service';
*/
@Component({
  selector: 'main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  /*settings = {
    
    actions: {
      add: false,
      delete: false
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave : true
    },
    columns: {
      codigo_empresa: {
        title: 'Codigo de Empresa',
        type: 'string',
      },
      nomCliente: {
        title: 'Nombre de Empresa',
        type: 'string',
      },
      nombre: {
        title: 'Nombre de Contacto',
        type: 'string',
      },
      correo: {
        title: 'Correo',
        type: 'string',
      },
      numeroTelefono: {
        title: 'Telefono',
        type: 'number'
      },      
      observaciones: {
        title: 'Observaciones',
        type: 'string',
      }
    },
  };*/

  /*contactsJson : any; 
  contactSource: LocalDataSource = new LocalDataSource();
  */
  constructor(/*private contactService: ContactService, private ss: sharedService*/) {
    /*const data = this.contactService.getContactList(this.ss.getCurrentCiaId())
      .subscribe( (data) =>  {
        this.contactsJson=data.contacts;
        this.contactSource.load(this.contactsJson);
    });*/
  }

  /*onEditRow(event:any) {
    if (window.confirm('Desea guardar estos cambios?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }*/
}
