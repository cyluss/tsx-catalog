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
import { Field, FieldLabel, FieldDescription, FieldError, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { FieldContent, FieldTitle } from '@/components/ui/field'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription } from '@/components/ui/popover'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Spinner as ShadSpinner } from '@/components/ui/spinner'
import { Textarea as ShadTextarea } from '@/components/ui/textarea'
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from '@/components/ui/table'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from '@/components/ui/empty'
import { toast } from 'sonner'

function useScrollSpy({ sectionElementRefs, scrollingElement }: {
  sectionElementRefs: React.RefObject<HTMLElement | null>[]
  scrollingElement: React.RefObject<HTMLElement | null>
}): number {
  const [activeSection, setActiveSection] = useState(0)
  useEffect(() => {
    const container = scrollingElement.current
    if (!container) return
    const ratios = new Map<HTMLElement, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target as HTMLElement, e.intersectionRatio))
        let bestIdx = 0, bestRatio = -1
        sectionElementRefs.forEach((ref, i) => {
          const r = ref.current ? (ratios.get(ref.current) ?? 0) : 0
          if (r > bestRatio) { bestRatio = r; bestIdx = i }
        })
        setActiveSection(bestIdx)
      },
      { root: container, threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sectionElementRefs.forEach((ref) => { if (ref.current) observer.observe(ref.current) })
    return () => observer.disconnect()
  }, [])
  return activeSection
}

const Shad = {
  Button: ShadButton, Badge: ShadBadge,
  Alert: ShadAlert, AlertTitle, AlertDescription,
  Card: ShadCard, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter,
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  Field, FieldLabel, FieldDescription, FieldError, FieldGroup, FieldContent, FieldTitle, Input,
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  Checkbox, RadioGroup, RadioGroupItem, Label,
  Switch,
  ButtonGroup, ButtonGroupSeparator, ButtonGroupText,
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
  Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription,
  Spinner: ShadSpinner,
  Textarea: ShadTextarea,
  Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption,
  Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia,
}

const scope = {
  React, Button, Alert, Badge, Spinner, RB, Shad, toast, useScrollSpy,
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
    const el = ref.current
    const sendHeight = () => {
      const height = Math.ceil(el.getBoundingClientRect().height)
      window.parent.postMessage({ type: 'height', islandId, height }, '*')
    }
    const ro = new ResizeObserver(sendHeight)
    ro.observe(el)
    window.addEventListener('resize', sendHeight)
    return () => { ro.disconnect(); window.removeEventListener('resize', sendHeight) }
  }, [code])

  if (!code) return null

  return (
    <div ref={ref}>
      <LiveProvider code={code} scope={scope} noInline={false}>
        <div style={{ padding: '1rem' }}>
          <LivePreview />
        </div>
        <LiveError style={{ padding: '0.5rem 1.5rem', color: '#dc2626', fontSize: '13px' }} />
      </LiveProvider>
    </div>
  )
}
