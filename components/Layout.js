import Link from 'next/link';

export default function Layout({children}) {
    return(
        <div className="layout">
            <header>
                <Link href="/">
                    <div>
                        <h1>
                            <span>Just Add</span>
                            <span>Marmite</span>
                        </h1>
                        <h2>Spread the Joy</h2>
                    </div>
                </Link>
            </header>

            <div className="page-content">
                {children}
            </div>

            <footer>
                <p>Copyright 2021 Just Add Marmite :)</p>
            </footer>
        </div>
    )
}