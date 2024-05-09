// client/src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserList = ({ users, deleteUser, fetchUsers }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const editUser = (id) => {
    navigate(`/edit-user/${id}`);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter users based on search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='mt-10 flex flex-col mx-auto justify-center'>
      <div className='justify-between flex'>
        <h2 className="text-xl font-bold mb-2">User List</h2>
        <Link to="/add-user" className="bg-blue-500 text-white px-2 py-1 rounded">
          Add User
        </Link>
      </div>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mt-4 mb-4 p-2 border border-gray-300 rounded-md"
      />
      <table className="table-auto mt-2 w-full">
        <thead>
          <tr>
            <th className="px-4 border py-2">Name</th>
            <th className="px-4 border py-2">Email</th>
            <th className="px-4 border py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user._id}>
                <td className="border px-4 py-2 text-center">{user.name}</td>
                <td className="border px-4 py-2 text-center">{user.email}</td>
                <td className="border px-4 py-2 flex flex-nowrap justify-center">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => editUser(user._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 ms-2 text-white px-2 py-1 rounded"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border px-4 py-2 text-center" colSpan={3}>No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
