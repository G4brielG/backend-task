const Tasks = require('../models').task;
const controller = {}

controller.getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll({});
    if (tasks) {
      return res.status(200).json(tasks);
    } else {
      return res.status(400).json({ msg: 'El usuario no existe' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

controller.getTask = async (req, res) => {
  try {
    const task = await Tasks.findByPk(req.params.id);

    if (task) {
      return res.status(200).json(task);
    } else {
      return res.status(400).json({ msg: 'La tarea no existe' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  } 
}

controller.postTask = async (req, res) => {
  try {
    const tasks = await Tasks.create({
      nombre: req.body.descripcion,
      usuario: req.body.estado,
      activo: req.body.nivel,
      user_id: req.body.user_id
    });
    return res.status(200).json(tasks.toJSON());
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

controller.putTask = async (req, res) => {
  try {
    const task = await Tasks.findByPk(req.body.id);

    if (task) {
      await user.update(req.body);
      return res.status(200).json({ msg: 'Tarea actualizada' });
    } else {
      return res.status(400).json({ msg: 'Error al actualizar tarea' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

controller.deleteTask = async (req, res) => {
  try {
    const task = await Tasks.findByPk(req.body.id);

    if (task) {
      await usuario.destroy();
      return res.status(200).json({ msg: 'Tarea eliminada' });
    } else {
      return res.status(400).json({ msg: 'La tarea no existe' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

module.exports = controller;