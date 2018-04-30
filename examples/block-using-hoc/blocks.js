/**
 * Middleware works the same for HOC as well.
 */
const withAPIData = wp.components.withAPIData;

wp.blocks.registerBlockType( 'gb-m-example/gutenberg-middleware-block-using-withapidata', {
	title: 'Example block Using withAPIData',
	attributes: {
		content: {
			type: 'string',
			field: {
				type: 'text',
				placeholder: 'Enter some text',
			},
		},
	},

	edit: withAPIData( function() {
		return {
			posts: '/wp/v2/posts?per_page=1',
		};
	} )( function( props ) {
		if ( ! props.posts.data ) {
			return 'loading !';
		}

		if ( props.posts.data.length === 0 ) {
			return 'No posts';
		}

		const className = props.className;
		const post = props.posts.data[ 0 ];

		return [
			wp.element.createElement( 'a', { className: className, href: post.link }, post.title.rendered ),
			props.middleware.fields.content,
		];
	} ),

	save: function() {
		return null; // Rendering in PHP
	},
} );
