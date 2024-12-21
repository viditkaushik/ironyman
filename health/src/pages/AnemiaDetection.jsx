import React from 'react';
import './AnemiaDetection.css'; // Import the CSS for the AnemiaDetection component

function AnemiaDetection() {
  return (
    <div className="anemia-detection-container">
      <div className="layout-container">
        <div className="main-content">
          <div className="layout-content-container">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="title">Anemia detection report</p>
            </div>
            <h2 className="section-title">AI result</h2>
            <div className="grid-section">
              <Step icon="Camera" description="You submitted a photo of your palm and eye" />
              <Step icon="MagnifyingGlass" description="AI detected the hemoglobin level in your blood" />
              <Step icon="OrangeSlice" description="AI provided you with a diet plan to improve your health" />
            </div>
            <h2 className="section-title">Hemoglobin level trend</h2>
            <div className="trend-section">
              <Trend />
            </div>
            <h2 className="section-title">Your diet plan</h2>
            <p className="diet-description">
              The diet plan is based on the prediction of your hemoglobin level. If you want to improve it, please follow the diet plan and get your hemoglobin level tested regularly.
            </p>
            <div className="diet-plan">
              <DietPlan image="https://cdn.usegalileo.ai/sdxl10/12750659-a835-4cae-a38c-3076c07ece97.png" />
              <DietPlan image="https://cdn.usegalileo.ai/sdxl10/509db217-644a-406c-8bcc-80aacf8982ee.png" />
              <DietPlan image="https://cdn.usegalileo.ai/sdxl10/7e1b07a0-d1df-4851-9e55-f07f41edc1da.png" />
            </div>
            <h2 className="section-title">Medicine alternatives</h2>
            <MedicineAlternative name="Qingming Capsules" type="Generic medicine" price="$25.00" />
            <MedicineAlternative name="Qingming Capsules" type="Generic medicine" price="$25.00" />
            <MedicineAlternative name="Qingming Capsules" type="Generic medicine" price="$25.00" />
            <h2 className="section-title">Nearest generic medicine store</h2>
            <Store name="Generic Medicine Store" address="Store address" />
          </div>
          <div className="layout-content-container">
            <SummarySection />
            <HelpSection />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ icon, description }) {
  return (
    <div className="step">
      <div className="icon">
        <Icon name={icon} />
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}

function Trend() {
  return (
    <div className="trend">
      <p className="trend-description">Your hemoglobin level over time</p>
      <div className="trend-graph">
        <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
            fill="url(#paint0_linear_1131_5935)"
          ></path>
          <path
            d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
            stroke="#ABABAB"
            stroke-width="3"
            stroke-linecap="round"
          ></path>
          <defs>
            <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
              <stop stop-color="#292929"></stop>
              <stop offset="1" stop-color="#292929" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="trend-dates">
        <p>Nov 2021</p>
        <p>Dec 2021</p>
        <p>Jan 2022</p>
        <p>Feb 2022</p>
        <p>Mar 2022</p>
        <p>Apr 2022</p>
        <p>May 2022</p>
      </div>
    </div>
  );
}

function DietPlan({ image }) {
  return (
    <div className="diet-plan-item">
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  );
}

function MedicineAlternative({ name, type, price }) {
  return (
    <div className="medicine-alternative">
      <div className="icon">
        <Icon name="Pill" />
      </div>
      <div className="info">
        <p className="name">{name}</p>
        <p className="type">{type}</p>
      </div>
      <div className="price">
        <p>{price}</p>
      </div>
    </div>
  );
}

function Store({ name, address }) {
  return (
    <div className="store">
      <div className="icon">
        <Icon name="MapPin" />
      </div>
      <div className="info">
        <p className="name">{name}</p>
        <p className="address">{address}</p>
      </div>
      <div className="directions">
        <button>Get directions</button>
      </div>
    </div>
  );
}

function SummarySection() {
  return (
    <div className="summary-section">
      <SummaryItem
        title="Hemoglobin level"
        value="12.3 g/dL"
        description="Normal: 12.0-16.0 g/dL"
        image="https://cdn.usegalileo.ai/sdxl10/8e64f0bf-5c83-4666-bfe4-bf890a77e8d2.png"
      />
      <SummaryItem
        title="Diet plan"
        value="Eat more iron-rich foods"
        description="Spinach, lentils, tofu, pumpkin seeds, quinoa, turkey, beef, chicken, fish, oysters"
        image="https://cdn.usegalileo.ai/sdxl10/2deb028a-a813-435b-9ee5-a6c6f0e90241.png"
      />
      <SummaryButton text="Download report" />
      <SummaryButton text="Start chat" icon="ChatCircleDots" />
    </div>
  );
}

function SummaryItem({ title, value, description, image }) {
  return (
    <div className="summary-item">
      <div className="info">
        <p className="title">{title}</p>
        <p className="value">{value}</p>
        <p className="description">{description}</p>
      </div>
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  );
}

function SummaryButton({ text, icon }) {
  return (
    <div className="summary-button">
      <button>
        {icon && <Icon name={icon} />}
        <span>{text}</span>
      </button>
    </div>
  );
}

function HelpSection() {
  return (
    <div className="help-section">
      <h3>Need help?</h3>
      <HelpItem title="Support hours" description="Mon-Fri, 9am-5pm (PST)" status="Open" icon="Clock" />
      <HelpItem title="Email" description="support@healthai.com" status="support@healthai.com" icon="EnvelopeOpen" />
      <HelpItem title="Phone" description="1-800-234-5678" status="1-800-234-5678" icon="Phone" />
    </div>
  );
}

function HelpItem({ title, description, status, icon }) {
  return (
    <div className="help-item">
      <div className="icon">
        <Icon name={icon} />
      </div>
      <div className="info">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
      <div className="status">
        <p>{status}</p>
      </div>
    </div>
  );
}

function Icon({ name }) {
  switch (name) {
    case 'Camera':
      return <CameraIcon />;
    case 'MagnifyingGlass':
      return <MagnifyingGlassIcon />;
    case 'OrangeSlice':
      return <OrangeSliceIcon />;
    case 'Pill':
      return <PillIcon />;
    case 'MapPin':
      return <MapPinIcon />;
    case 'ChatCircleDots':
      return <ChatCircleDotsIcon />;
    case 'Clock':
      return <ClockIcon />;
    case 'EnvelopeOpen':
      return <EnvelopeOpenIcon />;
    case 'Phone':
      return <PhoneIcon />;
    default:
      return null;
  }
}

// Define all these icons as separate functional components
// For example:
function CameraIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path
        d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"
      ></path>
    </svg>
  );
}

// Similarly, define other icons like MagnifyingGlassIcon, OrangeSliceIcon, PillIcon, MapPinIcon, ChatCircleDotsIcon, ClockIcon, EnvelopeOpenIcon, PhoneIcon

export default AnemiaDetection;