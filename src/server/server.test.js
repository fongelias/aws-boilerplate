import assert from 'assert';
import request from 'supertest';

import { server } from './server';

describe('Express routes from server level', () => {

	after(() => {
		server.close();
	})

	describe('nonexistent url', () => {
		it('should return a 404 status', () => {
			return request(server).get('/api/nonexistent').expect(404);
		})
	})
})






