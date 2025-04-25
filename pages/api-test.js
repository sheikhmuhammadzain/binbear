import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import {
  fetchCategories,
  fetchAllCategories,
  fetchCategoryPage,
  fetchSubcategoriesByCategoryId,
  fetchPopularCategories,
  fetchAllCategoriesList
} from '@/util/categoryApi';

export default function ApiTest() {
  const [loading, setLoading] = useState({
    categories: true,
    allCategories: true,
    categoryPage: true,
    subcategories: true,
    popularCategories: true,
    allCategoriesList: true,
  });
  
  const [data, setData] = useState({
    categories: null,
    allCategories: null,
    categoryPage: null,
    subcategories: null,
    popularCategories: null,
    allCategoriesList: null,
  });
  
  const [error, setError] = useState({
    categories: null,
    allCategories: null,
    categoryPage: null,
    subcategories: null,
    popularCategories: null,
    allCategoriesList: null,
  });
  
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Fetch categories
        setLoading(prev => ({ ...prev, categories: true }));
        const categoriesData = await fetchCategories();
        setData(prev => ({ ...prev, categories: categoriesData }));
        setLoading(prev => ({ ...prev, categories: false }));
        
        // Fetch all categories
        setLoading(prev => ({ ...prev, allCategories: true }));
        const allCategoriesData = await fetchAllCategories();
        setData(prev => ({ ...prev, allCategories: allCategoriesData }));
        setLoading(prev => ({ ...prev, allCategories: false }));
        
        // Fetch popular categories
        setLoading(prev => ({ ...prev, popularCategories: true }));
        const popularCategoriesData = await fetchPopularCategories();
        setData(prev => ({ ...prev, popularCategories: popularCategoriesData }));
        setLoading(prev => ({ ...prev, popularCategories: false }));
        
        // Fetch all categories list
        setLoading(prev => ({ ...prev, allCategoriesList: true }));
        const allCategoriesListData = await fetchAllCategoriesList();
        setData(prev => ({ ...prev, allCategoriesList: allCategoriesListData }));
        setLoading(prev => ({ ...prev, allCategoriesList: false }));
        
      } catch (err) {
        console.error('Error fetching API data:', err);
      }
    };
    
    fetchAllData();
  }, []);
  
  useEffect(() => {
    const fetchCategorySpecificData = async () => {
      try {
        // Only fetch if we have a valid category ID
        if (selectedCategoryId) {
          // Fetch category page
          setLoading(prev => ({ ...prev, categoryPage: true }));
          const categoryPageData = await fetchCategoryPage(selectedCategoryId);
          setData(prev => ({ ...prev, categoryPage: categoryPageData }));
          setLoading(prev => ({ ...prev, categoryPage: false }));
          
          // Fetch subcategories
          setLoading(prev => ({ ...prev, subcategories: true }));
          const subcategoriesData = await fetchSubcategoriesByCategoryId(selectedCategoryId);
          setData(prev => ({ ...prev, subcategories: subcategoriesData }));
          setLoading(prev => ({ ...prev, subcategories: false }));
        }
      } catch (err) {
        console.error(`Error fetching data for category ${selectedCategoryId}:`, err);
      }
    };
    
    fetchCategorySpecificData();
  }, [selectedCategoryId]);
  
  const handleCategoryChange = (e) => {
    setSelectedCategoryId(e.target.value);
  };
  
  return (
    <Layout>
      <div className="container mt-5 mb-5">
        <h1 className="mb-4">Category API Test</h1>
        
        <div className="mb-4">
          <label htmlFor="categorySelect" className="form-label">
            Select Category ID for specific endpoints:
          </label>
          <select 
            id="categorySelect" 
            className="form-select" 
            value={selectedCategoryId} 
            onChange={handleCategoryChange}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map(id => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5>Categories</h5>
                <small className="text-muted">GET /categories</small>
              </div>
              <div className="card-body">
                {loading.categories ? (
                  <p>Loading...</p>
                ) : (
                  <pre className="response-data">{JSON.stringify(data.categories, null, 2)}</pre>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5>All Categories</h5>
                <small className="text-muted">GET /allCategories</small>
              </div>
              <div className="card-body">
                {loading.allCategories ? (
                  <p>Loading...</p>
                ) : (
                  <pre className="response-data">{JSON.stringify(data.allCategories, null, 2)}</pre>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5>Category Page (ID: {selectedCategoryId})</h5>
                <small className="text-muted">GET /category-page/{selectedCategoryId}</small>
              </div>
              <div className="card-body">
                {loading.categoryPage ? (
                  <p>Loading...</p>
                ) : (
                  <pre className="response-data">{JSON.stringify(data.categoryPage, null, 2)}</pre>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5>Subcategories (Category ID: {selectedCategoryId})</h5>
                <small className="text-muted">GET /subCategoryByID/{selectedCategoryId}</small>
              </div>
              <div className="card-body">
                {loading.subcategories ? (
                  <p>Loading...</p>
                ) : (
                  <pre className="response-data">{JSON.stringify(data.subcategories, null, 2)}</pre>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5>Popular Categories</h5>
                <small className="text-muted">GET /category/is-popular</small>
              </div>
              <div className="card-body">
                {loading.popularCategories ? (
                  <p>Loading...</p>
                ) : (
                  <pre className="response-data">{JSON.stringify(data.popularCategories, null, 2)}</pre>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5>All Categories List</h5>
                <small className="text-muted">GET /allList</small>
              </div>
              <div className="card-body">
                {loading.allCategoriesList ? (
                  <p>Loading...</p>
                ) : (
                  <pre className="response-data">{JSON.stringify(data.allCategoriesList, null, 2)}</pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .card {
          height: 100%;
          overflow: hidden;
        }
        
        .card-header {
          background-color: #f8f9fa;
          padding: 1rem;
        }
        
        .card-header h5 {
          margin-bottom: 0.25rem;
        }
        
        .card-body {
          padding: 1rem;
          overflow: auto;
          max-height: 300px;
        }
        
        .response-data {
          font-size: 0.85rem;
          margin: 0;
          white-space: pre-wrap;
        }
        
        .form-select {
          display: block;
          width: 100%;
          padding: 0.375rem 2.25rem 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #212529;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
      `}</style>
    </Layout>
  );
} 