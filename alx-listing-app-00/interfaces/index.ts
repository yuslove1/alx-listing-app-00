
/**
 * Interface for the properties of the Card component.
 */
export interface CardProps {
    // Placeholder for image source
    imageUrl?: string;
  
    // Placeholder for card title
    title?: string;
  
    // Placeholder for card description
    description?: string;
  
    // Placeholder for price
    price?: string;
  }
  
  
  /**
   * Interface for the properties of the Button component.
   */
  export interface ButtonProps {
    // Placeholder for button text
    children: React.ReactNode;
  
    // Placeholder for onClick handler
    onClick?: () => void;
  
    // Placeholder for button style
    style?: "primary" | "secondary"; // Example styles
  }
  
