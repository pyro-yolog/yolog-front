import React, { useState, ChangeEvent } from 'react';
import { AtomicBlockUtils, Editor, EditorState, ContentBlock } from 'draft-js';
import { IconGallery } from './icon';

function DraftEditor() {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty(),
  );
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageFiles = Array.from(files);
      const imagePreviews = imageFiles.map((file) => URL.createObjectURL(file));
      setSelectedImages((prevImages) => [...prevImages, ...imagePreviews]);

      imageFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result as string;
          insertImage(base64);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const insertImage = (base64: string) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'IMAGE',
      'IMMUTABLE',
      { src: base64 },
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      editorState,
      entityKey,
      ' ',
    );
    setEditorState(
      EditorState.forceSelection(newEditorState, newEditorState.getSelection()),
    );
  };

  const mediaBlockRenderer = (block: ContentBlock) => {
    if (block.getType() === 'atomic') {
      return {
        component: Media,
        editable: false,
        props: {
          contentState: editorState.getCurrentContent(),
        },
      };
    }
    return null;
  };

  const Media = (props: any) => {
    const entityKey = props.block.getEntityAt(0);
    if (!entityKey) {
      return null;
    }
    const entity = props.contentState.getEntity(entityKey);
    const { src } = entity.getData();
    return <img src={src} alt="Inserted" style={{ maxWidth: '100%' }} />;
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        style={{ display: 'none' }}
        id="imageUpload"
      />
      <label htmlFor="imageUpload" className="cursor-pointer">
        <IconGallery />
      </label>
      <div className="image-previews mt-4">
        {selectedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Selected preview ${index + 1}`}
            className="w-full h-auto mb-2"
          />
        ))}
      </div>
      <Editor
        editorState={editorState}
        onChange={handleEditorChange}
        placeholder="내용을 입력하세요"
        blockRendererFn={mediaBlockRenderer}
      />
    </div>
  );
}

export default DraftEditor;
