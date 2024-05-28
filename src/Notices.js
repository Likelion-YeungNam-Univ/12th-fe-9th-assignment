import React, { useState } from 'react';

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState('');

  const handleAddNotice = () => {
    setNotices([...notices, newNotice]);
    setNewNotice('');
  };

  const handleDeleteNotice = (index) => {
    const updatedNotices = notices.filter((_, i) => i !== index);
    setNotices(updatedNotices);
  };

  return (
    <div>
      <h1>Notices</h1>
      <input
        type="text"
        value={newNotice}
        onChange={(e) => setNewNotice(e.target.value)}
      />
      <button onClick={handleAddNotice}>Add Notice</button>
      <ul>
        {notices.map((notice, index) => (
          <li key={index}>
            {notice}
            <button onClick={() => handleDeleteNotice(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notices;