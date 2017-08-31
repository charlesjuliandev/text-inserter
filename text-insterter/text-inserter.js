// USAGE

// var output = that.text_inserter({
// 	source_string: views.career_form_content,
// 	text_insert_search_string: 'id="field55928168"',
// 	insert_text_before_string: '</select>',
// 	new_text: options_string
// })

text_inserter: function(params){
	var that = this;
	var source_string = (params.source_string === 'undefined') ? null : params.source_string;
	var text_insert_search_string = (params.text_insert_search_string === 'undefined') ? null : params.text_insert_search_string;
	var insert_text_before_string = (params.insert_text_before_string === 'undefined') ? null : params.insert_text_before_string;
	var new_text = (params.new_text === 'undefined') ? null : params.new_text;

	var text_insert_search_index = source_string.indexOf(text_insert_search_string);
	var insert_text_before_index = text_insert_search_index + source_string.substring(text_insert_search_index).indexOf(insert_text_before_string);

	return [source_string.slice(0, insert_text_before_index -1), new_text, source_string.slice(insert_text_before_index) ].join('');

},