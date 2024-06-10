import { Dialog, DialogLogout } from '@/app/components';
import UseDialog from '@/hooks/use-dialog';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Dialog',
  component: Dialog,
  parameters: {
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Delete: Story = {
  args: {
    isOpen: false,
    children: <DialogLogout />,
  },
  render: () => {
    const { isDialogOpen, setIsDialogOpen, dialogOutsideClick, dialogRef } =
      UseDialog();
    const handleCloseLogoutDialog = () => {
      setIsDialogOpen(false);
    };
    return (
      <>
        <button
          type="button"
          className="w-200pxr p-8pxr h-115pxr bg-primary300 text-white"
          onClick={() => setIsDialogOpen(true)}
        >
          로그아웃하기
        </button>
        <Dialog
          isOpen={isDialogOpen}
          dialogOutsideClick={dialogOutsideClick}
          dialogRef={dialogRef}
        >
          <DialogLogout onClose={handleCloseLogoutDialog} />
        </Dialog>
      </>
    );
  },
};
