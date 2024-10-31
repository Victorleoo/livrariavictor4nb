import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://victor_leonardo_user:1odpPTnr8H2nuB8nqhIZcFHxyRnL1C9w@dpg-cshbfmbtq21c73fniip0-a.oregon-postgres.render.com/victor_leonardo";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
