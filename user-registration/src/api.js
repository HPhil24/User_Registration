export const getUsers = () => fetch("http://localhost:4000/").then(res => res.json());
