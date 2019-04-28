import { OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class HankDropdownComponent implements OnInit, ControlValueAccessor {
    id: string;
    options: any[];
    placeholder: string;
    disabled: boolean;
    width: string;
    maxHeight: string;
    selected: EventEmitter<{
        id: string;
        value: string;
    }>;
    search: string;
    showDropdown: string;
    dropdownWidth: string;
    ngOnInit(): void;
    show(): void;
    hide(): void;
    detectInput(event: Event): void;
    select(option: string): void;
    onChange: (value: any) => void;
    onTouched: () => void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: any): void;
}
