// /pages/history.js or /pages/history/index.js
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faStar, faHandshake, faUsers, faRecycle, faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function History() {
    const [activeTab, setActiveTab] = useState('mission');
    
    const timelineEvents = [
        {
            year: "2010",
            title: "Our Humble Beginning",
            description: "BinBear started with just two trucks and a vision to revolutionize junk removal with exceptional service and environmental responsibility.",
            image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
            year: "2013",
            title: "Regional Expansion",
            description: "After establishing our reputation for quality service, we expanded to neighboring cities, bringing our signature approach to more communities.",
            image: "https://images.unsplash.com/photo-1504376379689-8d54347b26c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
        },
        {
            year: "2015",
            title: "Green Initiative Launch",
            description: "We formalized our commitment to the environment with a comprehensive recycling program, ensuring at least 60% of collected materials would be diverted from landfills.",
            image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            year: "2018",
            title: "Technology Integration",
            description: "The launch of our mobile app and advanced booking system revolutionized how customers interact with our services, making junk removal more convenient than ever.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            year: "2022",
            title: "Nationwide Expansion",
            description: "BinBear now operates in over 150 locations across the country, maintaining our commitment to quality service and environmental responsibility.",
            image: "https://images.unsplash.com/photo-1530939027401-ab39a71fb8b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
    ];
    
    const stats = [
        { number: "150+", label: "Locations Nationwide", icon: faMapMarkerAlt },
        { number: "60%+", label: "Materials Recycled", icon: faRecycle },
        { number: "100K+", label: "Satisfied Customers", icon: faStar },
        { number: "1000+", label: "Team Members", icon: faUsers }
    ];

    const values = [
        {
            title: "Customer Satisfaction",
            description: "We prioritize your experience above all else, with transparent pricing, punctual service, and a commitment to exceeding expectations on every job.",
            icon: faStar
        },
        {
            title: "Environmental Responsibility",
            description: "Our operations are designed to minimize landfill impact, with comprehensive sorting, recycling, and donation programs for all collected materials.",
            icon: faLeaf
        },
        {
            title: "Operational Excellence",
            description: "From our highly trained teams to our carefully maintained equipment, we strive for efficiency and effectiveness in every aspect of our business.",
            icon: faCheck
        },
        {
            title: "Community Engagement",
            description: "We believe in giving back to the communities we serve through donations, volunteer initiatives, and supporting local charitable organizations.",
            icon: faHandshake
        }
    ];

    return (
        <Layout>
            <div className="history-page">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-badge">OUR STORY</div>
                            <h1 className="hero-title">The BinBear Journey</h1>
                            <p className="hero-subtitle">From humble beginnings to becoming a nationwide leader in junk removal, our story is one of growth, innovation, and unwavering commitment to service excellence.</p>
                        </div>
                    </div>
                    <div className="hero-overlay"></div>
                </section>
                
                {/* Stats Section */}
                <section className="stats-section">
                    <div className="container">
                        <div className="stats-container">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-box">
                                    <div className="stat-icon">
                                        <FontAwesomeIcon icon={stat.icon} />
                                    </div>
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="timeline-section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Our Milestones</h2>
                            <p className="section-subtitle">Key moments in our journey of growth and innovation</p>
                        </div>
                        
                        <div className="timeline">
                            <div className="timeline-line"></div>
                            
                            {timelineEvents.map((event, index) => (
                                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                                    <div className="timeline-content">
                                        <div className="timeline-year">{event.year}</div>
                                        <div className="timeline-body">
                                            <img src={event.image} alt={event.title} className="timeline-image" />
                                            <h3 className="timeline-title">{event.title}</h3>
                                            <p className="timeline-description">{event.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="mission-section">
                    <div className="container">
                        <div className="mission-container">
                            <div className="mission-image">
                                <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="Our Mission" />
                            </div>
                            <div className="mission-content">
                                <div className="tab-navigation">
                                    <button 
                                        className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('mission')}
                                    >
                                        Our Mission
                                    </button>
                                    <button 
                                        className={`tab-button ${activeTab === 'vision' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('vision')}
                                    >
                                        Our Vision
                                    </button>
                                    <button 
                                        className={`tab-button ${activeTab === 'values' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('values')}
                                    >
                                        Our Values
                                    </button>
                                </div>
                                
                                <div className="tab-content">
                                    {activeTab === 'mission' && (
                                        <div className="mission-tab">
                                            <h3 className="tab-title">Our Mission</h3>
                                            <p>To provide exceptional junk removal services that simplify our customers' lives while promoting environmental sustainability through responsible waste management practices.</p>
                                            <ul className="mission-list">
                                                <li><span className="check-icon"><FontAwesomeIcon icon={faCheck} /></span> Deliver reliable, on-time service</li>
                                                <li><span className="check-icon"><FontAwesomeIcon icon={faCheck} /></span> Maintain transparent, upfront pricing</li>
                                                <li><span className="check-icon"><FontAwesomeIcon icon={faCheck} /></span> Maximize recycling and donation opportunities</li>
                                                <li><span className="check-icon"><FontAwesomeIcon icon={faCheck} /></span> Treat every customer with respect and care</li>
                                            </ul>
                                        </div>
                                    )}
                                    
                                    {activeTab === 'vision' && (
                                        <div className="vision-tab">
                                            <h3 className="tab-title">Our Vision</h3>
                                            <p>To be the most trusted and innovative name in junk removal, recognized nationwide for our service quality, environmental leadership, and positive impact on the communities we serve.</p>
                                            <div className="vision-goals">
                                                <div className="vision-goal">
                                                    <div className="goal-icon"><FontAwesomeIcon icon={faLeaf} /></div>
                                                    <div className="goal-text">Environmental Leadership</div>
                                                </div>
                                                <div className="vision-goal">
                                                    <div className="goal-icon"><FontAwesomeIcon icon={faStar} /></div>
                                                    <div className="goal-text">Service Excellence</div>
                                                </div>
                                                <div className="vision-goal">
                                                    <div className="goal-icon"><FontAwesomeIcon icon={faHandshake} /></div>
                                                    <div className="goal-text">Community Impact</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {activeTab === 'values' && (
                                        <div className="values-tab">
                                            <h3 className="tab-title">Our Values</h3>
                                            <p>The core principles that guide everything we do at BinBear:</p>
                                            <div className="values-list">
                                                {values.map((value, index) => (
                                                    <div key={index} className="value-item">
                                                        <div className="value-icon"><FontAwesomeIcon icon={value.icon} /></div>
                                                        <div className="value-text">
                                                            <h4>{value.title}</h4>
                                                            <p>{value.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="team-section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Our Leadership Team</h2>
                            <p className="section-subtitle">Meet the people who drive our success</p>
                        </div>
                        
                        <div className="team-grid">
                            <div className="team-member">
                                <div className="member-image">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Leadership Team Member" />
                                </div>
                                <div className="member-info">
                                    <h3>John Smith</h3>
                                    <p>Chief Executive Officer</p>
                                </div>
                            </div>
                            
                            <div className="team-member">
                                <div className="member-image">
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="Leadership Team Member" />
                                </div>
                                <div className="member-info">
                                    <h3>Sarah Johnson</h3>
                                    <p>Chief Operations Officer</p>
                                </div>
                            </div>
                            
                            <div className="team-member">
                                <div className="member-image">
                                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Leadership Team Member" />
                                </div>
                                <div className="member-info">
                                    <h3>Michael Davis</h3>
                                    <p>Chief Technology Officer</p>
                                </div>
                            </div>
                            
                            <div className="team-member">
                                <div className="member-image">
                                    <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Leadership Team Member" />
                                </div>
                                <div className="member-info">
                                    <h3>Jennifer Wilson</h3>
                                    <p>Chief Marketing Officer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-box">
                            <div className="cta-content">
                                <h2>Join Our Story</h2>
                                <p>Become part of the BinBear journey as we continue to grow and shape the future of junk removal</p>
                            </div>
                            <div className="cta-buttons">
                                <Link href="/contact" className="cta-button primary">Contact Us</Link>
                                <Link href="/careers" className="cta-button secondary">Explore Careers</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                /* General Styles */
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .section-title {
                    font-size: 36px;
                    font-weight: 700;
                    color: #222;
                    margin-bottom: 15px;
                    position: relative;
                    padding-bottom: 15px;
                }

                .section-title:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80px;
                    height: 3px;
                    background-color: #FF7701;
                }

                .section-subtitle {
                    font-size: 18px;
                    color: #666;
                    max-width: 700px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                /* Hero Section */
                .hero-section {
                    position: relative;
                    padding: 120px 0;
                    text-align: center;
                    background-image: url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
                    background-size: cover;
                    background-position: center;
                    color: white;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    z-index: 1;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .hero-badge {
                    display: inline-block;
                    background-color: #FF7701;
                    color: white;
                    padding: 8px 20px;
                    border-radius: 30px;
                    font-weight: 600;
                    font-size: 14px;
                    margin-bottom: 25px;
                    letter-spacing: 1px;
                }

                .hero-title {
                    font-size: 48px;
                    font-weight: 800;
                    margin-bottom: 25px;
                    color: #fff;
                    line-height: 1.2;
                }

                .hero-subtitle {
                    font-size: 18px;
                    line-height: 1.8;
                    max-width: 700px;
                    margin: 0 auto;
                    opacity: 0.9;
                }

                /* Stats Section */
                .stats-section {
                    padding: 60px 0;
                    background-color: #FF7701;
                    color: white;
                }

                .stats-container {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }

                .stat-box {
                    flex: 1;
                    min-width: 10px;
                    text-align: center;
                    padding: 30px 20px;
                    position: relative;
                }

                .stat-box:not(:last-child):after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 50%;
                    width: 1px;
                    background-color: rgba(255, 255, 255, 0.3);
                }

                .stat-icon {
                    font-size: 10px;
                    margin-bottom: 15px;
                }

                .stat-number {
                    font-size: 42px;
                    font-weight: 800;
                    margin-bottom: 10px;
                    line-height: 1;
                }

                .stat-label {
                    font-size: 16px;
                    font-weight: 500;
                    opacity: 0.9;
                }

                /* Timeline Section */
                .timeline-section {
                    padding: 100px 0;
                    background-color: #f9f9f9;
                }

                .timeline {
                    position: relative;
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 40px 0;
                }

                .timeline-line {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 50%;
                    width: 4px;
                    background-color: #FF7701;
                    transform: translateX(-50%);
                }

                .timeline-item {
                    margin-bottom: 80px;
                    position: relative;
                }

                .timeline-item:last-child {
                    margin-bottom: 0;
                }

                .timeline-left .timeline-content {
                    padding-right: 40px;
                    text-align: right;
                }

                .timeline-right .timeline-content {
                    padding-left: 40px;
                    margin-left: 50%;
                }

                .timeline-year {
                    position: absolute;
                    width: 80px;
                    height: 80px;
                    background-color: #FF7701;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 700;
                    font-size: 20px;
                    z-index: 2;
                    box-shadow: 0 5px 15px rgba(255, 119, 1, 0.3);
                }

                .timeline-left .timeline-year {
                    right: -40px;
                    top: 20px;
                }

                .timeline-right .timeline-year {
                    left: -40px;
                    top: 20px;
                }

                .timeline-body {
                    background-color: white;
                    padding: 25px;
                    border-radius: 8px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                    width: 90%;
                }

                .timeline-left .timeline-body {
                    margin-left: auto;
                }

                .timeline-right .timeline-body {
                    margin-right: auto;
                }

                .timeline-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }

                .timeline-title {
                    font-size: 22px;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 15px;
                }

                .timeline-description {
                    font-size: 16px;
                    color: #666;
                    line-height: 1.6;
                }

                /* Mission Section */
                .mission-section {
                    padding: 100px 0;
                    background-color: white;
                }

                .mission-container {
                    display: flex;
                    align-items: center;
                    gap: 50px;
                }

                .mission-image {
                    flex: 1;
                    max-width: 500px;
                }

                .mission-image img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }

                .mission-content {
                    flex: 1;
                }

                .tab-navigation {
                    display: flex;
                    margin-bottom: 30px;
                    gap: 20px;
                    border-bottom: 2px solid #eee;
                }

                .tab-button {
                    padding: 12px 20px;
                    font-size: 16px;
                    font-weight: 600;
                    background: none;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .tab-button:after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background-color: #FF7701;
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }

                .tab-button.active {
                    color: black;
                }

                .tab-button.active:after {
                    transform: scaleX(1);
                }

                .tab-title {
                    font-size: 26px;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 20px;
                }

                .mission-tab p, .vision-tab p, .values-tab p {
                    font-size: 16px;
                    color: #666;
                    line-height: 1.7;
                    margin-bottom: 25px;
                }

                .mission-list {
                    list-style: none;
                    padding: 0;
                }

                .mission-list li {
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                    font-size: 16px;
                    color: #444;
                }

                .check-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 24px;
                    height: 24px;
                    background-color: #FF7701;
                    color: white;
                    border-radius: 50%;
                    margin-right: 15px;
                    font-size: 12px;
                }

                .vision-goals {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .vision-goal {
                    flex: 1;
                    min-width: 120px;
                    text-align: center;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border-radius: 8px;
                }

                .goal-icon {
                    font-size: 28px;
                    color: #FF7701;
                    margin-bottom: 10px;
                }

                .goal-text {
                    font-size: 16px;
                    font-weight: 600;
                    color: #444;
                }

                .values-list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .value-item {
                    display: flex;
                    gap: 20px;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }

                .value-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                }

                .value-icon {
                    font-size: 24px;
                    color: #FF7701;
                    flex-shrink: 0;
                    width: 50px;
                    height: 50px;
                    background-color: rgba(255, 119, 1, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .value-text h4 {
                    font-size: 18px;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 10px;
                }

                .value-text p {
                    font-size: 14px;
                    color: #666;
                    line-height: 1.6;
                    margin: 0;
                }

                /* Team Section */
                .team-section {
                    padding: 100px 0;
                    background-color: #f9f9f9;
                }

                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 30px;
                }

                .team-member {
                    background-color: white;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }

                .team-member:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                }

                .member-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                .member-info {
                    padding: 20px;
                    text-align: center;
                }

                .member-info h3 {
                    font-size: 20px;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 5px;
                }

                .member-info p {
                    font-size: 16px;
                    color: #FF7701;
                    margin: 0;
                }

                /* CTA Section */
                .cta-section {
                    padding: 80px 0;
                }

                .cta-box {
                    background: linear-gradient(135deg, #FF7701, #FF5500);
                    border-radius: 12px;
                    padding: 60px;
                    color: white;
                    text-align: center;
                    box-shadow: 0 10px 30px rgba(255, 119, 1, 0.2);
                }

                .cta-content {
                    max-width: 600px;
                    margin: 0 auto 40px;
                }

                .cta-content h2 {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 15px;
                }

                .cta-content p {
                    font-size: 18px;
                    opacity: 0.9;
                }

                .cta-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }

                .cta-button {
                    display: inline-block;
                    padding: 15px 30px;
                    border-radius: 50px;
                    font-size: 16px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .cta-button.primary {
                    background-color: white;
                    color: #FF7701;
                }

                .cta-button.primary:hover {
                    background-color: #f0f0f0;
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
                }

                .cta-button.secondary {
                    background-color: transparent;
                    color: white;
                    border: 2px solid white;
                }

                .cta-button.secondary:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
                }

                /* Responsive Styles */
                @media (max-width: 1024px) {
                    .team-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .stats-container {
                        flex-wrap: wrap;
                    }
                    
                    .stat-box {
                        flex: 0 0 50%;
                        margin-bottom: 30px;
                        svg{
                            color: #fff;
                            font-size: 10px;
                            height: 10px;
                            width: 10px;
                        }
                    }
                    
                    .stat-box:nth-child(even):after {
                        display: none;
                    }
                    
                    .mission-container {
                        flex-direction: column;
                    }
                    
                    .mission-image {
                        max-width: 100%;
                        margin-bottom: 40px;
                    }
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 36px;
                    }
                    
                    .section-title {
                        font-size: 28px;
                    }
                    
                    .timeline-left .timeline-content,
                    .timeline-right .timeline-content {
                        padding: 0;
                        margin: 0;
                        width: 100%;
                        text-align: left;
                    }
                    
                    .timeline-line {
                        left: 40px;
                    }
                    
                    .timeline-left .timeline-year,
                    .timeline-right .timeline-year {
                        left: 0;
                        top: 20px;
                    }
                    
                    .timeline-body {
                        width: 100%;
                        margin-left: 60px;
                    }
                    
                    .cta-box {
                        padding: 40px 20px;
                    }
                    
                    .cta-content h2 {
                        font-size: 28px;
                    }
                }

                @media (max-width: 576px) {
                    .team-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .stat-box {
                        flex: 0 0 100%;
                    }
                    
                    .hero-section {
                        padding: 80px 0;
                    }
                    
                    .hero-title {
                        font-size: 28px;
                    }
                    
                    .hero-subtitle {
                        font-size: 16px;
                    }
                    
                    .tab-navigation {
                        flex-direction: column;
                        border-bottom: none;
                    }
                    
                    .tab-button {
                        border-bottom: 1px solid #eee;
                        text-align: left;
                    }
                    
                    .tab-button:after {
                        display: none;
                    }
                    
                    .cta-buttons {
                        flex-direction: column;
                    }
                    
                    .timeline-image {
                        height: 150px;
                    }
                }
            `}</style>
        </Layout>
    );
}
