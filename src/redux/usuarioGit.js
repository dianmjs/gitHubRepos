import axios from "axios";

//constantes
const initialState = {
  data: [],
  previous: null,
  next: null,
};

//types
const USUARIO_EXITO = "USUARIO_EXITO";
const POST_USUARIO = "POST_USUARIO";
const SIGUIENTE_REPO = "SIGUIENTE_REPO";

//reducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

//actions
