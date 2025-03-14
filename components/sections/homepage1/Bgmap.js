export default function Bgmap({ coordinates }) {
    const defaultLocation = "37.15364135542302,-83.76408938441998"; // Latitude, Longitude
    const location = coordinates || defaultLocation;
    
    // Split the location into latitude and longitude
    const [lat, lon] = location.split(',').map(Number);
    const delta = 0.01; // Adjust delta to control the zoom level (smaller delta = closer zoom)
    
    // Calculate the bounding box
    const bbox = [
        lon - delta, // min_lon
        lat - delta, // min_lat
        lon + delta, // max_lon
        lat + delta  // max_lat
    ].join(',');

    return (
        <section className="map-premium-section" data-aos="fade-up">
            <div className="container">
                <div className="section-premium-header">
                    <h2 className="section-premium-title">Our Service Area</h2>
                    <p className="section-premium-subtitle">
                        We provide junk removal services throughout the region. Check if we service your area!
                    </p>
                </div>
                
                <div className="map-premium-container">
                    <iframe
                        className="map-premium"
                        src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik`}
                        allowFullScreen
                        loading="lazy"
                    />
                    
                    <div className="map-premium-overlay">
                        <div className="map-premium-content">
                            <h3>Need service in your area?</h3>
                            <p>Contact us to check availability and schedule your pickup!</p>
                            <a href="/contact" className="btn-premium btn-premium-primary">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .map-premium-section {
                    padding: 100px 0;
                    background-color: #f9f9f9;
                    position: relative;
                }
                
                .map-premium-container {
                    position: relative;
                    height: 500px;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                    margin-top: 50px;
                }
                
                .map-premium {
                    width: 100%;
                    height: 100%;
                    border: 0;
                }
                
                .map-premium-overlay {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 350px;
                    background: rgba(0, 0, 0, 0.8);
                    padding: 30px;
                    color: white;
                    border-top-left-radius: 16px;
                }
                
                .map-premium-content h3 {
                    font-size: 22px;
                    font-weight: 700;
                    margin-bottom: 15px;
                    color: #FF7F00;
                }
                
                .map-premium-content p {
                    font-size: 16px;
                    line-height: 1.6;
                    margin-bottom: 20px;
                    color: rgba(255, 255, 255, 0.9);
                }
                
                .btn-premium {
                    display: inline-flex;
                    align-items: center;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 16px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .btn-premium-primary {
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    color: #212121;
                    box-shadow: 0 4px 15px rgba(255, 127, 0, 0.3);
                }
                
                .btn-premium-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(255, 127, 0, 0.4);
                    color: #212121;
                }
                
                @media (max-width: 992px) {
                    .map-premium-section {
                        padding: 80px 0;
                    }
                    
                    .map-premium-container {
                        height: 450px;
                    }
                    
                    .map-premium-overlay {
                        width: 300px;
                        padding: 25px;
                    }
                }
                
                @media (max-width: 768px) {
                    .map-premium-section {
                        padding: 60px 0;
                    }
                    
                    .map-premium-container {
                        height: 400px;
                    }
                    
                    .map-premium-overlay {
                        width: 100%;
                        position: relative;
                        border-radius: 0;
                        border-bottom-left-radius: 16px;
                        border-bottom-right-radius: 16px;
                    }
                    
                    .map-premium-content h3 {
                        font-size: 20px;
                    }
                }
                
                @media (max-width: 576px) {
                    .map-premium-section {
                        padding: 50px 0;
                    }
                    
                    .map-premium-container {
                        height: 350px;
                        margin-top: 30px;
                    }
                    
                    .map-premium-overlay {
                        padding: 20px;
                    }
                    
                    .map-premium-content h3 {
                        font-size: 18px;
                    }
                    
                    .map-premium-content p {
                        font-size: 14px;
                    }
                }
            `}</style>
        </section>
    );
}