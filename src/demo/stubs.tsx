import type { ReactNode, ButtonHTMLAttributes } from 'react'

// ── Button ──────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'danger'

const buttonStyles: Record<ButtonVariant, string> = {
  primary:   'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50',
  danger:    'bg-red-600 text-white hover:bg-red-700',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  loading?: boolean
  children: ReactNode
}

export function Button({ variant = 'primary', loading, children, disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={[
        'inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors',
        buttonStyles[variant],
        (disabled || loading) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ].join(' ')}
    >
      {loading && (
        <span className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      )}
      {children}
    </button>
  )
}

// ── Alert ───────────────────────────────────────────────

type AlertVariant = 'danger' | 'success' | 'warning' | 'info'

const alertStyles: Record<AlertVariant, string> = {
  danger:  'bg-red-50 text-red-800 border-red-200',
  success: 'bg-green-50 text-green-800 border-green-200',
  warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
  info:    'bg-blue-50 text-blue-800 border-blue-200',
}

interface AlertProps {
  variant?: AlertVariant
  children: ReactNode
}

export function Alert({ variant = 'info', children }: AlertProps) {
  return (
    <div className={`border rounded-md px-4 py-3 text-sm ${alertStyles[variant]}`}>
      {children}
    </div>
  )
}

// ── Badge ───────────────────────────────────────────────

type BadgeVariant = 'success' | 'danger' | 'warning' | 'info'

const badgeStyles: Record<BadgeVariant, string> = {
  success: 'bg-green-100 text-green-800',
  danger:  'bg-red-100 text-red-800',
  warning: 'bg-yellow-100 text-yellow-800',
  info:    'bg-blue-100 text-blue-800',
}

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
}

export function Badge({ variant = 'info', children }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeStyles[variant]}`}>
      {children}
    </span>
  )
}

// ── Spinner ─────────────────────────────────────────────

interface SpinnerProps {
  size?: 'sm' | 'md'
}

export function Spinner({ size = 'md' }: SpinnerProps) {
  const sz = size === 'sm' ? 'w-4 h-4' : 'w-6 h-6'
  return (
    <span className={`inline-block ${sz} border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin`} />
  )
}
