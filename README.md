# Training Website

This is a training website built with Next.js, React, and TypeScript that fetches data from Contentful. The application is designed to provide users with information about various courses, styled with branding colors from the London Foot and Ankle Surgery website.

## Project Structure

```
lfas-training-next
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── courses
│   │       └── [slug]
│   │           └── page.tsx
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CourseCard.tsx
│   │   └── CourseList.tsx
│   ├── lib
│   │   └── contentful.ts
│   ├── hooks
│   │   └── useContentful.ts
│   ├── styles
│   │   ├── globals.css
│   │   └── variables.css
│   ├── types
│   │   └── contentful.ts
│   └── utils
│       └── format.ts
├── public
│   └── robots.txt
├── .env.example
├── next.config.js
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Getting Started

To get started with the training website, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd lfas-training-next
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   Copy the `.env.example` file to `.env` and fill in your Contentful API keys.

4. **Run the application:**
   ```
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- Fetches course data from Contentful.
- Responsive design with a modern UI.
- Easy navigation between the homepage and course details.
- Styled with branding colors from the London Foot and Ankle Surgery website.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.# LFAS-Training-Website
