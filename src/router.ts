import { Router, Request, Response } from "express";

const router = Router();

router.post("/auth/register", (req: Request, res: Response) => {
 console.log(req.body)
  res.json({
    message: "Backend con TypeScript funcionando"
  });
});


export default router;