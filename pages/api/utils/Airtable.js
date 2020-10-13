// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE_ID
);

const table = base(process.env.AIRTABLE_TABLE_NAME);

const minifyRecord = (records) => {
	return records.map((rec) => getMinifyRecords(rec));
};

const getMinifyRecords = (record) => {
	if (!record.fields.completed) {
		record.fields.completed = false;
	}

	return {
		id: record.id,
		fields: record.fields,
	};
};

export { table, getMinifyRecords, minifyRecord };
