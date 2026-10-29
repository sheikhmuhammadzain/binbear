import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function EstimatePrice() {
    const [estimationType, setEstimationType] = useState('items')
    const [selectedItems, setSelectedItems] = useState({})
    const [truckSpace, setTruckSpace] = useState(25)
    const [location, setLocation] = useState('')
    const [apiPrices, setApiPrices] = useState(null)
    const [loading, setLoading] = useState(true)

    // Fetch prices from API
    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await fetch('https://backend.binbearjunk.com/api/getPrice')
                const result = await response.json()

                if (result.success) {
                    // Convert array to object for easier access
                    const pricesObj = {}
                    result.data.forEach(item => {
                        pricesObj[item.name] = parseFloat(item.value)
                    })
                    setApiPrices(pricesObj)
                }
            } catch (error) {
                console.error('Error fetching prices:', error)
                // Fallback to default values if API fails
                setApiPrices({
                    full_truck_price: 50,
                    half_truck_price: 30,
                    apartment_trash_valet_per_unit: 10,
                    drumpster_size_small_price: 50,
                    drumpster_size_medium_price: 100,
                    drumpster_size_large_price: 150
                })
            } finally {
                setLoading(false)
            }
        }

        fetchPrices()
    }, [])

    // Item pricing data - using relative pricing based on truck space
    const itemPrices = {
        'furniture': {
            'sofa': { price: 8, name: 'Sofa/Couch' },
            'chair': { price: 4, name: 'Chair/Recliner' },
            'table': { price: 5, name: 'Table/Desk' },
            'dresser': { price: 7, name: 'Dresser/Cabinet' },
            'bed': { price: 9, name: 'Bed/Mattress' },
            'bookshelf': { price: 6, name: 'Bookshelf' }
        },
        'appliances': {
            'refrigerator': { price: 12, name: 'Refrigerator' },
            'washer': { price: 10, name: 'Washer/Dryer' },
            'dishwasher': { price: 8, name: 'Dishwasher' },
            'microwave': { price: 3, name: 'Microwave' },
            'stove': { price: 10, name: 'Stove/Oven' },
            'ac': { price: 7, name: 'Air Conditioner' }
        },
        'electronics': {
            'tv': { price: 5, name: 'TV (32" and under)' },
            'tv_large': { price: 7, name: 'TV (over 32")' },
            'computer': { price: 4, name: 'Computer/Monitor' },
            'printer': { price: 3, name: 'Printer' },
            'stereo': { price: 4, name: 'Stereo System' }
        },
        'misc': {
            'boxes': { price: 2, name: 'Boxes (5-10)' },
            'bags': { price: 1, name: 'Bags (5-10)' },
            'yard_waste': { price: 6, name: 'Yard Waste' },
            'construction': { price: 15, name: 'Construction Debris' },
            'exercise': { price: 5, name: 'Exercise Equipment' }
        }
    }

    // Calculate total price based on selected items using API prices
    const calculateItemsTotal = () => {
        if (!apiPrices) return 0

        let totalItems = 0
        Object.values(itemPrices).forEach(category => {
            Object.entries(category).forEach(([key, item]) => {
                if (selectedItems[key]) {
                    totalItems += item.price * selectedItems[key]
                }
            })
        })

        // Convert items to truck percentage and calculate price
        const estimatedTruckPercentage = Math.min(100, totalItems * 2) // Each "price unit" = ~2% truck space

        if (estimatedTruckPercentage <= 50) {
            return Math.round((estimatedTruckPercentage / 50) * apiPrices.half_truck_price)
        } else {
            const halfTruckCost = apiPrices.half_truck_price
            const additionalPercentage = estimatedTruckPercentage - 50
            const additionalCost = (additionalPercentage / 50) * (apiPrices.full_truck_price - apiPrices.half_truck_price)
            return Math.round(halfTruckCost + additionalCost)
        }
    }

    // Calculate truck space pricing using API prices
    const calculateTruckTotal = () => {
        if (!apiPrices) return 0

        if (truckSpace <= 50) {
            return Math.round((truckSpace / 50) * apiPrices.half_truck_price)
        } else {
            const halfTruckCost = apiPrices.half_truck_price
            const additionalPercentage = truckSpace - 50
            const additionalCost = (additionalPercentage / 50) * (apiPrices.full_truck_price - apiPrices.half_truck_price)
            return Math.round(halfTruckCost + additionalCost)
        }
    }

    // Handle item quantity change
    const handleItemChange = (itemKey, quantity) => {
        setSelectedItems(prev => ({
            ...prev,
            [itemKey]: quantity
        }))
    }

    // Get final estimate
    const getFinalEstimate = () => {
        if (estimationType === 'items') {
            return calculateItemsTotal()
        } else {
            return calculateTruckTotal()
        }
    }

    if (loading) {
        return (
            <Layout>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60vh',
                    fontSize: '1.2rem',
                    color: '#666'
                }}>
                    Loading pricing information...
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <Head>
                <title>BinBear Pricing Estimator - Get Instant Quote</title>
                <meta name="description" content="Get an instant estimate for your junk removal with BinBear's professional pricing calculator. Choose items or truck space method." />
            </Head>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1>Free Pricing Estimator</h1>
                        <p>Get an instant, transparent estimate for your junk removal needs</p>
                        {apiPrices && (
                            <div className="price-info">
                                <small>
                                    Half Truck (≤50%): ${apiPrices.half_truck_price} | Full Truck: ${apiPrices.full_truck_price}
                                </small>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Calculator Section */}
            <section className="calculator-section">
                <div className="container">
                    <div className="calculator-wrapper">

                        {/* Estimation Type Selector */}
                        <div className="estimation-selector">
                            <h2>Choose Your Estimation Method</h2>
                            <div className="method-buttons">
                                <button
                                    className={`method-btn ${estimationType === 'items' ? 'active' : ''}`}
                                    onClick={() => setEstimationType('items')}
                                >
                                    <div className="method-icon">📦</div>
                                    <h3>By Items</h3>
                                    <p>Select specific items you want removed</p>
                                </button>
                                <button
                                    className={`method-btn ${estimationType === 'truck' ? 'active' : ''}`}
                                    onClick={() => setEstimationType('truck')}
                                >
                                    <div className="method-icon">🚛</div>
                                    <h3>By Truck Space</h3>
                                    <p>Estimate based on truck space needed</p>
                                </button>
                            </div>
                        </div>

                        <div className="calculator-content">
                            <div className="calculator-form">

                                {/* Items Method */}
                                {estimationType === 'items' && (
                                    <div className="items-calculator">
                                        <h3>Select Items for Removal</h3>
                                        <div className="pricing-note">
                                            <small>
                                                Pricing is calculated based on estimated truck space usage.
                                                Final pricing: Half truck (≤50%): ${apiPrices?.half_truck_price} | Full truck: ${apiPrices?.full_truck_price}
                                            </small>
                                        </div>

                                        {Object.entries(itemPrices).map(([categoryKey, category]) => (
                                            <div key={categoryKey} className="item-category">
                                                <h4>{categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}</h4>
                                                <div className="items-grid">
                                                    {Object.entries(category).map(([itemKey, item]) => (
                                                        <div key={itemKey} className="item-selector">
                                                            <div className="item-info">
                                                                <span className="item-name">{item.name}</span>
                                                                <span className="item-space">~{item.price * 2}% truck space</span>
                                                            </div>
                                                            <div className="quantity-controls">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleItemChange(itemKey, Math.max(0, (selectedItems[itemKey] || 0) - 1))}
                                                                    className="qty-btn"
                                                                >
                                                                    -
                                                                </button>
                                                                <span className="quantity">{selectedItems[itemKey] || 0}</span>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleItemChange(itemKey, (selectedItems[itemKey] || 0) + 1)}
                                                                    className="qty-btn"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Truck Space Method */}
                                {estimationType === 'truck' && (
                                    <div className="truck-calculator">
                                        <h3>Estimate Truck Space Needed</h3>
                                        <div className="pricing-info">
                                            <div className="price-tiers">
                                                <div className="tier">
                                                    <strong>Half Truck (≤50%): ${apiPrices?.half_truck_price}</strong>
                                                </div>
                                                <div className="tier">
                                                    <strong>Full Truck (51-100%): ${apiPrices?.full_truck_price}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="truck-visual">
                                            <div className="truck-container">
                                                <div
                                                    className="truck-fill"
                                                    style={{ width: `${truckSpace}%` }}
                                                ></div>
                                                <span className="truck-percentage">{truckSpace}%</span>
                                            </div>
                                        </div>
                                        <div className="space-slider">
                                            <label>Truck Space: {truckSpace}%</label>
                                            <input
                                                type="range"
                                                min="10"
                                                max="100"
                                                value={truckSpace}
                                                onChange={(e) => setTruckSpace(parseInt(e.target.value))}
                                                className="slider"
                                            />
                                            <div className="space-guide">
                                                <small>10% = Few small items | 50% = Half truck | 100% = Full truck</small>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Dumpster Options */}
                                {apiPrices && (
                                    <div className="dumpster-section">
                                        <h3>Alternative: Dumpster Rental</h3>
                                        <div className="dumpster-options">
                                            <div className="dumpster-option">
                                                <h4>Small Dumpster</h4>
                                                <p>Perfect for small cleanouts</p>
                                                <div className="dumpster-price">${apiPrices.drumpster_size_small_price}</div>
                                            </div>
                                            <div className="dumpster-option">
                                                <h4>Medium Dumpster</h4>
                                                <p>Great for room renovations</p>
                                                <div className="dumpster-price">${apiPrices.drumpster_size_medium_price}</div>
                                            </div>
                                            <div className="dumpster-option">
                                                <h4>Large Dumpster</h4>
                                                <p>Ideal for major projects</p>
                                                <div className="dumpster-price">${apiPrices.drumpster_size_large_price}</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Location Input */}
                                <div className="location-section">
                                    <label>Your Location (Optional)</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your zip code or city"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="location-input"
                                    />
                                </div>
                            </div>

                            {/* Price Summary */}
                            <div className="price-summary">
                                <div className="summary-card">
                                    <h3>Your Estimate</h3>
                                    <div className="price-display">
                                        <span className="currency">$</span>
                                        <span className="amount">{getFinalEstimate()}</span>
                                    </div>
                                    <div className="price-details">
                                        {estimationType === 'items' ? (
                                            <div>
                                                <p>Based on {Object.values(selectedItems).reduce((a, b) => a + b, 0)} selected items</p>
                                                <p className="truck-estimate">
                                                    Estimated truck usage: ~{Math.min(100, Object.values(selectedItems).reduce((total, qty, index) => {
                                                        const itemKeys = Object.keys(selectedItems)
                                                        const itemKey = itemKeys[index]
                                                        const item = Object.values(itemPrices).find(cat => cat[itemKey])
                                                        return total + (item?.[itemKey]?.price * qty * 2 || 0)
                                                    }, 0))}%
                                                </p>
                                                {Object.values(selectedItems).reduce((a, b) => a + b, 0) > 0 && (
                                                    <div className="selected-items">
                                                        {Object.entries(selectedItems).map(([key, qty]) => {
                                                            if (qty > 0) {
                                                                const item = Object.values(itemPrices).find(cat => cat[key])
                                                                return item && (
                                                                    <div key={key} className="selected-item">
                                                                        {qty}x {item[key].name}
                                                                    </div>
                                                                )
                                                            }
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div>
                                                <p>Based on {truckSpace}% truck space</p>
                                                <p className="price-tier">
                                                    {truckSpace <= 50 ? 'Half Truck Rate' : 'Full Truck Rate'}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="action-buttons">
                                        <Link href="/Booking" className="book-button">
                                            Book Now
                                        </Link>
                                        <button className="call-button" style={{ color: 'black' }}>
                                            Call for Quote
                                        </button>
                                    </div>

                                    <div className="disclaimer">
                                        <small>* Final pricing determined on-site. This is an estimate only.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature">
                            <div className="feature-icon">💰</div>
                            <h4>Real-Time Pricing</h4>
                            <p>Our estimates are based on current market rates and updated automatically.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">⚡</div>
                            <h4>Same Day Service</h4>
                            <p>Book online and get your junk removed the same day in most areas.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">♻️</div>
                            <h4>Eco-Friendly</h4>
                            <p>We recycle and donate whenever possible to minimize landfill waste.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">🏆</div>
                            <h4>Professional Team</h4>
                            <p>Licensed, insured, and uniformed professionals handle your items with care.</p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .hero-section {
                    background: linear-gradient(135deg, #FF7F00 0%, #FF9500 100%);
                    color: white;
                    padding: 80px 0 60px;
                    text-align: center;
                }

                .hero-content h1 {
                    font-size: 3rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                }

                .hero-content p {
                    font-size: 1.2rem;
                    opacity: 0.9;
                    max-width: 600px;
                    margin: 0 auto 15px auto;
                }

                .price-info {
                    margin-top: 15px;
                }

                .price-info small {
                    background: rgba(255, 255, 255, 0.2);
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 0.9rem;
                }

                .calculator-section {
                    padding: 80px 0;
                    background: #f8f9fa;
                }

                .calculator-wrapper {
                    max-width: 1200px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    overflow: hidden;
                }

                .estimation-selector {
                    padding: 40px;
                    text-align: center;
                    background: white;
                    border-bottom: 1px solid #eee;
                }

                .estimation-selector h2 {
                    margin-bottom: 30px;
                    color: #333;
                    font-weight: 600;
                }

                .method-buttons {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .method-btn {
                    background: white;
                    border: 2px solid #e9ecef;
                    border-radius: 12px;
                    padding: 30px 20px;
                    min-width: 200px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                }

                .method-btn:hover {
                    border-color: #FF7F00;
                    transform: translateY(-2px);
                }

                .method-btn.active {
                    border-color: #FF7F00;
                    background: rgba(255, 127, 0, 0.05);
                }

                .method-icon {
                    font-size: 2rem;
                    margin-bottom: 15px;
                }

                .method-btn h3 {
                    margin: 0 0 10px 0;
                    color: #333;
                    font-size: 1.2rem;
                }

                .method-btn p {
                    margin: 0;
                    color: #666;
                    font-size: 0.9rem;
                }

                .calculator-content {
                    display: flex;
                    min-height: 600px;
                }

                .calculator-form {
                    flex: 2;
                    padding: 40px;
                }

                .price-summary {
                    flex: 1;
                    background: #f8f9fa;
                    padding: 40px 30px;
                    border-left: 1px solid #eee;
                }

                .items-calculator h3,
                .truck-calculator h3 {
                    margin-bottom: 20px;
                    color: #333;
                    font-weight: 600;
                }

                .pricing-note,
                .pricing-info {
                    background: #e7f3ff;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 30px;
                    border-left: 4px solid #FF7F00;
                }

                .price-tiers {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .tier {
                    flex: 1;
                    min-width: 150px;
                    text-align: center;
                    padding: 10px;
                    background: white;
                    border-radius: 6px;
                    border: 1px solid #ddd;
                }

                .item-category {
                    margin-bottom: 40px;
                }

                .item-category h4 {
                    color: #FF7F00;
                    font-weight: 600;
                    margin-bottom: 20px;
                    text-transform: capitalize;
                    border-bottom: 2px solid #FF7F00;
                    padding-bottom: 8px;
                }

                .items-grid {
                    display: grid;
                    gap: 15px;
                }

                .item-selector {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px;
                    background: white;
                    border: 1px solid #e9ecef;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                }

                .item-selector:hover {
                    border-color: #FF7F00;
                    box-shadow: 0 2px 8px rgba(255, 127, 0, 0.1);
                }

                .item-info {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                .item-name {
                    font-weight: 500;
                    color: #333;
                    margin-bottom: 4px;
                }

                .item-space {
                    color: #666;
                    font-size: 0.8rem;
                }

                .quantity-controls {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .qty-btn {
                    background: #FF7F00;
                    color: white;
                    border: none;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s ease;
                }

                .qty-btn:hover {
                    background: #e67000;
                }

                .quantity {
                    min-width: 20px;
                    text-align: center;
                    font-weight: 600;
                    color: #333;
                }

                .truck-visual {
                    margin: 30px 0;
                }

                .truck-container {
                    position: relative;
                    width: 100%;
                    height: 60px;
                    background: #e9ecef;
                    border-radius: 8px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .truck-fill {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    background: linear-gradient(90deg, #FF7F00, #FF9500);
                    transition: width 0.3s ease;
                }

                .truck-percentage {
                    position: relative;
                    z-index: 1;
                    color: #333;
                    font-weight: bold;
                    mix-blend-mode: difference;
                }

                .space-slider {
                    margin: 20px 0;
                }

                .space-slider label {
                    display: block;
                    margin-bottom: 10px;
                    font-weight: 600;
                    color: #333;
                }

                .slider {
                    width: 100%;
                    height: 8px;
                    border-radius: 4px;
                    background: #e9ecef;
                    outline: none;
                    -webkit-appearance: none;
                }

                .slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #FF7F00;
                    cursor: pointer;
                }

                .slider::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #FF7F00;
                    cursor: pointer;
                    border: none;
                }

                .space-guide {
                    margin-top: 10px;
                    text-align: center;
                }

                .space-guide small {
                    color: #666;
                    font-size: 0.8rem;
                }

                .dumpster-section {
                    margin-top: 40px;
                    padding-top: 30px;
                    border-top: 1px solid #eee;
                }

                .dumpster-section h3 {
                    margin-bottom: 20px;
                    color: #333;
                    font-weight: 600;
                }

                .dumpster-options {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 15px;
                }

                .dumpster-option {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 8px;
                    text-align: center;
                    border: 1px solid #e9ecef;
                    transition: all 0.2s ease;
                }

                .dumpster-option:hover {
                    border-color: #FF7F00;
                    transform: translateY(-2px);
                }

                .dumpster-option h4 {
                    color: #333;
                    margin-bottom: 8px;
                    font-size: 1rem;
                }

                .dumpster-option p {
                    color: #666;
                    font-size: 0.9rem;
                    margin-bottom: 10px;
                }

                .dumpster-price {
                    color: #FF7F00;
                    font-weight: bold;
                    font-size: 1.2rem;
                }

                .location-section {
                    margin-top: 40px;
                    padding-top: 30px;
                    border-top: 1px solid #eee;
                }

                .location-section label {
                    display: block;
                    margin-bottom: 10px;
                    font-weight: 600;
                    color: #333;
                }

                .location-input {
                    width: 100%;
                    padding: 12px 16px;
                    border: 1px solid #e9ecef;
                    border-radius: 8px;
                    font-size: 1rem;
                    transition: border-color 0.2s ease;
                }

                .location-input:focus {
                    outline: none;
                    border-color: #FF7F00;
                    box-shadow: 0 0 0 3px rgba(255, 127, 0, 0.1);
                }

                .summary-card {
                    background: white;
                    border-radius: 12px;
                    padding: 30px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    position: sticky;
                    top: 20px;
                }

                .summary-card h3 {
                    margin-bottom: 20px;
                    color: #333;
                    font-weight: 600;
                    text-align: center;
                }

                .price-display {
                    text-align: center;
                    margin-bottom: 20px;
                    padding: 20px;
                    background: linear-gradient(135deg, #FF7F00, #FF9500);
                    border-radius: 8px;
                    color: white;
                }

                .currency {
                    font-size: 1.5rem;
                    vertical-align: top;
                }

                .amount {
                    font-size: 3rem;
                    font-weight: bold;
                }

                .price-details {
                    margin-bottom: 30px;
                    text-align: center;
                }

                .price-details p {
                    color: #666;
                    margin-bottom: 8px;
                    font-size: 0.9rem;
                }

                .truck-estimate,
                .price-tier {
                    color: #FF7F00;
                    font-weight: 600;
                }

                .selected-items {
                    max-height: 150px;
                    overflow-y: auto;
                    border: 1px solid #e9ecef;
                    border-radius: 6px;
                    padding: 10px;
                    margin-top: 15px;
                }

                .selected-item {
                    padding: 4px 0;
                    color: #333;
                    font-size: 0.9rem;
                    border-bottom: 1px solid #f1f3f4;
                }

                .selected-item:last-child {
                    border-bottom: none;
                }

                .action-buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-bottom: 20px;
                }

                .book-button,
                .call-button {
                    padding: 14px 20px;
                    border-radius: 8px;
                    font-weight: 600;
                    text-align: center;
                    text-decoration: none;
                    border: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-size: 1rem;
                }

                .book-button {
                    background: #FF7F00;
                    color: white;
                }

                .book-button:hover {
                    background: #e67000;
                    transform: translateY(-1px);
                }

                .call-button {
                    background: white;
                    color: #FF7F00;
                    border: 2px solid #FF7F00;
                }

                .call-button:hover {
                    background: #FF7F00;
                    color: white;
                }

                .disclaimer {
                    text-align: center;
                    padding-top: 15px;
                    border-top: 1px solid #eee;
                }

                .disclaimer small {
                    color: #666;
                }

                .features-section {
                    padding: 80px 0;
                    background: white;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 40px;
                }

                .feature {
                    text-align: center;
                    padding: 30px 20px;
                }

                .feature-icon {
                    font-size: 3rem;
                    margin-bottom: 20px;
                }

                .feature h4 {
                    margin-bottom: 15px;
                    color: #333;
                    font-weight: 600;
                }

                .feature p {
                    color: #666;
                    line-height: 1.6;
                }

                @media (max-width: 768px) {
                    .calculator-content {
                        flex-direction: column;
                    }

                    .price-summary {
                        border-left: none;
                        border-top: 1px solid #eee;
                    }

                    .method-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .method-btn {
                        width: 100%;
                        max-width: 300px;
                    }

                    .hero-content h1 {
                        font-size: 2rem;
                    }

                    .amount {
                        font-size: 2.5rem;
                    }

                    .price-tiers {
                        flex-direction: column;
                    }
                }
            `}</style>
        </Layout>
    )
}