import { createSlice } from "@reduxjs/toolkit";

export const devsSlice = createSlice({
  name: "devs",
  initialState: {
    all: [
      {
        _index: "services",
        _type: "_doc",
        _id: "330000932-6343",
        _score: null,
        _source: {
          cust_id: 330000932,
          avatar: "https://d17meyd56oy0jr.cloudfront.net/seller-logo/330000932",
          url_name: "blessiknow",
          summary: null,
          profile_id: 6343,
          profile_status: "free",
          currency_id: 1,
          currency_name: "NGN",
          search_weight: 1.3285714285714285,
          search_premium_subscription: 0,
          public_status: true,
          vacation_mode: false,
          display_name: "BlessIknow",
          starting_from: "15000.00",
          category: "Technology and Programming",
          category_description:
            "Software app development, hardware, cloud computing, and technology related work",
          service: "Computer Software Development",
          service_unanalyzed: "Computer Software Development",
          service_description:
            "Design and develop Microsoft Windows, Linux, Unix, MAC OS based apps.",
          service_expression:
            "Find a developer to create the desktop app you want!",
          service_photo:
            "https://dl6lnggp44pnu.cloudfront.net/service-multimedia/330000932-photo-6343-mini",
          reg_type: "Individual",
          status_tag: null,
          work_completed: 1,
          work_successfully_completed: 1,
          work_unsuccessfully_completed: 0,
          slug: "6343-build-a-beautiful-and-responsive-website-using-wordpress",
          services_overview_title:
            "I will build a beautiful and responsive website using WordPress.",
          services_overview_body:
            "<p><br></p><p>&nbsp;The website skills I offer include:-</p><p><br></p><p>- WordPress theme installation</p><p>- Theme Customization</p><p>- WordPress full Website creation and customization</p><p>- Easy to manage, Supper friendly builder lets you edit the website.</p><p><br></p><p>- Modern Looking website</p><p>- E-commerce &amp; Payment Gateway</p><p>- SEO - Optimized Pages for Search Engines</p><p>- Upload Product</p><p>- Help to choose domain/hosting</p><p><br></p><p>OTHER SERVICES</p><p><br></p><p>Woo-Commerce Customization</p><p>popup form/contact form/subscribe form with add mail-chimp</p><p>Contact page with Google Map</p><p>Give 100% responsive layout All devices supported</p><p>Social media integration</p><p>Contact, about us and legal pages.</p>",
          skills: [
            "web design",
            "E-commerce web design",
            "WordPress",
            "responsive web design",
            "SEO",
          ],
          location: {
            country: "Nigeria",
            city: "Lekki",
            area_of_city: null,
          },
          qualifications: [],
          service_packages: [
            {
              description: "Buy and host your domain name.",
            },
            {
              unit_price: "15000.00",
            },
            {
              local_unit_price: "15000.00",
            },
            {
              expr_delivery_charge: "15000.00",
            },
            {
              delivery_time_in_hours: 1,
            },
            {
              expr_delivery_time_in_hours: 1,
            },
            {
              description: "Build a responsive website for you.",
            },
            {
              unit_price: "75000.00",
            },
            {
              local_unit_price: "75000.00",
            },
            {
              expr_delivery_charge: "75000.00",
            },
            {
              delivery_time_in_hours: 1,
            },
            {
              expr_delivery_time_in_hours: 1,
            },
            {
              description: "Build an E-commerce website for you.",
            },
            {
              unit_price: "120000.00",
            },
            {
              local_unit_price: "120000.00",
            },
            {
              expr_delivery_charge: "120000.00",
            },
            {
              delivery_time_in_hours: 1,
            },
            {
              expr_delivery_time_in_hours: 1,
            },
          ],
          not_interested_in: null,
          cancel_work: false,
          quote_validity_period: 30,
          available_delivery_mode: ["Online"],
          delivery_locations: [],
          payment_terms_accepted: null,
          joined_since: 1561294758,
          review_score: "5.00",
          level_score: "5.00",
          level_tag: "L1",
          no_of_reviews: 1,
          notice_period_in_hours: 24,
          languages: ["English "],
          community: "",
        },
        sort: [1.3285714],
      },
    ],
    favorites: [],
    symbol: "₦",
    rate: 1,
  },
  reducers: {
    loadDevs: (state, action) => {
      state.all = action.payload;
    },
    addToFavorites: (state, action) => {
      const { cust_id } = action.payload;
      const isExist = state.favorites.findIndex((el) => el.cust_id === cust_id);
      if (isExist !== -1) return;
      state.favorites = [...state.favorites, action.payload];
    },
    setRate: (state, action) => {
      console.log(action.payload);
      state.rate = action.payload;
    },
    setSymbol: (state, action) => {
      state.symbol = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadDevs, addToFavorites, setRate, setSymbol } =
  devsSlice.actions;

export default devsSlice.reducer;
