const rest = {};

rest.getDates = async (user) => {
  const data = await fetch(`https://api.github.com/users/${user}`);
  const userData = await data.json();
  return userData;
};

rest.getRepo = async (user) => {
  const data = await fetch(`https://api.github.com/users/${user}/repos`);
  const repos = await data.json();
  return repos;
};

export default rest;
