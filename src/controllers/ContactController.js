const Contact = require("../models/Contact");

class ContactController {
  index(req, res) {
    const contacts = Contact.getAll();

    res.render("list", { contacts });
  }

  create(req, res) {
    res.render("create");
  }

  store(req, res) {
    const { name, email, bio } = req.body;

    Contact.save({ name, email, bio });

    res.redirect("/contacts");
  }

  edit(req, res) {
    const { id } = req.params;
    const contact = Contact.getById(id);
    res.render("edit", { contact });
  }

  update(req, res) {
    const { id, name, email, bio } = req.body;

    const contact = Contact.getById(id);

    Contact.update({ ...contact, name, email, bio });

    res.redirect("/contacts");
  }

  destroy(req, res) {
    const { id } = req.body;

    Contact.delete(id);

    res.redirect("/contacts");
  }
}

module.exports = new ContactController();
