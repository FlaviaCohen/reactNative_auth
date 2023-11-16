import axios from "axios";

export const getMessage = async (token) => {
  const response = await axios.get(
    `${process.env.DB_URL}/message.json?auth=${token}`
  );
  return response.data;
};
