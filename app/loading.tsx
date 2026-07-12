export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F7F3F1]">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#E7DDD8] border-t-[#C21E3A]" />

        <p className="mt-5 text-[14px] font-semibold text-[#6A625C]">
          Loading CoreViaSupport
        </p>
      </div>
    </div>
  );
}