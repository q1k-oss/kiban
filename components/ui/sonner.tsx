"use client";

import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { Toaster as Sonner, toast, useSonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

type ActionableToastVariant = "success" | "error" | "warning" | "info";

interface ActionableToastOptions {
  title: string;
  description?: string;
  variant?: ActionableToastVariant;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const variantConfig: Record<
  ActionableToastVariant,
  { icon: React.ElementType; borderColor: string; progressColor: string; iconColor: string }
> = {
  success: {
    icon: CheckCircle2,
    borderColor: "#22c55e",
    progressColor: "#22c55e",
    iconColor: "#22c55e",
  },
  error: {
    icon: AlertCircle,
    borderColor: "#ef4444",
    progressColor: "#ef4444",
    iconColor: "#ef4444",
  },
  warning: {
    icon: AlertTriangle,
    borderColor: "#f59e0b",
    progressColor: "#f59e0b",
    iconColor: "#f59e0b",
  },
  info: {
    icon: Info,
    borderColor: "#3b82f6",
    progressColor: "#3b82f6",
    iconColor: "#3b82f6",
  },
};

const ActionableToastContent = ({
  id,
  title,
  description,
  variant = "success",
  duration = 5000,
  action,
}: ActionableToastOptions & { id: string | number }) => {
  const config = variantConfig[variant];
  const Icon = config.icon;
  const [paused, setPaused] = React.useState(false);
  const [remaining, setRemaining] = React.useState(duration);
  const startTimeRef = React.useRef(Date.now());
  const remainingAtPauseRef = React.useRef(duration);

  React.useEffect(() => {
    if (paused) {
      remainingAtPauseRef.current = remaining;
      return;
    }

    startTimeRef.current = Date.now();
    const startRemaining = remainingAtPauseRef.current;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const left = Math.max(0, startRemaining - elapsed);
      setRemaining(left);
      if (left <= 0) {
        clearInterval(interval);
        toast.dismiss(id);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [paused, id]);

  const progress = remaining / duration;
  const secondsLeft = Math.ceil(remaining / 1000);

  return (
    <div
      style={{
        width: 450,
        borderRadius: 12,
        background: `linear-gradient(to right, ${config.borderColor}0F 0%, #1e1e1e 50%)`,
        border: "1px solid rgba(255, 255, 255, 0.06)",
        borderLeft: `3px solid ${config.borderColor}`,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <Icon
            style={{ width: 20, height: 20, marginTop: 2, flexShrink: 0, color: config.iconColor }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontWeight: 600, color: "#ededed", fontSize: 15, margin: 0 }}>
              {title}
            </p>
            {description && (
              <p style={{ color: "#888", fontSize: 13, margin: "4px 0 0" }}>
                {description}
              </p>
            )}
            {action && (
              <button
                onClick={() => {
                  action.onClick();
                  toast.dismiss(id);
                }}
                style={{
                  marginTop: 12,
                  padding: "6px 14px",
                  fontSize: 12,
                  fontWeight: 500,
                  borderRadius: 6,
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#e0e0e0",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  cursor: "pointer",
                }}
              >
                {action.label}
              </button>
            )}
          </div>
          <button
            onClick={() => toast.dismiss(id)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255, 255, 255, 0.25)",
              cursor: "pointer",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <X style={{ width: 16, height: 16 }} />
          </button>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          padding: "8px 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 12, color: "#666", margin: 0 }}>
          {paused ? (
            <span>
              Paused.{" "}
              <button
                onClick={() => setPaused(false)}
                style={{
                  fontWeight: 600,
                  color: "#999",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  fontSize: 12,
                }}
              >
                Click to resume.
              </button>
            </span>
          ) : (
            <span>
              This message will close in {secondsLeft}s.{" "}
              <button
                onClick={() => setPaused(true)}
                style={{
                  fontWeight: 600,
                  color: "#ededed",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  fontSize: 12,
                }}
              >
                Click to stop.
              </button>
            </span>
          )}
        </p>
      </div>

      <div style={{ height: 3, width: "100%", background: "rgba(255, 255, 255, 0.04)" }}>
        <div
          style={{
            height: "100%",
            width: `${progress * 100}%`,
            background: config.progressColor,
          }}
        />
      </div>
    </div>
  );
};

const actionableToast = (options: ActionableToastOptions) => {
  const duration = options.duration ?? 5000;
  return toast.custom(
    (id) => <ActionableToastContent id={id} {...options} duration={duration} />,
    { duration: Infinity }
  );
};

const ClearAllButton = () => {
  const { toasts } = useSonner();
  const visibleToasts = toasts.filter((t) => t.dismiss !== true);

  if (visibleToasts.length < 2) return null;

  return (
    <button
      onClick={() => toast.dismiss()}
      style={{
        position: "fixed",
        top: 8,
        right: 24,
        zIndex: 999999999,
        display: "flex",
        alignItems: "center",
        gap: 6,
        borderRadius: 8,
        background: "#1e1e1e",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        padding: "6px 12px",
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.4)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
      }}
    >
      <X style={{ width: 12, height: 12 }} />
      Clear all
    </button>
  );
};

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <>
      <ClearAllButton />
      <Sonner
        theme={theme as ToasterProps["theme"]}
        className="toaster group"
        closeButton
        toastOptions={{
          duration: 5000,
        }}
        position="top-right"
        {...props}
      />
    </>
  );
};

export { Toaster, actionableToast };
