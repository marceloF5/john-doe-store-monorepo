import { Button } from 'ds'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admin Dashboard',
}

export default function Home() {
    return (
        <div>
            <Button>Click me</Button>
        </div>
    )
}
