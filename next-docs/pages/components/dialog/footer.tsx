import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import ButtonMd from '../../../public/examples/dialog/footer/ButtonMd';
import ButtonSm from '../../../public/examples/dialog/footer/ButtonSm';
import Size from '../../../public/examples/dialog/footer/Size';
import useExamples from '../../../utils/useExamples';

export default function PageDialogFooter() {
  const examples = useExamples('dialog/footer');
  return (
    <>
      <ComponentPageDescription title="Dialog Footer">
        <p>
          Footer is a confirmatiuon module to be used in the Dialogs: Modal,
          Popover and the Multi select Dropdown
        </p>
      </ComponentPageDescription>
      <Preview
        title="Buttons size: xs"
        preview={<ButtonSm />}
        code={examples ? examples.ButtonXs : 'Loading'}
      />
      <Preview
        title="Buttons size: sm"
        preview={<ButtonMd />}
        code={examples ? examples.ButtonSm : 'Loading'}
      />
      <Preview
        title="Size and Divider"
        preview={<Size />}
        code={examples ? examples.Size : 'Loading'}
      />
      <PropsTable
        title="Props for Dialog Footer component"
        data={[
          {
            name: 'primButton',
            type: 'JSX.Element',
            required: false,
            default: '-',
            description: 'Button element',
          },
          {
            name: 'secButton',
            type: 'JSX.Element',
            required: false,
            default: '-',
            description: 'Button element',
          },
          {
            name: 'tertButton',
            type: 'JSX.Element',
            required: false,
            default: '-',
            description: 'Button element',
          },
          {
            name: 'isDivider',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Add border top for footer',
          },
          {
            name: 'size',
            type: 'small | medium',
            required: false,
            default: '-',
            description: 'Set paddings around footer',
          },
        ]}
      />
    </>
  );
}
