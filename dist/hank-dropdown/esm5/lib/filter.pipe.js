/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
     * @param {?} datas
     * @param {?} search
     * @return {?}
     */
    FilterPipe.prototype.transform = /**
     * @param {?} datas
     * @param {?} search
     * @return {?}
     */
    function (datas, search) {
        /** @type {?} */
        var arr = tslib_1.__spread(datas);
        arr = arr.filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var e_1, _a;
            /** @type {?} */
            var splited = data.split(' ');
            try {
                for (var splited_1 = tslib_1.__values(splited), splited_1_1 = splited_1.next(); !splited_1_1.done; splited_1_1 = splited_1.next()) {
                    var str = splited_1_1.value;
                    if (str.indexOf(search) === 0 || data.indexOf(search) === 0)
                        return true;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (splited_1_1 && !splited_1_1.done && (_a = splited_1.return)) _a.call(splited_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        }));
        return arr;
    };
    FilterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'filter'
                },] }
    ];
    return FilterPipe;
}());
export { FilterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oYW5rLWRyb3Bkb3duLyIsInNvdXJjZXMiOlsibGliL2ZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQ7SUFBQTtJQWlCQSxDQUFDOzs7Ozs7SUFaQyw4QkFBUzs7Ozs7SUFBVCxVQUFVLEtBQWUsRUFBRSxNQUFhOztZQUNsQyxHQUFHLG9CQUFLLEtBQUssQ0FBQztRQUNsQixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLElBQUk7OztnQkFDZixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2dCQUM3QixLQUFlLElBQUEsWUFBQSxpQkFBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7b0JBQXBCLElBQUksR0FBRyxvQkFBQTtvQkFDVCxJQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUcsQ0FBQzt3QkFBRSxPQUFPLElBQUksQ0FBQztpQkFDckU7Ozs7Ozs7OztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O2dCQWZGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtpQkFDZjs7SUFlRCxpQkFBQztDQUFBLEFBakJELElBaUJDO1NBZFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZmlsdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGRhdGFzOiBzdHJpbmdbXSwgc2VhcmNoOnN0cmluZykge1xuICAgIGxldCBhcnI9Wy4uLmRhdGFzXTtcbiAgICBhcnIgPSBhcnIuZmlsdGVyKGRhdGEgPT4ge1xuICAgICAgbGV0IHNwbGl0ZWQgPSBkYXRhLnNwbGl0KCcgJyk7XG4gICAgICBmb3IobGV0IHN0ciBvZiBzcGxpdGVkKSB7XG4gICAgICAgIGlmKHN0ci5pbmRleE9mKHNlYXJjaCk9PT0wIHx8IGRhdGEuaW5kZXhPZihzZWFyY2gpPT09MCkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBcbn1cbiJdfQ==