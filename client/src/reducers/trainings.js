import { GET_TRAININGS, DELETE_TRAINING, GET_TRAINING_BY_ID, ADD_PARTICIPANT } from "../actions/types";

const initialState = {
    trainings: [],
    training: null,
    loading: true,
    loadingParticipants: true,
    error: {}
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    console.log('state', state);
    console.log('action', action);
    switch (type) {
        case GET_TRAININGS:
            return {
                ...state,
                trainings: payload,
                loading: false
            };
        case DELETE_TRAINING:
            return {
                ...state,
                trainings: state.trainings.filter(training => training._id !== payload),
                loading: false,
            };
        case GET_TRAINING_BY_ID:
            return {
                ...state,
                training: payload,
                loadingParticipants: false,
            };
        case ADD_PARTICIPANT:
            return {
                ...state,
                trainings: state.trainings.map(training => training._id === payload.id ? { ...training, participants: payload.participant } : training),
                loading: false,
            };
        default:
            return state;
    }
}