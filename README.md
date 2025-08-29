
# GemApps

A modern, responsive React app for pet nutrition, built with Vite and Tailwind CSS.

## Features
- Fully responsive layout (mobile-first)
- Custom components: FeatureCard, Stat, Button, Badge
- Local image assets for icons and payment methods
- Global font: Inter Tight (Google Fonts)
- Clean, professional UI with custom color palette

## Getting Started

### Prerequisites
- Node.js (v20.19.4 or newer recommended)
- you can use nvm to manage node
- npm or yarn

### Installation
1. Clone the repository:
	```sh
	git clone <your-repo-url>
	cd gemapps
	```
2. Install dependencies:
	```sh
	npm install
	# or
	yarn install
	```
3. Start the development server:
	```sh
	npm run dev
	# or
	yarn dev
	```
4. Open [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure
```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Homepage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Customization
- Edit `src/components/Homepage.jsx` to update the homepage layout and content.
- Add or replace images in `src/assets/`.
- Adjust global styles in `src/index.css`.

## License
MIT
