import axios from "axios";
import React, { useReducer } from "react";

export const TanksContext = React.createContext()

const API = "http://localhost:8000/tanks";

const INIT_STATE = {
    tanks: [],
    edit: null,
    more: null
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_TANKS":
            return {
                ...state,
                tanks: action.payload.data,
            }
        case "GET_EDIT":
            return {
                ...state,
                edit: action.payload.data,
            }
        case "GET_MORE":
            return {
                ...state,
                more: action.payload.data,
            }

        default:
            return state
    }
}

const TanksContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function createTank(newTank) {
        await axios.post(API, newTank);
        getTanks();
    }

    async function getMore(id) {
        let res = await axios.get(`${API}/${id}`)
        dispatch({
            type: 'GET_MORE',
            payload: res
        })
    }

    async function getTanks() {
        let res = await axios.get(API);
        dispatch({
            type: "GET_TANKS",
            payload: res,
        })
    }

    async function getTanksForEdit(id) {
        let res = await axios.get(`${API}/${id}`)
        dispatch({
            type: "GET_EDIT",
            payload: res
        })
    }

    async function editTanks(id, editedTanks) {
        await axios.patch(`${API}/${id}`, editedTanks)
        getTanks()
    }

    async function deleteTanks(id) {
        await axios.delete(`${API}/${id}`)
        getTanks()
    }

    return (
        <TanksContext.Provider
            value={{
                tanks: state.tanks,
                edit: state.edit,
                more: state.more,
                getTanks,
                createTank,
                deleteTanks,
                editTanks,
                getTanksForEdit,
                getMore,
            }}>
            {children}
        </TanksContext.Provider>
    )
}

export default TanksContextProvider;