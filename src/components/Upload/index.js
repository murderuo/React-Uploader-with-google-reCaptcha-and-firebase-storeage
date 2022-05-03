import { storage } from '../../config/firebase';
import React, { useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function Upload({ token }) {
  const initialState = {
    status: '',
    progress: 0,
    url: '',
    errMsg: '',
  };
  const [data, setData] = useState(initialState);
  const uploadContent = file => {
    const fileRef = ref(storage, `/uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file, file.type);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setData({ ...data, progress: progress.toFixed(1) });
      },
      err => setData({ ...data, errMsg: err }),
      () => {
        setData({ initialState, status: 'success' });
        getDownloadURL(uploadTask.snapshot.ref)
          .then(url => setData({ ...data, url }))
          .catch(err => {
            setData({ ...data, url: 'cant get dwnload url', errMsg: err });
            console.log(err);
          });
      },
    );
  };

  const submitHandler = e => {
    e.preventDefault();

    if (token !== null) {
      uploadContent(e.target[0].files[0]);
    } else {
      alert('please check captcha');
    }
  };

  return (
    <>
      Upload component <br />
      <br />
      <br />
      <form onSubmit={submitHandler}>
        <div className="upload-container">
          <span>
            Dosya seçiniz:
            <input type="file" name="file" />
          </span>
        </div>
        <br />
        <div className="upload-button">
          <button>Upload {data.progress !== 0 && data.progress}</button>
        </div>
        <br />
        {data.status === 'success' && (
          <div className="upload-status">{data.status}</div>
        )}
        {data.errMsg && <div className="upload-status">{data.errMsg}</div>}
        {data.url !== '' && (
          <div>
            DOWNLOAD URL: <br />
            <div className="upload-bar">
              <a href={data.url} target='_blank' rel="noreferrer noopener" >
                {data.url}
              </a>
            </div>
          </div>
        )}
      </form>
    </>
  );
}

export default Upload;
