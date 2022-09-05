import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import SubscriptionComponent from '../../components/UI/SubscriptionComponent';
import store from "../../redux/store";

const renderWithRedux = (
  component
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

afterEach(cleanup);

it('checks component is rendered or not with redux', () => {
  const { getByTestId } = renderWithRedux(<SubscriptionComponent />)
  // test subscription/fastlane component rendered or not
  expect(getByTestId('fastlaneId')).toBeInTheDocument();
  })