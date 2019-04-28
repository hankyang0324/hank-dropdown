import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { __spread, __values } from 'tslib';
import { Component, Output, Input, forwardRef, EventEmitter, Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            for (var _c = __values(this.options), _d = _c.next(); !_d.done; _d = _c.next()) {
                var option = _d.value;
                /** @type {?} */
                var splited = option.split(' ');
                try {
                    for (var splited_1 = __values(splited), splited_1_1 = splited_1.next(); !splited_1_1.done; splited_1_1 = splited_1.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        var arr = __spread(datas);
        arr = arr.filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var e_1, _a;
            /** @type {?} */
            var splited = data.split(' ');
            try {
                for (var splited_1 = __values(splited), splited_1_1 = splited_1.next(); !splited_1_1.done; splited_1_1 = splited_1.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HankDropdownModule = /** @class */ (function () {
    function HankDropdownModule() {
    }
    HankDropdownModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [HankDropdownComponent, FilterPipe],
                    imports: [CommonModule, BrowserAnimationsModule, ReactiveFormsModule],
                    exports: [HankDropdownComponent]
                },] }
    ];
    return HankDropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HankDropdownComponent, HankDropdownModule, FilterPipe as ɵa };

//# sourceMappingURL=hank-dropdown.js.map