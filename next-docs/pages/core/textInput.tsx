import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Bg from '../../public/examples/textInputTW/Bg';
import Date from '../../public/examples/textInputTW/Date';
import DateTime from '../../public/examples/textInputTW/DateTime';
import Default from '../../public/examples/textInputTW/Default';
import Disabled from '../../public/examples/textInputTW/Disabled';
import Email from '../../public/examples/textInputTW/Email';
import Error from '../../public/examples/textInputTW/Error';
import Hint from '../../public/examples/textInputTW/Hint';
import Number from '../../public/examples/textInputTW/Number';
import Password from '../../public/examples/textInputTW/Password';
import Readonly from '../../public/examples/textInputTW/Readonly';
import Search from '../../public/examples/textInputTW/Search';
import Sizes from '../../public/examples/textInputTW/Sizes';
import SizesRTL from '../../public/examples/textInputTW/SizesRTL';
import Telephone from '../../public/examples/textInputTW/Telephone';
import Time from '../../public/examples/textInputTW/Time';
import Url from '../../public/examples/textInputTW/Url';
import WithoutLabel from '../../public/examples/textInputTW/WithoutLabel';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('textInputTW');
  return (
    <>
      <ComponentPageDescription title="TextInput">
        <p>
          Indeed, forms require input from all users, including astronauts. Text
          input fields help to gather both short and long-form information. The
          size of the text field should correspond to the length of information
          that's required.
        </p>
        <p>
          Text input fields can contain various rules to ensure the right
          information is obtained from users. Users should also be given prompts
          to guide them on what's needed, or if they've made an error while
          doing so.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="Error"
        preview={<Error />}
        code={examples ? examples.Error : 'Loading'}
      />
      <Preview
        title="Readonly"
        preview={<Readonly />}
        code={examples ? examples.Readonly : 'Loading'}
      />
      <Preview
        title="Sizes RTL"
        preview={<SizesRTL />}
        code={examples ? examples.SizesRTL : 'Loading'}
      />
      <Preview
        title="Without Label"
        preview={<WithoutLabel />}
        code={examples ? examples.WithoutLabel : 'Loading'}
      />
      <Preview
        title="Hint message"
        preview={<Hint />}
        code={examples ? examples.Hint : 'Loading'}
      />
      <Preview
        title="Input with background color"
        preview={<Bg />}
        code={examples ? examples.Bg : 'Loading'}
      />
      <h3 className="text-moon-24 font-medium">Text input types</h3>
      <Preview
        title="Number"
        preview={<Number />}
        code={examples ? examples.Number : 'Loading'}
      />
      <Preview
        title="Date"
        preview={<Date />}
        code={examples ? examples.Date : 'Loading'}
      />
      <Preview
        title="Time"
        preview={<Time />}
        code={examples ? examples.Time : 'Loading'}
      />
      <Preview
        title="Date Time"
        preview={<DateTime />}
        code={examples ? examples.DateTime : 'Loading'}
      />
      <Preview
        title="Email"
        preview={<Email />}
        code={examples ? examples.Email : 'Loading'}
      />
      <Preview
        title="Password"
        preview={<Password />}
        code={examples ? examples.Password : 'Loading'}
      />
      <Preview
        title="Search"
        preview={<Search />}
        code={examples ? examples.Search : 'Loading'}
      />
      <Preview
        title="Telephone"
        preview={<Telephone />}
        code={examples ? examples.Telephone : 'Loading'}
      />
      <Preview
        title="Url"
        preview={<Url />}
        code={examples ? examples.Url : 'Loading'}
      />
      <PropsTable
        title="TextInput props"
        data={[
          {
            name: 'bgColor',
            type: 'string',
            required: false,
            default: 'transparent',
            description: 'Background colour',
          },
          {
            name: 'dir',
            type: 'ltr | rtl | auto',
            required: false,
            default: '-',
            description: 'RTL/LTR direction of label',
          },
          {
            name: 'hintText',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Informative/error message below input',
          },
          {
            name: 'id',
            type: 'string',
            required: false,
            default: '-',
            description: 'Sets input id',
          },
          {
            name: 'inputSize',
            type: 'md | lg | xl',
            required: false,
            default: 'md',
            description: 'Input size',
          },
          {
            name: 'isError',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Sets error state for input',
          },
          {
            name: 'isFirst',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Sets input styles as the first in a group',
          },
          {
            name: 'isSharpBottomSide',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Removes border roundness from the bottom',
          },
          {
            name: 'isSharpLeftSide',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Removes border roundness from the left',
          },
          {
            name: 'isSharpRightSide',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Removes border roundness from the right',
          },
          {
            name: 'isSharpTopSide',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Removes border roundness from the top',
          },
          {
            name: 'isSideBorderHidden',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Removes vertical borders',
          },
          {
            name: 'isTopBottomBorderHidden',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Removes horizontal borders',
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Label for input',
          },
          {
            name: 'placeholder',
            type: 'string',
            required: false,
            default: '-',
            description: 'Placeholder for input',
          },
          {
            name: 'showPasswordText',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description:
              'Input type password only. Text for show/hide password',
          },
          {
            name: 'type',
            type: 'date | datetime-local | email | number | password | search | tel | text | time | url',
            required: false,
            default: 'text',
            description: 'Input type',
          },
        ]}
      />
    </>
  );
};

export default Example;
