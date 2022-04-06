import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import RocketsList from '../components/rockets/RocketsList';
import store from '../redux/configureStore';
import MissionList from '../components/missions/MissionList';
import Profile from '../components/profile/Profile';

describe('Testing Components', () => {
  test('Render Header', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render Rockets section', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <RocketsList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render Missions section', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MissionList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Render Profile section', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
