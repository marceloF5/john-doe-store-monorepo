'use client'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from './dialog'

type ModalProps = {
    title: string
    description: string
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal = ({
    title,
    isOpen,
    description,
    onClose,
    children,
}: ModalProps) => {
    const onChange = (open: boolean) => {
        if (!open) onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>{children}</div>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <button className="btn btn-primary">Close</button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Modal
