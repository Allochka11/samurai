import { addPostActionCreator, ProfilePagePropsType, profileReducer, deletePostAC } from "redux/profile-reducer";

let initialState: ProfilePagePropsType;
beforeEach(() => {
  initialState = {
    postData: [
      { id: 1, message: "Hi, how are you?", likesCount: 11 },
      { id: 2, message: "It's my first post", likesCount: 12 },
    ],
    profile: null,
    status: "",
  };
});

test("newPost should be added", () => {
  let action = addPostActionCreator("newPostTest");
  let newState = profileReducer(initialState, action);
  expect(newState.postData.length).toBe(3);
  expect(newState.postData[2].message).toBe("newPostTest");
  expect(newState.profile).toBe(null);
});
test("message of new post should be correct", () => {
  let action = addPostActionCreator("newPostTestName");
  let newState = profileReducer(initialState, action);
  expect(newState.postData[2].message).toBe("newPostTestName");
});
test("current post should be deleted", () => {
  let id = 1;
  let action = deletePostAC(id);
  let newState = profileReducer(initialState, action);
  expect(newState.postData.length).toBe(1);
  expect(newState.postData[0].id).toBe(2);
  expect(newState.postData[0].message).toBe("It's my first post");
});
test("after deleting length should be correct, if id is incorrect", () => {
  let id = 1001;
  let action = deletePostAC(id);
  let newState = profileReducer(initialState, action);
  expect(newState.postData.length).toBe(2);
});
