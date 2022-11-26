import Dao from "../models/Dao.js";
import UserService from "./UserService.js";
import CartService from "./CartService.js";
import ArtworkService from "./ArtworkService.js";
import config from "../config/config.js";

const dao = new Dao(config);

export const userService = new UserService(dao);
export const artworkService = new ArtworkService(dao);
export const cartsService = new CartService(dao);