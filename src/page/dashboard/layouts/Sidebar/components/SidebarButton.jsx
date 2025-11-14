import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownItems from "./DropdownItems";
import {
  faHouse,
  faChartLine,
  faProjectDiagram,
  faTasks,
  faChevronDown,
  faChevronUp,
  faDashboard,
  faPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";

export default function SidebarButton({ isOpen }) {
  const [activeButton, setActiveButton] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);

  const sidebarButtons = [
    { title: "Overview", icon: faHouse },
    { title: "Analyse", icon: faChartLine },
    {
      title: "EPAL Projects",
      icon: faProjectDiagram,
      items: [
        { title: "Projects Overview", icon: faDashboard },
        { title: "Create New Project", icon: faPlus },
      ],
    },
    {
      title: "Project Tasks",
      icon: faTasks,
      items: [
        { title: "Tasks", icon: faList },
        { title: "New Tasks", icon: faPlus },
      ],
    },
  ];

  const handleButtonClick = (button, index) => {
    setActiveButton(index);
    if (button.items) {
      setOpenDropdown(openDropdown === index ? null : index);
    } else {
      setOpenDropdown(null);
    }
  };

  return (
    <>
      {sidebarButtons.map((button, index) => {
        const isDropdownOpen = openDropdown === index;

        return (
          <div key={index}>
            <button
              className={`sidebar-button btn ${
                activeButton === index ? "btn-primary shadow-sm" : "btn-dark"
              } text-start text-light w-100 d-flex justify-content-between align-items-center py-3 border-0 rounded-0`}
              data-tooltip-content={button.title}
              data-tooltip-id="sidebar-tooltip"
              onClick={() => handleButtonClick(button, index)}
            >
              <div className="d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={button.icon} size="lg" />
                <span>{button.title}</span>
              </div>

              {/* DROPDOWN ICON */}
              {button.items && (
                <FontAwesomeIcon
                  icon={isDropdownOpen ? faChevronUp : faChevronDown}
                />
              )}
            </button>

            <hr className="p-0 m-0" />

            {/* DROPDOWN ITEMS */}
            {button.items && (
              <DropdownItems
                items={button.items}
                isOpen={isDropdownOpen}
                isSidebarOpen={isOpen}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
