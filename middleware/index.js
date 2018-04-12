/**
 * Gutenberg Fields Middleware.
 */

const { InspectorControls } = wp.blocks;
const { addFilter } = wp.hooks;

/**
 * Fields
 */
import richText from './fields/rich-text';
import text from './fields/text';
import textarea from './fields/textarea';
import inputField from './fields/input-field';
import link from './fields/link';
import image from './fields/image';
import video from './fields/video-upload.js';
import select from './fields/select';
import checkbox from './fields/checkbox';
import radio from './fields/radio';
import range from './fields/range';
import button from './fields/button';
import buttonEditable from './fields/button-editable';
import color from './fields/color';
import dropdown from './fields/dropdown';
import codeEditor from './fields/code-editor';
import dateTime from './fields/date-time';
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

			props.middleware = this;

			if ( this.config.edit ) {
				if ( this.constructor.isClassComponent( this.config.edit ) ) {
					return ( <this.config.edit { ...props } /> );
				}

				return this.config.edit( props );
			}

			return this.edit( props );
		};

		this.blockConfigs.save = ( props ) => {
			props.middleware = this;

			if ( this.config.save ) {
				if ( this.constructor.isClassComponent( this.config.save ) ) {
					return ( <this.config.save { ...props } /> );
				}

				return this.config.save( props );
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
		const field = {};

		switch ( config.type ) {
			case 'text':
				field[ attributeKey ] = text( props, config, attributeKey );
				break;
			case 'rich-text':
				field[ attributeKey ] = richText( props, config, attributeKey );
				break;
			case 'link':
				field[ attributeKey ] = link( props, config, attributeKey );
				break;
			case 'image':
				field[ attributeKey ] = image( props, config, attributeKey );
				break;
			case 'video':
				field[ attributeKey ] = video( props, config, attributeKey );
				break;
			case 'select':
				field[ attributeKey ] = select( props, config, attributeKey );
				break;
			case 'range':
				field[ attributeKey ] = range( props, config, attributeKey );
				break;
			case 'radio':
				field[ attributeKey ] = radio( props, config, attributeKey );
				break;
			case 'checkbox':
				field[ attributeKey ] = checkbox( props, config, attributeKey );
				break;
			case 'button':
				field[ attributeKey ] = button( props, config, attributeKey );
				break;
			case 'button-editable':
				field[ attributeKey ] = buttonEditable( props, config, attributeKey );
				break;
			case 'color':
				field[ attributeKey ] = color( props, config, attributeKey );
				break;
			case 'dropdown':
				field[ attributeKey ] = dropdown( props, config );
				break;
			case 'code-editor':
				field[ attributeKey ] = codeEditor( props, config, attributeKey );
				break;
			case 'date-time':
				field[ attributeKey ] = dateTime( props, config, attributeKey );
				break;
			case 'textarea':
				field[ attributeKey ] = textarea( props, config, attributeKey );
				break;
			case 'switch':
				field[ attributeKey ] = formToggle( props, config, attributeKey );
				break;
			case 'tree-select':
				field[ attributeKey ] = treeSelect( props, config, attributeKey );
				break;
		}

		if ( _.contains( [ 'email', 'hidden', 'number', 'search', 'tel', 'time', 'date', 'datetime-local', 'file', 'month', 'password', 'time', 'url', 'week' ], config.type ) ) {
			field[ attributeKey ] = inputField( props, config, attributeKey );
		}

		return field;
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
