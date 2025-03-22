# BinBear Premium UI Components

This repository contains a collection of premium UI components designed to enhance the BinBear website with a consistent, professional look and feel.

## Components

### PremiumButton

A versatile button component with premium styling and interactive effects.

#### Props

- `href` (string): URL for link buttons (optional)
- `type` (string): Button type: 'primary', 'secondary', 'accent', 'outline' (default: 'primary')
- `size` (string): Button size: 'sm', 'md', 'lg' (default: 'md')
- `block` (boolean): Whether the button should be full width
- `onClick` (function): Click handler function
- `children` (React.ReactNode): Button content
- `className` (string): Additional CSS classes
- `icon` (Object): Icon component to display before text
- `disabled` (boolean): Whether the button is disabled
- `target` (string): Target attribute for link buttons

#### Usage

```jsx
import PremiumButton from '@/components/elements/PremiumButton';

// Basic button
<PremiumButton>Click Me</PremiumButton>

// Link button
<PremiumButton href="/contact">Contact Us</PremiumButton>

// Button with icon
<PremiumButton 
  icon={<svg>...</svg>}
  type="secondary"
>
  Download
</PremiumButton>

// Full width button
<PremiumButton block={true}>Full Width Button</PremiumButton>
```

### PremiumCard

A versatile card component with premium styling and various layout options.

#### Props

- `title` (string): Card title
- `description` (string): Card description
- `imageSrc` (string): Image source URL
- `imageWidth` (number): Image width in pixels (default: 400)
- `imageHeight` (number): Image height in pixels (default: 250)
- `imageAlt` (string): Image alt text (default: 'Card image')
- `buttonText` (string): Text for the card button
- `buttonHref` (string): URL for the card button
- `buttonType` (string): Type of button (primary, secondary, accent, outline)
- `icon` (Object): Icon component to display in the card
- `className` (string): Additional CSS classes
- `children` (React.ReactNode): Additional content to display in the card
- `horizontal` (boolean): Whether to display the card in horizontal layout
- `footerText` (string): Text to display in the card footer

#### Usage

```jsx
import PremiumCard from '@/components/elements/PremiumCard';

// Basic card
<PremiumCard
  title="Card Title"
  description="Card description text goes here."
  buttonText="Learn More"
  buttonHref="/learn-more"
/>

// Card with image
<PremiumCard
  title="Card with Image"
  description="Card with an image."
  imageSrc="/path/to/image.jpg"
  buttonText="View Details"
  buttonHref="/details"
/>

// Horizontal card
<PremiumCard
  title="Horizontal Card"
  description="Card with horizontal layout."
  imageSrc="/path/to/image.jpg"
  buttonText="Explore"
  buttonHref="/explore"
  horizontal={true}
/>
```

## CSS Styles

The premium UI components use the following CSS files:

- `public/assets/css/premium.css`: Contains all the premium styles for buttons, cards, and sections.
- `public/assets/js/premium-buttons.js`: JavaScript file for enhancing button interactions.

## Showcase Pages

The following pages showcase the premium UI components:

- `/premium-ui`: Overview of all premium UI components
- `/button-showcase`: Showcase of all button styles and variations
- `/card-showcase`: Showcase of all card styles and variations

## Implementation

To use these components in your project:

1. Import the component from the appropriate file:
   ```jsx
   import PremiumButton from '@/components/elements/PremiumButton';
   import PremiumCard from '@/components/elements/PremiumCard';
   ```

2. Make sure the CSS and JavaScript files are included in your project.

3. Use the components in your JSX code as shown in the usage examples above.

## Customization

The premium UI components are designed to be customizable. You can modify the following files to customize the appearance:

- `public/assets/css/premium.css`: Modify the CSS variables to change colors, sizes, and other visual properties.
- `components/elements/PremiumButton.js`: Modify the component code to change the button behavior or structure.
- `components/elements/PremiumCard.js`: Modify the component code to change the card behavior or structure.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 