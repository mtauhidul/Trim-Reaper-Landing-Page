import type { Metadata } from "next";
import Script from "next/script";
import "./styles.css";

export const metadata: Metadata = {
  title:
    "Trim Reaper | Professional Tree Trimming & Brush Removal in Los Angeles | We Cut Trees, Not Corners",
  description:
    "Professional tree trimming, brush removal, and yard cleanup services in Greater Los Angeles. Family owned, honest work, killer results. Licensed & Insured. Call (213) 555-0123",
  robots: "index,follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        {children}

        {/* 
          TODO: Add your own tracking scripts below
          - Google Analytics
          - Call Tracking
          - Review Widgets
          - Video Widget
        */}

        {/* Google Analytics - REPLACE WITH YOUR OWN ID */}
        {/* 
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YOUR-ID');
          `}
        </Script>
        */}

        {/* VideoAsk Widget */}
        <Script id="videoask-config" strategy="afterInteractive">
          {`
            window.VIDEOASK_EMBED_CONFIG = {
              "kind": "widget",
              "url": "https://www.videoask.com/fk23esblj",
              "options": {
                "widgetType": "VideoThumbnailExtraLarge",
                "text": "",
                "backgroundColor": "#7D00FE",
                "position": "bottom-right",
                "dismissible": false,
                "videoPosition": "center center"
              }
            }
          `}
        </Script>
        <Script
          src="https://www.videoask.com/embed/embed.js"
          strategy="afterInteractive"
        />

        {/* Bootstrap JS */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
