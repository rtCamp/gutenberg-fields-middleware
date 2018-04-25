/**
 * Gutenberg Fields Middleware.
 */

const { InspectorControls, BlockControls } = wp.blocks;
const { addFilter } = wp.hooks;
const { withState, BaseControl, Toolbar } = wp.components;

/**
 * Fields
 */
import * as fields from './fields';

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
		this.updateAlignment = this.updateAlignment.bind( this );
		this.getBlockAlignmentToolbarAttributeKey = this.getBlockAlignmentToolbarAttributeKey.bind( this );
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

		this.blockConfigs.getEditWrapperProps = ( attributes ) => {
			let newAttributes = {};
			const getEditWrapperProps = this.config.getEditWrapperProps ? this.config.getEditWrapperProps( attributes ) : {};
			const attributeKey = this.getBlockAlignmentToolbarAttributeKey();
			const align = attributes[ attributeKey ];

			if ( _.contains( [ 'left', 'center', 'right', 'wide', 'full' ], align ) ) {
				newAttributes = { 'data-align': align };
			}

			return _.extend( newAttributes, getEditWrapperProps );
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
				field[ attributeKey ] = fields.text( props, config, attributeKey, this );
				break;
			case 'rich-text':
				field[ attributeKey ] = fields.richText( props, config, attributeKey, this );
				break;
			case 'link':
				field[ attributeKey ] = fields.link( props, config, attributeKey, this );
				break;
			case 'video':
			case 'audio':
			case 'image':
				field[ attributeKey ] = fields.mediaUpload( props, config, attributeKey, this );
				break;
			case 'select':
				field[ attributeKey ] = fields.select( props, config, attributeKey, this );
				break;
			case 'range':
				field[ attributeKey ] = fields.range( props, config, attributeKey, this );
				break;
			case 'radio':
				field[ attributeKey ] = fields.radio( props, config, attributeKey, this );
				break;
			case 'checkbox':
				field[ attributeKey ] = fields.checkbox( props, config, attributeKey, this );
				break;
			case 'button-editable':
				field[ attributeKey ] = fields.buttonEditable( props, config, attributeKey, this );
				break;
			case 'color':
				field[ attributeKey ] = fields.color( props, config, attributeKey, this );
				break;
			case 'code-editor':
				field[ attributeKey ] = fields.codeEditor( props, config, attributeKey, this );
				break;
			case 'date-time':
				field[ attributeKey ] = fields.dateTime( props, config, attributeKey, this );
				break;
			case 'textarea':
				field[ attributeKey ] = fields.textarea( props, config, attributeKey, this );
				break;
			case 'switch':
				field[ attributeKey ] = fields.formToggle( props, config, attributeKey, this );
				break;
			case 'tree-select':
				field[ attributeKey ] = fields.treeSelect( props, config, attributeKey, this );
				break;
			case 'file-upload':
				field[ attributeKey ] = fields.fileUpload( props, config, attributeKey, this );
				break;
			case 'block-alignment-toolbar':
				field[ attributeKey ] = fields.blockAlignmentToolbar( props, config, attributeKey, this );
				break;
			case 'alignment-toolbar':
				field[ attributeKey ] = fields.alignmentToolbar( props, config, attributeKey, this );
				break;
			case 'icons-toolbar':
				field[ attributeKey ] = fields.iconsToolbar( props, config, attributeKey, this );
				break;
			case 'media-icon':
				field[ attributeKey ] = fields.mediaIcon( props, config, attributeKey, this );
				break;
			case 'dropdown-menu':
				field[ attributeKey ] = fields.dropDownMenu( props, config, attributeKey, this );
				break;
			case 'url-input-button':
				field[ attributeKey ] = fields.urlInputButton( props, config, attributeKey, this );
				break;
		}

		if ( _.contains( [ 'email', 'hidden', 'number', 'search', 'tel', 'time', 'date', 'datetime-local', 'file', 'month', 'password', 'time', 'url', 'week' ], config.type ) ) {
			field[ attributeKey ] = fields.inputField( props, config, attributeKey, this.fields );
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

		const field = this.getField( props, config, attributeKey );

		if ( 'inspector' === config.placement ) {
			_.extend( this.inspectorControlFields, field );
		} else if ( 'block-controls' === config.placement ) {
			_.extend( this.blockControlFields, field );
		} else if ( extend ) {
			_.extend( this.fields, field );
		}

		return field;
	}

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
	 * Create middleware field according to the placement.
	 *
	 * @param {Object} config  Configuration passed in field.
	 * @param {Object} element React element or component.
	 *
	 * @return {Object} element.
	 */
	createField( config, element ) {
		if ( 'inspector' === config.placement || config.label || config.help ) {
			return (
				<BaseControl label={ config.label } help={ config.help } >
					{ element }
				</BaseControl>
			);
		} else if ( 'block-controls' === config.placement ) {
			return (
				<Toolbar>
					{ element }
				</Toolbar>
			);
		}

		return element;
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
