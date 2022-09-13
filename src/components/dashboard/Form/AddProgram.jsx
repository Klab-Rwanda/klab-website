import React, { useState } from 'react';
import axios from 'axios';
const userAdmin = JSON.parse(localStorage.getItem('admin'));
// const adminToken = userAdmin.access_token;

const AddProgram = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [banner, setBanner] = useState(null);

  const handleFile = (e) => {
    setBanner(e.target.files[0]);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const url =
      'https://klabattendees.herokuapp.com/api/futureCoderStore/createProgram';
    const formData = new FormData();
    formData.append('banner', banner);
    // formData.append("fileName", banner.name);
    formData.append('title', title);
    formData.append('description', desc);

    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${adminToken}`
      }
    });
    console.log(response);
  };

  return (
    <div className='program-container'>
      <div className='program-form'>
        <form onSubmit={handleForm}>
          <h2>Add Program</h2>
          <div className=''>
            <div className='program-data'>
              <label>Program Title</label>
              <input
                placeholder='Enter Title'
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className='program-data'>
              <label>Program Description</label>
              <textarea
                placeholder='Enter Description'
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
            <div className='program-data'>
              <label>Banner</label>
              <input type='file' onChange={handleFile} />
            </div>
            <div className='program-button'>
              <button className='button'>Add Program</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProgram;
