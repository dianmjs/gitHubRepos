import axios from "axios";

//constantes
const initialState = {
  data: {},
  previous: null,
  next: null,
};

//types
const USUARIO_EXITO = "USUARIO_EXITO";
const INFO_USUARIO = "INFO_USUARIO";
const POST_USUARIO = "POST_USUARIO";
const SIGUIENTE_REPO = "SIGUIENTE_REPO";

//reducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USUARIO_EXITO:
      return { ...state, data: action.payload };
    case INFO_USUARIO:
      return { ...state, info: action.payload };
    default:
      return state;
  }
}

//actions
export const obtenerUsuarioAccion = (user) => async (dispatch, getState) => {
  console.log("getState", getState());
  const url = `https://api.github.com/users/${user}`;

  try {
    const res = await axios.get(url);
    console.log("api user", res);
    dispatch({
      type: USUARIO_EXITO,
      payload: {
        avatar: res.data.avatar_url,
        nombre: res.data.name,
        alias: res.data.login,
        profile: res.data.bio,
        compañia: res.data.company,
        location: res.data.location,
        blog: res.data.blog,
      },
    });
  } catch (error) {
    console.log("usuario error", error);
  }
};
export const infoUserAccion = (user) => async (dispatch, getState) => {
  const url = `https://api.github.com/users/${user}`;
  try {
    const res = await axios.get(url);
    console.log(res.data);
    dispatch({
      type: INFO_USUARIO,
      payload: {
        avatar: res.data.avatar_url,
        nombre: res.data.name,
        alias: res.data.login,
        profile: res.data.bio,
        compañia: res.data.company,
        location: res.data.location,
        blog: res.data.blog,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
