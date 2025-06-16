import { useEffect, useState } from 'react'
import CountUp from '@/components/elements/CounterUp'
import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from 'next/router'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function DumpsterRental() {
    const router = useRouter()
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [isDropOff, setIsDropOff] = useState(true)
    const [inViewport, setInViewport] = useState(false)
    const [dumpsterSizes, setDumpsterSizes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await fetch('https://backend.binbearjunk.com/api/getPrice')
                const data = await response.json()

                if (data.success) {
                    // Find prices from the API response
                    const smallPrice = data.data.find(item => item.name === "drumpster_size_small_price")?.value || "50"
                    const mediumPrice = data.data.find(item => item.name === "drumpster_size_medium_price")?.value || "100"
                    const largePrice = data.data.find(item => item.name === "drumpster_size_large_price")?.value || "150"

                    // Update dumpster sizes with fetched prices
                    setDumpsterSizes([
                        {
                            id: 'small',
                            name: 'Small (10 yard)',
                            description: 'Good for small projects, renovation debris, or yard waste',
                            dimensions: '12ft L x 8ft W x 3.5ft H',
                            price: `$${smallPrice}`,
                            image: 'img/dustbin.png'
                        },
                        {
                            id: 'medium',
                            name: 'Medium (20 yard)',
                            description: 'Perfect for home remodels, larger cleanouts, or construction projects',
                            dimensions: '16ft L x 8ft W x 4.5ft H',
                            price: `$${mediumPrice}`,
                            image: 'img/dustbin.png'
                        },
                        {
                            id: 'large',
                            name: 'Large (30 yard)',
                            description: 'Ideal for major renovations, new construction, or commercial projects',
                            dimensions: '20ft L x 8ft W x 5.5ft H',
                            price: `$${largePrice}`,
                            image: 'img/dustbin.png'
                        }
                    ])
                } else {
                    setError("Failed to fetch prices")
                }
            } catch (err) {
                setError("Error fetching prices")
                console.error("Error fetching prices:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchPrices()
    }, [])

    const handleScroll = () => {
        const elements = document.getElementsByClassName('counterUp')
        if (elements.length > 0) {
            const element = elements[0]
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight
            if (isInViewport && !inViewport) {
                setInViewport(true);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleNext = () => {
        if (!selectedSize || !selectedDate || !selectedTime) {
            alert('Please select a dumpster size, delivery date, and time');
            return;
        }
        
        const selectedDumpsterDetails = dumpsterSizes.find(ds => ds.id === selectedSize);
        if (!selectedDumpsterDetails) {
            alert('Selected dumpster details not found. Please re-select.');
            return;
        }

        const dumpsterRentalBookingInput = {
            type: 'dumpsterRental',
            dumpsterDetails: selectedDumpsterDetails, // Contains name, price, dimensions, etc.
            date: selectedDate.toISOString().split('T')[0], // Format date as YYYY-MM-DD
            time: selectedTime,
            serviceType: isDropOff ? 'dropoff' : 'pickup'
        };
        
        if (typeof window !== 'undefined') {
            localStorage.setItem('pendingBookingDetails', JSON.stringify(dumpsterRentalBookingInput));
        }
        
        router.push('/ScheduleDumpster'); // Corrected path
    };
    
    return (
            <Layout>
            <div className="dumpster-rental-container">
                
                
                {/* Dumpster Size Selection */}
                <section className="selection-section">
                    <h2>Choose Dumpster Size</h2>
                    {loading ? (
                        <div className="loading-container">
                            <p>Loading dumpster prices...</p>
                        </div>
                    ) : error ? (
                        <div className="error-container">
                            <p>Error loading prices. Please try again later.</p>
                        </div>
                    ) : (
                                <div className="dumpster-sizes">
                                    {dumpsterSizes.map((size) => (
                                        <div
                                            key={size.id}
                                            className={`dumpster-card dumpster-${size.id} ${selectedSize === size.id ? 'selected' : ''}`}
                                            onClick={() => setSelectedSize(size.id)}
                                        >
                                            <div className="image-container">
                                                <img src={size.image} alt={size.name} className="dumpster-image" />
                                            </div>
                                            <div className="card-content">
                                                <h3>{size.name}</h3>
                                                <p className="price">{size.price}</p>
                                                <p className="description">{size.description}</p>
                                                <p className="dimensions"><strong>Dimensions:</strong> {size.dimensions}</p>
                                            </div>
                                            <div className="selection-indicator"></div>
                                        </div>
                                    ))}
                                </div>
                    )}
                </section>
                
                {/* Date Selection */}
                <section className="selection-section">
                    <h2>Select Delivery Date and Time</h2>
                    <div className="date-time-picker-container">
                        <div className="time-picker-container">
                            <p>Select time:</p>
                            <select 
                                className="time-input"
                                onChange={(e) => setSelectedTime(e.target.value)}
                                value={selectedTime || ''}
                            >
                                <option value="" disabled>Select a time</option>
                                <option value="8:00 AM">8:00 AM</option>
                                <option value="9:00 AM">9:00 AM</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="4:00 PM">4:00 PM</option>
                                <option value="5:00 PM">5:00 PM</option>
                            </select>
                        </div>
                        <div className="custom-date-picker">
                            <p>Select date:</p>
                            <input 
                                type="date" 
                                className="date-input"
                                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                                min={new Date().toISOString().split('T')[0]}
                            />
                        </div>
                    </div>
                </section>
                
                {/* Service Type Selection */}
                <section className="selection-section">
                    <h2>Service Type</h2>
                    <div className="toggle-container">
                        <div 
                            className={`toggle-option ${isDropOff ? 'active' : ''}`}
                            onClick={() => setIsDropOff(true)}
                        >
                            Drop-off
                        </div>
                        <div 
                            className={`toggle-option ${!isDropOff ? 'active' : ''}`}
                            onClick={() => setIsDropOff(false)}
                        >
                            Pick-up
                        </div>
                    </div>
                </section>
                
                {/* Navigation Buttons */}
                <div className="button-container">
                    <button className="back-button" onClick={() => router.back()}>
                        ← Back
                    </button>
                    <button 
                        className={`next-button ${(!selectedSize || !selectedDate || !selectedTime) ? 'disabled' : ''}`}
                        onClick={handleNext}
                        disabled={!selectedSize || !selectedDate || !selectedTime}
                    >
                        Next →
                    </button>
                </div>
            </div>

            <style jsx>{`
                .dumpster-rental-container {
                    padding: 40px 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .page-title {
                    text-align: center;
                    color: #333;
                    margin-bottom: 16px;
                    font-size: 32px;
                }
                
                .page-description {
                    text-align: center;
                    color: #666;
                    margin-bottom: 40px;
                    font-size: 18px;
                }
                
                .selection-section {
                    margin-bottom: 40px;
                }
                
                .selection-section h2 {
                    margin-bottom: 20px;
                    color: #444;
                    font-size: 24px;
                    border-bottom: 2px solid #FF7701;
                    padding-bottom: 10px;
                    display: inline-block;
                }
                
                .loading-container,
                .error-container {
                    background-color: #fff;
                    border-radius: 8px;
                    padding: 20px;
                    text-align: center;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .error-container {
                    color: #d9534f;
                }
                
                .dumpster-sizes {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 20px;
                }
                
                .dumpster-card {
                    background-color: #fff;
                    border-radius: 8px;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                    position: relative;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    border: 2px solid transparent;
                }
                
                .dumpster-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
                }
                
                .dumpster-card.selected {
                    border-color: #FF7701;
                    box-shadow: 0 0 12px rgba(255, 119, 1, 0.4);
                }
                
                .dumpster-card.selected .selection-indicator {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background-color: #FF7701;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .dumpster-card.selected .selection-indicator:after {
                    content: "✓";
                    color: white;
                    font-weight: bold;
                }
                
                .image-container {
                    margin-bottom: 15px;
                    text-align: center;
                }
                
                .dumpster-image {
                    max-width: 100%;
                    height: auto;
                    object-fit: contain;
                    border-radius: 6px;
                    transition: transform 0.2s ease;
                }

                .dumpster-small .dumpster-image {
                    width: 120px;
                    height: auto;
                }
                
                .dumpster-medium .dumpster-image {
                    width: 150px;
                    height: auto;
                }
                
                .dumpster-large .dumpster-image {
                    width: 180px;
                    height: auto;
                }
                
                .card-content h3 {
                    font-size: 20px;
                    color: #333;
                    margin-bottom: 10px;
                }
                
                .price {
                    font-size: 24px;
                    font-weight: bold;
                    color: #FF7701;
                    margin-bottom: 12px;
                }
                
                .description {
                    color: #666;
                    margin-bottom: 12px;
                    line-height: 1.5;
                }
                
                .dimensions {
                    font-size: 14px;
                    color: #777;
                }
                
                .date-time-picker-container {
                    display: flex;
                    flex-direction: row;
                    gap: 20px;
                    max-width: 600px;
                    margin: 0 auto;
                }
                
                .time-picker-container {
                    flex: 1;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                
                .custom-date-picker {
                    flex: 1;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                
                .time-picker-container p,
                .custom-date-picker p {
                    margin-bottom: 10px;
                    color: #555;
                }
                
                .time-input,
                .date-input {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 16px;
                    color: #333;
                }
                
                .time-input:focus,
                .date-input:focus {
                    border-color: #FF7701;
                    outline: none;
                }
                
                .toggle-container {
                    display: flex;
                    max-width: 400px;
                    margin: 0 auto;
                    background-color: #f5f5f5;
                    border-radius: 50px;
                    overflow: hidden;
                }
                
                .toggle-option {
                    padding: 15px 0;
                    flex: 1;
                    text-align: center;
                    cursor: pointer;
                    font-weight: 500;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                
                .toggle-option.active {
                    background-color: #FF7701;
                    color: white;
                }
                
                .button-container {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 40px;
                }
                
                .back-button, .next-button {
                    padding: 12px 24px;
                    border-radius: 5px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                
                .back-button {
                    color: #333;
                    background-color: #f5f5f5;
                    border: 1px solid #ddd;
                }
                
                .back-button:hover {
                    background-color: #e9e9e9;
                }
                
                .next-button {
                    background-color: #FF7701;
                    color: white;
                    border: none;
                }
                
                .next-button:hover {
                    background-color: #e66901;
                }
                
                .next-button.disabled {
                    background-color: #ccc;
                    cursor: not-allowed;
                }
                
                @media (max-width: 768px) {
                    .dumpster-sizes {
                        grid-template-columns: 1fr;
                    }
                    
                    .date-time-picker-container {
                        flex-direction: column;
                    }
                    
                    .button-container {
                        flex-direction: column;
                        gap: 15px;
                    }
                    
                    .back-button, .next-button {
                        width: 100%;
                    }
                }
            `}</style>
            </Layout>
    )
}