import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { Social } from './social';
import { Vendor } from './vendor';

export const RouterHead = component$(() => {
  const { href } = useLocation();
  const head = useDocumentHead();
  const title = head.title ? `${head.title} - Qwik` : `Qwik - 重新構想最新潮的框架!`;
  const description =
    head.meta.find((m) => m.name === 'description')?.content ||
    `去除水合化、自動緩載入、邊緣優化、樂趣無窮 🎉!`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={href} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="apple-mobile-web-app-title" content="Qwik" />
      <meta name="application-name" content="Qwik" />
      <meta name="apple-mobile-web-app-title" content="Qwik" />
      <meta name="theme-color" content="#006ce9" />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />

      {import.meta.env.PROD && (
        <>
          <Social title={title} description={description} href={href} />
          <Vendor />
        </>
      )}

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
