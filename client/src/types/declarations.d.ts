/**
 * Type definition for SCSS Modules.
 * This allows TypeScript to recognize and import '.module.scss' files as objects.
 */
declare module '*.module.scss' {
    /**
     * Represents the CSS classes within the module.
     * The keys are the class names defined in the SCSS file, 
     * and the values are the generated unique scoped class names (strings).
     */
    const content: { [className: string]: string };
    
    /**
     * Exports the content object as the default export,
     * enabling the 'import styles from "./File.module.scss"' syntax.
     */
    export default content;
}
