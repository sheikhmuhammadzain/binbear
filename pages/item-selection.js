import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faChair, faTable, faTv, faWashingMachine, faRefrigerator, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Define item categories and price map outside the component for performance
const itemCategories = [
    {
        title: 'Couches & Chairs',
        icon: faCouch,
        items: [
            { name: 'Chair', basePrice: 20, icon: faChair },
            { name: 'Recliner', basePrice: 30, icon: faChair },
            { name: 'Couch w/ sleeper-recliner', basePrice: 50, icon: faCouch },
            { name: 'Sectional (3 piece)', basePrice: 75, icon: faCouch },
            { name: 'Sectional (5 piece)', basePrice: 100, icon: faCouch },
            { name: 'Loveseat', basePrice: 40, icon: faCouch }
        ]
    },
    {
        title: 'Tables & Dressers',
        icon: faTable,
        items: [
            { name: 'Coffee Table', basePrice: 25, icon: faTable },
            { name: 'End Table', basePrice: 20, icon: faTable },
            { name: 'Dining Table', basePrice: 40, icon: faTable },
            { name: 'Dresser', basePrice: 35, icon: faTable }
        ]
    },
    {
        title: 'Electronics',
        icon: faTv,
        items: [
            { name: 'TV (under 40")', basePrice: 30, icon: faTv },
            { name: 'TV (40-60")', basePrice: 45, icon: faTv },
            { name: 'TV (over 60")', basePrice: 60, icon: faTv }
        ]
    },
    {
        title: 'Appliances',
        icon: faWashingMachine,
        items: [
            { name: 'Refrigerator', basePrice: 65, icon: faRefrigerator },
            { name: 'Washer/Dryer', basePrice: 50, icon: faWashingMachine },
            { name: 'Dishwasher', basePrice: 45, icon: faWashingMachine },
            { name: 'Microwave', basePrice: 25, icon: faWashingMachine }
        ]
    }
];

// Create a price lookup map for efficiency
const itemPrices = itemCategories.flatMap(cat => cat.items).reduce((acc, item) => {
    acc[item.name] = item.basePrice;
    return acc;
}, {});

const ItemSelection = () => {
    const [estimate, setEstimate] = useState(0);
    const [selectedItems, setSelectedItems] = useState({});

    // Update item count and recalculate estimate
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

    // Clear all selected items and reset estimate
    const clearItems = () => {
        setSelectedItems({});
        setEstimate(0);
    };

    return (
        <div className="item-selection-container">
            {/* Header */}
            <header className="selection-header">
                <Link href="/choose-service">
                    <button className="back-button" aria-label="Go back">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </Link>
                <h1>Add Your Items</h1>
                <div className="location">
                    <span>📍 BinBear Junk Removal</span>
                </div>
            </header>

            {/* Estimate Section */}
            <div className="estimate-section">
                <h2>Your Estimate: ${estimate.toFixed(2)}</h2>
                <button className="clear-items" onClick={clearItems} aria-label="Clear all items">
                    Clear Items
                </button>
            </div>

            {/* Items List Grouped by Category in Two Columns */}
            <div className="items-grid">
                <div className="grid-column">
                    {itemCategories.slice(0, Math.ceil(itemCategories.length / 2)).map((category, catIdx) => (
                        <div key={catIdx} className="category-section">
                            <h3>
                                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                                {category.title}
                            </h3>
                            {category.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="item-row">
                                    <div className="item-info">
                                        <FontAwesomeIcon icon={item.icon} className="item-icon" />
                                        <span className="item-name">{item.name}</span>
                                    </div>
                                    <div className="item-controls">
                                        <button
                                            className="control-btn"
                                            onClick={() => updateItemCount(item.name, -1)}
                                            aria-label={`Decrease ${item.name} count`}
                                        >
                                            −
                                        </button>
                                        <span className="item-count">
                                            {selectedItems[item.name] || 0}
                                        </span>
                                        <button
                                            className="control-btn"
                                            onClick={() => updateItemCount(item.name, 1)}
                                            aria-label={`Increase ${item.name} count`}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="grid-column">
                    {itemCategories.slice(Math.ceil(itemCategories.length / 2)).map((category, catIdx) => (
                        <div key={catIdx} className="category-section">
                            <h3>
                                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                                {category.title}
                            </h3>
                            {category.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="item-row">
                                    <div className="item-info">
                                        <FontAwesomeIcon icon={item.icon} className="item-icon" />
                                        <span className="item-name">{item.name}</span>
                                    </div>
                                    <div className="item-controls">
                                        <button
                                            className="control-btn"
                                            onClick={() => updateItemCount(item.name, -1)}
                                            aria-label={`Decrease ${item.name} count`}
                                        >
                                            −
                                        </button>
                                        <span className="item-count">
                                            {selectedItems[item.name] || 0}
                                        </span>
                                        <button
                                            className="control-btn"
                                            onClick={() => updateItemCount(item.name, 1)}
                                            aria-label={`Increase ${item.name} count`}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="bottom-cta">
                <Link href="/register">
                    <button
                        className="book-now-btn"
                        disabled={estimate === 0}
                        aria-disabled={estimate === 0}
                    >
                        Book Now & Save $20!*
                    </button>
                </Link>
                <p className="cta-note">* Online booking discount applied at checkout.</p>
            </div>

            {/* Styles */}
            <style jsx>{`
                .item-selection-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    background: #fff;
                    min-height: 100vh;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }

                /* Header */
                .selection-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 0;
                    border-bottom: 1px solid #eee;
                    margin-bottom: 30px;
                }

                .back-button {
                    background: none;
                    border: none;
                    font-size: 24px;
                    color: #FF7701;
                    cursor: pointer;
                    padding: 5px 10px;
                    transition: color 0.3s ease;
                }

                .back-button:hover {
                    color: #e66901;
                }

                h1 {
                    font-size: 24px;
                    margin: 0;
                    color: #333;
                }

                .location {
                    color: #666;
                    font-size: 14px;
                }

                /* Estimate Section */
                .estimate-section {
                    background: #FF7701;
                    color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                }

                .estimate-section h2 {
                    margin: 0;
                    font-size: 24px;
                }

                .clear-items {
                    background: none;
                    border: none;
                    color: #fff;
                    text-decoration: underline;
                    cursor: pointer;
                    font-size: 16px;
                    transition: opacity 0.3s ease;
                }

                .clear-items:hover {
                    opacity: 0.8;
                }

                /* Two-column grid layout */
                .items-grid {
                    display: flex;
                    gap: 30px;
                    margin-bottom: 100px;
                }

                .grid-column {
                    flex: 1;
                    min-width: 0;
                }

                .category-section {
                    background: #fff;
                    border-radius: 8px;
                    padding: 20px;
                    margin-bottom: 20px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .category-section h3 {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 20px;
                    color: #333;
                    margin-bottom: 15px;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #FF7701;
                }

                .category-icon {
                    color: #FF7701;
                    font-size: 24px;
                }

                .item-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 0;
                    border-bottom: 1px solid #eee;
                }

                .item-info {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .item-icon {
                    color: #666;
                    font-size: 18px;
                    width: 20px;
                }

                .item-name {
                    font-size: 16px;
                    color: #333;
                }

                .item-controls {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .control-btn {
                    width: 40px;
                    height: 40px;
                    border: 2px solid #FF7701;
                    background: #fff;
                    color: #FF7701;
                    border-radius: 50%;
                    font-size: 20px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .control-btn:hover {
                    background: #FF7701;
                    color: #fff;
                }

                .item-count {
                    min-width: 40px;
                    text-align: center;
                    font-size: 18px;
                    color: #333;
                }

                /* Bottom CTA */
                .bottom-cta {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 20px;
                    background: #fff;
                    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
                    text-align: center;
                }

                .book-now-btn {
                    width: 100%;
                    max-width: 300px;
                    padding: 15px;
                    background: #FF7701;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-size: 18px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }

                .book-now-btn:disabled {
                    background: #ccc;
                    cursor: not-allowed;
                }

                .book-now-btn:hover:not(:disabled) {
                    background: #e66901;
                }

                .cta-note {
                    font-size: 12px;
                    color: #666;
                    margin-top: 5px;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .items-grid {
                        flex-direction: column;
                    }

                    .grid-column {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default ItemSelection;