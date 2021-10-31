import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";

function RichTextEditor(){
	const [content, setContent] = useState('')
	const config = {
		readonly: false
	}
	
	return (
            <JoditEditor
                value={content}
                config={config}
                tabIndex={1}
                onChange={newContent => {setContent(newContent)}}
            />
        );
}

export default RichTextEditor;