const API_BASE_URL = 'https://backend.binbearjunk.com/api';

/**
 * Fetches all categories from the API
 * @returns {Promise<Array>} - Array of category objects
 */
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch categories');
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

/**
 * Alternative endpoint to fetch all categories
 * @returns {Promise<Array>} - Array of category objects
 */
export const fetchAllCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/allCategories`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch all categories: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch all categories');
    }
  } catch (error) {
    console.error('Error fetching all categories:', error);
    return [];
  }
};

/**
 * Fetches a specific category by ID with related information
 * @param {number} categoryId - The category ID to fetch
 * @returns {Promise<Object|null>} - Category page data or null if not found
 */
export const fetchCategoryPage = async (categoryId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/category-page/${categoryId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch category page: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch category page');
    }
  } catch (error) {
    console.error(`Error fetching category page ${categoryId}:`, error);
    return null;
  }
};

/**
 * Fetches subcategories for a specific category ID
 * @param {number} categoryId - The parent category ID
 * @returns {Promise<Array>} - Array of subcategory objects
 */
export const fetchSubcategoriesByCategoryId = async (categoryId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/subCategoryByID/${categoryId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch subcategories: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch subcategories');
    }
  } catch (error) {
    console.error(`Error fetching subcategories for category ${categoryId}:`, error);
    return [];
  }
};

/**
 * Fetches popular categories
 * @returns {Promise<Array>} - Array of popular category objects
 */
export const fetchPopularCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/category/is-popular`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch popular categories: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch popular categories');
    }
  } catch (error) {
    console.error('Error fetching popular categories:', error);
    return [];
  }
};

/**
 * Alternative endpoint to fetch all categories in a list format
 * @returns {Promise<Array>} - Array of category objects
 */
export const fetchAllCategoriesList = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/allList`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch all categories list: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch all categories list');
    }
  } catch (error) {
    console.error('Error fetching all categories list:', error);
    return [];
  }
}; 