import { BottomSheet } from '@/app/components';
import useBoolean from '@/hooks/useBoolean';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
  },
  render: () => {
    const [isOpen, , open, close] = useBoolean();

    return (
      <div style={{ position: 'relative' }}>
        <button onClick={open}>바텀시트 열기</button>

        <BottomSheet isOpen={isOpen} onClose={close}>
          <div>asdf</div>
        </BottomSheet>
      </div>
    );
  },
};
