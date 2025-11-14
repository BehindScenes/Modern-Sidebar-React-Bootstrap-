import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropdownItems({ items, isOpen, isSidebarOpen }) {
  if (!isOpen) return null;

  return (
    <>
      <div className={isSidebarOpen ? "ms-4" : "ms-0"}>
        {items.map((item, i) => (
          <button
            key={i}
            className="sidebar-button btn text-light text-start w-100 fw-medium d-flex align-items-center gap-3 py-3 rounded-0 border-0"
          >
            <FontAwesomeIcon icon={item.icon} size="lg" />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <hr className="p-0 m-0" />
    </>
  );
}
