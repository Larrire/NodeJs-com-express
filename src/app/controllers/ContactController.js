class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('ContactController index');
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
