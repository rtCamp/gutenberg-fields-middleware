/**
 * Get dashicon css class suffix using extension.
 *
 * @param {string} extension File extension.
 * @return {string} Dashicon suffix.
 */
export function getDashIconSuffix( extension ) {
	let suffix = 'media-default';

	if ( 'zip' === extension ) {
		suffix = 'media-archive';
	} else if ( _.contains( [ 'pdf', 'epub', 'azw', 'indd' ], extension ) ) {
		suffix = 'book';
	} else if ( _.contains( [ 'jpg', 'png', 'gif', 'jpeg', 'tif', 'ico', 'bmp', 'svg' ], extension ) ) {
		suffix = 'format-image';
	} else if ( _.contains( [ 'mp4', 'avi', 'flv', 'mov', 'mpg', 'rm', 'swf', 'wmv', 'ogv', '3gp', '3g2', 'm4v' ], extension ) ) {
		suffix = 'media-video';
	} else if ( _.contains( [ 'pptx', 'pptm', 'ppt', 'pot', 'potx', 'potm', 'pps', 'ppsx' ], extension ) ) {
		suffix = 'media-interactive';
	} else if ( _.contains( [ 'mp3', 'm4a', 'ogg', 'wav' ], extension ) ) {
		suffix = 'media-audio';
	} else if ( _.contains( [ 'xls', 'xlsx', 'xla', 'xlb', 'xlc', 'xld', 'xlk', 'xll', 'xlm', 'xlt', 'xlv', 'xlw', 'numbers' ], extension ) ) {
		suffix = 'media-spreadsheet';
	} else if ( _.contains( [ 'doc', 'docx', 'docm', 'pages' ], extension ) ) {
		suffix = 'media-document';
	} else if ( _.contains( [ 'txt', 'odt', 'rtf', 'log' ], extension ) ) {
		suffix = 'media-text';
	}

	return suffix;
}

/**
 * Get dashicon suffix by file type.
 *
 * @param {string} type File type.
 * @return {string} Dashicon suffix.
 */
export function getDashIconSuffixByType( type ) {
	let suffix = '';

	if ( 'image' === type ) {
		suffix = 'format-image';
	} else if ( _.contains( [ 'video', 'audio', 'interactive', 'spreadsheet', 'document', 'text' ], type ) ) {
		suffix = 'media-' + type;
	} else {
		suffix = getDashIconSuffix( type );
	}

	return suffix;
}
