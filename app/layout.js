export const metadata = {
  title: "Sample Next.js App",
  description: "Simple Next.js deployment"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
