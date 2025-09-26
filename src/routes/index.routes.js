
import { Router } from "express";

const router = Router();

router.get('/test', async (req, res) => {
    const [result] = await db.query('SELECT "pong" AS result');
    res.json(result);
})

export default router