const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar pensamentos:", error);
      throw error;
    }
  },
  async salvarPensamento(pensamento) {
    try {
      const response = await fetch("http://localhost:3000/pensamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch (error) {
      console.error("Erro ao salvar pensamento:", error);
      throw error;
    }
  },
  async buscarPensamento(id) {
    try {
      const response = await fetch(`http://localhost:3000/pensamentos/${id}`);
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar pensamento:", error);
      throw error;
    }
  },
  async atualizarPensamento(pensamento) {
    try {
      const response = await fetch(
        `http://localhost:3000/pensamentos/${pensamento.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pensamento),
        }
      );
      return await response.json();
    } catch (error) {
      console.error("Erro ao atualizar pensamento:", error);
      throw error;
    }
  },
};

export default api;
