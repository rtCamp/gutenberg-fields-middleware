/**
 * Date time field.
 */

const { DateTimePicker } = wp.components;
const { settings } = wp.date;

export default function dateTimePicker( props, config, attributeKey ) {
	const is12HourTime = /a(?!\\)/i.test(
		settings.formats.time
			.toLowerCase() // Test only the lower case a
			.replace( /\\\\/g, '' ) // Replace "//" with empty strings
			.split( '' ).reverse().join( '' ) // Reverse the string and test for "a" not followed by a slash
	);

	const defaultAttributes = {

		onChange( value ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		},

		locale: settings.l10n.locale,

		currentDate: props.attributes[ attributeKey ],

		is12Hour: is12HourTime,
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	delete fieldAttributes.type;

	return (
		<DateTimePicker
			{ ...fieldAttributes }
		/>
	);
}
