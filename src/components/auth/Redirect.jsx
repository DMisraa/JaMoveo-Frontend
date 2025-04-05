export default function Redirect({ title, subTitle, href }) {
    return (
        <p className="text-gray-400 text-center text-sm mt-4">
        {title}
          <a href={href}  className="text-blue-400 hover:underline">
          {subTitle}
          </a>
        </p>
    )
}