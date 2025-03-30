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
        title: 'Tables & Dressers',
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
    },
    {
        title: 'Office Furniture',
        image: '/assets/imgs/chair.png',
        items: [
            { name: 'Office Chair', basePrice: 25 },
            { name: 'Desk', basePrice: 40 },
            { name: 'Filing Cabinet', basePrice: 30 },
            { name: 'Bookshelf', basePrice: 35 }
        ]
    },
    {
        title: 'Mattresses',
        image: '/assets/imgs/mattress.png',
        items: [
            { name: 'Twin Mattress', basePrice: 40 },
            { name: 'Queen Mattress', basePrice: 60 },
            { name: 'King Mattress', basePrice: 80 },
            { name: 'Box Spring', basePrice: 30 }
        ]
    },
    {
        title: 'Exercise Equipment',
        image: '/assets/imgs/treadmill.png',
        items: [
            { name: 'Treadmill', basePrice: 80 },
            { name: 'Exercise Bike', basePrice: 50 },
            { name: 'Weight Bench', basePrice: 40 },
            { name: 'Free Weights', basePrice: 25 }
        ]
    },
    {
        title: 'Outdoor Furniture',
        image: '/assets/imgs/patio.png',
        items: [
            { name: 'Patio Table', basePrice: 35 },
            { name: 'Patio Chair', basePrice: 20 },
            { name: 'Outdoor Umbrella', basePrice: 25 },
            { name: 'Grill', basePrice: 40 }
        ]
    },
    {
        title: 'Kitchen Items',
        image: '/assets/imgs/kitchen.png',
        items: [
            { name: 'Small Appliances', basePrice: 15 },
            { name: 'Dishes & Cookware', basePrice: 20 },
            { name: 'Kitchen Island', basePrice: 50 },
            { name: 'Bar Stools', basePrice: 25 }
        ]
    },
    {
        title: 'Storage Items',
        image: '/assets/imgs/storage.png',
        items: [
            { name: 'Plastic Bins', basePrice: 15 },
            { name: 'Wardrobe', basePrice: 45 },
            { name: 'Storage Rack', basePrice: 30 },
            { name: 'Trunk/Chest', basePrice: 25 }
        ]
    }
];

// Create a flat price map from all categories
const itemPrices = {};
itemCategories.forEach(category => {
    category.items.forEach(item => {
        itemPrices[item.name] = item.basePrice;
    });
});

const ItemSelection = () => {
    const [estimate, setEstimate] = useState(0);
    const [selectedItems, setSelectedItems] = useState({});
    const [activeCategory, setActiveCategory] = useState(0);
    const [categoryScrollIndex, setCategoryScrollIndex] = useState(0);
    const visibleCategories = 5; // Number of categories visible at once

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

    // Navigate the category slider
    const scrollCategoriesLeft = () => {
        if (categoryScrollIndex > 0) {
            setCategoryScrollIndex(prev => prev - 1);
        }
    };

    const scrollCategoriesRight = () => {
        if (categoryScrollIndex < itemCategories.length - visibleCategories) {
            setCategoryScrollIndex(prev => prev + 1);
        }
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

                {/* Category Slider */}
                <div className="category-slider-container">
                    <button 
                        className={`slider-nav-button slider-prev ${categoryScrollIndex === 0 ? 'disabled' : ''}`} 
                        onClick={scrollCategoriesLeft}
                        disabled={categoryScrollIndex === 0}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    
                    <div className="category-slider">
                        <div 
                            className="category-slider-track" 
                            style={{ transform: `translateX(-${categoryScrollIndex * 20}%)` }}
                        >
                            {itemCategories.map((category, index) => (
                                <div 
                                    key={index} 
                                    className={`category-card ${activeCategory === index ? 'active' : ''}`} 
                                    onClick={() => setActiveCategory(index)}
                                >
                                    <div className="category-image-container">
                                        <Image 
                                            src={category.image}
                                            alt={category.title}
                                            width={120}
                                            height={100}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="category-title">{category.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <button 
                        className={`slider-nav-button slider-next ${categoryScrollIndex >= itemCategories.length - visibleCategories ? 'disabled' : ''}`} 
                        onClick={scrollCategoriesRight}
                        disabled={categoryScrollIndex >= itemCategories.length - visibleCategories}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
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
                        <div className="cta-container">
                            <div className="cta-text">
                                <h3>Book Now & Save $20!*</h3>
                                <p className="cta-note">* excludes jobs $99 and under</p>
                            </div>
                            <div className="cta-buttons">
                                <Link href="/ScheduleDumpster" className="book-now-btn">
                                    Book Now
                                </Link>
                                <Link href="/pickup" className="pick-up-btn">
                                    Pick These Up
                                </Link>
                            </div>
                        </div>
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
                        padding: 0 15px;
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
                        color: white;
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

                    /* Category Slider */
                    .category-slider-container {
                        position: relative;
                        display: flex;
                        align-items: center;
                        margin: 20px 0;
                        padding: 0 10px;
                        max-width: 100%;
                    }

                    .category-slider {
                        overflow: hidden;
                        width: 100%;
                        padding: 10px 0;
                    }

                    .category-slider-track {
                        display: flex;
                        transition: transform 0.3s ease;
                    }

                    .category-card {
                        flex: 0 0 20%;
                        min-width: 20%;
                        box-sizing: border-box;
                        padding: 10px;
                        border: 2px solid transparent;
                        border-radius: 12px;
                        cursor: pointer;
                        transition: all 0.2s ease;
                        text-align: center;
                    }

                    .category-card.active {
                        border-color: #4CAF50;
                    }

                    .category-image-container {
                        width: 100%;
                        height: 110px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #f9f9f9;
                        border-radius: 8px;
                        margin-bottom: 8px;
                    }

                    .category-title {
                        font-size: 14px;
                        font-weight: 500;
                        color: #333;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .slider-nav-button {
                        background: #FF7701;
                        color: white;
                        border: none;
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        z-index: 10;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
                        transition: all 0.2s ease;
                    }

                    .slider-nav-button:hover {
                        background: #e66901;
                        transform: scale(1.05);
                    }

                    .slider-nav-button.disabled {
                        background: #ccc;
                        cursor: not-allowed;
                    }

                    .slider-prev {
                        margin-right: 10px;
                    }

                    .slider-next {
                        margin-left: 10px;
                    }

                    @media (max-width: 768px) {
                        .category-card {
                            flex: 0 0 25%;
                            min-width: 25%;
                        }

                        .category-slider-track {
                            transform: translateX(-${categoryScrollIndex * 25}%) !important;
                        }
                    }

                    @media (max-width: 576px) {
                        .category-card {
                            flex: 0 0 33.333%;
                            min-width: 33.333%;
                        }

                        .category-slider-track {
                            transform: translateX(-${categoryScrollIndex * 33.333}%) !important;
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
                    width: 100%;
                }

                .cta-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 700px;
                    margin: 0 auto;
                }

                .cta-text {
                    flex: 1;
                    text-align: left;
                }

                .cta-text h3 {
                    font-size: 20px;
                    color: white;
                    margin: 0;
                    font-weight: bold;
                }

                .cta-note {
                    font-size: 12px;
                    color: white;
                    margin: 5px 0 0;
                }

                .cta-buttons {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .book-now-btn {
                    background-color: #ffffff;
                    color: #FF7701;
                    font-size: 16px;
                    font-weight: bold;
                    padding: 10px 15px;
                    border-radius: 4px;
                    text-decoration: none;
                    display: inline-block;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    transition: all 0.2s ease;
                }

                .book-now-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .pick-up-btn {
                    background-color: #4caf50;
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                    padding: 10px 15px;
                    border-radius: 4px;
                    text-decoration: none;
                    display: inline-block;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    transition: all 0.2s ease;
                }

                .pick-up-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                @media (max-width: 576px) {
                    .cta-container {
                        flex-direction: column;
                        gap: 15px;
                    }
                    
                    .cta-text {
                        text-align: center;
                    }
                    
                    .cta-buttons {
                        width: 100%;
                        justify-content: center;
                    }
                }
                `}</style>
            </div>
        </Layout>
    );
};

export default ItemSelection;