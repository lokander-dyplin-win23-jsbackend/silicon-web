import { useState, useRef } from 'react';
import styles from './Account.module.css'; 

const FileUploadForm = () => {
    const [status, setStatus] = useState('');
    const fileInputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('');

        const fileInput = fileInputRef.current;
        console.log(fileInput); 
        if (fileInput && fileInput.files.length > 0) {
            const formData = new FormData();
            formData.append('file', fileInput.files[0]);

            try {
                const res = await fetch('http://localhost:7154/api/Upload?containerName=profiles', {
                    method: 'POST',
                    body: formData
                });

                if (res.ok) {
                    setStatus('File uploaded successfully!');
                } else {
                    setStatus('File upload failed.');
                }
            } catch (error) {
                console.error('Error uploading file:', error);
                setStatus('Error File upload failed.');
            }
        } else {
            setStatus('No file selected.');
        }
    };

    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <input ref={fileInputRef} id={styles.fileUploader} type="file" accept="image/*" />
            <button type="submit" className="btn btn-primary">Upload</button>
            <div id="status">{status}</div>
        </form>
    );
};

export default function FileUploader() {
    return <FileUploadForm />;
}
