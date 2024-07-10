import type { Meta, StoryObj } from '@storybook/react';
import { SocialButton } from '@/app/components';

const meta = {
  title: 'UI/SocialButton',
  component: SocialButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Kakao: Story = {
  args: {
    type: 'kakao',
  },
};

export const Naver: Story = {
  args: {
    type: 'naver',
  },
};

export const Google: Story = {
  args: {
    type: 'google',
  },
};

export const Apple: Story = {
  args: {
    type: 'apple',
  },
};
