/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FilterPipe {
    /**
     * @param {?} datas
     * @param {?} search
     * @return {?}
     */
    transform(datas, search) {
        /** @type {?} */
        let arr = [...datas];
        arr = arr.filter((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            let splited = data.split(' ');
            for (let str of splited) {
                if (str.indexOf(search) === 0 || data.indexOf(search) === 0)
                    return true;
            }
            return false;
        }));
        return arr;
    }
}
FilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'filter'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oYW5rLWRyb3Bkb3duLyIsInNvdXJjZXMiOlsibGliL2ZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8sVUFBVTs7Ozs7O0lBRXJCLFNBQVMsQ0FBQyxLQUFlLEVBQUUsTUFBYTs7WUFDbEMsR0FBRyxHQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUNsQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDN0IsS0FBSSxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUU7Z0JBQ3RCLElBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBRyxDQUFDO29CQUFFLE9BQU8sSUFBSSxDQUFDO2FBQ3JFO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBZkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxRQUFRO2FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2ZpbHRlcidcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShkYXRhczogc3RyaW5nW10sIHNlYXJjaDpzdHJpbmcpIHtcbiAgICBsZXQgYXJyPVsuLi5kYXRhc107XG4gICAgYXJyID0gYXJyLmZpbHRlcihkYXRhID0+IHtcbiAgICAgIGxldCBzcGxpdGVkID0gZGF0YS5zcGxpdCgnICcpO1xuICAgICAgZm9yKGxldCBzdHIgb2Ygc3BsaXRlZCkge1xuICAgICAgICBpZihzdHIuaW5kZXhPZihzZWFyY2gpPT09MCB8fCBkYXRhLmluZGV4T2Yoc2VhcmNoKT09PTApIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgXG59XG4iXX0=