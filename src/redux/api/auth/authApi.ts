import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
      }),
    }),
    signUp: builder.mutation({
      query: (signUpData) => ({
        url: "/auth/signup",
        method: "POST",
        body: signUpData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
