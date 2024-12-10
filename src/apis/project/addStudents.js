import httpInstance from "@/utils/http.ts";

export function ProjectAddStudent(projectId, students) {
    return httpInstance({
        url: '/project/add_student/' + projectId,
        method: 'Post',
        data: students
    })
}