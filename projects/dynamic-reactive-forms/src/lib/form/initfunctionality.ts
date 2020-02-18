import { IFormElementDefinition } from './form-element-definition';
import { Functionality } from 'custom-exp';
import { FormDefinition } from './form-definition';
import { ArrayField } from './fields/array-field-element';
import { CheckboxField } from './fields/checkbox-field-element';
import { InputField } from './fields/input-field-element';
import { RadioGroupField } from './fields/radio-group-field-element';
import { SliderField } from './fields/slider-field-element';
import { SlideField } from './fields/slide-field-element';
import { SelectField } from './fields/select-field-element';

export function InitFunctionality(thisElement: IFormElementDefinition, form: FormDefinition): Functionality {
    const result = new Functionality();
    addElementField(result, thisElement, 'this');
    form.elements.forEach(element => addElementField(result, element));
    ArrayField.addFunctionality(result);
    CheckboxField.addFunctionality(result);
    InputField.addFunctionality(result);
    RadioGroupField.addFunctionality(result);
    SliderField.addFunctionality(result);
    SlideField.addFunctionality(result);
    SelectField.addFunctionality(result);
    return result;
}


function addElementField(functionality: Functionality, element: IFormElementDefinition, customId?: string): void {
    functionality.addField({
        name: customId ? customId : element.id,
        eval: () => ({
            type: `${element.type}-field`,
            value: element,
        }),
    });
}
