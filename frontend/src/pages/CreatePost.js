import {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  const [title, useTitle] = useState('');
  const [summary, useSummary] = useState('');
  const [content, useContent] = useState('');
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      ['bold', 'italic', 'underline','strike','blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };

  const formats = {
    formats: [
      'header', 'font', 'bold', 'italic',
      'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent',
      'link', 'image', 'video', 
    ]
  }

  return(
    <form>
      <input type='title' placeholder={'Title of your post'}/>
      <input type='summary' placeholder={'Summary of your post'}/>
      <input type='file'/>
      <ReactQuill value={content} modules={modules} formats={formats} />
      <button style={{marginTop:'10px', marginBottom:'30px'}}>Create Post</button>
    </form>
  )
}