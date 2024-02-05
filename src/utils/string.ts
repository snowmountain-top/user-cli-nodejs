
/**
 * Camel case to kebab case
 * e.g. camelToKebabCase('camelCase') => 'camel-case'
 */
export const camelToKebabCase = (str: string) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
