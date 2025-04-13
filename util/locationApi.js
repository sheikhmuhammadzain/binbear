const API_BASE_URL = 'https://binbear.njnylimo.us/public/api';

/**
 * Fetches all valid zip codes from the API
 * @returns {Promise<Array>} - Array of zip code objects
 */
export const fetchZipCodes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/zip-codes`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch zip codes: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch zip codes');
    }
  } catch (error) {
    console.error('Error fetching zip codes:', error);
    return [];
  }
};

/**
 * Checks if a specific zip code is valid and serviced
 * @param {string} zipCode - The zip code to check
 * @returns {Promise<Object|null>} - Zip code info if valid, null if not
 */
export const verifyZipCode = async (zipCode) => {
  try {
    const zipCodes = await fetchZipCodes();
    return zipCodes.find(item => item.zip_code === zipCode && item.status === "Active") || null;
  } catch (error) {
    console.error('Error verifying zip code:', error);
    return null;
  }
};

/**
 * Gets city name for a zip code
 * @param {string} zipCode - The zip code to get city for
 * @returns {Promise<string>} - City name or empty string if not found
 */
export const getCityByZip = async (zipCode) => {
  try {
    const zipInfo = await verifyZipCode(zipCode);
    return zipInfo ? zipInfo.city_name : '';
  } catch (error) {
    console.error('Error getting city by zip code:', error);
    return '';
  }
}; 