export function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex h-full items-center leading-[0] text-[27.776px]">
        <div className="flex flex-col font-light justify-center text-white tracking-[-0.2354px]" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
          <p className="leading-[normal]">We Love</p>
        </div>
        <div 
          className="bg-clip-text bg-gradient-to-b flex flex-col font-bold justify-center text-nowrap from-[#fdcf04] to-[#ab6000]" 
          style={{ 
            WebkitTextFillColor: "transparent",
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif'
          }}
        >
          <p className="leading-[normal]">Lights</p>
        </div>
      </div>
      <div className="h-[42.84px] w-[32.608px]">
        <img 
          alt="Heart Bulb Logo" 
          className="block max-w-none size-full" 
          src="/assets/heart-bulb.svg" 
        />
      </div>
    </div>
  );
}

