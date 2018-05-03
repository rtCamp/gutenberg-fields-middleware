/**
 * Gutenberg Fields Middleware.
 */

import { getMiddlewareWarnings } from './utils';

const { InspectorControls, BlockControls } = 'undefined' !== typeof wp.blocks ? wp.blocks : {};
const { addFilter } = 'undefined' !== typeof wp.hooks ? wp.hooks : {};
const { withState } = 'undefined' !== typeof wp.components ? wp.components : {};
const middlewareWarnings = getMiddlewareWarnings();
const { merge } = 'undefined' !== typeof lodash ? lodash : {};

if ( middlewareWarnings ) {
	console.error( middlewareWarnings ); // eslint-disable-line
}

/**
 * Fields
 */
const fields = ! middlewareWarnings ? require( './fields' ) : false;

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
		this.inspectorControls = null;
		this.blockControlFields = {};
		this.blockControls = null;
		this.config = merge( {}, config );
		this.helperFields = {};

		this.setupBlockFields = this.setupBlockFields.bind( this );
		this.setupField = this.setupField.bind( this );
		this.getHelperFields = this.getHelperFields.bind( this );
		this.updateAlignment = this.updateAlignment.bind( this );
		this.getBlockAlignmentToolbarAttributeKey = this.getBlockAlignmentToolbarAttributeKey.bind( this );
		this.getDefaultConfig = this.getDefaultConfig.bind( this );
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

		if ( ! fields ) {
			return this.blockConfigs;
		}

		const blockStates = _.extend( {
			editable: '',
		}, this.config.blockStates || {} );

		delete this.blockConfigs.blockStates;

		this.blockConfigs.edit = withState( blockStates )( ( props ) => {
			this.setupBlockFields( props );

			const wrapperClassName = 'middleware-block ' + props.className;
			props.middleware = this;

			if ( this.config.edit ) {
				if ( this.constructor.isClassComponent( this.config.edit ) ) {
					return ( <div className={ wrapperClassName }><this.config.edit { ...props } /></div> );
				}

				return ( <div className={ wrapperClassName }>{ this.config.edit( props ) }</div> );
			}

			return ( <div className={ wrapperClassName }>{ this.edit( props ) }</div> );
		} );

		const BlockAlignmentToolbarAttributeKey = this.getBlockAlignmentToolbarAttributeKey();

		if ( BlockAlignmentToolbarAttributeKey ) {
			this.blockConfigs.getEditWrapperProps = ( attributes ) => {
				let newAttributes = {};
				const getEditWrapperProps = this.config.getEditWrapperProps ? this.config.getEditWrapperProps( attributes ) : {};
				const align = attributes[ BlockAlignmentToolbarAttributeKey ];

				if ( _.contains( [ 'left', 'center', 'right', 'wide', 'full' ], align ) ) {
					newAttributes = { 'data-align': align };
				}

				return _.extend( newAttributes, getEditWrapperProps );
			};
		}

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
	 * @param {Object} props         Properties.
	 * @param {Object} config        Field configuration provided.
	 * @param {Object} defaultConfig Field default configuration.
	 * @param {String} attributeKey  Attribute Key.
	 *
	 * @return {Object} Field.
	 */
	getField( props, config, defaultConfig, attributeKey ) {
		const field = {};

		switch ( config.type ) {
			case 'text':
				field[ attributeKey ] = fields.text( props, config, defaultConfig, attributeKey, this );
				break;
			case 'rich-text':
				field[ attributeKey ] = fields.richText( props, config, defaultConfig, attributeKey, this );
				break;
			case 'link':
				field[ attributeKey ] = fields.link( props, config, defaultConfig, attributeKey, this );
				break;
			case 'video':
			case 'audio':
			case 'image':
				field[ attributeKey ] = fields.mediaUpload( props, config, defaultConfig, attributeKey, this );
				break;
			case 'select':
				field[ attributeKey ] = fields.select( props, config, defaultConfig, attributeKey, this );
				break;
			case 'range':
				field[ attributeKey ] = fields.range( props, config, defaultConfig, attributeKey, this );
				break;
			case 'radio':
				field[ attributeKey ] = fields.radio( props, config, defaultConfig, attributeKey, this );
				break;
			case 'checkbox':
				field[ attributeKey ] = fields.checkbox( props, config, defaultConfig, attributeKey, this );
				break;
			case 'button-editable':
				field[ attributeKey ] = fields.buttonEditable( props, config, defaultConfig, attributeKey, this );
				break;
			case 'color':
				field[ attributeKey ] = fields.color( props, config, defaultConfig, attributeKey, this );
				break;
			case 'code-editor':
				field[ attributeKey ] = fields.codeEditor( props, config, defaultConfig, attributeKey, this );
				break;
			case 'date-time':
				field[ attributeKey ] = fields.dateTime( props, config, defaultConfig, attributeKey, this );
				break;
			case 'textarea':
				field[ attributeKey ] = fields.textarea( props, config, defaultConfig, attributeKey, this );
				break;
			case 'switch':
				field[ attributeKey ] = fields.formToggle( props, config, defaultConfig, attributeKey, this );
				break;
			case 'tree-select':
				field[ attributeKey ] = fields.treeSelect( props, config, defaultConfig, attributeKey, this );
				break;
			case 'file-upload':
				field[ attributeKey ] = fields.fileUpload( props, config, defaultConfig, attributeKey, this );
				break;
			case 'block-alignment-toolbar':
				field[ attributeKey ] = fields.blockAlignmentToolbar( props, config, defaultConfig, attributeKey, this );
				break;
			case 'alignment-toolbar':
				field[ attributeKey ] = fields.alignmentToolbar( props, config, defaultConfig, attributeKey, this );
				break;
			case 'icons-toolbar':
				field[ attributeKey ] = fields.iconsToolbar( props, config, defaultConfig, attributeKey, this );
				break;
			case 'media-icon':
				field[ attributeKey ] = fields.mediaIcon( props, config, defaultConfig, attributeKey, this );
				break;
			case 'dropdown-menu':
				field[ attributeKey ] = fields.dropDownMenu( props, config, defaultConfig, attributeKey, this );
				break;
			case 'url-input-button':
				field[ attributeKey ] = fields.urlInputButton( props, config, defaultConfig, attributeKey, this );
				break;
		}

		if ( _.contains( [ 'email', 'hidden', 'number', 'search', 'tel', 'time', 'date', 'datetime-local', 'file', 'month', 'password', 'time', 'url', 'week' ], config.type ) ) {
			field[ attributeKey ] = fields.inputField( props, config, defaultConfig, attributeKey, this );
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
		// Setup helper fields first.
		_.each( this.blockConfigs.attributes, ( attribute ) => {
			if ( attribute.field && attribute.field.helperFields ) {
				_.each( attribute.field.helperFields, ( helperFieldAttributeKey ) => {
					_.extend( this.helperFields, this.setupField( props, this.blockConfigs.attributes[ helperFieldAttributeKey ], helperFieldAttributeKey, false ) );
				} );
			}
		} );

		_.each( this.blockConfigs.attributes, ( attribute, attributeKey ) => {
			if ( attribute.field && ! this.helperFields[ attributeKey ] ) {
				this.setupField( props, attribute, attributeKey );
			}
		} );

		this.inspectorControls = props.isSelected ? (
			<InspectorControls key="inspector-control">
				{ Object.keys( this.inspectorControlFields ).map( ( key ) => {
					return this.inspectorControlFields[ key ];
				} ) }
			</InspectorControls>
		) : null;

		this.blockControls = props.isSelected ? (
			<BlockControls key="block-controls">
				{ Object.keys( this.blockControlFields ).map( ( key ) => {
					return this.blockControlFields[ key ];
				} ) }
			</BlockControls>
		) : null;
	}

	/**
	 * Setup a single Field.
	 *
	 * @param {Object} props Properties.
	 * @param {Object} attribute Attribute.
	 * @param {String} attributeKey Attribute key.
	 * @param {Boolean} extend Whether to extend the field with field objects.
	 * @return {Object|void} Field.
	 */
	setupField( props, attribute, attributeKey, extend = true ) {
		const config = attribute.field;
		const defaultConfig = this.getDefaultConfig( props, config, attributeKey );

		const field = this.getField( props, config, defaultConfig, attributeKey );

		if ( 'inspector' === config.placement ) {
			_.extend( this.inspectorControlFields, field );
		} else if ( 'block-controls' === config.placement ) {
			_.extend( this.blockControlFields, field );
		} else if ( extend ) {
			_.extend( this.fields, field );
		}

		return field;
	}

	/**
	 * Get default configuration for all fields.
	 *
	 * @param {Object} props         Properties.
	 * @param {Object} config        Field configuration provided.
	 * @param {String} attributeKey  Attribute Key.
	 *
	 * @return {Object} Default Config object.
	 */
	getDefaultConfig( props, config, attributeKey ) {
		return {
			value: props.attributes[ attributeKey ],
			onChange( value ) {
				const newAttributes = {};
				newAttributes[ attributeKey ] = value;
				props.setAttributes( newAttributes );
			},
			onFocus() {
				props.setState( {
					editable: attributeKey,
				} );
			},
		};
	}

	/**
	 * Get helper fields using the attribute key.
	 *
	 * @param {String} attributeKey Attribute key.
	 * @return {Object} Helper fields.
	 */
	getHelperFields( attributeKey ) {
		const helperFields = {};
		const config = this.blockConfigs.attributes[ attributeKey ].field;

		if ( config && ! _.isEmpty( config.helperFields ) ) {
			_.each( config.helperFields, ( helperFieldAttributeKey, helperFieldKeyName ) => {
				helperFields[ helperFieldKeyName ] = this.helperFields[ helperFieldAttributeKey ];
			} );
		}

		return helperFields;
	}

	/**
	 * Get helper fields value.
	 *
	 * @param {Object} props Properties.
	 * @param {Object} config Field configuration passed as attributeKey.field.
	 * @param {String} attributeKeyName Attribute key name as attributeKey.field.helperField.keyName.
	 * @return {mixed|null} Helper field value.
	 */
	getHelperFieldValue( props, config, attributeKeyName ) {
		const attributeKey = config.helperFields ? config.helperFields[ attributeKeyName ] : '';
		return attributeKey ? props.attributes[ attributeKey ] : null;
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

	updateAlignment( props, nextAlign ) {
		const extraUpdatedAttributes = [ 'wide', 'full' ].indexOf( nextAlign ) !== -1 ?
			{ width: undefined, height: undefined } :
			{};
		props.setAttributes( { ...extraUpdatedAttributes, align: nextAlign } );
	}

	/**
	 * Get block alignment toolbar attribute key set.
	 *
	 * @return {string} Attribute key.
	 */
	getBlockAlignmentToolbarAttributeKey() {
		let blockAlignmentToolbarAttributeKey = '';

		if ( ! _.isEmpty( this.blockConfigs.attributes ) ) {
			_.each( this.blockConfigs.attributes, ( attribute, attributeKey ) => {
				if ( attribute.field && 'block-alignment-toolbar' === attribute.field.type ) {
					blockAlignmentToolbarAttributeKey = attributeKey;
				}
			} );
		}

		return blockAlignmentToolbarAttributeKey;
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
			this.blockControls,
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
