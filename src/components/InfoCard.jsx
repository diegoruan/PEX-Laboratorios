import "./InfoCard.css";

export default function InfoCard({ icon, title, description, link, linkText }) {
  return (
    <div className="col-md-3 mb-4 mb-md-0 border-md-end card-custom">
      <div className="p-4">
        <div className="d-flex align-items-center mb-2">
          <i className={`fa-solid ${icon} icon-home`}></i>
          <h5 className="fw-semibold title-custom">{title}</h5>
        </div>
        <p className="small text-custom">{description}</p>
        <a href={link} className="small text-decoration-custom">
          {linkText}
        </a>
      </div>
    </div>
  );
}
