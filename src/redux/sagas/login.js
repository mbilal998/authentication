import { call, put, takeEvery, select, take } from 'redux-saga/effects';
import { auth } from '../../firebase';
import { db } from '../../firebase';

async function checkUser(data) {
    return await auth.createUserWithEmailAndPassword(data.email, data.password);
}

function* login(action) {
    try {
        const loginData = yield call(checkUser(action.payload));
        yield put({ type: 'LOGIN_SUCCESS', login_value: loginData });
    } catch (e) {
        yield put({ type: 'LOGIN_FAILED', message_value: e.message });
    }
}

function* loginSaga() {
    yield takeEvery('LOGIN_USER', login)
}

export default loginSaga;
