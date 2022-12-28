import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RefDidntReRenderView } from "../ref-didnt-re-render/RefDidntReRenderView"

export default {
  title: 'RefDidntReRenderStory',
  component: RefDidntReRenderView,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RefDidntReRenderView>;

const Template: ComponentStory<typeof RefDidntReRenderView> = () => <RefDidntReRenderView/>;

export const Primary = Template.bind({});
