/**
 * Gutenberg Middleware.
 */

const { registerBlockType, RichText } = wp.blocks;

class GutenbergMiddleWare {
	constructor() {
		this.blockConfigs = {};
	}

	getControls( props ) {
		const controls = [];
		const changedAttributes = {};

		_.each( this.blockConfigs.attributes, ( attribute, key ) => {
			if ( attribute.field ) {
				if ( 'text' === attribute.field.type ) {
					controls.push(
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
			}
		} );

		return controls;
	}

	registerBlockType( namespace, config ) {
		this.blockConfigs = _.extend( {
			title: '',

			description: '',

			icon: 'universal-access-alt',

			category: 'common',

			attributes: {},

		}, config );

		this.blockConfigs.edit = ( props ) => {
			return (
				<div>
					{ _.has( config, 'edit' ) && config.edit( props ) }
					{ this.getControls( props ) }
				</div>
			);
		};

		this.blockConfigs.save = ( props ) => {
			return _.has( _.has( config, 'save' ) ) ? config.save( props ) : null;
		};

		registerBlockType( namespace, this.blockConfigs );
	}
}

window.gutenbergMiddleWare = new GutenbergMiddleWare();
