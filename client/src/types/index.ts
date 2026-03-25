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
