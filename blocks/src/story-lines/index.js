/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	icon: {
		src: <svg enable-background="new 0 0 256 256" height="256" viewBox="0 0 256 256" width="256" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"><image height="256" width="256" xlinkHref="data:image/png;base64,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
		TkSuQmCC"/></svg>
	}
} );
