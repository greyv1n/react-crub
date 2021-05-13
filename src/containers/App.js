import React, { useState } from 'react'
import { Form } from './Form'
import { Card } from '../components/Card'

const data = [
  { id: '0', name: 'alex', phone: '097733777' },
  { id: '1', name: 'anna', phone: '092227771' },
  { id: '3', name: 'marina', phone: '090002221' }
]

function App() {
  const [users, setUsers] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [typeBtn, setTypeBtn] = useState('add'); //edit
  const [selectedId, setSelecterId] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [selectedPhone, setSelectedPhone] = useState('');

  function addUser(name, phone) {
    let id = Date.parse(new Date());
    setUsers([...users, { id, name, phone }]);
    hideForm();
  }

  function removeUser(id) {
    setUsers(users.filter(user => user.id !== id))
  }

  function chengeUser(name, phone) {
    setUsers(users.map(item => item.id === selectedId ? { ...item, name, phone } : item));
    hideForm();
  }

  function hideForm() {
    setShowForm(false);
    setEditing(false);
    setSelectedName('');
    setSelectedPhone('');
  }

  function cbEdit(id) {
    clickHandler('edit');

    users.forEach(item => {
      if (item.id === id) {
        setSelectedName(item.name);
        setSelectedPhone(item.phone);
        setSelecterId(id);
      }
    });
  }

  function clickHandler(type) {
    setShowForm(true);
    setEditing(true);
    setTypeBtn(type);
  }

  return (
    <div className='container'>
      <div className="header">
        {showForm
          ? <Form
            cbAddUser={addUser}
            cbHideForm={hideForm}
            cbChengeUser={chengeUser}
            typeBtn={typeBtn}
            selectedName={selectedName}
            selectedPhone={selectedPhone}
          />
          : <button className='form-button' onClick={() => clickHandler('add')}> Add User</button>
        }
      </div>

      {users.map(item => (
        <Card
          key={item.id}
          cbEdit={cbEdit}
          cbRemove={removeUser}
          editing={editing}
          {...item}
        />
      ))}
    </div>
  );
}

export default App;
