import Link from 'next/link'


function HeaderMenu() {
    return (<div> 

            <ul>
                <li><Link href="/"><a title="home">Home</a></Link></li>
                <li><a href="#" title="title">Loyalty Program</a></li>
                <li><a href="#" title="title">Partners</a></li>
                <li><Link href="/contact_us"><a title="contact us">Contact us</a></Link></li>
            </ul>
        </div>
    )
}
export default HeaderMenu