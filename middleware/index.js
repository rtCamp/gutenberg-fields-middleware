/**
 * Gutenberg Middleware.
 */

const { registerBlockType, RichText } = wp.blocks;

class GutenbergMiddleWare {
	constructor() {
		this.blockConfigs = {};
		this.components = {};
		this.config = {};

		this.setBlockComponents = this.setBlockComponents.bind( this );
	}

	setBlockComponents( props ) {
		const changedAttributes = {};

		_.each( this.blockConfigs.attributes, ( attribute, key ) => {
			if ( attribute.field && 'text' === attribute.field.type ) {
				this.components[ key ] = (
					<RichText
						onChange={ ( newContent ) => {
							changedAttributes[ key ] = newContent;
							props.setAttributes( changedAttributes );
						} }
						value={ props.attributes[ key ] }
						placeholder={ attribute.field.placeholder }
					/>
				);
			}
		} );
	}

	registerBlockType( namespace, config ) {
		this.config = config;

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

	edit( props ) {
		return (
			<div>
				{ Object.keys( this.components ).map( ( key ) => {
					return this.components[ key ];
				} ) }
			</div>
		);
	}

	save( props ) {
		return null;
	}
}

window.gutenbergMiddleWare = new GutenbergMiddleWare();
