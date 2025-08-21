import { Router } from 'express';

const router = Router();

router.post('/upload', (_req, res) => {
  res.json({ message: 'upload placeholder' });
});

router.get('/:id', (_req, res) => {
  res.json({ message: `get media ${_req.params.id}` });
});

router.delete('/:id', (_req, res) => {
  res.json({ message: `delete media ${_req.params.id}` });
});

router.post('/optimize', (_req, res) => {
  res.json({ message: 'optimize placeholder' });
});

export default router;
