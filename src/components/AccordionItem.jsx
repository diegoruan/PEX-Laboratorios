export default function AccordionItem({ id, title, content }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
