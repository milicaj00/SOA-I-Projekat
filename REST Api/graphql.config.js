module.exports = {
  projects: {
    app: {
      schema: ["./gql/schema.graphql"],
      documents: ["**/*.{graphql,js,ts,jsx,tsx}"],
    },
  },
};
