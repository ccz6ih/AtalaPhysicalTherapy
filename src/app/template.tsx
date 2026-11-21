import { ViewTransition } from "react";

/**
 * Templates remount on every navigation, so the page content gets an enter/exit
 * view transition: the old page settles back while the new one rises in behind
 * a mountain-ridge edge (see globals.css).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="climb-in" exit="climb-out" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
