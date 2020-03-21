import React, { createRef } from "react";
import ViewBox from "./View/ViewBox";
import { getUser } from "../utils/auth";
import firebase from "gatsby-plugin-firebase";

const Profile = () => {
  const usernameInputEl = createRef();
  const nameInputEl = createRef();
  const descriptionInputEl = createRef();
  const user = getUser();
  const { displayName, email, emailVerified, uid } = user;
  const accessToken = user.stsTokenManager.accessToken;
  const [extraData, setExtraData] = React.useState({});
  const fireUserRef = firebase.firestore().doc("/users/" + uid);

  // console.log('')

  React.useEffect(() => {
    fireUserRef.get().then(usrData => {
      setExtraData(usrData.data() || {});
    });
  }, [fireUserRef]);

  const updateName = () => {
    // console.log('save this value', nameInputEl.current.value);
    fireUserRef.set({
      username: usernameInputEl.current.value,
      name: nameInputEl.current.value,
      description: descriptionInputEl.current.value
    });

    // TODO: check if username already exists before overriding
    firebase.firestore().doc("/usernames/" + nameInputEl.current.value).set({
      uid: uid
    });
  };

  return (
    <div className="w-full bg-gray-100 rounded px-8 pt-6 pb-8 mb-4">
      <ViewBox title="My Info">
        <div className="text-gray-700 text-base">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                defaultValue={extraData.username}
                ref={usernameInputEl}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                defaultValue={extraData.name}
                ref={nameInputEl}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                rows="5"
                placeholder="Name"
                defaultValue={extraData.description}
                ref={descriptionInputEl}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={updateName}
              >
                Update Info
              </button>
            </div>
          </form>
        </div>
      </ViewBox>

      <ViewBox title="Additional Info Profile">
        <div>
          <div className="text-gray-700 text-base">
            <ul>
              <li>
                <div className="text-sm">
                  <b>Name</b>:
                </div>
                <div className="pl-2 ">{`${displayName}`}</div>
              </li>
              <li>
                <div className="text-sm">
                  <b>Email</b>:
                </div>
                <div className="pl-2 ">{`${email}`}</div>
              </li>
              <li>
                <div className="text-sm">
                  <b>Email Verified</b>:
                </div>
                <div className="pl-2 ">{`${emailVerified}`}</div>
              </li>
              <li>
                <div className="text-sm">
                  <b>Firebase Access Token</b>:
                </div>
                <div className="pl-2 truncate">{`${accessToken}`}</div>
              </li>
              <li>
                <div className="text-sm">
                  <b>User UID</b>:
                </div>
                <div className="pl-2 truncate">{`${uid}`}</div>
              </li>
            </ul>
          </div>
        </div>
      </ViewBox>
    </div>
  );
};

export default Profile;
