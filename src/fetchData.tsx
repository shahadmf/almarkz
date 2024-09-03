import base from "./airtable";

const fetchData = async (): Promise<any[]> => {
  try {
    const records = await base("Contact Me").select({}).all();

    const data = records.map((record) => ({
      id: record.id,
      ...record.fields,
    }));

    console.log(data);
    return data;
  } catch (error) {
      console.error("Error fetching data from Airtable:", error);
        return [];
  }
};

export default fetchData;
