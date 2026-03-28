import {useState, useEffect} from "react"
import Layout from "@/components/layout/Layout"
import {
  fetchCategories,
  fetchAllCategories,
  fetchCategoryPage,
  fetchSubcategoriesByCategoryId,
  fetchPopularCategories,
  fetchAllCategoriesList,
} from "@/util/categoryApi"

export default function ApiTest() {
  const [loading, setLoading] = useState({
    categories: true,
    allCategories: true,
    categoryPage: true,
    subcategories: true,
    popularCategories: true,
    allCategoriesList: true,
  })

  const [data, setData] = useState({
    categories: null,
    allCategories: null,
    categoryPage: null,
    subcategories: null,
    popularCategories: null,
    allCategoriesList: null,
  })

  const [error, setError] = useState({
    categories: null,
    allCategories: null,
    categoryPage: null,
    subcategories: null,
    popularCategories: null,
    allCategoriesList: null,
  })

  const [selectedCategoryId, setSelectedCategoryId] = useState(1)

  const baseCategoryRequests = [
    {key: "categories", fetcher: fetchCategories},
    {key: "allCategories", fetcher: fetchAllCategories},
    {key: "popularCategories", fetcher: fetchPopularCategories},
    {key: "allCategoriesList", fetcher: fetchAllCategoriesList},
  ]

  useEffect(() => {
    let isMounted = true

    const fetchAllData = async () => {
      const loadingKeys = baseCategoryRequests.reduce(
        (acc, request) => ({...acc, [request.key]: true}),
        {},
      )
      setLoading(prev => ({...prev, ...loadingKeys}))

      const results = await Promise.allSettled(
        baseCategoryRequests.map(request => request.fetcher()),
      )

      if (!isMounted) {
        return
      }

      const nextData = {}
      const nextError = {}
      const nextLoading = {}

      baseCategoryRequests.forEach((request, index) => {
        const result = results[index]
        nextLoading[request.key] = false

        if (result.status === "fulfilled") {
          nextData[request.key] = result.value
          nextError[request.key] = null
          return
        }

        nextError[request.key] = result.reason?.message || "Request failed"
        console.error(`Error fetching ${request.key}:`, result.reason)
      })

      setData(prev => ({...prev, ...nextData}))
      setError(prev => ({...prev, ...nextError}))
      setLoading(prev => ({...prev, ...nextLoading}))
    }

    fetchAllData()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    let isMounted = true

    const fetchCategorySpecificData = async () => {
      if (!selectedCategoryId) {
        return
      }

      setLoading(prev => ({
        ...prev,
        categoryPage: true,
        subcategories: true,
      }))
      setError(prev => ({
        ...prev,
        categoryPage: null,
        subcategories: null,
      }))

      const [categoryPageResult, subcategoriesResult] =
        await Promise.allSettled([
          fetchCategoryPage(selectedCategoryId),
          fetchSubcategoriesByCategoryId(selectedCategoryId),
        ])

      if (!isMounted) {
        return
      }

      if (categoryPageResult.status === "fulfilled") {
        setData(prev => ({...prev, categoryPage: categoryPageResult.value}))
      } else {
        const message = categoryPageResult.reason?.message || "Request failed"
        setError(prev => ({...prev, categoryPage: message}))
        console.error(
          `Error fetching categoryPage for category ${selectedCategoryId}:`,
          categoryPageResult.reason,
        )
      }

      if (subcategoriesResult.status === "fulfilled") {
        setData(prev => ({...prev, subcategories: subcategoriesResult.value}))
      } else {
        const message = subcategoriesResult.reason?.message || "Request failed"
        setError(prev => ({...prev, subcategories: message}))
        console.error(
          `Error fetching subcategories for category ${selectedCategoryId}:`,
          subcategoriesResult.reason,
        )
      }

      setLoading(prev => ({
        ...prev,
        categoryPage: false,
        subcategories: false,
      }))
    }

    fetchCategorySpecificData()

    return () => {
      isMounted = false
    }
  }, [selectedCategoryId])

  const handleCategoryChange = e => {
    setSelectedCategoryId(Number(e.target.value))
  }

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
            {Array.from({length: 10}, (_, i) => i + 1).map(id => (
              <option key={id} value={id}>
                {id}
              </option>
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
                  <pre className="response-data">
                    {JSON.stringify(data.categories, null, 2)}
                  </pre>
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
                  <pre className="response-data">
                    {JSON.stringify(data.allCategories, null, 2)}
                  </pre>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5>Category Page (ID: {selectedCategoryId})</h5>
                <small className="text-muted">
                  GET /category-page/{selectedCategoryId}
                </small>
              </div>
              <div className="card-body">
                {loading.categoryPage ? (
                  <p>Loading...</p>
                ) : (
                  <pre className="response-data">
                    {JSON.stringify(data.categoryPage, null, 2)}
                  </pre>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5>Subcategories (Category ID: {selectedCategoryId})</h5>
                <small className="text-muted">
                  GET /subCategoryByID/{selectedCategoryId}
                </small>
              </div>
              <div className="card-body">
                {loading.subcategories ? (
                  <p>Loading...</p>
                ) : (
                  <pre className="response-data">
                    {JSON.stringify(data.subcategories, null, 2)}
                  </pre>
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
                  <pre className="response-data">
                    {JSON.stringify(data.popularCategories, null, 2)}
                  </pre>
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
                  <pre className="response-data">
                    {JSON.stringify(data.allCategoriesList, null, 2)}
                  </pre>
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
          transition:
            border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }
      `}</style>
    </Layout>
  )
}
