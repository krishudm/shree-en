import domestic from "@/assets/res-domestic.png";
import booster from "@/assets/res-booster.png";
import solar from "@/assets/res-solar.png";
import heat from "@/assets/res-heat.png";
import agriBorewell from "@/assets/agri-borewell.png";
import agriOpenwell from "@/assets/agri-openwell.png";
import agriCmb from "@/assets/agri-cmb.jpeg";
import agriKoelMono from "@/assets/agri-koel-mono.png";
import industrial from "@/assets/pump-industrial.jpg";
import waterSoftener from "@/assets/res-softener.png";
import mmbDomestic from "@/assets/res-mmb.png";
import indWaterTransfer from "@/assets/ind-water-transfer.png";
import indWaterSoftener from "@/assets/ind-water-softener.png";
import indWastewater from "@/assets/ind-wastewater.png";
import indMultistage from "@/assets/ind-multistage.png";
import indFirefighting from "@/assets/ind-firefighting.jpg";
import indMotor from "@/assets/ind-induction-motor.jpg";
import solarpump from "@/assets/solarPump.png";
import indus1 from "@/assets/industrial1.png";
import indus2 from "@/assets/indus2.png";
import wastwater from "@/assets/wastwater.jpeg";
import indusction2 from "@/assets/indusction2.png";

export type PumpItem = {
  slug: string;
  name: string;
  image: string;
  desc: string;
  features?: string[];
  applications?: string[];
  specs?: { label: string; value: string }[];
};

export type Solution = {
  slug: string;
  n: string;
  title: string;
  tagline: string;
  intro: string;
  pumps: PumpItem[];
};

export const solutions: Solution[] = [
  {
    slug: "residential",
    n: "01",
    title: "Residential Solutions",
    tagline: "Comfort, pressure and clean water for every home.",
    intro:
      "From single-family bungalows to multi-storey apartments, we supply and install reliable pump systems that keep water flowing — quietly, efficiently and around the clock.",
    pumps: [
      {
        slug: "domestic-water-pump",
        name: "Domestic Water Pump",
        image: mmbDomestic,//domestic
        desc: "Compact monoblock pumps for overhead tank filling, daily household use and uninterrupted water supply.",
        features: ["Compact monoblock design", "Quiet operation", "Energy-efficient motor", "Low maintenance"],
        applications: ["Overhead tank filling", "Bungalows & villas", "Apartments", "Daily household use"],
        specs: [
          { label: "Power", value: "0.5 – 2 HP" },
          { label: "Head", value: "Up to 40 m" },
          { label: "Discharge", value: "Up to 120 LPM" },
          { label: "Phase", value: "Single phase" },
        ],
      },
      {
        slug: "pressure-booster-pump",
        name: "Pressure Booster Pump",
        image: booster,
        desc: "Smart booster systems that deliver consistent shower pressure across multiple bathrooms and floors.",
        features: ["Auto pressure sensing", "Multi-bathroom support", "Silent operation", "Anti-dry-run protection"],
        applications: ["Multi-storey homes", "Hotels & resorts", "Shower boosting", "Building utilities"],
        specs: [
          { label: "Power", value: "0.5 – 1.5 HP" },
          { label: "Pressure", value: "Up to 4 bar" },
          { label: "Discharge", value: "Up to 80 LPM" },
          { label: "Control", value: "Auto pressure switch" },
        ],
      },
      {
        slug: "solar-water-pump",
        name: "Solar Water Pump",
        image: solar,
        desc: "Rooftop solar-powered pumps that cut electricity bills while providing eco-friendly water delivery.",
        features: ["DC solar drive", "Zero electricity bill", "MPPT controller", "Long life brushless motor"],
        applications: ["Residential rooftops", "Off-grid homes", "Farmhouses", "Eco-conscious projects"],
        specs: [
          { label: "Power", value: "1 – 5 HP" },
          { label: "Panels", value: "Mono-PERC" },
          { label: "Controller", value: "MPPT VFD" },
          { label: "Warranty", value: "Up to 25 yrs panels" },
        ],
      },
      {
        slug: "heat-pumps",
        name: "Heat Pumps",
        image: heat,
        desc: "Energy-efficient heat pump systems for hot water on demand — ideal for villas, hotels and modern homes.",
        features: ["High COP efficiency", "On-demand hot water", "Eco-friendly refrigerant", "Smart controls"],
        applications: ["Villas & bungalows", "Hotels & spas", "Hospitals", "Hostels"],
        specs: [
          { label: "Capacity", value: "100 – 1000 L/day" },
          { label: "COP", value: "4.0+" },
          { label: "Inlet", value: "5 – 43 °C" },
          { label: "Outlet", value: "Up to 60 °C" },
        ],
      },
      {
        slug: "water-softener-filtration",
        name: "Water Softener & Filtration",
        image: waterSoftener,
        desc: "Water Softeners with sand & carbon filters — protect skin, hair, fabrics and appliances from hard water scaling.",
        features: ["Sand + carbon + softener", "Protects skin & hair", "Saves appliances", "Auto regeneration"],
        applications: ["Whole-house treatment", "Bathrooms & geysers", "Washing machines", "Hard water zones"],
        specs: [
          { label: "Flow rate", value: "1000 – 5000 LPH" },
          { label: "Media", value: "Resin / Sand / Carbon" },
          { label: "Vessel", value: "FRP / SS" },
          { label: "Control", value: "Manual / Auto" },
        ],
      },
      {
        slug: "submersible-openwell",
        name: "Submersible OpenWell",
        image: domestic,//mmbDomestic
        desc: "Submersible OpenWell — compact, energy-efficient pumps engineered for everyday household water needs.",
        features: ["Stainless steel impeller", "Copper winding", "High efficiency", "Corrosion resistant"],
        applications: ["Open wells", "Sumps & tanks", "Domestic supply", "Garden watering"],
        specs: [
          { label: "Power", value: "0.5 – 3 HP" },
          { label: "Head", value: "Up to 50 m" },
          { label: "Discharge", value: "Up to 200 LPM" },
          { label: "Body", value: "Cast iron / SS" },
        ],
      },
    ],
  },
  {
    slug: "agricultural",
    n: "02",
    title: "Agricultural Solutions",
    tagline: "Powering farms across Madhya Pradesh.",
    intro:
      "Purpose-built irrigation systems engineered for Indian farms — from small kitchen plots to large multi-acre operations.",
    pumps: [
      {
        slug: "borewell-submersible-pump",
        name: "Borewell Submersible Pump",
        image: agriBorewell,
        desc: "Deep-well V4 & V6 borewell submersible pump series with high head capacity — built for reliable irrigation, sprinkler and drip networks across Indian farms.",
        features: ["V4 & V6 sizes", "High head capacity", "SS impellers", "Water-cooled motor"],
        applications: ["Deep borewells", "Sprinkler irrigation", "Drip irrigation", "Farm water supply"],
        specs: [
          { label: "Power", value: "1 – 25 HP" },
          { label: "Head", value: "Up to 350 m" },
          { label: "Discharge", value: "Up to 1500 LPM" },
          { label: "Bore size", value: "4\" / 6\"" },
        ],
      },
      {
        slug: "centrifugal-monoblock-pump",
        name: "Centrifugal Monoblock Pump",
        image: agriKoelMono,//agriKoelMono
        desc: "KOEL Electric openwell pumps with cast iron / SS motor body, VPI-treated stator, copper winding and CED-coated CI parts — engineered for canal, pond and open-well irrigation.",
        features: ["VPI-treated stator", "Pure copper winding", "CED-coated CI parts", "CI / SS body"],
        applications: ["Canal lifting", "Pond / tank irrigation", "Open-well farming", "Field flooding"],
        specs: [
          { label: "Power", value: "1 – 10 HP" },
          { label: "Head", value: "Up to 50 m" },
          { label: "Discharge", value: "Up to 1200 LPM" },
          { label: "Phase", value: "Single / Three" },
        ],
      },
      {
        slug: "solar-agri-pump",
        name: "Solar Agri & Solar Pumps",
        // name: "Solar Agri & Openwell Pump",
        image: solarpump,//agriOpenwell
        desc: "Heavy-duty CMB centrifugal monoblock pumpset with high-efficiency impeller — ideal for farming, gardening and rural water supply with stable pressure.",
        features: ["Solar VFD controller", "Zero diesel cost", "MPPT tracking", "Off-grid operation"],
        applications: ["Off-grid farms", "PM-KUSUM projects", "Rural water supply", "Drip & sprinkler"],
        specs: [
          { label: "Power", value: "2 – 15 HP" },
          { label: "Panels", value: "Mono-PERC" },
          { label: "Controller", value: "Solar VFD" },
          { label: "Subsidy", value: "PM-KUSUM eligible" },
        ],
      },
      {
        slug: "agri-sprinkler",
        name: "Agri Sprinkler Pump",
        image: agriCmb,
        desc: "Every pump we supply 10/10 centrifugal mono block with 99.9% pure copper winding, no-compromise components and full service backup — perfect for agricultural building use on farms.",
        features: ["Wide-coverage nozzles", "Uniform spray pattern", "UV-resistant materials", "Quick-fit couplings"],
        applications: ["Field crops", "Lawns & gardens", "Nurseries", "Frost protection"],
        specs: [
          { label: "Coverage", value: "Up to 30 m radius" },
          { label: "Pressure", value: "2 – 4 bar" },
          { label: "Material", value: "Brass / Engg. plastic" },
          { label: "Connection", value: "Quick-coupler" },
        ],
      },
    ],
  },
  {
    slug: "industrial",
    n: "03",
    title: "Industrial & Commercial",
    tagline: "Heavy-duty performance, certified reliability.",
    intro:
      "From factories and hotels to municipal projects — we deliver industrial-grade pumping solutions designed for continuous operation.",
    pumps: [
      {
        slug: "water-transfer-pump",
        name: "Water Transfer Pump",
        image: indus1,//indWaterTransfer
        desc: "KOEL Industrial Monoblock pumps with cast iron impeller, F-class insulation and IP55 protection — engineered for clean water transfer, cooling towers and high-pressure industrial use.",
        features: ["F-class insulation", "IP55 protection", "Cast iron impeller", "Continuous duty"],
        applications: ["Cooling towers", "Process water transfer", "Building utilities", "HVAC systems"],
        specs: [
          { label: "Power", value: "2 – 30 HP" },
          { label: "Head", value: "Up to 80 m" },
          { label: "Discharge", value: "Up to 3000 LPM" },
          { label: "Protection", value: "IP55" },
        ],
      },
      {
        slug: "commercial-water-softener",
        name: "Commercial Water Softener",
        image: indus2,
        desc: "Commercial water softeners with sand & carbon filtration — ideal for hotels, hospitals, factories and large commercial premises.",
        features: ["High-capacity resin", "Auto regeneration", "Sand + carbon stages", "FRP / SS vessels"],
        applications: ["Hotels & hospitals", "Factories & laundries", "Boilers & cooling towers", "Commercial RO"],
        specs: [
          { label: "Capacity", value: "1 – 50 m³/hr" },
          { label: "Hardness removal", value: "< 5 ppm" },
          { label: "Vessel", value: "FRP / SS" },
          { label: "Control", value: "Auto multiport valve" },
        ],
      },
      {
        slug: "waste-water-pumps",
        name: "Waste Water Pumps",
        image: wastwater,//indWastewater
        desc: "KOEL X-PEL cutter and sewage submersible pumps with SS body, double-ended mechanical seal and CED-coated parts — for ETPs, STPs, sewage and effluent handling.",
        features: ["Cutter / non-clog impeller", "Double mechanical seal", "SS body", "Handles solids"],
        applications: ["STP / ETP plants", "Sewage lifting", "Industrial effluent", "Drainage systems"],
        specs: [
          { label: "Power", value: "1 – 50 HP" },
          { label: "Solid handling", value: "Up to 65 mm" },
          { label: "Head", value: "Up to 40 m" },
          { label: "Body", value: "SS / CI" },
        ],
      },
      {
        slug: "fire-fighting-pump",
        name: "Fire Fighting Pump",
        image: indFirefighting,
        desc: "NFPA-aligned fire pump sets with main electric, jockey and diesel configurations — built for hydrant, sprinkler and high-rise fire-safety systems.",
        features: ["NFPA-20 aligned", "Electric + diesel + jockey", "Auto controller panel", "High-pressure delivery"],
        applications: ["High-rise buildings", "Factories & warehouses", "Hydrant systems", "Sprinkler systems"],
        specs: [
          { label: "Capacity", value: "Up to 4500 LPM" },
          { label: "Head", value: "Up to 120 m" },
          { label: "Drive", value: "Electric / Diesel" },
          { label: "Standard", value: "NFPA-20 aligned" },
        ],
      },
      {
        slug: "multistage-monoblock-pumps",
        name: "Multistage Monoblock & Openwell Pumps",
        image: indMultistage,
        desc: "Multistage monoblock pumps with high head capacity and stainless steel internals — perfect for building services applications.",
        features: ["Multistage impellers", "SS internals", "High pressure", "Compact footprint"],
        applications: ["Pressure boosting", "RO feed", "Boiler feed", "High-rise buildings"],
        specs: [
          { label: "Power", value: "1 – 20 HP" },
          { label: "Head", value: "Up to 200 m" },
          { label: "Discharge", value: "Up to 600 LPM" },
          { label: "Internals", value: "Stainless steel" },
        ],
      },
      {
        slug: "induction-electric-motors",
        name: "Induction Electric Motors",
        image: indusction2,//indMotor
        desc: "Three-phase TEFC induction motors with copper winding, F-class insulation and IP55 protection — robust drive units for pumps, compressors and industrial machinery.",
        features: ["TEFC enclosure", "Copper winding", "F-class insulation", "IP55 protection"],
        applications: ["Pumps & compressors", "Conveyors", "Machine tools", "General industrial drive"],
        specs: [
          { label: "Power", value: "0.5 – 100 HP" },
          { label: "Speed", value: "750 – 3000 RPM" },
          { label: "Protection", value: "IP55" },
          { label: "Mounting", value: "Foot / Flange" },
        ],
      },
    ],
  },
  {
    slug: "installation-service",
    n: "04",
    title: "Installation & Service",
    tagline: "Lifetime support from a trusted partner.",
    intro:
      "Beyond the product — our team handles installation, commissioning, AMC, repairs and on-call troubleshooting across MP.",
    pumps: [
      {
        slug: "on-site-installation",
        name: "On-Site Installation",
        image: domestic,
        desc: "Professional commissioning, alignment and load-testing for every pump we supply.",
        features: ["Trained technicians", "Pump alignment", "Load testing", "Handover documentation"],
        applications: ["New pump installs", "Replacement projects", "Site commissioning", "Plant startups"],
        specs: [
          { label: "Coverage", value: "All MP districts" },
          { label: "Response", value: "24 – 72 hrs" },
          { label: "Team", value: "Certified engineers" },
          { label: "Reporting", value: "Full handover docs" },
        ],
      },
      {
        slug: "repair-maintenance",
        name: "Repair & Maintenance",
        image: booster,
        desc: "Expert breakdown service, motor rewinding and overhaul — quick turnaround guaranteed.",
        features: ["Motor rewinding", "Bearing replacement", "Mechanical seal change", "Overhaul service"],
        applications: ["Breakdown repair", "Preventive overhaul", "Motor rewinding", "Spare replacement"],
        specs: [
          { label: "Turnaround", value: "24 – 96 hrs" },
          { label: "Spares", value: "Genuine OEM" },
          { label: "Warranty", value: "On repair work" },
          { label: "Support", value: "On-site / Workshop" },
        ],
      },
      {
        slug: "annual-maintenance-contracts",
        name: "Annual Maintenance Contracts",
        image: industrial,
        desc: "Scheduled servicing plans with priority response and genuine spare parts.",
        features: ["Scheduled visits", "Priority response", "Genuine spares", "Performance reports"],
        applications: ["Factories & hotels", "Hospitals", "Apartments", "Commercial buildings"],
        specs: [
          { label: "Plans", value: "Comprehensive / Non-comp." },
          { label: "Visits", value: "Quarterly / Monthly" },
          { label: "Response", value: "Priority SLA" },
          { label: "Parts", value: "Genuine OEM" },
        ],
      },
      {
        slug: "system-consultation",
        name: "System Consultation",
        image: solar,
        desc: "Pump sizing, pressure design and system audits by experienced engineers.",
        features: ["Pump sizing", "Hydraulic design", "Energy audits", "System upgrades"],
        applications: ["New projects", "Retrofit upgrades", "Energy savings audits", "Pressure system design"],
        specs: [
          { label: "Service", value: "On-site / Remote" },
          { label: "Deliverable", value: "Sizing report" },
          { label: "Engineers", value: "10+ yrs experience" },
          { label: "Coverage", value: "Pan-MP" },
        ],
      },
    ],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);

export const getProduct = (solutionSlug: string, productSlug: string) => {
  const sol = getSolution(solutionSlug);
  if (!sol) return null;
  const product = sol.pumps.find((p) => p.slug === productSlug);
  if (!product) return null;
  return { solution: sol, product };
};
