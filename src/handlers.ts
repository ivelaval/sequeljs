import { Request, Response } from 'express';

export const rootHandler = (
	req: Request,
	res: Response,
): Response<{ hello: string }> => {
	const { params } = req;
	const { name = 'World' } = params;

	return res.json({ hello: name });
};
