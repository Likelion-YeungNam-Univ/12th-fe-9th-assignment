//회사 공지사항
//공지사항 CRUD(create, read, update, delete)

import React, { useState } from 'react';

const Notice = () => {
    const [notices, setNotices] = useState([]);
    const [newNotice, setNewNotice] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editNotice, setEditNotice] = useState('');

    const handleCreate = () => {
        if (newNotice.trim() !== '') {
            setNotices([...notices, newNotice]);
            setNewNotice('');
        }
    };

    const handleDelete = (index) => {
        const updatedNotices = notices.filter((_, i) => i !== index);
        setNotices(updatedNotices);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditNotice(notices[index]);
    };

    const handleUpdate = () => {
        if (editNotice.trim() !== '') {
            const updatedNotices = notices.map((notice, i) => (i === editIndex ? editNotice : notice));
            setNotices(updatedNotices);
            setEditIndex(null);
            setEditNotice('');
        }
    };

    return (
        <div>
            <h1>Notice 페이지</h1>
            <div>
                <input
                    type="text"
                    value={newNotice}
                    onChange={(e) => setNewNotice(e.target.value)}
                />
                <button onClick={handleCreate}>추가</button>
            </div>
            <div>
                {notices.map((notice, index) => (
                    <div key={index}>
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editNotice}
                                    onChange={(e) => setEditNotice(e.target.value)}
                                />
                                <button onClick={handleUpdate}>저장</button>
                            </>
                        ) : (
                            <>
                                <span>{notice}</span>
                                <button onClick={() => handleEdit(index)}>수정</button>
                                <button onClick={() => handleDelete(index)}>삭제</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notice;
