import { addBasePath } from 'next/dist/next-server/lib/router/router'
import Header from '../components/english/header'
import Footer from '../components/english/footer'

function contact_us() {
    return <div>
            <Header />
                Contact Us Page 
            <Footer />
        </div>
}
export default contact_us