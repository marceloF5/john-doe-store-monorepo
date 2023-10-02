import '../styles/globals.css'
import 'ds/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>{children}</body>
            </html>
        </ClerkProvider>
    )
}
