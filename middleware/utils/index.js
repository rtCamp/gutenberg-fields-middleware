
export function getInnerFields( config, middleware ) {
	const innerFields = {};
	if ( config && ! _.isEmpty( config.innerFields ) ) {
		_.each( config.innerFields, ( innerFieldAttributeKey, innerFieldKeyName ) => {
			innerFields[ innerFieldKeyName ] = '';
			if ( _.has( middleware.fields, innerFieldAttributeKey ) ) {
				innerFields[ innerFieldKeyName ] = middleware.fields[ middleware.fields ];
			} else if ( _.has( middleware.inspectorControlFields, innerFieldAttributeKey ) ) {
				innerFields[ innerFieldKeyName ] = middleware.fields[ middleware.fields ];
			}
		} );
	}

	return innerFields;
}
