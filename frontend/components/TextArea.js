import TextareaAutosize from 'react-textarea-autosize';

export default function TextArea(props) {
  return <TextareaAutosize
    className="bg-gray-04 p-[20px] rounded-[20px] resize-none outline-none placeholder-placeholder text-[20px]"
    minRows={5}
    maxRows={10}
    {...props}
  />
}