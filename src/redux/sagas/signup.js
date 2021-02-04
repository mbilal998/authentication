import { call, put, takeEvery, select, take } from 'redux-saga/effects';
import { auth } from '../../firebase';
import { db } from '../../firebase';

async function savedata(data) {
    const response = await auth.createUserWithEmailAndPassword(data.email, data.password);
    if (response.user.uid) {
        try {
            await db.collection("users").doc(response.user.uid).set({
                firstname: data.firstname,
                lastname: data.lastname,
                company: data.company,
                designation: data.designation,
                address: data.address,
            });
            return data;
        } catch (e) {
            return e.message;
        }
    }
}

function* signup(action) {
    try {
        const saveData = yield call(savedata(action.payload));
        yield put({ type: 'SIGNUP_SUCCESS', signup_value: saveData });
    } catch (e) {
        yield put({ type: 'SIGNUP_FAILED', message_value: e.message });
    }
}

function* signupSaga() {
    yield takeEvery('SIGNUP_USER', signup)
}

export default signupSaga;
