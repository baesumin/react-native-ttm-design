import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../components';

const TypographyMeta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  decorators: [(Story) => <Story />],
};

export default TypographyMeta;

export const Basic: StoryObj<typeof Typography> = {
  args: {
    text: 'SK 행복공간',
    variant: 'SH',
  },
};

export const AllTypographt: StoryObj<typeof Typography> = {
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
    text: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col">
          <Story args={{ text: 'Special Heading', variant: 'SH' }} />
          <Story args={{ text: 'Heading H1', variant: 'H1' }} />
          <Story args={{ text: 'Heading H2', variant: 'H2' }} />
          <Story args={{ text: 'Heading H3', variant: 'H3' }} />
          <Story args={{ text: 'Heading H4', variant: 'H4' }} />
          <Story args={{ text: 'Heading H5', variant: 'H5' }} />
          <Story args={{ text: 'Heading H6', variant: 'H6' }} />
          <Story args={{ text: 'Heading H7', variant: 'H7' }} />
          <Story args={{ text: 'Heading H8', variant: 'H8' }} />
          <Story args={{ text: 'Body B1', variant: 'Body1' }} />
          <Story args={{ text: 'Body B2', variant: 'Body2' }} />
          <Story args={{ text: 'Body B3', variant: 'Body3' }} />
          <Story args={{ text: 'Body B4', variant: 'Body4' }} />
          <Story args={{ text: 'Body B5', variant: 'Body5' }} />
          <Story args={{ text: 'Body B6', variant: 'Body6' }} />
        </div>
      );
    },
  ],
};
