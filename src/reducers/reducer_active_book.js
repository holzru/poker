// State arguemnet is not app state only state that reducer is responsible for, like variable passed to function
export default function(state, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  
  return state;
}
