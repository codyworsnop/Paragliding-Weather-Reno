import React, { useEffect } from 'react'
import { getIdTokenResult } from '@firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase'
import { setUser, setUserClaims } from '../_actions/authActions'

const Authentication = () => {
    const dispatch = useDispatch()
    const [user, loading, error] = useAuthState(auth) //[user, loading, error]
    useEffect(() => {
        if (user && !loading) {
            dispatch(setUser(user))
            dispatch(setUserClaims(user))
        }
    }, [user, loading, error])

    return (
        <></>
    )
}

export default Authentication