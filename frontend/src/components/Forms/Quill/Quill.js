import React, {Component} from 'react';
import '../../.././hjs';
import ReactQuill from 'react-quill'; // ES6


class Quill extends Component {
    render() {
        const formats = [
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent', 'code-block',
            'link', 'image', 'video'
        ];

        const commentFormats = [
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'code-block',
            'link', 'image', 'video'
        ];

        const commentModules = {
            syntax: true,
            toolbar: [
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                ['code-block'],
                [{'list': 'ordered'}, {'list': 'bullet'}],
                ['link', 'image', 'video'],
                ['clean'],
            ],
            clipboard: {
                // toggle to add extra line breaks when pasting HTML:
                matchVisual: false,
            }
        };

        const modules = {
            syntax: true,
            toolbar: [
                [{'header': '1'}, {'header': '2'}, {'font': []}],
                ['code-block'],
                [{size: []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'},
                    {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image', 'video'],
                ['clean'],
            ],
            clipboard: {
                // toggle to add extra line breaks when pasting HTML:
                matchVisual: false,
            }
        };

        return (
            <div>
                <ReactQuill
                    modules={this.props.commentMode ? commentModules : modules}
                    formats={this.props.commentMode ? commentFormats : formats}
                />
            </div>
        );
    }
}

export default Quill;