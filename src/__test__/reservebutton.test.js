import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

describe('Testing reserve button', () => {
  test('Pressing the button', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const reserveButton = await screen.findAllByText('Reserve Rocket');
    userEvent.click(reserveButton[0]);
    const cancelButton = await screen.findByText('Cancel Reservation');
    await waitFor(() => expect(cancelButton.classList.contains('rocket-cancel-btn')).toBeTruthy());
  });

  test('Check if My profile add the reservation', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const reserveButton = await screen.findAllByText('Reserve Rocket');
    userEvent.click(reserveButton[0]);
    const myProfile = await screen.findByText('My Profile');
    userEvent.click(myProfile);
    const rocketName = await screen.findByText('Falcon 1');
    await waitFor(() => expect(rocketName.classList.contains('rockets-li')).toBeTruthy());
  });
});

describe('Testing Mission join button', () => {
  test('Pressing the Join button', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const myMission = await screen.findByText('Missions');
    userEvent.click(myMission);
    const joinButtons = await screen.findAllByText('Join Mission');
    userEvent.click(joinButtons[0]);
    await waitFor(() => expect(joinButtons[0].textContent).toEqual('Leave Mission'));
  });
  test('Check if My profile add the Mission', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const myMission = await screen.findByText('Missions');
    userEvent.click(myMission);
    const joinButtons = await screen.findAllByText('Join Mission');
    userEvent.click(joinButtons[0]);
    const myProfile = await screen.findByText('My Profile');
    userEvent.click(myProfile);
    const missionName = await screen.findByText('Thaicom');
    await waitFor(() => expect(missionName.classList.contains('rockets-li')).toBeTruthy());
  });
});
