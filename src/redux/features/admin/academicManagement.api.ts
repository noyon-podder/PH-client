import { TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/acaemicManagement.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        params.append(args[0].name, args[0].value);
        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (semesterData) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: semesterData,
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation } =
  academicManagementApi;
