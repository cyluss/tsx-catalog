import { useState, useEffect, useRef } from 'react'
import { LiveProvider, LivePreview, LiveError } from 'react-live'
import React from 'react'
import { Button, Alert, Badge, Spinner } from './demo/stubs'
import * as RB from 'react-bootstrap'
import { Button as ShadButton } from '@/components/ui/button'
import { Badge as ShadBadge } from '@/components/ui/badge'
import { Alert as ShadAlert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Card as ShadCard, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from '@/components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const Shad = {
  Button: ShadButton, Badge: ShadBadge,
  Alert: ShadAlert, AlertTitle, AlertDescription,
  Card: ShadCard, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter,
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
}

const scope = {
  React, Button, Alert, Badge, Spinner, RB, Shad,
}

export default function PreviewApp() {
  const [code, setCode] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const islandId = new URLSearchParams(location.search).get('islandId') ?? ''
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === 'code' && e.data?.islandId === islandId) setCode(e.data.code)
    }
    window.addEventListener('message', onMessage)
    window.parent.postMessage({ type: 'ready', islandId }, '*')
    return () => window.removeEventListener('message', onMessage)
  }, [])

  useEffect(() => {
    if (!ref.current) return
    const islandId = new URLSearchParams(location.search).get('islandId') ?? ''
    const ro = new ResizeObserver((entries) => {
      const height = Math.ceil(entries[0].borderBoxSize?.[0]?.blockSize ?? entries[0].target.scrollHeight)
      window.parent.postMessage({ type: 'height', islandId, height }, '*')
    })
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [code])

  if (!code) return null

  return (
    <div ref={ref} style={{ padding: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <LiveProvider code={code} scope={scope} noInline={false}>
        <LivePreview />
        <LiveError />
      </LiveProvider>
    </div>
  )
}
