import "../styles/global.css";

export const metadata = {
  title: "Alex Axel Mucyo",
  description:
    "Explore the portfolio of Alex Axel Mucyo, an accomplished Full Stack TypeScript Developer with experience in Next.js, React.js, Node.js, and more. Discover his projects, professional experience, and skills.",
  keywords:
    "Alex Axel Mucyo, Full Stack TypeScript Developer, Full Stack Software Developer, Software Engineer, Frontend Developer, Backend Developer, Next.js, React.js, Node.js, React Native, Tailwind CSS, Redux Toolkit, React Hooks, Express, Sequelize, Auth.js, Prisma, GraphQL, RESTful API, API development, Hasura, Codegen, PostgreSQL, MongoDB, SQL, Database Design, Git, Agile, Scrum, Jira, Trello, Pivotal Tracker, Figma, Webflow, Jest, Mocha, Cypress, Travis CI, GitHub Actions, CircleCI, Performance Optimization, Leadership, Teamwork, Problem-solving, Time management, Adaptability, Critical thinking, Creativity, Emotional intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
