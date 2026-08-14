import { Tabs } from "./components/Tabs"
import type { TabsCopy } from "./i18n/copy/types"

export const TabsBlock = ({ copy }: { copy: TabsCopy }) => {
  return (
    <>
      <h2 className='text-2xl mb-3 font-bold font-display text-ink'>{copy.heading}</h2>
        <Tabs className="sticky top-1" copy={copy} />
    </>
  )
}
