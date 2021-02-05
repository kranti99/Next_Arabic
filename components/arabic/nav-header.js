import Link from 'next/link'


function HeaderMenu() {
    return (
        <div> 
            <ul>
                <li><Link href="/ar"><a title="title">الرئيسية</a></Link></li>
                <li><Link href="/ar/#loyality_programme_ar"><a href="#" title="title">نظام الولاء</a></Link></li>
                <li><Link href="/ar/#partner_ar"><a href="#" title="title">شركاؤنا</a></Link></li>
                <li><Link href="/ar/contact_us"><a>تواصل معنا</a></Link></li>
            </ul>
        </div>
    )
}
export default HeaderMenu