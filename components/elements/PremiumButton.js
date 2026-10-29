import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * PremiumButton Component
 * A reusable button component with premium styling
 * 
 * @param {Object} props - Component props
 * @param {string} props.href - URL for link buttons (optional)
 * @param {string} props.type - Button type: 'primary', 'secondary', 'accent', 'outline' (default: 'primary')
 * @param {string} props.size - Button size: 'sm', 'md', 'lg' (default: 'md')
 * @param {boolean} props.block - Whether the button should be full width
 * @param {function} props.onClick - Click handler function
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.icon - Icon component to display before text
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {string} props.target - Target attribute for link buttons
 * @param {Object} props.rest - Any other props to pass to the button element
 */
const PremiumButton = ({
    href,
    type = 'button',
    variant = 'primary',
    size = 'md',
    block = false,
    onClick,
    children,
    className = '',
    icon,
    disabled = false,
    target,
    ariaLabel,
    ripple = true,
    shadow = true,
    ...props
}) => {
    // Generate button classes based on props
    const buttonClasses = [
        'premium-button',
        `premium-button-${variant}`,
        `premium-button-${size}`,
        block ? 'premium-button-block' : '',
        disabled ? 'premium-button-disabled' : '',
        shadow ? 'premium-button-shadow' : '',
        ripple ? 'premium-button-ripple' : '',
        className
    ].filter(Boolean).join(' ');

    // Handle ripple effect on click
    const handleRippleEffect = (e) => {
        if (!ripple || disabled) return;
        
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        if (onClick) onClick(e);
    };

    // Render as link if href is provided
    if (href) {
        return (
            <Link 
                href={href} 
                className={buttonClasses}
                target={target}
                aria-label={ariaLabel}
                onClick={handleRippleEffect}
                {...props}
            >
                {icon && <span className="premium-button-icon">{icon}</span>}
                <span className="premium-button-text">{children}</span>
            </Link>
        );
    }

    // Render as button
    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={handleRippleEffect}
            disabled={disabled}
            aria-label={ariaLabel}
            {...props}
        >
            {icon && <span className="premium-button-icon">{icon}</span>}
            <span className="premium-button-text">{children}</span>
        </button>
    );
};

PremiumButton.propTypes = {
    href: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'danger', 'success']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    block: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    icon: PropTypes.node,
    disabled: PropTypes.bool,
    target: PropTypes.string,
    ariaLabel: PropTypes.string,
    ripple: PropTypes.bool,
    shadow: PropTypes.bool
};

export default PremiumButton;

// Add styles
export const PremiumButtonStyles = `
    /* Premium Button Base Styles */
    .premium-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 12px 24px;
        font-weight: 600;
        font-size: 15px;
        line-height: 1.5;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        outline: none;
        white-space: nowrap;
        user-select: none;
        z-index: 1;
    }
    
    /* Variants */
    .premium-button-primary {
        background: linear-gradient(135deg, #FF7F00, #FF5E00);
        color: white;
        box-shadow: 0 4px 10px rgba(255, 127, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .premium-button-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(255, 127, 0, 0.4), 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .premium-button-primary:active {
        transform: translateY(-1px);
        box-shadow: 0 3px 8px rgba(255, 127, 0, 0.4);
    }
    
    .premium-button-secondary {
        background: linear-gradient(135deg, #333333, #1a1a1a);
        color: white;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .premium-button-secondary:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .premium-button-secondary:active {
        transform: translateY(-1px);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    }
    
    .premium-button-outline {
        background: transparent;
        color: #FF7F00;
        border: 2px solid #FF7F00;
        box-shadow: 0 4px 10px rgba(255, 127, 0, 0.1);
    }
    
    .premium-button-outline:hover {
        background-color: rgba(255, 127, 0, 0.1);
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(255, 127, 0, 0.2);
    }
    
    .premium-button-outline:active {
        transform: translateY(-1px);
        box-shadow: 0 3px 8px rgba(255, 127, 0, 0.2);
    }
    
    .premium-button-ghost {
        background: transparent;
        color: #333333;
        border: 2px solid transparent;
    }
    
    .premium-button-ghost:hover {
        background-color: rgba(0, 0, 0, 0.05);
        transform: translateY(-3px);
    }
    
    .premium-button-ghost:active {
        transform: translateY(-1px);
    }
    
    .premium-button-danger {
        background: linear-gradient(135deg, #FF5252, #D32F2F);
        color: white;
        box-shadow: 0 4px 10px rgba(211, 47, 47, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .premium-button-danger:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(211, 47, 47, 0.4), 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .premium-button-danger:active {
        transform: translateY(-1px);
        box-shadow: 0 3px 8px rgba(211, 47, 47, 0.4);
    }
    
    .premium-button-success {
        background: linear-gradient(135deg, #4CAF50, #388E3C);
        color: white;
        box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .premium-button-success:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(76, 175, 80, 0.4), 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .premium-button-success:active {
        transform: translateY(-1px);
        box-shadow: 0 3px 8px rgba(76, 175, 80, 0.4);
    }
    
    /* Sizes */
    .premium-button-sm {
        padding: 8px 16px;
        font-size: 14px;
    }
    
    .premium-button-md {
        padding: 12px 24px;
        font-size: 15px;
    }
    
    .premium-button-lg {
        padding: 16px 32px;
        font-size: 16px;
    }
    
    /* Block */
    .premium-button-block {
        display: flex;
        width: 100%;
    }
    
    /* Disabled */
    .premium-button-disabled {
        opacity: 0.6;
        cursor: not-allowed;
        pointer-events: none;
    }
    
    /* Shadow */
    .premium-button-shadow {
        position: relative;
    }
    
    .premium-button-shadow::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
        z-index: -1;
    }
    
    /* Icon */
    .premium-button-icon {
        display: flex;
        align-items: center;
        margin-right: 8px;
    }
    
    .premium-button-icon svg {
        width: 18px;
        height: 18px;
    }
    
    /* Ripple Effect */
    .premium-button-ripple {
        position: relative;
        overflow: hidden;
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.4);
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;
        animation: ripple 0.6s linear;
        transform: scale(0);
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* 3D Effect */
    .premium-button-primary,
    .premium-button-secondary,
    .premium-button-danger,
    .premium-button-success {
        transform-style: preserve-3d;
        perspective: 1000px;
    }
    
    .premium-button-primary::after,
    .premium-button-secondary::after,
    .premium-button-danger::after,
    .premium-button-success::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 8px;
        z-index: -1;
    }
    
    .premium-button-primary:hover::after,
    .premium-button-secondary:hover::after,
    .premium-button-danger:hover::after,
    .premium-button-success:hover::after {
        opacity: 1;
    }
    
    /* Responsive Adjustments */
    @media (max-width: 768px) {
        .premium-button-lg {
            padding: 14px 28px;
            font-size: 15px;
        }
        
        .premium-button-md {
            padding: 10px 20px;
            font-size: 14px;
        }
        
        .premium-button-sm {
            padding: 6px 14px;
            font-size: 13px;
        }
    }
    
    @media (max-width: 576px) {
        .premium-button-lg {
            padding: 12px 24px;
            font-size: 14px;
        }
        
        .premium-button-md {
            padding: 8px 16px;
            font-size: 13px;
        }
        
        .premium-button-sm {
            padding: 6px 12px;
            font-size: 12px;
        }
    }
`; 