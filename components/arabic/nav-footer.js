import Link from 'next/link'

function FooterMenu() {
    return (
            <ul>
                <li><Link href="/ar"><a href="#" title="title">الرئيسية</a></Link></li>
                
                <li><Link href="/ar/#loyality_programme_ar"><a href="#" title="title">نظام الولاء</a></Link></li>

                <li><a href="#" title="title">شركاؤنا</a></li>
                <li><a href="#" title="title">أسئلة متكررة</a></li>
                <li><Link href="/ar/contact_us"><a title="faq">تواصل معنا</a></Link></li>
            </ul>         
    )
}
export default FooterMenu