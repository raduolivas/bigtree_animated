import './Badge.css';

interface BadgeProps {
  text: string;
  className?: string;
}

export function Badge({ text, className = '' }: BadgeProps) {
  return (
    <span className={`badge ${className}`}>
      {text}
    </span>
  );
}
