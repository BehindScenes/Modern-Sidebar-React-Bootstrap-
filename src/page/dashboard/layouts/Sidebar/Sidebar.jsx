import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarButton from "./components/SidebarButton";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Profile from "./components/Profile";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`sidebar-${
        isOpen ? "opened" : "closed"
      } bg-dark text-white vh-100 d-flex flex-column justify-content-between`}
    >
      <ReactTooltip id="sidebar-tooltip" place="right" />
      <div>
        <div className="d-flex gap-2 mb-4 p-2 fw-bold">
          <button
            className="btn border-0 text-light p-0"
            data-tooltip-content={isOpen ? "Close" : "Open"}
            data-tooltip-id="sidebar-tooltip"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FontAwesomeIcon icon={isOpen ? faClose : faBars} size="lg" />
          </button>
          <span className={`fs-4 sidebar-title ${isOpen ? "" : "hide"}`}>
            EPAL Manager
          </span>
        </div>
        <div className="d-flex flex-column">
          <SidebarButton isOpen={isOpen} />
        </div>
      </div>

      <div className="card bg-dark rounded-0 border-0 border-top border-1 border-secondary">
        <div className="card-body px-0">
          <Profile />
        </div>
      </div>
    </div>
  );
}
