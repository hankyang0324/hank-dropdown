# Instruction

This is an Angular dropdown input box with a filter to search for the options showing below.
Click the option for the result the user want.
Can implement it in the reactive form as a formControl.

# How to Use

1.run npm i hank-dropdown

2.import HankDropdownComponent from './hank-dropdown.component' to app.module.ts.

3.in your component:
```
<hank-dropdown 
    width='300'
    max-height='150'
    id='theIdforThisDropdown'
    formControlName='nameForReactiveForm' 
    placeholder='search for the opitons' 
    [options]='array'
    (selected)="getSelectedIdAndOptionValue($event)"
    [disabled]
>
    title for the dropdown
</hank-dropdown>
```