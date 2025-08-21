import { Router } from 'express';

const router = Router();

router.post('/login', (_req, res) => {
  res.json({ message: 'login placeholder' });
});

router.post('/refresh', (_req, res) => {
  res.json({ message: 'refresh placeholder' });
});

router.post('/logout', (_req, res) => {
  res.json({ message: 'logout placeholder' });
});

router.get('/verify', (_req, res) => {
  res.json({ message: 'verify placeholder' });
});

export default router;
