import './ScrollIndicator.css';

interface ScrollIndicatorProps {
  label: string;
}

export function ScrollIndicator({ label }: ScrollIndicatorProps) {
  return (
    <div className="scroll-indicator" role="presentation">
      <span className="scroll-indicator__label">{label}</span>
      <div className="scroll-indicator__line">
        <div className="scroll-indicator__dot" />
      </div>
    </div>
  );
}
