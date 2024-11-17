import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchAirports, fetchFlights } from './flightSlice';
import { getAirports, getFlights } from '../../api/flightApi';

jest.mock('../../api/flightApi'); 

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('flightSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ flight: { airports: [], flights: [], loading: false, error: null } });
  });

  describe('fetchAirports', () => {
    it('dispatches the correct actions on successful fetch', async () => {
      const mockResponse = [
        { id: 'JFK', title: 'John F. Kennedy International Airport', subtitle: 'New York, USA' },
        { id: 'LAX', title: 'Los Angeles International Airport', subtitle: 'Los Angeles, USA' },
      ];
      getAirports.mockResolvedValue(mockResponse);

      const expectedActions = [
        { type: 'flight/fetchAirports/pending' },
        { type: 'flight/fetchAirports/fulfilled', payload: mockResponse },
      ];

      await store.dispatch(fetchAirports('new'));
      expect(store.getActions()).toEqual(expectedActions);
      expect(getAirports).toHaveBeenCalledWith('new');
    });

    it('dispatches the correct actions on failed fetch', async () => {
      getAirports.mockRejectedValue(new Error('Failed to fetch airports'));

      const expectedActions = [
        { type: 'flight/fetchAirports/pending' },
        { type: 'flight/fetchAirports/rejected', error: expect.anything() },
      ];

      await store.dispatch(fetchAirports('new'));
      expect(store.getActions()[0].type).toEqual('flight/fetchAirports/pending');
      expect(store.getActions()[1].type).toEqual('flight/fetchAirports/rejected');
      expect(getAirports).toHaveBeenCalledWith('new');
    });
  });

  describe('fetchFlights', () => {
    it('dispatches the correct actions on successful fetch', async () => {
      const mockResponse = [
        {
          id: 'flight_1',
          price: 300,
          duration: '2h 30m',
          transitAirport: null,
        },
      ];
      getFlights.mockResolvedValue(mockResponse);

      const expectedActions = [
        { type: 'flight/fetchFlights/pending' },
        { type: 'flight/fetchFlights/fulfilled', payload: mockResponse },
      ];

      await store.dispatch(fetchFlights({ fromId: 'JFK', toId: 'LAX', departDate: '2024-11-30' }));
      expect(store.getActions()).toEqual(expectedActions);
      expect(getFlights).toHaveBeenCalledWith({
        fromId: 'JFK',
        toId: 'LAX',
        departDate: '2024-11-30',
      });
    });

    it('dispatches the correct actions on failed fetch', async () => {
      getFlights.mockRejectedValue(new Error('Failed to fetch flights'));

      const expectedActions = [
        { type: 'flight/fetchFlights/pending' },
        { type: 'flight/fetchFlights/rejected', error: expect.anything() },
      ];

      await store.dispatch(fetchFlights({ fromId: 'JFK', toId: 'LAX', departDate: '2024-11-30' }));
      expect(store.getActions()[0].type).toEqual('flight/fetchFlights/pending');
      expect(store.getActions()[1].type).toEqual('flight/fetchFlights/rejected');
      expect(getFlights).toHaveBeenCalledWith({
        fromId: 'JFK',
        toId: 'LAX',
        departDate: '2024-11-30',
      });
    });
  });
});
