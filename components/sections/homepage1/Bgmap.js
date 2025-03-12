export default function Bgmap({ coordinates }) {
    const defaultLocation = "37.15364135542302,-83.76408938441998";
    const location = coordinates || defaultLocation;
    
    return (
        <>
            <div className="section bg-map d-block">
                <div className="container">
                    <div className="box-map">
                        <iframe 
                            className="wow animate__animated animate__fadeIn" 
                            src={`https://www.openstreetmap.org/export/embed.html?bbox=${location}&layer=mapnik`}
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
