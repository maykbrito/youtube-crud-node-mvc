const crypto = require("crypto");
const db = require("../config/db");

class Contact {
  getAll() {
    return db.get("contacts");
  }

  getById(id) {
    return db
      .get("contacts")
      .find({ id })
      .value();
  }

  save(contact) {
    const id = crypto.randomBytes(6).toString("hex");

    return db
      .get("contacts")
      .push({ id, ...contact })
      .write();
  }

  update(contact) {
    return db
      .get("contacts")
      .find({ id: contact.id })
      .assign(contact)
      .write();
  }

  delete(id) {
    return db
      .get("contacts")
      .remove({ id })
      .write();
  }
}

module.exports = new Contact();
