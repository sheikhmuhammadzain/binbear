import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import PremiumButton from './PremiumButton';

/**
 * PremiumCard Component
 * A reusable card component with premium styling
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string} props.subtitle - Card subtitle
 * @param {string} props.content - Card content
 * @param {string} props.image - Image source URL
 * @param {string} props.imageAlt - Image alt text
 * @param {string} props.footer - Text to display in the card footer
 * @param {string} props.variant - Card variant (default, primary, secondary, outline, dark, light)
 * @param {string} props.elevation - Card elevation (none, sm, md, lg, xl)
 * @param {boolean} props.hover - Whether to apply hover effect
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.headerClassName - Additional CSS classes for the header
 * @param {string} props.bodyClassName - Additional CSS classes for the body
 * @param {string} props.footerClassName - Additional CSS classes for the footer
 * @param {string} props.imageClassName - Additional CSS classes for the image
 * @param {string} props.titleClassName - Additional CSS classes for the title
 * @param {string} props.subtitleClassName - Additional CSS classes for the subtitle
 * @param {string} props.contentClassName - Additional CSS classes for the content
 * @param {function} props.onClick - Click handler function
 * @param {string} props.href - URL for the card
 * @param {string} props.target - Target attribute for the link
 * @param {React.ReactNode} props.children - Additional content to display in the card
 */
const PremiumCard = ({
    title,
    subtitle,
    content,
    image,
    imageAlt = '',
    footer,
    variant = 'default',
    elevation = 'md',
    hover = true,
    className = '',
    headerClassName = '',
    bodyClassName = '',
    footerClassName = '',
    imageClassName = '',
    titleClassName = '',
    subtitleClassName = '',
    contentClassName = '',
    onClick,
    href,
    target,
    children,
    ...props
}) => {
    // Generate card classes based on props
    const cardClasses = [
        'premium-card',
        `premium-card-${variant}`,
        `premium-card-elevation-${elevation}`,
        hover ? 'premium-card-hover' : '',
        className
    ].filter(Boolean).join(' ');

    // Handle card click
    const handleClick = (e) => {
        if (onClick) onClick(e);
    };

    // Card content
    const cardContent = (
        <>
            {image && (
                <div className={`premium-card-image ${imageClassName}`}>
                    <Image 
                        src={image} 
                        alt={imageAlt}
                        className="card-premium-img"
                    />
                </div>
            )}
            
            {(title || subtitle) && (
                <div className={`premium-card-header ${headerClassName}`}>
                    {title && <h3 className={`premium-card-title ${titleClassName}`}>{title}</h3>}
                    {subtitle && <div className={`premium-card-subtitle ${subtitleClassName}`}>{subtitle}</div>}
                </div>
            )}
            
            <div className={`premium-card-body ${bodyClassName}`}>
                {content && <div className={`premium-card-content ${contentClassName}`}>{content}</div>}
                {children}
            </div>
            
            {footer && (
                <div className={`premium-card-footer ${footerClassName}`}>
                    {footer}
                </div>
            )}
        </>
    );

    // Render as link if href is provided
    if (href) {
        return (
            <Link 
                href={href} 
                className={cardClasses}
                target={target}
                onClick={handleClick}
                {...props}
            >
                {cardContent}
            </Link>
        );
    }

    // Render as div
    return (
        <div 
            className={cardClasses}
            onClick={handleClick}
            {...props}
        >
            {cardContent}
        </div>
    );
};

PremiumCard.propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    content: PropTypes.node,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    footer: PropTypes.node,
    variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'outline', 'dark', 'light']),
    elevation: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
    hover: PropTypes.bool,
    className: PropTypes.string,
    headerClassName: PropTypes.string,
    bodyClassName: PropTypes.string,
    footerClassName: PropTypes.string,
    imageClassName: PropTypes.string,
    titleClassName: PropTypes.string,
    subtitleClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    target: PropTypes.string,
    children: PropTypes.node
};

export default PremiumCard;

// Add styles
export const PremiumCardStyles = `
    /* Premium Card Base Styles */
    .premium-card {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s ease;
        height: 100%;
        text-decoration: none;
        color: inherit;
    }
    
    /* Variants */
    .premium-card-default {
        background-color: #ffffff;
        border: 1px solid #e0e0e0;
    }
    
    .premium-card-primary {
        background-color: #ffffff;
        border-top: 4px solid #FF7F00;
    }
    
    .premium-card-secondary {
        background-color: #ffffff;
        border-top: 4px solid #333333;
    }
    
    .premium-card-outline {
        background-color: transparent;
        border: 2px solid #e0e0e0;
    }
    
    .premium-card-dark {
        background-color: #1a1a1a;
        color: #ffffff;
    }
    
    .premium-card-light {
        background-color: #f5f7fa;
    }
    
    /* Elevations */
    .premium-card-elevation-none {
        box-shadow: none;
    }
    
    .premium-card-elevation-sm {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }
    
    .premium-card-elevation-md {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .premium-card-elevation-lg {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
    
    .premium-card-elevation-xl {
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.14);
    }
    
    /* Hover Effect */
    .premium-card-hover {
        cursor: pointer;
    }
    
    .premium-card-hover:hover {
        transform: translateY(-5px);
    }
    
    .premium-card-hover.premium-card-elevation-sm:hover {
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    }
    
    .premium-card-hover.premium-card-elevation-md:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
    
    .premium-card-hover.premium-card-elevation-lg:hover {
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.14);
    }
    
    .premium-card-hover.premium-card-elevation-xl:hover {
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
    }
    
    /* Card Image */
    .premium-card-image {
        position: relative;
        width: 100%;
        overflow: hidden;
    }
    
    .premium-card-image img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.5s ease;
    }
    
    .premium-card-hover:hover .premium-card-image img {
        transform: scale(1.05);
    }
    
    /* Card Header */
    .premium-card-header {
        padding: 20px 20px 0;
    }
    
    /* Card Title */
    .premium-card-title {
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0 0 8px;
        color: #1a1a1a;
    }
    
    .premium-card-dark .premium-card-title {
        color: #ffffff;
    }
    
    /* Card Subtitle */
    .premium-card-subtitle {
        font-size: 0.875rem;
        color: #777777;
        margin-bottom: 16px;
    }
    
    .premium-card-dark .premium-card-subtitle {
        color: #b0b0b0;
    }
    
    /* Card Body */
    .premium-card-body {
        padding: 20px;
        flex: 1;
    }
    
    /* Card Content */
    .premium-card-content {
        font-size: 1rem;
        line-height: 1.6;
        color: #333333;
    }
    
    .premium-card-dark .premium-card-content {
        color: #e0e0e0;
    }
    
    /* Card Footer */
    .premium-card-footer {
        padding: 16px 20px 20px;
        border-top: 1px solid #e0e0e0;
    }
    
    .premium-card-dark .premium-card-footer {
        border-top-color: #333333;
    }
    
    /* 3D Effect */
    .premium-card-primary::before,
    .premium-card-secondary::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }
    
    .premium-card-primary:hover::before,
    .premium-card-secondary:hover::before {
        opacity: 1;
    }
    
    /* Special Variants */
    .premium-card-primary.premium-card-hover:hover {
        border-color: #FF7F00;
    }
    
    .premium-card-secondary.premium-card-hover:hover {
        border-color: #333333;
    }
    
    /* Responsive Adjustments */
    @media (max-width: 768px) {
        .premium-card-title {
            font-size: 1.125rem;
        }
        
        .premium-card-subtitle {
            font-size: 0.8125rem;
        }
        
        .premium-card-content {
            font-size: 0.9375rem;
        }
        
        .premium-card-header,
        .premium-card-body {
            padding: 16px 16px 0;
        }
        
        .premium-card-footer {
            padding: 12px 16px 16px;
        }
    }
`; 