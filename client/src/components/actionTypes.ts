export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

interface SignUpRequestAction {
  type: typeof SIGNUP_REQUEST;
}

interface SignUpSuccessAction {
  type: typeof SIGNUP_SUCCESS;
}

interface SignUpFailureAction {
  type: typeof SIGNUP_FAILURE;
  error: string;
}

export type SignUpActionTypes =
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailureAction;

export const signUpRequest = () => ({
  type: SIGNUP_REQUEST,
});

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signUpFailure = (error: string) => ({
  type: SIGNUP_FAILURE,
  error,
});