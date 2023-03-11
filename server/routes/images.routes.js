import { Router } from "express";

const router = Router();

router.post('/api/images/upload', async (req, res) => {
  const { image } = req.files;

  console.log(image);
  return res.jsonp('WORKS');
});

router.get('/api/images/get', async (req, res) => {

});

router.get('/api/images/:id', async (req, res) => {

});

export default router;