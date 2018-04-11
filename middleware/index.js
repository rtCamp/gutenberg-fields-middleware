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
import colorPalette from './fields/color-palette';
import dropdown from './fields/dropdown';
import editor from './fields/code-editor';
import dateTimePicker from './fields/date-time';
import formToggle from './fields/form-toggle';
import treeSelect from './fields/tree-select';
import fileUpload from './fields/file-upload';

class GutenbergFieldsMiddleWare {
	constructor( config ) {
		this.blockConfigs = {};
		this.fields = {};
		this.inspectorControlFields = {};
		this.inspectorControls = '';
		this.config = _.extend( {}, config );

		this.setBlockComponents = this.setBlockComponents.bind( this );
	}

	getSettings() {
		this.blockConfigs = _.extend( {
			title: '',

			description: '',

			icon: 'universal-access-alt',

			category: 'common',

			attributes: {},

		}, this.config );

		this.blockConfigs.edit = ( props ) => {
			this.setBlockComponents( props );
			return this.config.edit ? this.config.edit( props, this ) : this.edit( props );
		};

		this.blockConfigs.save = ( props ) => {
			return this.config.save ? this.config.save( props, this ) : this.save( props );
		};

		return this.blockConfigs;
	}

	getFields( fieldType, attributeKey, props, config ) {
		const fields = {};

		switch ( fieldType ) {
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
			case 'file-upload':
				fields[ attributeKey ] = fileUpload( props, config, attributeKey );
				break;
		}

		return fields;
	}

	setBlockComponents( props ) {
		_.each( this.blockConfigs.attributes, ( attribute, attributeKey ) => {
			if ( attribute.field ) {
				if ( 'inspector' === attribute.field.placement ) {
					_.extend( this.inspectorControlFields, this.getFields( attribute.field.type, attributeKey, props, attribute.field ) );
				} else {
					_.extend( this.fields, this.getFields( attribute.field.type, attributeKey, props, attribute.field ) );
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

	save( props ) {
		return null;
	}
}

addFilter( 'blocks.registerBlockType', 'gutenberg-field-middleware/registration/attributes', ( settings, name ) => {
	if ( ! /^core/.test( name ) ) {
		const middleware = new GutenbergFieldsMiddleWare( settings );
		return middleware.getSettings();
	}

	return settings;
}, 1 );

export default GutenbergFieldsMiddleWare;
