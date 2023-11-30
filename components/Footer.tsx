import Link from "next/link"

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 gap-x-3 border-t border-black-400 px-20 py-12 max-md:flex-col">
      <p>copyright &copy; 2023 AnimeCanvas by Yousuf | All Rights Reserved</p>
      <div className="flex gap-x-8">
        <Link href="/terms">Terms and Conditions</Link>
        <Link href="/terms">Privacy Policy</Link>

      </div>
    </footer>
  )
}

export default Footer