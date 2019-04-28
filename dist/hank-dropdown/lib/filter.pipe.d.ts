import { PipeTransform } from '@angular/core';
export declare class FilterPipe implements PipeTransform {
    transform(datas: string[], search: string): string[];
}
