export const Buses = [
    {
      id: 1,
      name: "Express",
      source: "United States",
      destination: "Germany",
      departureTime: "06:00 AM",
      arrivalTime: "12:30 PM",
      price: "₹600",
      availableDates: ["2024-10-15", "2024-10-16", "2024-10-17", "2024-10-18"],
      busType: "Sleeper",
      numberOfSeats: 36,
      seatLayout: {
        lower: {
          first: [
            [1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12],
          ],
          second: [13, 14, 15, 16, 17, 18],
        },
        upper: {
          first: [
            [19, 20, 21, 22, 23, 24],
            [25, 26, 27, 28, 29, 30],
          ],
          second: [31, 32, 33, 34, 35, 36],
        },
      },
      availableSeats: ["U19", "U24", "U30", "L4", "L16", "L6"],
    },
    {
      id: 2,
      name: "Berlin Liner",
      source: "Germany",
      destination: "France",
      departureTime: "07:30 AM",
      arrivalTime: "02:00 PM",
      price: "₹550",
      availableDates: ["2024-10-15", "2024-10-16", "2024-10-17", "2024-10-18"],
      busType: "Seater",
      numberOfSeats: 60,
      seatLayout: {
        first: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        ],
        second: [
          [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
          [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        ],
      },
      availableSeats: [
        "1",
        "2",
        "3",
        "5",
        "7",
        "13",
        "15",
        "30",
        "35",
        "60",
        "59",
      ],
    },
    {
      id: 3,
      name: "Euro Express",
      source: "France",
      destination: "United Kingdom",
      departureTime: "09:15 AM",
      arrivalTime: "03:45 PM",
      price: "₹700",
      availableDates: ["2024-10-15", "2024-10-16", "2024-10-17", "2024-10-18"],
      busType: "Sleeper",
      numberOfSeats: 36,
      seatLayout: {
        lower: {
          first: [
            [1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12],
          ],
          second: [13, 14, 15, 16, 17, 18],
        },
        upper: {
          first: [
            [19, 20, 21, 22, 23, 24],
            [25, 26, 27, 28, 29, 30],
          ],
          second: [31, 32, 33, 34, 35, 36],
        },
      },
      availableSeats: ["U19", "U24", "U30", "L4", "L16", "L6"],
    },
    {
      id: 4,
      name: "Pacific Route",
      source: "United States",
      destination: "Canada",
      departureTime: "11:00 AM",
      arrivalTime: "05:30 PM",
      price: "₹650",
      availableDates: ["2024-10-15", "2024-10-16", "2024-10-17", "2024-10-18"],
      busType: "Seater",
      numberOfSeats: 48,
      seatLayout: {
        first: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        ],
        second: [
          [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
          [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
        ],
      },
      availableSeats: ["2", "5", "6", "1", "3", "7", "4"],
    },
    {
      id: 5,
      name: "Asia Connect",
      source: "India",
      destination: "Japan",
      departureTime: "08:45 AM",
      arrivalTime: "03:15 PM",
      price: "₹580",
      availableDates: ["2024-10-15", "2024-10-16", "2024-10-17", "2024-10-18"],
      busType: "Sleeper",
      numberOfSeats: 36,
      seatLayout: {
        lower: {
          first: [
            [1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12],
          ],
          second: [13, 14, 15, 16, 17, 18],
        },
        upper: {
          first: [
            [19, 20, 21, 22, 23, 24],
            [25, 26, 27, 28, 29, 30],
          ],
          second: [31, 32, 33, 34, 35, 36],
        },
      },
      availableSeats: ["U19", "U24", "U30", "L4", "L16", "L6"],
    },
  ];
  export const locations = [
    "United States",
    "Germany",
    "France",
    "United Kingdom",
    "Canada",
  ];