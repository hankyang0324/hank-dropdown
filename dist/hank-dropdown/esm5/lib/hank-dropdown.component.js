/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, Input, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
var HankDropdownComponent = /** @class */ (function () {
    function HankDropdownComponent() {
        this.id = ''; //通过parent componet给这个dropdown命名
        //通过parent componet给这个dropdown命名
        this.options = [];
        this.placeholder = '';
        this.disabled = false;
        this.selected = new EventEmitter(); //把id和从dropdown中选中的值传给parent component。
        //把id和从dropdown中选中的值传给parent component。
        this.search = '';
        this.showDropdown = 'collapsed';
        /* --------------  form control ---------------*/
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        // setDisabledState(isDisabled: boolean){
        //   this.disabled = isDisabled;
        // }
    }
    /**
     * @return {?}
     */
    HankDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dropdownWidth = parseInt(this.width) + 6 + 'px';
        this.width += 'px';
        this.maxHeight += 'px';
    };
    /**
     * @return {?}
     */
    HankDropdownComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this.showDropdown = 'expanded';
    };
    /**
     * @return {?}
     */
    HankDropdownComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.onTouched();
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.showDropdown = 'collapsed'; }), 150);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    HankDropdownComponent.prototype.detectInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var e_1, _a, e_2, _b;
        this.search = ((/** @type {?} */ (event.target))).value;
        try {
            for (var _c = tslib_1.__values(this.options), _d = _c.next(); !_d.done; _d = _c.next()) {
                var option = _d.value;
                /** @type {?} */
                var splited = option.split(' ');
                try {
                    for (var splited_1 = tslib_1.__values(splited), splited_1_1 = splited_1.next(); !splited_1_1.done; splited_1_1 = splited_1.next()) {
                        var str = splited_1_1.value;
                        if (str.indexOf(this.search) === 0 || option.indexOf(this.search) === 0) {
                            this.showDropdown = 'expanded';
                            return;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (splited_1_1 && !splited_1_1.done && (_b = splited_1.return)) _b.call(splited_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.showDropdown = 'collapsed'; //遍历完datas，不包括输入，不显示dropdown
    };
    /**
     * @param {?} option
     * @return {?}
     */
    HankDropdownComponent.prototype.select = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.search = option; //把选中的值送回输入框
        this.selected.emit({ id: this.id, value: option }); //选中的值传给parennt component
        this.showDropdown = 'collapsed'; //关闭dropdown
        this.onChange(this.search); //给reactive form传值
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    HankDropdownComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    HankDropdownComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    HankDropdownComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.search = value ? value : ''; //reactive form 给search设初值
    };
    HankDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hank-dropdown',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return HankDropdownComponent; })),
                            multi: true
                        }
                    ],
                    template: "<div class='container'>\n    <ng-content></ng-content>\n    <input \n        class='searchInput' \n        [ngStyle]='{width:width}'\n        [ngClass]='{disable:disabled}'\n        [disabled]='disabled' \n        [placeholder]='placeholder' \n        (blur)='hide()' \n        [value]='search'\n        (input)='detectInput($event)' \n        (click)='show()'>\n    <div class='dropdown' \n        [@divState]=\"showDropdown\"\n        [ngStyle]='{width:dropdownWidth,\"max-height\":maxHeight}'>\n        <ul class='searchUl'>\n            <li class='searchLi' \n                *ngFor='let option of options | filter:search' \n                (click)='select(option)'>\n                {{ option }}\n            </li>\n        </ul>\n    </div>\n</div>",
                    animations: [
                        trigger('divState', [
                            state('expanded', style({
                                height: AUTO_STYLE
                            })),
                            state('collapsed', style({
                                height: 0,
                                display: 'none'
                            })),
                            transition('collapsed => expanded', animate('150ms ease-out'))
                        ]),
                    ],
                    styles: [".container{padding-top:5px;padding-bottom:5px}.searchInput{padding-left:5px;outline:0;width:200px;height:30px;margin-top:5px!important;border-radius:3px;border:1px solid #d3d3d3;font-size:14px}.dropdown{position:absolute;background:#fff;width:206px;border:1px solid #d3d3d3;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top:none;max-height:250px;overflow:scroll}.searchUl{margin:0;padding:0}.searchLi{padding:5px;list-style:none}.disable,.searchLi:hover{background-color:#f0f0f0}"]
                }] }
    ];
    HankDropdownComponent.propDecorators = {
        id: [{ type: Input, args: ['id',] }],
        options: [{ type: Input, args: ['options',] }],
        placeholder: [{ type: Input, args: ['placeholder',] }],
        disabled: [{ type: Input, args: ['disabled',] }],
        width: [{ type: Input, args: ['width',] }],
        maxHeight: [{ type: Input, args: ['max-height',] }],
        selected: [{ type: Output }]
    };
    return HankDropdownComponent;
}());
export { HankDropdownComponent };
if (false) {
    /** @type {?} */
    HankDropdownComponent.prototype.id;
    /** @type {?} */
    HankDropdownComponent.prototype.options;
    /** @type {?} */
    HankDropdownComponent.prototype.placeholder;
    /** @type {?} */
    HankDropdownComponent.prototype.disabled;
    /** @type {?} */
    HankDropdownComponent.prototype.width;
    /** @type {?} */
    HankDropdownComponent.prototype.maxHeight;
    /** @type {?} */
    HankDropdownComponent.prototype.selected;
    /** @type {?} */
    HankDropdownComponent.prototype.search;
    /** @type {?} */
    HankDropdownComponent.prototype.showDropdown;
    /** @type {?} */
    HankDropdownComponent.prototype.dropdownWidth;
    /** @type {?} */
    HankDropdownComponent.prototype.onChange;
    /** @type {?} */
    HankDropdownComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuay1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oYW5rLWRyb3Bkb3duLyIsInNvdXJjZXMiOlsibGliL2hhbmstZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBVSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBRTVGO0lBQUE7UUEwQmMsT0FBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGdDQUFnQzs7UUFDcEMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNULGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHbkMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUE0QixDQUFDLENBQUMsdUNBQXVDOztRQUMxRyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQVUsV0FBVyxDQUFDOztRQXlDbEMsYUFBUTs7OztRQUFHLFVBQUMsS0FBSyxJQUFNLENBQUMsRUFBQTtRQUV4QixjQUFTOzs7UUFBRyxjQUFPLENBQUMsRUFBQTtRQWNwQix5Q0FBeUM7UUFDekMsZ0NBQWdDO1FBQ2hDLElBQUk7SUFDTixDQUFDOzs7O0lBekRDLHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLElBQUUsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLElBQUUsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxvQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsb0NBQUk7OztJQUFKO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsVUFBVTs7O1FBQUMsY0FBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxFQUEvQixDQUErQixHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLEtBQVc7O1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxtQkFBa0IsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDOztZQUNyRCxLQUFrQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQSxnQkFBQSw0QkFBRTtnQkFBNUIsSUFBSSxNQUFNLFdBQUE7O29CQUNSLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7b0JBQy9CLEtBQWUsSUFBQSxZQUFBLGlCQUFBLE9BQU8sQ0FBQSxnQ0FBQSxxREFBRTt3QkFBcEIsSUFBSSxHQUFHLG9CQUFBO3dCQUNULElBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFHLENBQUMsRUFBRTs0QkFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7NEJBQy9CLE9BQU87eUJBQ1I7cUJBQ0Y7Ozs7Ozs7OzthQUNGOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxDQUFDLDRCQUE0QjtJQUMvRCxDQUFDOzs7OztJQUVELHNDQUFNOzs7O0lBQU4sVUFBTyxNQUFhO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsWUFBWTtRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMseUJBQXlCO1FBQ3hFLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLENBQUMsWUFBWTtRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtJQUNoRCxDQUFDOzs7OztJQVFELGdEQUFnQjs7OztJQUFoQixVQUFpQixFQUFFO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsaURBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsS0FBSztRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLDBCQUEwQjtJQUM5RCxDQUFDOztnQkF6RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLEVBQUM7NEJBQ3BELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELDh2QkFBNkM7b0JBRTdDLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsVUFBVSxFQUFDOzRCQUNqQixLQUFLLENBQUMsVUFBVSxFQUFDLEtBQUssQ0FBQztnQ0FDbkIsTUFBTSxFQUFFLFVBQVU7NkJBQ3JCLENBQUMsQ0FBQzs0QkFDSCxLQUFLLENBQUMsV0FBVyxFQUFDLEtBQUssQ0FBQztnQ0FDcEIsTUFBTSxFQUFFLENBQUM7Z0NBQ1QsT0FBTyxFQUFFLE1BQU07NkJBQ2pCLENBQUMsQ0FBQzs0QkFDSCxVQUFVLENBQUMsdUJBQXVCLEVBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7eUJBQy9ELENBQUM7cUJBQ0g7O2lCQUNGOzs7cUJBR0UsS0FBSyxTQUFDLElBQUk7MEJBQ1YsS0FBSyxTQUFDLFNBQVM7OEJBQ2YsS0FBSyxTQUFDLGFBQWE7MkJBQ25CLEtBQUssU0FBQyxVQUFVO3dCQUNoQixLQUFLLFNBQUMsT0FBTzs0QkFDYixLQUFLLFNBQUMsWUFBWTsyQkFDbEIsTUFBTTs7SUE4RFQsNEJBQUM7Q0FBQSxBQTlGRCxJQThGQztTQXJFWSxxQkFBcUI7OztJQUNoQyxtQ0FBb0I7O0lBQ3BCLHdDQUE4Qjs7SUFDOUIsNENBQXNDOztJQUN0Qyx5Q0FBNkM7O0lBQzdDLHNDQUE4Qjs7SUFDOUIsMENBQXVDOztJQUN2Qyx5Q0FBa0U7O0lBQ2xFLHVDQUFpQjs7SUFDakIsNkNBQWtDOztJQUNsQyw4Q0FBcUI7O0lBd0NyQix5Q0FBd0I7O0lBRXhCLDBDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgQVVUT19TVFlMRSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hhbmstZHJvcGRvd24nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEhhbmtEcm9wZG93bkNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2hhbmstZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oYW5rLWRyb3Bkb3duLmNvbXBvbmVudC5jc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2RpdlN0YXRlJyxbXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLHN0eWxlKHtcbiAgICAgICAgICBoZWlnaHQ6IEFVVE9fU1RZTEVcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdjb2xsYXBzZWQnLHN0eWxlKHtcbiAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgfSkpLFxuICAgICAgIHRyYW5zaXRpb24oJ2NvbGxhcHNlZCA9PiBleHBhbmRlZCcsYW5pbWF0ZSgnMTUwbXMgZWFzZS1vdXQnKSlcbiAgICBdKSxcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEhhbmtEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoJ2lkJylpZCA9ICcnOyAvL+mAmui/h3BhcmVudCBjb21wb25ldOe7mei/meS4qmRyb3Bkb3du5ZG95ZCNXG4gIEBJbnB1dCgnb3B0aW9ucycpb3B0aW9ucyA9IFtdO1xuICBASW5wdXQoJ3BsYWNlaG9sZGVyJylwbGFjZWhvbGRlciA9ICcnO1xuICBASW5wdXQoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCd3aWR0aCcpIHdpZHRoOiBzdHJpbmc7XG4gIEBJbnB1dCgnbWF4LWhlaWdodCcpIG1heEhlaWdodDogc3RyaW5nO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtpZDpzdHJpbmcsdmFsdWU6c3RyaW5nfT4oKTsgLy/mioppZOWSjOS7jmRyb3Bkb3du5Lit6YCJ5Lit55qE5YC85Lyg57uZcGFyZW50IGNvbXBvbmVudOOAglxuICBzZWFyY2g6c3RyaW5nPScnO1xuICBzaG93RHJvcGRvd246c3RyaW5nID0gJ2NvbGxhcHNlZCc7XG4gIGRyb3Bkb3duV2lkdGg6c3RyaW5nO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZHJvcGRvd25XaWR0aCA9IHBhcnNlSW50KHRoaXMud2lkdGgpKzYrJ3B4JztcbiAgICB0aGlzLndpZHRoKz0ncHgnO1xuICAgIHRoaXMubWF4SGVpZ2h0Kz0ncHgnO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLnNob3dEcm9wZG93biA9ICdleHBhbmRlZCc7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgc2V0VGltZW91dCgoKT0+dGhpcy5zaG93RHJvcGRvd24gPSAnY29sbGFwc2VkJywgMTUwKTtcbiAgfVxuXG4gIGRldGVjdElucHV0KGV2ZW50OkV2ZW50KSB7XG4gICAgdGhpcy5zZWFyY2ggPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS52YWx1ZTtcbiAgICBmb3IobGV0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgIGxldCBzcGxpdGVkID0gb3B0aW9uLnNwbGl0KCcgJyk7XG4gICAgICBmb3IobGV0IHN0ciBvZiBzcGxpdGVkKSB7XG4gICAgICAgIGlmKHN0ci5pbmRleE9mKHRoaXMuc2VhcmNoKT09PTAgfHwgb3B0aW9uLmluZGV4T2YodGhpcy5zZWFyY2gpPT09MCkge1xuICAgICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duID0gJ2V4cGFuZGVkJztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2hvd0Ryb3Bkb3duID0gJ2NvbGxhcHNlZCc7IC8v6YGN5Y6G5a6MZGF0YXPvvIzkuI3ljIXmi6zovpPlhaXvvIzkuI3mmL7npLpkcm9wZG93blxuICB9XG5cbiAgc2VsZWN0KG9wdGlvbjpzdHJpbmcpIHtcbiAgICB0aGlzLnNlYXJjaCA9IG9wdGlvbjsgLy/miorpgInkuK3nmoTlgLzpgIHlm57ovpPlhaXmoYZcbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQoe2lkOnRoaXMuaWQsdmFsdWU6b3B0aW9ufSk7IC8v6YCJ5Lit55qE5YC85Lyg57uZcGFyZW5udCBjb21wb25lbnRcbiAgICB0aGlzLnNob3dEcm9wZG93biA9ICdjb2xsYXBzZWQnOyAvL+WFs+mXrWRyb3Bkb3duXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlYXJjaCk7IC8v57uZcmVhY3RpdmUgZm9ybeS8oOWAvFxuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0gIGZvcm0gY29udHJvbCAtLS0tLS0tLS0tLS0tLS0qL1xuXG4gIG9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7fVxuXG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjsgXG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbikge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZWFyY2ggPSB2YWx1ZSA/IHZhbHVlIDogJyc7IC8vcmVhY3RpdmUgZm9ybSDnu5lzZWFyY2jorr7liJ3lgLxcbiAgfVxuXG4gIC8vIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbil7XG4gIC8vICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIC8vIH1cbn1cblxuIl19