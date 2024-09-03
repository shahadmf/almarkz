import Airtable from "airtable";

// Replace with your Airtable API key and base ID
const API_KEY =
  "patUpmjFqPlxrABDT.fbf1ac827a42c68f7855cc7364448e3a141566c389d12883a209a6227d97eec1";
const BASE_ID = "appyUS2Nmv5ZF3DIl";

// Initialize Airtable with API key
Airtable.configure({
  apiKey: API_KEY,
});

// Connect to a specific base
const base = Airtable.base(BASE_ID);

export default base;
