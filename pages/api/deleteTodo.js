import { table, getMinifyRecords } from "./utils/Airtable";
import auth0 from "./utils/auth0";

export default auth0.requireAuthentication(async (req, res) => {
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
