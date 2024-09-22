import { TestOK } from "../controllers/testApi.controllers.js";
import Router from "express"

const Testrouter = Router()

Testrouter.route("/allTestOk").get(TestOK)

export {Testrouter}

