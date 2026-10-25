# Insight.IO – Robotics Dashboard

Insight.IO is a robotics monitoring dashboard built with React. It includes a 3D map, camera view, system status indicators, and basic robot controls.

This project was built as part of the ERIC Robotics assignment.



## Tech Stack

- React
- Vite
- Tailwind CSS
- Three.js
- Lucide React
- shadcn/ui

## Getting Started

### Requirements

- Node.js
- npm

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

### 2. Install dependencies

Install the project dependencies:

```bash
npm install
```

Install Lucide React for icons:

```bash
npm install lucide-react
```

Install Three.js for the 3D point cloud:

```bash
npm install three
```

### 3. Tailwind CSS setup

This project uses Tailwind CSS v4 with Vite. If it is already configured in the project, you don't need to install it again.

For a new setup:

```bash
npm install tailwindcss @tailwindcss/vite
```

Make sure your `vite.config.js` includes the Tailwind Vite plugin and your CSS imports Tailwind:

```css
@import "tailwindcss";
```

### 4. shadcn/ui setup 

If you want to use shadcn/ui components, initialize shadcn:

```bash
npx shadcn@latest init
```

Add the button and navigation menu components:

```bash
npx shadcn@latest add button navigation-menu
```

These commands are only needed if the project uses those shadcn components. They are not required for the current dashboard if you haven't used them.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

`http://localhost:5173`

## Project Structure

```text
public/
  camera.mp4
  models/
    room.pcd

src/
  components/
    Sidebar.jsx
    MapCanvas.jsx
    CameraPreview.jsx
    PointCloud.jsx
    RobotControls.jsx
    TopStatusBar.jsx
  App.jsx
  index.css
  main.jsx
```

## Local Files

The camera and 3D map use files stored in the `public` folder.

Make sure these files exist:

- `public/camera.mp4`
- `public/models/room.pcd`

## Future Improvements

- Connect the dashboard to a real robot or ROS
- Improve loading for large point clouds
- Add real-time sensor data
- Improve the mobile layout

