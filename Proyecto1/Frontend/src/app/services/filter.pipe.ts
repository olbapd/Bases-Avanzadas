import { Pipe, PipeTransform } from '@angular/core';
import { Empleado } from '../interfaces/employee';

@Pipe({
  name: 'filters'
})
export class FilterPipe implements PipeTransform {

  transform(employees: Empleado[], term: any): Empleado[] {
    if (employees != term) {
      console.log("entro a esta pixa");
      return employees;}

    return employees.filter(employee=>  {
      const term2 = term.toLowerCase();
      return employee.nombre.toLowerCase().includes(term2);
  });

}
}
