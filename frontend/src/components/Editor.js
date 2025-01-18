import React from "react";
import "./Editor.css";

const Editor = ({ layout, formData, setFormData }) => {
  return (
    <div className="editor">
      <div dangerouslySetInnerHTML={{ __html: layout }} className="layout-preview" />
      <div className="editor-fields">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="editor-input"
        />
        <textarea
          placeholder="Content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="editor-textarea"
        ></textarea>
        <input
          type="text"
          placeholder="Footer"
          value={formData.footer}
          onChange={(e) => setFormData({ ...formData, footer: e.target.value })}
          className="editor-input"
        />
      </div>
    </div>
  );
};

export default Editor;
