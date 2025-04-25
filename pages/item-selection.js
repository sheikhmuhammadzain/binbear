import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import Layout from "@/components/layout/Layout";

const ItemSelection = () => {
    const [estimate, setEstimate] = useState(0);
    const [selectedItems, setSelectedItems] = useState({});
    const [activeCategory, setActiveCategory] = useState(0);
    const [categoryScrollIndex, setCategoryScrollIndex] = useState(0);
    const [itemCategories, setItemCategories] = useState([]);
    const [itemPrices, setItemPrices] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const visibleCategories = 5; // Adjust if needed based on final card size

    // Fetch categories from API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://binbear.njnylimo.us/public/api/allCategories');
                const result = await response.json();
                
                if (result.success) {
                    // Transform API data to match component's expected format
                    const transformedCategories = result.data.map(category => {
                        const imageUrl = category.image ? `https://binbear.njnylimo.us/public${category.image}` : '/assets/imgs/microwave.png';
                        console.log('Category image URL:', imageUrl); // Debug log
                        console.log('Category children:', category.children); // Debug log for children
                        
                        // Ensure category.children exists and is an array
                        const children = Array.isArray(category.children) ? category.children : [];
                        
                        // Map children to items or use empty array
                        const items = children.map(child => ({
                            name: child.name,
                            basePrice: parseInt(child.price, 10) || 0
                        }));
                        
                        return {
                            title: category.name,
                            image: imageUrl,
                            items: items
                        };
                    });
                    
                    setItemCategories(transformedCategories);
                    
                    // Create a flat price map from all categories
                    const prices = {};
                    transformedCategories.forEach(category => {
                        category.items.forEach(item => {
                            prices[item.name] = item.basePrice;
                        });
                    });
                    setItemPrices(prices);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchCategories();
    }, []);

    const updateItemCount = (itemName, increment) => {
        setSelectedItems(prev => {
            const currentCount = prev[itemName] || 0;
            const newCount = Math.max(0, currentCount + increment);
            const newItems = { ...prev };

            if (newCount === 0) {
                delete newItems[itemName];
            } else {
                newItems[itemName] = newCount;
            }

            const newEstimate = Object.entries(newItems).reduce((sum, [name, count]) => {
                return sum + (itemPrices[name] * count);
            }, 0);
            setEstimate(newEstimate);

            return newItems;
        });
    };

    const clearItems = () => {
        setSelectedItems({});
        setEstimate(0);
    };

    const scrollCategoriesLeft = () => {
        if (categoryScrollIndex > 0) {
            const newIndex = Math.max(0, categoryScrollIndex - 1);
            setCategoryScrollIndex(newIndex);
        }
    };

    const scrollCategoriesRight = () => {
        if (categoryScrollIndex < itemCategories.length - visibleCategories) {
            const newIndex = Math.min(itemCategories.length - visibleCategories, categoryScrollIndex + 1);
            setCategoryScrollIndex(newIndex);
        }
    };

    const handleCategoryClick = (index) => {
        setActiveCategory(index);
        console.log('Clicked category:', index, itemCategories[index]);
        console.log('Items in category:', itemCategories[index]?.items);
    };

    // Show loading state while fetching data
    if (isLoading) {
        return (
            <Layout>
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading items...</p>
                </div>
                <style jsx>{`
                    .loading-container {
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background-color: #ffffff;
                    }
                    .loading-spinner {
                        border: 4px solid #f3f3f3;
                        border-top: 4px solid #FF7701;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;
                        animation: spin 1s linear infinite;
                        margin-bottom: 20px;
                    }
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </Layout>
        );
    }

    // If no categories or no items in the active category
    if (!itemCategories.length) {
        return (
            <Layout>
                <div className="error-container">
                    <p>No items available at this time. Please check back later.</p>
                    <Link href="/" className="return-home-btn">Return Home</Link>
                </div>
                <style jsx>{`
                    .error-container {
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                        text-align: center;
                    }
                    .return-home-btn {
                        margin-top: 20px;
                        background-color: #FF7701;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 6px;
                        text-decoration: none;
                    }
                `}</style>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="item-selection-viewport">

                {/* Header */}
                <header className="header">
                    <Link href="/choose-service" className="nav-button back-button">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                    <div className="header-center">
                        <div className="crown-icon">👑</div>
                        <div className="phone-number">(888) 888-BIN BEAR</div>
                    </div>
                    <Link href="/" className="nav-button close-button">
                        <FontAwesomeIcon icon={faTimes} />
                    </Link>
                </header>

                {/* Title Section */}
                <div className="title-section">
                    <h1>Add Your Items</h1>
                    <div className="info-bar">
                        <p className="swipe-instruction">Tap +/- to add items</p>
                        <div className="location-info">
                            <span className="location-pin">📍</span>
                            <span>Chicago West (60009)</span>
                            <Link href="/my-items" className="my-items-link">
                                My Items <span className="item-count-badge">{Object.values(selectedItems).reduce((a, b) => a + b, 0)}</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Category Slider Container */}
                <div className="category-slider-area">
                    <button
                        className={`slider-nav-arrow prev ${categoryScrollIndex === 0 ? 'disabled' : ''}`}
                        onClick={scrollCategoriesLeft}
                        disabled={categoryScrollIndex === 0}
                        aria-label="Previous Categories"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <div className="category-slider">
                        <div
                            className="category-slider-track"
                            style={{ transform: `translateX(-${categoryScrollIndex * (100 / visibleCategories)}%)` }}
                        >
                            {itemCategories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`category-card ${activeCategory === index ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick(index)}
                                    style={{ flexBasis: `${100 / visibleCategories}%` }}
                                >
                                    <div className="category-image-container">
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            width={70}
                                            height={60}
                                            style={{ objectFit: 'contain' }}
                                            onError={(e) => {
                                                // Fall back to a default image on error
                                                e.target.src = '/assets/imgs/microwave.png';
                                            }}
                                            unoptimized={true}
                                        />
                                    </div>
                                    <div className="category-title">{category.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={`slider-nav-arrow next ${categoryScrollIndex >= itemCategories.length - visibleCategories ? 'disabled' : ''}`}
                        onClick={scrollCategoriesRight}
                        disabled={categoryScrollIndex >= itemCategories.length - visibleCategories}
                        aria-label="Next Categories"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>

                {/* Estimate Section */}
                <div className="estimate-section">
                    <div className="estimate-label">Estimate</div>
                    <div className="estimate-amount">${estimate.toFixed(0)}</div>
                    <button className="clear-items-btn" onClick={clearItems} disabled={estimate === 0}>
                        Clear All
                    </button>
                </div>

                {/* Items List (Scrollable Area) */}
                <div className="items-list-container">
                    {itemCategories[activeCategory]?.items?.length > 0 ? (
                        itemCategories[activeCategory].items.map((item, index) => (
                            <div key={`${activeCategory}-${index}`} className="item-row">
                                <div className="item-info">
                                    <span className="item-name">{item.name}</span>
                                </div>
                                <div className="item-controls">
                                    <button
                                        className="control-btn decrease"
                                        onClick={() => updateItemCount(item.name, -1)}
                                        disabled={!selectedItems[item.name]}
                                        aria-label={`Decrease ${item.name} count`}
                                    >
                                        –
                                    </button>
                                    <span className="item-count" aria-live="polite">
                                        {selectedItems[item.name] || 0}
                                    </span>
                                    <button
                                        className="control-btn increase"
                                        onClick={() => updateItemCount(item.name, 1)}
                                        aria-label={`Increase ${item.name} count`}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-items-message">
                            <p>No items available in this category.</p>
                            <p>Please select a different category or check back later.</p>
                        </div>
                    )}
                </div>

                {/* Bottom CTA (Fixed) */}
                <div className="bottom-cta">
                    <div className="cta-text">
                        <h3>Book Now & Save $20!*</h3>
                        <p className="cta-note">* excludes jobs $99 and under</p>
                    </div>
                    <div className="cta-buttons">
                         <Link href="/ScheduleDumpster" className="cta-btn book-now-btn">
                             Book Now
                         </Link>
                        <Link href="/pickup" className="cta-btn pick-up-btn">
                            Pick These Up
                        </Link>
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style jsx>{`
                /* Main Viewport Container */
                .item-selection-viewport {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                    background-color: #ffffff;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    max-width: 700px;
                    margin: 0 auto;
                    border: 1px solid #e0e0e0;
                    position: relative;
                    overflow: hidden;
                }

                /* Header */
                .header {
                    background-color: #FF7701;
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 6px 12px;
                    flex-shrink: 0;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    z-index: 10;
                }
                .header-center { text-align: center; }
                .crown-icon { font-size: 14px; line-height: 1; }
                .phone-number { font-size: 12px; font-weight: 600; line-height: 1.2; }
                .nav-button { color: white; font-size: 18px; background: none; border: none; cursor: pointer; padding: 5px; }

                /* Title Section */
                .title-section { padding: 8px 15px; background-color: #f8f8f8; border-bottom: 1px solid #e0e0e0; flex-shrink: 0; }
                h1 { font-size: 18px; margin: 0 0 5px 0; font-weight: 600; color: #333; }
                .info-bar { display: flex; justify-content: space-between; align-items: center; gap: 10px; }
                .swipe-instruction { font-size: 11px; color: #666; margin: 0; text-align: left; }
                .location-info { display: flex; align-items: center; font-size: 11px; color: #555; text-align: right; white-space: nowrap; }
                .location-pin { margin-right: 3px; font-size: 10px; }
                .my-items-link { color: #FF7701; text-decoration: none; display: flex; align-items: center; margin-left: 8px; font-weight: 500; }

                /* No Items Message */
                .no-items-message {
                    padding: 30px 20px;
                    text-align: center;
                    color: #666;
                }
                .no-items-message p {
                    margin: 5px 0;
                }

                /* --- MODIFIED: Item Count Badge --- */
                .item-count-badge {
                    display: inline-flex; /* Use flex to center content easily */
                    justify-content: center;
                    align-items: center;
                    width: 18px;  /* Fixed width */
                    height: 18px; /* Fixed height */
                    background-color: #FF7701;
                    color: white;
                    border-radius: 50%; /* Make it a circle */
                    text-align: center;
                    margin-left: 5px; /* Adjusted margin */
                    font-weight: bold;
                    font-size: 10px;
                    line-height: 1; /* Ensure text doesn't affect height */
                    box-sizing: border-box; /* Include padding/border in size */
                }

                /* Category Slider Area */
                .category-slider-area { display: flex; align-items: center; padding: 8px 0; background-color: #fff; border-bottom: 1px solid #e0e0e0; flex-shrink: 0; position: relative; }
                .category-slider { overflow: hidden; flex-grow: 1; margin: 0 5px; }
                .category-slider-track { display: flex; transition: transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1); }
                .category-card { flex-shrink: 0; box-sizing: border-box; padding: 6px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: border-color 0.2s ease, background-color 0.2s ease; text-align: center; background-color: #fdfdfd; margin: 0 1px; }
                .category-card:hover { background-color: #f5f5f5; }
                .category-card.active { border-color: #FF7701; background-color: #fff7f0; }
                .category-image-container { width: 100%; height: 55px; display: flex; justify-content: center; align-items: center; background-color: #f0f0f0; border-radius: 6px; margin-bottom: 4px; overflow: hidden; }
                .category-title { font-size: 11px; font-weight: 500; color: #444; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.3; }

                /* --- MODIFIED: Slider Navigation Arrows --- */
                .slider-nav-arrow {
                    background: none; /* No background */
                    color: #FF7701;   /* Arrow color (brand orange) */
                    border: none;      /* No border */
                    width: auto;       /* Adjust width to content */
                    height: auto;      /* Adjust height to content */
                    padding: 5px 8px; /* Padding around the icon */
                    font-size: 20px;   /* Size of the arrow icon */
                    cursor: pointer;
                    z-index: 5;
                    transition: color 0.2s ease, transform 0.2s ease; /* Transition color/transform */
                    flex-shrink: 0;
                    margin: 0 5px;
                    box-shadow: none; /* No shadow */
                    border-radius: 0; /* No border radius */
                    display: flex;     /* Needed for alignment if icon size varies */
                    align-items: center;
                    justify-content: center;
                }
                .slider-nav-arrow:not(.disabled):hover {
                    color: #e66901; /* Darker orange on hover */
                    transform: scale(1.1); /* Slightly enlarge on hover */
                    background: none; /* Ensure no background on hover */
                }
                .slider-nav-arrow.disabled {
                    color: #cccccc; /* Light grey for disabled */
                    cursor: not-allowed;
                    opacity: 0.7;
                    transform: none; /* No scale effect when disabled */
                    background: none; /* Ensure no background when disabled */
                }
                 /* --- End of Slider Arrow Modifications --- */

                /* Estimate Section */
                .estimate-section { display: flex; justify-content: space-between; align-items: center; padding: 6px 15px; background-color: #f0f0f0; border-bottom: 1px solid #d0d0d0; flex-shrink: 0; }
                .estimate-label { font-size: 13px; color: #555; font-weight: 500; }
                .estimate-amount { font-size: 18px; font-weight: 700; color: #FF7701; }
                .clear-items-btn { background-color: #e0e0e0; color: #555; border: none; border-radius: 4px; padding: 4px 10px; font-size: 11px; font-weight: 500; cursor: pointer; transition: background-color 0.2s ease; }
                .clear-items-btn:not(:disabled):hover { background-color: #d1d1d1; }
                .clear-items-btn:disabled { opacity: 0.5; cursor: not-allowed; }

                /* Items List Container (Scrollable) */
                .items-list-container { flex: 1; overflow-y: auto; padding: 5px 15px; background-color: #ffffff; -webkit-overflow-scrolling: touch; }
                .item-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #f0f0f0; }
                .item-row:last-child { border-bottom: none; }
                .item-info { display: flex; align-items: center; margin-right: 10px; }
                .item-name { font-size: 13px; color: #333; line-height: 1.4; }
                .item-controls { display: flex; align-items: center; flex-shrink: 0; }
                .control-btn { width: 24px; height: 24px; border-radius: 50%; border: 1px solid #e0e0e0; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 400; cursor: pointer; transition: all 0.15s ease; line-height: 1; }
                .decrease { background-color: #f8f8f8; color: #777; margin-right: 8px; }
                .decrease:not(:disabled):hover { background-color: #eee; border-color: #ccc; }
                .decrease:disabled { opacity: 0.5; cursor: not-allowed; }
                .increase { background-color: #FF7701; color: white; border-color: #e66901; margin-left: 8px; }
                .increase:hover { background-color: #e66901; transform: scale(1.05); }
                .item-count { min-width: 25px; text-align: center; font-size: 14px; font-weight: 500; color: #333; }

                /* Bottom CTA */
                .bottom-cta { background-color: #FF7701; padding: 10px 15px; width: 100%; box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); z-index: 10; flex-shrink: 0; display: flex; justify-content: space-between; align-items: center; gap: 15px; }
                .cta-text { flex: 1; text-align: left; color: white; }
                .cta-text h3 { font-size: 16px; margin: 0; font-weight: 600; line-height: 1.2; }
                .cta-note { font-size: 10px; margin: 2px 0 0; opacity: 0.9; }
                .cta-buttons { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
                .cta-btn { font-size: 13px; font-weight: 600; padding: 8px 14px; border-radius: 6px; text-decoration: none; text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15); transition: all 0.2s ease; border: none; }
                .cta-btn:hover { transform: translateY(-1px); box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2); }
                .book-now-btn { background-color: #ffffff; color: #FF7701; }
                .pick-up-btn { background-color: #4CAF50; color: white; }

                /* Responsive adjustments */
                @media (max-width: 400px) {
                    .bottom-cta { flex-direction: column; gap: 8px; padding: 8px 12px; }
                    .cta-text { text-align: center; }
                    .cta-buttons { width: 100%; justify-content: center; }
                    .cta-btn { flex-grow: 1; }
                    h1 { font-size: 16px; }
                    .estimate-amount { font-size: 16px; }
                    .cta-text h3 { font-size: 14px; }
                    /* Adjust slider arrows padding on small screens if needed */
                    .slider-nav-arrow { padding: 5px; font-size: 18px; }
                }

            `}</style>
        </Layout>
    );
};

export default ItemSelection;