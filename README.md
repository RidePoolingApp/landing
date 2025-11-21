# WayLink 🚖

**Travel. Connect. Ride Smarter.**

WayLink is a modern, high-performance landing page for a next-generation driver-centric platform designed for intercity rides, rentals, and carpooling. Unlike traditional ride-hailing apps, WayLink is engineered to work seamlessly with **Zero GPS Dependency** using zone-based algorithms.

![WayLink Preview](https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80)

## 🚀 Features

WayLink offers a suite of travel solutions designed for reliability and transparency:

- **Intercity Rides:** Direct station-to-station travel without negotiation.
- **Daily Cab Subscriptions:** Fixed-rate daily commutes for work or college.
- **Shared Long Trips:** Cost-splitting options for long-distance travel (save up to 50%).
- **Tourist Vehicle Rentals:** Flexible rentals for scenic routes with local drivers.
- **Driver Job Board:** A transparent marketplace where drivers choose their trips.
- **Zero GPS Dependency:** Proprietary zone-based algorithm for dead zones and tunnels.
- **100% Fare Transparency:** Honest pricing for riders, full shares for drivers.

## 🛠️ Tech Stack

This project is built with a modern frontend stack focusing on performance and aesthetics:

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** Plus Jakarta Sans

## 🎨 Design System

The application features a **Premium Dark Mode** aesthetic:

- **Background:** Deep Zinc/Black (`#050505`)
- **Primary Brand:** Vibrant Orange (`#f97316`)
- **Accents:** Amber & Red
- **UI Style:** Glassmorphism, Bento Grids, and Neon Glows.

## 📦 Installation & Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

## 📂 Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components (FadeIn, etc.)
│   │   ├── Hero.tsx      # Main landing section
│   │   ├── Features.tsx  # Bento grid of services
│   │   ├── HowItWorks.tsx# Step-by-step timeline
│   │   ├── WhyWayLink.tsx# USP section
│   │   └── ...
│   ├── App.tsx           # Main Layout
│   └── index.css         # Tailwind directives
├── index.html            # Entry point with font/meta setup
└── package.json          # Dependencies
```

---

© WayLink Technologies. All rights reserved.
