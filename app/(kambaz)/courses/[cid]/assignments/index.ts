import { assignments } from "@/app/(kambaz)/database"
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    assignments: assignments
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: ( state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: uuidv4(),
                title: assignment.title,
                course: assignment.course,
                from: assignment.from,
                due: assignment.due,
                until: assignment.until,
                points: assignment.points,
                description: assignment.description,
            };
            state.assignments = [ ...assignments, newAssignment ] as any;
            console.log(state.assignments.at(-1));
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
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = 
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;