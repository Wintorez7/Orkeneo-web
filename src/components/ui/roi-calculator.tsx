"use client";
import React, { useState } from "react";
import { Mail, ChevronLeft, ChevronRight, BarChart3, TrendingUp, UtensilsCrossed, Calendar, Plus, Minus, Leaf, Clock } from "lucide-react";
import { Button } from "../reusable/button";
import Badge from "../reusable/badge";
import { TextSection } from "../reusable/text-section";
import { Chart as ChartJSComponent } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  PointElement,
  LineElement,
  LineController,
  Legend,
  Tooltip as ChartJsTooltip,
} from 'chart.js';
import ShadowCircle from "../reusable/shadow-circle";
// import { useRouter } from "next/navigation";
import type { TooltipItem } from 'chart.js';
import { BookDemoModal } from "./book-demo-modal";

ChartJS.register(CategoryScale, LinearScale, BarElement, BarController, PointElement, LineElement, LineController, Legend, ChartJsTooltip);

const initialFormData = {
  restaurantName: "",
  restaurantLocation: "",
  email: "",
  phone: "",
  weeklyRevenue: "",
  locations: 1,
  restaurantType: "",
  businessStructure: "",
  currentCOGS: "",
  targetCOGS: "",
  currentLabor: "",
  targetLabor: "",
  cuisineType: "",
  posSystem: "",
  bohSystem: "",
  improvementArea: "",
};

type FormData = typeof initialFormData;

type ChartDataPoint = {
  month: number;
  additionalProfit: number;
  ghgReduction: number;
  subscriptionCost: number;
};

type ResultsPageProps = {
  formData: FormData;
//   calculateResults: () => {
//     annualProfit: number;
//     roi: number;
//     laborSavings: number;
//     cogsSavings: number;
//     revenueBump: number;
//   };
  generateChartData: () => ChartDataPoint[];
  onRestart: () => void;
};

export default function RoiCalculator() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isCalculating, setIsCalculating] = useState(false);
  const [errors, setErrors] = useState<{ [K in keyof FormData]?: string }>({});

  const updateFormData = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: { [K in keyof FormData]?: string } = {};

    if (step === 1) {
      if (!formData.restaurantName) newErrors.restaurantName = "Restaurant name is required";
      if (!formData.restaurantLocation) newErrors.restaurantLocation = "Location is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
      if (!formData.phone) newErrors.phone = "Phone is required";
      else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) newErrors.phone = "Invalid phone";
    }
    if (step === 2) {
      if (!formData.weeklyRevenue) newErrors.weeklyRevenue = "Weekly revenue is required";
      else if (Number(formData.weeklyRevenue) <= 0) newErrors.weeklyRevenue = "Must be positive";
      if (!formData.locations || Number(formData.locations) < 1) newErrors.locations = "At least 1 location";
      if (!formData.restaurantType) newErrors.restaurantType = "Type is required";
      if (!formData.businessStructure) newErrors.businessStructure = "Structure is required";
    }
    if (step === 3) {
      if (!formData.currentCOGS) newErrors.currentCOGS = "Current COGS is required";
      else if (Number(formData.currentCOGS) < 0 || Number(formData.currentCOGS) > 100) newErrors.currentCOGS = "Must be 0-100";
      if (!formData.targetCOGS) newErrors.targetCOGS = "Target COGS is required";
      else if (Number(formData.targetCOGS) < 0 || Number(formData.targetCOGS) > 100) newErrors.targetCOGS = "Must be 0-100";
      if (!formData.currentLabor) newErrors.currentLabor = "Current labor is required";
      else if (Number(formData.currentLabor) < 0 || Number(formData.currentLabor) > 100) newErrors.currentLabor = "Must be 0-100";
      if (!formData.targetLabor) newErrors.targetLabor = "Target labor is required";
      else if (Number(formData.targetLabor) < 0 || Number(formData.targetLabor) > 100) newErrors.targetLabor = "Must be 0-100";
      if (!formData.cuisineType) newErrors.cuisineType = "Cuisine type is required";
      if (!formData.posSystem) newErrors.posSystem = "POS system is required";
      if (!formData.bohSystem) newErrors.bohSystem = "BOH system is required";
      if (!formData.improvementArea) newErrors.improvementArea = "Improvement area is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (currentStep < 4) {
      if (!validateStep(currentStep)) return;
      if (currentStep === 3) {
        setIsCalculating(true);
        setTimeout(() => {
          setIsCalculating(false);
          setCurrentStep(4);
        }, 1500);
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return (
          formData.restaurantName &&
          formData.restaurantLocation &&
          formData.email &&
          formData.phone
        );
      case 2:
        return (
          formData.weeklyRevenue &&
          formData.locations &&
          formData.restaurantType &&
          formData.businessStructure
        );
      case 3:
        return (
          formData.currentCOGS &&
          formData.targetCOGS &&
          formData.currentLabor &&
          formData.targetLabor &&
          formData.cuisineType &&
          formData.posSystem &&
          formData.bohSystem &&
          formData.improvementArea
        );
      default:
        return true;
    }
  };

  // Calculation logic (from test-calculator)
  const calculateResults = () => {
    const weeklyRev = Number.parseFloat(formData.weeklyRevenue) || 0;
    const annualRevenue = weeklyRev * 52 * formData.locations;
    const currentCOGSPercent = Number.parseFloat(formData.currentCOGS) || 30;
    const targetCOGSPercent = Number.parseFloat(formData.targetCOGS) || 27;
    const currentLaborPercent = Number.parseFloat(formData.currentLabor) || 28;
    const targetLaborPercent = Number.parseFloat(formData.targetLabor) || 25;
    const cogsSavings = (annualRevenue * (currentCOGSPercent - targetCOGSPercent)) / 100;
    const laborSavings = (annualRevenue * (currentLaborPercent - targetLaborPercent)) / 100;
    const revenueBump = annualRevenue * 0.025;
    const totalSavings = cogsSavings + laborSavings + revenueBump;
    const subscriptionCost = 30000;
    const roi = ((totalSavings - subscriptionCost) / subscriptionCost) * 100;
    return {
      annualProfit: Math.round(totalSavings),
      roi: Math.round(roi),
      laborSavings: Math.round(laborSavings),
      cogsSavings: Math.round(cogsSavings),
      revenueBump: Math.round(revenueBump),
    };
  };

  // Chart data placeholder (no recharts here, but structure is ready)
  const generateChartData = () => {
    const results = calculateResults();
    const monthlyProfit = results.annualProfit / 12;
    return Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      additionalProfit: Math.round(monthlyProfit * (0.8 + (i / 12) * 0.7) * 0.7),
      ghgReduction: ((1.5 + (i / 12) * 2.25) * 10) / 10,
      subscriptionCost: 2500,
    }));
  };

  // --- UI ---
  return (
    <div className="flex flex-col items-center justify-center py-8">
     {currentStep < 4 && (
        <div className="mb-8">
            <TextSection
            subtitle="ROI Calculator"
            title="Ready to see your potential savings?"
            description="See how much our AI-powered demand planning can save your restaurant each month."
            />
        </div>
     )}
      <div className="w-full max-w-3xl">
        {/* Loading state */}
        {isCalculating ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 bg-[#4d77ff] rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Calculating Your ROI...</h3>
            <p className="text-gray-600 mb-6">Our AI is analyzing your data to provide personalized savings projections</p>
          </div>
        ) : (
          <>
            {/* Stepper */}
            <div className="mb-8">
              {/* Desktop stepper */}
              <div className="hidden md:flex items-center justify-center gap-2">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step <= currentStep
                          ? "bg-[#4d77ff] text-white"
                          : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {step}
                    </div>
                    {step < 4 && (
                      <div
                        className={`w-24 h-1 mx-2 ${
                          step < currentStep ? "bg-[#4d77ff]" : "bg-slate-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              {/* Mobile progress bar */}
              <div className="flex flex-col items-center md:hidden w-full">
                <span className="text-sm font-medium mb-2">
                  Step {currentStep} of 4
                </span>
                <div className="w-full max-w-xs bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-[#4d77ff] h-2 rounded-full transition-all"
                    style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  />
                </div>
              </div>
            </div>
            {/* Step 1: Restaurant Info */}
            {currentStep === 1 && (
            <div className="mb-8 px-4 sm:px-8 md:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                    Restaurant Details
                </h2>
                <div className="">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
                    <input
                        type="text"
                        value={formData.restaurantName}
                        onChange={e => updateFormData("restaurantName", e.target.value)}
                        placeholder="Enter your restaurant name"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.restaurantName && <div className="text-red-500 text-xs mt-1">{errors.restaurantName}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City Name</label>
                    <input
                        type="text"
                        value={formData.restaurantLocation}
                        onChange={e => updateFormData("restaurantLocation", e.target.value)}
                        placeholder="Enter your city/state"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.restaurantLocation && <div className="text-red-500 text-xs mt-1">{errors.restaurantLocation}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Mail size={18} />
                        </span>
                        <input
                        type="email"
                        value={formData.email}
                        onChange={e => updateFormData("email", e.target.value)}
                        placeholder="deepak@example.com"
                        className="border border-gray-200 rounded-md pl-10 pr-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => updateFormData("phone", e.target.value)}
                        placeholder="08887776666"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                    <Button onClick={nextStep} disabled={!isStepValid(1)}>
                    Next <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
            )}
            {/* Step 2: Revenue & Type */}
            {currentStep === 2 && (
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                    Revenue & Type
                </h2>
                <div className="px-2 sm:px-4 md:px-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weekly Revenue (₹)</label>
                    <input
                        type="number"
                        value={formData.weeklyRevenue}
                        onChange={e => updateFormData("weeklyRevenue", e.target.value)}
                        placeholder="25000"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.weeklyRevenue && <div className="text-red-500 text-xs mt-1">{errors.weeklyRevenue}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Locations</label>
                    <div className="flex items-center gap-2">
                        <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateFormData("locations", Math.max(1, formData.locations - 1))}
                        disabled={formData.locations <= 1}
                        >
                        <Minus className="w-4 h-4" />
                        </Button>
                        <div className="w-16 text-center text-lg font-semibold">{formData.locations}</div>
                        <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateFormData("locations", formData.locations + 1)}
                        >
                        <Plus className="w-4 h-4" />
                        </Button>
                    </div>
                    {errors.locations && <div className="text-red-500 text-xs mt-1">{errors.locations}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Type</label>
                    <select
                        value={formData.restaurantType}
                        onChange={e => updateFormData("restaurantType", e.target.value)}
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select type</option>
                        <option value="fsr">Full Service Restaurant (FSR)</option>
                        <option value="qsr">Quick Service Restaurant (QSR)</option>
                        <option value="cafe">Café</option>
                        <option value="cloud-kitchen">Cloud Kitchen</option>
                        <option value="fast-casual">Fast Casual</option>
                        <option value="fine-dining">Fine Dining</option>
                    </select>
                    {errors.restaurantType && <div className="text-red-500 text-xs mt-1">{errors.restaurantType}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Structure</label>
                    <select
                        value={formData.businessStructure}
                        onChange={e => updateFormData("businessStructure", e.target.value)}
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select structure</option>
                        <option value="franchisee">Franchisee</option>
                        <option value="franchisor">Franchisor</option>
                        <option value="independent">Independent</option>
                    </select>
                    {errors.businessStructure && <div className="text-red-500 text-xs mt-1">{errors.businessStructure}</div>}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={prevStep}>
                    <ChevronLeft className="w-4 h-4 mr-2" /> Previous
                    </Button>
                    <Button onClick={nextStep} disabled={!isStepValid(2)}>
                    Next <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
            )}
            {/* Step 3: Operations & Concept */}
            {currentStep === 3 && (
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                    Operations & Concept
                </h2>
                <div className="px-2 sm:px-4 md:px-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current COGS (%)</label>
                    <input
                        type="number"
                        value={formData.currentCOGS}
                        onChange={e => updateFormData("currentCOGS", e.target.value)}
                        placeholder="30"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.currentCOGS && <div className="text-red-500 text-xs mt-1">{errors.currentCOGS}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Target/Ideal COGS (%)</label>
                    <input
                        type="number"
                        value={formData.targetCOGS}
                        onChange={e => updateFormData("targetCOGS", e.target.value)}
                        placeholder="27"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.targetCOGS && <div className="text-red-500 text-xs mt-1">{errors.targetCOGS}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Labor (%)</label>
                    <input
                        type="number"
                        value={formData.currentLabor}
                        onChange={e => updateFormData("currentLabor", e.target.value)}
                        placeholder="28"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.currentLabor && <div className="text-red-500 text-xs mt-1">{errors.currentLabor}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Target Labor (%)</label>
                    <input
                        type="number"
                        value={formData.targetLabor}
                        onChange={e => updateFormData("targetLabor", e.target.value)}
                        placeholder="25"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.targetLabor && <div className="text-red-500 text-xs mt-1">{errors.targetLabor}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Cuisine Type</label>
                    <input
                        type="text"
                        value={formData.cuisineType}
                        onChange={e => updateFormData("cuisineType", e.target.value)}
                        placeholder="Italian, Indian, American, etc."
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.cuisineType && <div className="text-red-500 text-xs mt-1">{errors.cuisineType}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current POS System</label>
                    <select
                        value={formData.posSystem}
                        onChange={e => updateFormData("posSystem", e.target.value)}
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select POS</option>
                        <option value="petpooja">PetPooja</option>
                        <option value="restroworks">Restroworks</option>
                        <option value="dotpe">Rista/ Dotpe</option>
                        <option value="tmbill">TMBill</option>
                        <option value="rancelab">Rancelab</option>
                        <option value="zoho">Zoho</option>
                        <option value="limetray">LimeTray</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.posSystem && <div className="text-red-500 text-xs mt-1">{errors.posSystem}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">BOH System Present</label>
                    <select
                        value={formData.bohSystem}
                        onChange={e => updateFormData("bohSystem", e.target.value)}
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    {errors.bohSystem && <div className="text-red-500 text-xs mt-1">{errors.bohSystem}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Improvement Area</label>
                    <select
                        value={formData.improvementArea}
                        onChange={e => updateFormData("improvementArea", e.target.value)}
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select area</option>
                        <option value="cogs">COGS</option>
                        <option value="labor">Labor</option>
                        <option value="lost-sales">Reducing Lost Sales</option>
                        <option value="efficiency">Efficiency</option>
                        <option value="systemization">Systemization</option>
                    </select>
                    {errors.improvementArea && <div className="text-red-500 text-xs mt-1">{errors.improvementArea}</div>}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={prevStep}>
                    <ChevronLeft className="w-4 h-4 mr-2" /> Previous
                    </Button>
                    <Button onClick={nextStep} disabled={!isStepValid(3)}>
                    Calculate ROI <BarChart3 className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
            )}
          </>
        )}
        {/* Step 4: Results */}
        {currentStep === 4 && (
          <ResultsPage
            formData={formData}
            // calculateResults={calculateResults}
            generateChartData={generateChartData}
            onRestart={() => {
              setCurrentStep(1);
              setFormData(initialFormData);
            }}
          />
        )}
      </div>
    </div>
  );
}

function ResultsPage({ formData, generateChartData, onRestart }: ResultsPageProps) {
  // const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
//   const results = calculateResults();
  const chartDataArr = generateChartData();
  const months = chartDataArr.map((d) => `Month ${d.month}`);
  const additionalProfit = chartDataArr.map((d) => d.additionalProfit);
  const ghgReduction = chartDataArr.map((d) => d.ghgReduction);

  // Chart.js mixed chart: use type 'bar' and specify dataset types
  const data = {
    labels: months,
    datasets: [
      {
        type: 'bar' as const,
        label: 'Additional Profit',
        data: additionalProfit,
        backgroundColor: '#4d77ff',
        borderRadius: 8,
        yAxisID: 'y',
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        type: 'line' as const,
        label: 'GHG Reduction (tons)',
        data: ghgReduction,
        borderColor: '#22c55e',
        backgroundColor: '#22c55e',
        yAxisID: 'y1',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#22c55e',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: '#181d27',
          font: { size: 14, family: 'inherit' },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context: TooltipItem<'bar'>) {
            if (context.dataset.label === 'Additional Profit') {
              return ` $${context.parsed.y.toLocaleString()}`;
            }
            if (context.dataset.label === 'GHG Reduction (tons)') {
              return ` ${context.parsed.y} tons`;
            }
            return `${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#535862', font: { size: 12 } },
      },
      y: {
        beginAtZero: true,
        position: 'left' as const,
        title: { display: true, text: 'Additional Profit (₹)', color: '#4d77ff', font: { size: 13 } },
        ticks: { color: '#4d77ff', font: { size: 12 } },
        grid: { color: '#e5e7eb', borderDash: [4, 4] },
      },
      y1: {
        beginAtZero: true,
        position: 'right' as const,
        title: { display: true, text: 'GHG Reduction (tons)', color: '#22c55e', font: { size: 13 } },
        ticks: { color: '#22c55e', font: { size: 12 } },
        grid: { drawOnChartArea: false },
      },
    },
    layout: {
      padding: 16,
    },
  };

  // Restore summaryData definition
  const summaryData = [
    {
      metric: "Current COGS",
      current: `${formData.currentCOGS}%`,
      target: `${formData.targetCOGS}%`,
      improvement: `${(Number.parseFloat(formData.currentCOGS) - Number.parseFloat(formData.targetCOGS)).toFixed(1)}%`,
    },
    {
      metric: "Current Labor",
      current: `${formData.currentLabor}%`,
      target: `${formData.targetLabor}%`,
      improvement: `${(Number.parseFloat(formData.currentLabor) - Number.parseFloat(formData.targetLabor)).toFixed(1)}%`,
    },
    {
      metric: "Waste Reduction",
      current: "8%",
      target: "3%",
      improvement: "-5%",
    },
    {
      metric: "Staff Time Saved",
      current: "0 hrs",
      target: "12 hrs",
      improvement: "+12 hrs/week",
    },
    {
      metric: "Menu Performance",
      current: "Baseline",
      target: "Optimized",
      improvement: "+2.5% revenue",
    },
  ];

  return (
    <div className="space-y-8">
        <div className="mb-8">
          <TextSection
            subtitle="ROI Calculator"
            title="Your Estimated Savings with Orkeneo"
            html={`Based on your <span class="uppercase font-bold">${formData.locations} ${formData.restaurantType}</span> location${formData.locations > 1 ? "s" : ""}`}
          />
        </div>
      {/* Main Content Grid */}
      <div className="">
        {/* How We Calculate: Key Benefits style */}
        <div className="mb-8 w-full flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-900 my-8 text-center">How We Calculate Your Potential Savings</h2>
          <div className="grid gap-10 max-[460]:grid-cols-1 max-[640]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto w-full">
            {/* Food Cost Reduction */}
            <div className="flex flex-col items-center text-center px-2">
              <ShadowCircle>
                <UtensilsCrossed className="w-5 h-5 text-blue-600" />
              </ShadowCircle>
              <h3 className="font-semibold my-2">Food Cost Reduction</h3>
              <p className="text-sm text-gray-600">Save 3–8% via AI-based menu prep & demand forecasting.</p>
            </div>
            {/* Labor Optimization */}
            <div className="flex flex-col items-center text-center px-2">
              <ShadowCircle>
                <Clock className="w-5 h-5 text-blue-600" />
              </ShadowCircle>
              <h3 className="font-semibold my-2">Labor Optimization</h3>
              <p className="text-sm text-gray-600">Cut 4–10% labor cost using forecasted staffing plans.</p>
            </div>
            {/* Revenue Increase */}
            <div className="flex flex-col items-center text-center px-2">
              <ShadowCircle>
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </ShadowCircle>
              <h3 className="font-semibold my-2">Revenue Increase</h3>
              <p className="text-sm text-gray-600">Boost 1.5–4% revenue via smart menus & fewer stockouts.</p>
            </div>
            {/* Sustainability */}
            <div className="flex flex-col items-center text-center px-2">
              <ShadowCircle>
                <Leaf className="w-5 h-5 text-blue-600" />
              </ShadowCircle>
              <h3 className="font-semibold my-2">Sustainability</h3>
              <p className="text-sm text-gray-600">Reduce waste = lower emissions, better margins.</p>
            </div>
          </div>
        </div>
        {/* Right Panel: Chart */}
        <div className="lg:col-span-3">
          <div className="h-fit p-6">
              <h2 className="text-lg font-semibold text-gray-900">Comparing current vs. projected savings over 12 months</h2>
              <div className="h-96 flex items-center justify-center">
                <ChartJSComponent type="bar" data={data} options={options} style={{ width: '100%', height: '100%' }} />
              </div>
          </div>
        </div>
      </div>
      {/* End Main Content Grid */}
      {/* Summary Table */}
      <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Savings Summary Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Metric</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Current</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Target</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {summaryData.map((row: typeof summaryData[0], index: number) => (
                  <tr key={index} className="border-b border-slate-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">{row.metric}</td>
                    <td className="py-3 px-4 text-gray-600">{row.current}</td>
                    <td className="py-3 px-4 text-gray-600">{row.target}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant="subtle"
                        color={row.improvement.startsWith("+") ? "green" : "blue"}
                      >
                        {row.improvement}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
      <div className="bg-gradient-to-r from-[#4d77ff] to-blue-700 text-white rounded-lg">
          <div className="max-w-2xl mx-auto p-10">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Restaurant?</h3>
            <p className="mb-8 text-lg">Get personalized insights and save more with AI.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-[#4d77ff] hover:bg-slate-100 font-semibold px-8 py-3 text-lg" onClick={() => setIsModalOpen(true)}>
                <Calendar className="w-5 h-5 mr-2" />
                Get Early Access
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#4d77ff] font-semibold px-8 py-3 text-lg bg-transparent"
                onClick={onRestart}
              >
                Calculate again
              </Button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              30-minute personalized demo • No commitment required • See results in real-time
            </p>
          </div>
      </div>
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}