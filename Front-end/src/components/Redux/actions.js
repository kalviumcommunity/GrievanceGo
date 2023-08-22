import { GET_DETAILS, UPDATE_CHATS } from './action.type'

const Registration = data => {
    const dataobj = {
        name: data.name,
        wardno: data.wardno,
        phoneno: data.phoneno,
        arealimit: data.arealimit,
        subject: data.subject,
        department: data.department,
        address: data.address,
        description: data.description,
    }
    return async dispatch => {
        try {
            let url = await fetch('http://localhost:3000/api/addinfo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataobj),
            })
            let res = await url.json()
            console.log(res)

            dispatch({
                type: UPDATE_CHATS,
                payload: res,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

let getinfo = () => {
    return async dispatch => {
        try {
            let url = await fetch('http://localhost:3000/api/info', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            let inf = await url.json()
            console.log('action data received', inf)

            dispatch({
                type: GET_DETAILS,
                payload: inf,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

const addingchat = data => {
    const dataobj = {
        chat: data.chat,
        id: data._id,
    }
    return async dispatch => {
        try {
            let url = await fetch('http://localhost:3000/api/addchat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataobj),
            })

            let res = await url.json()

            console.log(res)

            dispatch({
                type: UPDATE_CHATS,
                payload: res,
            })

            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
}

export { Registration, getinfo, addingchat }
