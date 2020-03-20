import React, { createRef } from "react"
import View from "./View"
import { getUser } from "../utils/auth"
import firebase from "gatsby-plugin-firebase"


const Profile = () => {
  const nameInputEl = createRef();
  const user = getUser();
  const { displayName, email, emailVerified, uid } = user;
  const accessToken = user.stsTokenManager.accessToken;

  // console.log('what is firebase', firebase);

  // const updateName = () => {
  //   // console.log('save this value', nameInputEl.current.value);
  //   firebase.database()
  //     .ref('/users/'+ uid +'/info/')
  //     .set({
  //       name: nameInputEl.current.value
  //     });
  // }

  return (
    <View title="Your Profile">
        <div>
          <p className="text-sm text-gray-600 flex items-center mb-4">
            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div className="text-gray-700 text-base">
            <ul>
                <li>
                  <div className="text-sm"><b>Name</b>:</div>
                  <div className="pl-2 ">{`${displayName}`}</div>
                </li>
                <li>
                  <div className="text-sm"><b>Email</b>:</div>
                  <div className="pl-2 ">{`${email}`}</div>
                  </li>
                <li>
                  <div className="text-sm"><b>Email Verified</b>:</div>
                  <div className="pl-2 ">{`${emailVerified}`}</div>
                  </li>
                <li>
                  <div className="text-sm"><b>Firebase Access Token</b>:</div>
                  <div className="pl-2 truncate" >{`${accessToken}`}</div>
                </li>
                <li>
                  <div className="text-sm"><b>User UID</b>:</div>
                  <div className="pl-2 truncate" >{`${uid}`}</div>
                </li>
              

            </ul>
          </div>
        </div>
    </View>
  )
}

export default Profile
