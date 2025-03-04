import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput type="number" label="Medium (md)" placeholder="e.g. 1234" />
    <TextInput
      type="number"
      inputSize="lg"
      label="Large (lg)"
      placeholder="e.g. 1234"
    />
    <TextInput
      type="number"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="e.g. 1234"
    />
  </div>
);

export default Example;
