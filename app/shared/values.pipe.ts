/**
 * Created by amitthakkar on 26/11/16.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'values', pure: false})
export class ValuesPipe implements PipeTransform {
    transform(object):any[] {
        console.log(object)
        let values = [];
        for (let key in object) {
            values.push(object[key]);
        }
        console.log(values)
        return values;
    }
}