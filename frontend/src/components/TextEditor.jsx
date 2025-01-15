import  {  useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

// eslint-disable-next-line react/prop-types
const TextEditor = ({content,setContent}) => {
	const editor = useRef(null);
	//const [content, setContent] = useState('');
    const placeholder='Start Typing.....'
	const config = useMemo(()=>{
		return {
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Start typings...'
		}
	},
		[placeholder]
	);

	return (
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
			
		/>
	);
};

export default TextEditor