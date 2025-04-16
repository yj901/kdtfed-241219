import { createSlice } from "@reduxjs/toolkit";

let initialState = { contactList: [], keyword: "" };

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contactList.push({
        name: action.payload.name,
        phoneNumber: action.payload.phoneNum,
      });
    },
    searchByusername(state, action) {
      state.keyword = action.payload.keyword;
    },
  },
});

// console.log("test", contactSlice);

export const contactReducer = contactSlice.reducer;
export const { addContact, searchByusername } = contactSlice.actions;

// const reducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case "ADD_CONTACT":
//       return {
//         ...state,
//         contactList: [
//           ...state.contactList,
//           { name: payload.name, phoneNumber: payload.phoneNum },
//         ],
//       };
//     case "SEARCH_BY_USERNAME":
//       state.keyword = payload.keyword;
//       break;
//   }
//   console.log(initialState);
//   return { ...state };
// };

// export default reducer;
