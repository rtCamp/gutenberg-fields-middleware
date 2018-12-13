/**
 * autocomplete field.
 */

const { Autocomplete } = wp.components;
import Field from './../../components/field';

export default function autocomplete( props, config, defaultConfig ) {
	const fieldAttributes = _.extend( defaultConfig, config );

    delete fieldAttributes.type;

    const autocompleters = [
		{
			name: 'fruit',
			// The prefix that triggers this completer
			triggerPrefix: '~',
			// The option data
			options: [
				{ visual: '🍎', name: 'Apple', id: 1 },
				{ visual: '🍊', name: 'Orange', id: 2 },
				{ visual: '🍇', name: 'Grapes', id: 3 },
            ],
			// Returns a label for an option like "🍊 Orange"
			getOptionLabel: option => (
				<span>
					<span className="icon" >{ option.visual }</span>{ option.name }
				</span>
			),
			// Declares that options should be matched by their name
			getOptionKeywords: option => [ option.name ],
			// Declares that the Grapes option is disabled
			isOptionDisabled: option => option.name === 'Grapes',
			// Declares completions should be inserted as abbreviations
			getOptionCompletion: option => (
				<abbr title={ option.name }>{ option.visual }</abbr>
			),
		}
	];

	return (
        <Field { ...config } >
			<Autocomplete completers={ autocompleters } record={{start: true}}>
				{ ( { isExpanded, listBoxId, activeId } ) => (
					<div
                    contentEditable
						suppressContentEditableWarning
						aria-autocomplete="list"
						aria-expanded={ isExpanded }
						aria-owns={ listBoxId }
						aria-activedescendant={ activeId }
					>
					</div>
				) }
			</Autocomplete>
            <p>Type ~ for triggering the autocomplete.</p>
		</Field>
    );
}
