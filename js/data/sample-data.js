// In-memory sample data. No server needed: every screen reads from these lists.

// Services shown as cards. Each item: [emoji icon, title, short description]
const servicesList = [
  ["🏠", "Residential Construction", "Custom homes, duplexes and apartment blocks built to your plan."],
  ["🏢", "Commercial Buildings", "Offices, showrooms and shopping spaces delivered on schedule."],
  ["🏭", "Industrial Sheds", "PEB structures, warehouses and factory floors with strong foundations."],
  ["🛠️", "Renovation & Repair", "Structural repair, waterproofing and complete home makeovers."],
  ["📐", "Design & Planning", "Architectural drawings, 3D views and approvals handled for you."],
  ["🧱", "Interior & Finishing", "Flooring, false ceilings, painting and modular fittings."],
];

// Projects shown in the filterable grid. Each item: [name, category, location, size/year, description]
const projectsList = [
  ["Sunrise Residency", "Residential", "Salt Lake, Kolkata", "G+4 · 18 flats · 2023", "Eighteen-flat apartment block with covered parking, lift and rooftop garden."],
  ["Hira Heights", "Residential", "Behala, Kolkata", "G+3 · 2022", "Premium family duplex cluster with vastu-friendly layouts."],
  ["Metro Business Hub", "Commercial", "Park Street, Kolkata", "12,000 sq ft · 2023", "Office complex with glass façade and efficient central cooling."],
  ["City Square Mall Wing", "Commercial", "Howrah", "22,000 sq ft · 2021", "Retail wing with food court, delivered two weeks ahead of schedule."],
  ["Eastern Logistics Park", "Industrial", "Dankuni", "60,000 sq ft · 2022", "PEB warehouse with heavy-duty flooring and loading docks."],
  ["Green Valley Factory", "Industrial", "Kharagpur", "35,000 sq ft · 2024", "Manufacturing shed with power-ready foundations and drainage."],
];

// Category chips above the projects grid ("All" shows everything).
const projectCategories = ["All", "Residential", "Commercial", "Industrial"];

// The 4 work-process steps. Each item: [step title, step description]
const processSteps = [
  ["Consult", "Free site visit and requirement discussion."],
  ["Plan & Quote", "Drawings, material list and a fixed, transparent quote."],
  ["Build", "Daily supervision with weekly photo updates."],
  ["Handover", "Quality checks, clean-up and a written warranty."],
];

// Client testimonials for the slider. Each item: [quote, client name and area]
const clientReviews = [
  ["Our flat was ready before the promised date and the quality is excellent.", "Rina Das, Salt Lake"],
  ["Clear pricing, no hidden charges. The team answered every call.", "Amit Sen, Behala"],
  ["They built our warehouse flooring perfectly for heavy loads.", "S. Kumar, Dankuni"],
];
