import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="password"
      label="Medium (md)"
      placeholder="Password"
      showPasswordText="Show"
    />
    <TextInput
      type="password"
      inputSize="lg"
      label="Large (lg)"
      placeholder="Password"
      showPasswordText="Show"
    />
    <TextInput
      type="password"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="Password"
      showPasswordText="Show"
    />
  </div>
);

export default Example;
