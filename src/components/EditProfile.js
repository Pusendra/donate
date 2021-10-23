import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useLoginContext } from '../Contexts/loginContext';
import '../css/editProfile.css';
import { getUserProfile, updateUserProfile } from '../services/Services';

const EditProfile = () => {
  const { data } = useLoginContext();
  const [userData, setUserData] = useState({});
  const [updatedData, setUpdatedData] = useState({});

  const getAllProducts = async () => {
    const d = await getUserProfile(data.id);

    setUserData(d?.data);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateUserProfile(data?.id)
      .then((res) =>
        toast.success('User Details updated Successfully.', {
          position: toast.POSITION.TOP_RIGHT
        })
      )
      .catch((err) => {
        toast.error('Could Not Update Profile', {
          position: toast.POSITION.TOP_RIGHT
        });
      });
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...userData, [name]: value });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <form class="my-form" onSubmit={handleUpdateProfile}>
      <div class="edit-container">
        <h1>Edit Profile</h1>
        <ul>
          <li>
            <div class="grid grid-2">
              <div>
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  defaultValue={userData?.firstName}
                  onChange={handleDataChange}
                  name="firstName"
                />
              </div>
              <div>
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  defaultValue={userData?.lastName}
                  onChange={handleDataChange}
                  name="lastName"
                />
              </div>
            </div>
          </li>
          <li>
            <div class="grid grid-2">
              <div>
                <label for="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  defaultValue={userData?.email}
                  onChange={handleDataChange}
                  name="email"
                />
              </div>
              <div>
                <label for="phone">Mobile</label>
                <input
                  type="tel"
                  placeholder="Mobile"
                  defaultValue={userData?.mobile}
                  onChange={handleDataChange}
                  name="mobile"
                />
              </div>
            </div>
          </li>
          <li>
            <label for="address">Address</label>
            <input
              type="text"
              placeholder="Address"
              defaultValue={userData?.address}
              onChange={handleDataChange}
              name="address"
            />
          </li>

          <li>
            <div class="grid grid-3">
              <div class="required-msg"></div>
              <div></div>
              <button class="btn-grid" type="submit">
                <span class="back">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                    alt=""
                  />
                </span>
                <span class="front">SUBMIT</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default EditProfile;
