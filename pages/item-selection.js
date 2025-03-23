import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import Layout from "@/components/layout/Layout";

// Define item categories and price map outside the component for performance
const itemCategories = [
    {
        title: 'Couches & Chairs',
        image: '/assets/imgs/sofa.png',
        items: [
            { name: 'Chair', basePrice: 20 },
            { name: 'Recliner', basePrice: 30 },
            { name: 'Couch w/ sleeper-recliner', basePrice: 50 },
            { name: 'Sectional (2 piece)', basePrice: 75 },
            { name: 'Sectional (3 piece)', basePrice: 100 },
            { name: 'Couch/Sofa', basePrice: 40 },
            { name: 'Loveseat', basePrice: 40 }
        ]
    },
    {
        title: 'Tables & Dresserss',
        image: '/assets/imgs/table.png',
        items: [
            { name: 'Coffee Table', basePrice: 25 },
            { name: 'End Table', basePrice: 20 },
            { name: 'Dining Table', basePrice: 40 },
            { name: 'Dresser', basePrice: 35 }
        ]
    },
    {
        title: 'Electronics',
        image: '/assets/imgs/microwave.png',
        items: [
            { name: 'TV (under 40")', basePrice: 30 },
            { name: 'TV (40-60")', basePrice: 45 },
            { name: 'TV (over 60")', basePrice: 60 }
        ]
    },
    {
        title: 'Appliances',
        image: '/assets/imgs/washing.png',
        items: [
            { name: 'Refrigerator', basePrice: 65 },
            { name: 'Washer/Dryer', basePrice: 50 },
            { name: 'Dishwasher', basePrice: 45 },
            { name: 'Microwave', basePrice: 25 }
        ]
    },
    {
        title: 'Yard Equipment',
        image: '/assets/imgs/cycle.png',
        items: [
            { name: 'Lawn Mower', basePrice: 35 },
            { name: 'Bicycle', basePrice: 30 },
            { name: 'Yard Tools', basePrice: 20 },
        ]
    },
    {
        title: 'Bathroom Fixtures',
        image: '/assets/imgs/bath.png',
        items: [
            { name: 'Bath Tub', basePrice: 60 },
            { name: 'Toilet', basePrice: 35 },
            { name: 'Sink', basePrice: 25 },
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
    const [activeCategory, setActiveCategory] = useState(0);

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

    // Navigate to next category
    const nextCategory = () => {
        setActiveCategory((prev) => (prev === itemCategories.length - 1 ? prev : prev + 1));
    };

    // Navigate to previous category
    const prevCategory = () => {
        setActiveCategory((prev) => (prev === 0 ? prev : prev - 1));
    };

    return (
        <Layout>
            <div className="item-selection-wrapper">
                    {/* Header */}
                <header className="header">
                    <Link href="/choose-service" className="back-button">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                    <div className="header-center">
                        <div className="crown-icon">👑</div>
                        <div className="phone-number">(888) 888-BIN BEAR</div>
                    </div>
                    <Link href="/" className="close-button">
                        <FontAwesomeIcon icon={faTimes} />
                    </Link>
                </header>

                {/* Title Section */}
                <div className="title-section">
                    <h1>Add Your Items</h1>
                    <p className="swipe-instruction">Swipe left &amp; right. Tap the +/- buttons to add.</p>
                    <div className="location-info">
                        <span className="location-pin">📍</span>
                        <span>Junk King Chicago West (60009)</span>
                        <Link href="/my-items" className="my-items-link">
                            My Items <span className="circle">{Object.values(selectedItems).reduce((a, b) => a + b, 0)}</span>
                        </Link>
                    </div>
                </div>

                {/* Category Grid */}
                <div className="category-grid">
                    <div className={`category-card ${activeCategory === 0 ? 'active' : ''}`} onClick={() => setActiveCategory(0)}>
                        <div className="category-image-container">
                            <Image 
                                src="/assets/imgs/sofa.png"
                                alt="Couches & Chairs"
                                width={120}
                                height={100}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className="category-title">Couches & Chairs</div>
                    </div>
                    
                    <div className={`category-card ${activeCategory === 1 ? 'active' : ''}`} onClick={() => setActiveCategory(1)}>
                        <div className="category-image-container">
                            <Image 
                                src="/assets/imgs/table.png"
                                alt="Tables & Dressers"
                                width={120}
                                height={100}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className="category-title">Tables & Dressers</div>
                    </div>

                    <div className={`category-card ${activeCategory === 2 ? 'active' : ''}`} onClick={() => setActiveCategory(2)}>
                        <div className="category-image-container">
                            <Image 
                                src="/assets/imgs/lcd.png"
                                alt="Electronics"
                                width={120}
                                height={100}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className="category-title">Electronics</div>
                    </div>

                    <div className={`category-card ${activeCategory === 3 ? 'active' : ''}`} onClick={() => setActiveCategory(3)}>
                        <div className="category-image-container">
                            <Image 
                                src="/assets/imgs/washing.png"
                                alt="Appliances"
                                width={120}
                                height={100}
                                style={{ objectFit: 'contain' }}
                            />
                                            </div>
                        <div className="category-title">Appliances</div>
                                            </div>

                    <div className={`category-card ${activeCategory === 4 ? 'active' : ''}`} onClick={() => setActiveCategory(4)}>
                        <div className="category-image-container">
                            <Image 
                                src="/assets/imgs/cycle.png"
                                alt="Yard Equipment"
                                width={120}
                                height={100}
                                style={{ objectFit: 'contain' }}
                            />
                                        </div>
                        <div className="category-title">Yard Equipment</div>
                                </div>

                    <div className={`category-card ${activeCategory === 5 ? 'active' : ''}`} onClick={() => setActiveCategory(5)}>
                        <div className="category-image-container">
                            <Image 
                                src="/assets/imgs/bath.png"
                                alt="Bathroom Fixtures"
                                width={120}
                                height={100}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className="category-title">Bathroom Fixtures</div>
                    </div>
                </div>

                {/* Estimate Section */}
                <div className="estimate-section">
                    <div className="estimate-amount">
                        <span>Your Estimate:</span>
                        <span className="price">${estimate.toFixed(0)}</span>
                    </div>
                    <button className="clear-items" onClick={clearItems}>
                        Clear Items
                    </button>
                </div>

                {/* Items List */}
                <div className="items-list">
                    {itemCategories[activeCategory].items.map((item, index) => (
                        <div key={index} className="item-row">
                                            <div className="item-info">
                                <span className="item-radio"></span>
                                                <span className="item-name">{item.name}</span>
                                            </div>
                                            <div className="item-controls">
                                                <button
                                    className="control-btn decrease"
                                                    onClick={() => updateItemCount(item.name, -1)}
                                    disabled={!selectedItems[item.name]}
                                                >
                                                    −
                                                </button>
                                                <span className="item-count">
                                                    {selectedItems[item.name] || 0}
                                                </span>
                                                <button
                                    className="control-btn increase"
                                                    onClick={() => updateItemCount(item.name, 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="bottom-cta">
                    <Link href="/construction-cleanup" className="book-now-btn">
                                Book Now & Save $20!*
                    </Link>
                    <p className="cta-note">* excludes jobs $99 and under</p>
                    <Link href="/pickup" className="pick-up-btn">
                        Pick These Up
                        </Link>
                    </div>

                    {/* Styles */}
                    <style jsx>{`
                    .item-selection-wrapper {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        background-color: #f5f5f5;
                        min-height: 100vh;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        max-width: 700px;
                            margin: 0 auto;
                        border: 1px solid #FF7701;
                        }

                        /* Header */
                    .header {
                        background-color: #FF7701;
                        color: white;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px 15px;
                    }

                    .header-center {
                            display: flex;
                        flex-direction: column;
                            align-items: center;
                    }

                    .crown-icon {
                        font-size: 18px;
                    }

                    .phone-number {
                        font-size: 16px;
                        font-weight: bold;
                    }

                    .back-button, .close-button {
                        color: white;
                        font-size: 18px;
                            background: none;
                            border: none;
                            cursor: pointer;
                    }

                    /* Title Section */
                    .title-section {
                        padding: 15px;
                        background-color: #FF7701;
                        color: white;
                    
                    }

                    h1 {
                        font-size: 22px;
                        margin: 0 0 5px 0;
                        font-weight: bold;
                    }

                    .swipe-instruction {
                        font-size: 12px;
                        margin: 0 0 10px 0;
                        text-align: right;
                    }

                    .location-info {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 14px;
                    }

                    .location-pin {
                        margin-right: 5px;
                    }

                    .my-items-link {
                        color: white;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                    }

                    .circle {
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background-color: white;
                        color: #FF7701;
                        border-radius: 50%;
                        text-align: center;
                        margin-left: 5px;
                        font-weight: bold;
                    }

                    /* Category Grid */
                    .category-grid {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-around;
                        padding: 10px;
                        background-color: white;
                    }

                    .category-card {
                        width: 31%;
                        margin-bottom: 15px;
                        cursor: pointer;
                        transition: transform 0.3s ease;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .category-card.active {
                        border: 2px solid #4caf50;
                        border-radius: 8px;
                        background-color: rgba(76, 175, 80, 0.1);
                    }

                    .category-image-container {
                        width: 95%;
                        height: 120px;
                        border-radius: 5px;
                        overflow: hidden;
                        margin-bottom: 5px;
                        background-color: #fff;
                        border: 2px solid #4caf50;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 5px;
                    }

                    .category-title {
                        font-size: 14px;
                        font-weight: bold;
                            color: #333;
                        text-align: center;
                        margin-bottom: 5px;
                    }

                    @media (max-width: 768px) {
                        .category-card {
                            width: 48%;
                        }
                    }

                    @media (max-width: 480px) {
                        .category-card {
                            width: 100%;
                        }
                        }

                        /* Estimate Section */
                        .estimate-section {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        padding: 10px 15px;
                        background-color: #f0f0f0;
                        border-top: 1px solid #e0e0e0;
                        border-bottom: 1px solid #e0e0e0;
                    }

                    .estimate-amount {
                            font-size: 16px;
                        font-weight: bold;
                            color: #333;
                        }

                    .price {
                        color: #FF7701;
                        margin-left: 5px;
                        }

                        .clear-items {
                        background-color: #ff9800;
                        color: white;
                        border: none;
                            border-radius: 4px;
                        padding: 6px 12px;
                        font-size: 14px;
                            cursor: pointer;
                    }

                    /* Items List */
                    .items-list {
                        flex: 1;
                            overflow-y: auto;
                        padding: 10px 15px;
                        }

                        .item-row {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        padding: 5px 0;
                        border-bottom: 1px solid #e0e0e0;
                        }

                        .item-info {
                            display: flex;
                            align-items: center;
                    }

                    .item-radio {
                        width: 15px;
                        height: 15px;
                        border: 1px solid #ccc;
                        border-radius: 50%;
                        margin-right: 10px;
                    }

                        .item-name {
                        font-size: 14px;
                        color: #333;
                        }

                        .item-controls {
                            display: flex;
                            align-items: center;
                        }

                        .control-btn {
                            width: 24px;
                            height: 24px;
                        border-radius: 4px;
                        border: none;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        font-size: 16px;
                        font-weight: bold;
                        cursor: pointer;
                    }

                    .decrease {
                        background-color: #f0f0f0;
                            color: #333;
                        }

                    .increase {
                        background-color: #FF7701;
                        color: white;
                        }

                        .item-count {
                        width: 30px;
                            text-align: center;
                        font-size: 14px;
                        }

                    /* Bottom CTA */
                        .bottom-cta {
                        background-color: #FF7701;
                        padding: 15px;
                            text-align: center;
                        }

                        .book-now-btn {
                        display: block;
                            width: 100%;
                        background-color: #ffffff;
                        color: #FF7701;
                        font-size: 18px;
                            font-weight: bold;
                        padding: 12px;
                            border-radius: 4px;
                        margin-bottom: 8px;
                        text-decoration: none;
                        }

                        .cta-note {
                        font-size: 12px;
                        color: white;
                        margin: 5px 0 10px;
                    }

                    .pick-up-btn {
                        display: block;
                                width: 100%;
                        background-color: #4caf50;
                        color: white;
                        font-size: 18px;
                        font-weight: bold;
                        padding: 12px;
                        border-radius: 4px;
                        text-decoration: none;
                        }
                    `}</style>
            </div>
        </Layout>
    );
};

export default ItemSelection;