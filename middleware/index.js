/**
 * Gutenberg Fields Middleware.
 */

import { getMiddlewareWarnings } from './utils';

const { InspectorControls, BlockControls } = 'undefined' !== typeof wp.editor ? wp.editor : {};
const { addFilter } = 'undefined' !== typeof wp.hooks ? wp.hooks : {};
const { withState } = wp.compose;
const middlewareWarnings = getMiddlewareWarnings();

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
		this.config = _.extend( {}, config );
		this.helperFields = {};

		this.setupBlockFields = this.setupBlockFields.bind( this );
		this.setupField = this.setupField.bind( this );
		this.getHelperFields = this.getHelperFields.bind( this );
		this.getBlockAlignmentToolbarAttributeKey = this.getBlockAlignmentToolbarAttributeKey.bind( this );
		this.getField = this.getField.bind( this );
		this.getFieldConfig = this.getFieldConfig.bind( this );
		this.getBlockControls = this.getBlockControls.bind( this );
		this.getInspectorControls = this.getInspectorControls.bind( this );
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

			if ( this.config.edit ) {
				if ( this.constructor.isClassComponent( this.config.edit ) ) {
					return ( <div className={ wrapperClassName }><this.config.edit middleware={ this } { ...props } /></div> );
				}

				return ( <div className={ wrapperClassName }>{ this.config.edit( props, this ) }</div> );
			}

			return ( <div className={ wrapperClassName }>{ this.edit( props, this ) }</div> );
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

			if ( this.config.save ) {
				if ( this.constructor.isClassComponent( this.config.save ) ) {
					return ( <this.config.save middleware={ this } { ...props } /> );
				}

				return this.config.save( props, this );
			}

			return this.save( props, this );
		};

		return this.blockConfigs;
	}

	/**
	 * Get field according to the field type.
	 *
	 * @param {Object} props        Properties.
	 * @param {String} attributeKey Attribute Key.
	 * @param {Object} fieldConfig  Extra field configuration, can be used to override or extend config from edit().
	 *
	 * @return {Object} Field.
	 */
	getField( props, attributeKey, fieldConfig = {} ) {
		let field = {};
		const defaultConfig = this.constructor.getDefaultFieldConfig( props, attributeKey );
		const config = _.extend( this.getFieldConfig( attributeKey ), fieldConfig );

		switch ( config.type ) {
			case 'text':
				field = fields.text( props, config, defaultConfig, attributeKey, this );
				break;
			case 'rich-text':
				field = fields.richText( props, config, defaultConfig, attributeKey, this );
				break;
			case 'link':
				field = fields.link( props, config, defaultConfig, attributeKey, this );
				break;
			case 'video':
			case 'audio':
			case 'image':
				field = fields.mediaUpload( props, config, defaultConfig, attributeKey, this );
				break;
			case 'select':
				field = fields.select( props, config, defaultConfig, attributeKey, this );
				break;
			case 'range':
				field = fields.range( props, config, defaultConfig, attributeKey, this );
				break;
			case 'radio':
				field = fields.radio( props, config, defaultConfig, attributeKey, this );
				break;
			case 'checkbox':
				field = fields.checkbox( props, config, defaultConfig, attributeKey, this );
				break;
			case 'button-editable':
				field = fields.buttonEditable( props, config, defaultConfig, attributeKey, this );
				break;
			case 'color':
				field = fields.color( props, config, defaultConfig, attributeKey, this );
				break;
			case 'code-editor':
				field = fields.codeEditor( props, config, defaultConfig, attributeKey, this );
				break;
			case 'date-time':
				field = fields.dateTime( props, config, defaultConfig, attributeKey, this );
				break;
			case 'textarea':
				field = fields.textarea( props, config, defaultConfig, attributeKey, this );
				break;
			case 'switch':
				field = fields.formToggle( props, config, defaultConfig, attributeKey, this );
				break;
			case 'tree-select':
				field = fields.treeSelect( props, config, defaultConfig, attributeKey, this );
				break;
			case 'file-upload':
				field = fields.fileUpload( props, config, defaultConfig, attributeKey, this );
				break;
			case 'block-alignment-toolbar':
				field = fields.blockAlignmentToolbar( props, config, defaultConfig, attributeKey, this );
				break;
			case 'alignment-toolbar':
				field = fields.alignmentToolbar( props, config, defaultConfig, attributeKey, this );
				break;
			case 'icons-toolbar':
				field = fields.iconsToolbar( props, config, defaultConfig, attributeKey, this );
				break;
			case 'media-icon':
				field = fields.mediaIcon( props, config, defaultConfig, attributeKey, this );
				break;
			case 'notice':
				field = fields.notice( props, config, defaultConfig, attributeKey, this );
				break;
			case 'dropdown-menu':
				field = fields.dropDownMenu( props, config, defaultConfig, attributeKey, this );
				break;
			case 'url-input-button':
				field = fields.urlInputButton( props, config, defaultConfig, attributeKey, this );
				break;
		}

		if ( _.contains( [ 'email', 'hidden', 'number', 'search', 'tel', 'time', 'date', 'datetime-local', 'file', 'month', 'password', 'time', 'url', 'week' ], config.type ) ) {
			field = fields.inputField( props, config, defaultConfig, attributeKey, this );
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
					this.helperFields[ helperFieldAttributeKey ] = this.setupField( props, helperFieldAttributeKey, false );
				} );
			}
		} );

		_.each( this.blockConfigs.attributes, ( attribute, attributeKey ) => {
			if ( attribute.field && ! this.helperFields[ attributeKey ] ) {
				this.setupField( props, attributeKey );
			}
		} );

		this.inspectorControls = this.getInspectorControls( props );
		this.blockControls = this.getBlockControls( props );
	}

	/**
	 * Get block controls.
	 *
	 * @param {Object} props Props
	 * @param {array} fields Fields
	 *
	 * @return {Object|null}
	 */
	getBlockControls( props, fields = [] ) {
		return props.isSelected ? (
			<BlockControls key="block-controls">
				{ _.isEmpty( fields ) && (
					Object.keys( this.blockControlFields ).map( ( key ) => {
						return this.blockControlFields[ key ];
					} )
				) }
				{ ! _.isEmpty( fields ) && fields }
			</BlockControls>
		) : null;
	}

	/**
	 * Get inspector controls.
	 *
	 * @param {Object} props Props
	 * @param {array} fields Fields
	 *
	 * @return {Object|null}
	 */
	getInspectorControls( props, fields = [] ) {
		return props.isSelected ? (
			<InspectorControls key="inspector-control">
				{ _.isEmpty( fields ) && (
					Object.keys( this.inspectorControlFields ).map( ( key ) => {
						return this.inspectorControlFields[ key ];
					} )
				) }
				{ ! _.isEmpty( fields ) && fields }
			</InspectorControls>
		) : null;
	}

	/**
	 * Setup a single Field.
	 *
	 * @param {Object}  props        Properties.
	 * @param {String}  attributeKey Attribute key.
	 * @param {Boolean} extend       Whether to extend the field with field objects.
	 *
	 * @return {Object|void} Field.
	 */
	setupField( props, attributeKey, extend = true ) {
		const field = this.getField( props, attributeKey );
		const config = this.getFieldConfig( attributeKey );

		if ( 'inspector' === config.placement ) {
			this.inspectorControlFields[ attributeKey ] = field;
		} else if ( 'block-controls' === config.placement ) {
			this.blockControlFields[ attributeKey ] = field;
		} else if ( extend ) {
			this.fields[ attributeKey ] = field;
		}

		return field;
	}

	/**
	 * Get field configuration.
	 *
	 * @param {String} attributeKey Attribute key.
	 *
	 * @return {Object}
	 */
	getFieldConfig( attributeKey ) {
		const attribute = this.blockConfigs.attributes[ attributeKey ];
		return ! _.isEmpty( attribute.field ) ? _.extend( attribute.field, { key: attributeKey } ) : {};
	}

	/**
	 * Get default configuration for all fields.
	 *
	 * @param {Object} props         Properties.
	 * @param {String} attributeKey  Attribute Key.
	 *
	 * @return {Object} Default Config object.
	 */
	static getDefaultFieldConfig( props, attributeKey ) {
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
			}
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
