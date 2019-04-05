import produce from 'immer';
import { 
  ADD_COMPANY_BEGIN,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_ERROR,
  LOAD_COMPANIES_BEGIN,
  LOAD_COMPANIES_SUCCESS,
  LOAD_COMPANIES_ERROR
} from '../actions';

const initialState = {
  list: [],
  saving: false,
  saveError: null,
  loading: false,
  loadError: null

};
const reducer = produce((draft, action) => {
  switch(action.type) {
    case ADD_COMPANY_BEGIN:
      draft.saving = true;
      draft.saveError = null;
      return;
    case ADD_COMPANY_SUCCESS:
      draft.list.push(action.payload);
      draft.saving = false;
      return;
    case ADD_COMPANY_ERROR:
      draft.saving = false;
      draft.saveError = action.error;
      return;
    case LOAD_COMPANIES_BEGIN:
      draft.loading = true;
      draft.loadError = null;
      return;
    case LOAD_COMPANIES_SUCCESS:
      draft.list = action.payload;
      draft.loading = false;
      return;
    case LOAD_COMPANIES_ERROR:
      draft.loading = false;
      draft.loadError = action.error;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;