/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');

const cwd = process.cwd();
const origin = process.argv[2];
const storyTitle = path.basename(origin, '.tsx');
const originProps = `I${storyTitle}Props`;
const pathName = path.join(cwd, path.dirname(origin), 'stories', storyTitle + '.stories.tsx');

const content = `import React from 'react';

import ${storyTitle}, { ${originProps} } from '../${storyTitle}';
import { IStory } from '../../types';

export default {
  title: '${storyTitle}',
  component: ${storyTitle}
};

const Template: IStory<${originProps}> = args => <${storyTitle} {...args} />;

export const Default = Template.bind({});
Template.args = {

}`;

fs.writeFileSync(pathName, content);
console.log(`Created ${pathName}`);