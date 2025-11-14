import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitcher from "./ThemeSwitcher";

export default function ProfileDropdown() {
  return (
    <ul className="dropdown-menu dropdown-menu-dark w-100 shadow-sm border-0">
      <li className="px-2">
        <ThemeSwitcher />
      </li>

      <li>
        <button
          className="btn text-danger w-100 d-flex align-items-center gap-3 px-3 py-2
                     rounded-0 border-0"
        >
          <FontAwesomeIcon icon={faDoorClosed} size="sm" />
          <span>Logout</span>
        </button>
      </li>
    </ul>
  );
}
