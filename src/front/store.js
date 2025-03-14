// Initial store state
export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
    store: {
      token: null,
      isSignupSuccessful: false,
      isLoginSuccessful: false,
      login: false,
    },
  };
};

// Action Types
export const actionTypes = {
  SET_HELLO: "set_hello",
  ADD_TASK: "add_task",
  HANDLE_SIGNUP_SUCCESS: "handle_signup_success",
  HANDLE_SIGNUP_FAILURE: "handle_signup_failure",
  HANDLE_LOGIN_SUCCESS: "handle_login_success",
  HANDLE_LOGIN_FAILURE: "handle_login_failure",
};

// Reducer
export default function storeReducer(state = initialStore, action) {
  switch (action.type) {
    case actionTypes.SET_HELLO:
      return {
        ...state,
        message: action.payload,
      };

    case actionTypes.ADD_TASK:
      const { id, color } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };

    case actionTypes.HANDLE_SIGNUP_SUCCESS:
      return {
        ...state,
        store: {
          ...state.store,
          isSignupSuccessful: true,
          token: action.payload.token,
        },
      };

    case actionTypes.HANDLE_SIGNUP_FAILURE:
      return {
        ...state,
        store: {
          ...state.store,
          isSignupSuccessful: false,
        },
      };

      case actionTypes.HANDLE_LOGIN_SUCCESS:
        return {
          ...state,
          store: {
            ...state.store,
            isLoginSuccessful: true
          }
        }

      case actionTypes.HANDLE_LOGIN_FAILURE:
        return {
          ...state,
          store: {
            ...state.store,
            login: false,
          },
        };

    default:
      console.error("Unknown action:", action);
      return state;
  }
}



// Signup Handler
export const handleSignup = (email, password, dispatch) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  fetch(`${backendURL}` +"/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        dispatch({
          type: actionTypes.HANDLE_SIGNUP_SUCCESS,
          payload: { token: data.token },
        });
      } else {
        dispatch({
          type: actionTypes.HANDLE_SIGNUP_FAILURE,
        });
      }
    })
    .catch((error) => {
      console.error("Error signing up:", error);
      dispatch({
        type: actionTypes.HANDLE_SIGNUP_FAILURE,
      });
    });
};

// log in handler
export const handleLogin = (email, password, dispatch) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  fetch(`${backendURL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to log in");
      }
      return response.json();
    })
    .then((data) => {
      if (data.access_token) {
        sessionStorage.setItem("token", data.access_token);
        dispatch({
          type: actionTypes.HANDLE_LOGIN_SUCCESS,
          payload: { token: data.access_token },
        });
      } else {
        dispatch({ type: actionTypes.HANDLE_LOGIN_FAILURE });
      }
    })
    .catch((error) => {
      console.error("Error logging in:", error);
      dispatch({ type: actionTypes.HANDLE_LOGIN_FAILURE });
    });
};