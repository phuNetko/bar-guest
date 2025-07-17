
import "./globals.css";
import I18nProviderWrapper from "@/components/i18nWrapper";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gray-100`}
      >
        <I18nProviderWrapper>
          {children}
        </I18nProviderWrapper>
      </body>
    </html>
  );
}
