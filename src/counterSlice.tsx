import { create } from 'zustand';
import {devtools, persist} from 'zustand/middleware'

interface Course {
    id: string;
    completed: boolean;
    [key: string]: any;
}

interface CourseStore {
    courses: Course[];
    count: number;
    addCourse: (course: Course) => void;
    removeCourse: (courseId: string) => void;
    toggleCourseStatus: (courseId: string) => void;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const courseStore = (set: (fn: (state: CourseStore) => Partial<CourseStore>) => void): CourseStore => ({
    courses: [],
    count: 0,
    addCourse: (course: Course) => {
        set((state) => ({
            courses: [course, ...state.courses],
        }))
    },
    removeCourse: (courseId: string) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId: string) => {
        set((state) => ({
            courses: state.courses.map((course) =>
                course.id === courseId ? { ...course, completed: !course.completed } : course
            )
        }))
    },
    increment: () => {
        set((state) => ({
            count: state.count + 1
        }))
    },
    decrement: () => {
        set((state) => {
            if (state.count > 0) {
                return {
                    count: state.count - 1
                }
            }
            return state;
        })
    },
    reset: () => {
        set((state) => ({
            count: 0
        }))
    }
});

const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "courses",
        })
    )
)


export default useCourseStore;