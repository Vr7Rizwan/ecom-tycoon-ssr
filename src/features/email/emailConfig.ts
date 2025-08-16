const apiKey = process.env.NEXT_PUBLIC_API_KEY ?? "";
const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID ?? "testing";
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "templateContactUs";

// Validate that required environment variables are set
if (!apiKey) {
  console.warn(
    "NEXT_PUBLIC_API_KEY is not set. Email functionality may not work properly."
  );
}

const key = {
  public_key: apiKey,
  service_ID: serviceId,
  template_ID: templateId,
};

export default key;
