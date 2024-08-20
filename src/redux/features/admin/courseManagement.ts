import { TQueryParams, TResponseRedux, TSemester } from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all register semester
    getAllRegisterSemesters: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }

        return {
          url: "/semester-registrations",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["semester"],
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    // add semester registration
    addRegisterSemester: builder.mutation({
      query: (semesterData) => ({
        url: "semester-registrations/create-semester-registration",
        method: "POST",
        body: semesterData,
      }),
      invalidatesTags: ["semester"],
    }),
    // update semester registration
    updateRegisterSemester: builder.mutation({
      query: ({ semesterId, data }) => ({
        url: `/semester-registrations/${semesterId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["semester"],
    }),

    // get all courses
    getAllCourses: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }

        return {
          url: "/courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["course"],
      transformResponse: (response: TResponseRedux<any[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    // add/create course
    addCourse: builder.mutation({
      query: (courseData) => ({
        url: "/courses/create-course",
        method: "POST",
        body: courseData,
      }),
      invalidatesTags: ["course"],
    }),

    // add faculties
    addFaculties: builder.mutation({
      query: (args) => ({
        url: `/courses/${args.courseId}/assign-faculties`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["course"],
    }),

    // get courses faculties
    getCoursesFaculties: builder.query({
      query: (courseId) => ({
        url: `/courses/${courseId}/get-faculties`,
        method: "GET",
      }),
    }),

    //create offer Course
    createOfferCourse: builder.mutation({
      query: (offerCourseData) => ({
        url: "/offered-courses/create-offered-course",
        method: "POST",
        body: offerCourseData,
      }),
      invalidatesTags: ["course"],
    }),
  }),
});

export const {
  useAddRegisterSemesterMutation,
  useGetAllRegisterSemestersQuery,
  useUpdateRegisterSemesterMutation,
  useGetAllCoursesQuery,
  useAddCourseMutation,
  useAddFacultiesMutation,
  useGetCoursesFacultiesQuery,
  useCreateOfferCourseMutation,
} = courseManagementApi;
