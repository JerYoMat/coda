import produce from 'immer';
import { 
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL
} from '../actions';

const initialState = {
  user: null,
  loginModalOpen: false,
  loggingIn: false,
  loginError: null
};
const reducer = produce((draft, action) => {
  switch(action.type) {
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