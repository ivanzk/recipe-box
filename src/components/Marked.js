import React from 'react';
import marked from 'marked';


export default function Marked(props) {
	return (
		<div dangerouslySetInnerHTML={{__html: marked(props.text)}}></div>
	);
}