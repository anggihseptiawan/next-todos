import { table } from "./utils/Airtable";
import auth0 from "./utils/auth0";

export default auth0.requireAuthentication(async (req, res) => {
	const { description } = req.body;
	const { user } = await auth0.getSession(req);

	try {
		const createRecords = await table.create([
			{ fields: { description, userId: user.sub } },
		]);
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
});
