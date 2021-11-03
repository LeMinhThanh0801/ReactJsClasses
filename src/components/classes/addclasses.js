import axios from 'axios';
import React, { useState } from 'react';

export default function AddClass() {
  const url = 'https://api-classes.herokuapp.com/classes';

  const [data, setData] = useState({
    name: '',
    description: '',
    teacherName: '',
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        description: data.description,
        teacherName: data.teacherName,
      })
      .then((res) => console.log(res.data));
  }
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id='name'
          value={data.name}
          placeholder='name'
          type='text'
        ></input>
        <input
          onChange={(e) => handle(e)}
          id='description'
          value={data.description}
          placeholder='description'
          type='text'
        ></input>
        <input
          onChange={(e) => handle(e)}
          id='teacherName'
          value={data.teacherName}
          placeholder='teacherName'
          type='text'
        ></input>
        <button>AddCourse</button>
      </form>
    </div>
  );
}
