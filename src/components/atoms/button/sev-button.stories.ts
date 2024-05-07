import type { Meta, StoryObj } from '@storybook/vue3';
import SevButton from './sev-button.vue';

const meta = {
  title: 'Atoms/Button',
  component: SevButton,
  tags: [
    'autodocs',
  ],
  argTypes: {
    kind: {
      control: 'select',
      options: [
        'default',
        'outline',
      ],
    },
  },
  args: {
    kind: 'default',
  },
} satisfies Meta<typeof SevButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default',
  },
};

export default meta;
