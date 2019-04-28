import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, Output, Input, forwardRef, EventEmitter, Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HankDropdownComponent {
    constructor() {
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
        (value) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        // setDisabledState(isDisabled: boolean){
        //   this.disabled = isDisabled;
        // }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dropdownWidth = parseInt(this.width) + 6 + 'px';
        this.width += 'px';
        this.maxHeight += 'px';
    }
    /**
     * @return {?}
     */
    show() {
        this.showDropdown = 'expanded';
    }
    /**
     * @return {?}
     */
    hide() {
        this.onTouched();
        setTimeout((/**
         * @return {?}
         */
        () => this.showDropdown = 'collapsed'), 150);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    detectInput(event) {
        this.search = ((/** @type {?} */ (event.target))).value;
        for (let option of this.options) {
            /** @type {?} */
            let splited = option.split(' ');
            for (let str of splited) {
                if (str.indexOf(this.search) === 0 || option.indexOf(this.search) === 0) {
                    this.showDropdown = 'expanded';
                    return;
                }
            }
        }
        this.showDropdown = 'collapsed'; //遍历完datas，不包括输入，不显示dropdown
    }
    /**
     * @param {?} option
     * @return {?}
     */
    select(option) {
        this.search = option; //把选中的值送回输入框
        this.selected.emit({ id: this.id, value: option }); //选中的值传给parennt component
        this.showDropdown = 'collapsed'; //关闭dropdown
        this.onChange(this.search); //给reactive form传值
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.search = value ? value : ''; //reactive form 给search设初值
    }
}
HankDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'hank-dropdown',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => HankDropdownComponent)),
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HankDropdownModule {
}
HankDropdownModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HankDropdownComponent, FilterPipe],
                imports: [CommonModule, BrowserAnimationsModule, ReactiveFormsModule],
                exports: [HankDropdownComponent]
            },] }
];

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