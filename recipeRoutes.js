import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Recipe Route Working");
});

export default router;