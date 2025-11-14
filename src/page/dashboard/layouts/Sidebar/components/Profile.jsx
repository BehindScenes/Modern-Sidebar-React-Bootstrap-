import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileDropdown from "./ProfileDropdown";

export default function Profile() {
  return (
    <div className="dropend w-100">
      <button
        className="sidebar-button btn w-100 d-flex align-items-center gap-3 px-3 py-3 
                   text-start text-light border-0 rounded-0 dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-tooltip-content="Profile"
        data-tooltip-id="sidebar-tooltip"
      >
        <FontAwesomeIcon icon={faUser} size="lg" />
        <span className="fw-medium">Profile</span>
      </button>

      <ProfileDropdown />
    </div>
  );
}
