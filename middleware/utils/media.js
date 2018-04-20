export function getDashIconSuffix( extenstion ) {
	let suffix = 'media-default';

	if ( 'zip' === extenstion ) {
		suffix = 'media-archive';
	} else if ( _.contains( [ 'pdf', 'epub', 'azw', 'indd' ], extenstion ) ) {
		suffix = 'book';
	} else if ( _.contains( [ 'jpg', 'png', 'gif', 'jpeg', 'tif', 'ico', 'bmp', 'svg' ], extenstion ) ) {
		suffix = 'format-image';
	} else if ( _.contains( [ 'mp4', 'avi', 'flv', 'mov', 'mpg', 'rm', 'swf', 'wmv', 'ogv', '3gp', '3g2', 'm4v' ], extenstion ) ) {
		suffix = 'media-video';
	} else if ( _.contains( [ 'pptx', 'pptm', 'ppt', 'pot', 'potx', 'potm', 'pps', 'ppsx' ], extenstion ) ) {
		suffix = 'media-interactive';
	} else if ( _.contains( [ 'mp3', 'm4a', 'ogg', 'wav' ], extenstion ) ) {
		suffix = 'media-audio';
	} else if ( _.contains( [ 'xls', 'xlsx', 'xla', 'xlb', 'xlc', 'xld', 'xlk', 'xll', 'xlm', 'xlt', 'xlv', 'xlw', 'numbers' ], extenstion ) ) {
		suffix = 'media-spreadsheet';
	} else if ( _.contains( [ 'doc', 'docx', 'docm', 'pages' ], extenstion ) ) {
		suffix = 'media-document';
	} else if ( _.contains( [ 'txt', 'odt', 'rtf', 'log' ], extenstion ) ) {
		suffix = 'media-text';
	}

	return suffix;
}

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
