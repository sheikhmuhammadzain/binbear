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
            <div style={{ position: 'relative', minHeight: '100vh' }}>
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
                                        <FontAwesomeIcon icon={category.icon} size="sm" className="category-icon" />
                                        {category.title}
                                    </h3>
                                    {category.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="item-row">
                                            <div className="item-info">
                                                <FontAwesomeIcon icon={item.icon} size="sm" className="item-icon" />
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
                                        <FontAwesomeIcon icon={category.icon} size="sm" className="category-icon" />
                                        {category.title}
                                    </h3>
                                    {category.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="item-row">
                                            <div className="item-info">
                                                <FontAwesomeIcon icon={item.icon} size="sm" className="item-icon" />
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
                        <Link href="/construction-cleanup">
                            <button className="book-now-btn" aria-disabled="false">
                                Book Now & Save $20!*
                            </button>
                        </Link>
                        <p className="cta-note">* Online booking discount applied at checkout.</p>
                    </div>

                    {/* Debug Info */}
                    <div style={{ position: 'fixed', top: 0, right: 0, background: 'rgba(0,0,0,0.8)', color: 'white', padding: '10px', zIndex: 10000 }}>
                        <p>Button Debug:</p>
                        <p>Viewport Height: {typeof window !== 'undefined' ? window.innerHeight + 'px' : 'N/A'}</p>
                        <p>Scroll Position: {typeof window !== 'undefined' ? window.scrollY + 'px' : 'N/A'}</p>
                    </div>

                    {/* Add padding at the bottom to prevent content from being hidden behind the fixed CTA */}
                    <div style={{ height: '70px' }}></div>

                    {/* Styles */}
                    <style jsx>{`
                        .item-selection-container {
                            max-width: 1000px;
                            margin: 0 auto;
                            padding: 5px 10px;
                            background: #fff;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                            padding-bottom: 100px !important;
                        }

                        /* Header */
                        .selection-header {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding: 2px 0;
                            border-bottom: 1px solid #eee;
                            margin-bottom: 8px;
                        }

                        .back-button {
                            background: none;
                            border: none;
                            font-size: 18px;
                            color: #FF7701;
                            cursor: pointer;
                            padding: 3px;
                            transition: color 0.3s ease;
                        }

                        .back-button:hover {
                            color: #e66901;
                        }

                        h1 {
                            font-size: 18px;
                            margin: 0;
                            color: #333;
                        }

                        .location {
                            color: #666;
                            font-size: 11px;
                        }

                        /* Estimate Section */
                        .estimate-section {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            background-color: #f9f9f9;
                            padding: 6px 10px;
                            border-radius: 4px;
                            margin-bottom: 8px;
                        }

                        h2 {
                            font-size: 16px;
                            margin: 0;
                            color: #333;
                        }

                        .clear-items {
                            background: none;
                            border: 1px solid #ccc;
                            border-radius: 4px;
                            padding: 3px 8px;
                            color: #666;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            font-size: 12px;
                        }

                        .clear-items:hover {
                            background-color: #f0f0f0;
                        }

                        /* Items Grid */
                        .items-grid {
                            display: flex;
                            gap: 10px;
                            margin-bottom: 70px;
                            overflow-y: auto;
                            max-height: calc(100vh - 180px);
                            -webkit-overflow-scrolling: touch;
                        }

                        .grid-column {
                            flex: 1;
                        }

                        .category-section {
                            margin-bottom: 8px;
                            background-color: #fff;
                            border-radius: 4px;
                            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                        }

                        h3 {
                            display: flex;
                            align-items: center;
                            font-size: 1.1rem;
                            color: #333;
                            margin: 10px 0 8px;
                            padding-bottom: 5px;
                            border-bottom: 1px solid #eee;
                        }

                        .category-icon {
                            margin-right: 8px;
                            color: #FF7701;
                            vertical-align: middle;
                            font-size: 14px;
                            width: 14px;
                        }

                        .item-row {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 6px 8px;
                            border-radius: 4px;
                            margin-bottom: 4px;
                            transition: background-color 0.2s ease;
                        }

                        .item-row:hover {
                            background-color: #f8f8f8;
                        }

                        .item-info {
                            display: flex;
                            align-items: center;
                            flex: 1;
                        }

                        .item-icon {
                            margin-right: 6px;
                            color: #666;
                            min-width: 14px;
                            font-size: 12px;
                            width: 12px;
                        }

                        .item-name {
                            font-size: 0.9rem;
                            color: #444;
                        }

                        .item-controls {
                            display: flex;
                            align-items: center;
                            gap: 6px;
                        }

                        .control-btn {
                            width: 24px;
                            height: 24px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: 1px solid #ddd;
                            background-color: #fff;
                            border-radius: 3px;
                            color: #333;
                            font-size: 14px;
                            cursor: pointer;
                            transition: all 0.15s ease;
                        }

                        .control-btn:hover {
                            background-color: #f5f5f5;
                        }

                        .item-count {
                            min-width: 20px;
                            text-align: center;
                            font-size: 13px;
                            color: #333;
                        }

                        /* Updated Bottom CTA Styles */
                        .bottom-cta {
                            position: fixed;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            width: 100%;
                            background: white;
                            padding: 10px;
                            text-align: center;
                            box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
                            z-index: 99999;
                        }

                        .book-now-btn {
                            width: 100%;
                            max-width: 350px;
                            padding: 10px 20px;
                            background-color: #FF7701;
                            color: white;
                            font-size: 16px;
                            font-weight: bold;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                            margin: 0 auto;
                            display: block;
                        }

                        .book-now-btn:hover {
                            background-color: #e66901;
                        }

                        .cta-note {
                            margin: 5px 0 0;
                            font-size: 11px;
                            color: #666;
                        }

                        /* Responsive Styles */
                        @media (max-width: 600px) {
                            .items-grid {
                                flex-direction: column;
                                max-height: calc(100vh - 150px);
                            }
                            
                            .grid-column {
                                width: 100%;
                            }
                            
                            h1 {
                                font-size: 16px;
                            }
                            
                            h2 {
                                font-size: 14px;
                            }
                        }

                        @media (max-width: 480px) {
                            .item-selection-container {
                                padding: 3px 6px;
                            }

                            .items-grid {
                                max-height: calc(100vh - 150px);
                                margin-bottom: 60px;
                            }

                            .selection-header, 
                            .estimate-section {
                                padding: 5px;
                            }

                            .item-row {
                                padding: 4px 6px;
                            }

                            .book-now-btn {
                                padding: 8px 12px;
                                font-size: 14px;
                            }
                        }
                    `}</style>
                </div>
            </div>
        </Layout>
    );
};

export default ItemSelection;