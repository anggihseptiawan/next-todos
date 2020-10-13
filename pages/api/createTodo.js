import { table, minifyRecord } from "./utils/Airtable";

export default async (req, res) => {
	const { description } = req.body;
	try {
		const createRecords = await table.create([{ fields: { description } }]);
		const createdRecord = {
			id: createRecords[0].id,
			fields: createRecords[0].fields,
		};

		res.statusCode = 200;
		res.json(createdRecord);
	} catch (error) {
		res.statusCode = 500;
		res.json({ msg: "Something went wrong" });
	}
};
