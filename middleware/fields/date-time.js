/**
 * Date time field.
 */

const { DateTimePicker, PanelBody } = wp.components;
const { dateI18n, settings } = wp.date;
const { __ } = wp.i18n;

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

		label: __( 'Date' ),
	};

	const fieldAttributes = _.extend( defaultAttributes, config );
	const label = fieldAttributes.label;

	const getFormattedDate = () => {
		return props.attributes[ attributeKey ] ? dateI18n( settings.formats.datetime, props.attributes[ attributeKey ] ) : '';
	};

	delete fieldAttributes.type;
	delete fieldAttributes.label;

	return (
		<PanelBody initialOpen={ false } title={ [
			label + ': ',
			<span key="label">{ getFormattedDate() }</span>,
		]
		}>
			<DateTimePicker
				{ ...fieldAttributes }
			/>
		</PanelBody>
	);
}
