import Link from 'next/link'

function FooterMenu() {
    return (
            <ul>
                <li><Link href="/"><a title="home">Home</a></Link></li>
                <li><a href="#" title="title">Loyalty Program</a></li>
                <li><a href="#" title="title">Partners</a></li>
                <li><Link href="/faq"><a title="title">FAQ's</a></Link></li>
                <li><Link href="/contact_us"><a title="title">Contact us</a></Link></li>
            </ul>         
    )
}
export default FooterMenu