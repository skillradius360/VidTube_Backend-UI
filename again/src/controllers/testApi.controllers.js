import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const TestOK = asyncHandler((req, res) => {


    try {
        return res.status(200)
            .json(new apiResponse(200, [], "ALL TEST OK AND sERVER IS ONLINE"))

    } catch (error) {
        return res.status(404)
            .json(new apiResponse(404, [], "SERVER UNSTABLE"))
    }
})

export { TestOK }