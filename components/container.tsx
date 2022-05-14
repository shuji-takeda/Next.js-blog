import { ReactChild } from 'react';

export default function Container({ children }: { children: ReactChild }) {
  return <div className="container mx-auto px-5">{children}</div>;
}
