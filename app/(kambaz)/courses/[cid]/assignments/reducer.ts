import { assignments } from "@/app/(kambaz)/database"
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    assignments: [],
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: ( state, { payload: assignment }) => {
            const newAssignment: any = { ...assignment, _id: uuidv4()};
            state.assignments = [ ...assignments, newAssignment ] as any;
        },
        deleteAssignment: ( state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },
        updateAssignment: ( state, { payload: asgn }) => {
            state.assignments = state.assignments.map(
                (a: any) => asgn._id === a._id ? asgn : a
            ) as any;
        },
        editAssignment: ( state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map(
                (a: any) => assignmentId === a._id ? { ...a, editing: true } : a
            ) as any;
        },
    },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments } = 
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;