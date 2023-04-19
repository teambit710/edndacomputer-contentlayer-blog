import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <nav className="container mx-auto flex justify-around bg-white py-8">
      <div className="flex space-x-4">
        {links.map(({ path, label }) => (
          <Link key={path} href={path} passHref>
            <div
              className={`cursor-pointer text-sm font-medium hover:text-primary-light ${
                router.pathname === path
                  ? "border-b-2 border-primary"
                  : "text-gray-700"
              }`}
            >
              {label}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
