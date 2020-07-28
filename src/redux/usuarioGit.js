import axios from "axios";

//constantes
const initialState = {
  data: [],
  page: 0,
  next: null,
};

//types
//const USUARIO_EXITO = "USUARIO_EXITO";
const INFOREPOS_USUARIO = "INFOREPOS_USUARIO";
//const POST_USUARIO = "POST_USUARIO";
const SIGUIENTE_REPO = "SIGUIENTE_REPO";

//reducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGUIENTE_REPO:
      return {
        ...state,
        array: action.payload.array,
        page: action.payload.page,
      };
    case INFOREPOS_USUARIO:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

//actions
export const siguientePostAccion = () => async (dispatch, getState) => {
  const { page } = getState().userGit;
  const siguiente = page + num;

  const url = `https://api.github.com/user/repos?page=${siguiente}&per_page=100`;

  try {
    const res = await axios.get(url);
    console.log("api user", res);
    dispatch({
      type: SIGUIENTE_REPO,
      payload: {
        array: res.data,
        page: siguiente,
      },
    });
  } catch (error) {
    console.log("usuario error", error);
  }
};
export const infoReposAccion = (user) => async (dispatch, getState) => {
  const url = `https://api.github.com/users/${user}/repos`;

  try {
    const res = await axios.get(url);
    console.log("repos api", res.data);
    dispatch({
      type: INFOREPOS_USUARIO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
