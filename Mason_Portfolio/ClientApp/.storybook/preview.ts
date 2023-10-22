import React from 'react';
import type { Preview } from "@storybook/react";
import '../src/custom.scss';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import {library} from '@fortawesome/fontawesome-svg-core'

library.add(fas);
library.add(fab);



const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};



export default preview;
