import React from 'react';
import { TestComponent } from '../../../../src/components';
import { storiesOf } from '@storybook/react-native';

storiesOf('TestComponent', module)
  .add('basic test', () => <TestComponent />)
  .add('outra historia', () => <TestComponent />);
