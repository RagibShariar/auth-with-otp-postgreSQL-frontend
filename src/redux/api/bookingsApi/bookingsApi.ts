import { baseApi } from "../baseApi";

const bookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["bookings"],
    }),
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/bookings",
        method: "POST",
        body: bookingData
      }),
      invalidatesTags: ["checkAvailability", "bookings"],
    })
  }),
});

export const { useGetAllBookingsQuery, useCreateBookingMutation } = bookingsApi;
