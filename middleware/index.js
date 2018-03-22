/**
 * Gutenberg Fields Middleware.
 */

const { registerBlockType } = wp.blocks;

import richText from './fields/rich-text';
import mediaUpload from './fields/media-upload';

class GutenbergFieldsMiddleWare {
	constructor() {
		this.setBlockComponents = this.setBlockComponents.bind( this );
	}

	registerBlockType( namespace, config ) {
		this.blockConfigs = {};
		this.fields = {};
		this.config = _.extend( {}, config );

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

		registerBlockType( namespace, this.blockConfigs );

		return this;
	}

	setBlockComponents( props ) {
		_.each( this.blockConfigs.attributes, ( attribute, attributeKey ) => {
			if ( attribute.field ) {
				switch ( attribute.field.type ) {
					case 'text':
						this.fields[ attributeKey ] = richText( props, attribute, attributeKey );
						break;
					case 'image':
						this.fields[ attributeKey ] = mediaUpload( props, attribute, attributeKey );
						break;
					case 'video':
						this.fields[ attributeKey ] = mediaUpload( props, attribute, attributeKey );
						break;
					case 'audio':
						this.fields[ attributeKey ] = mediaUpload( props, attribute, attributeKey );
						break;
				}
			}
		} );
	}

	edit( props ) {
		return (
			<div>
				{ Object.keys( this.fields ).map( ( key ) => {
					return this.fields[ key ];
				} ) }
			</div>
		);
	}

	save( props ) {
		return null;
	}
}

window.gutenbergFieldsMiddleWare = new GutenbergFieldsMiddleWare();
