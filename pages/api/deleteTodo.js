import OwnRecord from "./middleware/OwnRecord";
import { getMinifyRecords, table } from "./utils/Airtable";

export default OwnRecord(async (req, res) => {
	const { id } = req.body;
	try {
		const deleteRecord = await table.destroy([id]);

		res.statusCode = 200;
		res.json(getMinifyRecords(deleteRecord[0]));
	} catch (error) {
		console.log(error);
		res.statusCode = 500;
		res.json({ msg: "Something went wrong" });
	}
});
