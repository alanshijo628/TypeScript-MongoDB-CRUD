import "dotenv/config";

interface Config {
  port: string | number;
  db: {
    uri: string;
    name: string;
  };
}

const config: Config = {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.DB_URI || "",
    name: process.env.DB_NAME || "",
  },
};

export default config;
