import React from 'react'

function Footer() {
    return (
        <footer className="text-black w-full py-4 px-4 shadow-md mt-auto md:py-0 border-t font-mono">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground
                md:text-left text-gray-600">
                    Build by{" "}
                    <a
                        href="https://github.com/Pabloszef"
                        target="_blank"
                        className="font-medium underline underline-offset-4"
                    >
                        Pablo
                    </a>
                    . The source code is available on{" "}
                    <a
                        href="https://github.com/Pabloszef/CodeSync"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </a>
                    .
                </p>
                <p className="text-center text-sm text-muted-foreground text-gray-600">
                    &copy; {new Date().getFullYear()} Stack Studio. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
