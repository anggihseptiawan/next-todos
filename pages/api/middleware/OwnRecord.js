import auth0 from "../utils/auth0";
import { table } from "../utils/Airtable";

const OwnRecord = (handler) =>
	auth0.requireAuthentication(async (req, res) => {
		const { user } = await auth0.getSession(req);
		const { id } = req.body;

		try {
			const existingRecord = await table.find(id);
			if (!existingRecord || user.sub !== existingRecord.fields.userId) {
				res.statusCode = 404;
				res.json({
					msg: "Record not found",
				});
			}

			req.record = existingRecord;
			return handler(req, res);
		} catch (error) {
			console.error(error);
			res.statusCode = 500;
			res.json({
				msg: "Something went wrong",
			});
		}
	});

export default OwnRecord;
