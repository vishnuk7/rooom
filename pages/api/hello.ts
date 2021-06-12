import type { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '../../config/dbConfig';

type Data = {
	name: string;
};

dbConnect();

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
	res.status(200).json({ name: 'John Doe' });
};
