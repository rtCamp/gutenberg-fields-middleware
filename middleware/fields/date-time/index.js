/**
 * Date time field.
 */

const { DateTimePicker, PanelBody } = wp.components;
const { dateI18n, settings } = wp.date;
const { __ } = wp.i18n;

import './editor.scss';

export default function dateTime( props, config, defaultConfig, attributeKey, middleware ) {
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

	const dateTimeEl = (
		<DateTimePicker
			{ ...fieldAttributes }
		/>
	);

	if ( fieldAttributes.panel ) {
		return (
			<PanelBody initialOpen={ fieldAttributes.initialOpen } title={ [
				fieldAttributes.label + ': ',
				<span key="label">{ getFormattedDate() }</span>,
			]
			}>
				{ dateTimeEl }
			</PanelBody>
		);
	}

	return middleware.createField( fieldAttributes, (
		<div className="middleware-date-time-no-panel">
			{ dateTimeEl }
		</div>
	) );
}
