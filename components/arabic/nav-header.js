import Link from 'next/link'


function HeaderMenu() {
    return (
        <div> 
            <ul>
                <li><Link href="/ar/"><a title="title">الرئيسية</a></Link></li>
                <li><a href="#" title="title">نظام الولاء</a></li>
                <li><a href="#" title="title">شركاؤنا</a></li>
                <li><Link href="/ar/contact_us"><a>تواصل معنا</a></Link></li>
            </ul>
        </div>
    )
}
export default HeaderMenu