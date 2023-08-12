import '../styles/globals.css'
import 'ds/styles/globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="bg-zinc-800">
            <body>{children}</body>
        </html>
    )
}
