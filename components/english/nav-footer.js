import Link from 'next/link'

function FooterMenu() {
    return (
            <ul>
                <li><Link href="/contact_us"><a title="title">Contact us</a></Link></li>
                <li><Link href="/faq"><a title="title">FAQ's</a></Link></li>
                <li><Link href="/#partner"><a title="title">Partners</a></Link></li>
                <li><Link href="/#loyality_programme"><a title="Loyality program">Loyalty Program</a></Link></li>
                <li><Link href="/#home"><a title="home">Home</a></Link></li>
            </ul>         
    )
}
export default FooterMenu