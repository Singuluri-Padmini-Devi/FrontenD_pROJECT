# Apple Watch Studio UI Clone

## Overview

This project is a pixel-perfect clone of the **Apple Watch Studio** experience, developed using **Next.js** and **TypeScript**. It replicates the seamless watch customization process available on [Apple Watch Studio](https://www.apple.com/shop/studio/apple-watch). The goal is to provide an interactive experience where users can customize their Apple Watch with real-time updates to the watch preview, price, and various configuration options.

## Features

- **Case Selection**: Interactive grid of available Apple Watch cases in different materials (e.g., Aluminum, Titanium).
- **Size Selection**: Toggle between different sizes (e.g., 41mm, 45mm) and dynamically update the watch preview and price.
- **Band Selection**: Carousel for selecting different band styles and colors.
- **Collection Switching**: Dropdown/modal to switch between different collections (e.g., Series 10, Hermès, SE).
- **Real-Time Price Updates**: The total price updates dynamically based on user selections.
- **Save and Share Functionality**: Ability to save and share the customized configuration via URL or social platforms.
- **Animations and Smooth Transitions**: Fluid animations for hover effects, size changes, and component transitions.
- **Mobile-First Responsive Design**: Ensures optimal performance and accessibility on all device sizes.
  
## Project Setup

To get started with the project, follow the steps below.

### Prerequisites

- Node.js (v16+ recommended)
- npm (v8+ recommended)

### 1. Clone the repository
git clone https://github.com/your-username/apple-watch-studio-clone.git
cd apple-watch-studio-clone
2. Install dependencies
Run the following command to install all required packages

npm install
3. Run the development server
To start the development server and preview the app:
npm run dev
This will start the app on http://localhost:3000.

4. Folder Structure
The project has the following folder structure:

/components
  /ui                # UI components for the customization workflow
    - watch-preview.tsx
    - size-selector.tsx
    - case-selector.tsx
    - band-selector.tsx
    - studio-header.tsx
    - cart-button.tsx
/lib
  - watch-images.ts   # Image management module
/public
  /watches            # Watch case images (e.g., aluminum, titanium)
  /faces              # Watch face images (e.g., Series 10, Ultra)
  /bands              # Watch band images (e.g., solo loop, sport band)
/pages
  - index.tsx         # Landing page
  - customization.tsx # Customization workflow page
/styles
  - global.css        # Global styles
  - tailwind.config.js # Tailwind CSS configuration
5. File/Directory Explanation
/components: Contains the main UI components that handle user interactions, like selecting a watch case, size, and band.
/lib: Contains utility functions for image management and other business logic.
/public: Stores all the static assets, including images for the watch cases, bands, and faces.
/pages: Defines the landing page (index.tsx) and the customization page (customization.tsx).
/styles: Contains global and component-specific styles. Tailwind CSS is used for styling.
6. Dependencies
This project uses the following key dependencies:

Next.js: For the React-based framework and server-side rendering.
TypeScript: For static typing and better code maintainability.
Framer Motion: For smooth animations and transitions.
Tailwind CSS: For utility-first styling.
shadcn/ui: For reusable, accessible UI components.
React Context API: For managing global state across components.
Adding Watch Images
To make the watch images visible, ensure the following directories and files are in place within the /public directory:

Watch Case Images: /public/watches/

Example: aluminum-midnight-41.png, aluminum-starlight-45.png
Watch Face Images: /public/faces/

Example: series-10.png, ultra-2.png, se.png
Watch Band Images: /public/bands/

Example: solo-loop-midnight.png, sport-band-midnight.png
You can replace the placeholder images with high-quality assets in these directories.

Key Considerations
Performance: Ensure the images are optimized for the web to avoid long loading times.
Accessibility: Use ARIA roles and keyboard navigation for an inclusive user experience.
Mobile Responsiveness: Test the UI on mobile and tablet to ensure it's fully responsive.
SEO: Add relevant metadata, titles, and alt text for better search engine optimization.
Contributions
Feel free to contribute to this project! If you'd like to add features, improve the codebase, or fix bugs, please open a pull request.

To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes and commit (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Apple for the inspiration behind the design.
Tailwind CSS and Framer Motion for making styling and animations easier.
Next.js for providing a solid framework for building React apps.
