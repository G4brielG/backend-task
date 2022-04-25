const Users = require('../models').user;
const controller = {}

controller.getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({});
    if (users) {
        return res.status(200).json(users);
    } else {
      return res.status(400).json({ msg: 'No hay usuarios' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  } 
}

controller.getUser = async (req, res) => {
  try {
    const users = await Users.findByPk(req.params.id);

    if (users) {
      return res.status(200).json(users);
    } else {
      return res.status(400).json({ msg: 'El usuario no existe' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  } 
}

controller.postUser = async (req, res) => {
  try {
    const user = await Users.create({
      nombre: req.body.nombre,
      usuario: req.body.usuario,
      activo: req.body.activo
    });
    return res.status(200).json(user.toJSON());
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

controller.putUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.body.id);

    if (user) {
      await user.update(req.body);
      return res.status(200).json({ msg: 'Usuario actualizado' });
    } else {
      return res.status(400).json({ msg: 'error al actualizar usuario' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

controller.deleteUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.body.id);

    if (user) {
      await user.destroy();
      return res.status(200).json({ msg: 'Usuario eliminado' });
    } else {
      return res.status(400).json({ msg: 'El usuario no existe' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

module.exports = controller;