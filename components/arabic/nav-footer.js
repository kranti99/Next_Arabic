import Link from 'next/link'

function FooterMenu() {
    return (
            <ul>
                <li><Link href="/ar"><a href="#" title="title">الرئيسية</a></Link></li>
                
                <li><Link href="/ar/#loyality_programme_ar"><a title="title">نظام الولاء</a></Link></li>

                <li><Link href="/ar/#partner_ar"><a href="#" title="title">شركاؤنا</a></Link></li>
                <li><Link href="/ar/faq"><a href="#" title="title">أسئلة متكررة</a></Link></li>
                <li><Link href="/ar/contact_us"><a title="contact us">تواصل معنا</a></Link></li>
            </ul>         
    )
}
export default FooterMenu