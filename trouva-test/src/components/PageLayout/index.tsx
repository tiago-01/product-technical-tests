import Header from '../Header'
import GlobalStyle from '@/../styles/GlobalStyle'
import Footer from '../Footer'
import { ContentWrapper } from '../ContentWrapper/style'

const PageLayout: React.FC = ({ children }) => {
  return (
    <div className="page-wraper">
      <GlobalStyle />
      <Header />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <Footer />
    </div>
  )
}
export default PageLayout
