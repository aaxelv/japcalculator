import axios from "axios";

export const sendData = (kcal) => () => {
  axios.post(`.netlify/functions/todos-create`, { kcal: kcal });
};
