const apiKey = process.env.NEXT_PUBLIC_API_KEY ?? "";
const key = {
  public_key: apiKey,
  service_ID: "testing",
  template_ID: "templateContactUs",
};

export default key;
