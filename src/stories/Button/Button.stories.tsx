import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components';

const MyButtonMeta: Meta<typeof Button> = {
  title: 'MyButton',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof Button> = {};

export const AnotherExample: StoryObj<typeof Button> = {
  args: {
    text: 'Another example',
  },
};
