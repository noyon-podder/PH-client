import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllSemester: builder.query({
    //   query: (args) => {
    //     console.log(args);
    //     const params = new URLSearchParams();
    //     if (args) {
    //       args.forEach((item: TQueryParams) =>
    //         params.append(item.name, item.value as string)
    //       );
    //     }

    //     return {
    //       url: "/academic-semesters",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),
    addAcademicSemester: builder.mutation({
      query: (studentData) => ({
        url: "/users/create-student",
        method: "POST",
        body: studentData,
      }),
    }),
  }),
});

export const { useAddAcademicSemesterMutation } = userManagementApi;
