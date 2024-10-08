import { TQueryParams, TResponseRedux, TStudent } from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }

        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addStudent: builder.mutation({
      query: (studentData) => ({
        url: "/users/create-student",
        method: "POST",
        body: studentData,
      }),
    }),

    singleStudent: builder.query({
      query: (studentId) => ({
        url: `/students/${studentId}`,
        method: "GET",
      }),
    }),

    getAllFaculties: builder.query({
      query: () => ({
        url: "/faculties",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddStudentMutation,
  useGetAllStudentsQuery,
  useSingleStudentQuery,
  useGetAllFacultiesQuery,
} = userManagementApi;
