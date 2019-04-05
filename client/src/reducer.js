import produce from 'immer';
import { 
  ADD_COMPANY_BEGIN,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_ERROR,
  LOAD_COMPANIES_BEGIN,
  LOAD_COMPANIES_SUCCESS,
  LOAD_COMPANIES_ERROR,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL
} from './actions';

const initialState = {
  list: [],
  saving: false,
  saveError: null,
  loading: false,
  loadError: null,
  user: null,
  loginModalOpen: false,
  loggingIn: false,
  loginError: null
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
    case LOGIN_BEGIN:
    case SIGNUP_BEGIN:
      draft.user = null;
      draft.loggingIn = true;
      draft.loginError = null;
      return;
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      draft.user = action.payload;
      draft.loggingIn = false;
      draft.loginModalOpen = false;
      return;
    case SIGNUP_ERROR:
    case LOGIN_ERROR:
      draft.loggingIn = false;
      draft.loginError = action.error;
      return;
    case OPEN_LOGIN_MODAL:
      draft.loginModalOpen=true;
      return;
    case CLOSE_LOGIN_MODAL:
      draft.loginModalOpen=false;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;