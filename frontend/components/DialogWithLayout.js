import Link from 'next/link'
import BackButton from '@/components/BackButton'
import Dialog from '@/components/Dialog'

export default function DialogWithLayout({ closeUrl, showDialog, className, children }) {
  return (
    <Dialog
      className={className + ' scrollbar-hide'}
      closeUrl={closeUrl}
      showDialog={showDialog}
    >
      <div className="flex flex-col gap-[20px] p-[20px]">
        <Link href={closeUrl} scroll={false}>
          <BackButton />
        </Link>

        {children}
      </div>
    </Dialog>
  )
}
