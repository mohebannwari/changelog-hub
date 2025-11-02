import Image from "next/image";

/**
 * Login Page Component
 * 
 * Main authentication page for ChangeHub.
 * Provides email/password login and OAuth options (Google, GitHub, SSO).
 * Design implements the Figma specs with proper spacing, colors, and effects.
 * 
 * Theme-aware assets:
 * - Light mode divider: 8bcda2fad49ba2c5c83e52a6e01c1eccb5f89061.svg (#D5D3D1)
 * - Dark mode divider: ca1fc214bed79b702d216c7eb69a3f4edb723bc3.svg (#282524)
 * - Light mode bottom divider: 5cca73c477aa324ac509234ac8bf57797909c525.svg
 * - Dark mode bottom divider: c6ba9e048a878dd9e3fce96e6c96af751538a8fe.svg
 * - Light mode SSO icon: b5dcee487a5d45ea96c0e13a4f448619a3a69eda.svg
 * - Dark mode SSO icon: 33916cf507bd030a8cbc3ba95b4032f198d88db3.svg
 */
export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full bg-[var(--bg-primary)] transition-colors duration-300">
      {/* Main container - centered vertically and horizontally */}
      <div className="absolute left-1/2 top-1/2 flex w-[312px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-7">
        
        {/* Logo and Title Section */}
        <div className="flex w-[180px] flex-col items-center gap-3">
          {/* Logo icon - orange circular design */}
          <div className="relative size-[40px] shrink-0">
            <Image
              alt="ChangeHub Logo"
              className="block size-full max-w-none"
              src="/assets/65b49caf2a2abb184da5f07ce2e31e381812525e.svg"
              width={40}
              height={40}
              priority
            />
          </div>
          
          {/* App title */}
          <h1 className="w-full text-center text-[32px] font-bold leading-[38px] tracking-[-0.2px] text-[var(--text-primary)] transition-colors duration-300">
            ChangeHub
          </h1>
        </div>

        {/* Login/Sign up Toggle Tabs */}
        <div className="flex w-full items-center justify-center gap-5 pb-0 pt-0">
          {/* Active tab: Log in (with underline decoration) */}
          <div className="flex items-center justify-center rounded-md px-3 py-1">
            <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[var(--text-primary)] underline decoration-solid underline-offset-[40%] transition-colors duration-300">
              Log in
            </p>
          </div>
          
          {/* Inactive tab: Sign up */}
          <div className="flex items-center justify-center rounded-md px-3 py-1">
            <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[var(--text-tertiary)] transition-colors duration-300">
              Sign up
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex w-full flex-col items-center gap-3">
          
          {/* Input Fields Container */}
          <div className="flex w-full flex-col items-start gap-[18px]">
            
            {/* Email Input Field */}
            <div className="flex w-full flex-col items-start">
              {/* Email label */}
              <div className="flex w-full items-center px-2 py-1">
                <p className="grow text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[var(--text-secondary)] transition-colors duration-300">
                  Email
                </p>
              </div>
              
              {/* Email input with placeholder */}
              <div className="flex h-[40px] w-full items-center gap-0 rounded-[8px] border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-3 transition-colors duration-300">
                <p className="text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[var(--text-placeholder)] transition-colors duration-300">
                  name@example.com
                </p>
              </div>
            </div>

            {/* Password Input Field */}
            <div className="flex w-full flex-col items-start">
              {/* Password label */}
              <div className="flex w-full items-center px-2 py-1">
                <p className="grow text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[var(--text-secondary)] transition-colors duration-300">
                  Password
                </p>
              </div>
              
              {/* Password input with masked dots */}
              <div className="flex h-[40px] w-full items-center gap-0 rounded-[8px] border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-3 transition-colors duration-300">
                <div className="relative h-[4.704px] w-[86.767px] shrink-0">
                  <Image
                    alt=""
                    className="block size-full max-w-none"
                    src="/assets/dc77497cdad332ed0b7901ba970b4665d6583fb6.svg"
                    width={87}
                    height={5}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sign In Button - black with white text */}
          <button className="flex h-[44px] w-full items-center justify-center gap-0 rounded-[8px] bg-[var(--bg-black-solid)] p-3 transition-colors duration-300">
            <p className="whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[var(--text-on-dark-color)] transition-colors duration-300">
              Sign in
            </p>
          </button>

          {/* Forgot Password Link - orange text */}
          <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[var(--text-warning-primary)] transition-colors duration-300">
            Forgot password?
          </p>
        </div>

        {/* Divider with "Or" text */}
        <div className="flex w-full items-center gap-4">
          {/* Left line - theme-aware */}
          <div className="relative h-0 w-[132px] shrink-0">
            <div className="absolute -bottom-[0.5px] left-0 right-0 -top-[0.5px]">
              {/* Light mode divider */}
              <Image
                alt=""
                className="block size-full max-w-none dark:hidden"
                src="/assets/8bcda2fad49ba2c5c83e52a6e01c1eccb5f89061.svg"
                width={132}
                height={1}
              />
              {/* Dark mode divider */}
              <Image
                alt=""
                className="hidden size-full max-w-none dark:block"
                src="/assets/ca1fc214bed79b702d216c7eb69a3f4edb723bc3.svg"
                width={132}
                height={1}
              />
            </div>
          </div>
          
          {/* "Or" text */}
          <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[var(--text-secondary)] transition-colors duration-300">
            Or
          </p>
          
          {/* Right line - theme-aware */}
          <div className="relative h-0 w-[132px] shrink-0">
            <div className="absolute -bottom-[0.5px] left-0 right-0 -top-[0.5px]">
              {/* Light mode divider */}
              <Image
                alt=""
                className="block size-full max-w-none dark:hidden"
                src="/assets/8bcda2fad49ba2c5c83e52a6e01c1eccb5f89061.svg"
                width={132}
                height={1}
              />
              {/* Dark mode divider */}
              <Image
                alt=""
                className="hidden size-full max-w-none dark:block"
                src="/assets/ca1fc214bed79b702d216c7eb69a3f4edb723bc3.svg"
                width={132}
                height={1}
              />
            </div>
          </div>
        </div>

        {/* OAuth Authentication Buttons Container */}
        <div className="flex w-full flex-col items-start gap-2">
          
          {/* Google Auth Button with "Last used" badge - overflow-hidden clips the button shadow */}
          <div className="relative w-full overflow-hidden rounded-[10px] border border-[var(--border-info-secondary)] bg-[var(--bg-info-primary)] p-[2px] transition-colors duration-300">
            <div className="flex w-full flex-col items-center gap-0">
              {/* "Last used" badge at top */}
              <div className="flex items-center justify-center px-2 py-1 pb-1 pt-[2px]">
                <p className="whitespace-pre text-nowrap text-[10px] font-semibold leading-[12px] tracking-[0px] text-[var(--text-info-primary)] transition-colors duration-300">
                  Last used
                </p>
              </div>
              
              {/* Google button with icon and text, includes shadow effect - overflow-hidden clips the blur effect */}
              <div className="relative flex h-[44px] w-full items-center justify-center gap-2 overflow-hidden rounded-[8px] bg-[var(--bg-secondary)] p-3 shadow-[0px_-1px_8px_0px_rgba(0,0,0,0.08),0px_22px_6px_0px_rgba(0,0,0,0),0px_14px_6px_0px_rgba(0,0,0,0.01),0px_8px_5px_0px_rgba(0,0,0,0.02),0px_4px_4px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.04)] transition-colors duration-300">
                {/* Ellipse effect overlay (decorative blur element) - positioned behind content */}
                <div className="pointer-events-none absolute left-[14px] top-[53.5px] h-[38px] w-[280px]">
                  <div className="absolute -bottom-[163.16%] -left-[21.43%] -right-[22.86%] -top-[163.16%]">
                    <Image
                      alt=""
                      className="block size-full max-w-none"
                      src="/assets/a5467e5c5ddadeffbfc40312cb06de8816094759.svg"
                      width={280}
                      height={38}
                    />
                  </div>
                </div>
                
                {/* Google icon - positioned above blur with z-index, brightness adjusted for dark mode */}
                <div className="relative z-10 size-[18px] shrink-0">
                  <Image
                    alt="Google"
                    className="icon-invert-dark block size-full max-w-none"
                    src="/assets/42dfafc4a97e1cd27f3a07fa1251ba5ae87dd572.svg"
                    width={18}
                    height={18}
                  />
                </div>
                
                {/* Button text - positioned above blur with z-index */}
                <p className="relative z-10 whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[var(--text-primary)] transition-colors duration-300">
                  Continue with Google
                </p>
              </div>
            </div>
          </div>

          {/* GitHub Auth Button - overflow-hidden clips the blur effect */}
          <div className="relative flex h-[44px] w-full items-center justify-center gap-2 overflow-hidden rounded-[8px] border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-3 transition-colors duration-300">
            {/* Progress dots effect overlay (decorative element) - positioned behind content */}
            <div className="pointer-events-none absolute left-[16px] top-[53.5px] h-[38px] w-[280px]">
              <div className="absolute -bottom-[163.16%] -left-[22.14%] -right-[22.14%] -top-[163.16%]">
                <Image
                  alt=""
                  className="block size-full max-w-none"
                  src="/assets/7eb97f5374b130c7344854c1aad50326e4a987df.svg"
                  width={280}
                  height={38}
                />
              </div>
            </div>
            
            {/* GitHub icon - positioned above blur with z-index, brightness adjusted for dark mode */}
            <div className="relative z-10 size-[18px] shrink-0">
              <Image
                alt="GitHub"
                className="icon-invert-dark block size-full max-w-none"
                src="/assets/9ad60ef89dccd90f0b0224548a5006e3df67199b.svg"
                width={18}
                height={18}
              />
            </div>
            
            {/* Button text - positioned above blur with z-index */}
            <p className="relative z-10 whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[var(--text-primary)] transition-colors duration-300">
              Continue with Github
            </p>
          </div>

          {/* SSO Auth Button */}
          <div className="flex h-[44px] w-full items-center justify-center gap-2 rounded-[10px] p-3 transition-colors duration-300">
            {/* Buildings/SSO icon - theme-aware */}
            <div className="relative size-[18px] shrink-0">
              {/* Light mode SSO icon */}
              <Image
                alt="SSO"
                className="block size-full max-w-none dark:hidden"
                src="/assets/b5dcee487a5d45ea96c0e13a4f448619a3a69eda.svg"
                width={18}
                height={18}
              />
              {/* Dark mode SSO icon */}
              <Image
                alt="SSO"
                className="hidden size-full max-w-none dark:block"
                src="/assets/33916cf507bd030a8cbc3ba95b4032f198d88db3.svg"
                width={18}
                height={18}
              />
            </div>
            
            {/* Button text */}
            <p className="whitespace-pre text-nowrap text-[16px] font-medium leading-[22px] tracking-[-0.18px] text-[var(--text-primary)] transition-colors duration-300">
              Continue with SSO
            </p>
          </div>
        </div>

        {/* Bottom Divider Line - theme-aware */}
        <div className="relative h-0 w-full shrink-0">
          <div className="absolute -bottom-[0.5px] left-0 right-0 -top-[0.5px]">
            {/* Light mode bottom divider */}
            <Image
              alt=""
              className="block size-full max-w-none dark:hidden"
              src="/assets/5cca73c477aa324ac509234ac8bf57797909c525.svg"
              width={312}
              height={1}
            />
            {/* Dark mode bottom divider */}
            <Image
              alt=""
              className="hidden size-full max-w-none dark:block"
              src="/assets/c6ba9e048a878dd9e3fce96e6c96af751538a8fe.svg"
              width={312}
              height={1}
            />
          </div>
        </div>

        {/* Footer Links - Privacy Policy and Terms of Service */}
        <div className="flex items-center gap-3">
          {/* Privacy policy link */}
          <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[var(--text-tertiary)] transition-colors duration-300">
            Privacy policy
          </p>
          
          {/* Separator line (rotated) */}
          <div className="flex h-[calc(1px*((12*0.8660253882408142)+(0*0.5000000596046448)))] w-[calc(1px*((0*0.8660253882408142)+(12*0.5000000596046448)))] items-center justify-center">
            <div className="flex-none rotate-120">
              <div className="relative h-0 w-[12px]">
                <div className="absolute bottom-0 left-0 right-0 -top-px">
                  <Image
                    alt=""
                    className="block size-full max-w-none"
                    src="/assets/e2ef51e7734e262e963a1e4eb31407d4efb63344.svg"
                    width={12}
                    height={1}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Terms of service link */}
          <p className="whitespace-pre text-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.16px] text-[var(--text-tertiary)] transition-colors duration-300">
            Terms of service
          </p>
        </div>
      </div>
    </div>
  );
}
