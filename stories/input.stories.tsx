import { Input } from '@/app/components';
import { TRAVEL_DESTINATION_VALIDATION } from '@/lib/constants/validation';
import type { Meta, StoryObj } from '@storybook/react';
import { Controller, useForm } from 'react-hook-form';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 465 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ProfileInput: Story = {
  render: () => {
    const { control } = useForm({ mode: 'onChange' });

    return (
      <Controller
        name="name"
        control={control}
        rules={TRAVEL_DESTINATION_VALIDATION}
        render={({
          field: { name, value = '', onChange },
          fieldState: { error },
        }) => (
          <Input
            id={name}
            title="여행지"
            helpText="1~35자 입력할 수 있어요."
            validText="좋은 여행지를 갔군요!"
            value={value}
            error={error}
            onChange={onChange}
            validStyle
          />
        )}
      />
    );
  },
};
