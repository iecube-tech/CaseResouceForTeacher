import httpInstance from "@/utils/http";
export function CollageTeachers() {
    return httpInstance({
        url: '/teacher/collage_teachers/',
        method: 'GET',
    })
}