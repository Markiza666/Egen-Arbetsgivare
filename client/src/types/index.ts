export interface MenuMobileProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface AccordionProps {
    title: string;
    children: React.ReactNode;
    isOpenDefault?: boolean;
}

export interface Story {
    id: string;
    name: string;
    tagline: string;
    intro: string;
    fullStory: string;
    image?: string; 
    isPublished: boolean;
    createdAt: string;
}

export interface NavigationLink {
    label: string;
    path: string;
}

export interface Story {
    id: string;
    name: string;
    tagline: string;
    intro: string;
    fullStory: string;
    image?: string; 
    isPublished: boolean;
    createdAt: string;
}

export interface NotFoundProps {
  title?: string;
  message?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  path: string,
  icon?: string;
  features: string[]; // A list of points about what is included in the service
}

export interface TestimonialProps {
  quote: string;
  author: string;
  subline: string;
}

export interface RegistrationStep {
    id: string;
    title: string;
    content: string;
    points: string[];
    buttonText: string;
    linkPath: string;    
}

export interface StepProps {
    number: number;
    title: string;
    description: string;
    estimate: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  estimate: string;
  link?: string;
  subLink?: { text: string; url: string };
}
