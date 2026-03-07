import { assignments } from "@/app/(kambaz)/database"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: assignments
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: ( state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: assignment._id,
                title: assignment.title,
                course: assignment.course,
                from: assignment.from,
                due: assignment.due,
                until: assignment.until,
                points: assignment.points,
                description: assignment.description,
            };
            state.assignments = [ ...assignments, newAssignment ] as any;
        },
        deleteAssignment: ( state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },
        updateAssignment: ( state, { payload: assignment }) => {
            state.assignments = state.assignments.map(
                (a: any) => assignment._id === a._id ? assignment : a
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