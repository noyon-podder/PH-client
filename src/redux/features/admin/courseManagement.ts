import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addRegisterSemester: builder.mutation({
      query: (semesterData) => ({
        url: "semester-registrations/create-semester-registration",
        method: "POST",
        body: semesterData,
      }),
    }),
  }),
});

export const { useAddRegisterSemesterMutation } = courseManagementApi;
