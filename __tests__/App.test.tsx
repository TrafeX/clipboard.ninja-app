/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import App from '../App';

jest.mock('react-native-webview', () => ({WebView: 'WebView'}));

test('renders without crashing', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
