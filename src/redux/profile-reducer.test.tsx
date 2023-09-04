import {addPostActionCreator, ProfilePagePropsType, profileReducer} from "redux/profile-reducer";

let initialState: ProfilePagePropsType;
beforeEach(() => {
    initialState = {
        postData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 11},
            {id: 2, message: 'It\'s my first post', likesCount: 12},
        ],
        profile: null,
        status: ''
    }
})

test('newPost should be added', () => {

    let action = addPostActionCreator('newPostTest');
    let newState = profileReducer(initialState, action);
    expect(newState.postData.length).toBe(3)
    expect(newState.profile).toBe(null)

})