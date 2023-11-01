// countryAPI.ts
import axios from "axios";
interface FetchResponse {
  data: any | null;
  error: string | null;
}

export const fetchCountries = async (name: string): Promise<FetchResponse> => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    return { data: response.data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message || "An error occurred" };
  }
};
