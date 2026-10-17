import React, { useState } from 'react';
import { 
  X, 
  QrCode, 
  UserCheck, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface InteractiveWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveWorkflowModal: React.FC<InteractiveWorkflowModalProps> = ({
  isOpen,
  onClose
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [customerName, setCustomerName] = useState('Ayesha Khan');
  const [customerPhone, setCustomerPhone] = useState('555-0194');
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  if (!isOpen) return null;

  const validPin = '2025';

  const handleScanComplete = () => {
    setStep(2);
  };

  const handleIdentifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerName.trim() && customerPhone.trim()) {
      setStep(3);
    }
  };

  const handlePinInput = (digit: string) => {
    if (pin.length < 4) {
      const nextPin = pin + digit;
      setPin(nextPin);
      setPinError(false);

      if (nextPin.length === 4) {
        setIsVerifying(true);
        setTimeout(() => {
          setIsVerifying(false);
          // Accept 2025 or any 4 digits in demo mode to be delightful
          setStep(4);
          confetti({
            particleCount: 50,
            spread: 50,
            origin: { y: 0.6 }
          });
        }, 600);
      }
    }
  };

  const handleClearPin = () => {
    setPin('');
    setPinError(false);
  };

  const handleResetModal = () => {
    setStep(1);
    setPin('');
    setPinError(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#29483D]/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#FFFFFF] w-full max-w-lg rounded-3xl border border-[#E6E4DC] shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#F2EEE5] flex items-center justify-between bg-[#FAF8F3]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#91A894] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#29483D]">
              Workflow Sandbox · Step {step} of 4
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#747B73] hover:text-[#29332E] hover:bg-[#F2EEE5] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Tracker */}
        <div className="grid grid-cols-4 border-b border-[#F2EEE5] text-[11px] font-bold text-center">
          <div className={`py-2 border-b-2 transition-colors ${step >= 1 ? 'border-[#29483D] text-[#29483D] bg-[#F2EEE5]/40' : 'border-transparent text-[#747B73]'}`}>
            1. Scan QR
          </div>
          <div className={`py-2 border-b-2 transition-colors ${step >= 2 ? 'border-[#29483D] text-[#29483D] bg-[#F2EEE5]/40' : 'border-transparent text-[#747B73]'}`}>
            2. Identify
          </div>
          <div className={`py-2 border-b-2 transition-colors ${step >= 3 ? 'border-[#29483D] text-[#29483D] bg-[#F2EEE5]/40' : 'border-transparent text-[#747B73]'}`}>
            3. Staff PIN
          </div>
          <div className={`py-2 border-b-2 transition-colors ${step >= 4 ? 'border-[#29483D] text-[#29483D] bg-[#F2EEE5]/40' : 'border-transparent text-[#747B73]'}`}>
            4. Stamp Added
          </div>
        </div>

        {/* Modal Body: Dynamic Step Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* STEP 1: SCAN QR */}
          {step === 1 && (
            <div className="text-center space-y-5">
              <div className="max-w-xs mx-auto p-6 bg-[#FAF8F3] rounded-3xl border-2 border-dashed border-[#91A894] relative overflow-hidden group">
                <div className="w-32 h-32 mx-auto bg-[#FFFFFF] rounded-2xl p-3 shadow-inner flex items-center justify-center relative">
                  <QrCode className="w-24 h-24 text-[#29483D]" />
                  {/* Simulated scan laser */}
                  <div className="absolute left-2 right-2 h-0.5 bg-[#C6A875] animate-scan-line shadow-[0_0_8px_#C6A875]" />
                </div>
                <div className="mt-3">
                  <p className="text-xs font-bold text-[#29332E]">ZFH Counter QR Display</p>
                  <p className="text-[10px] text-[#747B73]">Point camera to open web passport</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#29332E]">
                  Customer Points Phone Camera
                </h3>
                <p className="text-xs text-[#747B73] max-w-sm mx-auto">
                  No app download is required. The phone camera instantly detects the counter QR code and opens the merchant's portal.
                </p>
              </div>

              <button
                type="button"
                onClick={handleScanComplete}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-[#FAF8F3] bg-[#29483D] hover:bg-[#1E372E] transition-colors cursor-pointer shadow-sm"
              >
                <span>Simulate Camera Scan Event</span>
                <ArrowRight className="w-4 h-4 text-[#C6A875]" />
              </button>
            </div>
          )}

          {/* STEP 2: IDENTIFY CUSTOMER */}
          {step === 2 && (
            <form onSubmit={handleIdentifySubmit} className="space-y-4">
              <div className="text-center space-y-1">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-center text-[#29483D]">
                  <UserCheck className="w-5 h-5 text-[#C6A875]" />
                </div>
                <h3 className="text-base font-bold text-[#29332E]">
                  Customer Identification
                </h3>
                <p className="text-xs text-[#747B73]">
                  A quick name and mobile number lookup retrieves the existing loyalty card.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="text-[11px] font-bold text-[#747B73] uppercase tracking-wider block mb-1">
                    Customer Full Name
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E4DC] text-sm text-[#29332E] focus:outline-none focus:ring-2 focus:ring-[#29483D]"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#747B73] uppercase tracking-wider block mb-1">
                    Phone Number (Identifier)
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E4DC] text-sm text-[#29332E] focus:outline-none focus:ring-2 focus:ring-[#29483D]"
                    placeholder="e.g. 555-0194"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-[#FAF8F3] bg-[#29483D] hover:bg-[#1E372E] transition-colors cursor-pointer shadow-sm mt-3"
              >
                <span>Find Loyalty Profile</span>
                <ArrowRight className="w-4 h-4 text-[#C6A875]" />
              </button>
            </form>
          )}

          {/* STEP 3: STAFF PIN VERIFICATION */}
          {step === 3 && (
            <div className="text-center space-y-4">
              <div className="space-y-1">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-center text-[#29483D]">
                  <ShieldCheck className="w-5 h-5 text-[#91A894]" />
                </div>
                <h3 className="text-base font-bold text-[#29332E]">
                  Counter Staff Verification
                </h3>
                <p className="text-xs text-[#747B73]">
                  Staff confirms payment and keys in the 4-digit venue PIN.
                </p>
              </div>

              {/* PIN Display */}
              <div className="flex justify-center gap-3 my-2">
                {[0, 1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className={`w-11 h-12 rounded-xl border-2 flex items-center justify-center text-lg font-bold ${
                      pin[idx]
                        ? 'border-[#29483D] bg-[#29483D] text-[#FAF8F3]'
                        : 'border-[#E6E4DC] bg-[#FAF8F3] text-transparent'
                    }`}
                  >
                    {pin[idx] ? '●' : ' '}
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#747B73]">
                Tip: Press any 4 numbers (or demo default: <span className="font-mono font-bold text-[#29483D]">{validPin}</span>)
              </p>

              {/* Number Keypad */}
              <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
                  <button
                    key={digit}
                    type="button"
                    onClick={() => handlePinInput(digit)}
                    disabled={isVerifying}
                    className="py-2.5 rounded-xl bg-[#FAF8F3] hover:bg-[#F2EEE5] active:scale-95 border border-[#E6E4DC] text-base font-semibold text-[#29332E] transition-all cursor-pointer"
                  >
                    {digit}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={handleClearPin}
                  className="py-2.5 rounded-xl bg-[#FAF8F3] hover:bg-[#F2EEE5] border border-[#E6E4DC] text-xs font-bold text-[#747B73] transition-all cursor-pointer"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => handlePinInput('0')}
                  disabled={isVerifying}
                  className="py-2.5 rounded-xl bg-[#FAF8F3] hover:bg-[#F2EEE5] active:scale-95 border border-[#E6E4DC] text-base font-semibold text-[#29332E] transition-all cursor-pointer"
                >
                  0
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // Quick autofill
                    setPin(validPin);
                    setIsVerifying(true);
                    setTimeout(() => {
                      setIsVerifying(false);
                      setStep(4);
                      confetti();
                    }, 500);
                  }}
                  className="py-2.5 rounded-xl bg-[#91A894]/20 hover:bg-[#91A894]/30 border border-[#91A894] text-xs font-bold text-[#29483D] transition-all cursor-pointer"
                >
                  Auto-Fill
                </button>
              </div>

              {pinError && (
                <p className="text-xs text-red-600 font-semibold">
                  Invalid PIN entered. Please try again.
                </p>
              )}
            </div>
          )}

          {/* STEP 4: EARN & REWARD READY */}
          {step === 4 && (
            <div className="text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-[#29483D] flex items-center justify-center text-[#FAF8F3] shadow-lg shadow-[#29483D]/20">
                <Check className="w-8 h-8 text-[#C6A875]" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#91A894]/20 text-[#29483D] border border-[#91A894]/40">
                  Visit Successfully Authorized
                </span>
                <h3 className="text-xl font-bold text-[#29332E]">
                  Stamp Credited to {customerName}
                </h3>
                <p className="text-xs text-[#747B73] max-w-sm mx-auto">
                  The loyalty card now reflects 7 of 10 visits. Fraud prevented by staff verification.
                </p>
              </div>

              {/* Visual simulated stamp receipt */}
              <div className="p-4 bg-[#FAF8F3] rounded-2xl border border-[#E6E4DC] text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#747B73]">Merchant:</span>
                  <span className="font-semibold text-[#29332E]">ZFH Demo Cafe</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#747B73]">Verified by Staff:</span>
                  <span className="font-semibold text-[#29332E]">Terminal #1 (PIN OK)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#747B73]">Progress:</span>
                  <span className="font-semibold text-[#29483D]">7 / 10 stamps (3 remaining)</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleResetModal}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl border border-[#E6E4DC] bg-[#FAF8F3] hover:bg-[#F2EEE5] text-xs font-semibold text-[#29332E] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Test Again</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-semibold text-[#FAF8F3] bg-[#29483D] hover:bg-[#1E372E] transition-colors cursor-pointer shadow-sm"
                >
                  <span>Close Sandbox</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 bg-[#FAF8F3] border-t border-[#F2EEE5] text-center">
          <p className="text-[11px] text-[#747B73]">
            Zenith Forge Hub workflow sandbox · Realistic verification demonstration
          </p>
        </div>
      </div>
    </div>
  );
};
