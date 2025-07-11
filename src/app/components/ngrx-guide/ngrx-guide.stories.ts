import type { Meta, StoryObj } from '@storybook/angular';
import { NgrxGuideComponent } from './ngrx-guide.component';

const meta: Meta<NgrxGuideComponent> = {
  title: 'Components/NgrxGuide',
  component: NgrxGuideComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<NgrxGuideComponent>;

export const Default: Story = {
  args: {}
};

export const WithRouter: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The NgRx guide component with routing capabilities'
      }
    }
  }
}; 