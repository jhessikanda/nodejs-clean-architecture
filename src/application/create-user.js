const User = require("../domain/user");

module.exports = (UserRepository) => (
  name,
  cpf,
  birthdate,
  subscription,
  dependents
) => {
  const user = new User(null, name, cpf, birthdate, subscription, dependents);
  return UserRepository.save(user);
};
