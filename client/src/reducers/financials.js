import produce from 'immer';
import { 
  LOAD_FINS_BEGIN,
  LOAD_FINS_SUCCESS,
  LOAD_FINS_ERROR
} from '../actions';

const initialState = {
  periods: [],
  loading: false,
  loadError: null
};
const reducer = produce((draft, action) => {
  switch(action.type) {
    case LOAD_FINS_BEGIN:
      draft.loading = true;
      draft.loadError = null;
      return;
    case LOAD_FINS_SUCCESS:
      action.payload.forEach(period => {
        draft.periods.push(period)
      })
      draft.loading = false 
      return;
    case LOAD_FINS_ERROR:
      draft.loading = false;
      draft.loadError = action.error;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;