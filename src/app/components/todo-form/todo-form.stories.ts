import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { TodoFormComponent } from './todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

export default {
  title: 'Components/TodoForm',
  component: TodoFormComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}, {}), // <-- empty store just to resolve dependency
      ],
    }),
  ],
} as Meta<TodoFormComponent>;

const Template: Story<TodoFormComponent> = (args: TodoFormComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

