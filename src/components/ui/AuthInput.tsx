import * as React from "react";
import { cn } from "@/lib/utils";

export interface AuthInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
  ({ className, type, label, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-[44px] w-full rounded-sm border border-input bg-secondary px-2 pt-4 pb-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            className
          )}
          ref={ref}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(!!e.target.value);
            props.onBlur?.(e);
          }}
          onChange={(e) => {
            setHasValue(!!e.target.value);
            props.onChange?.(e);
          }}
          placeholder={label}
          {...props}
        />
        {label && (
          <label
            className={cn(
              "absolute left-2 transition-all duration-200 pointer-events-none text-muted-foreground",
              isFocused || hasValue
                ? "top-1 text-[10px]"
                : "top-1/2 -translate-y-1/2 text-xs"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
AuthInput.displayName = "AuthInput";

export { AuthInput };
