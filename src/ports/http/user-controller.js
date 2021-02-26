const pick = require("lodash/fp/pick");
const UserRepository = require("../../infrastructure/repositories/user-repository");
const ListUsers = require("../../application/list-users")(UserRepository);
const CreateUser = require("../../application/create-user")(UserRepository);
const GetUser = require("../../application/get-user")(UserRepository);
const DeleteUser = require("../../application/remove-user")(UserRepository);
const UpdateUser = require("../../application/update-user")(UserRepository);

const UsersController = {
  listUsers: async (req, res) => {
    const users = await ListUsers();
    return users;
  },

  createUser: async (req, res) => {
    const { name, cpf, birthdate, subscription, dependents } = req.body;

    const user = await CreateUser(
      name,
      cpf,
      birthdate,
      subscription,
      dependents
    );

    res.code(201).send(user);
  },

  findUser: async (req, res) => {
    const user = await GetUser(req.params.id);
    return user;
  },

  deleteUser: async (req, res) => {
    const user = await DeleteUser(req.params.id);
    return user;
  },

  updateUser: async (req, res) => {
    const permitted = [
      "name",
      "cpf",
      "birthdate",
      "subscription",
      "dependents",
    ];

    const user = await UpdateUser(req.params.id, pick(permitted, req.body));
    return user;
  },
};

module.exports = UsersController;
