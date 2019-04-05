import produce from 'immer';
import { 
  ADD_COMPANY_BEGIN,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_ERROR
} from './actions';

const initialState = {
  list: [],
  loading: false,
  error: null
};
const reducer = produce((draft, action) => {
  switch(action.type) {
    case ADD_COMPANY_BEGIN:
      draft.loading = true;
      draft.error = null;
      return;
    case ADD_COMPANY_SUCCESS:
      draft.list.push(action.payload);
      draft.loading = false;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;