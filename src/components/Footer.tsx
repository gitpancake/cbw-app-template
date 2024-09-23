"use client";

import ArrowSvg from "src/svg/ArrowSvg";

const docLinks: { title: string; href: string }[] = [];

export default function Footer() {
  return (
    <section className="mt-auto mb-2 flex w-full flex-col justify-between gap-2 md:mt-8 md:mb-6 md:flex-row">
      <aside className="flex items-center pt-2 md:pt-0"></aside>
      <ul className="mt-4 flex max-w-full flex-col flex-wrap justify-center gap-3 md:mt-0 md:flex-row md:justify-start md:gap-6">
        {docLinks.map(({ href, title }) => (
          <li className="flex" key={href}>
            <a href={href} target="_blank" rel="noreferrer" title={title} className="flex items-center gap-1">
              <p>{title}</p>
              <ArrowSvg />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
