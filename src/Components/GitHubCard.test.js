import React from 'react';
import renderer from 'react-test-renderer';
import GitHubCard from './GitHubCard';

describe('GitHubCard', () => {
  it('renders a snapshot', () => {
    const userData = {
      avatar_url: 'https://example.com/avatar.png',
      login: 'testuser',
      html_url: 'https://github.com/testuser',
      bio: 'This is a test bio'
    };
    const tree = renderer.create(<GitHubCard userData={userData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
