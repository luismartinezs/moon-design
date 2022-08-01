import { ColorProps } from '../../../../../../../packages/icons/node_modules/@heathmont/moon-themes/lib';

export type Props = {
  title: string;
  data: {
    label: string | React.ReactNode;
    code: string;
    dataKey: string;
    value: number;
  }[];
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  isUpdating?: boolean;
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  height?: string | number;
  icon?: JSX.Element;
  compact?: boolean;
  positiveColor?: ColorProps;
  negativeColor?: ColorProps;
  formatFn?: (props: { value: any; key: string }) => any;
  loaderText?: string | React.ReactNode;
};
