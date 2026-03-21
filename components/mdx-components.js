import Link from "next/link";

export const mdxComponents = {
  a: (props) => <Link {...props} className="text-accent underline underline-offset-4" />,
  code: (props) => (
    <code
      {...props}
      className="rounded bg-surface/80 px-1.5 py-1 font-mono text-sm text-accent"
    />
  )
};
