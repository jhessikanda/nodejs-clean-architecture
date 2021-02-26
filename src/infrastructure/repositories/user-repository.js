const MONGO_ALREADY_EXISTS = 11000;
const User = require("../../domain/user");
const UserSchema = require("../database/schemas/user");

const find = async () => UserSchema.find();

const save = async (user) => {
  const { name, cpf, birthdate, subscription, dependents } = user;
  const mongooseUser = new UserSchema({
    name,
    cpf,
    birthdate,
    subscription,
    dependents,
  });

  try {
    await mongooseUser.save();
    return new User(
      mongooseUser.id,
      mongooseUser.name,
      mongooseUser.cpf,
      mongooseUser.birthdate,
      mongooseUser.subscription,
      mongooseUser.dependents
    );
  } catch (err) {
    if (err.code === MONGO_ALREADY_EXISTS) {
      throw new Error("This CPF already exists");
    }
  }
};

const get = async (id) => {
  const mongooseUser = await UserSchema.findById(id);
  if (!mongooseUser) throw new Error("User not found");

  return new User(
    mongooseUser.id,
    mongooseUser.name,
    mongooseUser.cpf,
    mongooseUser.birthdate,
    mongooseUser.subscription,
    mongooseUser.dependents
  );
};

const merge = async (id, data) => {
  try {
    const user = await UserSchema.findByIdAndUpdate(id, data, { new: true });

    return new User(
      user.id,
      user.name,
      user.cpf,
      user.birthdate,
      user.subscription,
      user.dependents
    );
  } catch (err) {
    if (err.name === "CastError") {
      throw new Error("User not found");
    } else if (err.code === MONGO_ALREADY_EXISTS) {
      throw new Error("This CPF already exists");
    } else {
      throw err;
    }
  }
};

const remove = async (id) => {
  const mongooseUser = await UserSchema.findOneAndDelete({ _id: id });
  if (!mongooseUser) {
    throw new Error("User not found");
  }

  return mongooseUser;
};

module.exports = {
  get,
  find,
  save,
  merge,
  remove,
};
