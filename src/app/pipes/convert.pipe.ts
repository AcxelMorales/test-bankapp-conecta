import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convert'
})
export class ConvertPipe implements PipeTransform {

    transform(cadena: string): string {
        const _1 = cadena.substring(0, 4);
        const _2 = cadena.substring(4, 8);
        const _3 = cadena.substring(8, 12);
        const _4 = cadena.substring(12, 16);

        return `${_1} - ${_2} - ${_3} - ${_4}`;
    }

}
