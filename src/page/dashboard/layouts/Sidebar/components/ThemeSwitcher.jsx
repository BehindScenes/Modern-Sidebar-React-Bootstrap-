import { useEffect, useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  const handleTheme = () => {
    setDark((prev) => {
      document.documentElement.setAttribute(
        "data-bs-theme",
        !prev ? "dark" : "light"
      );
      localStorage.setItem("theme", !prev ? "dark" : "light");
      return !prev;
    });
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute("data-bs-theme", theme);
  }, []);

  return (
    <button
      className={`sidebar-button btn text-${
        dark ? "warning" : "secondary"
      } text-start w-100 d-flex align-items-center gap-2 rounded-0 border-0`}
      onClick={handleTheme}
    >
      <FontAwesomeIcon icon={dark ? faSun : faMoon} size="sm" />
      <span className="text-light">{dark ? "Light" : "Dark"} Mode</span>
    </button>
  );
}
