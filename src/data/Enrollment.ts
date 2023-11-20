import { Course } from "./Courses";
import { User } from "./Users";

export interface Enrollment {
    id: string;
    courseId: string;
    alumnId: string;
    user?: User;
    course?: Course;
}