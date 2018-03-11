import { Router } from 'express';


const api = Router();


api.get('/', (req, res, next) => {
	res.status(200).json({
		message: '/api/',
	})
});

api.use('/*', (req, res, next) => {
	res.status(404).json({
		message: 'Not found',
	})
})


export default api