import MemoryDao from "../dao/memory.dao.js";
import UserService from "./users.service.js";
import PetsService from "./pets.service.js";

const dao = new MemoryDao();

export const userService = new UserService(dao);
export const petService = new PetsService(dao);