/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading Please Wait</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div className="container mt-5">
      <h2 className="mb-5">User List</h2>
      {userData &&
        userData.users &&
        userData.users.map((user) => (
          <div key={user.id}>
            <p className="d-inline">Name : {user.name}</p>
            <p>Email : {user.email}</p>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
