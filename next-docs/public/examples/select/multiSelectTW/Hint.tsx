import { MultiSelect } from '@heathmont/moon-core-tw';
import {useState} from "react";

const Example = () => {
  const [value, setValue] = useState(['one']);

  return (<div className="flex flex-col gap-y-3 mb-[150px]">
    <MultiSelect
      value={value}
      label='Hint slot'
      placeholderSlot='Placeholder slot'
      hintSlot='Informative message holder'
      options={[
        { value: 'one', element: 'One', label: 'One' },
        { value: 'two', element: 'Two', label: 'Two' },
        { value: 'three', element: 'Three', label: 'Three' },
      ]}
      onChange={(newValue: string[]) => {
        setValue(newValue);
        console.log('Change happened - ', newValue)
      }}
    />
  </div>);
};

export default Example;
