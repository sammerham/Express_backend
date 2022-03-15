/** Common settings for auth-api app. */

const DB_URI = process.env.NODE_ENV === "test"
  ? "postgresql:///doctorsdb_test"
  : "postgresql:///doctorsdb";

const SECRET_KEY = process.env.SECRET_KEY || "secret";
const JWT_OPTIONS = { expiresIn: 60 * 60 }; // 1 hour
const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  DB_URI,
  SECRET_KEY,
  JWT_OPTIONS,
  BCRYPT_WORK_FACTOR
};
