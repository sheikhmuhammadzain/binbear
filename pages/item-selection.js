import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faChair, faTable, faTv, faWashingMachine, faRefrigerator, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Layout from "@/components/layout/Layout";

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
        <Layout>
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
                    <Link href="/ScheduleDumpster">
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
                        max-width: 1000px;
                        margin: 0 auto;
                        padding: 10px 15px;
                        background: #fff;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    }

                    /* Header */
                    .selection-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 5px 0;
                        border-bottom: 1px solid #eee;
                        margin-bottom: 15px;
                    }

                    .back-button {
                        background: none;
                        border: none;
                        font-size: 20px;
                        color: #FF7701;
                        cursor: pointer;
                        padding: 5px;
                        transition: color 0.3s ease;
                    }

                    .back-button:hover {
                        color: #e66901;
                    }

                    h1 {
                        font-size: 20px;
                        margin: 0;
                        color: #333;
                    }

                    .location {
                        color: #666;
                        font-size: 12px;
                    }

                    /* Estimate Section */
                    .estimate-section {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background-color: #f9f9f9;
                        padding: 10px 15px;
                        border-radius: 5px;
                        margin-bottom: 15px;
                    }

                    h2 {
                        font-size: 18px;
                        margin: 0;
                        color: #333;
                    }

                    .clear-items {
                        background: none;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        padding: 5px 10px;
                        color: #666;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-size: 14px;
                    }

                    .clear-items:hover {
                        background-color: #f0f0f0;
                    }

                    /* Items Grid */
                    .items-grid {
                        display: flex;
                        gap: 15px;
                        margin-bottom: 15px;
                        max-height: calc(100vh - 350px);
                        overflow-y: auto;
                    }

                    .grid-column {
                        flex: 1;
                    }

                    .category-section {
                        margin-bottom: 15px;
                        background-color: #fff;
                        border-radius: 5px;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
                    }

                    h3 {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        font-size: 16px;
                        margin: 0;
                        padding: 10px;
                        border-bottom: 1px solid #eee;
                        color: #333;
                    }

                    .category-icon {
                        color: #FF7701;
                    }

                    .item-row {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 8px 10px;
                        border-bottom: 1px solid #f5f5f5;
                    }

                    .item-row:last-child {
                        border-bottom: none;
                    }

                    .item-info {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }

                    .item-icon {
                        color: #666;
                        font-size: 14px;
                    }

                    .item-name {
                        font-size: 14px;
                        color: #333;
                    }

                    .item-controls {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }

                    .control-btn {
                        width: 28px;
                        height: 28px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid #ddd;
                        background-color: #fff;
                        border-radius: 4px;
                        color: #333;
                        font-size: 16px;
                        cursor: pointer;
                        transition: all 0.15s ease;
                    }

                    .control-btn:hover {
                        background-color: #f5f5f5;
                    }

                    .item-count {
                        min-width: 25px;
                        text-align: center;
                        font-size: 14px;
                        color: #333;
                    }

                    /* Bottom CTA */
                    .bottom-cta {
                        margin-top: 15px;
                        padding: 15px;
                        background-color: #f9f9f9;
                        border-radius: 5px;
                        text-align: center;
                    }

                    .book-now-btn {
                        background-color: #FF7701;
                        color: white;
                        padding: 10px 20px;
                        font-size: 16px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        transition: background-color 0.3s;
                        width: 100%;
                        max-width: 300px;
                    }

                    .book-now-btn:hover:not(:disabled) {
                        background-color: #e66901;
                    }

                    .book-now-btn:disabled {
                        background-color: #ccc;
                        cursor: not-allowed;
                    }

                    .cta-note {
                        margin-top: 10px;
                        font-size: 12px;
                        color: #666;
                    }

                    /* Responsive Styles */
                    @media (max-width: 768px) {
                        .items-grid {
                            flex-direction: column;
                            max-height: calc(100vh - 330px);
                        }

                        .item-name {
                            font-size: 13px;
                        }

                        .control-btn {
                            width: 25px;
                            height: 25px;
                        }

                        h1 {
                            font-size: 18px;
                        }

                        h2 {
                            font-size: 16px;
                        }

                        h3 {
                            font-size: 15px;
                        }
                    }

                    @media (max-width: 480px) {
                        .item-selection-container {
                            padding: 5px 10px;
                        }

                        .items-grid {
                            max-height: calc(100vh - 300px);
                        }

                        .selection-header, 
                        .estimate-section {
                            padding: 8px;
                        }

                        .item-row {
                            padding: 6px 8px;
                        }

                        .book-now-btn {
                            padding: 8px 16px;
                            font-size: 14px;
                        }
                    }
                `}</style>
            </div>
        </Layout>
    );
};

export default ItemSelection;