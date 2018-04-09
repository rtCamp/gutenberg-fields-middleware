/**
 * Gutenberg Fields Middleware.
 */

const { InspectorControls } = wp.blocks;
const { addFilter } = wp.hooks;

/**
 * Fields
 */
import richText from './fields/rich-text';
import plainText from './fields/plain-text';
import textareaControl from './fields/textarea-control';
import inputField from './fields/input-field';
import urlInput from './fields/url-input';
import imageUpload from './fields/image-upload';
import selectControl from './fields/select-control';
import checkboxControl from './fields/checkbox-control';
import radioControl from './fields/radio-control';
import rangeControl from './fields/range-control';
import button from './fields/button';
import buttonEditable from './fields/button-editable';
import colorPalette from './fields/color-palette';
import dropdown from './fields/dropdown';
import editor from './fields/code-editor';
import dateTimePicker from './fields/date-time';
import formToggle from './fields/form-toggle';
import treeSelect from './fields/tree-select';

/**
 * Gutenberg Middleware Class.
 */
class GutenbergFieldsMiddleWare {
	/**
	 * Constructor.
	 *
	 * @param {Object} config Block configuration.
	 *
	 * @return {void}
	 */
	constructor( config ) {
		this.blockConfigs = {};
		this.fields = {};
		this.inspectorControlFields = {};
		this.inspectorControls = '';
		this.config = _.extend( {}, config );

		this.setupBlockFields = this.setupBlockFields.bind( this );
	}

	/**
	 * Get middleware block settings.
	 *
	 * @return {Object} Settings.
	 */
	getSettings() {
		this.blockConfigs = _.extend( {
			title: '',

			category: 'common',

			attributes: {},

		}, this.config );

		this.blockConfigs.edit = ( props ) => {
			this.setupBlockFields( props );

			if ( this.config.edit ) {
				if ( this.constructor.isClassComponent( this.config.edit ) ) {
					return ( <this.config.edit { ...props } middleware={ this } /> );
				}

				return this.config.edit( props, this );
			}

			return this.edit( props );
		};

		this.blockConfigs.save = ( props ) => {
			if ( this.config.save ) {
				if ( this.constructor.isClassComponent( this.config.save ) ) {
					return ( <this.config.save { ...props } middleware={ this } /> );
				}

				return this.config.save( props, this );
			}

			return this.save( props );
		};

		return this.blockConfigs;
	}

	/**
	 * Get field according to the field type.
	 *
	 * @param {Object} props        Properties.
	 * @param {Object} config       Field configuration provided.
	 * @param {String} attributeKey Attribute Key.
	 *
	 * @return {Object} Field.
	 */
	getField( props, config, attributeKey ) {
		const fields = {};

		switch ( config.type ) {
			case 'text':
				fields[ attributeKey ] = plainText( props, config, attributeKey );
				break;
			case 'rich-text':
				fields[ attributeKey ] = richText( props, config, attributeKey );
				break;
			case 'link':
				fields[ attributeKey ] = urlInput( props, config, attributeKey );
				break;
			case 'image':
				fields[ attributeKey ] = imageUpload( props, config, attributeKey );
				break;
			case 'select':
				fields[ attributeKey ] = selectControl( props, config, attributeKey );
				break;
			case 'range':
				fields[ attributeKey ] = rangeControl( props, config, attributeKey );
				break;
			case 'radio':
				fields[ attributeKey ] = radioControl( props, config, attributeKey );
				break;
			case 'checkbox':
				fields[ attributeKey ] = checkboxControl( props, config, attributeKey );
				break;
			case 'button':
				fields[ attributeKey ] = button( props, config, attributeKey );
				break;
			case 'button-editable':
				fields[ attributeKey ] = buttonEditable( props, config, attributeKey );
				break;
			case 'color':
				fields[ attributeKey ] = colorPalette( props, config, attributeKey );
				break;
			case 'dropdown':
				fields[ attributeKey ] = dropdown( props, config );
				break;
			case 'editor':
				fields[ attributeKey ] = editor( props, config, attributeKey );
				break;
			case 'date-time':
				fields[ attributeKey ] = dateTimePicker( props, config, attributeKey );
				break;
			case 'textarea':
				fields[ attributeKey ] = textareaControl( props, config, attributeKey );
				break;
			case 'email':
				fields[ attributeKey ] = inputField( props, config, attributeKey );
				break;
			case 'hidden':
				fields[ attributeKey ] = inputField( props, config, attributeKey );
				break;
			case 'number':
				fields[ attributeKey ] = inputField( props, config, attributeKey );
				break;
			case 'search':
				fields[ attributeKey ] = inputField( props, config, attributeKey );
				break;
			case 'tel':
				fields[ attributeKey ] = inputField( props, config, attributeKey );
				break;
			case 'switch':
				fields[ attributeKey ] = formToggle( props, config, attributeKey );
				break;
			case 'tree-select':
				fields[ attributeKey ] = treeSelect( props, config, attributeKey );
				break;
		}

		return fields;
	}

	/**
	 * Setup block fields and inspector controls.
	 *
	 * @param {Object} props Properties.
	 *
	 * @return {void}
	 */
	setupBlockFields( props ) {
		_.each( this.blockConfigs.attributes, ( attribute, attributeKey ) => {
			if ( attribute.field ) {
				if ( 'inspector' === attribute.field.placement ) {
					_.extend( this.inspectorControlFields, this.getField( props, attribute.field, attributeKey ) );
				} else {
					_.extend( this.fields, this.getField( props, attribute.field, attributeKey ) );
				}
			}
		} );

		this.inspectorControls = props.isSelected ? (
			<InspectorControls key="inspector-control">
				{ Object.keys( this.inspectorControlFields ).map( ( key ) => {
					return this.inspectorControlFields[ key ];
				} ) }
			</InspectorControls>
		) : null;
	}

	/**
	 * Check if it is a react component.
	 *
	 * @param {*} component Component or function.
	 *
	 * @return {boolean} Is react component or not.
	 */
	static isClassComponent( component ) {
		return typeof component === 'function' && component.prototype && !! component.prototype.isReactComponent;
	}

	/**
	 * Fallback edit method.
	 *
	 * @param {Object} props Properties.
	 *
	 * @return {Object} Edit elements.
	 */
	edit( props ) {
		return [
			this.inspectorControls,
			(
				<div key={ props.className } >
					{ Object.keys( this.fields ).map( ( key ) => {
						return this.fields[ key ];
					} ) }
				</div>
			),
		];
	}

	/**
	 * Fallback save method.
	 *
	 * @return {null} Null.
	 */
	save() {
		return null;
	}
}

/**
 * Filters the block settings except for default gutenberg blocks.
 *
 * @param {Object} settings Block settings.
 * @param {String} name     Block name.
 *
 * @return {Object} Filtered settings.
 */
const filterBlockSettings = ( settings, name ) => {
	if ( ! /^core/.test( name ) ) {
		const middleware = new GutenbergFieldsMiddleWare( settings );
		return middleware.getSettings();
	}

	return settings;
};

addFilter( 'blocks.registerBlockType', 'gutenberg-field-middleware/registration/attributes', filterBlockSettings, 1 );

export default GutenbergFieldsMiddleWare;
