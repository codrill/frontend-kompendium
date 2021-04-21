export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    gtag: (command: 'config' | 'get' | 'set' | 'event', targetId: string, parameters: Record<string, unknown>) => void
  }
}

type EventParameters = {
  action: string
  category: string
  label: string
  value: number
}

// This should be used on page change, but we have single page right now.
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// TODO: Use it after adding filtering mechanism to check which category or tags are most popular
// example: category: tags, action: activate_filter, label: typescript
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventParameters): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
