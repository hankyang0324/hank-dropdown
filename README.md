# Instruction

This is an Angular dropdown input box with a filter to search for the options and show them in the dropdown.

When users click the input box, it will show all the options in the dropdown. When the input box loses focus, the dropdown will collapse. When users type something in the input box, it will search for the options according to the text users input and show those options in the dropdowm. Then Click the option for the result the user want, and the dropdown will collapse.

Can implement it in the reactive form as a formControl.

# How to Use

1. run npm i hank-dropdown

2. import HankDropdownComponent from './hank-dropdown.component' to app.module.ts.

3. in your component:
```
<hank-dropdown 
    width='300'
    max-height='150'
    id='theIdforThisDropdown'
    formControlName='nameForReactiveForm' 
    placeholder='search for the opitons' 
    [options]='arrayOfString'
    [disabled]='disableIt'
    (selected)="getSelectedIdAndOptionValue($event)"
>
    title for the dropdown
</hank-dropdown>
```

# Attributes

All these attributes are optional except the options.

1. width: Set the width for the input box and dropdown. The value should be number without 'px'. The defalut width is 200px.

2. max-height: Set the max-height for the dropdown. The value should be number without 'px'. The defalut max-height is 250px.

3. id: Set the id for this dropdown. When using the (selected) attribubte to get the selected option, it will return an object including this id and the value of the selected option. The default value is empty.

4. formControlName: Used for reactive form.

5. placeholder: Placeholder for the input box

6. options: An array of string used for the options showing in the dropdown.

7. disabled: a boolean value.

8. selected: Bind it to a function to get an object including the value of the selected option from the dropdown and the id of this dropdown. 
e.g. (selected)="getSelectedIdAndOptionValue($event)" 
In your ts file: getSelectedIdAndOptionValue(option:{id:string,value:string}){...}