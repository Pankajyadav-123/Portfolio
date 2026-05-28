export const portfolioApi = {
  submitContact: async (payload) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true, payload };
  },
};
