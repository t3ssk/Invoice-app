/**
 * 
 * @typedef - Creates types for scss modules.
 */

declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}
