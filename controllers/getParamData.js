import { startups } from "../data/data.js";

export function getParamData(req, res) {
  const { field, name } = req.params;
  const allowedFields = ["continent", "country", "industry"];

  if (!allowedFields.includes(field)) {
    return res.status(400).json({
      message:
        "Search field not allowed. Please use 'continent', 'country', or  'industry'",
    });
  }

  let filteredData = startups;

  filteredData = filteredData.filter(
    (startup) => startup[field].toLowerCase() === name.toLowerCase(),
  );
}
