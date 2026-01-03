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
};

export default api;
