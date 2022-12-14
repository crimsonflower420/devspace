import Link from "next/link"

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "blue",
    CSS: "red",
    Python: "green",
    PHP: "purple",
    Ruby: "red",
  }

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]} text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
