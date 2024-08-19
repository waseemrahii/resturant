import PrivacyItems from '../../components/Privacy/PrivacyItems'
import { privacyPolicyData } from '../../utils/Utils'

const Privacy = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <PrivacyItems policy={privacyPolicyData} />      
    </div>
  )
}

export default Privacy
