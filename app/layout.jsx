import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";


export const metadata = {
  title: "PromptWiki",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
    </head>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav/>
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
