import { table, getMinifyRecords } from "./utils/Airtable";

export default async (req, res) => {
	const { id, fields } = req.body;
	try {
		const updateRecords = await table.update([{ id, fields }]);

		res.statusCode = 200;
		res.json(getMinifyRecords(updateRecords[0]));
	} catch (error) {
		console.log(error);
		res.statusCode = 500;
		res.json({ msg: "Something went wrong" });
	}
};
