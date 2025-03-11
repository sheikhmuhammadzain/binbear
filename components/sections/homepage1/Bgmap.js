export default function Bgmap({ coordinates }) {
    const defaultLocation = "37.15364135542302,-83.76408938441998";
    const location = coordinates || defaultLocation;
    
    // Parse the coordinates to create a proper bounding box
    const createBoundingBox = (coords) => {
        const [lat, lng] = coords.split(',').map(coord => parseFloat(coord.trim()));
        // Create a small bounding box around the center point (approximately 0.01 degrees in each direction)
        const offset = 0.01;
        return `${lng - offset},${lat - offset},${lng + offset},${lat + offset}`;
    };

    const bbox = createBoundingBox(location);
    
    return (
        <>
            <div className="section bg-map d-block">
                <div className="container">
                    <div className="box-map">
                        <iframe 
                            className="wow animate__animated animate__fadeIn" 
                            src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${location.split(',').reverse().join(',')}`}
                            height={420} 
                            style={{ border: 0, width: '100%' }} 
                            allowFullScreen 
                            loading="lazy" 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
