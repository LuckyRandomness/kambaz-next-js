import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${HTTP_SERVER}/api/courses/${ courseId }/assignments`);
  return response.data;
};
export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  const response = await axios.post(
    `${HTTP_SERVER}/api/courses/${ courseId }/assignments`, 
    assignment);
  return response.data;
};
export const deleteAssignment = async (courseId: string, assignmentId: string) => {
    const response = await axios.delete(
        `${HTTP_SERVER}/api/courses/${ courseId }/assignments/${assignmentId}`
    );
    return response.data;
};
export const updateAssignment = async (courseId: string, assignment: any) => {
  const { data } = await axios.put(`${HTTP_SERVER}/api/courses/${ courseId }/assignments/${assignment._id}`, 
    assignment);
  return data;
};
