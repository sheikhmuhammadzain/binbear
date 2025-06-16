const API_BASE_URL = 'https://backend.binbearjunk.com/api';
const IMAGE_BASE_URL = 'https://binbear.njnylimo.us/public'; // Base URL for images without the /api path

/**
 * Fetches all blogs from the API
 * @returns {Promise<Array>} - Array of blog objects
 */
export const fetchAllBlogs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch blogs');
    }
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

/**
 * Fetches a single blog by ID
 * @param {number} id - Blog ID
 * @returns {Promise<Object|null>} - Blog object or null if not found
 */
export const fetchBlogById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch blog');
    }
  } catch (error) {
    console.error(`Error fetching blog ${id}:`, error);
    return null;
  }
};

/**
 * Fetches popular blogs from the API
 * @returns {Promise<Array>} - Array of popular blog objects
 */
export const fetchPopularBlogs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/blog/is-popular`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch popular blogs: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch popular blogs');
    }
  } catch (error) {
    console.error('Error fetching popular blogs:', error);
    // Fallback to featured blogs if popular endpoint fails
    return fetchFeaturedBlogs();
  }
};

/**
 * Fetches featured blogs (where is_featured is "Yes")
 * @returns {Promise<Array>} - Array of featured blog objects
 */
export const fetchFeaturedBlogs = async () => {
  try {
    const blogs = await fetchAllBlogs();
    return blogs.filter(blog => blog.is_featured === "Yes");
  } catch (error) {
    console.error('Error fetching featured blogs:', error);
    return [];
  }
};

/**
 * Transform API blog data to match the application's format
 * @param {Object} blog - Blog object from API
 * @returns {Object} - Transformed blog object
 */
export const transformBlogData = (blog) => {
  // Default placeholder image in case the image is missing
  const placeholderImage = 'https://via.placeholder.com/600x400?text=No+Image+Available';
  
  // Handle image path construction with fallback
  let imagePath = placeholderImage;
  if (blog.image) {
    if (blog.image.startsWith('http')) {
      imagePath = blog.image;
    } else {
      imagePath = `${IMAGE_BASE_URL}${blog.image}`;
    }
  }
  
  return {
    id: blog.id,
    title: blog.title || 'Untitled Blog Post',
    slug: `blog-${blog.id}`, // Generate a slug based on the ID
    description: blog.body ? blog.body.replace(/<[^>]*>/g, '').substring(0, 150) + '...' : 'No description available', // Strip HTML and limit to 150 chars
    image: imagePath,
    content: blog.body || '<p>No content available</p>',
    is_featured: blog.is_featured || "No"
  };
}; 