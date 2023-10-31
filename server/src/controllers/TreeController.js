const { Tree } = require("../models");

module.exports = {
  // get all tree
  async index(req, res) {
    try {
      const tree = await Tree.findAll();
      res.send(tree);
    } catch (err) {
      res.status(500).send({
        error: "The Tree information was incorrect",
      });
    }
  },
  // create tree
  async create(req, res) {
    try {
      const tree = await Tree.create(req.body);
      res.send(tree.toJSON());
    } catch (err) {
      res.status(500).send({
        error: "Create Tree incorrect",
      });
    }
  },
  // edit tree, active
  async put(req, res) {
    try {
      await Tree.update(req.body, {
        where: {
          id: req.params.treeId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "Update Tree incorrect",
      });
    }
  },
  // delete tree
  async remove(req, res) {
    try {
      const tree = await Tree.findOne({
        where: {
          id: req.params.treeId,
        },
      });

      if (!tree) {
        return res.status(403).send({
          error: "The Tree information was incorrect",
        });
      }

      await tree.destroy();
      res.send(tree);
    } catch (err) {
      res.status(500).send({
        error: "The Tree information was incorrect",
      });
    }
  },

  // get tree by id
  async show(req, res) {
    try {
      const tree = await Tree.findByPk(req.params.treeId);
      res.send(tree);
    } catch (err) {
      res.status(500).send({
        error: "The Tree information was incorrect",
      });
    }
  },
};
