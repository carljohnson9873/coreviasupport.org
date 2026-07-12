"use client";

import { Check, Minus, Plus, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

const MONTHLY_PRICE_PER_SERVICE = 1499;
const SETUP_PRICE_PER_SERVICE = 750;
const MULTI_SERVICE_SETUP_PRICE = 1000;
const FIRST_CLIENT_DISCOUNT = 40;

const services = [
  "Order Management",
  "Artwork Services",
  "Research & Presentations",
  "Customer Support",
  "Bookkeeping",
  "Hybrid Operations Support",
];

function getBundleDiscount(serviceCount: number) {
  if (serviceCount < 2) return 0;

  return Math.min(15 + (serviceCount - 2) * 5, 35);
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Order Management",
  ]);
  const [firstClient, setFirstClient] = useState(true);

  const calculations = useMemo(() => {
    const serviceCount = selectedServices.length;

    const monthlySubtotal = serviceCount * MONTHLY_PRICE_PER_SERVICE;
    const bundleDiscountPercentage = getBundleDiscount(serviceCount);
    const bundleDiscountAmount =
      monthlySubtotal * (bundleDiscountPercentage / 100);

    const monthlyAfterBundle = monthlySubtotal - bundleDiscountAmount;

    const setupFee =
      serviceCount === 0
        ? 0
        : serviceCount > 2
          ? MULTI_SERVICE_SETUP_PRICE
          : serviceCount * SETUP_PRICE_PER_SERVICE;

    const firstMonthBeforeDiscount = monthlyAfterBundle + setupFee;

    const firstClientDiscountAmount = firstClient
      ? firstMonthBeforeDiscount * (FIRST_CLIENT_DISCOUNT / 100)
      : 0;

    const firstMonthTotal =
      firstMonthBeforeDiscount - firstClientDiscountAmount;

    return {
      serviceCount,
      monthlySubtotal,
      bundleDiscountPercentage,
      bundleDiscountAmount,
      monthlyAfterBundle,
      setupFee,
      firstClientDiscountAmount,
      firstMonthTotal,
    };
  }, [selectedServices, firstClient]);

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  }

  function resetCalculator() {
    setSelectedServices(["Order Management"]);
    setFirstClient(true);
  }

  return (
    <div className="overflow-hidden rounded-[28px] bg-[#201A16] text-white shadow-[0_24px_70px_rgba(32,26,22,0.18)]">
      <div className="grid lg:grid-cols-[1.1fr_.9fr]">
        <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-[15px] font-bold uppercase tracking-[0.05em] text-[#F3AAB6]">
                Pricing Calculator
              </p>

              <h2 className="mt-4 max-w-2xl !text-[30px] !leading-[1.2] !text-white md:!text-[36px]">
                Build a support package around your requirements.
              </h2>

              <p className="mt-4 max-w-xl text-[15px] leading-7 !text-white/70">
                Select the operational services your business needs to estimate
                your monthly engagement and initial setup investment.
              </p>
            </div>

            <button
              type="button"
              onClick={resetCalculator}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/15"
              aria-label="Reset calculator"
            >
              <RotateCcw size={18} />
            </button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {services.map((service) => {
              const selected = selectedServices.includes(service);

              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`flex min-h-[66px] items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-left transition ${
                    selected
                      ? "border-[#C21E3A] bg-[#C21E3A]"
                      : "border-white/10 bg-white/[0.06] hover:border-white/25 hover:bg-white/[0.09]"
                  }`}
                >
                  <span className="text-[14px] font-semibold text-white">
                    {service}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      selected
                        ? "bg-white text-[#C21E3A]"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {selected ? <Check size={16} /> : <Plus size={16} />}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <button
              type="button"
              onClick={() => setFirstClient((current) => !current)}
              className="flex w-full items-center justify-between gap-5 text-left"
            >
              <div>
                <p className="text-[15px] font-semibold text-white">
                  First-time client discount
                </p>

                <p className="mt-1 text-[13px] leading-6 text-white/60">
                  Apply 40% off the first month, including the initial setup.
                </p>
              </div>

              <span
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                  firstClient ? "bg-[#C21E3A]" : "bg-white/15"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    firstClient ? "left-6" : "left-1"
                  }`}
                />
              </span>
            </button>
          </div>

          <div className="mt-7 flex items-center justify-between rounded-2xl bg-white p-5 text-[#201A16]">
            <div>
              <p className="text-[13px] font-semibold text-[#6A625C]">
                Services selected
              </p>

              <p className="mt-1 text-[24px] font-bold">
                {calculations.serviceCount}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={selectedServices.length === 0}
                onClick={() =>
                  setSelectedServices((current) => current.slice(0, -1))
                }
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7DDD8] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Remove last selected service"
              >
                <Minus size={17} />
              </button>

              <button
                type="button"
                disabled={selectedServices.length === services.length}
                onClick={() => {
                  const nextService = services.find(
                    (service) => !selectedServices.includes(service),
                  );

                  if (nextService) {
                    setSelectedServices((current) => [
                      ...current,
                      nextService,
                    ]);
                  }
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C21E3A] text-white disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Add another service"
              >
                <Plus size={17} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#2A211D] p-7 md:p-10">
          <p className="text-[15px] font-bold uppercase tracking-[0.05em] text-[#F3AAB6]">
            Estimated Investment
          </p>

          <div className="mt-7 space-y-4">
            <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-4">
              <span className="text-[14px] text-white/65">
                Monthly service subtotal
              </span>

              <span className="text-[15px] font-semibold text-white">
                {formatCurrency(calculations.monthlySubtotal)}
              </span>
            </div>

            <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-4">
              <span className="text-[14px] text-white/65">
                Bundle discount
              </span>

              <span className="text-[15px] font-semibold text-[#F3AAB6]">
                {calculations.bundleDiscountPercentage > 0
                  ? `-${calculations.bundleDiscountPercentage}%`
                  : "Not applied"}
              </span>
            </div>

            <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-4">
              <span className="text-[14px] text-white/65">
                Monthly service after bundle
              </span>

              <span className="text-[15px] font-semibold text-white">
                {formatCurrency(calculations.monthlyAfterBundle)}
              </span>
            </div>

            <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-4">
              <span className="text-[14px] text-white/65">
                One-time setup
              </span>

              <span className="text-[15px] font-semibold text-white">
                {formatCurrency(calculations.setupFee)}
              </span>
            </div>

            {firstClient && (
              <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-4">
                <span className="text-[14px] text-white/65">
                  First-time client discount
                </span>

                <span className="text-[15px] font-semibold text-[#F3AAB6]">
                  -{formatCurrency(calculations.firstClientDiscountAmount)}
                </span>
              </div>
            )}
          </div>

          <div className="mt-7 rounded-2xl bg-[#C21E3A] p-6">
            <p className="text-[13px] font-semibold uppercase tracking-[0.05em] !text-white/75">
              Estimated First Month
            </p>

            <p className="mt-2 text-[36px] font-bold leading-none text-white">
              {formatCurrency(calculations.firstMonthTotal)}
            </p>

            <p className="mt-4 text-[13px] leading-6 !text-white/75">
              Includes the monthly service engagement, applicable bundle
              discount, setup fee, and selected first-time client discount.
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-[13px] text-white/60">
                  Estimated recurring monthly fee
                </p>

                <p className="mt-1 text-[24px] font-bold text-white">
                  {formatCurrency(calculations.monthlyAfterBundle)}
                </p>
              </div>

              {calculations.bundleDiscountAmount > 0 && (
                <div className="text-right">
                  <p className="text-[12px] text-white/50">
                    Monthly savings
                  </p>

                  <p className="mt-1 text-[15px] font-semibold text-[#F3AAB6]">
                    {formatCurrency(calculations.bundleDiscountAmount)}
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="mt-5 text-[12px] leading-6 !text-white/45">
            This calculator provides an estimate. Final pricing is confirmed
            after reviewing workload, process complexity, required coverage,
            and service scope.
          </p>
        </div>
      </div>
    </div>
  );
}