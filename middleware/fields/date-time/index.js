/**
 * Date time field.
 */

const { DateTimePicker } = wp.components;
const { dateI18n, settings } = wp.date;
const { __ } = wp.i18n;

import './editor.scss';
import Field from './../../components/field';

export default function dateTime( props, config, defaultConfig, attributeKey ) {
	const is12HourTime = /a(?!\\)/i.test(
		settings.formats.time
			.toLowerCase() // Test only the lower case a
			.replace( /\\\\/g, '' ) // Replace "//" with empty strings
			.split( '' ).reverse().join( '' ) // Reverse the string and test for "a" not followed by a slash
	);

	const defaultAttributes = _.extend( defaultConfig, {
		locale: settings.l10n.locale,
		currentDate: props.attributes[ attributeKey ],
		is12Hour: is12HourTime,
		label: __( 'Date' ),
		initialOpen: false,
		panel: true,
	} );

	delete defaultAttributes.value;

	const fieldAttributes = _.extend( defaultAttributes, config );

	const getFormattedDate = () => {
		return props.attributes[ attributeKey ] ? dateI18n( settings.formats.datetime, props.attributes[ attributeKey ] ) : '';
	};

	delete fieldAttributes.type;

	return (
		<Field
			config={ config }
			component={ DateTimePicker }
			{ ...fieldAttributes }
			getFormattedDate={ getFormattedDate }
		/>
	);
}
