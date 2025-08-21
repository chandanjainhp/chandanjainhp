import { Router } from 'express';

const router = Router();

router.post('/submit', (_req, res) => {
  res.json({});
});

router.get('/messages', (_req, res) => {
  res.json([]);
});

router.put('/:id/read', (_req, res) => {
  res.json({});
});

router.post('/reply', (_req, res) => {
  res.json({});
});

router.post('/newsletter/subscribe', (_req, res) => {
  res.json({});
});

router.get('/newsletter/subscribers', (_req, res) => {
  res.json([]);
});

router.post('/newsletter/send', (_req, res) => {
  res.json({});
});

export default router;
