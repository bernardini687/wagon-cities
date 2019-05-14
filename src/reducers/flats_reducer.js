export default function(state, action) {
  // compute
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
}
