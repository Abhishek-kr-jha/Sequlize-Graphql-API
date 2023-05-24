const resolvers = {
    Mutation: {
      register: async (_, { input }) => {
        try {
          const user = await User.create(input);
          return user;
        } catch (error) {
          throw new Error('Failed to register user.');
        }
      },
    },
  };
  
  module.exports = resolvers;
  