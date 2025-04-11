let initialState = { contactList: [], keyword: "" };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNumber: payload.phoneNum },
        ],
      };
    case "SEARCH_BY_USERNAME":
      state.keyword = payload.keyword;
      break;
  }
  console.log(initialState);
  return { ...state };
};

export default reducer;
