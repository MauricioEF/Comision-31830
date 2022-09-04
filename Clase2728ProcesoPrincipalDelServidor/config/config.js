import dotenv from 'dotenv';

console.log(process.argv.slice(2))
const mode = process.argv.slice(2);
dotenv.config({
    path:mode==="PRODUCTION"?'./.env.production':'./.env.development'
});
export default {
    PORT: process.env.PORT||8080,
    MONGO_URL:process.env.MONGO_URL||'mongodb://127.0.0.1/test',
    MODE: process.env.MODE || "production",
    DEBUG:process.env.DEBUG || false,
    PAPA : process.env.PAPA || "Jamón",
    FONDO : process.env.FONDO || "negro"
}