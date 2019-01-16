import SET_LOCATION from 'Root/types/location';

const setLocation = newLocation => ({ type: SET_LOCATION, payload: { city: newLocation } });

export default setLocation;
