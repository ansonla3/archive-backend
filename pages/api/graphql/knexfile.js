module.exports = {
    development: {
      client: "postgresql",
      connection: "postgres://anson@localhost:5432/polkadot-archive",
      migrations: {
        tableName: "knex_migrations"
      }
    },
  
    production: {
      client: "postgresql",
      connection: "postgres://anson@localhost:5432/polkadot-archive",
      migrations: {
        tableName: "knex_migrations"
      }
    }
  };