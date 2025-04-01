"use client"

import { useState } from "react"

interface Toast {
  message: string
  type: "success" | "error" | "info"
  id: number
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = {
    success: (message: string) => {
      const id = Date.now()
      setToasts((prev) => [...prev, { message, type: "success", id }])
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, 3000)
    },
    error: (message: string) => {
      const id = Date.now()
      setToasts((prev) => [...prev, { message, type: "error", id }])
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, 3000)
    },
    info: (message: string) => {
      const id = Date.now()
      setToasts((prev) => [...prev, { message, type: "info", id }])
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, 3000)
    }
  }

  return { toast, toasts }
} 