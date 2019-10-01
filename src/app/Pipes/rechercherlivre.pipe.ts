import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rechercherlivre'
})
export class RechercherlivrePipe implements PipeTransform {

  transform(value: any, livrerecherche: any[]): any {
    return value.filter(data => {
        return data.kind.includes(livrerecherche);
      }
    );
  }

}
