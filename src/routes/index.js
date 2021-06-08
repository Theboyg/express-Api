import express from 'express';
const IndexRouter = express.Router();
IndexRouter.get('/', function (req, res, next) {
  return res.status(200).json({ message: 'Welcome to Express API template' });
});
export default IndexRouter;
